/**
 * REQUIREDS
 * 
 * Hay 3 tipos:
 *  1) Una librería propia instalada desde el principio en node. La defino y ya está: require('fs)
 *  2) Una librería instalada por mi. Ej. Express
 *  3) Archivos creados por mi, en mi proyecto. Definición de ruta por ./ ../ etc.
 */

const {argv} = require('./config/yargs');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

// console.log(module);
// console.log(process);
// console.log(process.argv);

/*
Con este código realmente comlicado hacer:
    node app crear listar --base 10 --limite=20
        Donde:
            crear:  crea, o no, el txt para guardarlo en la bd
            listar: muestra la tabla creada
            base:   tabla el {número}. Notar que pone espacio 10 (no =)
            limite: hasta donde quiero llegar. Aquí si hay =

let parametro = process.argv[2];
let base = parametro.split('=')[1];
*/

// console.log(argv);

switch(argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}.`))
            .catch(err => console.log(`ERROR AL CREAR EL ARCHIVO: ${err}.`));
        break;
    default: 
        console.log('Comando no reconocido');
}


