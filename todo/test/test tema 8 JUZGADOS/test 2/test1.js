const preguntas = [
    {
        pregunta: "1. ",
        opciones: [ "a. ", 
                    "b. ", 
                    "c. ", 
                    "d. "],
        correcta: 0
    },

];
let preguntaActual = 0;
let aciertos = 0;
let fallos = 0;
let respondido = false;

// ======================
// LECTOR DE VOZ
// ======================

function hablar(texto) {
  speechSynthesis.cancel();

  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "es-ES";
  voz.rate = 0.9;
  voz.pitch = 1;
  voz.volume = 1;

  const voces = speechSynthesis.getVoices();
  const vozES = voces.find(v => v.lang.startsWith("es"));

  if (vozES) {
    voz.voice = vozES;
  }

  speechSynthesis.speak(voz);
}

speechSynthesis.onvoiceschanged = () => {
  speechSynthesis.getVoices();
};

// ======================
// CARGAR PREGUNTA
// ======================

function cargarPregunta() {
  const p = preguntas[preguntaActual];

  document.getElementById('pregunta').textContent = p.pregunta;

  const contenedor = document.getElementById('opciones');
  contenedor.innerHTML = '';

  document.getElementById("siguiente").style.display = "none";
  document.getElementById("siguiente").disabled = false;

  p.opciones.forEach((texto, index) => {
    const div = document.createElement('div');
    div.className = 'opcion';
    div.textContent = texto;

    div.onclick = () => verificarRespuesta(index);

    contenedor.appendChild(div);
  });

  respondido = false;
  document.getElementById("manita").textContent = "";

  // ======================
  // LEER PREGUNTA
  // ======================

  const textoLeer =
      p.pregunta +
      ". Opción A. " + p.opciones[0] +
      ". Opción B. " + p.opciones[1] +
      ". Opción C. " + p.opciones[2] +
      ". Opción D. " + p.opciones[3];

  setTimeout(() => {
      hablar(textoLeer);
  }, 300);
}

// ======================
// COMPROBAR RESPUESTA
// ======================

function verificarRespuesta(indiceSeleccionado) {

  if (respondido) return;
  respondido = true;

  // Detener la lectura
  speechSynthesis.cancel();

  const p = preguntas[preguntaActual];
  const opciones = document.querySelectorAll('.opcion');

  opciones.forEach((op, i) => {

    op.style.pointerEvents = "none";

    if (i === p.correcta) {
      op.classList.add('correcta');
    }

    if (i === indiceSeleccionado && i !== p.correcta) {
      op.classList.add('incorrecta');
    }

  });

  if (indiceSeleccionado === p.correcta) {

    aciertos++;
    document.getElementById('aciertos').textContent = aciertos;
    document.getElementById("manita").textContent = "👍";

    mostrarPanelAcierto("✅ BIEN TONTO , BIEN .. ASI ME GUSTA COMO YO TE E ENSEÑAAAOOO 💪");

    agregarRegistro(`Pregunta ${preguntaActual + 1}: ✅ Acierto`, "aciertos");

    setTimeout(() => {
      siguientePregunta();
    }, 800);

  } else {

    fallos++;
    document.getElementById('fallos').textContent = fallos;
    document.getElementById("manita").textContent = "👎";

    mostrarBocadillo("💡 MONGOLO ESTUDIA... PO NO SABES QUE ESA NO ES... CAPUYO ESTE...💪");

    agregarRegistro(`Pregunta ${preguntaActual + 1}: ❌ Fallo`, "fallos");

    document.getElementById("siguiente").style.display = "inline-block";
  }
}

// ======================

function siguientePregunta() {

  preguntaActual++;

  if (preguntaActual >= preguntas.length) {

    speechSynthesis.cancel();
    alert("Fin del test 🎉");
    return;

  }

  cargarPregunta();
}

function agregarRegistro(texto, clase) {

  const registro = document.getElementById('registro');
  const p = document.createElement('p');

  p.textContent = texto;
  p.className = clase;

  registro.appendChild(p);

}

function mostrarPanelAcierto(texto) {

  const panel = document.getElementById("panel-acierto");

  panel.textContent = texto;
  panel.style.display = "flex";

  clearTimeout(panel.timeout);

  panel.timeout = setTimeout(() => {
    panel.style.display = "none";
  }, 1500);

}

function mostrarBocadillo(texto) {

  const b = document.getElementById("bocadillo");

  b.textContent = texto;
  b.style.display = "block";

  clearTimeout(b.timeout);

  b.timeout = setTimeout(() => {
    b.style.display = "none";
  }, 2000);

}

// ======================
// INICIAR
// ======================

cargarPregunta();