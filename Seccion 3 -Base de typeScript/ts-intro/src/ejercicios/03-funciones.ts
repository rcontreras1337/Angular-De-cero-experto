
/*
    ===== Código de TypeScript =====
*/
// indicamos los datos que recibe y que tipo devuleve
// funcion normal
function sumar(a: number, b: number): number{
    return a + b;
}

// funcion de flecha
const SUMAR_FLECHA = (a: number, b: number): number => {
    return a + b;
}

// Las funciones llevan el orden de parametro obligatorio
// parametro opcional ?, seguido de un parametro definido por defecto
function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHP: (a?: number) => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {

    personaje.pv += curarX; 
    console.log(personaje);
    // Toda funcion en javascript retorna undefined por defecto
    // por lo tanto aunque sea void retonara eso
}

// si creamos un objeto que no cambia como constante
// no se deberan crear los getter and setters
const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strinder',
    pv: 100,
    mostrarHP(){
        console.log(this.pv);
    }
}

curar(nuevoPersonaje, 100);
// const RESULTADO: number = sumar(10, 29);
// console.log(RESULTADO);