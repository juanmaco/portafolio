/* PROTOTYPE POCKET · motor del juego (sin dependencias) */
(() => {
  // Idiomas: español (datos.js) e inglés (datos_en.js). D apunta siempre al idioma activo.
  const IDIOMAS = { es: window.DATOS, en: window.DATOS_EN || window.DATOS };
  let idioma = "es", D = IDIOMAS.es;
  const $ = (s, el = document) => el.querySelector(s);
  const marco = $("#marco"), escenario = $("#escenario"), fondo = $("#fondo"), ui = $("#ui");
  const consola = $("#consola"), vistaCaso = $("#caso"), vistaClasico = $("#clasico");

  // El nombre se recuerda entre visitas; los proyectos vistos solo durante la visita actual (sessionStorage).
  const almacen = k => (k === "vistos" ? sessionStorage : localStorage);
  const guardar = (k, v) => { try { almacen(k).setItem("pp-" + k, JSON.stringify(v)); } catch (e) {} };
  try { localStorage.removeItem("pp-vistos"); } catch (e) {}
  const leer = (k, def) => { try { const v = almacen(k).getItem("pp-" + k); return v ? JSON.parse(v) : def; } catch (e) { return def; } };

  // Idioma inicial: ?lang=en|es en la URL, si no el que eligió antes, si no el del navegador (español → ES, otro → EN)
  {
    const param = new URLSearchParams(location.search).get("lang");
    const guardado = leer("idioma", null);
    idioma = IDIOMAS[param] ? param : IDIOMAS[guardado] ? guardado : ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
    D = IDIOMAS[idioma];
  }

  // Sin nombre se muestra «VISITANTE» o «VISITOR» según el idioma
  let nombreGuardado = leer("nombre", "");
  if (nombreGuardado === "VISITANTE" || nombreGuardado === "VISITOR") nombreGuardado = "";
  const estado = { nombre: nombreGuardado, destaca: 1, sel: 1, vistos: leer("vistos", []), visitoLab: false };
  const conNombre = t => t.replace(/\{nombre\}/g, estado.nombre || D.ui.visitante);
  const esc = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- Escala de la pantalla 720×480 ---------- */
  const ajustar = () => { escenario.style.transform = `scale(${marco.clientWidth / 720})`; };
  new ResizeObserver(ajustar).observe(marco); ajustar();

  /* ---------- Fondos SVG (en línea para que usen la fuente de la página) ---------- */
  const cache = {};
  const FONDOS_EN = ["lab", "medallas"];
  async function ponerFondo(nombre) {
    if (!nombre) { fondo.innerHTML = ""; return; }
    if (idioma === "en" && FONDOS_EN.includes(nombre)) nombre += "_en"; // fondos con texto dibujado tienen versión en inglés
    try { fondo.innerHTML = await cargarFondo(nombre); }
    catch (e) { delete cache[nombre]; fondo.innerHTML = ""; } // sin conexión: la escena sigue sin fondo y se reintenta la próxima vez
  }
  // Los fondos son archivos propios del sitio (mismo origen); un error HTTP no se guarda en caché.
  const cargarFondo = n => cache[n] || (cache[n] = fetch(`assets/fondos/${n}.svg`).then(r => { if (!r.ok) throw new Error(r.status); return r.text(); }));
  ["titulo", "profesor"].forEach(n => cargarFondo(n).catch(() => { delete cache[n]; }));

  /* ---------- Entrada: un solo manejador para teclado, botones y toques ---------- */
  let manejador = null;
  const S = window.Sonido || { sfx() {}, pista() {}, alternar() { return false; }, activo: false };
  const sonarTecla = t => {
    if (t && t.click !== undefined) return S.sfx("a");
    if (["arriba", "abajo", "izq", "der", "select"].includes(t)) return S.sfx("mover");
    if (t === "a" || t === "start") return S.sfx("a");
    if (t === "b") return S.sfx("b");
  };
  const enviar = tecla => { sonarTecla(tecla); if (manejador) manejador(tecla); };
  const mapa = { ArrowUp: "arriba", ArrowDown: "abajo", ArrowLeft: "izq", ArrowRight: "der", Enter: "a", " ": "a", z: "a", Z: "a", x: "b", X: "b", Backspace: "b", Escape: "start", Shift: "select" };
  document.addEventListener("keydown", e => {
    if (consola.hidden || document.body.classList.contains("modo-clasico")) return;
    if (escenaActual === "nombre") {
      if (e.key.length === 1 && /[a-záéíóúñü .\-?]/i.test(e.key)) { tecleado = true; escribirLetra(e.key.toUpperCase()); e.preventDefault(); return; }
      if (e.key === "Enter" && tecleado) { e.preventDefault(); return terminarNombre(); }
      if (e.key.startsWith("Arrow")) tecleado = false;
    }
    const t = mapa[e.key]; if (t) { e.preventDefault(); enviar(t); pulsar(t); }
  });
  document.querySelectorAll("[data-tecla]").forEach(b => b.addEventListener("click", () => { enviar(b.dataset.tecla); vibrar(); }));
  marco.addEventListener("click", e => { if (!e.target.closest("[data-click]")) enviar("a"); });
  ui.addEventListener("click", e => { const el = e.target.closest("[data-click]"); if (el) { e.stopPropagation(); enviar({ click: el.dataset.click }); } });
  const vibrar = () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) {} };
  function pulsar(t) { const b = document.querySelector(`[data-tecla="${t}"]`); if (!b) return; b.classList.add("activo"); setTimeout(() => b.classList.remove("activo"), 120); }

  /* ---------- Diálogo con efecto máquina de escribir ---------- */
  let escribiendo = null;
  // mantener: la última línea se queda en pantalla y alTerminar(caja) se llama apenas termina de escribirse
  // (para preguntas que muestran un menú al lado, como el SÍ/NO de las fichas).
  function decir(lineas, alTerminar, { mantener = false } = {}) {
    lineas = [].concat(lineas).map(conNombre);
    let i = 0, entregada = false;
    const caja = document.createElement("div");
    caja.className = "caja dialogo";
    caja.innerHTML = `<div class="caja-int"></div><span class="flecha" hidden></span>`;
    ui.appendChild(caja);
    const txt = caja.firstChild, flecha = caja.lastChild;
    const listo = () => {
      const ultima = i === lineas.length - 1;
      flecha.hidden = mantener && ultima;
      if (mantener && ultima && !entregada) { entregada = true; manejador = anterior; if (alTerminar) alTerminar(caja); }
    };
    const mostrar = () => {
      const linea = lineas[i]; let n = 0; flecha.hidden = true;
      caja.classList.toggle("lleno", linea.split("\n").length > 2);
      clearInterval(escribiendo);
      const reducido = matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducido) { txt.textContent = linea; escribiendo = null; listo(); return; }
      escribiendo = setInterval(() => { n += 1; txt.textContent = linea.slice(0, n); if (n % 3 === 1 && linea[n - 1] !== " ") S.sfx("tic"); if (n >= linea.length) { clearInterval(escribiendo); escribiendo = null; listo(); } }, 26);
    };
    const anterior = manejador;
    manejador = t => {
      if (t !== "a" && t !== "b") return;
      if (escribiendo) { clearInterval(escribiendo); escribiendo = null; txt.textContent = lineas[i]; listo(); return; }
      i += 1;
      if (i < lineas.length) { mostrar(); return; }
      caja.remove(); manejador = anterior; if (alTerminar) alTerminar();
    };
    mostrar();
    return caja;
  }

  /* ---------- Menú genérico ---------- */
  function menu({ x, y, w, h, opciones, alElegir, alVolver, fuente = 27, alto = 42 }) {
    let sel = 0;
    // Alto según el contenido: marco (6+9)×2 + borde interior 3×2 + relleno 12 arriba y 16 abajo (la franja inferior ocupa 12).
    h = opciones.length * alto + 64;
    const caja = document.createElement("div");
    caja.className = "caja menu";
    Object.assign(caja.style, { left: x + "px", top: y + "px", width: w + "px", height: h + "px" });
    const pintar = () => {
      caja.innerHTML = `<div class="caja-int" style="font-size:${fuente}px;line-height:${alto}px"><ul role="menu">${opciones.map((o, k) =>
        `<li role="menuitem" data-click="${k}" class="${k === sel ? "sel" : ""}">${esc(o)}</li>`).join("")}</ul></div>`;
    };
    pintar(); ui.appendChild(caja);
    manejador = t => {
      if (t && t.click !== undefined) { sel = +t.click; pintar(); return elegir(); }
      if (t === "arriba") { sel = (sel + opciones.length - 1) % opciones.length; pintar(); }
      if (t === "abajo" || t === "select") { sel = (sel + 1) % opciones.length; pintar(); }
      if (t === "a") elegir();
      if (t === "b" && alVolver) { caja.remove(); alVolver(); }
    };
    function elegir() { caja.remove(); alElegir(sel); }
    return caja;
  }

  /* ---------- Escenas ---------- */
  let escenaActual = "";
  const MUSICA = { titulo: "cuarto", menu: "cuarto", cierre: "cuarto", intro: "profesor", nombre: "profesor", eleccion: "profesor", medallas: "profesor", lab: "lab" };
  async function escena(nombre, fondoSvg) {
    escenaActual = nombre; manejador = null; clearInterval(escribiendo); escribiendo = null;
    S.pista(MUSICA[nombre] || null); pintarIdioma();
    ui.innerHTML = ""; await ponerFondo(fondoSvg);
  }

  async function encendido() {
    await escena("encendido", null);
    ui.innerHTML = `<div class="encendido"><div><div class="wire"><div class="logo texto-contorno">PROTOTYPE POCKET</div><div class="modelo">MODEL v1.0 · HI-FI</div></div></div>
      <div class="carga">${D.ui.cargando}</div><div class="barra">${"<i></i>".repeat(10)}</div></div>`;
    const barras = ui.querySelectorAll(".barra i"); let k = 0;
    S.sfx("encender");
    const t = setInterval(() => { if (barras[k]) barras[k].classList.add("on"); k += 1; if (k > 10 || escenaActual !== "encendido") { clearInterval(t); if (escenaActual === "encendido") titulo(); } }, 170);
    manejador = tc => { if (tc === "a" || tc === "start") { clearInterval(t); titulo(); } };
  }

  async function titulo() {
    await escena("titulo", "titulo");
    ui.innerHTML = `<div class="press texto-contorno parpadeo">▸ PRESS START ◂</div>
      <div class="pie-titulo"><span>© 2026 JMC</span><span data-click="saltar">${D.ui.saltarIntro}</span></div>`;
    manejador = t => {
      if (t && t.click === "saltar") return saltar();
      if (t === "a" || t === "start") menuInicio();
    };
  }

  async function menuInicio() {
    await escena("menu", "cuarto");
    ui.innerHTML = `<div class="oscurecer"></div><div class="press texto-contorno" style="top:60px;font-size:48px;line-height:54px">JUAN MANUEL<br>CÓRDOBA</div>`;
    menu({ x: 198, y: 222, w: 324, h: 186, opciones: D.ui.menuInicio, alVolver: titulo,
      alElegir: k => [intro, () => laboratorio(true), modoClasico][k]() });
  }

  async function intro() {
    await escena("intro", "profesor");
    decir(D.intro, nombreVisitante);
  }

  /* Teclado del nombre */
  // La última fila son las acciones (borrar, mayúsculas, listo); sus textos dependen del idioma
  const filas = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"], ["K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S"], ["T", "U", "V", "W", "X", "Y", "Z", ".", "-", "?"], ["borrar", "mayus", "listo"]];
  let nombreTemp = "", fil = 0, col = 0, tecleado = false;
  function escribirLetra(l) { if (nombreTemp.length < 12) { nombreTemp += l; pintarNombre(); S.sfx("tecla"); } }
  function pintarNombre() {
    const campo = $(".campo-nombre", ui); if (campo) campo.textContent = (nombreTemp || "") + "_";
    ui.querySelectorAll(".tecla, .acciones span").forEach(el => el.classList.toggle("sel", +el.dataset.f === fil && +el.dataset.c === col));
  }
  async function nombreVisitante() {
    await escena("nombre", "nombre");
    nombreTemp = ""; fil = 0; col = 0; tecleado = false;
    ui.innerHTML = `<div class="pregunta-nombre">${D.ui.preguntaNombre}</div><div class="campo-nombre">_</div><div class="opcional">${D.ui.opcional}</div>
      <div class="caja teclado"><div class="caja-int" style="font-size:30px;line-height:54px;padding:16px 20px 0">
      ${filas.slice(0, 3).map((f, i) => `<div class="fila">${f.map((l, j) => `<span class="tecla" data-click="${i},${j}" data-f="${i}" data-c="${j}">${l}</span>`).join("")}</div>`).join("")}
      <div class="acciones">${filas[3].map((l, j) => `<span data-click="3,${j}" data-f="3" data-c="${j}" class="${l === "listo" ? "listo" : ""}">${l === "listo" ? "▸ " : ""}${D.ui.teclas[j]}</span>`).join("")}</div></div></div>`;
    pintarNombre();
    manejador = t => {
      if (t && t.click) { [fil, col] = t.click.split(",").map(Number); pintarNombre(); return pulsarTecla(); }
      if (t === "der") col = (col + 1) % filas[fil].length;
      if (t === "izq") col = (col + filas[fil].length - 1) % filas[fil].length;
      if (t === "abajo") { fil = (fil + 1) % 4; col = Math.min(col, filas[fil].length - 1); }
      if (t === "arriba") { fil = (fil + 3) % 4; col = Math.min(col, filas[fil].length - 1); }
      if (t === "b") { nombreTemp = nombreTemp.slice(0, -1); }
      if (t === "start") return terminarNombre();
      if (t === "a") return pulsarTecla();
      pintarNombre();
    };
  }
  function pulsarTecla() {
    const l = filas[fil][col];
    if (l === "borrar") nombreTemp = nombreTemp.slice(0, -1);
    else if (l === "listo") return terminarNombre();
    else if (l !== "mayus") escribirLetra(l);
    pintarNombre();
  }
  function terminarNombre() { estado.nombre = nombreTemp.trim(); guardar("nombre", estado.nombre); eleccion(); }

  async function eleccion() {
    await escena("eleccion", "profesor_izq");
    const E = D.eleccion;
    decir(E.pregunta, () => menu({ x: 360, y: 18, w: 342, h: 288, alto: 54, opciones: E.opciones.map(o => o.texto),
      alElegir: k => { estado.destaca = E.opciones[k].destaca; estado.sel = estado.destaca; decir([E.opciones[k].respuesta, E.cierre], medallas); } }));
  }

  async function medallas(desdeMenu) {
    await escena("medallas", "medallas");
    const gs = fondo.querySelectorAll(".medalla");
    if (desdeMenu === true) { decir(conNombre(D.medallasFin), laboratorio); return; }
    gs.forEach(g => { g.style.opacity = 0; g.style.transition = "opacity .3s steps(3)"; });
    let i = 0;
    const siguiente = () => {
      if (i >= D.medallas.length) return decir(D.medallasFin, laboratorio);
      gs[i].style.opacity = 1; S.sfx("medalla"); decir(D.medallas[i], () => { i += 1; siguiente(); });
    };
    siguiente();
  }

  /* Laboratorio: cápsulas en x = 216, 360, 504 (centros) */
  const centros = [216, 360, 504];
  async function laboratorio(saltando) {
    await escena("lab", "lab");
    // Al entrar por primera vez, el cursor arranca en una cápsula disponible (no en una «Próximamente»)
    if (!estado.visitoLab && D.proyectos[estado.sel].proximamente) estado.sel = D.proyectos.findIndex(p => !p.proximamente);
    const vistos = estado.vistos.filter(id => disponibles().some(p => p.id === id));
    ui.innerHTML = `<img class="cursor-lab" src="assets/fondos/cursor.svg" alt="">
      ${centros.map((c, k) => `<div class="zona-capsula" data-click="cap${k}" style="left:${c - 48}px" title="${D.proyectos[k].nombre}"></div>`).join("")}
      ${vistos.map(id => { const k = D.proyectos.findIndex(p => p.id === id); return k < 0 ? "" : `<div class="visto" style="left:${centros[k]}px">${D.ui.visto}</div>`; }).join("")}
      ${D.proyectos.map((p, k) => p.proximamente ? `<div class="visto prox" style="left:${centros[k]}px">${D.ui.proximamente}</div>` : "").join("")}`;
    const mover = () => { fondo.querySelectorAll(".capsula, .sombra-cap").forEach(g => g.classList.toggle("sel", +g.dataset.i === estado.sel)); const cur = $(".cursor-lab", ui); cur.style.left = centros[estado.sel] - 13 + "px"; cur.style.animation = "none"; void cur.offsetWidth; cur.style.animation = ""; };
    mover();
    const libre = () => {
      manejador = t => {
        if (t && t.click && t.click.startsWith("cap")) { estado.sel = +t.click.slice(3); mover(); return ficha(estado.sel); }
        if (t === "der") { estado.sel = (estado.sel + 1) % 3; mover(); }
        if (t === "izq") { estado.sel = (estado.sel + 2) % 3; mover(); }
        if (t === "a") ficha(estado.sel);
        if (t === "start") menuStart();
      };
    };
    if (!estado.visitoLab) { estado.visitoLab = true; decir(saltando === true ? D.lab.slice(1) : D.lab, libre); }
    else if (vistos.length && estado.avisados !== vistos.length && !estado.cierreVisto) {
      estado.avisados = vistos.length;
      // Con todos los disponibles vistos el laboratorio sigue libre: el recorrido termina con FINALIZAR (en el caso o en START)
      const faltan = disponibles().length - vistos.length;
      decir(faltan <= 0 ? [D.labVistos[2], D.ui.pistaFinalizar] : D.labVistos[faltan >= 2 ? 0 : 1], libre);
    }
    else libre();
  }

  function ficha(k) {
    const p = D.proyectos[k];
    const capa = document.createElement("div");
    capa.innerHTML = `<div class="oscurecer"></div><div class="ficha"><div class="ficha-int">
      <div class="ficha-cab" style="background:${p.color}"><h3>${p.nombre}</h3><span class="chip" style="background:${p.chip}">${p.tipo}</span></div>
      <div class="ficha-rol">${p.rol}</div><p class="ficha-desc">${p.desc}</p>
      ${p.proximamente ? `<div class="ficha-prox" style="--c:${p.color}">${D.ui.fichaProx}</div>`
        : `<div class="ficha-stats" style="--c:${p.color}">${p.stats.map(s => `<span>${s}</span>`).join("")}</div>`}</div></div>`;
    ui.appendChild(capa); S.sfx("capsula");
    if (p.proximamente) return decir(p.aviso, () => { capa.remove(); laboratorio(); });
    // La pregunta se queda visible mientras se elige SÍ o NO
    const preguntar = () => decir(p.pregunta, pregunta => {
      menu({ x: 564, y: 179, w: 138, fuente: 25, alto: 36, opciones: [D.ui.si, D.ui.no], alVolver: () => { pregunta.remove(); capa.remove(); laboratorio(); },
        alElegir: s => { pregunta.remove(); if (s === 0) abrirCaso(p.id); else { capa.remove(); decir(D.ui.tomateTiempo, () => laboratorio()); } } });
    }, { mantener: true });
    if (p.nota) decir(p.nota, preguntar); else preguntar();
  }

  async function cierre(felicitar) {
    await escena("cierre", "cuarto");
    estado.cierreVisto = true;
    ui.innerHTML = `<div class="oscurecer"></div>`;
    const c = D.contacto, correo = c.correo.join("@"), m = D.ui.cierreMenu;
    const acciones = [["linkedin", () => window.open(c.linkedin, "_blank", "noopener")], ["email", () => { location.href = "mailto:" + correo; }],
      ["behance", () => window.open(c.behance, "_blank", "noopener")], ["volver", null]];
    if (c.cv) acciones.unshift(["cv", descargarCV]);
    const opciones = acciones.map(a => m[a[0]]);
    const abrir = k => {
      const [clave, accion] = acciones[k];
      if (clave === "volver") return laboratorio();
      accion(); mostrarMenu();
    };
    const mostrarMenu = () => menu({ x: 198, y: 18, w: 324, h: 60 + opciones.length * 48, alto: 48, opciones, alElegir: abrir, alVolver: () => laboratorio() });
    decir(felicitar ? [D.labVistos[2], D.cierre] : D.cierre, mostrarMenu);
  }

  function menuStart() {
    const capa = document.createElement("div"); capa.className = "oscurecer"; ui.appendChild(capa);
    const previo = manejador;
    const st = D.ui.start;
    const items = [[st.proyectos, () => laboratorio()], [st.sobreMi, () => medallas(true)], [st.contacto, () => cierre()], [st.clasico, modoClasico], [st.cerrar, () => { manejador = previo; }]];
    if (todosVistos()) items.unshift([st.finalizar, () => cierre(true)]);
    menu({ x: 198, y: todosVistos() ? 50 : 70, w: 324, alto: 50, opciones: items.map(o => o[0]),
      alVolver: () => { capa.remove(); manejador = previo; },
      alElegir: k => { capa.remove(); items[k][1](); } });
  }

  const disponibles = () => D.proyectos.filter(x => !x.proximamente && D.casos[x.id]);
  const todosVistos = () => disponibles().every(x => estado.vistos.includes(x.id));
  function descargarCV() {
    const a = document.createElement("a"); a.href = D.contacto.cv; a.download = D.contacto.cvArchivo;
    document.body.appendChild(a); a.click(); a.remove();
  }
  function saltar() { estado.visitoLab = false; laboratorio(true); }
  $("#btn-saltar").addEventListener("click", saltar);
  const btnSonido = $("#btn-sonido");
  const pintarSonido = on => { btnSonido.setAttribute("aria-pressed", on); btnSonido.textContent = on ? "♪ ON" : "♪ OFF"; };
  pintarSonido(S.activo);
  btnSonido.addEventListener("click", () => pintarSonido(S.alternar()));

  /* ---------- Caso de estudio ---------- */
  let casoActual = null;
  function abrirCaso(id, redibujar = false) {
    if (!D.casos[id]) return; // proyecto «Próximamente»: no tiene caso publicado
    casoActual = id;
    if (!redibujar) { S.sfx("abrir"); S.pista(null); }
    const u = D.ui;
    if (!estado.vistos.includes(id)) { estado.vistos.push(id); guardar("vistos", estado.vistos); }
    const c = D.casos[id], p = D.proyectos.find(x => x.id === id);
    const lista = disponibles(), sig = lista[(lista.findIndex(x => x.id === id) + 1) % lista.length];
    const clasico = document.body.classList.contains("modo-clasico");
    const volverTxt = clasico ? u.volverProy : u.volverLab;
    const fin = todosVistos() && !clasico; // FINALIZAR solo aparece con los 3 proyectos vistos
    const img = (src, alt = "") => `<img src="assets/casos/${src}" alt="${esc(alt)}" loading="lazy">`;
    const sec = s => {
      const cls = `caso-sec ${s.fondo || ""}`, estilo = s.fondo === "oscuro" ? `style="background:${p.oscuro}"` : "";
      let cuerpo = s.texto ? `<p class="txt">${esc(s.texto)}</p>` : "";
      const cabeza = `<div class="etq">${s.etiqueta}</div><h2>${esc(s.titulo)}</h2>`;
      if (s.tipo === "texto") return `<section class="${cls}" ${estilo}><div class="caso-dos"><div class="caso-col">${cabeza}<p class="txt">${esc(s.texto)}</p></div><div class="caso-lista"><h3>${s.lista.titulo}</h3><ul>${s.lista.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div></div></section>`;
      if (s.tipo === "imagenes") cuerpo += `<div class="caso-galeria ${s.imagenes.length === 1 ? "una" : ""} ${s.columnas === 4 ? "telefonos" : ""}" style="--cols:${s.columnas || 2}">${s.imagenes.map(i => img(i, s.titulo)).join("")}</div>` +
        (s.extra ? `<div class="caso-extra"><h3>${s.extra.titulo}</h3>${img(s.extra.imagen, s.extra.titulo)}</div>` : "");
      if (s.tipo === "estudios") cuerpo += `<div class="caso-cards">${s.estudios.map(e => `<div class="caso-card"><h3>${e[0]}</h3><h4>${esc(e[1])}</h4><small>${esc(e[2])}</small><p>${esc(e[3])}</p></div>`).join("")}</div>` +
        (s.destaque
          ? `<div class="caso-destaque"><div>${img(s.imagen, s.destaque.titulo)}</div><div class="caso-lista"><h3>${s.destaque.titulo}</h3><p>${esc(s.destaque.texto)}</p><ul>${s.destaque.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div></div>`
          : `<div style="max-width:${s.imagenAncho || 1200}px">${img(s.imagen, s.titulo)}</div>`);
      if (s.tipo === "aprendizajes") cuerpo += `<div class="caso-cards apr">${s.tarjetas.map((t, k) => `<div class="caso-card ${k === 2 ? "osc" : ""}"><h3>${esc(t[0])}</h3><p>${esc(t[1])}</p></div>`).join("")}</div>`;
      return `<section class="${cls}" ${estilo}>${cabeza}${cuerpo}</section>`;
    };
    vistaCaso.style.setProperty("--acento", p.color); vistaCaso.style.setProperty("--oscuro", p.oscuro);
    vistaCaso.innerHTML = `
      <nav class="caso-nav"><button data-accion="lab">◂ ${volverTxt}</button><span class="num">${u.capsula} ${lista.indexOf(p) + 1} / ${lista.length} · ${p.nombre}</span>${fin ? `<button class="sig fin" data-accion="fin">${u.finalizar} ▸</button>` : `<button class="sig" data-accion="sig">${u.siguiente}: ${sig.nombre} ▸</button>`}</nav>
      <header class="caso-hero" style="background:${p.oscuro}"><div><span class="caso-etq" style="background:${p.color}">${c.etiqueta}</span><h1>${c.titulo}</h1>
        <p class="caso-sub" style="color:${p.chip}">${esc(c.subtitulo)}</p><p class="res">${esc(c.resumen)}</p>
        <div class="caso-meta">${c.meta.map(m => `<div><small>${m[0]}</small><b>${esc(m[1])}</b></div>`).join("")}</div></div>${img(c.portada, c.titulo)}</header>
      <div class="caso-stats" style="background:${p.color}">${c.stats.map(s => `<div><strong>${esc(s[0])}</strong><span>${esc(s[1])}</span></div>`).join("")}</div>
      ${c.secciones.map(sec).join("")}
      <footer class="caso-fin"><h2>${fin ? u.vistoTodo : u.seguimos}</h2><button class="bot" data-accion="lab">◂ ${volverTxt}</button><button class="bot sig" style="background:${sig.color}" data-accion="sig">${u.siguienteCapsula}: ${sig.nombre} ▸</button>${fin ? `<button class="bot fin" data-accion="fin">${u.finalizar} ▸</button>` : ""}
        <nav>${D.contacto.cv ? `<a href="${D.contacto.cv}" download="${D.contacto.cvArchivo}">${u.descargarCV}</a>` : ""}<a href="${D.contacto.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${D.contacto.behance}" target="_blank" rel="noopener">Behance</a><a href="#" data-accion="correo">Email</a></nav></footer>`;
    vistaCaso.querySelectorAll("[data-accion]").forEach(b => b.addEventListener("click", e => {
      e.preventDefault(); const a = b.dataset.accion;
      if (a === "lab") { if (document.body.classList.contains("modo-clasico")) modoClasico(); else volverAlJuego(); }
      if (a === "sig") abrirCaso(sig.id);
      if (a === "fin") finalizar();
      if (a === "correo") location.href = "mailto:" + D.contacto.correo.join("@");
    }));
    consola.hidden = true; vistaClasico.hidden = true; vistaCaso.hidden = false; if (!redibujar) window.scrollTo(0, 0);
    document.title = `${c.titulo} · Juan Manuel Córdoba`; pintarIdioma();
  }
  function finalizar() {
    vistaCaso.hidden = true; vistaClasico.hidden = true; consola.hidden = false;
    document.title = D.ui.titulo; ajustar(); cierre(true);
  }
  // Desde el modo clásico, «Jugar» enciende la consola y arranca la experiencia completa (portada, intro, nombre…)
  function jugarDesdeInicio() {
    vistaCaso.hidden = true; vistaClasico.hidden = true; consola.hidden = false; document.body.classList.remove("modo-clasico");
    document.title = D.ui.titulo; window.scrollTo(0, 0); ajustar();
    estado.visitoLab = false; estado.avisados = 0; estado.cierreVisto = false;
    encendido();
  }
  function volverAlJuego() {
    vistaCaso.hidden = true; vistaClasico.hidden = true; consola.hidden = false; document.body.classList.remove("modo-clasico");
    document.title = D.ui.titulo; ajustar(); laboratorio();
  }

  /* ---------- Modo clásico ---------- */
  function modoClasico(redibujar = false) {
    document.body.classList.add("modo-clasico"); S.pista(null);
    document.title = D.ui.titulo;
    const c = D.contacto, u = D.ui;
    vistaClasico.innerHTML = `<header><h1>Juan Manuel Córdoba</h1><p>${u.clasicoIntro}</p>
      <button class="volver" data-accion="juego">${u.jugar}</button></header>
      <main>${D.proyectos.slice().sort((a, b) => !!a.proximamente - !!b.proximamente).map(p => p.proximamente
        ? `<div class="proy prox" aria-disabled="true">
        <div class="cab" style="background:${p.color}">${p.nombre}<small>${p.tipo}</small></div><p>${esc(p.desc)}</p><p class="aviso">${u.avisoProx}</p>
        <span class="ver" style="--c:${p.color}">${u.proxPie} <span class="flecha-ver" aria-hidden="true">⏳</span></span></div>`
        : `<button class="proy" data-caso="${p.id}">
        <div class="cab" style="background:${p.color}">${p.nombre}<small>${p.tipo}</small></div><p>${esc(p.desc)}</p><ul>${p.stats.map(s => `<li>${esc(s)}</li>`).join("")}</ul>
        <span class="ver" style="--c:${p.color}">${u.verCaso} <span class="flecha-ver" aria-hidden="true">▸</span></span></button>`).join("")}</main>
      <footer>${c.cv ? `<a href="${c.cv}" download="${c.cvArchivo}">${u.descargarCV}</a>` : ""}<a href="${c.linkedin}" target="_blank" rel="noopener">LinkedIn</a><a href="${c.behance}" target="_blank" rel="noopener">Behance</a><a href="#" data-accion="correo">Email</a></footer>`;
    vistaClasico.querySelectorAll("[data-caso]").forEach(b => b.addEventListener("click", () => abrirCaso(b.dataset.caso)));
    vistaClasico.querySelector('[data-accion="juego"]').addEventListener("click", jugarDesdeInicio);
    vistaClasico.querySelector('[data-accion="correo"]').addEventListener("click", e => { e.preventDefault(); location.href = "mailto:" + c.correo.join("@"); });
    consola.hidden = true; vistaCaso.hidden = true; vistaClasico.hidden = false; if (!redibujar) window.scrollTo(0, 0);
    pintarIdioma();
  }
  document.querySelector('#giro [data-accion="clasico"]').addEventListener("click", () => modoClasico());

  /* ---------- Idioma: ES / EN ---------- */
  const btnIdioma = $("#btn-idioma"), btnIdiomaFlotante = $("#idioma-flotante");
  // Textos fijos del HTML (aviso de girar, ayuda, botones de la consola) y estado de los botones ES/EN
  function pintarIdioma() {
    const u = D.ui;
    document.documentElement.lang = idioma;
    $("#giro-titulo").textContent = u.giroTitulo; $("#giro p").textContent = u.giroTexto; $('#giro [data-accion="clasico"]').textContent = u.giroBoton;
    $(".ayuda").textContent = u.ayuda;
    const bs = $("#btn-saltar"); bs.textContent = u.saltar; bs.title = u.saltarTitulo;
    btnSonido.title = u.sonidoTitulo;
    $('[data-tecla="a"]').setAttribute("aria-label", u.botonA); $('[data-tecla="b"]').setAttribute("aria-label", u.botonB);
    [btnIdioma, btnIdiomaFlotante].forEach(b => {
      b.innerHTML = `<span class="${idioma === "es" ? "on" : ""}">ES</span> / <span class="${idioma === "en" ? "on" : ""}">EN</span>`;
      b.title = u.idiomaTitulo; b.setAttribute("aria-label", u.idiomaTitulo); b.lang = idioma === "es" ? "en" : "es";
    });
    btnIdiomaFlotante.hidden = !consola.hidden;
  }
  // Al cambiar de idioma se vuelve a dibujar lo que está en pantalla, sin perder el avance
  const ESCENAS = { encendido: () => titulo(), titulo: () => titulo(), menu: () => menuInicio(), intro: () => intro(), nombre: () => nombreVisitante(),
    eleccion: () => eleccion(), medallas: () => medallas(true), lab: () => laboratorio(), cierre: () => cierre() };
  function cambiarIdioma() {
    idioma = idioma === "es" ? "en" : "es"; D = IDIOMAS[idioma]; guardar("idioma", idioma);
    pintarIdioma();
    if (!vistaCaso.hidden && casoActual) abrirCaso(casoActual, true);
    else if (!vistaClasico.hidden) modoClasico(true);
    else { document.title = D.ui.titulo; (ESCENAS[escenaActual] || titulo)(); }
  }
  [btnIdioma, btnIdiomaFlotante].forEach(b => b.addEventListener("click", cambiarIdioma));
  pintarIdioma();

  encendido();
})();
