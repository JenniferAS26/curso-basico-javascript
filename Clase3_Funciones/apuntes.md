# FUNCIONES
- Son un conjunto de sentencias que nosotros podemos utilizar para generar ciertas acciones con los valores que ya guardamos antes en las variables

- Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento — un conjunto de instrucciones que realiza una tarea o calcula un valor, pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida donde hay alguna relación obvia entre la entrada y la salida. Para usar una función, debes definirla en algún lugar del ámbito desde el que deseas llamarla.

Hay dos tipos de funcion:
- Declarativa -> Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave function, seguida de:
    - El nombre de la función.
    - Una lista de parámetros de la función, entre paréntesis y separados por comas.
    - Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.
        Por ejemplo, el siguiente código define una función simple llamada square ("cuadrado"):
            /*
                function square(number) {
                    return number * number;
                }
            */
        La función square toma un parámetro, llamado number. La función consta de una declaración que dice devuelva el parámetro de la función (es decir, number) multiplicado por sí mismo. La instrucción return especifica el valor devuelto por la función:
            /*
                return number * number;
            */
        Los parámetros primitivos (como un number) se pasan a las funciones por valor; el valor se pasa a la función, pero si la función cambia el valor del parámetro, este cambio no se refleja globalmente ni en la función que llama.
        Si pasas un objeto (es decir, un valor no primitivo, como Array o un objeto definido por el usuario) como parámetro y la función cambia las propiedades del objeto, ese cambio es visible fuera de la función, como se muestra en el siguiente ejemplo:
            /*
                function myFunc(theObject) {
                    theObject.make = 'Toyota';
                }

                [parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
                var x, y;

                x = mycar.make; // x obtiene el valor "Honda"

                myFunc(mycar);
                y = mycar.make; // y obtiene el valor "Toyota"
                                // (la propiedad make fue cambiada por la función)
            */

- Si bien la declaración de función anterior sintácticamente es una declaración, las funciones también se pueden crear mediante una expresión function.
    - Expresion (funcion anonima) -> Creamos una variable que esta guardando una funcion
        Esta función puede ser anónima; no tiene por qué tener un nombre. Por ejemplo, la función square se podría haber definido como:
            /*
                const square = function(number) { return number * number }
                var x = square(4) // x obtiene el valor 16
            */
        - Sin embargo, puedes proporcionar un nombre con una expresión function. Proporcionar un nombre permite que la función se refiera a sí misma y también facilita la identificación de la función en el seguimiento de la pila de un depurador:
            /*
                const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) }

                console.log(factorial(3))
            */
        - Las expresiones function son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función map que debería recibir una función como primer argumento y un arreglo como segundo argumento.
            /*
                function map(f, a) {
                let result = []; // Crea un nuevo arreglo
                let i; // Declara una variable
                for (i = 0; i != a.length; i++)
                    result[i] = f(a[i]);
                return result;
                }
            */
        - En el siguiente código, la función recibe una función definida por una expresión de función y la ejecuta por cada elemento del arreglo recibido como segundo argumento.
            /*
                function map(f, a) {
                let result = []; // Crea un nuevo arreglo
                let i; // Declara una variable
                for (i = 0; i != a.length; i++)
                    result[i] = f(a[i]);
                return result;
                }
                const f = function(x) {
                return x * x * x;
                }
                let numbers = [0, 1, 2, 5, 10];
                let cube = map(f,numbers);
                console.log(cube);
            */ La función devuelve: [0, 1, 8, 125, 1000].
******************************************************************************
- Llamar funciones
    - Definir una función no la ejecuta. Definirla simplemente nombra la función y especifica qué hacer cuando se llama a la función.
    - Llamar a la función en realidad lleva a cabo las acciones especificadas con los parámetros indicados. Por ejemplo, si defines la función square, podrías llamarla de la siguiente manera:
        /* square(5); */
        - La declaración anterior llama a la función con un argumento de 5. La función ejecuta sus declaraciones y devuelve el valor 25.
    - Las funciones deben estar dentro del ámbito cuando se llaman, pero la declaración de la función se puede elevar (cuando aparece debajo de la llamada en el código), como en este ejemplo:
        /*
            console.log(square(5));
            /* ... */
            function square(n) { return n * n }
        */

- Ámbito de function
    - No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función, porque la variable se define solo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que está definida.
    - En otras palabras, una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global. Una función definida dentro de otra función también puede acceder a todas las variables definidas en su función principal y a cualquier otra variable a la que tenga acceso la función principal.
        /*
            // Las siguientes variables se definen en el ámbito global
            var num1 = 20,
                num2 = 3,
                name = 'Chamahk';

            // Esta función está definida en el ámbito global
            function multiply() {
            return num1 * num2;
            }

            multiply(); // Devuelve 60

            // Un ejemplo de función anidada
            function getScore() {
            var num1 = 2,
                num2 = 3;

            function add() {
                return name + ' anotó ' + (num1 + num2);
            }

            return add();
            }

            getScore(); // Devuelve "Chamahk anotó 5"
        */

- Ámbito y la pila de funciones
    - Recursión
        - Una función se puede referir y llamarse a sí misma. Hay tres formas de que una función se refiera a sí misma:
            - El nombre de la función
            - arguments.callee
            - Una variable dentro del ámbito que se refiere a la función
        - Por ejemplo, considera la siguiente definición de función:
            /*
                var foo = function bar() {
                // las instrucciones van aquí
                }
            */
        - Dentro del cuerpo de la función, todos los siguientes son equivalentes:
            - bar()
            - arguments.callee()
            - foo()
        - Una función que se llama a sí misma se conoce como una función recursiva. En cierto modo, la recursividad es análoga a un bucle. Ambas ejecutan el mismo código varias veces y ambas requieren una condición (para evitar un bucle infinito, o más bien, una recursividad infinita en este caso).
        Por ejemplo, el siguiente bucle...
            /*
                var x = 0;
                while (x < 10) { // "x < 10" es la condición del bucle
                // hacer cosas
                x++;
                }
            */

*****************************************************************************

