# ARRAYS []
* Son una estructura de datos de tipo objeto
    - Es un valor que va a guardar mas valores adentro
    - Lista de datos que va a guardar ciertos valores
* Para generar un array:
    - var nombreDeLaVariable = [elemento1, elemento2, ...];

## Como conocer si el array tiene elementos en su interior si yo no lo genere
- lenght -> cuantos elementos tiene el array
    * nombreDelArray.lenght

## Como acceder a cada uno de los elementos
- nombreDelArray[posicion];

## Cuando hablamos de arrays estamos hablando de dos tipos de elementos que son METODOS
- Mutar el contenido del array
    * push -> Va a "empujar" elementos al final del array
        - var masElementos = nombreDelArray.push(elementoNuevo);
    * pop -> Va a eliminar el ultimo elemento que existe en el array
        - var lastElemento = nombreDelArray.pop(elementoNuevo);
    * unshift -> Nos agrega un nuevo elemento al inicio del array
        - var firstElement = nombreDelArray.unshift("nuevoElementoAlInicio);
    * shift -> Nos sirve para eliminar el elemento que este al inicio
        - var deleteFirstElemento = nombreDelArray.shift();
- Saber la posicion del elemento
    * indexOf
        - var posicion = nombreDelArray.indexOf(elementoParticular);