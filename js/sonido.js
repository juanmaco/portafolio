/* PROTOTYPE POCKET · música y efectos generados con Web Audio (sin archivos de audio).
   Tres temas originales en estilo chiptune: pulso 25 % (melodía), pulso 50 % (arpegio),
   triángulo (bajo) y ruido (percusión). El sonido empieza apagado y se activa con ♪. */
window.Sonido = (() => {
  const CLAVE = "pp-sonido";
  let activo = false;
  try { activo = localStorage.getItem(CLAVE) === "1"; } catch (e) {}

  let ctx = null, master, musica, efectos, pulso25, pulso50, ruido;
  let pistaDeseada = null, pistaActual = null, reloj = null, paso = 0, proximo = 0;

  /* ---------- Motor ---------- */
  function onda(duty) {
    const n = 32, re = new Float32Array(n), im = new Float32Array(n);
    for (let k = 1; k < n; k++) re[k] = (2 / (k * Math.PI)) * Math.sin(Math.PI * k * duty);
    return ctx.createPeriodicWave(re, im);
  }
  function iniciar() {
    if (ctx) return true;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();
    master = ctx.createGain(); master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -14; comp.ratio.value = 3;
    master.connect(comp); comp.connect(ctx.destination);
    musica = ctx.createGain(); musica.gain.value = 0.55; musica.connect(master);
    efectos = ctx.createGain(); efectos.gain.value = 0.8; efectos.connect(master);
    pulso25 = onda(0.25); pulso50 = onda(0.5);
    const len = ctx.sampleRate * 0.5, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    ruido = buf;
    return true;
  }
  const NOTAS = { C: 0, "C#": 1, Db: 1, D: 2, "D#": 3, Eb: 3, E: 4, F: 5, "F#": 6, Gb: 6, G: 7, "G#": 8, Ab: 8, A: 9, "A#": 10, Bb: 10, B: 11 };
  function hz(nombre) {
    const m = /^([A-G](?:#|b)?)(\d)$/.exec(nombre);
    return 440 * Math.pow(2, (NOTAS[m[1]] + (+m[2] + 1) * 12 - 69) / 12);
  }
  function tono(t, f, dur, { forma = "p25", vol = 0.1, destino = musica, hasta = null, ataque = 0.005 } = {}) {
    const o = ctx.createOscillator(), g = ctx.createGain();
    if (forma === "p25") o.setPeriodicWave(pulso25); else if (forma === "p50") o.setPeriodicWave(pulso50); else o.type = forma;
    o.frequency.setValueAtTime(f, t);
    if (hasta) o.frequency.exponentialRampToValueAtTime(hasta, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + ataque);
    g.gain.setValueAtTime(vol, t + Math.max(ataque, dur * 0.55));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(destino); o.start(t); o.stop(t + dur + 0.02);
  }
  function golpe(t, { dur = 0.05, vol = 0.05, filtro = 6000, destino = musica } = {}) {
    const s = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    s.buffer = ruido; f.type = "highpass"; f.frequency.value = filtro;
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    s.connect(f); f.connect(g); g.connect(destino); s.start(t); s.stop(t + dur + 0.02);
  }
  function bombo(t, vol = 0.22) { tono(t, 130, 0.14, { forma: "sine", vol, hasta: 42, ataque: 0.002 }); }

  /* ---------- Partituras: una ficha por corchea; "-" alarga la nota anterior, "." es silencio ---------- */
  function leerPista(txt) {
    const fichas = txt.trim().split(/\s+/).filter(x => x !== "|"), ev = [];
    fichas.forEach((f, i) => {
      if (f === "-" || f === ".") return;
      let largo = 1; while (fichas[i + largo] === "-") largo += 1;
      ev.push({ i, f: hz(f), largo });
    });
    return { ev, total: fichas.length };
  }
  const arp = (acordes, oct) => acordes.map(a => a.split(" ").map(n => n + oct).join(" ")).join(" ");
  const PISTAS = {
    // Cuarto: tranquilo, para la portada, el menú y el cierre
    cuarto: {
      bpm: 84,
      melodia: `E5 - - G5 D5 - C5 - | A4 - C5 - E5 - D5 C5 | A4 - - C5 F5 - E5 - | D5 - - - - . . . |
                E5 - - G5 D5 - C5 - | A4 - C5 - E5 - G5 - | F5 - E5 - D5 - C5 - | D5 - - B4 C5 - - .`,
      arpegio: [
        "C4 E4 G4 B4 G4 E4 G4 E4", "A3 C4 E4 G4 E4 C4 E4 C4", "F3 A3 C4 E4 C4 A3 C4 A3", "G3 B3 D4 E4 D4 B3 D4 B3",
        "C4 E4 G4 B4 G4 E4 G4 E4", "A3 C4 E4 G4 E4 C4 E4 C4", "F3 A3 C4 E4 C4 A3 C4 A3", "G3 B3 D4 F4 D4 B3 G3 B3"].join(" "),
      bajo: "C3 - - - G2 - - - A2 - - - E2 - - - F2 - - - C3 - - - G2 - - - D3 - - - C3 - - - G2 - - - A2 - - - E2 - - - F2 - - - C3 - - - G2 - - - G2 - - -",
      perc: { hat: [2, 6], bombo: [0], caja: [] }, vol: { mel: 0.075, arp: 0.03, bajo: 0.12 }
    },
    // Profesor: alegre, para la intro, el nombre, la elección y las medallas
    profesor: {
      bpm: 104,
      melodia: `A4 - C5 - F5 - E5 D5 | D5 - - A4 - - F4 - | Bb4 - D5 - F5 - G5 F5 | E5 - - C5 - - . . |
                A4 - C5 - F5 - A5 G5 | F5 - D5 - A4 - - . | Bb4 - D5 - G5 - F5 E5 | F5 - - - . . . .`,
      arpegio: [
        "F4 A4 C5 A4 F4 A4 C5 A4", "D4 F4 A4 F4 D4 F4 A4 F4", "Bb3 D4 F4 D4 Bb3 D4 F4 D4", "C4 E4 G4 E4 C4 E4 G4 Bb4",
        "F4 A4 C5 A4 F4 A4 C5 A4", "D4 F4 A4 F4 D4 F4 A4 F4", "Bb3 D4 F4 D4 C4 E4 G4 E4", "F4 A4 C5 A4 F4 . . ."].join(" "),
      bajo: "F2 . C3 . F2 . C3 . D2 . A2 . D2 . A2 . Bb2 . F2 . Bb2 . F2 . C3 . G2 . C3 . E2 . F2 . C3 . F2 . C3 . D2 . A2 . D2 . A2 . Bb2 . F2 . C3 . G2 . F2 . C3 . F2 - - .",
      perc: { hat: [1, 3, 5, 7], bombo: [0, 4], caja: [2, 6] }, vol: { mel: 0.075, arp: 0.025, bajo: 0.13 }
    },
    // Laboratorio: de exploración, con más empuje
    lab: {
      bpm: 120,
      melodia: `D5 - G5 - B5 - A5 G5 | E5 - - B4 - E5 G5 - | C5 - E5 - G5 - F#5 E5 | D5 - - - A4 - D5 - |
                D5 - G5 - B5 - D6 - | B5 - G5 - E5 - G5 B5 | A5 - G5 - E5 - C5 - | D5 - F#5 - A5 - - .`,
      arpegio: [
        "G4 B4 D5 B4 G4 B4 D5 B4", "E4 G4 B4 G4 E4 G4 B4 G4", "C4 E4 G4 E4 C4 E4 G4 E4", "D4 F#4 A4 F#4 D4 F#4 A4 F#4",
        "G4 B4 D5 B4 G4 B4 D5 B4", "E4 G4 B4 G4 E4 G4 B4 G4", "C4 E4 G4 E4 C4 E4 G4 E4", "D4 F#4 A4 C5 A4 F#4 D4 F#4"].join(" "),
      bajo: "G2 G3 G2 G3 G2 G3 G2 G3 E2 E3 E2 E3 E2 E3 E2 E3 C2 C3 C2 C3 C2 C3 C2 C3 D2 D3 D2 D3 D2 D3 D2 D3 G2 G3 G2 G3 G2 G3 G2 G3 E2 E3 E2 E3 E2 E3 E2 E3 C2 C3 C2 C3 C2 C3 C2 C3 D2 D3 D2 D3 F#2 F#3 A2 A3",
      perc: { hat: [1, 3, 5, 7], bombo: [0, 4], caja: [2, 6] }, vol: { mel: 0.07, arp: 0.022, bajo: 0.12 }
    }
  };
  for (const p of Object.values(PISTAS)) { p.m = leerPista(p.melodia); p.a = leerPista(p.arpegio); p.b = leerPista(p.bajo); }

  function programar(p, n, t) {
    const corchea = 60 / p.bpm / 2, en = (lista, i) => lista.ev.filter(e => e.i === i % lista.total);
    en(p.m, n).forEach(e => tono(t, e.f, e.largo * corchea * 0.95, { forma: "p25", vol: p.vol.mel }));
    en(p.a, n).forEach(e => tono(t, e.f, corchea * 0.6, { forma: "p50", vol: p.vol.arp }));
    en(p.b, n).forEach(e => tono(t, e.f, e.largo * corchea * 0.9, { forma: "triangle", vol: p.vol.bajo }));
    const k = n % 8;
    if (p.perc.hat.includes(k)) golpe(t, { dur: 0.04, vol: 0.035 });
    if (p.perc.bombo.includes(k)) bombo(t, 0.16);
    if (p.perc.caja.includes(k)) golpe(t, { dur: 0.12, vol: 0.06, filtro: 1800 });
  }
  function bucle() {
    const p = PISTAS[pistaActual]; if (!p) return;
    const corchea = 60 / p.bpm / 2;
    while (proximo < ctx.currentTime + 0.15) { programar(p, paso, proximo); proximo += corchea; paso = (paso + 1) % p.m.total; }
  }
  function sonarPista() {
    if (!activo || !ctx || ctx.state !== "running") return;
    if (pistaActual === pistaDeseada && reloj) return;
    clearInterval(reloj); reloj = null; pistaActual = pistaDeseada;
    if (!pistaActual) return;
    paso = 0; proximo = ctx.currentTime + 0.08;
    musica.gain.cancelScheduledValues(ctx.currentTime);
    musica.gain.setValueAtTime(0.0001, ctx.currentTime); musica.gain.exponentialRampToValueAtTime(0.55, ctx.currentTime + 0.6);
    bucle(); reloj = setInterval(bucle, 40);
  }
  function callar() { clearInterval(reloj); reloj = null; pistaActual = null; }

  /* ---------- Efectos ---------- */
  const EF = {
    mover:   t => tono(t, 1320, 0.035, { forma: "p50", vol: 0.05, destino: efectos }),
    a:       t => { tono(t, 880, 0.05, { forma: "p25", vol: 0.07, destino: efectos }); tono(t + 0.05, 1320, 0.07, { forma: "p25", vol: 0.07, destino: efectos }); },
    b:       t => { tono(t, 660, 0.05, { forma: "p25", vol: 0.06, destino: efectos }); tono(t + 0.05, 440, 0.08, { forma: "p25", vol: 0.06, destino: efectos }); },
    tic:     t => tono(t, 1760, 0.012, { forma: "p50", vol: 0.018, destino: efectos }),
    tecla:   t => tono(t, 1046, 0.04, { forma: "p25", vol: 0.05, destino: efectos }),
    encender:t => ["C5", "E5", "G5", "C6"].forEach((n, i) => tono(t + i * 0.09, hz(n), i === 3 ? 0.45 : 0.1, { forma: "p25", vol: 0.08, destino: efectos })),
    medalla: t => ["G5", "B5", "D6", "G6"].forEach((n, i) => tono(t + i * 0.06, hz(n), i === 3 ? 0.3 : 0.08, { forma: "p50", vol: 0.06, destino: efectos })),
    capsula: t => { tono(t, 330, 0.18, { forma: "p25", vol: 0.06, hasta: 990, destino: efectos }); tono(t + 0.18, 1320, 0.2, { forma: "p50", vol: 0.05, destino: efectos }); },
    abrir:   t => ["C5", "E5", "G5", "B5", "D6"].forEach((n, i) => tono(t + i * 0.05, hz(n), 0.12, { forma: "p25", vol: 0.06, destino: efectos }))
  };
  function sfx(nombre) {
    if (!activo || !ctx || ctx.state !== "running" || !EF[nombre]) return;
    EF[nombre](ctx.currentTime + 0.005);
  }

  /* ---------- API pública ---------- */
  function despertar() {
    if (!activo || !iniciar()) return;
    const seguir = () => sonarPista();
    if (ctx.state !== "running") ctx.resume().then(seguir).catch(() => {}); else seguir();
  }
  function alternar() {
    activo = !activo;
    try { localStorage.setItem(CLAVE, activo ? "1" : "0"); } catch (e) {}
    if (activo) { despertar(); setTimeout(() => sfx("a"), 60); } else { callar(); if (ctx) ctx.suspend(); }
    return activo;
  }
  function pista(nombre) { pistaDeseada = nombre || null; if (activo && ctx) sonarPista(); }

  // Los navegadores solo dejan sonar audio después de un gesto: el primero lo despierta si el sonido quedó encendido.
  ["pointerdown", "keydown"].forEach(ev => document.addEventListener(ev, despertar, { capture: true }));
  document.addEventListener("visibilitychange", () => {
    if (!ctx || !activo) return;
    if (document.hidden) ctx.suspend(); else ctx.resume().then(sonarPista);
  });

  return { get activo() { return activo; }, alternar, pista, sfx };
})();
