# VARIABLES
- Sirven para guardar un espacio en memoria
- Es la representacion de algun lugar en memoria que nosotros vamos reservar para guardar un valor
///////////////////////////////////////
- Pueden teber diferentes tipos (tres)
    - var ->
        Declara una variable, opcionalmente la inicia a un valor.
        reserva un espacio en memoria para guardar un valor
    - let ->
        Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.
    - const ->
        Declara un nombre de constante de solo lectura y ámbito de bloque.

- Hay dos estados de una variable
    - declarar
        Le decimos a JS al navegador que me genere un espacio de memoria y despues le asignamos el valor
            var edad;
    - inicializar -> se le asigna un valor
        edad = 30;

******************************************************************
- NOTAS
    - Utiliza variables como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados identificadores, se ajustan a ciertas reglas.
        - Un identificador de JavaScript debe comenzar con una letra, un guión bajo (_) o un signo de dólar ($). Los siguientes caracteres también pueden ser dígitos (0-9).
        - Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "A" a "Z" (mayúsculas), así como "a" a "z" (minúsculas).
        - Puedes utilizar la mayoría de las letras ISO 8859-1 o Unicode como å y ü en los identificadores. También puedes usar Secuencias de escape Unicode como caracteres en identificadores.
        - Algunos ejemplos de nombres legales son Number_hits, temp99, $credit y _name.

    - Declaración de variables -> Puedes declarar una variable de dos formas:
        - Con la palabra clave var. Por ejemplo, var x = 42. Esta sintaxis se puede utilizar para declarar variables locales y globales, dependiendo del contexto de ejecución.
        - Con la palabra clave const o let. Por ejemplo, let y = 13. Esta sintaxis se puede utilizar para declarar una variable local con ámbito de bloque.

        - También puedes simplemente asignar un valor a una variable. Por ejemplo, x = 42. Este formulario crea una variable global no declarada. También genera una advertencia estricta de JavaScript. Las variables globales no declaradas a menudo pueden provocar un comportamiento inesperado. Por lo tanto, se desaconseja utilizar variables globales no declaradas.

    - Evaluar variables
     - Una variable declarada usando la instrucción var o let sin un valor asignado especificado tiene el valor de undefined.
     - Un intento de acceder a una variable no declarada da como resultado el disparo de una excepción ReferenceError:
        - /*
            var a;
            console.log('El valor de a es ' + a); // El valor de a es undefined

            console.log('El valor de b es ' + b); // El valor de b es undefined
            var b;
            // Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

            console.log('El valor de c es ' + c); // Error de referencia no detectado: c no está definida

            let x;
            console.log('El valor de x es ' + x); // El valor de x es undefined

            console.log('El valor de y es ' + y); // Error de referencia no detectada: y no está definida
            let y;
            */
     - Puedes usar undefined para determinar si una variable tiene un valor. En el siguiente código, a la variable input no se le asigna un valor y la declaración if evalúa a true.
        /*
            var input;
            if (input === undefined) {
            doThis();
            } else {
            doThat();
            }
        */
     - El valor undefined se comporta como false cuando se usa en un contexto booleano. Por ejemplo, el siguiente código ejecuta la función myFunction porque el elemento myArray es undefined:
        /*
            var myArray = [];
            if (!myArray[0]) myFunction();

        */
     - El valor undefined se convierte en NaN cuando se usa en contexto numérico.
        /*
            var a;
            a + 2;  // Evalúa a NaN
        */
     - Cuando evalúas una variable null, el valor nulo se comporta como 0 en contextos numéricos y como false en contextos booleanos. Por ejemplo:
        /*
            var n = null;
            console.log(n * 32); // Registrará 0 en la consola

        */

    - Ámbito de variables
        - Cuando declaras una variable fuera de cualquier función, se denomina variable global, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable local, porque solo está disponible dentro de esa función.
        - JavaScript anterior a ECMAScript 2015 no tiene el ámbito de la declaración de bloque. Más bien, una variable declarada dentro de un bloque es local a la función (o ámbito global) en el que reside el bloque.
        - Por ejemplo, el siguiente código registrará 5, porque el ámbito de x es el contexto global (o el contexto de la función si el código es parte de una función). El ámbito de x no se limita al bloque de instrucciones if inmediato.
            /*
                if (true) {
                var x = 5;
                }
                console.log(x);  // x es 5
            */
        - Este comportamiento cambia cuando se usa la declaración let (introducida en ECMAScript 2015).
            /*
                if (true) {
                let y = 5;
                }
                console.log(y); // ReferenceError: y no está definida
            */
