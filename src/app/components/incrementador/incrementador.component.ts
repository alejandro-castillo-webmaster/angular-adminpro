import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit{

  ngOnInit() {
    this.btnClass = `btn ${ this.btnClass }`;
  }

  @Input() btnClass: string = 'btn-primary';

  // Recibimos l propiedad desde el padre llamada progreso
  @Input('valor') progreso: number = 50;

  // Emitimos el valor de la propiedad del hijo al padre
  @Output('valor') valorSalida: EventEmitter<number> = new EventEmitter();

  // Cuando pulsamos el botón de más o menos progress bar
  cambiarValor(valor: number) {

    if (this.progreso >= 100 && valor >= 0) {
      // Emitimos el valor al componente padre
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      // Emitimos el valor al componente padre
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor;
    // Emitimos el valor al componente padre
    this.valorSalida.emit(this.progreso);
    return;

  }

  // Cuando escribimos en el input un valor
  onChange( nuevoValor: number ){
    
    // Condiciones
    if( nuevoValor >= 100 ) {
      this.progreso = 100;
    } else if ( nuevoValor <= 0 ) {
      this.progreso = 0;
    } else {
      this.progreso = nuevoValor;
    }

    
    // Emitimos el valor al componente padre
    this.valorSalida.emit( this.progreso );
  }


  /////
}
