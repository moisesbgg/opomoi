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
  document.getElementById("manita").textContent = '';
}

function verificarRespuesta(indiceSeleccionado) {
  if (respondido) return;
  respondido = true;

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
    document.getElementById("manita").textContent = '👍';
    mostrarPanelAcierto("✅ BIEN TONTO , BIEN .. ASI ME GUSTA COMO YO TE E ENSEÑAAAOOO 💪");
    

    agregarRegistro(`Pregunta ${preguntaActual + 1}: ✅ Acierto`, 'aciertos');

    // 👉 SI ACERTAS → siguiente automático
    setTimeout(() => {
      siguientePregunta();
    }, 800);

  } else {
    fallos++;
    document.getElementById('fallos').textContent = fallos;
    document.getElementById("manita").textContent = '👎';
    mostrarBocadillo("💡 MONGOLO   ESTUDIA .. PO NO SABES QUE ESA NO ES ... CAPUYO ESTE ....💪");

    agregarRegistro(`Pregunta ${preguntaActual + 1}: ❌ Fallo`, 'fallos');

    // 👉 SI FALLAS → mostrar botón
    document.getElementById("siguiente").style.display = "inline-block";
  }
}

function siguientePregunta() {
  preguntaActual++;

  if (preguntaActual >= preguntas.length) {
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
// iniciar
cargarPregunta();