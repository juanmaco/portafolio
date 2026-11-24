/* PROTOTYPE POCKET · contenido del portafolio (guion, proyectos y casos).
   Edita los textos aquí sin tocar el motor del juego. {nombre} se reemplaza por el nombre del visitante. */
window.DATOS = {
  contacto: {
    linkedin: "https://www.linkedin.com/in/juan-cordoba-designer/",
    behance: "https://www.behance.net/juanmaco18",
    // El correo se arma en el navegador para que los bots no lo lean del código fuente.
    correo: ["juanmaco-97", "hotmail.com"],
    cv: "assets/cv/CV_Juan_Manuel_Cordoba.pdf", // versión web: sin dirección ni teléfonos de referencias
    cvArchivo: "CV_Juan_Manuel_Cordoba.pdf"
  },

  // Textos de la interfaz (menús, botones, avisos). La versión en inglés está en datos_en.js.
  ui: {
    titulo: "Juan Manuel Córdoba · Product Designer",
    cargando: "Cargando prototipo…",
    saltarIntro: "IR A LOS PROYECTOS ▸",
    saltar: "VER PROYECTOS ▸", saltarTitulo: "Ir directo a los proyectos, sin la intro",
    verPagina: "VER COMO PÁGINA", verPaginaTitulo: "Ver el portafolio como una página web normal, sin jugar",
    pistaTitulo: "Haz clic en la pantalla o pulsa Enter · dura unos 3 minutos", pistaTituloTactil: "Toca la pantalla para empezar · dura unos 3 minutos",
    pistaDialogo: "clic o Enter ▸", pistaDialogoTactil: "toca para seguir ▸",
    pistaLab: "▸ Elige una cápsula: haz clic en ella", pistaLabTactil: "▸ Toca una cápsula para abrirla", pistaLabTeclas: "o usa ← → y Enter · START abre el menú",
    etiquetaA: "ACEPTAR", etiquetaB: "VOLVER", startTitulo: "Abrir el menú (Esc)", selectTitulo: "Cambiar de opción en un menú",
    ayudaTactil: "Toca la pantalla para avanzar · A acepta · B vuelve · START abre el menú",
    sonido: "SONIDO", sonidoTitulo: "Activar o silenciar la música y los efectos", idiomaTitulo: "Switch to English",
    // Menú de inicio: jugar o ver como página (y continuar, solo para quien ya jugó), cada opción con su descripción
    menuInicio: { jugar: "JUGAR", pagina: "VER COMO PÁGINA", continuar: "CONTINUAR", nueva: "NUEVA PARTIDA" },
    menuInicioDesc: { jugar: "La experiencia completa · unos 3 minutos", pagina: "Los proyectos en una página web, sin jugar", continuar: "Vuelve al laboratorio donde lo dejaste", nueva: "Empieza de cero, con la intro completa" },
    holaDeNuevo: "¡Hola de nuevo, {nombre}!\nTus cápsulas te esperan.",
    preguntaNombre: "¿Cómo te llamas?", opcional: "(opcional)", continuar: "CONTINUAR ▸", continuarAyuda: "o pulsa START",
    teclas: ["BORRAR", "MAYÚS", "LISTO"],
    visitante: "VISITANTE",
    visto: "✓ VISTO", proximamente: "PRÓXIMAMENTE",
    fichaProx: "▸ CASO EN PREPARACIÓN · PRÓXIMAMENTE",
    si: "SÍ", no: "NO",
    tomateTiempo: "Tómate tu tiempo, {nombre}.",
    pistaFinalizar: "Cuando quieras, pulsa START\ny elige FINALIZAR.",
    cierreMenu: { cv: "DESCARGAR CV", linkedin: "LINKEDIN", email: "EMAIL", behance: "BEHANCE", volver: "VOLVER AL LAB" },
    start: { finalizar: "FINALIZAR", proyectos: "PROYECTOS", sobreMi: "SOBRE MÍ", contacto: "CONTACTO", clasico: "VER COMO PÁGINA", cerrar: "CERRAR" },
    volverLab: "VOLVER AL LABORATORIO", volverProy: "VOLVER A PROYECTOS",
    capsula: "CÁPSULA", siguiente: "SIGUIENTE", siguienteCapsula: "SIGUIENTE CÁPSULA", finalizar: "FINALIZAR",
    vistoTodo: "¡Viste todos los proyectos!", seguimos: "¿Seguimos explorando?",
    descargarCV: "Descargar CV",
    clasicoIntro: "<b>Lead Product Designer · UX/UI · Product Design · Ops.</b> Profesional en Diseño de Medios Interactivos con más de 6 años de experiencia en UX/UI, Product Discovery, sistemas de diseño y prototipado. Hoy lidero el rediseño de la app de Cinemark para Latinoamérica en SunDevs.",
    jugar: "▸ Jugar la versión PROTOTYPE POCKET",
    en30: "EN 30 SEGUNDOS", miRol: "MI ROL", lectura: "min de lectura", indice: "Contenido del caso", leerMas: "Leer más", leerMenos: "Leer menos", porQue: "Por qué importa:", notasTitulo: "DECISIONES EN ESTA PANTALLA", nota: "Nota",
    verCaso: "Ver caso", avisoProx: "El caso de estudio llega cuando se lance la nueva app.", proxPie: "Próximamente",
    giroTitulo: "GIRA TU TELÉFONO",
    giroTexto: "PROTOTYPE POCKET se juega en horizontal, como una consola portátil. Así los textos se leen mejor.",
    giroBoton: "Prefiero verlo como página ▸",
    ayuda: "Haz clic en la pantalla o en los botones · Teclado: flechas, Enter = A, Retroceso = B, Esc = START",
    botonA: "Botón A: aceptar", botonB: "Botón B: volver"
  },

  intro: [
    "¡Hola! ¡Perdona la espera!\nBienvenido al mundo del\nDISEÑO DE PRODUCTO.",
    "Me llamo JUAN MANUEL CÓRDOBA,\npero todos me dicen JUANMA.",
    "Algunos me llaman\nel PROFESOR UX.\n…Bueno, solo yo.",
    "Este mundo está lleno de\nUSUARIOS con problemas\npor resolver.",
    "Algunos se pierden en un menú,\notros abandonan un carrito…",
    "Yo llevo más de 6 años\nestudiándolos y diseñando\nsoluciones para ellos.",
    "Pero basta de hablar de mí.\n¿Cómo te llamas?"
  ],

  eleccion: {
    pregunta: ["¡Mucho gusto, {nombre}!", "Dime, {nombre}…\n¿qué te trae por aquí?"],
    opciones: [
      { id: "uxui", texto: "UX/UI", destaca: 0, respuesta: "¡Interfaces que se sienten\nobvias! Mi especialidad." },
      { id: "product", texto: "PRODUCT DESIGN", destaca: 1, respuesta: "¡Del problema al producto!\nTengo justo lo que buscas." },
      { id: "ops", texto: "OPS", destaca: 2, respuesta: "¡Procesos, sistemas y equipos\nque escalan! Me encanta." },
      { id: "mirar", texto: "SOLO MIRO", destaca: 1, respuesta: "¡Perfecto! Explorar también\nes investigar." }
    ],
    cierre: "Antes de ir al laboratorio,\ndéjame contarte mi recorrido."
  },

  medallas: [
    "Todo empezó en la U. ICESI,\nen Cali, donde estudié\nDISEÑO DE MEDIOS INTERACTIVOS.",
    "Mi primera misión: la UI de\n\"Activamente\", la app interna de\nCOOMEVA MEDICINA PREPAGADA.",
    "Luego en STF GROUP diseñé\nlandings y experiencia de\ncliente para STUDIO F y ELA.",
    "En CHAMBA lideré todo el\nsistema UX/UI: web, app\ny dashboards.",
    "En LOGI LOOP diseñé cómo\noperar tours: agenda,\nequipos y métricas.",
    "Para GROUNDLIGHT hice research,\nsistema de diseño y su web\nen Webflow.",
    "Y hoy soy LEAD PRODUCT DESIGNER\nen SUNDEVS, rediseñando\nCINEMARK para Latinoamérica."
  ],
  medallasFin: "¡7 medallas!\nNada mal, ¿verdad, {nombre}?",

  lab: [
    "Ven, sígueme. Quiero mostrarte\nalgo especial.",
    "Bueno… estos han sido mis\nproyectos más destacados.",
    "Cada uno resolvió un problema\ndistinto. Elige uno para\nconocerlo a fondo.",
    "¡No te preocupes! Puedes volver\npor los otros cuando quieras."
  ],
  labVistos: ["¿Qué tal? Todavía quedan\n2 cápsulas por descubrir.", "¡Ya casi! Te falta solo una.", "¡Las viste todas, {nombre}!\nEres oficialmente parte del\nequipo."],
  cierre: "Si quieres que diseñemos algo\njuntos, aquí me encuentras.",

  /* Orden visual en la mesa: 0 Chamba · 1 Cinemark · 2 Logi Loop */
  proyectos: [
    {
      id: "chamba", nombre: "CHAMBA", tipo: "UX/UI", color: "#2F5BA8", oscuro: "#10204A", chip: "#8ED1FC",
      rol: "UX/UI Designer · 2021–2025",
      desc: "Empleo por turnos para latinos en EE. UU., en su idioma. App, web y dashboards.",
      stats: ["1.000 descargas Denver", "98,7% turnos cubiertos", "9.000+ horas trabajadas", "App + web + dashboards"],
      pregunta: "¿Eliges a CHAMBA, el proyecto\nde UX/UI?"
    },
    {
      id: "cinemark", nombre: "CINEMARK", tipo: "PRODUCT", color: "#E01818", oscuro: "#14182B", chip: "#F6C343",
      rol: "Lead Product Designer · 2025–hoy",
      desc: "App de cine para 7+ países: boletas, sillas, confitería, pago y lealtad.",
      // Caso retirado hasta que se lance la app (está guardado en cinemark_pendiente/, fuera del sitio)
      proximamente: true, stats: [],
      aviso: ["El caso de CINEMARK viene en\ncamino: la nueva app todavía\nno se ha lanzado.", "Cuando salga, esta cápsula\nse abrirá. ¡Vuelve pronto!"]
    },
    {
      id: "logiloop", nombre: "LOGI LOOP", tipo: "OPS", color: "#F08A3C", oscuro: "#2A1A12", chip: "#2BB3A3",
      rol: "UX/UI Designer · 2023 · Prototipo",
      desc: "Plataforma para operar tours: agenda, equipos y transporte. No lanzada: sin inversión.",
      stats: ["Dashboards operativos", "User flows end-to-end", "Design system web+móvil", "Prototipo listo"],
      pregunta: "¿Eliges a LOGI LOOP, el\nproyecto de OPS?",
      nota: ["Este no llegó a lanzarse: se\nquedó en prototipo cuando la\nronda de inversión no se dio.", "Pero el reto de diseño fue\nreal: ordenar una operación\nllena de piezas móviles."]
    }
  ],

  /* Casos de estudio en formato web (la misma estructura para los tres) */
  casos: {
    chamba: {
      etiqueta: "CASO DE ESTUDIO · UX/UI", titulo: "CHAMBA", subtitulo: "App, web y dashboards",
      resumen: "Plataforma de empleo por turnos creada por latinos para latinos en Estados Unidos. Su objetivo: que la comunidad latina encuentre turnos de trabajo fácilmente y en su idioma.",
      meta: [["ROL", "UX/UI Designer · líder UX/UI"], ["EMPRESA", "Chamba Inc."], ["PERIODO", "2021 – 2025"], ["ALCANCE", "EE. UU. · app, web y reclutadores"]],
      portada: "chamba/portada.jpg",
      stats: [["1.000", "descargas en Denver tras el primer rediseño"], ["98,7%", "de turnos cubiertos en Red Rocks Amphitheatre"], ["9.000+", "horas trabajadas por Pros en Red Rocks"], ["400+", "turnos cubiertos en Cheyenne Mountain Zoo (96,8%)"]],
      // Formato historia: resumen de 30 s, y cada decisión como problema → insight → decisión, con imágenes explicadas
      resumen30: {
        items: [["EL PROBLEMA", "Latinos que migraron a EE. UU. no encontraban trabajo operativo en su idioma, y los negocios no lograban cubrir sus turnos a tiempo."],
          ["QUÉ HICE", "Lideré el UX/UI de la app, la web y el sitio de reclutadores: investigué con usuarios, enfoqué el producto en restaurantes y eventos, y lo rediseñé alrededor de turnos."],
          ["EL RESULTADO", "1.000 descargas en Denver tras el primer rediseño y 98,7% de turnos cubiertos en Red Rocks Amphitheatre."]],
        rol: "UX/UI Designer y líder UX/UI · 2021 – 2025 · investigación, flujos, UI, sistema visual y páginas B2B"
      },
      secciones: [
        { tipo: "texto", etiqueta: "01 · EL RETO", corto: "El reto", titulo: "Trabajo en su idioma, turnos cubiertos a tiempo",
          texto: "Dos usuarios con la misma urgencia: latinos de 18 a 60 años que migraron a Estados Unidos y buscan trabajo operativo, y negocios que necesitan cubrir turnos rápido.",
          mas: "Algunos usuarios tenían estudios que no podían validar en Estados Unidos; otros simplemente buscaban trabajar. El reto era un portal donde encontraran trabajos operativos de forma simple, con retroalimentación visual clara y en su idioma, y a la vez una experiencia completa para los reclutadores.",
          lista: { titulo: "ALCANCE DEL PROYECTO", items: ["Landing y búsqueda de empleos", "Detalle de vacante", "Login y registro", "Creador de CV guiado", "App móvil", "Sitio de reclutadores por turnos", "Dashboards internos y externos", "Páginas de casos comerciales B2B"] } },
        { tipo: "decision", fondo: "claro", etiqueta: "02 · DECISIÓN 1", corto: "Foco móvil", titulo: "Menos opciones, más foco",
          pasos: [["PROBLEMA", "La primera versión ofrecía demasiadas opciones de empleo sin entender del todo a los usuarios."],
            ["INSIGHT", "En focus groups vimos que buena parte tenía experiencia en cocina y hacía todo desde el celular."],
            ["DECISIÓN", "Enfocar la oferta en restaurantes y eventos, y llevar la experiencia a una app móvil."]],
          figuras: [{ src: "chamba/en-uso.jpg", que: "La app de los Pros: los turnos disponibles, día por día.", porque: "Todo lo que decide si alguien toma un turno se ve sin tener que abrirlo.",
            notas: [{ x: 24, y: 25.5, texto: "El idioma siempre a la mano: la app se usa en español o en inglés." },
              { x: 31, y: 29, texto: "Filtros por rol con íconos de cocina y eventos, que se reconocen sin leer." },
              { x: 37.5, y: 36.5, texto: "Primero el pago total del turno y después el valor por hora: es lo que más pesa al decidir." },
              { x: 27, y: 41.8, texto: "Horario, tipo de contrato y propinas como etiquetas, para comparar turnos de un vistazo." }] }] },
        { tipo: "decision", etiqueta: "03 · DECISIÓN 2", corto: "CV guiado", titulo: "Un CV sin miedo a la hoja en blanco",
          pasos: [["PROBLEMA", "Crear la hoja de vida era difícil: muchos no tenían experiencia formal ni un CV a mano."],
            ["INSIGHT", "En la segunda ronda con usuarios vimos que respondían bien preguntas concretas, pero se bloqueaban al armar un CV desde cero."],
            ["DECISIÓN", "Un creador de CV guiado: una pregunta por pantalla, con opciones para tocar en vez de escribir."]],
          mas: "Para el sistema visual, con poco tiempo y gráficos sin unificar, usamos componentes estilo iOS que los usuarios ya conocían y una ilustración más empática, con personajes de cocina en los que se pudieran ver reflejados.",
          figuras: [{ src: "chamba/app.jpg", que: "El creador de CV: idioma, habilidades, estudios, experiencia y certificados.", porque: "Cada pantalla responde una sola pregunta, así el perfil se completa sin sentirse como un trámite.",
            notas: [{ x: 31, y: 13.4, texto: "Una pregunta por pantalla, con un botón para guardar y seguir." },
              { x: 14, y: 44, texto: "Las habilidades se tocan como etiquetas: nada que escribir." },
              { x: 47, y: 43, texto: "Ilustraciones de cocina: el usuario se ve reflejado en su oficio." },
              { x: 14.5, y: 81, texto: "Lo opcional se marca como opcional, para que el perfil no se sienta obligatorio de una vez." }] }] },
        { tipo: "decision", fondo: "claro", etiqueta: "04 · DECISIÓN 3", corto: "Turnos", titulo: "Pensar en turnos, no en vacantes",
          pasos: [["PROBLEMA", "El sistema funcionaba con vacantes, pero los restaurantes y los eventos no contratan así."],
            ["INSIGHT", "Los negocios contratan por turnos: necesitan un cocinero el sábado de 9 a 5, no un empleado de planta."],
            ["DECISIÓN", "Rediseñar el producto alrededor de turnos: el negocio elige roles en un calendario y arma su equipo de confianza."]],
          comparar: true,
          figuras: [{ src: "chamba/primer-diseno.jpg", etiqueta: "ANTES", que: "Primera versión (2020): cada turno se creaba llenando un formulario.", porque: "Título, horario, descansos, pago y propinas en un solo paso: lento cuando hay que cubrir muchos turnos." },
            { src: "chamba/reclutadores-2.jpg", etiqueta: "DESPUÉS", que: "Versión rediseñada: el negocio elige en el calendario los roles que necesita.", porque: "Elegir de una lista es más rápido que escribir, y el menú lateral deja todo a un clic.",
              notas: [{ x: 42, y: 36, texto: "Roles con íconos: se eligen varios a la vez en lugar de crear turno por turno." },
                { x: 17, y: 24.5, texto: "Menú lateral fijo: turnos, profesionales y facturas a un clic." },
                { x: 69, y: 11, texto: "Vista de mes o de día: planear un evento grande o resolver el turno de hoy." }] },
            { src: "chamba/negocios.jpg", que: "Profesionales: el negocio guarda a sus Pros de confianza.", porque: "Volver a contratar a quien ya conoce el lugar reduce el riesgo de que un turno quede sin cubrir.",
              notas: [{ x: 27, y: 18.4, texto: "Favoritos y bloqueados: el negocio arma su propio equipo." },
                { x: 70, y: 19.5, texto: "Los Pros favoritos tienen prioridad en los turnos futuros." },
                { x: 25, y: 34, texto: "Turnos hechos y calificación para decidir rápido a quién llamar." }] }] },
        { tipo: "imagenes", etiqueta: "05 · RESULTADO", corto: "Resultado", titulo: "Del producto al negocio",
          texto: "Tras el primer rediseño la app llegó a 1.000 descargas en Denver. Con clientes B2B, la plataforma cubrió más de 1.300 turnos en Red Rocks Amphitheatre (98,7%) y más de 400 en Cheyenne Mountain Zoo (96,8%).",
          imagenes: [{ src: "chamba/red-rocks.jpg", que: "La página del caso comercial de Red Rocks, que también diseñé.", porque: "Convierte los resultados en un argumento de venta: 1.300+ turnos, 98,7% de cumplimiento y 9.000+ horas trabajadas." }] },
        { tipo: "aprendizajes", fondo: "claro", etiqueta: "06 · APRENDIZAJES", corto: "Aprendizajes", titulo: "Lo que me llevo", texto: "Lo que me dejó este proyecto.",
          tarjetas: [["EQUIVOCARSE ES PARTE DEL PROCESO", "Cada error es una oportunidad de mejora. El primer diseño ofrecía demasiado; escuchar a los usuarios nos llevó a enfocarnos en lo que de verdad necesitaban."], ["DISEÑAR CON EMPATÍA", "Para una comunidad migrante, el idioma, las ilustraciones cercanas y los flujos simples importan tanto como las funciones."], ["DEL DISEÑO AL NEGOCIO ▸", "Los casos comerciales mostraron cómo un buen producto se traduce en turnos cubiertos y clientes que vuelven."]] }
      ]
    },
    logiloop: {
      etiqueta: "CASO DE ESTUDIO · OPS", titulo: "LOGI LOOP", subtitulo: "Operación de tours · web y móvil",
      resumen: "Plataforma para que las empresas de tours creen plantillas de recorridos, programen salidas, asignen colaboradores y transporte, y sigan su operación desde dashboards.",
      meta: [["ROL", "UX/UI Designer"], ["EMPRESA", "Logiloop S.A."], ["PERIODO", "Ene – Jun 2023"], ["ESTADO", "Prototipo · no lanzado"]],
      portada: "logiloop/portada.jpg",
      stats: [["Web + móvil", "experiencia responsive para oficina y campo"], ["End-to-end", "user flows de todo el producto, por rol"], ["DS propio", "sistema de diseño con componentes reutilizables"], ["Hi-fi", "prototipo listo para presentar a inversionistas"]],
      resumen30: {
        items: [["EL PROBLEMA", "Una empresa de tours coordina recorridos, horarios, guías, transporte y capacidad al mismo tiempo, desde la oficina y desde el campo."],
          ["QUÉ HICE", "Diseñé el producto de punta a punta: card sorting, user flows por rol, un sistema de diseño propio y la UI web y móvil, del wireframe al prototipo en alta."],
          ["EL RESULTADO", "Un prototipo en alta fidelidad, listo para presentar a inversionistas. No llegó a lanzarse porque la ronda de inversión no se concretó."]],
        rol: "UX/UI Designer · Ene – Jun 2023 · investigación, arquitectura, user flows, sistema de diseño y UI"
      },
      secciones: [
        { tipo: "texto", etiqueta: "01 · EL RETO", corto: "El reto", titulo: "Una operación llena de piezas móviles",
          texto: "Logi Loop buscaba ordenar en una sola plataforma toda la operación de una empresa de tours, tanto para quien programa desde la oficina como para quien opera en campo.",
          mas: "Una empresa de tours coordina muchas piezas al mismo tiempo: recorridos, horarios, guías, idiomas, transporte y capacidad. Cada pieza depende de otra, y un cambio de última hora en una afecta a todas.",
          lista: { titulo: "ALCANCE DEL PROTOTIPO", items: ["Plantillas de tour: paradas, idiomas y transporte", "Programación de salidas y capacidad", "Asignación de colaboradores y roles", "Dashboards de reservas y utilización", "Mapa de rutas", "App móvil del operador"] } },
        { tipo: "decision", fondo: "claro", etiqueta: "02 · DECISIÓN 1", corto: "Flujos por rol", titulo: "Ordenar antes de dibujar",
          pasos: [["PROBLEMA", "Quien programa, quien opera en campo y el viajero necesitaban cosas muy distintas del mismo sistema."],
            ["INSIGHT", "El card sorting mostró cómo agrupaba cada rol la información, y que la empresa y sus colaboradores entraban al producto por caminos distintos."],
            ["DECISIÓN", "Definir user flows de punta a punta por rol antes de diseñar una sola pantalla, empezando por el registro, el acceso y el onboarding."]],
          mas: "El proceso completo: card sorting y user personas para descubrir; user flows para definir; wireframes en baja, media y alta fidelidad sobre un sistema de diseño reutilizable; y pruebas con usuarios antes de entregar el prototipo.",
          figuras: [{ src: "logiloop/user-flow.jpg", que: "User flow de registro, acceso y onboarding, con un camino para la empresa y otro para sus colaboradores.", porque: "Resolver los casos difíciles en el flujo (errores, verificación, códigos de invitación) evitó rediseñar pantallas después.",
            notas: [{ x: 29.4, y: 19.4, texto: "Registro con Google o Apple además del manual, para entrar sin crear otra contraseña." },
              { x: 49.4, y: 9, texto: "Las reglas de validación quedaron escritas en el flujo: nombre, correo verificable y contraseñas seguras." },
              { x: 72.4, y: 36, texto: "El registro se divide: unirse a una empresa con un código de invitación o crear una nueva." },
              { x: 81.2, y: 47.5, texto: "Agregar colaboradores en lote: un archivo en escritorio, los contactos del teléfono en móvil." },
              { x: 8, y: 59, texto: "Un onboarding para la empresa y otro, más corto, para sus colaboradores." }] }] },
        { tipo: "decision", etiqueta: "03 · DECISIÓN 2", corto: "Plantillas", titulo: "Diseñar el tour una vez, programarlo muchas veces",
          pasos: [["PROBLEMA", "Programar cada salida desde cero era repetir el mismo trabajo: paradas, idiomas, transporte y equipo."],
            ["INSIGHT", "La mayoría de salidas repiten el mismo recorrido; lo que cambia es la fecha, el equipo y la capacidad."],
            ["DECISIÓN", "Separar las plantillas de tour del tablero de salidas: cada salida nueva parte de una plantilla y solo se ajusta lo que cambia."]],
          figuras: [{ src: "logiloop/pantalla-2.jpg", ancho: 340, que: "El tablero de salidas: lo que está en curso, lo que viene y lo que ya pasó.", porque: "Quien programa ve de un vistazo qué salidas atender y qué tan llenas van.",
              notas: [{ x: 95, y: 15.5, texto: "Salidas y plantillas en dos pestañas: programar y diseñar recorridos son tareas distintas." },
                { x: 79, y: 24.8, texto: "En curso, próximas y pasadas, para saber qué atender primero." },
                { x: 93, y: 36, texto: "Ocupación en cada salida: reservas sobre capacidad." },
                { x: 93, y: 84.4, texto: "Crear una salida es la acción principal, siempre al alcance del pulgar." }] },
            { src: "logiloop/prototipo.jpg", que: "Una salida nueva creada desde una plantilla, y las estadísticas de la operación.", porque: "Programar se reduce a elegir plantilla, fechas y equipo; los resultados se leen en el mismo lugar.",
              notas: [{ x: 57.8, y: 30.2, texto: "La salida parte de una plantilla: el recorrido ya está definido." },
                { x: 72.5, y: 58.7, texto: "Cada colaborador recibe un rol al asignarlo: guía, conductor, soporte o externo." },
                { x: 24, y: 45.8, texto: "Estadísticas filtrables por día o por rango de fechas." },
                { x: 44, y: 79.6, texto: "Reseñas positivas y negativas en una sola vista." }] }] },
        { tipo: "decision", fondo: "claro", etiqueta: "04 · DECISIÓN 3", corto: "En campo", titulo: "El día del tour, sin llamadas",
          pasos: [["PROBLEMA", "El día del tour, operadores y viajeros dependían del teléfono para coordinar cada recogida."],
            ["INSIGHT", "Lo que más inquieta al viajero es no saber cuándo llega el transporte; al operador, no perder a nadie entre parada y parada."],
            ["DECISIÓN", "Una app del operador que guía parada por parada, y una vista del viajero con la ruta en vivo y el tiempo estimado de recogida."]],
          comparar: true,
          figuras: [{ src: "logiloop/pantalla-4.jpg", ancho: 320, etiqueta: "OPERADOR", que: "La app del operador: la siguiente parada y quién se recoge ahí.", porque: "Cerrar cada parada con un toque mantiene a toda la operación al día.",
              notas: [{ x: 96, y: 14.6, texto: "La siguiente parada siempre arriba, con la lista completa a un toque." },
                { x: 5, y: 88.1, texto: "Cada viajero se marca como recogido o ausente." },
                { x: 96, y: 94.9, texto: "Un solo botón para cerrar la parada y arrancar la siguiente." }] },
            { src: "logiloop/pantalla-3.jpg", ancho: 320, etiqueta: "VIAJERO", que: "La vista del viajero: el transporte en el mapa y cuánto falta para que lo recojan.", porque: "Responde en la pantalla la pregunta que antes se hacía por teléfono.",
              notas: [{ x: 96, y: 11, texto: "La dirección de recogida es fija; para cambiarla se contacta a soporte." },
                { x: 36, y: 63, texto: "El transporte en el mapa, en tiempo real." },
                { x: 65, y: 76.8, texto: "Compartir la ruta con quien viaja contigo." },
                { x: 93, y: 87.4, texto: "Tiempo estimado de recogida, siempre visible." }] }] },
        { tipo: "imagenes", etiqueta: "05 · ESTADO", corto: "Estado", titulo: "Un prototipo listo para invertir",
          texto: "Logi Loop no llegó a lanzarse: el proyecto se quedó en fase de prototipo cuando la ronda de inversión no se concretó. Aun así, dejó un producto definido de punta a punta, listo para desarrollarse.",
          imagenes: [{ src: "logiloop/app-1.jpg", que: "El prototipo en alta fidelidad: el tablero de salidas y la app del operador en ruta.", porque: "El producto quedó definido de punta a punta, listo para presentarlo a inversionistas y pasar a desarrollo." }] },
        { tipo: "aprendizajes", fondo: "claro", etiqueta: "06 · APRENDIZAJES", corto: "Aprendizajes", titulo: "Lo que me llevo", texto: "Lo que me dejó este proyecto.",
          tarjetas: [["DISEÑAR PARA LA OPERACIÓN", "Cuando el usuario coordina muchas variables a la vez, la claridad de los flujos vale más que cualquier detalle visual."], ["ORDENAR ANTES DE DIBUJAR", "El card sorting y los diagramas de flujo me mostraron cómo piensan los usuarios antes de diseñar una sola pantalla. Con esa base, las interfaces se apoyaron en una estructura clara desde el inicio."], ["QUÉ HABRÍA MEDIDO ▸", "Si se lanzaba: ocupación de los tours, tiempo para programar una salida y tasa de cambios de última hora."]] }
      ]
    }
  }
};
