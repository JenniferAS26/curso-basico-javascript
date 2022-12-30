/** HOISTING
 *      Cuando las variables y la funciones se declaran antes de que se procese cualquier tipo de codigo
 *      Esto solo pasa con las versiones anteriores de ECMAscript 5 hacia abajo
 *      solo sucede con dos palabras clave -> var y function
 */

var miNombre;
miNombre = "Jennifer";

console.log(miNombre);
var miNombre = "Jennifer";

/** Hoisting con funciones */

hey();
function hey() {
    console.log("Hola " + miNombre);
}

var miNombre = "Jennifer";

/** Por buenas practicas todas las funciones que vayamos a usar en el codigo se deben declarar al inicio del codigo */