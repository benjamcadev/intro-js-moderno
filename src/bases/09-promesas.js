import { getHeroeById } from "./bases/08-imp-exp";
//LAS PROMESAS SE EJECUTAN CUANDO SE TERMINA TODO EL CODIGO SON ASYNC

//EL RESOLVE SE LLAMA UNA VEZ QUE EL CODIGO SE EJECUTA CORRECTAMENTE
//EL REJECT SE EJECUTA CUANDO HUBO ALGUN PROBLEMA
const promesa = new Promise((resolve,reject) => {

    setTimeout(() => {
        console.log('2 segundos');

        //TAREA: importar el 08-imp-exp.js
        const heroe = getHeroeById(2);
        console.log(heroe)
        resolve(heroe);
    },2000)
});

promesa.then((heroe) => {
    console.log('Then de la promesa:',heroe);
})
.catch(err => console.Console.warn(err));




//OTRA FORMA DE HACER UNA PROMESA

const getHeroeByIdAsync = (id) =>{

    return new Promise((resolve,reject) => {

        setTimeout(() => {
            console.log('2 segundos');
    
            //TAREA: importar el 08-imp-exp.js
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe); 
            }else{
               reject('No se pudo encontrar heroe'); 
            }
           
            
        },2000)
    });
    
    promesa.then((heroe) => {
        console.log('Then de la promesa:',heroe);
    })
    .catch(err => console.Console.warn(err));
}

getHeroeByIdAsync(4)
    .then(heroe => console.log('Heroe: ',heroe))
    .catch(err => console.warn(err))

