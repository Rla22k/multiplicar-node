const argv = require('./config/yargs').argv;
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'listar': 
        console.log('Listar');
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear' : 
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            //.then(archivo => console.log(`Archivo creado: ${archivo} `))
            .then(archivo => console.log('Archivo creado:', colors.red(archivo)))
            .catch(err => console.log(err));    
        break;
    default: 
        console.log('Comando no reconocido');
}


// let base = parametro.split('=')[1];

// console.log(base);

