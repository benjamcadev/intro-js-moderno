
const personajes = ['Goku','Vegeta','Trunks'];


//console.log(personajes)

//SI SOLO QUIERO IMPRIMIR A GOKU
const [pers1] = personajes;
console.log(pers1);


//COMO IMPRIMIR A VEGETA
const [ ,p2] = personajes;
console.log(p2);

const retornaArreglo = () =>{
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras,numeros);


// Tarea

const usarState = (valor) => {
    return [valor, () =>{console.log('Hola Mundo')}];
}

const [nombre , setNombre] = usarState('Goku');

setNombre();


