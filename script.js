// PUNTO 1: Array de preguntas con objetos
let preguntas = [
  {
    texto: "¿Qué lenguaje se usa para darle estructura a una página web?",
    correcta: 1
  },
  {
    texto: "¿Qué lenguaje se usa principalmente para dar estilos?",
    correcta: 1
  },
  {
    texto: "¿Qué estructura permite guardar varios datos en una sola variable?",
    correcta: 0
  },
  {
    texto: "¿Qué método se usa para seleccionar un elemento por su ID?",
    correcta: 1
  },
  {
    texto: "¿Qué evento ocurre cuando el usuario hace click?",
    correcta: 2
  },
  {
    texto: "¿Qué permite hacer localStorage?",
    correcta: 0
  }
];

// Array que guarda las respuestas del jugador
// -1 significa que todavía no respondió esa pregunta
let respuestas = [-1, -1, -1, -1, -1, -1];

// Cantidad de preguntas respondidas hasta el momento
let cantRespondidas = 0;


// PUNTO 2: Función para responder una pregunta
function responder(p, i) {
  // Si la pregunta ya fue respondida, no hace nada
  if (respuestas[p] !== -1) {
    return;
  }

  // Guarda la opción elegida por el jugador
  respuestas[p] = i;

  // Aumenta la cantidad de preguntas respondidas
  cantRespondidas++;

  // Actualiza el contador
  document.getElementById("contador").textContent = "Respondiste " + cantRespondidas + " de 6";

  // Deshabilita los 4 botones de esa pregunta
  for (let j = 0; j < 4; j++) {
    let boton = document.getElementById("btn-p" + p + "-" + j);
    boton.disabled = true;
  }

  // Busca el botón que el usuario clickeó
  let botonElegido = document.getElementById("btn-p" + p + "-" + i);

  // Busca cuál era la opción correcta
  let indiceCorrecto = preguntas[p].correcta;
  let botonCorrecto = document.getElementById("btn-p" + p + "-" + indiceCorrecto);

  // Marca la respuesta con color
  if (i === indiceCorrecto) {
    botonElegido.classList.add("correcta");
  } else {
    botonElegido.classList.add("incorrecta");
    botonCorrecto.classList.add("correcta");
  }
}


// PUNTO 3: Botón Ver resultado
document.getElementById("btn-resultado").addEventListener("click", function () {
  let correctas = 0;

  // Recorre todas las respuestas y cuenta las correctas
  for (let i = 0; i < respuestas.length; i++) {
    if (respuestas[i] === preguntas[i].correcta) {
      correctas++;
    }
  }

  let mensaje = "";

  // Mensaje personalizado según el puntaje
  if (correctas <= 2) {
    mensaje = "Seguí practicando";
  } else if (correctas <= 4) {
    mensaje = "¡Bien hecho!";
  } else {
    mensaje = "¡Excelente!";
  }

  // Muestra el resultado
  document.getElementById("resultado").textContent =
    "Respondiste " + correctas + " de 6 correctamente. " + mensaje;

  // PUNTO 4: Guarda el último puntaje en localStorage
  localStorage.setItem("ultimoPuntaje", correctas);

  // Actualiza el texto del último puntaje
  document.getElementById("ultimo-puntaje").textContent =
    "La última vez respondiste " + correctas + " de 6.";
});


// PUNTO 4: localStorage para guardar el nombre
let nombreGuardado = localStorage.getItem("nombre");

if (nombreGuardado !== null) {
  document.getElementById("input-nombre").value = nombreGuardado;
}

// Guarda el nombre cada vez que el usuario escribe
document.getElementById("input-nombre").addEventListener("input", function () {
  let nombreActual = document.getElementById("input-nombre").value;
  localStorage.setItem("nombre", nombreActual);
});

// Muestra el último puntaje al cargar la página
let ultimoPuntaje = localStorage.getItem("ultimoPuntaje");

if (ultimoPuntaje !== null) {
  document.getElementById("ultimo-puntaje").textContent =
    "La última vez respondiste " + ultimoPuntaje + " de 6.";
}


// PUNTO 5: Botón Reiniciar
document.getElementById("btn-reiniciar").addEventListener("click", function () {
  // Resetea respuestas y contador
  respuestas = [-1, -1, -1, -1, -1, -1];
  cantRespondidas = 0;

  // Limpia los textos
  document.getElementById("contador").textContent = "Respondiste 0 de 6";
  document.getElementById("resultado").textContent = "";

  // Recorre las 6 preguntas
  for (let p = 0; p < 6; p++) {
    // Recorre los 4 botones de cada pregunta
    for (let j = 0; j < 4; j++) {
      let boton = document.getElementById("btn-p" + p + "-" + j);
      boton.disabled = false;
      boton.className = "btn-opcion";
    }
  }
});
