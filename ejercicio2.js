let contadorDoble = 0;

document.getElementById("caja").ondblclick = function() {
  contadorDoble = contadorDoble + 1;
  document.getElementById("mensaje").innerHTML = "Doble clicks: " + contadorDoble;
};
