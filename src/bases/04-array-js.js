

//ARREGLOS O ARRAYS
const arreglo = new Array();

//CON TAMAÑO DEFINIDO
const arreglo2 = new Array(100);

//OTRA FORMA DE CREARLO
const arreglo3 = [];
arreglo3.push(1);
arreglo3.push(2);
arreglo3.push(3);
arreglo3.push(4);

//const arreglo3 = [1,2,3,4];

let arreglo4 = [arreglo3];


console.log(arreglo3);

//COPIANDO DATOS DEL ARREGLO3
console.log(...arreglo3, 5);

//QUIERO MULTIPLICAR LOS VALORES DEL ARREGLO

const arregloMulti = arreglo3.map( function(numero){
    return numero * 2;
});

console.log(arregloMulti);