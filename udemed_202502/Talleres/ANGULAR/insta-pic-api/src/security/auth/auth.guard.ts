import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getToken } from '../utils/token-utils';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];
    
    if (!token) {
      throw new ForbiddenException("Sesion no autorizada");
    }

    try {
      const payload = this.jwtService.verify(getToken(token));
      // Adjuntamos el usuario a la request para otros Guards.
      request.user = payload;
    } catch (error) {
      throw new ForbiddenException("Sesion expirada");
    }
    
    return true;
  }
}