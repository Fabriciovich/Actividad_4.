/* 1 */
const producto = {
    nombre: "Nombre del producto",
    precio: 10,
    cantidad: 2
};

function calcularTotal(producto) {
    return producto.precio * producto.cantidad;
}

const total = calcularTotal(producto);
console.log("Total a pagar:", total);

/* 2 */
const persona = {
    nombre: "Fabricio",
    edad: 21,
    profesion: "Software Development"
};

function presentarPersona(persona) {
    console.log("¡Hola! Soy", persona.nombre + ".");
    console.log("Tengo", persona.edad, "años.");
    console.log("Profesion:", persona.profesion + ".");
}
presentarPersona(persona);

/* 3 */
const persona1 = {
    nombre: "Fabricio",
    edad: 21,
    profesion: "Profesión: Software Development."
};

function esMayorEdad(persona1) {
    return persona1.edad >= 18;
}

const resultado = esMayorEdad(persona1);
console.log("¿Es mayor de edad?", resultado);
console.log("Nombre:", persona1.nombre);
console.log(persona1.profesion);



