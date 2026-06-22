const preguntas = [
    {
      texto: "1. puede Antonio presentar una demanda de desahucio por expiracion del plazo y acumuladamente la reclamacion de cantidades por impago de las rentas? ",
      opciones: ["a. si, podria ejercitar ambas acciones acumulativas por los tramites de juicio verbal ", 

                 "b. no, solo podria presentar la demanda por expiracion del plazo",

                 "c. si, pero la demanda deberia seguir los tramites de juicio ordinario por ser mas de 6000 euros  ",

                 "d. solo podra ejecutarlasa los 3 meses desde que remitio el burofax, manifestando la voluntad de no renovar el contrato  "],
      correcta: 0
    },{
        texto: "2. seria preceptiva la intervencion de letrado y procurador en el juicio por desahocio por falta de pago",
        opciones: [ "no, nunca", 
                    "si, siempre", 
                    "solo cuando la cuantia de renta sea superior a los 2000 eu", 
                    "solo cuendo el importe de las rentas reclamadas sea superior a 2000 eu"],
        correcta: 1
      },{
        texto: "3. puede antonio presentar una demanda de desahucio por falta de pago y acumulaciones de reclamacion por el impago de las rentas",
        opciones: [" a. si, podria ejercitar ambas acciones acumulativas por los tramites de juicio verbal ", 
            "b. no, solo podria presentar la demanda por expiracion del plazo",
            "c. si, pero la demanda deberia seguir los tramites de juicio ordinario por ser mas de 6000 euros  ",
            "d. solo podra ejecutarlasa los 3 meses desde que remitio el burofax, manifestando la voluntad de no renovar el contrato  "],
        correcta: 0
      },{
        texto: "4. como terminan los procesos de desahucios de finca urbana o rustica por falta de pago de las rentas o cantidades devidas por el arrendatario si, requerido aquel en los terminos previstos en el apartado 3 del 440 de la LEC, paga al actor o pone a su disposicion en el tribunal o notariamente dentro del plazo en el requerimiento, el importe de dicho pago enervador del desahucio y este es aceptado por el demandante?",
        opciones: ["por decreto", 
            "por auto", 
            "por providencia", 
            "por sentencia"],
        correcta: 0
      },{
        texto: "5. si el demandante se opusiere a la enervacion: ",
        opciones: ["a. se citara a las partes a la vista prevenida en el ar 443 de la LEC, tras la cual el juez dictara auto por la que se declarara enervada la accion o en otro caso, estimara la demanda habiendo lugar al desahucio", 
            "b.  se citara a las partes a la vista prevenida en el ar 443 de la LEC, tras la cual el juez dictara sentencia por la que se declarara enervada la accion o en otro caso, estimara la demanda habiendo lugar al desahucio", 
            "c. se archivara el procedimiento debiendo las partes acudir al procedimiento declarativo correspondiente", 
            "d.  se citara a las partes a una comparecencia ante el LAJ , tras la cual dictara decreto por la que se declarara enervada la accion o en otro caso, estimara la demanda habiendo lugar al desahucio"],
        correcta: 1
      },{
        texto: "6. no cabe enervacion cuando",
        opciones: ["a. el arrendatario hubiera enervado el desahucio en dos ocasiones anteriores, excepto que el cobro no hubiera tenido lugar por causas imputables al arrendador, ni cuando el arrendador hubiera requerido de pago al arrendatario por cualquier medio fehaciente con, al menos, 30 dias de antelacion a la presentacion de la demanda y el pago no se hubiera efectuado al tiempo de dicha presentacion", 
            "b. el arrendatario hubiera enervado el desahucio en una ocasion, excepto que el cobro no hubiera tenido lugar por causas imputables al arrendador, ni cuando el arrendador hubiera requerido de pago al arrendatario por cualquier medio fehaciente con, al menos, 30 dias de antelacion a la presentacion de la demanda y el pago no se hubiera efectuado al tiempo de dicha presentacion", 
            "c. el arrendatario hubiera enervado el desahucio en una ocasion, excepto que el cobro no hubiera tenido lugar por causas imputables al arrendador, ni cuando el arrendador hubiera requerido de pago al arrendatario por cualquier medio fehaciente con, al menos, 15 dias de antelacion a la presentacion de la demanda y el pago no se hubiera efectuado al tiempo de dicha presentacion", 
            "d. el arrendatario hubiera enervado el desahucio en una ocasion, excepto que el cobro no hubiera tenido lugar por causas imputables al arrendador, ni cuando el arrendador hubiera requerido de pago al arrendatario por cualquier medio fehaciente con, al menos, 30 dias de antelacion a la presentacion de la demanda y el pago no se hubiera efectuado al tiempo de dicha presentacion"],
        correcta: 3
      },{
        texto: "7. el tribunal competente para el juicio de desahucio por falta de pago sera: ",
        opciones: ["a. el juzgado de primera instancia de toledo", 
            "b. el juzgado de primera instancia de sevilla", 
            "c. el juzgado de cualquiera de los dos sitios a eleccion del demandnte", 
            "d. el juzgado de primera instancia del domicilio del demandante"],
        correcta: 0
      },{
        texto: "8. si la demanda se solicitase el desahucio de la finca urbana por falta de pago de las rentas o por expiracion del contrato, el demandante podra anunciar en ella que asume el compromiso de condonar al arrendatario todo o parte de la deuda y de las costas con expresion de la cantidad concreta, condicionandolo al desalojo voluntario de la finca dentro del plazo que se indique por el arrendador",
        opciones: ["a. que no podra ser inferior al plazo de 15 dias desde que se notifique la demanda", 
            "b. que no podra ser inferior al plazo de 30 dias desde que se notifique la demanda", 
            "c. que no podra ser inferior al plazo de 15 dias desde que se interponga la demanda", 
            "d. que no podra ser inferior al plazo de 12 dias desde que se notifique la demanda"],
        correcta: 0
      },{
        texto: "9. ¿en los juicios de desahucio por falta de pago cabe formular reconvencion?",
        opciones: ["a. si, siempre", 
            "b. solo cuando la cuantia de la demanda reconvencional sea inferior a 2000 eu", 
            "c. en ningun caso se admitira reconvencion", 
            "d. solo cuando el demandado se comprometa a abandonar la vivienda en el plazo de 15 dias desde la notidicacion de la sentencia"],
        correcta: 2
      },{
        texto: "10. en los casos de demanda en las que se ejercite la pretencion de desahucio por falta de pago de rentas o cantidades debidas, el LAJ, tras la admision, y previamente a la vista que se señale, requerira al demandado, entre otras posibilidades, para que",
        opciones: ["a. en el plazo de 10 dias que desaloje el inmueble", 
            "b. en el plazo de 20 dias que desaloje el inmueble", 
            "c. en el plazo de 1 mes que desaloje el inmueble", 
            "d. en el plazo de 15 dias que desaloje el inmueble"],
        correcta: 0
      },{
        texto: "11. en los juicios por desahucio por falta de pago o renta o cantidades debidas, el LAJ, tras la admision, y previamente a la vista que se señale, en el requerimiento al demandado se expresara que",
        opciones: ["a. en al caso de solicitar asistencia juridica gratuita el demandado, debera hacerlo en los 5 dias siguientes a la practica del requerimiento", 
            "b. en al caso de solicitar asistencia juridica gratuita el demandado, debera hacerlo en los 10 dias siguientes a la practica del requerimiento", 
            "c. en al caso de solicitar asistencia juridica gratuita el demandado, debera hacerlo en los 10 dias siguientes a la practica del demanda", 
            "d. en al caso de solicitar asistencia juridica gratuita el demandado, debera hacerlo en los 3 dias siguientes a la practica del requerimiento"],
        correcta: 3
      },{
        texto: "12. en los juicios de desahucio por falta de pago de rentas o cantidades debidas, si el demandado no atenderse el requerimiento de pago o no compareciere para oponerse o allanarse",
        opciones: ["a. el LAJ dictara decreto dando por terminado el juicio de desahucio y se procedera al lanzamiento en el plazo de un mes desde la notificacion de este", 
            "b. el LAJ dictara decreto dando por teminado el juicio de desahucio y se procede al lanzamiento en el dia y la hora fijados", 
            "c. el tribunal dictara sentencia dando por terminado el juicio de desahucio y se procedera al lanzamiento en el dia y la hora fijada", 
            "d. el tribunal dictara auto dando por terminado el juicio de desahucio  se procedera al lanzamiento en el dia y la hora fijados"],
        correcta: 1
      },{
        texto: "13. en los juicios de desahucio por falta de pago de rentas o contidades debidas si el demandado atendiere al requerimiento en cuanto desaloje del inmueble sin formular oposicion ni pagar la cantidad que se le reclame",
        opciones: ["a. se impondra las costas al demandado", 
            "b. se impondra las costas al demandante", 
            "c. no se pondran las costas a ninguna de las partes", 
            "d. se dara traslado a la actora para que alegue lo que a su derecho convenga"],
        correcta: 0
      },{
        texto: "14. en los juicios por desahucio por falta de pago de rentas o cantidades debidas tambien se apercibira al demandado en el requerimiento que se le realice que, de no comparecer a la vista, se declarara el desahucio sin mas tramites y que queda citado para recibir notificacion",
        opciones: ["a. del decreto que se dicte en el 6 dia siguiente al señalado para la vista", 
            "b. de la sentencia que se dicte el 6 dia siguiente al señalado para la vista", 
            "c. de la sentencia que se dicte el 5 dia siguiente al señalado para la vista", 
            "d. de la sentencia que se dicte el 6 dia siguiente desde el requerimiento"],
        correcta: 1
      },{
        texto: "15. cuando en un juicio verbal se pretenda la recuperacion de la finca, dada en arrendamiento, por impago de la renta o cantidad asimilada",
        opciones: ["a. solo se permitira al demandado alegar y probar el pago, la compensacion, o las circunstancias relaticas a la procedencia de la enervacion", 
            "b. solo se permitira al demandado alegar y probar el pago, la compensacion, o las circunstancias relativas a la procedencia de la enervacion ", 
            "c. solo se le permitira al demandado alegar y probar el pago de las circunstancias relativas a la improcedencia de la enervacion", 
            "d. se procedera al demandado alegar y probarr cualquier circunstancia respecto al pago, compensacion y reconvencion"],
        correcta: 0
      },{
        texto: "16. en base al ar 155 de la LEC, referente a los actos de comunicacion de las partes, de las afirmaciones que se indique, selale la respuesta incorrecta",
        opciones: ["a. el domicilio del demandante sera el que se haya hecho constar en la demanda o en la peticion o solicitud con que se inicie el proceso", 
            "b. el demandado, una vez comparecido, podra designar, para sicesivas comunicaciones, un domicilio distinto", 
            "c. cuando las partes no actuen en representacion de procurador o se trate del primer emplazamiento o citacion, se hara constar el procurador designado por el turno de oficio", 
            "d. el demandante debera indicar cuantos datos conozcadel demandado y que puedan ser de utilidad para la localizacion de este"],
        correcta: 2
      },{
        texto: "17. cuando en la demanda se ejercite una accion de aqellas a las que se refiere el numero 1 del apartado 1 del ar 250 de la LEC, se atendera que si las partes no han acordado señalar en el contraro del arrendamiento un domicilio en el que se llevaran a cabo los actos de comunicacion como se procedera?",
        opciones: ["a. se procedera de oficio a la averiguacion del domicilio a traves del punto neutro judicial", 
            "b. se procedera al archivo de las actuaciones", 
            "c. se procedera a la inadmision de la demanda", 
            "d. sera a todo los efectos domicilio , el de la vivienda o local arrendados"],
        correcta: 3
      },{
        texto: "18. de las afirmaciones que se indican cual de ellas es incorrecta con el ar 167 de la LEC de remision de oficio y mandamiento",
        opciones: ["a. se remitiran directamente por el LAJ", 
            "b. si lo solicitan las partes podran diligenciar personalmente los mandamientos y oficios ", 
            "c. en todo caso, la parte a cuya instancia se libren los mismos a que se refiere este ar habra de satisfacer los gastos que requiera el cumplimiento", 
            "d. sera siempre entregado por la parte solicitante para el diligenciamiento de los mismos en base al ar 162 de la LEC "],
        correcta: 3
      },{
        texto: "19. con la referencia al ar 171 de la LEC, relativo a los exhortos, de las afirmaciones que se indica , cual no es correcta",
        opciones: ["a. contendra la designacion de los tribunales exhortantes y exhortado", 
            "b. la designacion de la persona que sean parte en el asunto, asi como de sus representantes y defensores", 
            "c. la expedicion y autorizacion de los exhortos correspondera al auxilio judicial del organo exhortante", 
            "d. la iniciacion del asunto que motiva la expedicion del exhorto"],
        correcta: 2
      },{
        texto: "20. segun el ar 22,5 de la LEC, la resolucion que declare enervada la accion de desahucio",
        opciones: ["a. no condenara al arrendador al pago de las costas, salvo que las rentas y cantidades debidas no se hubiesen cobrado por causas imputables al arrendatario", 
            "b. condenara en costas al arrendador", 
            "c. condenara al arrendatario al pago de las costas devengadas, salvo que las rentas y cantidades debidas no se hubieran cobrado por causas imputables al arrendador", 
            "d. condenara a las partes a soportar cada una sus propias costas y comunes por mitad"],
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
