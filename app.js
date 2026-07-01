var EDITOR_PASSWORD = "bosteros2026";
var STORAGE_KEY = "bosteros_manager_data_v7_import_position";

var defaultPlayers = [
  {
    "name": "Flego",
    "tecnica": 70,
    "pase": 60,
    "definicion": 80,
    "defensa": 80,
    "fisico": 80,
    "inteligencia": 75,
    "compromiso": 85,
    "control": 65,
    "entrada": 80,
    "marca": 80,
    "regate": 70,
    "tiroLargo": 75,
    "anticipacion": 78,
    "calma": 75,
    "decisiones": 68,
    "disciplina": 82,
    "intensidad": 82,
    "juegoEquipo": 72,
    "movimientoSinPelota": 78,
    "visionJuego": 68,
    "aceleracion": 80,
    "agilidad": 75,
    "fuerza": 80,
    "resistencia": 80,
    "velocidad": 80,
    "arquero": 50,
    "posicionNatural": "defensa",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Gabi",
    "tecnica": 60,
    "pase": 60,
    "definicion": 70,
    "defensa": 80,
    "fisico": 65,
    "inteligencia": 65,
    "compromiso": 85,
    "control": 60,
    "entrada": 80,
    "marca": 80,
    "regate": 60,
    "tiroLargo": 65,
    "anticipacion": 72,
    "calma": 65,
    "decisiones": 62,
    "disciplina": 82,
    "intensidad": 75,
    "juegoEquipo": 72,
    "movimientoSinPelota": 65,
    "visionJuego": 62,
    "aceleracion": 65,
    "agilidad": 62,
    "fuerza": 72,
    "resistencia": 65,
    "velocidad": 65,
    "arquero": 50,
    "posicionNatural": "defensa",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Rodri",
    "tecnica": 80,
    "pase": 70,
    "definicion": 85,
    "defensa": 50,
    "fisico": 60,
    "inteligencia": 65,
    "compromiso": 85,
    "control": 75,
    "entrada": 50,
    "marca": 50,
    "regate": 80,
    "tiroLargo": 82,
    "anticipacion": 58,
    "calma": 65,
    "decisiones": 68,
    "disciplina": 68,
    "intensidad": 72,
    "juegoEquipo": 78,
    "movimientoSinPelota": 62,
    "visionJuego": 68,
    "aceleracion": 60,
    "agilidad": 70,
    "fuerza": 55,
    "resistencia": 60,
    "velocidad": 60,
    "arquero": 50,
    "posicionNatural": "delantero",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Rober",
    "tecnica": 75,
    "pase": 70,
    "definicion": 80,
    "defensa": 80,
    "fisico": 65,
    "inteligencia": 70,
    "compromiso": 85,
    "control": 72,
    "entrada": 80,
    "marca": 80,
    "regate": 75,
    "tiroLargo": 78,
    "anticipacion": 75,
    "calma": 70,
    "decisiones": 70,
    "disciplina": 82,
    "intensidad": 75,
    "juegoEquipo": 78,
    "movimientoSinPelota": 68,
    "visionJuego": 70,
    "aceleracion": 65,
    "agilidad": 70,
    "fuerza": 72,
    "resistencia": 65,
    "velocidad": 65,
    "arquero": 50,
    "posicionNatural": "defensa",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Cabe",
    "tecnica": 65,
    "pase": 65,
    "definicion": 75,
    "defensa": 60,
    "fisico": 55,
    "inteligencia": 60,
    "compromiso": 75,
    "control": 65,
    "entrada": 60,
    "marca": 60,
    "regate": 65,
    "tiroLargo": 70,
    "anticipacion": 60,
    "calma": 60,
    "decisiones": 62,
    "disciplina": 68,
    "intensidad": 65,
    "juegoEquipo": 70,
    "movimientoSinPelota": 58,
    "visionJuego": 62,
    "aceleracion": 55,
    "agilidad": 60,
    "fuerza": 58,
    "resistencia": 55,
    "velocidad": 55,
    "arquero": 50,
    "posicionNatural": "mediocampo",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Carlitos",
    "tecnica": 70,
    "pase": 70,
    "definicion": 70,
    "defensa": 80,
    "fisico": 85,
    "inteligencia": 65,
    "compromiso": 85,
    "control": 70,
    "entrada": 80,
    "marca": 80,
    "regate": 70,
    "tiroLargo": 70,
    "anticipacion": 72,
    "calma": 65,
    "decisiones": 68,
    "disciplina": 82,
    "intensidad": 85,
    "juegoEquipo": 78,
    "movimientoSinPelota": 75,
    "visionJuego": 68,
    "aceleracion": 85,
    "agilidad": 78,
    "fuerza": 82,
    "resistencia": 85,
    "velocidad": 85,
    "arquero": 50,
    "posicionNatural": "defensa",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Niko",
    "tecnica": 80,
    "pase": 65,
    "definicion": 70,
    "defensa": 60,
    "fisico": 70,
    "inteligencia": 65,
    "compromiso": 70,
    "control": 72,
    "entrada": 60,
    "marca": 60,
    "regate": 80,
    "tiroLargo": 75,
    "anticipacion": 62,
    "calma": 65,
    "decisiones": 65,
    "disciplina": 65,
    "intensidad": 70,
    "juegoEquipo": 68,
    "movimientoSinPelota": 68,
    "visionJuego": 65,
    "aceleracion": 70,
    "agilidad": 75,
    "fuerza": 65,
    "resistencia": 70,
    "velocidad": 70,
    "arquero": 50,
    "posicionNatural": "mediocampo",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Joni",
    "tecnica": 60,
    "pase": 70,
    "definicion": 80,
    "defensa": 40,
    "fisico": 55,
    "inteligencia": 75,
    "compromiso": 60,
    "control": 65,
    "entrada": 40,
    "marca": 40,
    "regate": 60,
    "tiroLargo": 70,
    "anticipacion": 58,
    "calma": 75,
    "decisiones": 72,
    "disciplina": 50,
    "intensidad": 58,
    "juegoEquipo": 65,
    "movimientoSinPelota": 65,
    "visionJuego": 72,
    "aceleracion": 55,
    "agilidad": 58,
    "fuerza": 48,
    "resistencia": 55,
    "velocidad": 55,
    "arquero": 50,
    "posicionNatural": "delantero",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Nico",
    "tecnica": 80,
    "pase": 65,
    "definicion": 70,
    "defensa": 60,
    "fisico": 75,
    "inteligencia": 70,
    "compromiso": 70,
    "control": 72,
    "entrada": 60,
    "marca": 60,
    "regate": 80,
    "tiroLargo": 75,
    "anticipacion": 65,
    "calma": 70,
    "decisiones": 68,
    "disciplina": 65,
    "intensidad": 72,
    "juegoEquipo": 68,
    "movimientoSinPelota": 72,
    "visionJuego": 68,
    "aceleracion": 75,
    "agilidad": 78,
    "fuerza": 68,
    "resistencia": 75,
    "velocidad": 75,
    "arquero": 50,
    "posicionNatural": "mediocampo",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Leo 🇮🇹",
    "tecnica": 75,
    "pase": 80,
    "definicion": 85,
    "defensa": 40,
    "fisico": 70,
    "inteligencia": 80,
    "compromiso": 65,
    "control": 78,
    "entrada": 40,
    "marca": 40,
    "regate": 75,
    "tiroLargo": 80,
    "anticipacion": 60,
    "calma": 80,
    "decisiones": 80,
    "disciplina": 52,
    "intensidad": 68,
    "juegoEquipo": 72,
    "movimientoSinPelota": 75,
    "visionJuego": 80,
    "aceleracion": 70,
    "agilidad": 72,
    "fuerza": 55,
    "resistencia": 70,
    "velocidad": 70,
    "arquero": 50,
    "posicionNatural": "delantero",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Tiziano",
    "tecnica": 70,
    "pase": 70,
    "definicion": 70,
    "defensa": 75,
    "fisico": 80,
    "inteligencia": 70,
    "compromiso": 70,
    "control": 70,
    "entrada": 75,
    "marca": 75,
    "regate": 70,
    "tiroLargo": 70,
    "anticipacion": 72,
    "calma": 70,
    "decisiones": 70,
    "disciplina": 72,
    "intensidad": 75,
    "juegoEquipo": 70,
    "movimientoSinPelota": 75,
    "visionJuego": 70,
    "aceleracion": 80,
    "agilidad": 75,
    "fuerza": 78,
    "resistencia": 80,
    "velocidad": 80,
    "arquero": 50,
    "posicionNatural": "defensa",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Facu",
    "tecnica": 80,
    "pase": 60,
    "definicion": 70,
    "defensa": 60,
    "fisico": 60,
    "inteligencia": 60,
    "compromiso": 60,
    "control": 70,
    "entrada": 60,
    "marca": 60,
    "regate": 80,
    "tiroLargo": 75,
    "anticipacion": 60,
    "calma": 60,
    "decisiones": 60,
    "disciplina": 60,
    "intensidad": 60,
    "juegoEquipo": 60,
    "movimientoSinPelota": 60,
    "visionJuego": 60,
    "aceleracion": 60,
    "agilidad": 70,
    "fuerza": 60,
    "resistencia": 60,
    "velocidad": 60,
    "arquero": 50,
    "posicionNatural": "mediocampo",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Cuchu",
    "tecnica": 50,
    "pase": 65,
    "definicion": 60,
    "defensa": 60,
    "fisico": 50,
    "inteligencia": 50,
    "compromiso": 70,
    "control": 58,
    "entrada": 60,
    "marca": 60,
    "regate": 50,
    "tiroLargo": 55,
    "anticipacion": 55,
    "calma": 50,
    "decisiones": 58,
    "disciplina": 65,
    "intensidad": 60,
    "juegoEquipo": 68,
    "movimientoSinPelota": 50,
    "visionJuego": 58,
    "aceleracion": 50,
    "agilidad": 50,
    "fuerza": 55,
    "resistencia": 50,
    "velocidad": 50,
    "arquero": 50,
    "posicionNatural": "mediocampo",
    "photo": "",
    "status": "confirmed"
  },
  {
    "name": "Dylan",
    "tecnica": 75,
    "pase": 70,
    "definicion": 70,
    "defensa": 70,
    "fisico": 75,
    "inteligencia": 70,
    "compromiso": 65,
    "control": 72,
    "entrada": 70,
    "marca": 70,
    "regate": 75,
    "tiroLargo": 72,
    "anticipacion": 70,
    "calma": 70,
    "decisiones": 70,
    "disciplina": 68,
    "intensidad": 70,
    "juegoEquipo": 68,
    "movimientoSinPelota": 72,
    "visionJuego": 70,
    "aceleracion": 75,
    "agilidad": 75,
    "fuerza": 72,
    "resistencia": 75,
    "velocidad": 75,
    "arquero": 50,
    "posicionNatural": "lateral",
    "photo": "",
    "status": "confirmed"
  }
];

