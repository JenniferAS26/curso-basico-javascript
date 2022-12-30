/* Array -> es una estructura de datos o lista de datos que va a guardar ciertos valores
    numeros, objetos, strings
*/

var frutas = ["manzana", "banano", "cereza", "fresa"];

console.log(frutas);

console.log(frutas.length); // pasa saber su longitud

// para acceder uno a uno
console.log(frutas[2]);

// metodos que nos ayudan a mutar

// agregar mas elementos
var masFrutas = frutas.push("uvas"); // Va a empujar un elemento al final del array variable.push

var ultimo = frutas.pop("uvas"); // eliminar el ultimo elemento del array



var nuevaLongitud = frutas.unshift("mango"); // agregar un nuevo elemento a nuestro array al inicio
var borrarFruta = frutas.shift("mango"); // para eliminar el elemento que este al inicio

// para saber la posicion de un elemento
var posicion = frutas.indexOf("cereza");

/*
    .push()
        El método .push() nos permite agregar uno o más elementos al final de un array.

        A continuación veremos un ejemplo aplicado con un array que contiene números:

    .shift()
        Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.
        Como vemos, luego de aplicar .shift() se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase

    Bonus Track
        Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞. El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Usemos el mismo ejemplo pero usando este método.

*/
