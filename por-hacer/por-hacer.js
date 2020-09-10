const fs = require('fs');

let listadoPorHacer = [];


const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (error) => {

        if(error) throw new Error('No se pudo guardar la informacion ', error);

    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');        
    } catch (error) {
        listadoPorHacer = [];
    }

};


const getListado = ( completado ) => {

    if( completado === 'false' || completado === 'true' ){
        let convertirBoolean = (completado === 'false') ? false : true;
        cargarDB();
        listadoPorHacer = listadoPorHacer.filter( tarea => tarea.completado === convertirBoolean);
        return listadoPorHacer;
    } 
    else { 
        console.log('XD');
        cargarDB();
        return listadoPorHacer; 
    }

    
}


const crear = ( descripcion ) => {

    cargarDB();

    let porHacer = {
        descripcion, 
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;

}


const actualizar = ( descripcion, completado = true ) => {
    
    cargarDB();

    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

} 

const borrar = ( descripcion ) => {
    
    cargarDB();

    let nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion !== descripcion);

    if(nuevoListado.length === listadoPorHacer.length){
        return false
    } else{
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }

    

}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}