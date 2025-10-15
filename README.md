# Desarrollo Web - Retos
# Retos realizados en la materia Desarrollo de aplicaciones web - Sebastián Tamayo Avendaño.

Para el Reto7 se debia refactorizar el AuthGuard y el RoleGuard por lo tanto, se le dio las siguientes funcionalidades a cada uno:

* AuthGuard: Solo autentica y verifica que el JWT sea valido y extrae el payload del usuario para adjuntarlo a la request.
* RoleGuard: Solo autoriza usando el usuario ya autenticado del AuthGuard, verifica permisos especificos (idealmente roles), pero en nuestro caso como no trabajamos con ningun tipo de rol entonces, hacemos la verificacion ya hecha en clase que consistia en que si el request lo estaba haciendo el propietario original del token, para evitar que un usuario diferente este haciendo un request a otro.