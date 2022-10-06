const nombre = "Carlos"
const apellido = "Garnacho"

//const nombreCompleto = nombre + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es el texto devuelto por la funcion getSaludo: ${ getSaludo(nombreCompleto) }`);