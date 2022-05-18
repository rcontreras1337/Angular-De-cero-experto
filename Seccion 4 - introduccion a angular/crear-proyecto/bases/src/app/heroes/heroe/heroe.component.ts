import { Component } from '@angular/core';

@Component({
    selector: 'app-heore',
    templateUrl: 'heroe.coponent.html'
})
export class HeroeComponent{

    nombre: string = 'Iron Man';
    edad: number = 45;

    // Las propiedades salen en azul con rectangulo, las funciones salen en morado
    // con un cuadrado
    get nombreCapitalizado(): string{
        return this.nombre.toLocaleUpperCase();
    }

    obtenerNombre(): string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(){
        this.nombre = 'SpiderMan';
    }

    cambiarEdad(){
        this.edad = 30;
    }
}