var state = {
  isEditor: false,
  players: [],
  teams: { a: [], b: [], positions: {} },
  match: {
    day: "Miércoles",
    arrival: "22:00",
    start: "22:30",
    place: "Campo de fútbol Benimàmet CF",
    map: "https://maps.app.goo.gl/CbSoLSd9j3njXck67",
    cost: 5,
    teamAColor: "yellow",
    teamBColor: "blue"
  }
};

var statGroups = [
  {
    title: "Stats existentes",
    stats: [
      ["tecnica", "Técnica", "#35e875"],
      ["pase", "Pase", "#4ca8ff"],
      ["definicion", "Definición", "#ffd43b"],
      ["defensa", "Defensa", "#ff5353"],
      ["fisico", "Físico", "#9c6bff"],
      ["inteligencia", "Inteligencia", "#32d4d9"],
      ["compromiso", "Compromiso", "#ff5bae"],
      ["arquero", "Arquero", "#ffffff"]
    ]
  },
  {
    title: "Técnicos",
    stats: [
      ["control", "Control", "#35e875"],
      ["entrada", "Entrada / Tacle", "#ff5353"],
      ["marca", "Marca", "#ff7a7a"],
      ["regate", "Regate", "#4ca8ff"],
      ["tiroLargo", "Tiro largo", "#ffd43b"]
    ]
  },
  {
    title: "Mentales",
    stats: [
      ["anticipacion", "Anticipación", "#32d4d9"],
      ["calma", "Calma", "#8be9fd"],
      ["decisiones", "Decisiones", "#35e875"],
      ["disciplina", "Disciplina", "#ff5bae"],
      ["intensidad", "Intensidad", "#ffd43b"],
      ["juegoEquipo", "Juego en equipo", "#4ca8ff"],
      ["movimientoSinPelota", "Movimiento sin pelota", "#9c6bff"],
      ["visionJuego", "Visión de juego", "#32d4d9"]
    ]
  },
  {
    title: "Físicos",
    stats: [
      ["aceleracion", "Aceleración", "#35e875"],
      ["agilidad", "Agilidad", "#4ca8ff"],
      ["fuerza", "Fuerza", "#ff5353"],
      ["resistencia", "Resistencia", "#ffd43b"],
      ["velocidad", "Velocidad", "#9c6bff"]
    ]
  }
];

