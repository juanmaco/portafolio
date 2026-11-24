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
    saltarIntro: "GO TO THE PROJECTS ▸",
    saltar: "SEE PROJECTS ▸", saltarTitulo: "Go straight to the projects, no intro",
    verPagina: "VIEW AS PAGE", verPaginaTitulo: "See the portfolio as a regular web page, without playing",
    pistaTitulo: "Click the screen or press Enter · takes about 3 minutes", pistaTituloTactil: "Tap the screen to start · takes about 3 minutes",
    pistaDialogo: "click or Enter ▸", pistaDialogoTactil: "tap to continue ▸",
    pistaLab: "▸ Pick a capsule: click on it", pistaLabTactil: "▸ Tap a capsule to open it", pistaLabTeclas: "or use ← → and Enter · START opens the menu",
    etiquetaA: "OK", etiquetaB: "BACK", startTitulo: "Open the menu (Esc)", selectTitulo: "Change option in a menu",
    ayudaTactil: "Tap the screen to continue · A accepts · B goes back · START opens the menu",
    sonido: "SOUND", sonidoTitulo: "Turn music and sound effects on or off", idiomaTitulo: "Cambiar a español",
    menuInicio: { jugar: "PLAY", pagina: "VIEW AS PAGE", continuar: "CONTINUE", nueva: "NEW GAME" },
    menuInicioDesc: { jugar: "The full experience · about 3 minutes", pagina: "The projects as a regular web page", continuar: "Back to the lab where you left off", nueva: "Start over, with the full intro" },
    holaDeNuevo: "Welcome back, {nombre}!\nYour capsules are waiting.",
    preguntaNombre: "What's your name?", opcional: "(optional)", continuar: "CONTINUE ▸", continuarAyuda: "or press START",
    teclas: ["DELETE", "CAPS", "DONE"],
    visitante: "VISITOR",
    visto: "✓ SEEN", proximamente: "COMING SOON",
    fichaProx: "▸ CASE STUDY IN PROGRESS · COMING SOON",
    si: "YES", no: "NO",
    tomateTiempo: "Take your time, {nombre}.",
    pistaFinalizar: "Whenever you're ready, press\nSTART and choose FINISH.",
    cierreMenu: { cv: "DOWNLOAD CV", linkedin: "LINKEDIN", email: "EMAIL", behance: "BEHANCE", volver: "BACK TO THE LAB" },
    start: { finalizar: "FINISH", proyectos: "PROJECTS", sobreMi: "ABOUT ME", contacto: "CONTACT", clasico: "VIEW AS PAGE", cerrar: "CLOSE" },
    volverLab: "BACK TO THE LAB", volverProy: "BACK TO PROJECTS",
    capsula: "CAPSULE", siguiente: "NEXT", siguienteCapsula: "NEXT CAPSULE", finalizar: "FINISH",
    vistoTodo: "You've seen every project!", seguimos: "Keep exploring?",
    descargarCV: "Download CV",
    clasicoIntro: "<b>Lead Product Designer · UX/UI · Product Design · Ops.</b> Interactive Media Designer with 6+ years of experience in UX/UI, Product Discovery, design systems and prototyping. Today I lead the redesign of the Cinemark app for Latin America at SunDevs.",
    jugar: "▸ Play the PROTOTYPE POCKET version",
    en30: "IN 30 SECONDS", miRol: "MY ROLE", lectura: "min read", indice: "Case contents", leerMas: "Read more", leerMenos: "Read less", porQue: "Why it matters:", notasTitulo: "DECISIONS ON THIS SCREEN", nota: "Note",
    verCaso: "View case", avisoProx: "The case study arrives when the new app launches.", proxPie: "Coming soon",
    giroTitulo: "ROTATE YOUR PHONE",
    giroTexto: "PROTOTYPE POCKET is played in landscape, like a handheld console. Text is easier to read that way.",
    giroBoton: "I prefer to view it as a page ▸",
    ayuda: "Click the screen or the buttons · Keyboard: arrows, Enter = A, Backspace = B, Esc = START",
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
      // Story format: 30-second summary, and each decision as problem → insight → decision, with explained images
      resumen30: {
        items: [["THE PROBLEM", "Latinos who had moved to the US couldn't find hands-on work in their own language, and businesses couldn't fill their shifts on time."],
          ["WHAT I DID", "I led UX/UI for the app, the website and the recruiter site: I researched with users, focused the product on restaurants and events, and redesigned it around shifts."],
          ["THE RESULT", "1,000 downloads in Denver after the first redesign and 98.7% of shifts filled at Red Rocks Amphitheatre."]],
        rol: "UX/UI Designer and UX/UI lead · 2021 – 2025 · research, flows, UI, visual system and B2B pages"
      },
      secciones: [
        { tipo: "texto", etiqueta: "01 · THE CHALLENGE", corto: "Challenge", titulo: "Work in their language, shifts filled on time",
          texto: "Two users with the same urgency: Latinos aged 18 to 60 who moved to the United States looking for hands-on work, and businesses that need to fill shifts fast.",
          mas: "Some users had degrees they couldn't validate in the US; others simply wanted to work. The challenge was a portal where they could find hands-on jobs easily, with clear visual feedback and in their own language, while also giving recruiters a complete experience.",
          lista: { titulo: "PROJECT SCOPE", items: ["Landing and job search", "Job detail", "Login and sign-up", "Guided resume builder", "Mobile app", "Shift-based recruiter site", "Internal and external dashboards", "B2B case study pages"] } },
        { tipo: "decision", fondo: "claro", etiqueta: "02 · DECISION 1", corto: "Mobile focus", titulo: "Fewer options, more focus",
          pasos: [["PROBLEM", "The first version offered too many job options without fully understanding the users."],
            ["INSIGHT", "Focus groups showed that many had kitchen experience and did everything on their phones."],
            ["DECISION", "Focus the offer on restaurants and events, and move the experience to a mobile app."]],
          figuras: [{ src: "chamba/en-uso.jpg", que: "The Pros app: available shifts, day by day.", porque: "Everything that makes someone take a shift is visible without opening it.",
            notas: [{ x: 24, y: 25.5, texto: "Language always at hand: the app works in Spanish or English." },
              { x: 31, y: 29, texto: "Role filters with kitchen and event icons, recognizable without reading." },
              { x: 37.5, y: 36.5, texto: "Total shift pay first, then the hourly rate: that's what matters most when deciding." },
              { x: 27, y: 41.8, texto: "Schedule, contract type and tips as tags, to compare shifts at a glance." }] }] },
        { tipo: "decision", etiqueta: "03 · DECISION 2", corto: "Guided resume", titulo: "A resume without blank-page fear",
          pasos: [["PROBLEM", "Building a resume was hard: many had no formal experience and no resume at hand."],
            ["INSIGHT", "In the second round with users we saw they answered concrete questions well, but got stuck building a resume from scratch."],
            ["DECISION", "A guided resume builder: one question per screen, with options to tap instead of typing."]],
          mas: "For the visual system, with little time and inconsistent graphics, we used iOS-style components users already knew and more empathetic illustration, with kitchen characters they could see themselves in.",
          figuras: [{ src: "chamba/app.jpg", que: "The resume builder: language, skills, education, experience and certificates.", porque: "Each screen answers a single question, so the profile gets done without feeling like paperwork.",
            notas: [{ x: 31, y: 13.4, texto: "One question per screen, with a button to save and move on." },
              { x: 14, y: 44, texto: "Skills are tapped as tags: nothing to type." },
              { x: 47, y: 43, texto: "Kitchen illustrations: users see their own trade reflected." },
              { x: 14.5, y: 81, texto: "Optional steps are marked as optional, so the profile doesn't feel mandatory all at once." }] }] },
        { tipo: "decision", fondo: "claro", etiqueta: "04 · DECISION 3", corto: "Shifts", titulo: "Think in shifts, not job openings",
          pasos: [["PROBLEM", "The system worked with job openings, but restaurants and events don't hire that way."],
            ["INSIGHT", "Businesses hire by shift: they need a cook on Saturday from 9 to 5, not a full-time employee."],
            ["DECISION", "Redesign the product around shifts: businesses pick roles on a calendar and build their trusted team."]],
          comparar: true,
          figuras: [{ src: "chamba/primer-diseno.jpg", etiqueta: "BEFORE", que: "First version (2020): every shift was created by filling out a form.", porque: "Title, schedule, breaks, pay and tips in a single step: slow when you need to fill many shifts." },
            { src: "chamba/reclutadores-2.jpg", etiqueta: "AFTER", que: "Redesigned version: businesses pick the roles they need right on the calendar.", porque: "Picking from a list is faster than typing, and the side menu keeps everything one click away.",
              notas: [{ x: 42, y: 36, texto: "Roles with icons: pick several at once instead of creating shift by shift." },
                { x: 17, y: 24.5, texto: "Fixed side menu: shifts, professionals and invoices one click away." },
                { x: 69, y: 11, texto: "Month or day view: plan a big event or solve today's shift." }] },
            { src: "chamba/negocios.jpg", que: "Professionals: businesses save their trusted Pros.", porque: "Rehiring people who already know the venue lowers the risk of an unfilled shift.",
              notas: [{ x: 27, y: 18.4, texto: "Favorites and blocked: businesses build their own team." },
                { x: 70, y: 19.5, texto: "Favorite Pros get priority on future shifts." },
                { x: 25, y: 34, texto: "Shifts done and rating, to quickly decide who to call." }] }] },
        { tipo: "imagenes", etiqueta: "05 · RESULT", corto: "Result", titulo: "From product to business",
          texto: "After the first redesign the app reached 1,000 downloads in Denver. With B2B clients, the platform filled more than 1,300 shifts at Red Rocks Amphitheatre (98.7%) and more than 400 at Cheyenne Mountain Zoo (96.8%).",
          imagenes: [{ src: "chamba/red-rocks.jpg", que: "The Red Rocks business case page, which I also designed.", porque: "It turns results into a sales argument: 1,300+ shifts, 98.7% fulfillment and 9,000+ hours worked." }] },
        { tipo: "aprendizajes", fondo: "claro", etiqueta: "06 · LEARNINGS", corto: "Learnings", titulo: "What I take away", texto: "What this project taught me.",
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
