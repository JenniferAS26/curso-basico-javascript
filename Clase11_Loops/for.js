/* Un Ciclo es una manera rapida y sencilla de hacer que una tarea pueda repetirse y no se tenga que hacer de manera manual
    Cuantas formas de ciclos tenemos:

*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

//   variable i, mientras i sea menor a la longitud de estudiantes i se va a incrementar por un numero
for (var i = 0; i < estudiantes.length; i++) {
    // console.log(estudiantes[i]);
    saludarEstudiantes(estudiantes[i]);
}


// Otra forma for of

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}