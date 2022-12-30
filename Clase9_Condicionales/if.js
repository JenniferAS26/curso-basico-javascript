/*
    Las condicionales son estas eglas que vamos a aplicar nosotros para poder validar si algo es verdadero o falso y podamos generar ciertas acciones con estas
 */

    /*if (true) { // esta condicion dentro de los parentesis DEBE ser VERDAD
        console.log("Hola");
    } else { // valida si es falso
        console.log("Soy falso");
    }*/


var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, sera tu primera votacion");
} else if (edad > 18) { // sino
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
}

/* OPERADOR TERNARIO
    SINTAXIS -> condicion ? verdadero : falso
*/

var numero = 1;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy un uno"

/* Reto: hacer un juego de piedra, papel o tijera
    -> Vamos a tener que generar variables: piedra, papel o tijera
    -> Vamos a tener que generar una funcion, donde le pase el parametro con lo que voy a jugar
            Vamos a jugar contra la maquina, si tu variable le gana a la variable que la maquina haya seleccionado
            y regrese como resultado si gana o pirder
        vamos a dividir este reto en pasos:
            1. Generar variables, una funcion y adentro de la funcion una validacion
                -> validar cual variable le gana a cual y regresar "Ganaste o Perdiste"
            2. Encapsular en una funcion con mi parametro y empiece a validar mi parametro dentro de esas condiciones
*/