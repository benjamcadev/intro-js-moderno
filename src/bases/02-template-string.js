const nombre = 'Benjamin';
const apellido = 'Cortes';


// CONCATENAR VARIABLES


//Esto es lo mismo, podemos hacer enters e incluso ejecutar operaciones numericas de js
//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre)}`);