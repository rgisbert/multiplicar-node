const fs = require('fs'); //Doc de nodejs.org > Docs > FileSystem
const colors = require('colors');

const listarTabla = async (base, limite) => {
    if (isNaN(base) || isNaN(limite)) {
        throw new Error('Tanto base como límite deben ser números');
    }

    try {
        let tabla = `Tabla del ${base} (de 1 hasta ${limite})\n`.green;

        for (let i = 1; i <= limite; i++) {
            tabla += `${base} * ${i} = ${base * i}\n`;
        }

        return tabla;
    } catch (error) {
        throw new Error (error);
    }
};

const crearArchivo = (base, limite) => {
    return new Promise ((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }

        let data = '';
        let nombre_archivo = `tabla-del-${base}-al-${limite}.txt`;

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/${nombre_archivo}`, data, (err) => {
            if (err) reject(err);
            else resolve(`${nombre_archivo}`);
        });
    });

    // if (!Number(base)) {
    //     throw new Error(`El valor introducido ${base} no es un número.`);
    // }

    // let data = '';

    // for (let i = 1; i <= 10; i++) {
    //     data += `${base} * ${i} = ${base * i}\n`;
    // }

    // fs.writeFile(`tablas/tabla-del-${base}.txt`, data, (err) => {
    //     if (err) throw new Error (err);
    //     else return `tabla-del-${base}.txt`;
    // });
};

module.exports = {
    crearArchivo,
    listarTabla
};
