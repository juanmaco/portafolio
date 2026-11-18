/* PROTOTYPE POCKET · English content. Same structure as datos.js (Spanish).
   {nombre} is replaced with the visitor's name. Dialogue: max 3 lines of ~32 characters. */
window.DATOS_EN = {
  contacto: {
    linkedin: "https://www.linkedin.com/in/juan-cordoba-designer/",
    behance: "https://www.behance.net/juanmaco18",
    correo: ["juanmaco-97", "hotmail.com"],
    cv: "assets/cv/CV_Juan_Manuel_Cordoba_EN.pdf", // web version: no home address or reference phone numbers
    cvArchivo: "CV_Juan_Manuel_Cordoba_EN.pdf"
  },

  ui: {
    titulo: "Juan Manuel Córdoba · Product Designer",
    cargando: "Loading prototype…",
    saltarIntro: "SKIP INTRO ▸",
    saltar: "SKIP ▸", saltarTitulo: "Skip the intro and go to the projects",
    sonidoTitulo: "Sound", idiomaTitulo: "Cambiar a español",
    menuInicio: ["NEW GAME", "VIEW PROJECTS", "CLASSIC MODE"],
    preguntaNombre: "What's your name?", opcional: "(optional)",
    teclas: ["DELETE", "CAPS", "DONE"],
    visitante: "VISITOR",
    visto: "✓ SEEN", proximamente: "COMING SOON",
    fichaProx: "▸ CASE STUDY IN PROGRESS · COMING SOON",
    si: "YES", no: "NO",
    tomateTiempo: "Take your time, {nombre}.",
    pistaFinalizar: "Whenever you're ready, press\nSTART and choose FINISH.",
    cierreMenu: { cv: "DOWNLOAD CV", linkedin: "LINKEDIN", email: "EMAIL", behance: "BEHANCE", volver: "BACK TO THE LAB" },
    start: { finalizar: "FINISH", proyectos: "PROJECTS", sobreMi: "ABOUT ME", contacto: "CONTACT", clasico: "CLASSIC MODE", cerrar: "CLOSE" },
    volverLab: "BACK TO THE LAB", volverProy: "BACK TO PROJECTS",
    capsula: "CAPSULE", siguiente: "NEXT", siguienteCapsula: "NEXT CAPSULE", finalizar: "FINISH",
    vistoTodo: "You've seen every project!", seguimos: "Keep exploring?",
    descargarCV: "Download CV",
    clasicoIntro: "<b>Lead Product Designer · UX/UI · Product Design · Ops.</b> Interactive Media Designer with 6+ years of experience in UX/UI, Product Discovery, design systems and prototyping. Today I lead the redesign of the Cinemark app for Latin America at SunDevs.",
    jugar: "▸ Play the PROTOTYPE POCKET version",
    verCaso: "View case", avisoProx: "The case study arrives when the new app launches.", proxPie: "Coming soon",
    giroTitulo: "ROTATE YOUR PHONE",
    giroTexto: "PROTOTYPE POCKET is played in landscape, like a handheld console. Text is easier to read that way.",
    giroBoton: "I prefer classic mode ▸",
    ayuda: "Keyboard: arrows · Enter = A · Backspace = B · Esc = START",
    botonA: "A button: accept", botonB: "B button: back"
  },

  intro: [
    "Hi there! Sorry to keep you\nwaiting! Welcome to the world\nof PRODUCT DESIGN.",
    "My name is JUAN MANUEL CÓRDOBA,\nbut everyone calls me JUANMA.",
    "Some people call me\nthe UX PROFESSOR.\n…Okay, just me.",
    "This world is full of USERS\nwith problems to solve.",
    "Some get lost in a menu,\nothers abandon their cart…",
    "I've spent 6+ years studying\nthem and designing solutions.",
    "But enough about me.\nWhat's your name?"
  ],

  eleccion: {
    pregunta: ["Nice to meet you, {nombre}!", "So, {nombre}…\nwhat brings you here?"],
    opciones: [
      { id: "uxui", texto: "UX/UI", destaca: 0, respuesta: "Interfaces that feel obvious!\nThat's my specialty." },
      { id: "product", texto: "PRODUCT DESIGN", destaca: 1, respuesta: "From problem to product!\nI've got just the thing." },
      { id: "ops", texto: "OPS", destaca: 2, respuesta: "Systems and teams that scale!\nI love that stuff." },
      { id: "mirar", texto: "JUST BROWSING", destaca: 1, respuesta: "Perfect! Exploring is\nresearch too." }
    ],
    cierre: "Before we head to the lab,\nlet me tell you my story."
  },

  medallas: [
    "It all began at ICESI UNIV.\nin Cali, studying\nINTERACTIVE MEDIA DESIGN.",
    "My first mission: the UI for\n\"Activamente\", the internal app\nof COOMEVA MEDICINA PREPAGADA.",
    "At STF GROUP I designed\nlandings and CX for fashion\nbrands STUDIO F and ELA.",
    "At CHAMBA I led the entire\nUX/UI system: web, app\nand dashboards.",
    "At LOGI LOOP I designed how\nto run tours: schedules,\ncrews and metrics.",
    "For GROUNDLIGHT I did research,\nthe design system and their\nWebflow site.",
    "Today I'm LEAD PRODUCT DESIGNER\nat SUNDEVS, redesigning\nCINEMARK for Latin America."
  ],
  medallasFin: "7 badges!\nNot bad, right, {nombre}?",

  lab: [
    "Come, follow me. I want to\nshow you something special.",
    "Well… these are my most\noutstanding projects.",
    "Each one solved a different\nproblem. Pick one to explore\nit in depth.",
    "Don't worry! You can come back\nfor the others anytime."
  ],
  labVistos: ["How was it? There are still\n2 capsules to discover.", "Almost there! Just one left.", "You've seen them all, {nombre}!\nYou're officially on the\nteam."],
  cierre: "If you'd like to design\nsomething together, here's\nwhere to find me.",

  /* Same order as on the table: 0 Chamba · 1 Cinemark · 2 Logi Loop */
  proyectos: [
    {
      id: "chamba", nombre: "CHAMBA", tipo: "UX/UI", color: "#2F5BA8", oscuro: "#10204A", chip: "#8ED1FC",
      rol: "UX/UI Designer · 2021–2025",
      desc: "Shift-based jobs for Latinos in the US, in their own language. App, web and dashboards.",
      stats: ["1,000 downloads in Denver", "98.7% shifts fulfilled", "9,000+ hours worked", "App + web + dashboards"],
      pregunta: "Choose CHAMBA, the UX/UI\nproject?"
    },
    {
      id: "cinemark", nombre: "CINEMARK", tipo: "PRODUCT", color: "#E01818", oscuro: "#14182B", chip: "#F6C343",
      rol: "Lead Product Designer · 2025–now",
      desc: "Cinema app for 7+ countries: tickets, seats, concessions, payment and loyalty.",
      proximamente: true, stats: [],
      aviso: ["The CINEMARK case study is on\nits way: the new app hasn't\nlaunched yet.", "Once it's out, this capsule\nwill open. Come back soon!"]
    },
    {
      id: "logiloop", nombre: "LOGI LOOP", tipo: "OPS", color: "#F08A3C", oscuro: "#2A1A12", chip: "#2BB3A3",
      rol: "UX/UI Designer · 2023 · Prototype",
      desc: "Platform to run tour operations: schedules, crews and transport. Not launched: no funding.",
      stats: ["Operational dashboards", "End-to-end user flows", "Web + mobile design system", "Investor-ready prototype"],
      pregunta: "Choose LOGI LOOP, the OPS\nproject?",
      nota: ["This one never launched: it\nstayed a prototype when the\nfunding round fell through.", "But the design challenge was\nreal: taming an operation\nfull of moving parts."]
    }
  ],

  /* Case studies (same structure as the Spanish version) */
  casos: {
    chamba: {
      etiqueta: "CASE STUDY · UX/UI", titulo: "CHAMBA", subtitulo: "App, web and dashboards",
      resumen: "A shift-based job platform built by Latinos for Latinos in the United States. The goal: help the Latino community find work shifts easily, in their own language.",
      meta: [["ROLE", "UX/UI Designer · UX/UI lead"], ["COMPANY", "Chamba Inc."], ["PERIOD", "2021 – 2025"], ["SCOPE", "US · app, web and recruiters"]],
      portada: "chamba/portada.jpg",
      stats: [["1,000", "downloads in Denver after the first redesign"], ["98.7%", "of shifts fulfilled at Red Rocks Amphitheatre"], ["9,000+", "hours worked by Pros at Red Rocks"], ["400+", "shifts fulfilled at Cheyenne Mountain Zoo (96.8%)"]],
      secciones: [
        { tipo: "texto", etiqueta: "01 · CONTEXT", titulo: "The challenge", texto: "Users were Latinos aged 18 to 60 who had moved to the United States: some with degrees they couldn't validate, others simply looking for work. The challenge was a portal where they could find hands-on jobs easily, with clear visual feedback and in their own language, while also giving recruiters a complete experience.",
          lista: { titulo: "PROJECT SCOPE", items: ["Landing and job search", "Job detail", "Login and sign-up", "Guided resume builder", "Mobile app", "Shift-based recruiter site", "Internal and external dashboards", "B2B case study pages"] } },
        { tipo: "imagenes", fondo: "claro", etiqueta: "02 · PROCESS", titulo: "Fail fast, learn fast", texto: "The first design offered too many job options without fully understanding the users. Focus groups showed that a large part of the audience had kitchen experience and lived on their phones: we focused the offer on restaurants and moved the experience to a mobile app.", imagenes: ["chamba/primer-diseno.jpg", "chamba/reclutadores.jpg"] },
        { tipo: "imagenes", fondo: "oscuro", etiqueta: "03 · KEY SCREENS", titulo: "The app and the recruiter site", imagenes: ["chamba/app.jpg", "chamba/calendario.jpg", "chamba/negocios.jpg", "chamba/reclutadores-2.jpg"] },
        { tipo: "estudios", etiqueta: "04 · RESEARCH", titulo: "Two rounds that changed the product", texto: "Each round with users revealed new pain points, and each one became a design decision.",
          estudios: [["01 · FOCUS GROUPS", "Too many options", "First web version", "Focus on restaurants and a move to a mobile app."], ["02 · SECOND ROUND", "Building a resume was hard", "Users without formal experience", "Guided resume builder, one question per step."], ["03 · SECOND ROUND", "Restaurants hire by shift", "Business need", "The system moved from job openings to shifts."], ["04 · VISUAL SYSTEM", "Inconsistent graphics", "Time constraints", "iOS-style UI and more empathetic illustration."]],
          imagen: "chamba/en-uso.jpg" },
        { tipo: "imagenes", fondo: "claro", etiqueta: "05 · IMPACT", titulo: "From product to business", texto: "After the first redesign the app peaked at 1,000 downloads in Denver. With B2B clients the platform filled more than 1,300 shifts at Red Rocks Amphitheatre (98.7% fulfillment) and more than 400 at Cheyenne Mountain Zoo (96.8%). I also designed the pages that tell those business stories.", imagenes: ["chamba/red-rocks.jpg"] },
        { tipo: "aprendizajes", etiqueta: "06 · LEARNINGS", titulo: "What I take away", texto: "What this project taught me.",
          tarjetas: [["MISTAKES ARE PART OF THE PROCESS", "Every mistake is a chance to improve. The first design offered too much; listening to users led us to focus on what they really needed."], ["DESIGN WITH EMPATHY", "For a migrant community, language, relatable illustrations and simple flows matter as much as features."], ["FROM DESIGN TO BUSINESS ▸", "The business case studies showed how a good product turns into filled shifts and returning clients."]] }
      ]
    },
    logiloop: {
      etiqueta: "CASE STUDY · OPS", titulo: "LOGI LOOP", subtitulo: "Tour operations · web and mobile",
      resumen: "A platform for tour companies to build tour templates, schedule departures, assign crews and transport, and follow their operation from dashboards.",
      meta: [["ROLE", "UX/UI Designer"], ["COMPANY", "Logiloop S.A."], ["PERIOD", "Jan – Jun 2023"], ["STATUS", "Prototype · not launched"]],
      portada: "logiloop/portada.jpg",
      stats: [["Web + mobile", "responsive experience for the office and the field"], ["End-to-end", "user flows for the whole product, by role"], ["Own DS", "design system with reusable components"], ["Hi-fi", "prototype ready to pitch to investors"]],
      secciones: [
        { tipo: "texto", etiqueta: "01 · CONTEXT", titulo: "The challenge", texto: "A tour company juggles many pieces at once: routes, schedules, guides, languages, transport and capacity. Logi Loop set out to bring that whole operation into a single platform, both for whoever plans from the office and whoever runs it in the field.",
          lista: { titulo: "PROTOTYPE SCOPE", items: ["Tour templates: stops, languages and transport", "Departure scheduling and capacity", "Crew and role assignment", "Booking and utilization dashboards", "Route map", "Operator mobile app"] } },
        { tipo: "imagenes", fondo: "claro", etiqueta: "02 · PROCESS", titulo: "Bringing order to an operation full of moving parts", texto: "I started with card sorting and flow diagrams to understand each type of user. Then came wireframes, a reusable design system and the web, mobile and responsive interfaces, in low, mid and high fidelity.", imagenes: ["logiloop/app-1.jpg", "logiloop/app-2.jpg"], extra: { titulo: "USER FLOW · SIGN-UP, LOGIN AND ONBOARDING BY ROLE", imagen: "logiloop/user-flow.jpg" } },
        { tipo: "imagenes", fondo: "oscuro", etiqueta: "03 · THE PLATFORM", titulo: "From the office to the field", imagenes: ["logiloop/pantalla-1.jpg", "logiloop/pantalla-2.jpg", "logiloop/pantalla-3.jpg", "logiloop/pantalla-4.jpg"], columnas: 4 },
        { tipo: "estudios", etiqueta: "04 · RESEARCH", titulo: "Validate before building", texto: "Every stage of the design relied on research and user testing to reach a solid prototype.",
          estudios: [["01 · DISCOVER", "Card sorting and user personas", "User research", "Profiles of planners and operators."], ["02 · DEFINE", "User flows", "Product architecture", "End-to-end flows for each role."], ["03 · PROTOTYPE", "Low, mid and high fidelity", "Wireframes to final UI", "Web, mobile and responsive."], ["04 · TEST", "User testing", "Design validation", "Adjustments before handing off the prototype."]],
          imagen: "logiloop/mapa.jpg",
          destaque: { titulo: "LIVE TRACKING", texto: "The traveler's view on tour day: they see the route on the map and how long until pickup, without having to call anyone.",
            items: ["Real-time tour route", "Estimated pickup time", "Fixed pickup address, with access to support", "Share the route", "Messages and notifications"] } },
        { tipo: "imagenes", fondo: "claro", etiqueta: "05 · STATUS", titulo: "A prototype ready for investment", texto: "Logi Loop never launched: the project stayed at the prototype stage when the funding round didn't come through. Even so, it left an end-to-end product ready to be built.", imagenes: ["logiloop/prototipo.jpg"] },
        { tipo: "aprendizajes", etiqueta: "06 · LEARNINGS", titulo: "What I take away", texto: "What this project taught me.",
          tarjetas: [["DESIGN FOR THE OPERATION", "When users juggle many variables at once, clear flows are worth more than any visual detail."], ["ORGANIZE BEFORE YOU DRAW", "Card sorting and flow diagrams showed me how users think before I designed a single screen. With that foundation, the interfaces rested on a clear structure from the start."], ["WHAT I WOULD HAVE MEASURED ▸", "Had it launched: tour occupancy, time to schedule a departure and the rate of last-minute changes."]] }
      ]
    }
  }
};
