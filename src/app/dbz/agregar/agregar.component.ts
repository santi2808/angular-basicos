import { Component, Input, Output } from '@angular/core';

import { Personaje } from '../interfac/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
})
export class AgregarComponent  {

@Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzservice:DbzService ) {}

 // @Output() NuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();


  agregar() {
    if ( this.nuevo.nombre.trim().length === 0 ) { return; }
      
      
      //this.NuevoPersonaje.emit( this.nuevo );
      this.dbzservice.agregarPersonaje( this.nuevo );

      
      this.nuevo = {
      nombre: '',
      poder: 0
      }

    }


  

}
