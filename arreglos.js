/* 1 */
function obtenerSuma(arreglo) {
    let suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
}

let numeros = [8, 14, 6, 12, 10];
let resultado = obtenerSuma(numeros);
console.log(resultado);

/* 2 */
function obtenerPares(arreglo) {
    let pares = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 === 0) {
            pares.push(arreglo[i]);
        }
    }
    return pares;
}

let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = obtenerPares(numeros1);
console.log(pares);

/* 3 */
function obtenerPromedioPonderado(notas, pesos) {
    if (notas.length !== pesos.length) {
        throw new Error('Los arreglos deben tener la misma longitud');
    }
    let sumaNotas = 0;
    let sumaPesos = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i] * pesos[i];
        sumaPesos += pesos[i];
    }
    let promedioPonderado = sumaNotas / sumaPesos;
    return promedioPonderado;
}

let notas = [8, 7, 9, 6];
let pesos = [0.3, 0.2, 0.4, 0.1];
let resultado1 = obtenerPromedioPonderado(notas, pesos);
console.log(resultado1);

/* 4 */
function obtenerMaximo(arreglo) {
    let maximo = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > maximo) {
            maximo = arreglo[i];
        }
    }
    return maximo;
}

let numeros2 = [14, 35, 20, 24, 10, 43];
let maximo = obtenerMaximo(numeros2);
console.log(maximo);


