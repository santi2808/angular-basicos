import { Component } from "@angular/core";



@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
}

)

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 50

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    ObtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`
    }

    cambiarNombre(){
        this.nombre = 'Spiderman';
    }

    cambiarEdad(){
        this.edad = 51
    }

}