
/*
    ===== Código de TypeScript =====
*/

let habilidad: string[] = ['Bash','Counter','Healing'];

interface Personaje{ // Serie de llaves para asegurarnos
    // de que un objeto luzca como queremos
    // LAS INTERFACES NO EXISTEN AL MOMENTO DE COMPILAR EL CODIGO
    // A JAVASCRIPT, SOLO SIRVEN COMO SCAFOLDING
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; // es opcional
}

const PERSONAJE: Personaje = { // objeto
    nombre : 'Strider',
    hp: 100,
    habilidades: ['Bash','Counter','Healing'],
}

PERSONAJE.puebloNatal = 'Pueblo Paleta';

console.table(PERSONAJE);