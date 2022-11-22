// importando componenetes necesarios
const path = require('path');
const fs = require('fs');

// verificacion de coneccion

console.log('\nconectado en la app \n');

// creando los componentes previos para su ejecucion

const rutaJson = path.resolve(__dirname, 'data/objetos.json'); //confirmado

const adquisicion = JSON.parse(fs.readFileSync(rutaJson, {encoding: 'utf-8'})); //confirmado 
// console.log(adquisicion); 
const get = process.argv[2]; //confirmado

function loop (get){
    if (get === 'listar' ){ 
        adquisicion.forEach(element => {
            console.log("* " + element.titulo);
            console.log("  - " + element.estado);
        }); //confirmado
    } else if (get === undefined) {
        console.log("Atencion - Tenes que pasar una Accion/Key");
    } else {
        console.log("No entiendo que quieres hacer - La Accion disponible es listar ");
    }
}

loop(get);
// console.log(get);
// llamanda a la accion
