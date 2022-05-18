/*
    ===== Código de TypeScript =====
*/


interface Pasajero {
  nombre: string;
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre: 'Fernando'
}

const pasajero2: Pasajero = {
  nombre: 'Melissa',
  hijos: ['Natalia','Gabriel']
}


function imprimeHijos( pasajero: Pasajero ): void {

  // Con el signo de interrogacion va a evaluar
  // si se puede realizar esto
  // luego decimos que si existen hijos dara el length sino  
  // le dara el valor de 0
  const cuantosHijos = pasajero.hijos?.length || 0;
  
  console.log( cuantosHijos );

}


imprimeHijos( pasajero1 );