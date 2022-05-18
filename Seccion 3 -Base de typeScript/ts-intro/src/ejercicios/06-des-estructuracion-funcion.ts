
/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string;
    precio: number
}

const telefono : Producto = {
    desc: 'Px',
    precio: 160
}
const tableta : Producto = {
    desc: 'Pxs',
    precio: 1604
}

// function calculaISV(productos: Producto[]): number{

//     let total: number = 0;
//     productos.forEach((producto, i) => {
//         total += producto.precio;
//         console.log(i);
//     });
    
//     return total*0.15;
// }
// const ARTICULOS: Producto[] = [ telefono, tableta];
// const ISV = calculaISV(ARTICULOS);

// console.log(ISV);
// DES TRUCTURAR CON LLAVES EN EL FOREACH
export function calculaISV(productos: Producto[]): [number, number]{
    let total: number = 0;
    productos.forEach(({precio}, i) => {
        total += precio;
        console.log(i);
    });
    return [total, total*0.15];
}

const ARTICULOS: Producto[] = [ telefono, tableta];
const [total, isv] = calculaISV(ARTICULOS);

console.log("Total ",total);
console.log("ISV: ", isv);
