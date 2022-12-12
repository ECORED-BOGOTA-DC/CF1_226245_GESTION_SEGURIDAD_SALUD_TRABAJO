<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Investigación de incidentes y accidentes laborales
    
    .row 
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/1.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Parafraseando a Positiva (2012), por norma ,en el Sistema General de Riesgos Laborales, el empleador es responsable por la afiliación, cotización y la prevención de los riesgos de sus empleados, lo cual tiene como fin garantizar la vida de sus trabajadores en los sitios y centros de trabajo. La investigación permite determinar el origen de estos eventos para identificar su causalidad e intervenir en el mejoramiento de sus procesos productivos para eliminar o minimizar su ocurrencia. Investigar un incidente o accidente es la manera de llegar a la raíz de un problema que se puede repetir y que se debe evitar a todo costo.
    
    p.mt-5(data-aos="fade-up") La investigación de los eventos es el éxito de la prevención por eso su importancia como lo puede ver a continuación:

    figure.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mt-5
      .col-lg-1.col-md-3.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/2.svg" data-aos="fade-right")
      .col-lg-11.col-md-9(style="place-self:center")
        p.mb-0(data-aos="fade-up") Los incidentes y accidentes son impredecibles, aunque en muchos casos parecen obvios, las causas de estos sucesos son casi infinitas e incluyen la responsabilidad laboral y administrativa del empleado y el empleador dado que esa relación siempre está mediada por un ambiente y un trabajo oficial que varía en riesgos, clasificar esas causas no es fácil, por eso se hace una clasificación general en dos posibles causas como se muestra a continuación:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FFE9A6;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/3.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") Causas inmediatas
          p.mt-3(data-aos="fade-up") Se componen de condición subestándar, comprende el estado físico del ambiente donde labora el trabajador, por ejemplo, si se trabaja sobre la vía, es de tener en cuenta el exceso de sol, la hora del día, si llueve; si la vía es destapada, con piedras sueltas, piso en desnivel, entre otros. Acto subestándar, hace alusión al comportamiento del trabajador, es decir, de su capacidad para identificar el riesgo. 
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FCC98F;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema2/4.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") Causas básicas
          p.mt-3(data-aos="fade-up") Se divide en factores de trabajo y factores personales. 
          p.mt-4(data-aos="fade-up") #[strong Factores de trabajo:] traslados largos en vía pública, falta de elementos de protección personal, procedimientos peligrosos, son ejemplos de factores de trabajo que se pueden controlar para evitar accidentes de trabajo. 
          p.mt-4(data-aos="fade-up") #[strong Factores personales:] se identifican como cansancio en la persona, fatiga, desconcentración, el mismo estado de salud, mental y/o emocional. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1 Metodologías de investigación 
    
    p(data-aos="fade-up") Cualquier metodología que conduzca a la identificación objetiva de las causas de origen del accidente de trabajo, es válida. Entre ellas están el árbol de causas, árbol de fallos y errores, método de los 5 porqués que se presentan a continuación: 

    TabsA.color-acento-botones.mt-5
      .tarjeta.color-acento-botones.p-4(titulo="Árbol de causas")
        h4 Arbol de causas
        p.mt-4 Toma su inicio en la conclusión del accidente, cortadura, amputación, fractura, quemadura, entre otras; partiendo del último suceso se va encontrando la razón que antecede el accidente, dando respuesta a la pregunta: #[strong ¿qué ocurrió para llegar a esta situación?] A su vez, se tiene de base la identificación de las causas inmediatas y causas básicas. Posterior se traza un plan de mejora que elimine, reduzca o sustituya el riesgo y la probabilidad de nueva ocurrencia. 
      .tarjeta.color-acento-botones.p-4(titulo="Árbol de fallos y errores")
        h4 Árbol de fallos y errores
        p.mt-4 El análisis de árbol de fallos o un FTA (del inglés #[em fault-tree analysis]), es un análisis sistemático que permite identificar la causa raíz de un evento a través de un diagrama. Un árbol de fallos permite el análisis de una sola ocurrencia indeseada, pero también puede utilizarse sistemáticamente para evaluar el funcionamiento de un conjunto de componentes, lo que hace que esta herramienta sea muy versátil para el trabajo de los incidentes y accidentes laborales, es claro que una falla o error puede ser el que produce el suceso, por eso se grafica todo y se reconstruye el momento para investigar.
      .tarjeta.color-acento-botones.p-4(titulo="Método de los 5 porqués")
        h4 Método de los 5 porqués
        p.mt-4 El método de los 5 porqués (o los 5 ¿por qué?) #[strong consiste en un método interrogativo], en el que se pregunta por qué se produjo cada evento que precedió al incidente o accidente hasta encontrar la causa raíz. Generalmente, se necesitan solo cinco preguntas para obtener la respuesta que buscas, de ahí el nombre «5 porqués». La gran ventaja de este método es reconocer que hay una serie de eventos que preceden y causan el suceso, la idea de las cinco  preguntas es dar profundidad a la investigación y se recomienda que todas las respuestas queden por escrito o grabadas para que sirvan de evidencia.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2  Obligación de los aportantes
    
    .row
      .col-lg-3.mb-4.mb-lg-0.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/5.png" data-aos="fade-right")
      .col-lg-9.ps-0(style="place-self:center;")
        p(data-aos="fade-up") El aportante tiene como obligación conformar un equipo investigador para la investigación de cada accidente, disponer del espacio, tiempo y los recursos necesarios para tal fin. Remitir la investigación a la ARL de ser necesario, derivar un plan de mejora que contenga acciones correctivas, asignar los recursos para dicho plan, confirmar la correcta ejecución del mismo, finalmente medir el impacto de las acciones tomadas por medio de indicadores.
        p.mt-4(data-aos="fade-up") En caso de un mortal por accidente de trabajo, será el profesional responsable del Sgsst quien lidere todo el proceso de investigación, en compañía del asesor asignado por la ARL y al tiempo, el profesional del Ministerio de Trabajo. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_3 2.3  Equipo investigador
    
    .row
      .col-lg-1.col-md-3.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema2/6.svg" data-aos="fade-right")
      .col-lg-11.col-md-9(style="place-self:center")
        p.mb-0(data-aos="fade-up") Está conformado por el profesional responsable del Sgsst, el trabajador, el jefe inmediato del trabajador y un miembro del Copasst o el vigía de SST. Además, se tendrá en cuenta las versiones del testigo o testigos del accidente de trabajo. Estas son las responsabilidades de los actores investigadores de un evento:
    
    .col-xl-8.m-auto.mt-5
      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row
          .col-lg-8.mb-4.mb-lg-0
            h4(data-aos="fade-right") El trabajador.
            p.mt-4(data-aos="fade-right") El trabajador tendrá la obligación de rendir su versión en cuanto a todo lo ocurrido en su accidente de trabajo para facilitar el reconocimiento de las causas que originaron su siniestro. 
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/7.svg' data-aos="fade-left")
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/8.svg' data-aos="fade-right")
          .col-lg-8
            h4.text-start(data-aos="fade-left") El jefe inmediato.
            p.mt-4.text-start(data-aos="fade-left") El jefe inmediato estará presente en el momento en el que el trabajador realice su relato para que confirme las órdenes directas que dio al trabajador, al tiempo para que en la misma medida de importancia contribuya a la identificación de las causas del siniestro, y quede comprometido con el plan de mejora que se deriva de cada accidente de trabajo. 
        .row
          .col-lg-8.mb-4.mb-lg-0
            h4(data-aos="fade-right") El responsable de la seguridad y salud en el trabajo.
            p.mt-4(data-aos="fade-right") El profesional responsable del Sgsst será quien lidere la investigación, garantizando el cumplimiento normativo legal vigente, a su vez diligencia el formato de investigación justo en el momento en el que se reúne todo el equipo investigador, es el guía y quien dispone el plan de mejora.
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/9.svg' data-aos="fade-left")
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/10.svg' data-aos="fade-right")
          .col-lg-8
            h4.text-start(data-aos="fade-left") El Copasst o vigía de seguridad y salud en el trabajo
            p.mt-4.text-start(data-aos="fade-left") Su participación garantiza el desarrollo de la investigación, dentro de sus obligaciones está el acompañamiento y desarrollo del plan de mejora con sus acciones correctivas, vela porque los recursos sean surtidos a la menor brevedad.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_4 2.4  Medidas de intervención 
    
    .row
      .col-lg-9.mb-4.mb-lg-0.pe-0(style="place-self:center;")
        p(data-aos="fade-up") Son todas aquellas medidas que se deben implementar para garantizar un trabajo seguro, se plasman en un plan de mejora o de trabajo donde se nombran responsables de cada acción, su tiempo de ejecución con fechas límites para su realización y fechas de confirmación de su efectiva realización. Este plan está dirigido a la fuente, el medio y el individuo; dependiendo de las acciones correctivas se escoge a los tres mencionados. #[strong Por ejemplo, si el trabajador se accidentó a falta de guantes, la acción correctiva será compra de EPP y dicho control será en el individuo.]
        .mt-4.p-4(style="background-color:#FFF4D3;")
          p.mb-0(data-aos="fade-up") La investigación del accidente de trabajo le atañe al profesional con licencia del Sgsst y cuenta con 15 días, contados a partir del día siguiente al accidente de trabajo para rendir el respectivo informe. Según la normativa se requiere el trabajo de los siguientes elementos expuestos en los siguientes flujogramas (SURA, 2021).
      .col-lg-3.ps-0(style="place-self:center;")
        figure
          img(src='@/assets/curso/tema2/11.png' data-aos="fade-left")
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .cont_tarjeta_2_1.p-4.row.m-0
          .col-lg-2.col-md-3.mb-3.mb-md-0.text-center(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/13.svg' data-aos="fade-right")
          .col-lg-6.col-md-5.mb-3.mb-md-0(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Para el caso de un #[strong incidente o un cuasiaccidente] se recomienda hacer un paso a paso como se muestra a continuación:
          .col-lg-4.col-md-4.text-center(style="place-self:center;")
            a.boton.color-acento-botones.indicador__container(@click="modal1 = true" data-aos="fade-left")
              span Descargar &nbsp;#[i.fas.fa-file-download]
              .indicador--click(v-if="mostrarIndicador")
      .col-lg.mb-4.mb-lg-0
        .cont_tarjeta_2_1.p-4.row.m-0
          .col-lg-2.col-md-3.mb-3.mb-md-0.text-center(style="place-self:center;")
            figure
              img(src='@/assets/curso/tema2/14.svg' data-aos="fade-right")
          .col-lg-6.col-md-5.mb-3.mb-md-0(style="place-self:center;")
            p.mb-0(data-aos="fade-up") Para el caso de un #[strong accidente], se recomienda el paso a paso es diferente al del incidente tal como se ve a continuación:
          .col-lg-4.col-md-4.text-center(style="place-self:center;")
            a.boton.color-acento-botones(@click="modal2 = true" data-aos="fade-left")
              span Descargar &nbsp;#[i.fas.fa-file-download]
    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        figure
          img(src='@/assets/curso/tema2/15.svg')
    
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        figure
          img(src='@/assets/curso/tema2/16.svg')
    
    p.mt-5(data-aos="fade-up") En relación con la normativa legal del reporte se cuenta con la Resolución 1402 de 2007, por la cual se reglamenta la investigación de incidentes y accidentes de trabajo de manera legal y establece las siguientes sanciones en caso de incumplimiento:

    .row.mt-5.cont_2_1.p-5
      img.image_absolute.d-lg-block.d-none(src="@/assets/curso/tema1/6.svg" data-aos="fade-right")
      .col-xl-11.m-auto.row.m-0
        .col-lg-8.mb-4.mb-lg-0(style="place-self:center")
          p.text-white.mb-0(data-aos="fade-up") #[strong La Resolución 1402 de 2007], por la cual se reglamenta la investigación de incidentes y accidentes de trabajo; en su artículo 15 contempla el ítem de sanciones al incumplimiento de la misma. La sanción se establece en los literales a) y c) del artículo 91 del Decreto-ley 1295 de 1994. La competencia de estas, compete a las Direcciones Territoriales del Ministerio de la Protección Social, conforme al artículo 115 del Decreto-ley 2150 de 1995.
          a.boton.color-acento-botones.mt-5(data-aos="zoom-in-up" href="https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1401-2007.pdf" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
        .col-lg-4(style="place-self:center")
          figure
            img(src="@/assets/curso/tema2/18.svg" data-aos="fade-left" style="max-width:350px")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_5 2.5  Causas de los incidentes y accidentes laborales
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/19.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p.mb-0(data-aos="fade-up") La experiencia laboral en materia de seguridad y salud en el trabajo permite ver a ciencia cierta la ocurrencia de incidentes y accidente laborales en un mayor grado por cuestiones humanas, las personas por razones personales y que obedecen a causas ocultas olvidan asegurar su área de trabajo, usar correctamente sus EPP, confirmar el buen estado de equipos, máquinas, herramientas, vehículos, entre otros que pueden causar un daño potencial a la salud del colaborar; en la misma media el estado de salud en algunos casos no es el óptimo y el trabajador deja de lado dar aviso oportuno y cumplir con su cita médica, en tal sentido no puede identificar el riesgo. Igualmente cometen actos inseguros, asegurando que nada les pasará, es decir, realizan actos inseguros por exceso de confianza. 
    
    .row.mt-5.col-xl-10.m-auto
      .col-lg.mb-5.mb-lg-0
        .p-4.h-100.cont_tarjeta_2_2(style="border-radius:10px;border:3px #FFC721 solid;")
          p.mb-0(data-aos="fade-up") Por otra parte, se identifican equipos, máquinas, vehículos, herramientas, instalaciones y otros más, en mal estado o defectuosos. 
      .col-lg.mb-5.mb-lg-0
        .p-4.h-100.cont_tarjeta_2_3(style="border-radius:10px;border:3px #FFC721 solid;")
          p.mb-0(data-aos="fade-up") Incorrecta distribución de productos y elementos para trabajar. 
      .col-lg.mb-5.mb-lg-0
        .p-4.h-100.cont_tarjeta_2_4(style="border-radius:10px;border:3px #FFC721 solid;")
          p.mb-0(data-aos="fade-up") Falta de mantenimiento preventivo y correctivo en las áreas donde laboran los colaboradores.
    
    Separador.mt-5
  
    .titulo-segundo
      h2#t_2_6 2.6  Accidente grave y/o mortal
    
    .row
      .col-lg-3.mb-4.mb-lg-0.pe-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/20.png" data-aos="fade-right")
      .col-lg-9.ps-0(style="place-self:center;")
        p(data-aos="fade-up") Un accidente grave hace alusión a la magnitud del daño que causa a la salud del trabajador; entre estas están: fracturas de huesos de extremidades o de la cabeza, amputaciones, quemaduras de segundo grado en adelante; en consecuencia, se afecta la salud física, emocional y psicológica del trabajador. 
        p.mt-4(data-aos="fade-up") #[strong(style="color:#465FC4;") Un accidente mortal es aquel que cobra la vida del trabajador.]
        p.mt-4(data-aos="fade-up") Teniendo en cuenta el peligro existente y sus consecuencias, sumando el nivel del riesgo que se halla; se determinan los controles a tener en cuenta en cada peligro evaluado, por lo general se conforman de la eliminación o sustitución del peligro, entrega y formación en el uso adecuado y mantenimiento de elementos de protección personal y equipos de protección personal; además de controles de ingeniería y controles administrativos en materia de SST.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_7 2.7  Análisis de caso 1
    
    .cont_caso1
      .col-xl-10.m-auto.ps-4.pe-4.pb-5
        h4.pt-5.ps-2.pe-2.pb-3.mb-o.text-white(data-aos="zoom-in-up" style="background-color:#465FC4;width:fit-content;") Caso 1
        .row.mt-4
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/22.png" data-aos="fade-right")
          .col-lg-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") #[strong(style="color:#465FC4;") El día 16 de septiembre de 2022, tres trabajadores hacen mantenimiento preventivo a los aires acondicionados de las oficinas de la empresa XYZ. Uno de los aires destapados deja salir agua, esta se empoza justo por donde pasan los trabajadores de la empresa; una de las secretarías resbala sin caer.]
        p.mt-5(data-aos="fade-up") El anterior caso corresponde a un incidente en razón a que la trabajadora no cae al piso y en tal sentido no sufre ningún tipo de lesión. 

        h4.mt-5(data-aos="fade-up") Plan de mejora:

        .tabla-a.color-acento-botones.mt-5 
          table
            thead(style="border:0;")
              tr(style="background-color:#FFC721;")
                th(style="border-color:#636363;") Actividad
                th(style="border-color:#636363;") Responsable
                th(style="border-color:#636363;") Fecha de realización
                th(style="border-color:#636363;") Fecha de verificación #[br] de realización
                th(style="border-color:#636363;") Observaciones
            tbody
              tr(style="background-color:#fff;")
                td.text-center.p-4(style="border-color:#636363;") Demarcar las áreas de trabajo con cinta amarilla para alertar a los demás trabajadores de los mantenimientos que se realizan y así evitar posibles incidentes. 
                td.text-center.p-4(style="border-color:#636363;") Trabajadores de mantenimiento.
                td.text-center.p-4(style="border-color:#636363;") Antes de la realización de cada trabajo de mantenimiento. 
                td.text-center.p-4(style="border-color:#636363;") Según el cronograma de actividades del área de mantenimiento. 
                td.text-center.p-4(style="border-color:#636363;") Toda vez que se cumplan las actividades del cronograma de mantenimiento, se tomará el registro fotográfico de la acción tomada para la respectiva documentación del Sgsst. 
              tr(style="background-color:#fff;")
                td.text-center.p-4(style="border-color:#636363;") Lección aprendida a todo el personal de mantenimiento. 
                td.text-center.p-4(style="border-color:#636363;") Profesional responsable del Sgsst o SISO.
                td.text-center.p-4(style="border-color:#636363;") 17/09/2022
                td.text-center.p-4(style="border-color:#636363;") 26/09/2022
                td.text-center.p-4(style="border-color:#636363;") Se informa del incidente ocurrido a todo el personal y se determina la acción preventiva tomada. Se adjuntan fotos de la asistencia a la formación y se diligencia el formato de asistencia a la misma.
              tr(style="background-color:#fff;")
                td.text-center.p-4(style="border-color:#636363;") Lección aprendida a todos los trabajadores del piso. Se forma en la prevención de incidentes. 
                td.text-center.p-4(style="border-color:#636363;") Profesional responsable del Sgsst o SISO.
                td.text-center.p-4(style="border-color:#636363;") 17/09/2022
                td.text-center.p-4(style="border-color:#636363;") 26/09/2022
                td.text-center.p-4(style="border-color:#636363;") Se habla del momento del incidente ocurrido y la importancia de prestar atención por donde se camina para evitar este tipo de incidentes. Se adjuntan fotos de la asistencia a la formación y se diligencia el formato de asistencia a la misma.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_8 2.8  Análisis de caso 2

    .cont_caso1
      .col-xl-10.m-auto.ps-4.pe-4.pb-5
        h4.pt-5.ps-2.pe-2.pb-3.mb-o.text-white(data-aos="zoom-in-up" style="background-color:#465FC4;width:fit-content;") Caso 2
        .row.mt-4
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/23.png" data-aos="fade-right")
          .col-lg-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") #[strong(style="color:#465FC4;") El siguiente caso tiene ocasión el 16 de septiembre de 2022. Mariana es la asistente administrativa de la empresa ZBY, se da cuenta que su ordenador se prende y apaga sin control, se le ocurre chequear el cableado y descubre que uno de ellos está pelado; se da a la tarea de arreglarlo porque tiene algún conocimiento en reparación. Al conectar al fluido eléctrico los cables se ocasiona un problema de electricidad del cual Mariana sufre heridas de segundo grado en su mano derecha.]
        p.mt-5(data-aos="fade-up") #[strong La trabajadora sufre un accidente grave de trabajo que la ARL no reconoce], porque Mariana no está contratada para realizar mantenimiento a equipos de cómputo y tampoco recibió una orden directa de su jefe inmediato para tal fin. Se realiza la investigación del accidente y el equipo investigador de primera instancia rechaza el siniestro y al enviar el reporte a la ARL también se genera la misma decisión. La trabajadora recibe atención directa de su empresa prestadora de servicios de salud con todo lo que conlleva su recuperación e incapacidad. 

        h4.mt-5(data-aos="fade-up") Plan de mejora:

        .tabla-a.color-acento-botones.mt-5 
          table
            thead(style="border:0;")
              tr(style="background-color:#FFC721;")
                th(style="border-color:#636363;") Actividad
                th(style="border-color:#636363;") Responsable
                th(style="border-color:#636363;") Fecha de realización
                th(style="border-color:#636363;") Fecha de verificación #[br] de realización
                th(style="border-color:#636363;") Observaciones
            tbody
              tr(style="background-color:#fff;")
                td.text-center.p-4(style="border-color:#636363;") Lección aprendida a todo el personal de la empresa. 
                td.text-center.p-4(style="border-color:#636363;") Profesional responsable del Sgsst o SISO.
                td.text-center.p-4(style="border-color:#636363;") 17/09/2022
                td.text-center.p-4(style="border-color:#636363;") 26/09/2022
                td.text-center.p-4(style="border-color:#636363;") Se informa del accidente grave que concluyó en un rechazo rotundo por equipo investigador y ARL. Se refuerza la información de lo que corresponde a accidente de trabajo y el que le ocurrió a la trabajadora. Al tiempo se prohíbe la realización de trabajos iguales o similares a todos los trabajadores, haciendo hincapié en el desarrollo explícito para el cual se ha contratado a cada quien. Se adjuntan fotos de la asistencia a la formación y se diligencia el formato de asistencia a la misma.
              tr(style="background-color:#fff;")
                td.text-center.p-4(style="border-color:#636363;") Revisión del cableado de los equipos de oficina. 
                td.text-center.p-4(style="border-color:#636363;") Equipo de mantenimiento
                td.text-center.p-4(style="border-color:#636363;") 18/09/2022
                td.text-center.p-4(style="border-color:#636363;") 30/09/2022
                td.text-center.p-4(style="border-color:#636363;") El equipo de mantenimiento revisa el cableado y repara de forma inmediata según hallazgos. Se adjuntan fotos de la actividad para sustentar la documentación del Sgsst.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_9 2.9  Análisis de caso 3
    
    .cont_caso1
      .col-xl-10.m-auto.ps-4.pe-4.pb-5
        h4.pt-5.ps-2.pe-2.pb-3.mb-o.text-white(data-aos="zoom-in-up" style="background-color:#465FC4;width:fit-content;") Caso 3
        .row.mt-4
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/24.png" data-aos="fade-right")
          .col-lg-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") #[strong(style="color:#465FC4;") El 23 de septiembre de 2022, una cuadrilla de la Electrificadora del Chocó va en camioneta cuatro por cuatro por una vía destapada, el día está nublado, hay presencia de neblina y lluvia. El conductor presenta síntomas de malestar general, lo que generalmente se conoce como gripe y para tratar su convalecencia ha tomado Pax caliente noche y día, sin percatarse que estos vasodilatadores le generan somnolencia y así no podrá estar alerta al ciento por ciento. El conductor hace su mejor esfuerzo, pero por el tema climático se presenta un derrumbe de tierra que genera un el volcamiento del vehículo. Al conductor no le pasó nada, tuvo simples golpes, porque tenía su cinturón de seguridad; los restantes tres trabajadores sufrieron heridas por no llevar el cinturón de seguridad puesto. El copiloto sufrió graves fracturas en su cabeza, los trabajadores del asiento trasero sufrieron fracturas en sus piernas.]
        p.mt-5(data-aos="fade-up") El anterior es un accidente de trabajo y paso seguido se expone el árbol de causas, así:

        .bg-white.mt-4(style="border-radius:15px;")
          .col-xl-10.m-auto.p-4
            figure
              img(src="@/assets/curso/tema2/25.svg" data-aos="zoom-in-up")
        
        p.mt-5(data-aos="fade-up") Resumen de causas:
        .bg-white.mt-4(style="border-radius:15px;")
          .col-xl-10.m-auto.p-4
            .tabla-a.color-acento-botones
              table
                thead(style="border:0;")
                  tr
                    th.text-center(style="border-color:#F9931F;background-color:#FFC721;" colspan="2") CAUSAS INMEDIATAS
                    th.text-center(style="border-color:#F9931F;background-color:#F9931F;" colspan="2") CAUSAS BÁSICAS
                tbody
                  tr(style="background-color:#fff;")
                    td.text-center.p-3(style="border-color:#F9931F;background-color:#FFF4D3;") #[strong Condición subestándar]
                    td.text-center.p-3(style="border-color:#F9931F;background-color:#FFF4D3;") #[strong Actos subestándar]
                    td.text-center.p-3(style="border-color:#F9931F;background-color:#FEDBB3;") #[strong Factores de trabajo ]
                    td.text-center.p-3(style="border-color:#F9931F;background-color:#FEDBB3;") #[strong Factores personales]
                  tr(style="background-color:#fff;")
                    td.text-center.p-3(style="border-color:#F9931F;") Derrumbe de tierra
                    td.text-center.p-3(style="border-color:#F9931F;") Falta de identificación del riesgo
                    td.text-center.p-3(style="border-color:#F9931F;") Traslados en vías publicas terciarias
                    td.text-center.p-3(style="border-color:#F9931F;") Exceso de confianza
                  tr(style="background-color:#fff;")
                    td.text-center.p-3(style="border-color:#F9931F;") Carretera destapada
                    td.text-center.p-3(style="border-color:#F9931F;") 
                    td.text-center.p-3(style="border-color:#F9931F;") Procedimientos peligrosos (traslados en vías peligrosas).
                    td.text-center.p-3(style="border-color:#F9931F;") No uso de cinturón de seguridad.
                  tr(style="background-color:#fff;")
                    td.text-center.p-3(style="border-color:#F9931F;") Lluvias
                    td.text-center.p-3(style="border-color:#F9931F;") 
                    td.text-center.p-3(style="border-color:#F9931F;") 
                    td.text-center.p-3(style="border-color:#F9931F;") Conductor somnoliento por ingesta de vasodilatadores.
                  tr(style="background-color:#fff;")
                    td.text-center.p-3(style="border-color:#F9931F;") Neblina
                    td.text-center.p-3(style="border-color:#F9931F;") 
                    td.text-center.p-3(style="border-color:#F9931F;") 
                    td.text-center.p-3(style="border-color:#F9931F;") Conductor con cuadro gripal.
        
        h4.mt-5(data-aos="fade-up") Plan de mejora:

        .tabla-a.color-acento-botones.mt-5 
          table
            thead(style="border:0;")
              tr(style="background-color:#FFC721;")
                th(style="border-color:#636363;") Actividad
                th(style="border-color:#636363;") Responsable
                th(style="border-color:#636363;") Fecha de realización
                th(style="border-color:#636363;") Fecha de verificación #[br] de realización
                th(style="border-color:#636363;") Observaciones
            tbody
              tr(style="background-color:#fff;")
                td.text-center.p-4(style="border-color:#636363;") Lección aprendida a todo el personal de la empresa.
                td.text-center.p-4(style="border-color:#636363;") Profesional responsable del Sgsst o SISO.
                td.text-center.p-4(style="border-color:#636363;") 26/09/2022
                td.text-center.p-4(style="border-color:#636363;") 07/10/2022
                td.text-center.p-4(style="border-color:#636363;")
                  p Se informa del accidente grave a todo el personal. Se recuerdan los deberes de los trabajadores en lo que se refiere a informar sobre el estado de su salud para tomar las medidas necesarias del caso. Todo trabajador con enfermedad general tiene el deber y derecho de consultar por su EPS y tomarse la medicación prescrita por medicina general y además tomar la incapacidad del caso. 
                  p Todos los trabajadores deben usar la totalidad de los elementos de protección personal, en este caso, deben usar apropiadamente el cinturón de seguridad. 
                  p Todos los trabajadores deben informar del estado climático para hacer la respectiva parada laboral, asegurando la seguridad y salud de todos los ocupantes de un vehículo. 
                  p Se adjuntan fotos de la asistencia a la formación y se diligencia el formato de asistencia a la misma.
                tr(style="background-color:#fff;")
                  td.text-center.p-4(style="border-color:#636363;") 
                    p Formación plan vial y normas. 
                    p Recordación política de SST y política de seguridad vial.
                  td.text-center.p-4(style="border-color:#636363;") Profesional responsable del Sgsst o SISO.
                  td.text-center.p-4(style="border-color:#636363;") 
                    p 26/09/2022
                    p 28/09/2022
                    p 30/09/2022
                  td.text-center.p-4(style="border-color:#636363;") 07/10/2022
                  td.text-center.p-4(style="border-color:#636363;") Realizar la formación citada. Se adjuntan fotos de la actividad para documentar el Sgsst.

    
    Separador.mt-5

    .titulo-segundo
      h2#t_2_10 2.10  Análisis de caso 4
    
    .cont_caso2
      .col-xl-10.m-auto.ps-4.pe-4
        h4.pt-5.ps-2.pe-2.pb-3.mb-o.text-white(data-aos="zoom-in-up" style="background-color:#465FC4;width:fit-content;") Caso 4
        .row.mt-4
          .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/26.png" data-aos="fade-right")
          .col-lg-8(style="place-self:center;")
            p.mb-0(data-aos="fade-up") #[strong(style="color:#465FC4;") El pasado 25 de septiembre de 2022 tres trabajadores de la empresa ABC realizan mantenimiento a las ventanas de un edificio que tiene 20 pisos, los trabajadores están sobre un andamio que cuenta con certificación, tienen equipo de trabajo para alturas pero no usan la línea de vida, están en el nivel cuatro; intempestivamente se genera un movimiento telúrico importante que hace que la estructura se mueva y dos de los trabajadores han caído, uno murió inmediatamente y el otro tiene fracturas en su columna; milagrosamente el tercero de ellos se pudo agarrar de las barandas del andamio de tal manera que salió ileso.]
        .row.mt-5
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            p(data-aos="fade-up") En el caso anterior se demuestra que la empresa ha entregado todos los elementos de protección personal y colectivo a sus trabajadores. #[strong El exceso de confianza abre todas las posibilidades de ocurrencia de un siniestro]; en el citado muere un trabajador y otro queda con pronóstico reservado de importante relevancia. A pesar de que los colaboradores no usan sus sistemas de protección colectiva, la ARL reconoce el accidente de trabajo y le da todo su manejo. 
            p.mt-4(data-aos="fade-up") En este siniestro #[strong intervienen el Ministerio de trabajo, la ARL y el profesional responsable del Sgsst, sumando el área de recursos humanos] de la empresa por el mortal y la gravedad de la situación del otro trabajador. El SISO de la empresa se limita al apoyo de la recolección de datos y demás que soporten el proceso que por su final es bastante complejo. El equipo investigador de la empresa cumple a cabalidad su cometido y se conforma por el profesional responsable del Sgsst, un miembro del Copasst, el jefe inmediato de los trabajadores y el trabajador que quedó fuera de peligro, si hubo testigos, estos deben aportar su versión.
          .col-lg-5(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/27.svg" data-aos="fade-left")
        p.mt-5(data-aos="fade-up") De entrada, el Ministerio de Trabajo pide el Sgsst, inducciones, reinducciones, exámenes médicos ocupacionales de ingreso y periódicos, plan de trabajo anual, cronograma de actividades de formación, evidencias de la entrega de EPP y equipos de protección personal, cursos de alturas, curso de rescate vertical, entre otros que son el soporte de prevención en materia de seguridad y salud en el trabajo. 

        .row.mt-5.p-4(style="background-color:#9AECCD;")
          .col-lg-2.col-md-3.mb-4.mb-md-0(style="place-self:center")
            figure
              img(src="@/assets/curso/tema2/28.svg" data-aos="fade-right")
          .col-lg-10.col-md-9(style="place-self:center")
            p.mb-0(data-aos="fade-up") La #[strong ARL responde en el ciento por ciento] de atenciones médicas especializadas y demás que se requieran para el trabajador con pronóstico reservado. Un trabajador que queda postrado en cama recibe toda su atención con la ARL y, en el caso del trabajador fallecido, en la misma manera responde de acuerdo con la legislatura legal vigente.


    
        



</template>

<script>
export default {
  name: 'Tema2',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetas: true,
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass">
.tabs-a__content-item.tabs-a__content-item--active .tarjeta.color-acento-botones
  background-color: #EAFAF4
.tabs-a__tab
   background-color: #E8E8E8
.tabs-a.color-acento-botones .tabs-a__tab__selected
  background-color: #FFC721 !important
.tabs-a.color-acento-botones .tabs-a__tab__selected:before
  background-color: #FFC721 !important
.tabs-a.color-acento-botones .tabs-a__tab:hover, .tabs-a.color-acento-botones .tabs-a__tab:active, .tabs-a.color-acento-botones .tabs-a__tab:focus
  background-color: #FFC721 !important
.pasos-a.color-acento-contenido .pasos-a__circle div
  color: #fff
.cont_tarjeta_2_1
  background: url(../assets/curso/tema2/12.png)
  background-size: cover
  border-radius: 20px
.cont_2_1 *,.cont_2_1
  position: relative
.cont_2_1
  background: url(../assets/curso/tema2/17.svg)
  background-size: cover
  background-repeat: no-repeat
  background-position: right
@media screen and (max-width: 1000px)
  .cont_2_1
    background-position: left !important
.image_absolute
  position: absolute !important
  width: 150px
  height: 150px
  bottom: -1rem
  left: -.5rem
.cont_tarjeta_2_2 *, .cont_tarjeta_2_2,.cont_tarjeta_2_3 *, .cont_tarjeta_2_3,.cont_tarjeta_2_4 *, .cont_tarjeta_2_4
  position: relative
.cont_tarjeta_2_2:before
  content: ''
  position: absolute
  width: 40px
  height: 40px
  border-radius: 100%
  border: 8px #9AECCD solid
  right: 10px
  bottom: -20px
.cont_tarjeta_2_3:before
  content: ''
  position: absolute
  width: 40px
  height: 40px
  border-radius: 100%
  border: 8px #9AECCD solid
  right: 10px
  top: -20px
.cont_tarjeta_2_4:before
  content: ''
  position: absolute
  width: 40px
  height: 40px
  border-radius: 100%
  border: 8px #9AECCD solid
  right: 10px
  bottom: -20px
.cont_caso1
  background: url(../assets/curso/tema2/21.png)
  background-size: cover
.cont_caso2
  background: url(../assets/curso/tema2/21.png)
  background-size: cover
  background-position: 0 -70px
  background-repeat: no-repeat
</style>
