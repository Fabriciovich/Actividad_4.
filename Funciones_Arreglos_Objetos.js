/* 1 */
function verificarNumero(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es 0.";
    }
}

const numeroIngresado = parseFloat(prompt("Ingresa un número:"));

const mensaje = verificarNumero(numeroIngresado);
console.log(mensaje);

/* 2 */
function esPrimo(numero1) {
    if (numero1 <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero1); i++) {
        if (numero1 % i === 0) {
            return false;
        }
    }
    return true;
}

const numeroIngresado1 = parseInt(prompt("Ingresa un número:"));

const mensaje1 = esPrimo(numeroIngresado1) ? "El número es primo." : "El número no es primo.";
console.log(mensaje1);

/* 3 */
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

const temperatura = parseFloat(prompt("Ingresa la temperatura a convertir:"));
const opcion = prompt("¿A qué unidad deseas convertir la temperatura? 1-CELSIUS 2-FAHRENHEIT");

let resultado;
if (opcion === "1") {
    resultado = celsiusToFahrenheit(temperatura);
    console.log(`${temperatura}°C equivale a ${resultado}°F.`);
} else if (opcion === "2") {
    resultado = fahrenheitToCelsius(temperatura);
    console.log(`${temperatura}°F equivale a ${resultado}°C.`);
} else {
    console.log("Opción inválida. Por favor, selecciona 1 para Celsius o 2 para Fahrenheit.");
}


