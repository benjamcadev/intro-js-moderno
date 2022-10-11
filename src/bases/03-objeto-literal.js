

//OBJETOS LITERALES
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 54564,
        lat: 45684,
        lng: 4864
    }
};

console.log(persona);

//PARA VERLO MEJOR COMO UNA TABLA
//console.table(persona);


//ESTO NO HACE UNA COPIA, HACE UNA REFERENCIA AL PRIMER OBJECTO
const persona2 = persona;


//PARA HACER UNA COPIA CORRECTA DE UN OBJECTO ES ASI
const persona3 = {...persona};


