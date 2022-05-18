
/*
    ===== Código de TypeScript =====
*/
// Retorna generico segun lo que necesitemos xd
function queTipoSoy<T>(argumenteo: T) {
    return argumenteo;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero= queTipoSoy(30);
let soyArray = queTipoSoy([1,2,34,3423]);
let soyExplicito = queTipoSoy<number>(423);
