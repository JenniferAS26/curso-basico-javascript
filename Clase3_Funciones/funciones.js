/**
 * Funciones
 * Las funciones son un conjunto de sentencias que podemos utilizar para realizar ciertas acciones, conjunto de tareas, regresar, validar...
 * una funcion puede necesitar parametros
 */

/** FUNCIONES DECLARATIVAS */

function miFuncion() { // voy a usar el nombre de la funcion para guardar un espacio en memoria
    return 3;
}
miFuncion();

/** FUNCIONES DE EXPRESION o funcion ANONIMA */

var miFuncion = function(a, b) {
    return a + b;
}

// como mandamos a llamar una funcion expresiva
miFuncion();

/**
 * Diferencias:
        A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

        Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
 */

function saludarEstudiantes (estudiante) {
    console.log(`Hola ${estudiante}`);
}

saludarEstudiantes("Jenn");

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

sumar(2,3);