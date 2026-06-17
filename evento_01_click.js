let contador = 0;

document.getElementById("boton").onclick = function() {

    contador = contador + 1;

    document.getElementById("contador").innerHTML =
        "Clicks: " + contador;
};
