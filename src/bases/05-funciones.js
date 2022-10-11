// Funciones

/*function saludar(nombre){
    return `Hola, ${nombre}`;
}*/

//Hacer lo mismo pero mas seguro creo

const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

//FUNCIONES DE FLECHA

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

//OTRAS MANERAS DE ESCRIBIR FUNCION DE FLECHAS

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => 'Hola Mundo';



//DEFINIR UNA FUNCION QUE ME RETORNE UN OBJECTO

const getUser = () => ({
    uid: '2354',
    username: 'ElPapi'
});

console.log(getUser())


//TAREA
// TRANFORMAR A FUNCION DE FLECHA y tiene que devolver un objeto

function getUsuarioActivo(nombre){
    return{
        uid: '123',
        username: nombre
    }
};

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);


//TAREA HECHA
const getUsuarioActivo2 = (nombre) => (
    {
        uid: '123',
        username: nombre 
    }
);

console.log(getUsuarioActivo2('Benjamin Tamo activo'))





//console.log(saludar('Goku'));

