
/*
    ===== Código de TypeScript =====
*/
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;


}

const SUPER_HEROE: SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre+ ', ' + this.direccion.ciudad
        + ', ' + this.direccion.pais;
    }
}

const DIRECCION = SUPER_HEROE.mostrarDireccion();
console.log(DIRECCION);