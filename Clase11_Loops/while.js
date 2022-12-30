/* WHILE */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function salufarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0 ) { // mientras la longitud del array sea mayor que cero se tiene que cumplir este ciclo
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); // va a generar una variable que va a ir sacando datos
    salufarEstudiantes(estudiante)
}