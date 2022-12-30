/* Otra forma de validar una condicion
        Funciona por casos, si el caso el verdad lo valida
*/

var numero = 1;

switch (numero) {
    case 1:
        console.log("Soy uno!");
        break; // no va a dejar que pase a los siguientes casos
    case 10:
        console.log("Soy un 10!");
        break;
    case 100:
        console.log("Soy un 100!");
        break;
    default:
        console.log("No soy nada");
        break;
}