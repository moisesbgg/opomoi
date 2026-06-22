const preguntas = [
    {
      texto: "1. respecto al contenido de la cedula de citacion para loa actos de conciliacion y juicio ¿cual de las siguientes propuestas no es corresca ?",
      opciones: ["A. que los litigantes han de concurrir al juicio con todos lso medios de prueba ", 

                 "B. que los actos de conciliacion y juicio podran suspenderse por incomparecencia del demandado ",

                 "C. que las partes podran formular conciliacion con evitacion de juicio , por medio de compensacion ante la oficina judicial , sin esperar a la fecha señalada ",

                 "D. que podran someter la cuestion a los procedimientos de mediacion que pudieran estar constituidos de acuerdo con lo dispuesto en el ar 63 del la ley 36/11 de 10 de octubre "],
      correcta: 1
    },{
      texto: "2. es necesario que E.R.U comparezca con la interverncion de abogado o graduado social que lo representa ante el juzgado ",
      opciones: ["A. si, en la demanda de despido siempre es necesario la intervencion de abogado o graduado social para que lo represente ante el juzgado ", 

                 "B. no . la defensa por abogado y representacion tecnica por graduado social colegiado tendra caracter facultativo en la instancia ",

                 "C. si, es preceptiva la representacion tecnica para las demandas de despido salvo que se trate de creclamaciones de despido nulo ",

                 "D. si, la preceptiva la intervencion de abogado o graduado en la instacia si el demandante es miembro de una organizacion sindical "],
      correcta: 1
    },{
      texto: "3. cual de los siguientes requisitos no es necesario que se contenga en la demanda de despido",
      opciones: ["A. fecha y efectividad de despido ", 

                 "B. si el trabajador ostenta o ha ostentado en el año anterior al despido la cualidad de representante legal o sindical de los trabajadores ",

                 "C. modalidad y duracion del contrato , jornada y categoria profesional ",

                 "D. la reclamacion previa ante mutua laboral o entidad gestora "],
      correcta: 3
    },{
      texto: "4. si se presenta demanda sin acompañar certificaciones acreditativa de haber intentado conciliacion previa ante el organismo admin correspondiente ",
      opciones: ["A. el laj inadmitira la demanda , sin perjuicio de que se vuelva a presentar con la subsanacion correspondiente en el plazo de 15 dias ", 

                 "B. el LAJ inadmitira la demanda y procedera al sañalemiento de juicio advirtiendo al demandante que ha de acreditar la celebracion en el plazo de 15 dias , con apercibimiento de archivo de las actuaciones en caso contrario , quedando sin efecto el señalamiento efectuado ",

                 "C. el juez inadmitira la demanda , sin perjuicio de que se vuelca a presentar con subsanacion correspondiente en el plazo de 7 dias",

                 "D. el LAJ dara cuenta al juez o tribunal para que resuelva sobre la admision y en su caso la subsanacion que debera realizarse en el plaazo de 3 dias desde el requerimiento "],
      correcta: 1
    },{
      texto: "5. que juzgado tiene la competencia territorial para el conocimiento de la demanda de despido que pretende plantear E.R.U",
      opciones: ["A. el juzgado del domicilio del demandado y representante legal que corresponda a los juzgados de lo social de madrir de manera preceptiva ", 

                 "B. el juzgado del domicilio del demandante que corresponda al juzgado de lo social de Navalcarnero ",

                 "C. el juzgado del lugar donde se presta los servicios, de manera preceptiva que corresponde al juzgado de lo social de talavera de la reina ",

                 "D. el juzgado del lugar del domicilio del demandado o del lugar donde presta servicios a eleccion del demandante , que corresponda al juzgado de lo social de Madrid y juzgado de lo social de Toledo, con sede en talavera de la reina "],
      correcta: 3
    },{
      texto: "6. si en el momento del juicio la empresa anticipase de manera expresa la opcion entre readmision o indemnizacion , para el caso de improcedencia del despido , el juez se pronuciara sobre la opcion ",
      opciones: ["A. en sentencia ", 

                 "B. en la ejecucion provisional ",

                 "C. antes de las conclusiones del juicio ",

                 "D. en auto ante de dictar sentencia "],
      correcta: 0
    },{
      texto: "7. en el momento de la celebracion del juicio por el despido planteado , señale la respuesta incorrecta",
      opciones: ["A. correspondera a la empresa en fase de alegaciones y conclusion , exponer sus posiciones en primer lugar ", 

                 "B. correspondera a la empresa la carga de provar la veracidad de los hechos imputados en la carta de despido ",

                 "C. a la empresa no se le admitiran en el juicio otros motivos de oposicion a la demanda que los contenidos en la comunicacion escrita de dicho despido",

                 "D. en la fase de practica de prueba correspondera a E.R.U exponer sus posiciones en primer lugar "],
      correcta: 3
    },{
      texto: "8. en los hechos probados de la sentencia que se dicte conclusion el juicio por despido ¿cual de las siguientes circunstancias no es necesaria que conste ?",
      opciones: ["A. fecha y forma del despido , causas invocadas para el mismo , en su caso , y hechos acreditativos en relacion con dichas causas", 

                 "B. si el trabajador ostenta o ha ostentado , en el año anterior al despido la condicion de delegado de personal ",

                 "C. antigùedad concretando los periodos en que haya sidp prestados los servicios y categoria progesional ",

                 "D. las condiciones y readmisiones del trabajador , pudiendo ser las mismas o diferentes a las ostentadas con anterioridad al despido "],
      correcta: 3
    },{
      texto: "9. de ser admitida la demanda , una vez verificada la concurrencia de los requisitos exigidos , se procedera",
      opciones: ["A. en la misma resolucion de admision se señalara en doble convocatoria , dia para la celebracion del acto de conciliacion ante el juez y posterior al juicio ", 

                 "B. en el auto de admision de la demanda se señalara dia para la celebracion del acto de conciliacion sin avenencia se señalara el juicio",

                 "C. en la misma resolucion de admision se señalara en unica covocatoria , dia para la celebracion del acto de conciliacion ante el juez y posteior juicio",

                 "D. en la resolucion de admision se señalara en unica convocatoria , dia para la celebracion del acto de conciliacion ante el LAJ y juicio ante el juez o magistrado "],
      correcta: 3
    },{
      texto: "10. si la sentencia dictada declara el despido improcedente y es recurrida por la empresa y el empresario hubiera optado por la readmision , señale la respuesta correcta ",
      opciones: ["A. la readmision no se llevara a efecto , en ningun caso , hasta la firmeza de la sentencia ", 

                 "B. no se podra llevar a efecto la readmision provisional por haber sido recurrida por el que ejercio la opcion ",

                 "C. el empresario podra cambiar la opcion de readmision por la indemnizacion , cuando se confirme la sentencia recurrida en todos sus extremos ",

                 "D. la readmision se llevara a efecto de forma provisional , cualquiera que fuere el recurrente "],
      correcta: 3
    },{
      texto: "11. cuando el despido fuese declarado improcedente por el cumplimiento de los requisitos de forma establecido y se hubiera optado por la readmision , podra efectuarse un nuevo despido ",
      opciones: ["A. dentro del plazo de 7 dias desde la notificacion de la sentencia ", 

                 "B. dentro del plazo de 20 dias desde la conclusion del juicio",

                 "C. dentro del plazo de 20 dias desde la notificacion de la sentencia",

                 "D. en ningun caso "],
      correcta: 0
    },{
      texto: "12. en el fallo de la sentencia de despido , el juez calificara el mismo como ",
      opciones: ["A. ilegal o conforme a derecho ", 

                 "B. propio , impropio y procedente ",

                 "C. procedente , improcedente o nulo ",

                 "D. legal , ilegal o nulo "],
      correcta: 2
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
