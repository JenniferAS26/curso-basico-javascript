var jugador;
var maquina; // inicializar la maquina

function juego(jugador) {
    if (jugador == "piedra" && maquina == "tijera" || jugador == "tijera" && maquina == "papel" || jugador == "papel" && maquina == "piedra") {
        resultado = "Ganaste"
        return resultado;
    } else if (jugador === maquina) {
        resultado = "Empate";
        return resultado;
    } else {
        resultado = "Perdiste";
        return resultado;
    }
}

juego("papel"); // llamado a la funcion