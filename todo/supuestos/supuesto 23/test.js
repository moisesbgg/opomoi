const preguntas = [
    {
      texto: "1. ¿que juzgado es el competente territorialmente para conocer del asunto?",
      opciones: ["A. el juzgado de violencia sobre la mujer de Navalcarnero con caracter exclusivo y excluyente , tanto para la adopcion de la orden de proteccion como para el conocimiento del asunto principal ", 

                 "B. el juzgado de violencia sobre la mujer de Navalcarnero sin perjuicio de la adopcion de la orden de proteccion , o de medidas urgentes pudiera adoptar el juzgado de violencia sobre la mujer de Madrid",

                 "C. el juzgado de violencia sobre la mujer de Madrid con caracter exclusivo y excluyente",

                 "D. cualquier juzgado de violencia sobre la mujer de la provincia de Madrid , a eleccion de la denunciante "],
      correcta: 1
    },{
      texto: "2. ¿que recurso puede interponer Miguel contra el auto de incoacion de estas diligencias urgentes?",
      opciones: ["A. recurso de reforma", 

                 "B. recurso de apelacion ",

                 "C. recurso de revision",

                 "D. no cabe recurso "],
      correcta: 3
    },{
      texto: "3. ¿que vigencia tendra las medidas de caracter civil contenidas en la orden de proteccion ?",
      opciones: ["A. 20 dias", 

                 "B. 25 dias",

                 "C. 30 dias",

                 "D. 15 dias"],
      correcta: 2
    },{
      texto: "4. si dentro del plazo de vigencia de las medidas de caracter civil contenidas en la orden de proteccion, fuese incoado a instancia de Eva o de su representante legal, un proceso de familia ante la jurisdiccion civil ¿cuanto tiempo permaneceran en vigor las medidas adoptadas?",
      opciones: ["A. durante los 20 dias siguientes a la presentacion a la demanda", 

                 "B. durante los 25 dias siguientes a la presentacion a la demanda",

                 "C. durante los 30 dias siguientes a la presentacion a la demanda",

                 "D. durante los 15 dias siguientes a la presentacion a la demanda"],
      correcta: 2
    },{
      texto: "5. segun el ar 796.1.2º de la LECRim , si Miguel no manifiesta expresamente en las dependencias policiales su voluntad de comparecer ente el juzgado asistido de abogado",
      opciones: ["A. la policia judicial recabara del colegio de abogado la designacion de un abogado de oficio", 

                 "B. la policia judicial informara a Miguel de las consecuencias negativas de no comparecer ante el juzgado asistido de letrado ",

                 "C. la policia judicial informara a la mayor brevedad posible de esta circunstancia al juzgado de violencia sobre la mujer competente",

                 "D. la policia judicial concedera un plazo improrrogable de 24 horas a Miguel para que designe un letrado a fin de comparecer en el juzgaado asistido del mismo "],
      correcta: 0
    },{
      texto: "6. en el caso de que el juez de violencia sobre la mujer hubiera considerado insuficiente las diligencias practicadas (señale la correcta)",
      opciones: ["A. acordara sobreseimiento provisional", 

                 "B. ordenara que el procedimiento continue como diligencia previas del procedimiento abreviado",

                 "C. ordenara que el procedimiento continue como delito leve inmediato",

                 "D. elevara los autos inmediatamente al juzgado de lo penal competente a fin de que dicte la resolucion que corresponda"],
      correcta: 1
    },{
      texto: "7. de conformidad con el ar 803 de la LECRim ¿de que plazo disponen las partes para presentar el escrito de formalizacion de recurso de apelacion?",
      opciones: ["A. 10 dias", 

                 "B. 3 dias",

                 "C. 5 dias",

                 "D. no cabe recurso "],
      correcta: 2
    },{
      texto: "8. ¿que juzgado es competente para conocer la demanda de divorcio?",
      opciones: ["A. el juzgado de primera instancia del ligar donde acaecieron los hechos constitutios de vilencia sobre la mujer", 

                 "B. el juzgado de violencia sobre la mujer de Navalcarnero",

                 "C. el juzgado de primera instancia del domicilio de Miguel ",

                 "D. el juzgado de primera instancia especializado en asunto de familias de Madrid"],
      correcta: 1
    },{
      texto: "9. en el procedimiento de divorcio (señale la correcta)",
      opciones: ["A. los hijos de ellos podran ser oidos", 

                 "B. los hijos de ellos deberan ser oidos en todo caso ",

                 "C. los hijos de ellos popdran ser oidos si estos dan su consentimiento ",

                 "D. deberan ser oidos exclusivamente si la diligencia se practica a peticion de MF"],
      correcta: 1
    },{
      texto: "10. en materia de justicia gratuita ¿tiene Eva alguna especialidad al tratarse de una victima de violencia de genero?",
      opciones: ["A. tiene derecho a recibir asesoramiento juridico gratuito en el momento inmediatamente previo a la interposicion de la denuncia , pero no a la defensa y representacion gratuita por abogado y procurador en todo los procesos y procedimiento administrativos que tengan causa directa en la violencia padecida", 

                 "B. tiene derecho a recibir asesoramiento juridico gratuito en el momento inmediatamente previo a la interposicion de la denuncia , pero no a la defensa y representacion gratuita por abogado y procurador en todo los procesos y procedimiento administrativos que solo tenga causa directa en la violencia padecida",

                 "C. tiene derecho a recibir asesoramiento juridico gratuito en el momento inmediatamente previo a la interposicion de la denuncia , pero no a la defensa y representacion gratuita por abogado y procurador en todo los procesos y procedimiento administrativos que solo tenga causa directa o indirecta en la violencia padecida",

                 "D. tiene derecho a recibir asesoramiento juridico gratuito en el momento inmediatamente previo a la interposicion de la denuncia , pero no a la defensa y representacion gratuita por abogado y procurador en todo los procesos y procedimiento administrativos que solo tenga causa directa"],
      correcta: 2
    },{
      texto: "11. la orden de proteccion sera acordada por el juez ",
      opciones: ["A. exclusivamente de oficio", 

                 "B. exclusivamente a instancia de la victima o persona que tengan con ella alguna de las relaciones indicadas en el ar 173.2 del cofigo penal",

                 "C. exclusivamente a instancia del MF",

                 "D. de oficio o a instancia de la victima o personas que tengan con ella alguna de las relaciones indicadas en el ar 173.2 del codigo penal "],
      correcta: 3
    },
    
  ];

  let preguntaActual = 0;
  let aciertos = 0;
  let fallos = 0;
  let respondido = false;

  function cargarPregunta() {
    const p = preguntas[preguntaActual];
    document.getElementById('pregunta').textContent = p.texto;

    const contenedorOpciones = document.getElementById('opciones');
    contenedorOpciones.innerHTML = '';

    p.opciones.forEach((texto, index) => {
      const div = document.createElement('div');
      div.className = 'opcion';
      div.textContent = texto;
      div.onclick = () => verificarRespuesta(div, index);
      contenedorOpciones.appendChild(div);
    });

    respondido = false;
  }

  function verificarRespuesta(elemento, indiceSeleccionado) {
    if (respondido) return;
    respondido = true;

    const p = preguntas[preguntaActual];
    const opciones = document.querySelectorAll('.opcion');

    opciones.forEach((op, i) => {
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
      agregarRegistro(`Pregunta ${preguntaActual + 1}: ✅ Acierto`, 'aciertos');
    } else {
      fallos++;
      document.getElementById('fallos').textContent = fallos;
      agregarRegistro(`Pregunta ${preguntaActual + 1}: ❌ Fallo`, 'fallos');
    }

    // Avanza a la siguiente pregunta automáticamente
    setTimeout(cargarSiguientePregunta, 1000); // espera 1 segundo
  }

  function agregarRegistro(texto, clase) {
    const registro = document.getElementById('registro');
    const p = document.createElement('p');
    p.textContent = texto;
    p.className = clase;
    registro.appendChild(p);
  }

  function cargarSiguientePregunta() {
    if (preguntaActual < preguntas.length - 1) {
      preguntaActual++;
      cargarPregunta();
    } else {
      alert("Fin del test.");
    }
  }
  
  

  // Inicia con la primera pregunta
  cargarPregunta();
