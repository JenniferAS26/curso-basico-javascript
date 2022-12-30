/** Scope
 *      es el alcance que tienen las variables, existen dos tipos de Scope el Global y el Local
 *          SCOPE GLOBAL -> Es un todo
 *          SCOPE LOCAL -> Es un mini universo dentro de este SCOPE GLOBAL, puede acceder lo que esta en global
 *
 */

// Scope Global-> vana existir todas las variables, validaciones, todas las funciones que nosotros tengamos
var nombre = "Karen";

// Scope Local-> Solo lo que esta dentro de la funcion va a tener acceso a eso mismo, en este scope puedo tener acceso a las variables que estan en SCOPE GLOBAL
function fun() {
    var apellido = "Acevedo";
    return nombre + " " + apellido;
}