var statConfig = statGroups.reduce(function(list, group) {
  return list.concat(group.stats);
}, []);

var compareConfig = [
  ["Ataque", ["definicion", "regate", "tiroLargo", "control"]],
  ["Defensa", ["defensa", "entrada", "marca", "anticipacion"]],
  ["Físico", ["fisico", "aceleracion", "agilidad", "fuerza", "resistencia", "velocidad"]],
  ["Táctica", ["inteligencia", "decisiones", "disciplina", "visionJuego", "juegoEquipo"]]
];

var categoryConfig = [
  ["Técnica", ["tecnica", "control", "regate"]],
  ["Ataque", ["definicion", "tiroLargo", "movimientoSinPelota"]],
  ["Defensa", ["defensa", "entrada", "marca", "anticipacion"]],
  ["Juego", ["pase", "visionJuego", "decisiones", "juegoEquipo"]],
  ["Físico", ["fisico", "aceleracion", "agilidad", "fuerza", "resistencia", "velocidad"]],
  ["Mental", ["inteligencia", "calma", "disciplina", "intensidad", "compromiso"]]
];

var colorLabel = {
  yellow: "Boca amarilla",
  blue: "Boca azul",
  white: "Boca blanca"
};


var positionLabel = {
  polivalente: "Polivalente",
  arquero: "Arquero",
  defensa: "Defensa",
  lateral: "Lateral",
  mediocampo: "Mediocampo",
  extremo: "Extremo",
  delantero: "Delantero"
};

function positionGroup(pos) {
  if (pos === "arquero") return "arquero";
  if (pos === "defensa" || pos === "lateral") return "defensa";
  if (pos === "mediocampo" || pos === "polivalente") return "medio";
  if (pos === "extremo" || pos === "delantero") return "ataque";
  return "medio";
}

function positionScore(indexes) {
  var counts = { arquero: 0, defensa: 0, medio: 0, ataque: 0 };

  indexes.forEach(function(index) {
    var p = state.players[index];
    var group = positionGroup(p.posicionNatural || "polivalente");
    counts[group] += 1;
  });

  return counts;
}

function rolePenaltyForTeam(indexes, candidateIndex) {
  var next = indexes.slice();
  next.push(candidateIndex);

  var counts = positionScore(next);
  var penalty = 0;

  if (counts.defensa === 0) penalty += 10;
  if (counts.medio === 0) penalty += 8;
  if (counts.ataque === 0) penalty += 8;

  if (counts.defensa > 3) penalty += (counts.defensa - 3) * 3;
  if (counts.ataque > 3) penalty += (counts.ataque - 3) * 3;
  if (counts.arquero > 1) penalty += (counts.arquero - 1) * 8;

  return penalty;
}


function init() {
  var saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("bosteros_manager_data_v4_full_stats") || localStorage.getItem("bosteros_manager_data_v3_mobile_drag") || localStorage.getItem("bosteros_manager_data_v2");

  if (saved) {
    try {
      var parsed = JSON.parse(saved);
      state.players = parsed.players || defaultPlayers;
      state.match = parsed.match || state.match;
      state.teams = parsed.teams || state.teams;
      if (!state.teams.positions) state.teams.positions = {};
    } catch (e) {
      state.players = defaultPlayers;
    }
  } else {
    state.players = defaultPlayers;
    saveData();
  }

  normalizePlayers();
  bindEvents();
  setNextWednesdayDate();
  renderAll();
}



