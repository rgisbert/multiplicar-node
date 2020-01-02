const promesa = (nombre) => {
    return new Promise((resolve, reject) => {
        if (nombre.length <= 3) {
            reject('(PROMESA) La longitud debe ser mayor a 3');
            return;
        }

        resolve(`(PROMESA) Hola ${nombre}.`);
    });
};


const es7 = async(nombre) => {
    if (nombre.length <= 3) throw new Error ('(ASYNC) La longitud debe ser mayor a 3.');
    return `(ASYNC) Hola ${nombre}.`;
};

const nombre = 'Ra';

promesa(nombre)
    .then(saludo => console.log(saludo))
    .catch(err => console.log(err));

es7(nombre)
    .then(saludo => console.log(saludo))
    .catch(err => console.log(err));
