import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Obtenido del AuthGuard, por eso esta en el orden AuthGuard, RoleGuard
    
    if (!user) {
      throw new ForbiddenException("Usuario no autenticado");
    }

    const userId = request.body['userId'] || request.params['id'];
    if (userId && userId !== user.id) {
      throw new ForbiddenException("No tienes permisos para esta accion");
    }

    return true;
  }
}