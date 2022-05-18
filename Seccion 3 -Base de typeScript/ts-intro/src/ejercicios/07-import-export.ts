
/*
    ===== Código de TypeScript =====
*/

import { calculaISV, Producto } from "./06-des-estructuracion-funcion";

const CARRITO: Producto[] = [
    {
        desc:'hola',
        precio: 190
    },
    {
        desc:'hola2',
        precio: 1900
    },
    {
        desc:'hola3',
        precio: 1900
    }
];

// destructurado
const [total, isv] = calculaISV(CARRITO);
console.log("Total ",total);
console.log("ISV: ", isv);