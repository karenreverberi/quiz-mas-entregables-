let personaje = document.getElementById("personaje");
let textoTecla = document.getElementById("tecla");

// Posición inicial
let x = 100;
let y = 150;

// Detecta cuando se presiona una tecla
document.onkeydown = function(evento) {

    textoTecla.innerHTML = "Tecla: " + evento.key;

    // Flecha izquierda
    if (evento.key === "ArrowLeft") {
        x = x - 10;
    }

    // Flecha derecha
    if (evento.key === "ArrowRight") {
        x = x + 10;
    }

    // Flecha arriba
    if (evento.key === "ArrowUp") {
        y = y - 10;
    }

    // Flecha abajo
    if (evento.key === "ArrowDown") {
        y = y + 10;
    }

    // Actualiza la posición del emoji
    personaje.style.left = x + "px";
    personaje.style.top = y + "px";
};
