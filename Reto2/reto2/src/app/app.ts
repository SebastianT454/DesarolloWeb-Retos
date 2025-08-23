import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('reto2');

  jugador1 = { nombre: '', vida: 100 };
  jugador2 = { nombre: '', vida: 100 };
  turnoActual: number = 1;
  colorTurno: string = 'blue';

  constructor() {
    // Se obtienen los nombres de los jugadores
    const nombre1 = prompt("Ingrese el nombre del Jugador 1");
    const nombre2 = prompt("Ingrese el nombre del Jugador 2");
    
    if (!nombre1 || !nombre2) {
      location.reload();
      return;
    }
    
    this.jugador1.nombre = nombre1;
    this.jugador2.nombre = nombre2;
  }

  jugar(): void {
    const vidaAReducir: number = Math.floor(Math.random() * 15);
    
    if (this.turnoActual === 1) {
      this.jugador1.vida -= vidaAReducir;
      this.turnoActual = 2;
      this.colorTurno = 'red';
    } else {
      this.jugador2.vida -= vidaAReducir;
      this.turnoActual = 1;
      this.colorTurno = 'blue';
    }

    // Verificar si algún jugador ha perdido
    if (this.jugador1.vida <= 0) {
      alert(`Jugador ${this.turnoActual} con nombre ${this.jugador2.nombre} ha perdido!`);
      location.reload();
    } else if (this.jugador2.vida <= 0) {
      alert(`Jugador ${this.turnoActual} con nombre ${this.jugador1.nombre} ha perdido!`);
      location.reload();
    }
  }

  // Actualizar el label donde se visualiza el jugador y turno actuales, get sirve para
  // Que este metodo sea accesible por cualquier elemento HTML.
  get textoTurno(): string {
    const jugadorActual = this.turnoActual === 1 ? this.jugador1 : this.jugador2;
    return `Turno del jugador ${this.turnoActual} - ${jugadorActual.nombre}`;
  }
}