function inferNaturalPosition(p) {
  var def = Number(p.defensa || 50) + Number(p.marca || 50) + Number(p.entrada || 50);
  var mid = Number(p.pase || 50) + Number(p.visionJuego || 50) + Number(p.decisiones || 50);
  var att = Number(p.definicion || 50) + Number(p.regate || 50) + Number(p.tiroLargo || 50);

  if (def >= mid && def >= att) return "defensa";
  if (att >= def && att >= mid) return "delantero";
  return "mediocampo";
}

function normalizePlayers() {
  state.players = state.players.map(function(p) {
    var base = {
      tecnica: p.tecnica || 50,
      pase: p.pase || 50,
      definicion: p.definicion || 50,
      defensa: p.defensa || 50,
      fisico: p.fisico || 50,
      inteligencia: p.inteligencia || 50,
      compromiso: p.compromiso || 50
    };

    var defaults = {
      control: Math.round((base.tecnica + base.pase) / 2),
      entrada: base.defensa,
      marca: base.defensa,
      regate: base.tecnica,
      tiroLargo: Math.round((base.definicion + base.tecnica) / 2),
      anticipacion: Math.round((base.defensa + base.inteligencia) / 2),
      calma: base.inteligencia,
      decisiones: Math.round((base.inteligencia + base.pase) / 2),
      disciplina: Math.round((base.defensa + base.compromiso) / 2),
      intensidad: Math.round((base.fisico + base.compromiso) / 2),
      juegoEquipo: Math.round((base.pase + base.compromiso) / 2),
      movimientoSinPelota: Math.round((base.inteligencia + base.fisico) / 2),
      visionJuego: Math.round((base.inteligencia + base.pase) / 2),
      aceleracion: base.fisico,
      agilidad: Math.round((base.fisico + base.tecnica) / 2),
      fuerza: Math.round((base.fisico + base.defensa) / 2),
      resistencia: base.fisico,
      velocidad: base.fisico,
      arquero: p.arquero || 50
    };

    Object.keys(defaults).forEach(function(key) {
      if (p[key] === undefined || p[key] === null || p[key] === "") {
        p[key] = defaults[key];
      }
    });

    if (!p.status) p.status = "confirmed";
    if (!p.photo) p.photo = "";
    if (!p.posicionNatural) p.posicionNatural = inferNaturalPosition(p);
    return p;
  });

  saveData();
}


function saveData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      players: state.players,
      match: state.match,
      teams: state.teams
    }));
  } catch (e) {
    alert("No se pudo guardar. Si subiste fotos muy grandes, probá con fotos más livianas.");
  }
}

function bindEvents() {
  document.querySelectorAll(".nav-btn").forEach(function(btn) {
    btn.addEventListener("click", function() { showView(btn.dataset.view); });
  });

  document.querySelectorAll("[data-view-target]").forEach(function(btn) {
    btn.addEventListener("click", function() { showView(btn.dataset.viewTarget); });
  });

  document.getElementById("editorBtn").addEventListener("click", unlockEditor);
  document.getElementById("logoutEditorBtn").addEventListener("click", lockEditor);

  document.getElementById("openPlayerModalBtn").addEventListener("click", function(){ openPlayerModal(); });
  document.getElementById("openPlayerModalBtn2").addEventListener("click", function(){ openPlayerModal(); });
  document.getElementById("closePlayerModalBtn").addEventListener("click", closePlayerModal);
  document.getElementById("cancelPlayerBtn").addEventListener("click", closePlayerModal);
  document.getElementById("savePlayerBtn").addEventListener("click", savePlayerFromModal);
  document.getElementById("playerPhoto").addEventListener("change", handlePhotoInput);
  document.getElementById("playerName").addEventListener("input", updateModalOverallPreview);

  document.getElementById("quickGenerateBtn").addEventListener("click", generateTeams);
  document.getElementById("generateTeamsBtn").addEventListener("click", generateTeams);
  document.getElementById("regenerateTeamsBtn").addEventListener("click", regenerateTeams);
  document.getElementById("resetTeamsBtn").addEventListener("click", resetTeams);
  document.getElementById("shareTeamsBtn").addEventListener("click", showShareText);
  document.getElementById("copyShareBtn").addEventListener("click", copyShareText);
  document.getElementById("saveMatchBtn").addEventListener("click", saveMatchFromForm);
  document.getElementById("exportDataBtn").addEventListener("click", exportDatabase);
  document.getElementById("importDataBtn").addEventListener("click", triggerImportDatabase);
  document.getElementById("importDataInput").addEventListener("change", importDatabaseFromFile);
}

function showView(id) {
  document.querySelectorAll(".view").forEach(function(view) { view.classList.remove("active"); });
  document.querySelectorAll(".nav-btn").forEach(function(btn) { btn.classList.toggle("active", btn.dataset.view === id); });
  document.getElementById(id).classList.add("active");

  var titles = {
    dashboard: ["Dashboard", "Próximo partido, cancha y jugadores."],
    players: ["Jugadores", "Base de datos, fotos y aptitudes."],
    match: ["Partido", "Convocados, horarios, cancha y camisetas."],
    teams: ["Equipos", "Formación sobre la cancha."]
  };

  document.getElementById("viewTitle").textContent = titles[id][0];
  document.getElementById("viewSubtitle").textContent = titles[id][1];
}

function unlockEditor() {
  var pass = prompt("Contraseña de editor");
  if (pass === EDITOR_PASSWORD) {
    state.isEditor = true;
    renderEditorMode();
    alert("Modo editor activado");
  } else {
    alert("Contraseña incorrecta");
  }
}

function lockEditor() {
  state.isEditor = false;
  renderEditorMode();
}

