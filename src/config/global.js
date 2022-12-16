export default {
  global: {
    componenteFormativo: 'Trabajo y reporte de incidentes',
    descripcionCurso:
      'La seguridad y la salud en el trabajo es una disciplina en cabeza del empresario y que debe practicarse a diario por parte de todos los integrantes de la organización, incluyendo la población que ingrese en la misma. El fomento y la práctica son el día a día en cada empresa, evitando a todo costo incidentes, accidentes y enfermedades laborales.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Reporte de Incidentes y accidente laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normativa legal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Incidentes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Accidentes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Enfermedad laboral',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Enfermedad común',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Formatos para reporte de accidentes y enfermedades',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Sistema de Riesgos Laborales',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Estructura',
            hash: 't_1_8',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Investigación de incidentes y accidentes laborales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Metodologías de investigación',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Obligación de los aportantes',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Equipo investigador',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Medidas de intervención',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Causas de los incidentes y accidentes laborales',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Accidente grave y/o mortal',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Análisis de caso 1',
            hash: 't_2_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.8',
            titulo: 'Análisis de caso 2',
            hash: 't_2_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.9',
            titulo: 'Análisis de caso 3',
            hash: 't_2_9',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.10',
            titulo: 'Análisis de caso 4',
            hash: 't_2_10',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Implementación medidas de intervención',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Mecanismos de divulgación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Seguimiento al cumplimiento',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Registro de implementación de acciones',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Medición',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Allianz (2021). ¿Qué es un accidente? Allianz.',
      link:
        'https://www.allianz.es/descubre-allianz/mediadores/diccionario-de-seguros/a/que-es-un-accidente.html ',
    },
    {
      referencia: 'Congreso de Colombia. (2012). Ley 1562.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Ley-1562-de-2012.pdf ',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución número 1401 de 2007. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1401-2007.pdf ',
    },
    {
      referencia:
        'MinTrabajo (2014). Decreto 1477 de 2014. Anexo técnico tabla de enfermedades laborales. ',
      link:
        'https://funcionpublica.gov.co/eva/gestornormativo/documentos/tabla1-decreto1477.pdf ',
    },
    {
      referencia:
        'Mintrabajo. (s. f.). Sistema de Gestión de Seguridad y Salud en el Trabajo. ',
      link:
        'https://www.mintrabajo.gov.co/relaciones-laborales/riesgos-laborales/sistema-de-gestion-de-seguridad-y-salud-en-el-trabajo ',
    },
    {
      referencia:
        'Positiva (2013). ¿Cómo investigar un incidente y accidente de trabajo en la empresa? Positiva. ',
      link:
        'https://sig.unad.edu.co/images/sig_seguridad_salud/Cartilla_Investigacion_de_Incidentes_y_Accidentes_de_trabajo_.pdf ',
    },
    {
      referencia: 'UPB. (2020). ¿Qué es un accidente de trabajo? UPB ',
      link:
        'https://www.upb.edu.co/es/seguridad-salud-trabajo/accidentes-e-incidentes-de-trabajo ',
    },
    {
      referencia:
        'Velásquez, L.F. O. (2016). Compendio de normas legales en Colombia sobre Seguridad y Salud en el Trabajo. VitalSource Bookshelf.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://resolver.vitalsource.com/9789588879161 ',
    },
  ],
  glosario: [
    {
      termino: 'Administradora de Riesgos Laborales',
      significado:
        'entidades que tienen como objetivo prevenir, proteger y atender a los trabajadores contra Accidentes de Trabajo y Enfermedades Profesionales que puedan ocurrir en el trabajo que desarrollan.',
    },
    {
      termino: 'Afiliación',
      significado:
        'proceso mediante el cual las empresas y sus trabajadores ingresan al Sistema General de Riesgos Profesionales a través de ARL Sura.',
    },
    {
      termino: 'AFP',
      significado: 'Administradora de Fondos de Pensiones y Cesantías.',
    },
    {
      termino: 'EPS',
      significado: 'Entidades Promotoras de Salud.',
    },
    {
      termino: 'Estado de afiliación',
      significado:
        'determina cómo se encuentra una persona o empresa en un momento determinado, puede ser: <br> - Activa. <br> - En cobertura. <br> - Inactiva. <br> - Sin cobertura.',
    },
    {
      termino: 'Mapa de riesgos',
      significado:
        'descripción gráfica y en la planta de la presencia de los factores de riesgo en las instalaciones de una empresa, mediante una simbología previamente definida.',
    },
    {
      termino: 'Ocupaciones u oficios',
      significado: 'códigos asignados en el Sistema de Riesgos Profesionales.',
    },
    {
      termino: 'Riesgo',
      significado:
        'probabilidad de que un evento ocurra. Abarca una variedad de medidas de probabilidad de un resultado generalmente no favorable (MeSH/NLM). Número esperado de pérdidas humanas, personas heridas, propiedad dañada e interrupción de actividades económicas debido a fenómenos naturales particulares y por consiguiente, el producto de riesgos específicos y elementos de riesgo.',
    },
    {
      termino: 'Seguridad Industrial',
      significado:
        'uno de los cuatro subprogramas definidos al interior de un Programa de Seguridad y Salud Trabajo que se encarga de vigilar aquellos factores de riesgo que pueden ocasionar accidentes de trabajo. Vigila todas aquellas condiciones y/o actos inseguros a nivel del medio o del trabajador con potencialidad de generar Accidentes de Trabajo. La Seguridad Industrial como capítulo de la salud ocupacional normalmente va acompañada del subprograma de Higiene Industrial.',
    },
  ],
  complementario: [
    {
      tema: '1.2. Normativa legal.',
      referencia:
        'Velásquez, L.F. O. (2016). Compendio de normas legales en Colombia sobre Seguridad y Salud en el Trabajo. VitalSource Bookshelf. ',
      tipo: 'Libro de base de datos.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://resolver.vitalsource.com/9789588879161 ',
    },
    {
      tema: 'Tema 2. Investigación de incidentes y accidentes laborales.',
      referencia:
        'Umivale Suma. (2018). Guía para la investigación de accidentes de trabajo. Umivale. ',
      tipo: 'Cartilla digital',
      link:
        'https://umivaleactiva.es/dam/web-corporativa/Documentos-prevenci-n-y-salud/Gesti-n-PRL/Guia-Investigacion-Accidentes_Trabajo.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luz Dary Poveda Sierra',
        cargo: 'Experto técnico',
        centro:
          'Centro de Tecnologías del Transporte - Regional Distrito Capital',
      },
      {
        nombre: 'Luis Fernando Botero Mendoza',
        cargo: 'Diseñador instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Asesora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Jesús Pérez Madariaga',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: '',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guión audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
