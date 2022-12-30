# OPERADORES
## ¿Que son los operadores?
Las variables por sí solas son de poca utilidad. Para hacer programas realmente útiles, son necesarias otro tipo de herramientas.
Los operadores permiten manipular el valor de las variables, realizar operaciones matemáticas con sus valores y comparar diferentes variables. De esta forma, los operadores permiten a los programas realizar cálculos complejos y tomar decisiones lógicas en función de comparaciones y otros tipos de condiciones.

- Matemáticos -> nos ayudan a hacer operaciones matematicas
    - JavaScript permite realizar manipulaciones matemáticas sobre el valor de las variables numéricas. Los operadores definidos son: suma (+), resta (-), multiplicación (*) y división (/). Ejemplo:
    - Operadores Binarios
        * 3 + 2
        * 50 - 10
        * 10 + 20
        * 20 / 2
            tambien son conocidos como operadores BINARIOS
            No solamente se emplean con números
            "Jennifer " + "Alarcon" -> genera una concatenación
    - Operadores de asignacion ->
        - El operador de asignación es el más utilizado y el más sencillo. Este operador se utiliza para guardar un valor específico en una variable. El símbolo utilizado es =
            - A la izquierda del operador, siempre debe indicarse el nombre de una variable. A la derecha del operador, se pueden indicar variables, valores, condiciones lógicas, etc:
                * var a = 1
    - Operadores de comparacion
            3 == "3" -> compara los valores no tanto los tipos //true
            3 === "3" -> tipos y valores exactamente iguales
            5 < 3 // false
            5 > 3 // true
            5 <= 6 // true
            5 >= 6 // false

    - Operadores unitarios
        - Negación
            - Uno de los operadores lógicos más utilizados es el de la negación. Se utiliza para obtener el valor contrario al valor de la variable:
                *   var visible = true;
                    alert(!visible);  // Muestra "false" y no "true"
                    ! -> negacion
                ---------------------------
                |  VARIABLE  | !VARIABLE  |
                ---------------------------
                |   true     |   false    |
                ---------------------------
                |   false    |   true     |
                ---------------------------

- Operadores de validación
    - AND: La operación lógica AND obtiene su resultado combinando dos valores booleanos. El operador se indica mediante el símbolo && y su resultado solamente es true si los dos operandos son true:
        * a && b -> AND ambos se deben cumplir si a es verdad y b es verdad se va a cumplir esa condicion

        ------------------------------------------------------
        | VARIABLE-1 | VARIABLE-2 | VARIABLE-1 && VARIABLE-2 |
        ------------------------------------------------------
        |   true     |   true     |           true           |
        ------------------------------------------------------
        |   true     |   false    |           false          |
        ------------------------------------------------------
        |   false    |   true     |           false          |
        ------------------------------------------------------
        |   false    |   false    |           false          |
        ------------------------------------------------------
    - La operación lógica OR también combina dos valores booleanos. El operador se indica mediante el símbolo || y su resultado es true si alguno de los dos operandos es true:
        * a || b -> OR para que se puede cumplir una condicion donde alguno de los dos es  falso

        ------------------------------------------------------
        | VARIABLE-1 | VARIABLE-2 | VARIABLE-1 || VARIABLE-2 |
        ------------------------------------------------------
        |   true     |   true     |           true           |
        ------------------------------------------------------
        |   true     |   false    |           true           |
        ------------------------------------------------------
        |   false    |   true     |           true           |
        ------------------------------------------------------
        |   false    |   false    |           false          |
        ------------------------------------------------------

- Incremento y decremento
    - Estos dos operadores solamente son válidos para las variables numéricas y se utilizan para incrementar o decrementar en una unidad el valor de una variable.
        * Ej:   var numero = 5;
                ++numero;
                alert(numero);  // numero = 6
    - CARACTERES
        ++ aumentar por uno ->  var edad = 40
                                    edad++ //41
        += aumentar por mas de uno -> edad += 2 //43
        - El operador de incremento se indica mediante el prefijo ++ en el nombre de la variable. El resultado es que el valor de esa variable se incrementa en una unidad. Por tanto, el anterior ejemplo es equivalente a:
            * Ej:   var numero = 5;
                    numero = numero + 1;
                    alert(numero);  // numero = 6
        - De forma equivalente, el operador decremento (indicado como un prefijo -- en el nombre de la variable) se utiliza para decrementar el valor de la variable:
            * Ej:   var numero = 5;
                    --numero;
                    alert(numero);  // numero = 4
            * Ej:   var numero = 5;
                    numero = numero - 1;
                    alert(numero);  // numero = 4
        - Los operadores de incremento y decremento no solamente se pueden indicar como prefijo del nombre de la variable, sino que también es posible utilizarlos como sufijo. En este caso, su comportamiento es similar pero muy diferente. En el siguiente ejemplo:
            * Ej:   numero++
                    numero--
        ## NOTA
            Si el operador ++ se indica como prefijo del identificador de la variable, su valor se incrementa antes de realizar cualquier otra operación. Si el operador ++ se indica como sufijo del identificador de la variable, su valor se incrementa después de ejecutar la sentencia en la que aparece.
 - Lógicos
    - Los operadores lógicos son imprescindibles para realizar aplicaciones complejas, ya que se utilizan para tomar decisiones sobre las instrucciones que debería ejecutar el programa en función de ciertas condiciones. 
    - El resultado de cualquier operación que utilice operadores lógicos siempre es un valor lógico o booleano.