function renderEditorMode() {
  document.getElementById("editorStatus").textContent = state.isEditor ? "Modo editor" : "Modo visitante";
  document.querySelector(".editor-box small").textContent = state.isEditor ? "Permisos activos" : "Solo lectura";
  document.getElementById("editorBtn").classList.toggle("hidden", state.isEditor);
  document.getElementById("logoutEditorBtn").classList.toggle("hidden", !state.isEditor);

  document.querySelectorAll(".editor-only").forEach(function(el) {
    el.classList.toggle("hidden", !state.isEditor);
  });

  ["matchDay", "matchArrival", "matchStart", "matchPlace", "matchMap", "matchCost", "teamAColor", "teamBColor"].forEach(function(id) {
    document.getElementById(id).disabled = !state.isEditor;
  });

  renderPlayers();
  renderCallList();
  renderTeams();
}

function setNextWednesdayDate() {
  var today = new Date();
  var target = 3;
  var diff = target - today.getDay();
  if (diff < 0) diff += 7;

  var next = new Date(today);
  next.setDate(today.getDate() + diff);

  document.getElementById("dashDate").textContent = next.toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });
}

function renderAll() {
  renderEditorMode();
  renderDashboard();
  renderPlayers();
  renderCallList();
  renderMatchForm();
  renderTeams();
}

function averageKeys(p, keys) {
  if (!keys.length) return 0;

  var total = keys.reduce(function(sum, key) {
    return sum + Number(p[key] || 50);
  }, 0);

  return Math.round(total / keys.length);
}

function categoryValue(p, category) {
  return averageKeys(p, category[1]);
}

function overall(p) {
  var total = categoryConfig.reduce(function(sum, category) {
    return sum + categoryValue(p, category);
  }, 0);

  return Math.round(total / categoryConfig.length);
}
function initials(name) {
  return name.replace("🇮🇹", "").trim().substring(0, 2).toUpperCase();
}

function avatar(p) {
  if (p.photo) return '<div class="avatar"><img src="' + p.photo + '" alt="' + p.name + '"></div>';
  return '<div class="avatar">' + initials(p.name) + '</div>';
}

function renderDashboard() {
  var confirmed = state.players.filter(function(p){ return p.status === "confirmed"; }).length;
  var maybe = state.players.filter(function(p){ return p.status === "maybe"; }).length;
  var out = state.players.filter(function(p){ return p.status === "out"; }).length;

  document.getElementById("totalPlayers").textContent = state.players.length;
  document.getElementById("confirmedCount").textContent = confirmed;
  document.getElementById("maybeCount").textContent = maybe;
  document.getElementById("outCount").textContent = out;
  document.getElementById("moneyTotal").textContent = (confirmed * state.match.cost) + "€";
  document.getElementById("moneyText").textContent = confirmed + " jugadores confirmados · " + state.match.cost + "€ por jugador";

  document.getElementById("dashboardPlayers").innerHTML = state.players.map(function(p, i) {
    return playerCardHTML(p, i, false);
  }).join("");

  renderDashboardPitch();
}

function playerCardHTML(p, i, editable) {
  var summary = categoryConfig.map(function(category) {
    var value = categoryValue(p, category);
    return '<div class="category-pill"><span>' + category[0] + '</span><strong>' + value + '</strong></div>';
  }).join("");

  var actions = "";
  if (editable && state.isEditor) {
    actions = '<div class="card-actions"><button onclick="editPlayer(' + i + ')">Editar</button><button class="delete" onclick="deletePlayer(' + i + ')">Borrar</button></div>';
  }

  return '<article class="player-card">' +
    '<div class="player-top">' + avatar(p) +
    '<div><h4>' + p.name + '</h4><div class="ovr">' + overall(p) + ' OVR</div><span class="position-tag">' + (positionLabel[p.posicionNatural] || "Polivalente") + '</span></div></div>' +
    '<div class="category-pill-grid">' + summary + '</div>' +
    '<div class="card-note">Resumen condensado. Editar para sliders completos.</div>' +
    actions +
    '</article>';
}
function renderPlayers() {
  document.getElementById("playersGrid").innerHTML = state.players.map(function(p, i) {
    return playerCardHTML(p, i, true);
  }).join("");
}

function renderCallList() {
  document.getElementById("callList").innerHTML = state.players.map(function(p, i) {
    var disabled = state.isEditor ? "" : "disabled";
    return '<div class="call-item">' +
      '<div class="call-player">' + avatar(p) + '<div><strong>' + p.name + '</strong><div class="muted">' + overall(p) + ' OVR · ' + (positionLabel[p.posicionNatural] || "Polivalente") + '</div></div></div>' +
      '<select class="status-select" ' + disabled + ' onchange="changeStatus(' + i + ', this.value)">' +
        '<option value="confirmed" ' + selected(p.status, "confirmed") + '>Confirmado</option>' +
        '<option value="maybe" ' + selected(p.status, "maybe") + '>En duda</option>' +
        '<option value="out" ' + selected(p.status, "out") + '>No viene</option>' +
      '</select>' +
    '</div>';
  }).join("");
}

function selected(a, b) { return a === b ? "selected" : ""; }

function changeStatus(index, value) {
  if (!state.isEditor) return;
  state.players[index].status = value;
  saveData();
  renderDashboard();
  renderCallList();
}

function renderMatchForm() {
  document.getElementById("matchDay").value = state.match.day;
  document.getElementById("matchArrival").value = state.match.arrival;
  document.getElementById("matchStart").value = state.match.start;
  document.getElementById("matchPlace").value = state.match.place;
  document.getElementById("matchMap").value = state.match.map;
  document.getElementById("matchCost").value = state.match.cost;
  document.getElementById("teamAColor").value = state.match.teamAColor;
  document.getElementById("teamBColor").value = state.match.teamBColor;
}

