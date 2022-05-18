
/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}
class Hero extends PersonaNormal{
    // private alterEgo: string; // solo visible dentro de esta clase
    // public edad: number; // Visible fuera de la clase
    // static nombreReal: string; // se puede acceder al valor sin crear una instancia de la clase

    constructor(
        public alterEgo: string, 
        public edad: number, 
        public nombreReal: string
        ){
            super(nombreReal, 'tupapala');
        }
}

// Hero.nombreReal; se accede sin inicializar STATIC
const IRONMAN: Hero = new Hero('hola',45,'a');
// IRONMAN.edad; se accede porque es publica
console.log(IRONMAN);