var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "TV", costo: 2500 },
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 15000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Sofa", costo: 4000 },
    { nombre: "Cama", costo: 5000 },
    { nombre: "Batidora", costo: 17000 },
    { nombre: "Audifonos", costo: 1700 }
];

// Metodos para recorrer un array

// Filter -> me va a ayudar a filtrar cosas, va a validar si algo es verdadero o falso y lo va a meter en un nuevo array y no va a modificar el array original

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// map -> me va a ayudar a mapear ciertos articulos, mapea todo el contenido del array y nos trae justo lo que estamos buscando

var nombreArticulo = articulos.map(function(articulo) {
    return articulo.nombre
});

// find -> para encontrar algo dentro de el array, no va a modificar el array, va a validar un true o un false

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

// foreach -> no genera un nuevo array, hace el filtrado sobre el que tenemos y me devuelve cosas

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// some -> regresa una validacion de verdadero o falso para articulos que cumplan

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});

// .push() ->  nos permite agregar uno o más elementos al final de un array.