function saveMatchFromForm() {
  if (!state.isEditor) return;

  state.match.day = document.getElementById("matchDay").value;
  state.match.arrival = document.getElementById("matchArrival").value;
  state.match.start = document.getElementById("matchStart").value;
  state.match.place = document.getElementById("matchPlace").value;
  state.match.map = document.getElementById("matchMap").value;
  state.match.cost = Number(document.getElementById("matchCost").value) || 5;
  state.match.teamAColor = document.getElementById("teamAColor").value;
  state.match.teamBColor = document.getElementById("teamBColor").value;

  saveData();
  renderDashboard();
  renderTeams();
  alert("Partido guardado");
}


function emptyPlayerTemplate() {
  var p = {
    name: "",
    posicionNatural: "polivalente",
    photo: "",
    status: "confirmed"
  };

  statConfig.forEach(function(stat) {
    p[stat[0]] = 50;
  });

  return p;
}


function openPlayerModal(index) {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  document.getElementById("playerModal").classList.remove("hidden");
  document.getElementById("editingIndex").value = "";

  var empty = emptyPlayerTemplate();

  if (typeof index === "number") {
    document.getElementById("modalTitle").textContent = "Editar jugador";
    document.getElementById("editingIndex").value = index;
    fillModal(state.players[index]);
  } else {
    document.getElementById("modalTitle").textContent = "Nuevo jugador";
    fillModal(empty);
  }
}

function renderStatsEditor(p) {
  var container = document.getElementById("statsEditor");
  if (!container) return;

  container.innerHTML = statGroups.map(function(group, groupIndex) {
    var open = groupIndex === 0 ? " open" : "";

    return '<details class="stat-section"' + open + '>' +
      '<summary>' + group.title + '</summary>' +
      '<div class="slider-list">' +
      group.stats.map(function(stat) {
        var key = stat[0];
        var label = stat[1];
        var value = Number(p[key] || 50);

        return '<div class="slider-row">' +
          '<label for="' + key + '">' + label + '</label>' +
          '<input id="' + key + '" type="range" min="1" max="100" value="' + value + '" data-stat-key="' + key + '">' +
          '<span class="slider-value" id="' + key + 'Value">' + value + '</span>' +
        '</div>';
      }).join("") +
      '</div>' +
    '</details>';
  }).join("");

  container.querySelectorAll('input[type="range"]').forEach(function(input) {
    input.addEventListener("input", function() {
      var valueEl = document.getElementById(input.id + "Value");
      if (valueEl) valueEl.textContent = input.value;
      updateModalOverallPreview();
    });
  });
}

function modalPlayerDraft() {
  var draft = { name: document.getElementById("playerName").value.trim() || "Jugador" };

  statConfig.forEach(function(stat) {
    var input = document.getElementById(stat[0]);
    draft[stat[0]] = input ? Number(input.value) : 50;
  });

  return draft;
}

function updateModalOverallPreview() {
  var preview = document.getElementById("playerOverallPreview");
  if (!preview) return;
  preview.textContent = overall(modalPlayerDraft()) + " OVR";
}

function fillModal(p) {
  document.getElementById("playerName").value = p.name;
  renderStatsEditor(p);
  updateModalOverallPreview();

  var preview = document.getElementById("photoPreview");
  preview.dataset.photo = p.photo || "";
  preview.innerHTML = p.photo ? '<img src="' + p.photo + '">' : "📷";
  document.getElementById("playerPhoto").value = "";
}
function closePlayerModal() {
  document.getElementById("playerModal").classList.add("hidden");
}

function editPlayer(index) { openPlayerModal(index); }

function deletePlayer(index) {
  if (!state.isEditor) return;
  if (!confirm("¿Borrar a " + state.players[index].name + "?")) return;
  state.players.splice(index, 1);
  state.teams = { a: [], b: [], positions: {} };
  saveData();
  renderAll();
}

