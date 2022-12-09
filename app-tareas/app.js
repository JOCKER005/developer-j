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
        console.log("Atencion - Tenes que pasar una Accion/Key\n");
    } else if ( get === 'crear' ){
        console.log('Logeado en CREAR');
        if (process.argv[3] === undefined ) {
            console.log("\nNo has pasado ninguna tarea para agregar. \nDeberias colocar la tarea entre ' ', luego de la palabra crear.\n")
        } else{
            let addJson = {titulo : process.argv[3], estado: "Pendiente"};
            console.log("La Tarea : '" + process.argv[3] + "'\nse ha añadido con exito\n y se encuentraa PENDIENTE\n" )
            adquisicion.push(addJson);
            let jsonProducts = JSON.stringify(adquisicion);
            fs.writeFileSync(rutaJson, jsonProducts, null, 2);
            // console.log(adquisicion); prueba exitosa
        } 
    } else {
        console.log("No entiendo que quieres hacer - Las Acciones disponibles son listar y crear\n ");
    }
}

loop(get);
// console.log(get);
// llamanda a la accion
