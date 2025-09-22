import { Component, inject, OnInit, OnDestroy, OnChanges, SimpleChanges, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, signal } from '@angular/core';
import { Auth } from '../../../shared/services/auth';
import { UserService } from '../../../shared/services/user-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {

  authService = inject(Auth);
  userService = inject(UserService);

  followers = 48;
  requests = 37;
  username = this.authService.getUserLogged().username;
  user = this.userService.getUser(this.username);
  galleryItems = signal([]);

  // Ciclos de vida de ejecucion de un componente.

  // Este se ejecuta primero, cuando el componente se instancia.
  constructor() {
    console.log('1. Constructor - Componente instanciado');
  }

  // Se ejecuta cuando hay cambios en las propiedades de entrada (@Input)
  // SimpleChanges es un objeto que recibe la funcion ngOnChanges para analizar los objetos que
  // Cambiaron en un componente o directiva.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('2. ngOnChanges - Propiedades de entrada cambiaron', changes);
  }

  // Se ejecuta después de que Angular inicializa las propiedades del componente
  ngOnInit(): void {
    console.log('3. ngOnInit - Componente inicializado');
  }

  // Se ejecuta después de que Angular proyecta contenido externo en la vista
  ngAfterContentInit(): void {
    console.log('4. ngAfterContentInit - Contenido proyectado inicializado');
  }

  // Se ejecuta después de cada verificación del contenido proyectado
  ngAfterContentChecked(): void {
    console.log('5. ngAfterContentChecked - Contenido proyectado verificado');
  }

  // Se ejecuta después de que Angular inicializa las vistas del componente y sus hijos
  ngAfterViewInit(): void {
    console.log('6. ngAfterViewInit - Vista y vistas hijas inicializadas');
  }

  // Se ejecuta después de cada verificación de las vistas del componente y sus hijos
  ngAfterViewChecked(): void {
    console.log('7. ngAfterViewChecked - Vista y vistas hijas verificadas');
  }

  // Se ejecuta antes de que Angular destruya el componente
  ngOnDestroy(): void {
    console.log('8. ngOnDestroy - Componente destruido');
  }
}
