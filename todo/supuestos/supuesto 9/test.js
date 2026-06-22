const preguntas = [
    {
      texto: "1. en este tipo de procedimientos es preceptiva la intervencion de abogao y procurador ",
      opciones: ["A. si, al exceder la cuantia reclamada de 2000 eu", 

                 "B. si, cualquiera que sea la cantidad reclamada",

                 "C. no",

                 "D. es preceptiva la asistencia de abogado pero no de procurador"],
      correcta: 2
    },{
      texto: "2. de conformidad con el ar 814 de la  LEC ¿es valida la presentacion de la peticion a traves de la sede electronica?",
      opciones: ["A. no, unicamente podra extenderse en impreso presentandose en la oficina de registro y reparto civil", 

                 "B. no. unicamente podra extenderse en impreso o formulario obtenido en papel presentandose en la oficina de registro y reparto civil",

                 "C. si, facilitando todos los extremos de identidad de las partes , domicilios , origen y cuantia de la deuda y acompañamiento de los documentos a que se refiere el ar 812 de la LEC",

                 "D. si, sin necesidad de acompàñar los documentos a que se refiere el ar 812 de la LEC"],
      correcta: 2
    },{
      texto: "3. en los procedimientos monotorios de reclamacion de deuda a que se refiere el numero 2 del apartado 2 del ae 812 de la lec , sera competente el juzgado de 1 instancia correspondiente",
      opciones: ["A. al del lugar del domicilio del demandante", 

                 "B. unicamente al del lugar del domicilio o residencia del deudor ",

                 "C. al del lugar del domicilio o residencia del deudor o lugar en donde se halle la finca a eleccion del solicitante",

                 "D. al lugar del domicilio del solicitante o domicilio del deudar , a eleccion del solicitante"],
      correcta: 2
    },{
      texto: "4. admitida la solicitud inicial del proceso monotorio ¿en que plazo el LAJ requerira al deudor para que pague al peticionario , o presente escrito de oposicion alegando las razones por las que a su entender , no debe , en todo o en parte la cantidad reclamada",
      opciones: ["A. 10 dias", 

                 "B. 15 dias ",

                 "C. 20 dias",

                 "D. 30 dias"],
      correcta: 2
    },{
      texto: "5. si el ultimo dia del plazo del requerimiento fuere inhabil",
      opciones: ["A. expirara el plazo a las 24 h del dia ", 

                 "B. se entendera que el plazo expira a las 15 h del dia habil siguiente",

                 "C. se entendera que el plazo expira a las 16 h del dia habil siguiente",

                 "D. se entendera que el plazo expira a las 17 h del dia natural siguiente"],
      correcta: 1
    },{
      texto: "6. el requerimiento de pago a la deuda en los procedimientos monotorios , segun dispone el ar 161 de la LEC se efectuara",
      opciones: ["A. por correo certificado con acuse de recibo si asi lo dispone el tribunal", 

                 "B. por entrega al destinatario de la comunicacion de la copia de la resolucion o de la cedula en la sede judicial electronica , en la sede del tribunal o en el domicilio de la persona que deba ser requerido",

                 "C. por entrega al destinatario de la comunicacion de la copia de la resolucion judicial o de la cedula solo en el domicilio de la persona que deba ser requerida",

                 "D. por edictos , si su domicilio fuese desconocido"],
      correcta: 1
    },{
      texto: "7. en el requerimiento de pago a la deudora , segun lo establecido en el ar 815 de la LEC se le apercibira",
      opciones: ["A. que si no paga ni comparece alegando razones de la negativa al pago se despachara contra ella ejecucion", 

                 "B. no se realizara ningun apercibimiento solo se le entrega la documentacion",

                 "C. que si no comparece ni paga elegando las razones de la negativa al pago se le incluira en una lista de morosos",

                 "D. que si no paga ni comparece alegando las razones de la negativa al pago se le concedera un nuevo plazo"],
      correcta: 0
    },{
      texto: "8. en el presente caso , en la peticion de procedimiento monotorio , la cantidad reclamada asciende a ",
      opciones: ["A. 7950 eu que corresponde a las cuotas de comunidad impagadas ", 

                 "B. 7950 eu que correspondera a las cuotas de comunidad impagadas , mas 50 eu de gastos de reclamacion",

                 "C. 7950 eu que correspondera a las cuotas de comunidad impagadas , mas los intereses del ar 576 LEC",

                 "D. 7950 eu que correspondera a las cuotas de comunidad impagadas , mas 50 eu de gastos de reclamacion mas los intereses del ar 576 LEC"],
      correcta: 1
    },{
      texto: "9. en el supuesto de que el requerimiento de pago se hubiera practicado a la Sra dos veces , la primera en su domicilio y la segunda en la sede del tribunal , segun lo establecido en el ar 152.6 de la LEC",
      opciones: ["A. tendra eficacia a efectos procesales la segunda fecha en que se hubiera verificado , con independencia del medio que se hubiere empleado", 

                 "B. tendra eficacia a efectos procesales la primera fecha en que se hubiera verificado , con independencia del medio que se hubiere empleado",

                 "C. se declarara nulo de los dos actos de comunicacion ",

                 "D. se efectuara un nuevo acto de comunicacion a traves de la sede electronica ya que la deudora esta obligada a relacionarse electronicamente con la administracion de justicia"],
      correcta: 1
    },{
      texto: "10. el funcionario de auxilio judicial , cuando practica el requerimiento de pago a la Sra , esta podra",
      opciones: ["A. realizar supuesta, consignandose esta sucintamente en la cedula ", 

                 "B. solo se admitira respuesta en los actos de notificacion",

                 "C. realizar respuesta , consignandose esta sucintamente en la diligencia ",

                 "D. se admitira respuesta en los requerimiento si asi lo hubiera acordado el juzgado"],
      correcta: 2
    },{
      texto: "11. en el caso de que el auxilio judicial acuda al domicilio de la deudora para practicar el requerimiento de pago y no en contrara a nadie ¿como se procedera segun lo dispuesto en el ar 815.2 de la LEC?",
      opciones: ["A. se realizara la notificacion edictal ", 

                 "B. se realizara la comunicacion con el portero de la finca si la misma dispusiera dicho servicio",

                 "C. se practicara la comunicacion con el presidente de la comunidad de propietarios",

                 "D. se practicara la comunicacion con un vecino"],
      correcta: 0
    },{
      texto: "12. si el funcionario de auxilio encontrara a la Sra en su domicilio , el acto de comunicacion se documentara ",
      opciones: ["A. por medio del acta que sera firmada por el funcionario y pòr la Sra , cuyos datos identificativos se haran constar", 

                 "B. por medio de diligencias que sera firmada solo por la Sra , cuyo datos identificativos se haran constar",

                 "C. por medio de nota que sera firmada por el funcionario y por la Sra cuyos datos identificativos se haran constar ",

                 "D. por medio de diligencias que sera firmada por el funcionario y por la Sra cuyos daros identificativos se haran constar"],
      correcta: 3
    },{
      texto: "13. es valido el requerimiento de pago de la Sra si se hubiera practicado el jueves 4 de enero de 2024",
      opciones: ["A. si ya que solo fue inhabil a efectos procesales el mes de agosto ", 

                 "B. si ya que son solo inhabiles a efectos procesales los sabados y domingos, los dias de fiesta nacional y los festivos a efectos laborales en la respectiva CCAA o localidad . tambien los dias del mes de agosto",

                 "C. no , ya que fueron inhabiles a efectos procesales los dias que mediaron entre el 24 de dicciembre de 2023 y el 6 de enero de 2024",

                 "D. si ya que el jueves es un dia habil a efectos procesales"],
      correcta: 2
    },{
      texto: "14. en el supuesto de que la Sra no atienda al requerimiento de pago o no comparezca",
      opciones: ["A. el juez dictara auto dando por terminado el proceso monotorio", 

                 "B. el LAJ dictara diligencia de ordenacion dando por terminado el proceso monotorio",

                 "C. el LAJ dictara decreto dando por terminado el proceso monotorio ",

                 "D. el juez dictara providencia dando por terminado el proceso monotorio "],
      correcta: 2
    },{
      texto: "15. terminado el proceso monotorio por incomparecencia de la Sra , el señor Valgañon podra instar el despacho de la ejecucion ",
      opciones: ["A. si por demanda", 

                 "B. mediante mera solicitud , debiendo esperar el transcurso del plazo de 20 dias ",

                 "C. mediante mera solicitud sin necesidad de que transcurra el plazo de 20 dias para la ejecucion de titulos judiciales",

                 "D. ninguna de las anteriores es correcta"],
      correcta: 2
    },{
      texto: "16. si la Sra paga la cantidad reclameda , acreditandolo mediante la presentacion de documento bancario, de confornidad con lo establecido en el 817 de la LEC el LAJ ",
      opciones: ["A. dara cuenta al juez para que acuerde lo procedente", 

                 "B. dara traslado a la parte actora para que inste lo que a su derecho convenga",

                 "C. acordara el archivo de las actuaciones ",

                 "D. acordara el archivo provisional de las actuaciones"],
      correcta: 2
    },{
      texto: "17. si la deudora se opone a la peticion inicial del proceso monotorio ¿como debe efectuarse dicha oposicion ?",
      opciones: ["A. mediante comparecencia ante el juez alegando los motivos de su oposicion", 

                 "B. presentara por escrito en el juzgado alegando los motivos de su oposicion sin necesidad de que el mismo vaya firmado por procurador y abogado",

                 "C. presentara por escrito debidamente firmado por abogado y procurador alegando los motivos de oposicion",

                 "D. ninguna es correcta"],
      correcta: 2
    },{
      texto: "18. de conformidad con lo previsto en el ae 818 de la LEC , si la deudora alega en su escrito de oposicion la existencia de pluspeticion en la cantidad reclamada",
      opciones: ["A. se actuara respecto de cantidad reconocida como debida , como si se tratara de pluspeticion en la cantidad reclamada", 

                 "B. se actuara respecto de la cantidad no reconocida como debida , como si se tratara de un allanamiento parcial",

                 "C. se despacha ejecucion por la cantidad reconocida como no debida",

                 "D. no se puede alegar pluspeticion como causa de oposicion"],
      correcta: 0
    },{
      texto: "19. presentando escrito de oposicion por la Sra villarreal ",
      opciones: ["A. el LAJ dictara decreto dando por terminado el proceso monotorio sin mas tramites", 

                 "B. el LAJ dictara decreto dando por terminado el proceso monotorio y acordando seguir la tramitacion por los tramites de juicio verbal ",

                 "C. las dos son correctas ",

                 "D. ninguna es correcta"],
      correcta: 1
    },{
      texto: "20. el LAJ en el decreto de medidas acuerda el embargo de bienes de la parte ejecutada, conforme a lo dispuesto en el ar 592,2 de la LEC se embargara en primer lugar",
      opciones: ["A. sueldos , salarios, pensiones, ingresos procedentes de actividades profesionales y mercantiles autonomas", 

                 "B. joyas o objetos de arte",

                 "C. dinero o cuentas corriente de cualquier clase",

                 "D. intereses , rentas y frutos de toda especia"],
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
