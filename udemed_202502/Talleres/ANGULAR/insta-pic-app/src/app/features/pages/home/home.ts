import { Component, inject, OnInit, signal } from '@angular/core';
import { Auth } from '../../../shared/services/auth';
import { UserService } from '../../../shared/services/user-service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{

  authService = inject(Auth);
  userService = inject(UserService);

  followers = 48;
  requests = 37;
  username = this.authService.getUserLogged().username;
  user = this.userService.getUser(this.username);
  galleryItems = signal([]);

    ngOnInit(): void {
      try {
        throw new Error('Home con problemas. (inicializacion)');
        /* const user = this.userService.getUser(this.username);
          if(user){
            this.galleryItems.set(user.gallery)
          }*/
      } catch (error) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: (error as Error).message || 'Ocurrio el siguiente error.',
            confirmButtonText: 'Ok'
          });
                      }
    }

}
