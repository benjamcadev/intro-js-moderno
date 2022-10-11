
//DESESTRUCTURACION DE OBJETOS


const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//CLASICAMENTE SE OCUPA ASI PARA ACCEDER A UN OBJETO
console.log(persona.nombre)


const {nombre} = persona; //QUIERE DECIR QUE EXTRAE SOLO NOMBRE DEL OBJETO
const {nombre:nombre2} = persona; //RENOMBRAR LA CONSTANTE
const {edad,clave} = persona; //IMPRIMIR VARIOS VALORES

console.log(nombre);

console.log(nombre2);

console.log(edad,clave);



//EXTRAYENDO VALORES DENTRO DE UNA FUNCION

const retornaPersona = ({nombre, edad, rango = 'Capitan'}) => { //SI EL OBJETO NO TIENE EL RANGO SE PUEDE SETEAR PO DEFAULT ALGUNA

    console.log(nombre,edad,rango);
}

retornaPersona(persona);

const usarContext = ({nombre, edad, rango = 'Capitan',clave}) => { //SI EL OBJETO NO TIENE EL RANGO SE PUEDE SETEAR PO DEFAULT ALGUNA

    return {
        nombreClave: clave,
        anios: edad,
        lating: {
            lat: 14.235,
            lng: -12.456
        }
    }
}

const {nombreClave,anios,lating} = usarContext(persona);
const {lat,lng} = lating;

console.log(nombreClave,anios);
console.log(lating);
console.log(lat,lng);



