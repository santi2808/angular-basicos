import { Injectable } from '@angular/core';
import { Personaje } from '../interfac/dbz.interface';




@Injectable()
export class DbzService {


     public _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder:10000
        },

        {
            nombre: 'Vegeta',
            poder:9500
        },
    ];

    get personajes ()  {
        return [...this.personajes];
    }

    constructor () {
    }

    agregarPersonaje( personaje: Personaje ) {
        this._personajes.push( personaje );

    }
}