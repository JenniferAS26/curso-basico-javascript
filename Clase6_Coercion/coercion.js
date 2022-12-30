/** COERCION -> Cambiar de un tipo de valor a otro tipo de valor
 *  Hay dos tipos de COERCIONES, implicitas y explicitas
 *      IMPLICITAS -> Es cuando el  lenguaje nos ayuda y cambia de un tipo de valor a otro
 *      EXPLICITA -> La forma en que nosotros obligamos que un tipo de valor cambie a otro distinto
 */

// coercion implicita
var a = 4 + "7"; // como estamos usando el simbolo "+" se esta formando una concatenacion "4"+"7" 47
typeof(a); // string

var b = 4 * "7"; // como estamos usando el simbolo "*" se esta formando suma matematica, 4*7 = 28
typeof(b); // Number

var a = 20;
var b = a + "";
console.log(b);
typeof(b);

var c = String(a); // coercion explicita
typeof(c);

var d = Number(c); // coercion explicita
typeof(d);