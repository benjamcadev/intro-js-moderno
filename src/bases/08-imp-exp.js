//import {heroes} from './data/heroes.js';

import {heroes} from "./data/heroes";

console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id )
};


console.log(getHeroeById(2));


const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner )
};

console.log(getHeroesByOwner('DC'));