/* 1) */
function esMayorEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

let edad1 = 20;
let resultado1 = esMayorEdad(edad1);
console.log(resultado1);

let edad2 = 15;
let resultado2 = esMayorEdad(edad2);
console.log(resultado2);

/* 2) */
function calcularAreaRectangulo(base, altura) {
    var area = base * altura;
    return area;
}

let base = 7;
let altura = 4;
let resultado = calcularAreaRectangulo(base, altura);
console.log(resultado);

/* 3)*/
function esPalindromo(cadena) {
    cadena = cadena.toLowerCase().replace(/\s/g, '');

    let reverso = cadena.split('').reverse().join('');
    return cadena === reverso;
}

let cadena1 = 'reconocer';
let resultado3 = esPalindromo(cadena1);
console.log(resultado3);

let cadena2 = 'adios';
let resultado4 = esPalindromo(cadena2);
console.log(resultado4);

/* 4) */
function generarNumeroAleatorio() {
    let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    return numeroAleatorio;
}

let resultado5 = generarNumeroAleatorio();
console.log(resultado5);