function handlePhotoInput(e) {
  var file = e.target.files[0];
  if (!file) return;

  var reader = new FileReader();
  reader.onload = function(event) {
    var img = new Image();
    img.onload = function() {
      var canvas = document.createElement("canvas");
      var max = 420;
      var scale = Math.min(max / img.width, max / img.height, 1);
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      var data = canvas.toDataURL("image/jpeg", 0.82);

      var preview = document.getElementById("photoPreview");
      preview.dataset.photo = data;
      preview.innerHTML = '<img src="' + data + '">';
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
}

function savePlayerFromModal() {
  if (!state.isEditor) return;

  var name = document.getElementById("playerName").value.trim();
  if (!name) {
    alert("Poné el nombre");
    return;
  }

  var p = {
    name: name,
    posicionNatural: document.getElementById("posicionNatural").value || "polivalente",
    photo: document.getElementById("photoPreview").dataset.photo || "",
    status: "confirmed"
  };

  statConfig.forEach(function(stat) {
    p[stat[0]] = readNumber(stat[0]);
  });

  var editingIndex = document.getElementById("editingIndex").value;
  if (editingIndex !== "") {
    p.status = state.players[Number(editingIndex)].status || "confirmed";
    state.players[Number(editingIndex)] = p;
  } else {
    state.players.push(p);
  }

  saveData();
  closePlayerModal();
  renderAll();
}

function readNumber(id) {
  var v = Number(document.getElementById(id).value);
  if (!v) v = 50;
  return Math.max(1, Math.min(100, v));
}

function generateTeams() {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  makeTeams(false);
}

function regenerateTeams() {
  if (!state.isEditor) return;
  if (!confirm("¿Regenerar equipos? Esto reemplaza los equipos actuales.")) return;
  makeTeams(true);
}

function makeTeams(randomize) {
  var confirmed = state.players
    .map(function(p, index){ return { player: p, index: index }; })
    .filter(function(item){ return item.player.status === "confirmed"; });

  if (confirmed.length < 2) {
    alert("Necesitás al menos 2 confirmados");
    return;
  }

  confirmed.sort(function(a, b){
    if (randomize) return Math.random() - 0.5;
    return overall(b.player) - overall(a.player);
  });

  var a = [];
  var b = [];

  confirmed.forEach(function(item) {
    var maxPerTeam = Math.ceil(confirmed.length / 2);

    var scoreA = a.reduce(function(sum, x){ return sum + overall(state.players[x]); }, 0);
    var scoreB = b.reduce(function(sum, x){ return sum + overall(state.players[x]); }, 0);

    var optionA = scoreA + overall(item.player) + rolePenaltyForTeam(a, item.index);
    var optionB = scoreB + overall(item.player) + rolePenaltyForTeam(b, item.index);

    if (a.length >= maxPerTeam) {
      b.push(item.index);
    } else if (b.length >= maxPerTeam) {
      a.push(item.index);
    } else if (optionA <= optionB) {
      a.push(item.index);
    } else {
      b.push(item.index);
    }
  });

  state.teams = { a: a, b: b, positions: defaultPositionsForTeams(a, b) };
  saveData();
  renderTeams();
  renderDashboard();
  showView("teams");
}

function resetTeams() {
  if (!state.isEditor) return;
  if (!confirm("¿Resetear equipos? Se borra la formación actual.")) return;

  state.teams = { a: [], b: [], positions: {} };
  saveData();
  renderTeams();
  renderDashboardPitch();
  document.getElementById("sharePanel").classList.add("hidden");
}

function defaultPositionsForTeams(a, b) {
  var positionsA = [[12,50], [25,24], [25,50], [25,76], [40,34], [40,66], [47,50], [34,50], [18,38], [18,62]];
  var positionsB = [[88,50], [75,24], [75,50], [75,76], [60,34], [60,66], [53,50], [66,50], [82,38], [82,62]];
  var positions = {};

  a.forEach(function(index, i) {
    var pos = positionsA[i] || [18 + (i % 4) * 8, 18 + Math.floor(i / 4) * 16];
    positions[index] = { x: pos[0], y: pos[1] };
  });

  b.forEach(function(index, i) {
    var pos = positionsB[i] || [82 - (i % 4) * 8, 18 + Math.floor(i / 4) * 16];
    positions[index] = { x: pos[0], y: pos[1] };
  });

  return positions;
}

function teamAverage(indexes) {
  if (!indexes.length) return 0;
  var total = indexes.reduce(function(sum, index){ return sum + overall(state.players[index]); }, 0);
  return Math.round(total / indexes.length);
}

function renderTeams() {
  var a = state.teams.a || [];
  var b = state.teams.b || [];
  var avgA = teamAverage(a);
  var avgB = teamAverage(b);
  var diff = Math.abs(avgA - avgB);
  var balance = a.length && b.length ? Math.max(0, 100 - diff * 8) : 0;

  document.getElementById("teamAAvg").textContent = avgA + " OVR";
  document.getElementById("teamBAvg").textContent = avgB + " OVR";
  document.getElementById("balanceScore").textContent = balance + "%";

  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";

  setTeamLabels(labelA, labelB);

  renderPitch("pitchPlayers", a, b, true);
  renderTeamList("teamAList", a);
  renderTeamList("teamBList", b);
  renderTeamCompare("teamACompare", a);
  renderTeamCompare("teamBCompare", b);
}

function setTeamLabels(labelA, labelB) {
  ["teamALabel", "dashboardTeamALabel"].forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.className = "shirt-tag " + state.match.teamAColor;
    el.textContent = labelA;
  });

  ["teamBLabel", "dashboardTeamBLabel"].forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.className = "shirt-tag " + state.match.teamBColor;
    el.textContent = labelB;
  });

  document.getElementById("teamAListTitle").textContent = labelA;
  document.getElementById("teamBListTitle").textContent = labelB;
  document.getElementById("teamACompareTitle").textContent = labelA;
  document.getElementById("teamBCompareTitle").textContent = labelB;
}

function teamStatAverage(indexes, keys) {
  if (!indexes.length) return 0;
  var total = 0;
  indexes.forEach(function(index) {
    keys.forEach(function(key) {
      total += state.players[index][key];
    });
  });
  return Math.round(total / (indexes.length * keys.length));
}

function renderTeamCompare(id, indexes) {
  document.getElementById(id).innerHTML = compareConfig.map(function(item) {
    var label = item[0];
    var keys = item[1];
    var value = teamStatAverage(indexes, keys);
    return '<div class="compare-row"><span>' + label + '</span><div class="bar"><i style="--w:' + value + '%;--c:#35e875"></i></div><b>' + value + '</b></div>';
  }).join("");
}

function renderDashboardPitch() {
  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";
  setTeamLabels(labelA, labelB);
  renderPitch("dashboardPitchPlayers", state.teams.a || [], state.teams.b || [], false);
}

function renderPitch(containerId, a, b, draggable) {
  var html = "";

  a.forEach(function(index) {
    html += pitchPlayerHTML(index, "team-a", draggable);
  });

  b.forEach(function(index) {
    html += pitchPlayerHTML(index, "team-b", draggable);
  });

  if (!html) {
    html = '<div class="empty-pitch">Aún no se han generado los equipos.</div>';
  }

  document.getElementById(containerId).innerHTML = html;

  if (draggable && state.isEditor) {
    bindPitchDrag();
  }
}

