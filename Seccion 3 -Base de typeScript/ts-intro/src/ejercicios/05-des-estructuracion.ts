
/*
    ===== Código de TypeScript =====
*/
interface Reproductor {
    volumen : number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const REPRODUCTOR: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

console.log('El Volumen actual es: ', REPRODUCTOR.volumen);
console.log('El segundo de actual es: ', REPRODUCTOR.segundo);
console.log('La cancion actual es: ', REPRODUCTOR.cancion);
console.log('El autor es: ', REPRODUCTOR.detalles.autor);

// Destructurar
// toma el objeto reproducto y me interesan las propiedas
// que defino dentro de las llaves
const {volumen, segundo, cancion, detalles} = REPRODUCTOR;
const {autor} = detalles;
console.log('El Volumen actual es: ', volumen);
console.log('El segundo de actual es: ', segundo);
console.log('La cancion actual es: ', cancion);
console.log('El autor es: ', autor);

const DBZ: string[] = ['Gooku','Vegeta','Trunks'];
// van en orden del arreglo y se quiere una posicion
// se deben poner las comas en orden simulanto el arreglo hasta la pos
// que se quiere poner con nombre
const [ , ,p3] = DBZ;

console.log(DBZ[0]);
console.log(p3);
console.log(DBZ[2]);