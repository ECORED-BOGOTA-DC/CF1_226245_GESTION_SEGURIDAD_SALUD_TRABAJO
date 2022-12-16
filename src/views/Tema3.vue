<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Implementación medidas de intervención
    
    .row
      .col-lg-4.mb-4.mb-lg-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.png" data-aos="fade-right")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-up") Cualquiera que sea la empresa, productora, transformadora, comercializadora, de servicios, entre otras, presenta riesgos para la salud o la vida de los trabajadores. El Sgsst propende por cuidar de la seguridad y salud de los trabajadores y en este sentido se deben disponer de todas las medidas necesarias para dar cumplimiento a dicha finalidad. 
        p.mt-4(data-aos="fade-up") Las medidas de intervención en el marco de la SST desarrollan la cultura del cuidado colectivo y autocuidado, se convierte en obligación la justa y puntual dedicación que los trabajadores hagan al respecto, a fin de evitar accidentes y enfermedades laborales; en conclusión, las medidas de intervención son actividades y controles de prevención a la afectación y a la seguridad y salud de los trabajadores. 
    
    p.mt-5(data-aos="fade-up") Las siguientes son las medidas de intervención más comunes en las unidades productivas:

    .row.mt-5
      .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.ps-5(titulo="Eliminación")
            p Con este control se elimina definitivamente el peligro. 
          .row.ps-5(titulo="Sustitución")
            p Se cambia un gran peligro por otro de menor impacto. 
          .row.ps-5(titulo="Controles de ingeniería")
            p Dependiendo de la organización, puede ser la instalación de un sistema de ventilación, protecciones para máquinas, aislamiento del ruido en el medio o en la fuente, etc. 
          .row.ps-5(titulo="Señales y controles administrativos")
            p Por ejemplo, las sirenas, los sistemas de alarma, el etiquetado en las sustancias químicas, procedimientos de seguridad y permisos de trabajo (confinados, en alturas, en caliente), entre otros.
          .row.ps-5(titulo="Elementos de protección personas")
            p Se componen de casco, gafas, protección auditiva, mascarillas, calzado de seguridad, protección para oídos, entre otros.  
      .col-lg-5(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/2.svg" data-aos="fade-left")
    
    Separador.mt-5

    .titulo-segundo
      h2#t_3_1 3.1 Mecanismos de divulgación 

    .row
      .col-lg-9.mb-4.mb-lg-0.pe-0(style="place-self:center;")
        p(data-aos="fade-up") Dar a conocer a todos los trabajadores los peligros a los que se enfrenta y su mejor manera de administrar el riesgo es uno de los retos en la gestión de la SST. Los mecanismos más utilizados son la inducción y reinducción, informar y formar en la identificación de peligros y valoración del riesgo tal cual lo indica la Guía Técnica Colombiana 45 (GTC 45) por medio de capacitaciones presenciales y grupales, al tiempo extremar la promoción por medio de afiches que se ubican en las carteleras principales de la empresa, charlas, talleres, la apertura de permisos de trabajo, entre otras; la eficacia de la formación es de gran valor, es así como toda información y formación debe ser evaluada y con mayor razón repetirla en caso de que el trabajador no supere la calificación que se espera. 
        .row.p-4(style="background-color:#EAFAF4;")
          .col-auto
            figure
              img(src="@/assets/curso/tema3/4.svg" data-aos="fade-right")
          .col
            p(data-aos="fade-up") Otra forma es los medios de comunicación satisfactoria con todas las áreas y centros de trabajo de la empresa, la cual hace posible divulgar la gestión interna (políticas, lineamientos, estrategias, procedimientos, formatos, sanciones, circulares, llamados de atención y comunicados) a todos los empleados y recibir llamados de mejora continua para la empresa, estos medios de comunicación también pueden ser: 
            p.mt-4(data-aos="fade-up") #[strong(style="color:#465FC4;") Correo electrónico #[em (e-mail), intranet, chat], página web, red telefónica o informes escritos entre otras muchas opciones físicas y digitales.]
      .col-lg-3.ps-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/3.png" data-aos="fade-left")
    
    Separador.mt-5
    
    .titulo-segundo
      h2#t_3_2 3.2  Seguimiento al cumplimiento
    
    .row
      .col-lg-1.col-md-3.mb-4.mb-md-0(style="place-self:center")
        figure
          img(src="@/assets/curso/tema3/5.svg" data-aos="fade-right")
      .col-lg-11.col-md-9(style="place-self:center")
        p.mb-0(data-aos="fade-up") La documentación del sistema es una de las exigencias de tipo legal y en este sentido es necesario realizar todo tipo de acción que conlleve a una mejora continua que se pueda evidenciar y para ello registrar en los formatos correspondientes las evidencias de cada uno de los casos. Las acciones son de tipo preventivo y correctivo como se muestra a continuación:
    
    .row.mt-5
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FFE9A6;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema3/6.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") Acciones preventivas
          p.mt-3(data-aos="fade-up") Es toda medida que se toma antes de que llegue a producir un daño, se elimina o sustituye el peligro. Como su nombre lo dice, previene, por lo tanto, se toma antes de un posible siniestro.
      .col-lg.mb-4.mb-lg-0
        .h-100.p-4(style="background-color:#FCC98F;border-radius:20px;")
          figure
            img(src="@/assets/curso/tema3/7.png" data-aos="zoom-in-up")
          h4.mt-4(data-aos="fade-up") Acciones correctivas
          p.mt-3(data-aos="fade-up") Las medidas correctivas procuran reducir o eliminar el peligro que causa daño al trabajador, esta medida se toma después de un siniestro. 

    Separador.mt-5

    .titulo-segundo
      h2#t_3_3 3.3  Registro de implementación de acciones
    
    p(data-aos="fade-up") El Sgsst debe estar documentado en la totalidad de todas sus actividades, toda vez que se realice una acción preventiva o correctiva es necesario diligenciar el formato que corresponda al sistema. Dicho formato debe llevar la siguiente información:

    .col-xl-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema3/8.svg" data-aos="zoom-in-up")
    
    p.mt-5(data-aos="fade-up") El registro de cumplimiento de acciones garantiza la puesta en marcha de un plan de mejora. Dando continuidad al formato que se enuncia en el anterior apartado, se sigue su trazabilidad indicando: responsable de la ejecución, fecha de verificación de la ejecución y eficiencia del resultado obtenido y, finalmente, una casilla de observaciones. 

    Separador.mt-5

    .titulo-segundo
      h2#t_3_4 3.4 Medición
    
    .row
      .col-lg-8.mb-4.mb-lg-0(style="place-self:center;")
        p(dat-aos="fade-up") La medición de todas las actividades del Sgsst es reglamentaria. Los indicadores son la herramienta esencial en esta medición, para ello es necesario que sean medibles, es decir, que se puedan cuantificar, específicos y alcanzables. Dando continuidad al ítem anterior el indicador corresponde a confirmar la eficacia en las acciones y tiene las siguientes características:
      .col-lg-4(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/9.png" data-aos="fade-left")
    
    SlyderF.mt-5(columnas="col-lg-6 col-xl-3")
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/10.svg')
        h4.text-center Nombre del indicador
        p.text-center Porcentaje de #[strong acciones preventivas] realizadas. Demuestra el grado de cumplimiento de las acciones preventivas adoptadas.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/11.svg')
        h4.text-center Fórmula
        p.text-center (# de acciones preventivas cerradas / # total de acciones existentes) × 100. 
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/12.svg')
        h4.text-center Nombre del indicador
        p.text-center Porcentaje de acciones correctivas realizadas. Denota el grado de cumplimiento de las acciones correctivas implementadas.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/13.svg')
        h4.text-center Fórmula
        p.text-center (# de acciones preventivas correctivas cerradas / # total de acciones existentes) × 100.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/14.svg')
        h4.text-center La meta
        p.text-center Ideal es cerrar siempre al 100%; es de tener en cuenta que estos indicadores tienden a aumentar su meta, en tal razón puede empezar por 50%, dependiendo de la naturaleza de cada empresa para dar la oportunidad a la mejora progresiva.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/15.svg')
        h4.text-center Frecuencia de medición
        p.text-center Es prudente proyectarlo a un periodo trimestral, máximo semestral.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/16.svg')
        h4.text-center Tipo de indicadores
        p.text-center Eficacia.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/17.svg')
        h4.text-center Fuente de información
        p.text-center Corresponde a todos los procesos de la organización.
      .tarjeta.color-primario.p-4(style="background-color:#D5F5E9;")
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema3/18.svg')
        h4.text-center Responsable
        p.text-center Se designa como responsable al jefe de cada proceso.




</template>

<script>
export default {
  name: 'Tema3',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
    indicadorTarjetas: true,
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
.tarjeta.tarjeta--gris.acordion__activo
  background-color: #D5F5E9
.slyder-f__btn i
  font-size: 2rem
  background-color: #F9931F
  color: white
  padding: 0.8rem 1.2rem
  border-radius: 100%
.slyder-f
  .horizontal-scroll
    display: flex !important
    align-items: stretch !important
    height: 100%
    .slyder-f__slyde
      display: flex
      align-items: stretch
</style>