function pitchPlayerHTML(index, teamClass, draggable) {
  var p = state.players[index];
  var pos = (state.teams.positions && state.teams.positions[index]) || { x: 50, y: 50 };
  var dragClass = draggable && state.isEditor ? " draggable" : "";

  return '<div class="pitch-player ' + teamClass + dragClass + '" data-index="' + index + '" style="left:' + pos.x + '%; top:' + pos.y + '%">' +
    avatar(p) +
    '<div class="name-tag">' + p.name + '</div>' +
  '</div>';
}

function bindPitchDrag() {
  var pitch = document.getElementById("mainPitch");
  var active = null;

  document.querySelectorAll("#pitchPlayers .pitch-player").forEach(function(playerEl) {
    playerEl.addEventListener("pointerdown", function(e) {
      if (!state.isEditor) return;

      active = playerEl;
      active.classList.add("dragging");
      active.setPointerCapture(e.pointerId);
      e.preventDefault();
    });

    playerEl.addEventListener("pointermove", function(e) {
      if (!active || active !== playerEl) return;
      movePlayerOnPitch(e, pitch, active, false);
    });

    playerEl.addEventListener("pointerup", function(e) {
      if (!active || active !== playerEl) return;
      movePlayerOnPitch(e, pitch, active, true);
      active.classList.remove("dragging");
      active = null;
    });

    playerEl.addEventListener("pointercancel", function() {
      if (active) active.classList.remove("dragging");
      active = null;
    });
  });
}

function movePlayerOnPitch(e, pitch, el, shouldSave) {
  var rect = pitch.getBoundingClientRect();
  var x = ((e.clientX - rect.left) / rect.width) * 100;
  var y = ((e.clientY - rect.top) / rect.height) * 100;

  x = Math.max(4, Math.min(96, x));
  y = Math.max(6, Math.min(94, y));

  el.style.left = x + "%";
  el.style.top = y + "%";

  if (shouldSave) {
    var index = el.dataset.index;
    if (!state.teams.positions) state.teams.positions = {};
    state.teams.positions[index] = { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
    saveData();
    renderDashboardPitch();
  }
}

function renderTeamList(id, indexes) {
  document.getElementById(id).innerHTML = indexes.map(function(index) {
    var p = state.players[index];
    return '<div class="team-line"><span>' + p.name + ' <small class="muted">· ' + (positionLabel[p.posicionNatural] || "Polivalente") + '</small></span><strong>' + overall(p) + '</strong></div>';
  }).join("") || '<p class="muted">Todavía no hay equipo generado.</p>';
}

function buildShareText() {
  var a = state.teams.a || [];
  var b = state.teams.b || [];
  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";

  var text = "⚽ LOS BOSTEROS - EQUIPOS\n\n";
  text += "🏟️ " + state.match.place + "\n";
  text += "🕖 Llegada: " + state.match.arrival + " · Inicio: " + state.match.start + "\n";
  text += "💶 Costo: " + state.match.cost + "€\n\n";

  text += "🟡 " + labelA + " (" + teamAverage(a) + " OVR)\n";
  a.forEach(function(index) {
    text += "• " + state.players[index].name + "\n";
  });

  text += "\n🔵 " + labelB + " (" + teamAverage(b) + " OVR)\n";
  b.forEach(function(index) {
    text += "• " + state.players[index].name + "\n";
  });

  text += "\n📍 Mapa: " + state.match.map;
  return text;
}

function showShareText() {
  var text = buildShareText();
  document.getElementById("shareText").value = text;
  document.getElementById("sharePanel").classList.remove("hidden");
}

function copyShareText() {
  var text = document.getElementById("shareText").value;
  navigator.clipboard.writeText(text).then(function() {
    alert("Texto copiado");
  }).catch(function() {
    alert("No se pudo copiar automáticamente. Copialo manualmente del cuadro.");
  });
}


function exportDatabase() {
  var payload = {
    app: "Los Bosteros Futbol 7 Manager",
    version: 6,
    exportedAt: new Date().toISOString(),
    data: {
      players: state.players,
      teams: state.teams,
      match: state.match
    }
  };

  var json = JSON.stringify(payload, null, 2);
  var blob = new Blob([json], { type: "application/json" });
  var url = URL.createObjectURL(blob);

  var date = new Date().toISOString().slice(0, 10);
  var link = document.createElement("a");
  link.href = url;
  link.download = "los-bosteros-base-" + date + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

function triggerImportDatabase() {
  if (!state.isEditor) {
    var pass = prompt("Contraseña de editor para importar base");
    if (pass !== EDITOR_PASSWORD) {
      alert("Contraseña incorrecta");
      return;
    }

    state.isEditor = true;
    renderEditorMode();
  }

  document.getElementById("importDataInput").value = "";
  document.getElementById("importDataInput").click();
}

function importDatabaseFromFile(event) {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor para importar una base.");
    return;
  }

  var file = event.target.files[0];
  if (!file) return;

  var reader = new FileReader();

  reader.onload = function(e) {
    try {
      var parsed = JSON.parse(e.target.result);
      var data = parsed.data || parsed;

      if (!data.players || !Array.isArray(data.players)) {
        alert("El archivo no parece ser una base válida.");
        return;
      }

      var ok = confirm("¿Importar esta base? Esto reemplaza jugadores, partido y equipos guardados en este navegador.");
      if (!ok) return;

      state.players = data.players;
      state.match = data.match || state.match;
      state.teams = data.teams || { a: [], b: [], positions: {} };

      if (!state.teams.positions) {
        state.teams.positions = {};
      }

      normalizePlayers();
      saveData();
      renderAll();

      alert("Base importada correctamente.");
    } catch (error) {
      console.error(error);
      alert("No se pudo leer el archivo JSON.");
    }
  };

  reader.readAsText(file);
}


init();
