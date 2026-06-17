let caja = document.getElementById("caja");
let estado = document.getElementById("estado");

caja.onmouseover = function() {

    caja.style.backgroundColor = "lightgreen";
    caja.innerHTML = "¡Entraste con el mouse!";

    estado.innerHTML = "El mouse está adentro";
};

caja.onmouseout = function() {

    caja.style.backgroundColor = "#ddd";
    caja.innerHTML = "Pasá el mouse por acá";

    estado.innerHTML = "El mouse está afuera";
};
