const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado una tarea o pendiente de la tarea'
};


const argv = require('yargs')
        .command('listar', 'Lista todas las tareas que tengamos, o usa el filtro de completado',{
            completado: {
                alias: 'c',
                desc: 'Filtro de tareas como completadas o no'
            }
        })
        .command("crear", "Crea una nueva tarea",  {
            descripcion
        })
        .command('actualizar', 'Actualiza el estado completo de una tarea', {
            descripcion,
            completado
        })
        .command('borrar', 'Borra un elemento de las tareas', {
            descripcion
        }).help().argv;



module.exports = {
    argv
}