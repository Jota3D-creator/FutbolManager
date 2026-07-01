var EDITOR_PASSWORD = "bosteros2026";
var STORAGE_KEY = "bosteros_manager_data_v19_tecnica_pase_15";

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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
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
    "status": "base"
  }
];

var state = {
  isEditor: false,
  players: [],
  teams: { a: [], b: [], c: [], positions: {} },
  match: {
    day: "Miércoles",
    arrival: "22:00",
    start: "22:30",
    place: "Campo de fútbol Benimàmet CF",
    map: "https://maps.app.goo.gl/CbSoLSd9j3njXck67",
    cost: 5,
    teamAColor: "yellow",
    teamBColor: "blue",
    teamCColor: "white",
    mode: "normal",
    formation: "auto"
  }
};

var summaryConfig = [
  ["tecnica", "Técnica", "#35e875", [
    ["control", 0.30],
    ["regate", 0.25],
    ["tecnicaBase", 0.25],
    ["passing", 0.15],
    ["agilidad", 0.05]
  ]],
  ["pase", "Pase", "#4ca8ff", [
    ["passing", 0.40],
    ["visionJuego", 0.25],
    ["decisiones", 0.20],
    ["calma", 0.10],
    ["juegoEquipo", 0.05]
  ]],
  ["tiro", "Tiro", "#ffd43b", [
    ["finishing", 0.45],
    ["tiroLargo", 0.25],
    ["calma", 0.12],
    ["movimientoSinPelota", 0.12],
    ["tecnicaBase", 0.06]
  ]],
  ["defensa", "Defensa", "#ff5353", [
    ["entrada", 0.30],
    ["marca", 0.30],
    ["anticipacion", 0.20],
    ["disciplina", 0.10],
    ["fuerza", 0.10]
  ]],
  ["fisico", "Físico", "#9c6bff", [
    ["aceleracion", 0.20],
    ["velocidad", 0.20],
    ["resistencia", 0.25],
    ["agilidad", 0.15],
    ["fuerza", 0.10],
    ["intensidad", 0.10]
  ]],
  ["vision", "Visión", "#32d4d9", [
    ["visionJuego", 0.35],
    ["decisiones", 0.25],
    ["anticipacion", 0.15],
    ["calma", 0.10],
    ["movimientoSinPelota", 0.10],
    ["juegoEquipo", 0.05]
  ]]
];

function summaryCardStats() {
  return [
    ["tecnica", "Técnica", "#35e875"],
    ["pase", "Pase", "#4ca8ff"],
    ["tiro", "Tiro", "#ffd43b"],
    ["defensa", "Defensa", "#ff5353"],
    ["fisico", "Físico", "#9c6bff"],
    ["vision", "Visión", "#32d4d9"]
  ];
}

var summaryStatKeys = summaryConfig.map(function(item) {
  return item[0];
});

var statGroups = [
  {
    title: "Técnicos",
    stats: [
      ["control", "Control", "#35e875"],
      ["tecnicaBase", "Técnica individual", "#35e875"],
      ["passing", "Pase", "#4ca8ff"],
      ["finishing", "Definición", "#ffd43b"],
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
  },
  {
    title: "Especial",
    stats: [
      ["arquero", "Arquero", "#ffffff"]
    ]
  }
];

var statConfig = statGroups.reduce(function(list, group) {
  return list.concat(group.stats);
}, []);

var compareConfig = [
  ["Ataque", ["tecnica", "pase", "tiro"]],
  ["Defensa", ["defensa"]],
  ["Físico", ["fisico"]],
  ["Juego", ["pase", "vision"]]
];

var categoryConfig = [
  ["Técnica", ["tecnica"]],
  ["Pase", ["pase"]],
  ["Tiro", ["tiro"]],
  ["Defensa", ["defensa"]],
  ["Físico", ["fisico"]],
  ["Visión", ["vision"]]
];

var playersDirty = false;

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
    counts[playerLineRole(p)] += 1;
  });

  return counts;
}

function rolePenaltyForTeam(indexes, candidateIndex) {
  var next = indexes.slice();
  next.push(candidateIndex);

  var counts = positionScore(next);
  var candidateRole = playerLineRole(state.players[candidateIndex]);
  var penalty = 0;

  if (counts.defensa === 0) penalty += 45;
  if (counts.medio === 0) penalty += 30;
  if (counts.ataque === 0) penalty += 30;

  if (counts.defensa > 3) penalty += (counts.defensa - 3) * 18;
  if (counts.medio > 3) penalty += (counts.medio - 3) * 10;
  if (counts.ataque > 3) penalty += (counts.ataque - 3) * 18;
  if (counts.arquero > 1) penalty += (counts.arquero - 1) * 35;

  if (candidateRole === "defensa" && counts.defensa > 2) penalty += 14;
  if (candidateRole === "ataque" && counts.ataque > 2) penalty += 14;

  return penalty;
}

function cloneDefaultPlayers() {
  var players = JSON.parse(JSON.stringify(defaultPlayers));
  players.forEach(function(p) {
    p.status = "base";
  });
  return players;
}

function hasValidPlayersList(players) {
  return Array.isArray(players) && players.length > 0;
}


function init() {
  var saved = localStorage.getItem(STORAGE_KEY);

  if (saved) {
    try {
      var parsed = JSON.parse(saved);

      state.players = hasValidPlayersList(parsed.players) ? parsed.players : cloneDefaultPlayers();
      state.match = parsed.match || state.match;
      state.teams = parsed.teams || state.teams;

      if (!state.teams) state.teams = { a: [], b: [], c: [], positions: {} };
      if (!state.teams.a) state.teams.a = [];
      if (!state.teams.b) state.teams.b = [];
      if (!state.teams.c) state.teams.c = [];
      if (!state.teams.positions) state.teams.positions = {};
      if (!state.match.mode) state.match.mode = "normal";
      if (!state.match.teamCColor) state.match.teamCColor = "white";
      if (!state.match.formation) state.match.formation = "auto";
    } catch (e) {
      state.players = cloneDefaultPlayers();
      state.teams = { a: [], b: [], c: [], positions: {} };
    }
  } else {
    state.players = cloneDefaultPlayers();
    state.teams = { a: [], b: [], c: [], positions: {} };
    saveData();
  }

  if (!hasValidPlayersList(state.players)) {
    state.players = cloneDefaultPlayers();
  }

  normalizePlayers();
  bindEvents();
  setNextWednesdayDate();
  renderAll();
}


function clampStat(value) {
  value = Number(value);
  if (!value) value = 50;
  return Math.max(1, Math.min(100, Math.round(value)));
}

function weightedAverageFromPairs(p, pairs) {
  var total = 0;
  var weightTotal = 0;

  pairs.forEach(function(pair) {
    var key = pair[0];
    var weight = pair[1];
    total += Number(p[key] || 50) * weight;
    weightTotal += weight;
  });

  if (!weightTotal) return 50;
  return clampStat(total / weightTotal);
}

function calculateSummaryStats(p) {
  var summary = {};

  summaryConfig.forEach(function(item) {
    var key = item[0];
    var pairs = item[3];
    summary[key] = weightedAverageFromPairs(p, pairs);
  });

  return summary;
}

function applyDerivedSummary(p) {
  var summary = calculateSummaryStats(p);

  Object.keys(summary).forEach(function(key) {
    p[key] = summary[key];
  });

  return p;
}


function inferNaturalPosition(p) {
  var def = Number(p.defensa || 50) + Number(p.marca || 50) + Number(p.entrada || 50);
  var mid = Number(p.pase || 50) + Number(p.vision || p.visionJuego || 50) + Number(p.decisiones || 50);
  var att = Number(p.tiro || p.finishing || 50) + Number(p.regate || 50) + Number(p.tiroLargo || 50);

  if (def >= mid && def >= att) return "defensa";
  if (att >= def && att >= mid) return "delantero";
  return "mediocampo";
}

function normalizePlayers() {
  state.players = state.players.map(function(p) {
    var base = {
      tecnica: p.tecnica || 50,
      pase: p.pase || 50,
      tiro: p.tiro || p.definicion || 50,
      defensa: p.defensa || 50,
      fisico: p.fisico || 50,
      vision: p.vision || p.inteligencia || 50,
      compromiso: p.compromiso || 50
    };

    var defaults = {
      control: Math.round((base.tecnica + base.pase) / 2),
      tecnicaBase: base.tecnica,
      passing: base.pase,
      finishing: base.tiro,
      entrada: base.defensa,
      marca: base.defensa,
      regate: base.tecnica,
      tiroLargo: Math.round((base.tiro + base.tecnica) / 2),
      anticipacion: Math.round((base.defensa + base.vision) / 2),
      calma: base.vision,
      decisiones: Math.round((base.vision + base.pase) / 2),
      disciplina: Math.round((base.defensa + base.compromiso) / 2),
      intensidad: Math.round((base.fisico + base.compromiso) / 2),
      juegoEquipo: Math.round((base.pase + base.compromiso) / 2),
      movimientoSinPelota: Math.round((base.vision + base.fisico) / 2),
      visionJuego: Math.round((base.vision + base.pase) / 2),
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

    if (!p.status) p.status = "base";
    if (!p.photo) p.photo = "";
    if (!p.posicionNatural) p.posicionNatural = "polivalente";

    applyDerivedSummary(p);
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


function bindButtonIfExists(id, callback) {
  var el = document.getElementById(id);
  if (el) el.addEventListener("click", callback);
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
  bindButtonIfExists("savePlayersBtn", savePlayersManually);
  bindButtonIfExists("regenerateFromPlayersBtn", regenerateFromPlayers);
  bindButtonIfExists("goTeamsFromPlayersBtn", function(){ showView("teams"); });
  bindButtonIfExists("applyRecommendedFormationBtn", applyRecommendedFormation);
  document.getElementById("restoreDefaultPlayersBtn").addEventListener("click", restoreDefaultPlayers);
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

  document.getElementById("restoreBasePlayersFromMatchBtn").addEventListener("click", restoreDefaultPlayers);
  document.getElementById("selectAllForMatchBtn").addEventListener("click", selectAllForMatch);
  document.getElementById("clearMatchPlayersBtn").addEventListener("click", clearMatchPlayers);
  bindMatchDropZones();
}



function setPlayersDirty(isDirty) {
  playersDirty = !!isDirty;

  var status = document.getElementById("playersSaveStatus");
  if (!status) return;

  status.classList.toggle("dirty", playersDirty);
  status.classList.toggle("saved", !playersDirty);
  status.textContent = playersDirty ? "Hay cambios sin confirmar. Guardá o regenerá equipos." : "Cambios guardados localmente";
}

function savePlayersManually() {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  saveData();
  setPlayersDirty(false);
  renderDashboard();
  renderTeams();
  alert("Cambios de jugadores guardados.");
}

function regenerateFromPlayers() {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  var selected = state.players.filter(function(p) {
    return p.status === "confirmed";
  }).length;

  var needed = isTriangular() ? 3 : 2;

  if (selected < needed) {
    alert("Primero agregá al menos " + needed + " jugadores al partido.");
    showView("match");
    return;
  }

  saveData();
  setPlayersDirty(false);

  if ((state.teams.a || []).length || (state.teams.b || []).length || (state.teams.c || []).length) {
    var ok = confirm("¿Regenerar equipos usando los cambios guardados?");
    if (!ok) return;
  }

  makeTeams(true);
}


function restoreDefaultPlayers() {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  var ok = confirm("¿Restaurar los jugadores base? Esto reemplaza la lista actual y borra equipos generados.");
  if (!ok) return;

  state.players = cloneDefaultPlayers();
  state.teams = { a: [], b: [], c: [], positions: {} };
  saveData();
  setPlayersDirty(false);
  renderAll();
  alert("Jugadores base restaurados.");
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

  ["matchMode", "matchFormation", "matchDay", "matchArrival", "matchStart", "matchPlace", "matchMap", "matchCost", "teamAColor", "teamBColor", "teamCColor"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.disabled = !state.isEditor;
  });

  renderPlayers();
  renderCallList();
  renderTeams();
  setPlayersDirty(playersDirty);
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

  applyDerivedSummary(p);

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
  if (!hasValidPlayersList(state.players)) {
    state.players = cloneDefaultPlayers();
    normalizePlayers();
  }

  var confirmed = state.players.filter(function(p){ return p.status === "confirmed"; }).length;
  var maybe = state.players.length - confirmed;
  var out = (state.teams.a || []).length + (state.teams.b || []).length + (state.teams.c || []).length;

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
  applyDerivedSummary(p);

  var summaryStats = summaryCardStats();

  var stats = summaryStats.map(function(s) {
    var key = s[0], label = s[1], color = s[2];
    return '<div class="stat-row"><span>' + label + '</span><div class="bar"><i style="--w:' + p[key] + '%;--c:' + color + '"></i></div><b>' + p[key] + '</b></div>';
  }).join("");

  var positionText = displayPositionLabel(p);

  var positionEditor = "";
  if (editable && state.isEditor) {
    positionEditor =
      '<div class="position-editor">' +
        '<label>Posición natural' +
          '<select onchange="changeNaturalPosition(' + i + ', this.value)">' +
            '<option value="polivalente" ' + selected(p.posicionNatural, "polivalente") + '>Polivalente</option>' +
            '<option value="arquero" ' + selected(p.posicionNatural, "arquero") + '>Arquero</option>' +
            '<option value="defensa" ' + selected(p.posicionNatural, "defensa") + '>Defensa</option>' +
            '<option value="lateral" ' + selected(p.posicionNatural, "lateral") + '>Lateral</option>' +
            '<option value="mediocampo" ' + selected(p.posicionNatural, "mediocampo") + '>Mediocampo</option>' +
            '<option value="extremo" ' + selected(p.posicionNatural, "extremo") + '>Extremo</option>' +
            '<option value="delantero" ' + selected(p.posicionNatural, "delantero") + '>Delantero</option>' +
          '</select>' +
        '</label>' +
      '</div>';
  }

  var actions = "";
  if (editable && state.isEditor) {
    actions = '<div class="card-actions"><button onclick="editPlayer(' + i + ')">Editar stats</button><button class="delete" onclick="deletePlayer(' + i + ')">Borrar</button></div>';
  }

  return '<article class="player-card">' +
    '<div class="player-top">' + avatar(p) +
    '<div><h4>' + p.name + '</h4><div class="ovr">' + overall(p) + ' OVR</div><span class="position-tag">' + positionText + '</span></div></div>' +
    stats +
    '<div class="card-note">Editar stats para ver todos los atributos.</div>' +
    positionEditor +
    actions +
    '</article>';
}


function modalPlayerPreviewCardHTML(p) {
  applyDerivedSummary(p);

  var summaryStats = summaryCardStats();

  var stats = summaryStats.map(function(s) {
    var key = s[0], label = s[1], color = s[2];
    return '<div class="stat-row"><span>' + label + '</span><div class="bar"><i style="--w:' + p[key] + '%;--c:' + color + '"></i></div><b>' + p[key] + '</b></div>';
  }).join("");

  var positionText = displayPositionLabel(p);

  return '<article class="player-card live-card">' +
    '<div class="player-top">' + avatar(p) +
    '<div><h4>' + p.name + '</h4><div class="ovr">' + overall(p) + ' OVR</div><span class="position-tag">' + positionText + '</span></div></div>' +
    stats +
    '</article>';
}

function updateModalCardPreview() {
  var container = document.getElementById("modalPlayerCardPreview");
  if (!container) return;

  container.innerHTML = modalPlayerPreviewCardHTML(modalPlayerDraft());
}


function renderPlayers() {
  var grid = document.getElementById("playersGrid");
  if (!grid) return;

  if (!hasValidPlayersList(state.players)) {
    state.players = cloneDefaultPlayers();
    normalizePlayers();
  }

  grid.innerHTML = state.players.map(function(p, i) {
    return playerCardHTML(p, i, true);
  }).join("");
}

function renderCallList() {
  if (!hasValidPlayersList(state.players)) {
    state.players = cloneDefaultPlayers();
    state.players.forEach(function(p) { p.status = "base"; });
    state.teams = { a: [], b: [], c: [], positions: {} };
    saveData();
  }

  var basePlayers = [];
  var matchPlayers = [];

  state.players.forEach(function(p, i) {
    if (p.status === "confirmed") {
      matchPlayers.push({ player: p, index: i });
    } else {
      basePlayers.push({ player: p, index: i });
    }
  });

  document.getElementById("basePlayersCount").textContent = basePlayers.length;
  document.getElementById("matchPlayersCount").textContent = matchPlayers.length;

  document.getElementById("basePlayersList").innerHTML = basePlayers.map(function(item) {
    return matchPlayerCardHTML(item.player, item.index, "add");
  }).join("") || '<div class="empty-list-note">No quedan jugadores en la base.</div>';

  document.getElementById("matchPlayersList").innerHTML = matchPlayers.map(function(item) {
    return matchPlayerCardHTML(item.player, item.index, "remove");
  }).join("") || '<div class="empty-list-note">Arrastrá jugadores acá para armar el partido.</div>';
}

function matchPlayerCardHTML(p, index, mode) {
  var actionLabel = mode === "add" ? "Agregar al partido" : "Sacar del partido";
  var actionClass = mode === "add" ? "add" : "remove";
  var targetStatus = mode === "add" ? "confirmed" : "base";
  var disabled = state.isEditor ? "" : "disabled";

  return '<div class="match-player-card" draggable="' + (state.isEditor ? "true" : "false") + '" data-player-index="' + index + '" ondragstart="handleMatchDragStart(event)" ondragend="handleMatchDragEnd(event)">' +
    avatar(p) +
    '<div class="match-player-info">' +
      '<strong>' + p.name + '</strong>' +
      '<small>' + overall(p) + ' OVR · ' + displayPositionLabel(p) + '</small>' +
    '</div>' +
    '<button class="match-player-action ' + actionClass + '" ' + disabled + ' data-target-status="' + targetStatus + '" onclick="setPlayerMatchStatus(' + index + ', this.dataset.targetStatus)">' + actionLabel + '</button>' +
  '</div>';
}

function handleMatchDragStart(event) {
  if (!state.isEditor) {
    event.preventDefault();
    return;
  }

  var index = event.currentTarget.dataset.playerIndex;
  event.dataTransfer.setData("text/plain", index);
  event.currentTarget.classList.add("dragging");
}

function handleMatchDragEnd(event) {
  event.currentTarget.classList.remove("dragging");
}

function bindMatchDropZones() {
  ["basePlayersZone", "matchPlayersZone"].forEach(function(id) {
    var zone = document.getElementById(id);
    if (!zone) return;

    zone.addEventListener("dragover", function(event) {
      if (!state.isEditor) return;
      event.preventDefault();
      zone.classList.add("drag-over");
    });

    zone.addEventListener("dragleave", function() {
      zone.classList.remove("drag-over");
    });

    zone.addEventListener("drop", function(event) {
      if (!state.isEditor) return;
      event.preventDefault();
      zone.classList.remove("drag-over");

      var index = Number(event.dataTransfer.getData("text/plain"));
      var targetStatus = zone.dataset.matchZone;

      if (!Number.isNaN(index)) {
        setPlayerMatchStatus(index, targetStatus);
      }
    });
  });
}

function setPlayerMatchStatus(index, status) {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  if (!state.players[index]) return;

  state.players[index].status = status === "confirmed" ? "confirmed" : "base";
  clearGeneratedTeamsSilent();
  saveData();
  renderDashboard();
  renderCallList();
  renderTeams();
}

function selectAllForMatch() {
  if (!state.isEditor) return;

  state.players.forEach(function(p) {
    p.status = "confirmed";
  });

  clearGeneratedTeamsSilent();
  saveData();
  renderDashboard();
  renderCallList();
  renderTeams();
}

function clearMatchPlayers() {
  if (!state.isEditor) return;

  if (!confirm("¿Vaciar jugadores para partido? También se borran los equipos generados.")) return;

  state.players.forEach(function(p) {
    p.status = "base";
  });

  clearGeneratedTeamsSilent();
  saveData();
  renderDashboard();
  renderCallList();
  renderTeams();
}

function clearGeneratedTeamsSilent() {
  state.teams = { a: [], b: [], c: [], positions: {} };
  document.getElementById("sharePanel").classList.add("hidden");
}

function selected(a, b) { return a === b ? "selected" : ""; }

function changeStatus(index, value) {
  setPlayerMatchStatus(index, value);
}


function isTriangular() {
  return (state.match.mode || "normal") === "triangular";
}

function renderTriangularModeUI() {
  var triangular = isTriangular();

  document.querySelectorAll(".triangular-only").forEach(function(el) {
    el.classList.toggle("hidden", !triangular);
  });

  var summary = document.getElementById("teamsSummary");
  var comparison = document.getElementById("teamComparisonGrid");
  var list = document.getElementById("teamsListGrid");
  var mainPitch = document.getElementById("mainPitch");

  if (summary) summary.classList.toggle("triangular-grid", triangular);
  if (comparison) comparison.classList.toggle("triangular-grid", triangular);
  if (list) list.classList.toggle("triangular-grid", triangular);
  if (mainPitch) mainPitch.classList.toggle("triangular-mode", triangular);

  var dashPitch = document.querySelector(".pitch-dashboard");
  if (dashPitch) dashPitch.classList.toggle("triangular-mode", triangular);
}


function renderMatchForm() {
  if (document.getElementById("matchMode")) document.getElementById("matchMode").value = state.match.mode || "normal";
  if (document.getElementById("matchFormation")) document.getElementById("matchFormation").value = state.match.formation || "auto";
  document.getElementById("matchDay").value = state.match.day;
  document.getElementById("matchArrival").value = state.match.arrival;
  document.getElementById("matchStart").value = state.match.start;
  document.getElementById("matchPlace").value = state.match.place;
  document.getElementById("matchMap").value = state.match.map;
  document.getElementById("matchCost").value = state.match.cost;
  document.getElementById("teamAColor").value = state.match.teamAColor;
  document.getElementById("teamBColor").value = state.match.teamBColor;
  if (document.getElementById("teamCColor")) document.getElementById("teamCColor").value = state.match.teamCColor || "white";
  renderTriangularModeUI();
}

function saveMatchFromForm() {
  if (!state.isEditor) return;

  state.match.mode = document.getElementById("matchMode") ? document.getElementById("matchMode").value || "normal" : "normal";
  state.match.formation = document.getElementById("matchFormation") ? document.getElementById("matchFormation").value || "auto" : "auto";
  state.match.day = document.getElementById("matchDay").value;
  state.match.arrival = document.getElementById("matchArrival").value;
  state.match.start = document.getElementById("matchStart").value;
  state.match.place = document.getElementById("matchPlace").value;
  state.match.map = document.getElementById("matchMap").value;
  state.match.cost = Number(document.getElementById("matchCost").value) || 5;
  state.match.teamAColor = document.getElementById("teamAColor").value;
  state.match.teamBColor = document.getElementById("teamBColor").value;
  state.match.teamCColor = document.getElementById("teamCColor") ? document.getElementById("teamCColor").value || "white" : "white";

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
    status: "base"
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

function renderCalculatedSummaryHTML(p) {
  var summary = calculateSummaryStats(p);

  return '<details class="stat-section calculated-summary" open>' +
    '<summary>Resumen calculado de tarjeta</summary>' +
    '<div class="summary-help">Estos 6 valores alimentan la tarjeta. No se editan directo: cambian cuando movés los sliders finos.</div>' +
    '<div class="slider-list">' +
    summaryConfig.map(function(item) {
      var key = item[0];
      var label = item[1];
      var color = item[2];
      var value = summary[key];

      return '<div class="slider-row summary-row">' +
        '<label>' + label + '</label>' +
        '<div class="summary-meter"><i id="' + key + 'SummaryBar" style="--w:' + value + '%;--c:' + color + '"></i></div>' +
        '<span class="slider-value" id="' + key + 'SummaryValue">' + value + '</span>' +
      '</div>';
    }).join("") +
    '</div>' +
  '</details>';
}

function renderStatsEditor(p) {
  var container = document.getElementById("statsEditor");
  if (!container) return;

  container.innerHTML = renderCalculatedSummaryHTML(p) + statGroups.map(function(group, groupIndex) {
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
      setPlayersDirty(true);
      updateModalOverallPreview();
      updateCalculatedSummaryPreview();
      updateModalCardPreview();
    });
  });

  updateCalculatedSummaryPreview();
}

function modalPlayerDraft() {
  var draft = {
    name: document.getElementById("playerName").value.trim() || "Jugador",
    posicionNatural: document.getElementById("posicionNatural") ? document.getElementById("posicionNatural").value || "polivalente" : "polivalente",
    photo: document.getElementById("photoPreview") ? document.getElementById("photoPreview").dataset.photo || "" : "",
    status: "base"
  };

  statConfig.forEach(function(stat) {
    var input = document.getElementById(stat[0]);
    draft[stat[0]] = input ? Number(input.value) : 50;
  });

  applyDerivedSummary(draft);
  return draft;
}

function updateCalculatedSummaryPreview() {
  var draft = modalPlayerDraft();
  var summary = calculateSummaryStats(draft);

  summaryConfig.forEach(function(item) {
    var key = item[0];
    var bar = document.getElementById(key + "SummaryBar");
    var value = document.getElementById(key + "SummaryValue");

    if (bar) bar.style.setProperty("--w", summary[key] + "%");
    if (value) value.textContent = summary[key];
  });
}

function updateModalOverallPreview() {
  var preview = document.getElementById("playerOverallPreview");
  if (!preview) return;
  preview.textContent = overall(modalPlayerDraft()) + " OVR";
}


function fillModal(p) {
  document.getElementById("playerName").value = p.name;
  document.getElementById("playerName").addEventListener("input", function(){
    setPlayersDirty(true);
    updateModalOverallPreview();
    updateCalculatedSummaryPreview();
    updateModalCardPreview();
  });
  document.getElementById("posicionNatural").value = p.posicionNatural || "polivalente";
  document.getElementById("posicionNatural").addEventListener("change", function(){
    setPlayersDirty(true);
    updateModalOverallPreview();
    updateCalculatedSummaryPreview();
    updateModalCardPreview();
  });
  renderStatsEditor(p);
  updateModalOverallPreview();

  var preview = document.getElementById("photoPreview");
  preview.dataset.photo = p.photo || "";
  preview.innerHTML = p.photo ? '<img src="' + p.photo + '">' : "📷";
  document.getElementById("playerPhoto").value = "";
  updateModalOverallPreview();
  updateCalculatedSummaryPreview();
  updateModalCardPreview();
}
function closePlayerModal() {
  document.getElementById("playerModal").classList.add("hidden");
}

function editPlayer(index) { openPlayerModal(index); }

function deletePlayer(index) {
  if (!state.isEditor) return;
  if (!confirm("¿Borrar a " + state.players[index].name + "?")) return;
  state.players.splice(index, 1);
  state.teams = { a: [], b: [], c: [], positions: {} };
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
      setPlayersDirty(true);
      updateModalCardPreview();
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
    status: "base"
  };

  statConfig.forEach(function(stat) {
    p[stat[0]] = readNumber(stat[0]);
  });

  applyDerivedSummary(p);

  var editingIndex = document.getElementById("editingIndex").value;
  if (editingIndex !== "") {
    p.status = state.players[Number(editingIndex)].status || "confirmed";
    state.players[Number(editingIndex)] = p;
  } else {
    state.players.push(p);
  }

  saveData();
  setPlayersDirty(false);
  closePlayerModal();
  renderAll();
}


function readNumber(id) {
  var el = document.getElementById(id);
  var v = el ? Number(el.value) : 50;
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

  var teamCount = isTriangular() ? 3 : 2;

  if (confirmed.length < teamCount) {
    alert("Necesitás al menos " + teamCount + " jugadores para generar equipos.");
    return;
  }

  var buckets = {
    arquero: [],
    defensa: [],
    medio: [],
    ataque: []
  };

  confirmed.forEach(function(item) {
    buckets[playerLineRole(item.player)].push(item);
  });

  Object.keys(buckets).forEach(function(role) {
    buckets[role].sort(function(a, b) {
      if (randomize) return Math.random() - 0.5;
      return overall(b.player) - overall(a.player);
    });
  });

  var teams = [[], [], []];
  var maxPerTeam = Math.ceil(confirmed.length / teamCount);

  function rawScore(team) {
    return team.reduce(function(sum, index) {
      return sum + overall(state.players[index]);
    }, 0);
  }

  function chooseBestTeamFor(item) {
    var bestTeam = 0;
    var bestScore = Infinity;
    var role = playerLineRole(item.player);

    for (var t = 0; t < teamCount; t++) {
      if (teams[t].length >= maxPerTeam) continue;

      var counts = positionScore(teams[t]);
      var score = rawScore(teams[t]) + rolePenaltyForTeam(teams[t], item.index);

      score += counts[role] * 24;
      score += teams[t].length * 8;

      if (randomize) score += Math.random() * 8;

      if (score < bestScore) {
        bestScore = score;
        bestTeam = t;
      }
    }

    return bestTeam;
  }

  ["arquero", "defensa", "medio", "ataque"].forEach(function(role) {
    buckets[role].forEach(function(item) {
      var t = chooseBestTeamFor(item);
      teams[t].push(item.index);
    });
  });

  for (var pass = 0; pass < 18; pass++) {
    var avgs = teams.slice(0, teamCount).map(function(team) {
      return team.length ? rawScore(team) / team.length : 0;
    });

    var maxTeam = avgs.indexOf(Math.max.apply(null, avgs));
    var minTeam = avgs.indexOf(Math.min.apply(null, avgs));

    if (Math.abs(avgs[maxTeam] - avgs[minTeam]) < 3) break;

    var moved = false;

    for (var i = 0; i < teams[maxTeam].length; i++) {
      var candidate = teams[maxTeam][i];
      var role = playerLineRole(state.players[candidate]);
      var sourceCounts = positionScore(teams[maxTeam]);
      var targetCounts = positionScore(teams[minTeam]);

      if (sourceCounts[role] <= 1 && role !== "arquero") continue;
      if (targetCounts[role] >= 3 && role !== "medio") continue;

      teams[maxTeam].splice(i, 1);
      teams[minTeam].push(candidate);
      moved = true;
      break;
    }

    if (!moved) break;
  }

  var a = teams[0];
  var b = teams[1];
  var c = isTriangular() ? teams[2] : [];

  state.teams = { a: a, b: b, c: c, positions: defaultPositionsForTeams(a, b, c) };
  saveData();
  renderTeams();
  renderDashboard();
  showView("teams");
}
function resetTeams() {
  if (!state.isEditor) return;
  if (!confirm("¿Resetear equipos? Se borra la formación actual.")) return;

  state.teams = { a: [], b: [], c: [], positions: {} };
  saveData();
  renderTeams();
  renderDashboard();
  renderDashboardPitch();
  document.getElementById("sharePanel").classList.add("hidden");
}

function defaultPositionsForTeams(a, b, c) {
  var positions = {};
  var formation = activeFormationId();

  var normal = {
    "1-2-3-1": {
      left: {
        arquero: [[11,50]],
        defensa: [[25,35], [25,65], [22,50], [28,50]],
        medio: [[40,25], [40,50], [40,75], [35,50]],
        ataque: [[49,50], [47,35], [47,65], [44,50]]
      },
      right: {
        arquero: [[89,50]],
        defensa: [[75,35], [75,65], [78,50], [72,50]],
        medio: [[60,25], [60,50], [60,75], [65,50]],
        ataque: [[51,50], [53,35], [53,65], [56,50]]
      }
    },
    "3-2-1": {
      left: {
        arquero: [[11,50]],
        defensa: [[23,25], [23,50], [23,75], [18,50]],
        medio: [[39,38], [39,62], [35,50], [43,50]],
        ataque: [[49,50], [47,35], [47,65], [44,50]]
      },
      right: {
        arquero: [[89,50]],
        defensa: [[77,25], [77,50], [77,75], [82,50]],
        medio: [[61,38], [61,62], [65,50], [57,50]],
        ataque: [[51,50], [53,35], [53,65], [56,50]]
      }
    },
    "1-2-2-2": {
      left: {
        arquero: [[11,50]],
        defensa: [[25,36], [25,64], [22,50], [28,50]],
        medio: [[39,38], [39,62], [35,50], [43,50]],
        ataque: [[49,38], [49,62], [46,50], [47,25]]
      },
      right: {
        arquero: [[89,50]],
        defensa: [[75,36], [75,64], [78,50], [72,50]],
        medio: [[61,38], [61,62], [65,50], [57,50]],
        ataque: [[51,38], [51,62], [54,50], [53,25]]
      }
    }
  };

  var tri = {
    left: {
      arquero: [[7,50]],
      defensa: [[16,28], [16,50], [16,72], [12,50]],
      medio: [[26,35], [26,65], [24,50], [29,50]],
      ataque: [[32,50], [31,30], [31,70], [29,50]]
    },
    center: {
      arquero: [[50,88]],
      defensa: [[40,70], [50,70], [60,70], [50,78]],
      medio: [[42,50], [58,50], [50,54], [50,42]],
      ataque: [[50,23], [42,30], [58,30], [50,34]]
    },
    right: {
      arquero: [[93,50]],
      defensa: [[84,28], [84,50], [84,72], [88,50]],
      medio: [[74,35], [74,65], [76,50], [71,50]],
      ataque: [[68,50], [69,30], [69,70], [71,50]]
    }
  };

  function assignTeam(indexes, formationSide) {
    var sorted = sortIndexesForFormation(indexes);
    var usedByRole = { arquero: 0, defensa: 0, medio: 0, ataque: 0 };

    sorted.forEach(function(index) {
      var role = playerLineRole(state.players[index]);
      var slotIndex = usedByRole[role] || 0;
      var slotList = formationSide[role] || formationSide.medio;
      var pos = slotList[slotIndex];

      usedByRole[role] = slotIndex + 1;

      if (!pos) {
        pos = slotList[slotList.length - 1] || formationSide.medio[0];
      }

      positions[index] = { x: pos[0], y: pos[1] };
    });
  }

  if (isTriangular()) {
    assignTeam(a || [], tri.left);
    assignTeam(b || [], tri.center);
    assignTeam(c || [], tri.right);
  } else {
    var normalFormation = normal[formation] || normal["1-2-3-1"];
    assignTeam(a || [], normalFormation.left);
    assignTeam(b || [], normalFormation.right);
  }

  return positions;
}
function teamAverage(indexes) {
  if (!indexes.length) return 0;
  var total = indexes.reduce(function(sum, index){ return sum + overall(state.players[index]); }, 0);
  return Math.round(total / indexes.length);
}

function renderTeams() {
  renderTriangularModeUI();
  renderTacticalRecommendation();

  var a = state.teams.a || [];
  var b = state.teams.b || [];
  var c = state.teams.c || [];
  var avgA = teamAverage(a);
  var avgB = teamAverage(b);
  var avgC = teamAverage(c);

  var avgs = isTriangular() ? [avgA, avgB, avgC].filter(function(v){ return v > 0; }) : [avgA, avgB].filter(function(v){ return v > 0; });
  var diff = avgs.length ? Math.max.apply(null, avgs) - Math.min.apply(null, avgs) : 0;
  var balance = avgs.length >= 2 ? Math.max(0, 100 - diff * 8) : 0;

  document.getElementById("teamAAvg").textContent = avgA + " OVR";
  document.getElementById("teamBAvg").textContent = avgB + " OVR";
  document.getElementById("teamCAvg").textContent = avgC + " OVR";
  document.getElementById("balanceScore").textContent = balance + "%";

  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";
  var labelC = colorLabel[state.match.teamCColor] || "Equipo C";

  setTeamLabels(labelA, labelB, labelC);

  renderPitch("pitchPlayers", a, b, c, true);
  renderTeamList("teamAList", a);
  renderTeamList("teamBList", b);
  renderTeamList("teamCList", c);
  renderTeamCompare("teamACompare", a);
  renderTeamCompare("teamBCompare", b);
  renderTeamCompare("teamCCompare", c);
}

function setTeamLabels(labelA, labelB, labelC) {
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

  ["teamCLabel", "dashboardTeamCLabel"].forEach(function(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.className = "shirt-tag " + (state.match.teamCColor || "white") + " triangular-only";
    el.classList.toggle("hidden", !isTriangular());
    el.textContent = labelC || "Equipo C";
  });

    if (document.getElementById("teamAListTitle")) document.getElementById("teamAListTitle").textContent = labelA;
    if (document.getElementById("teamBListTitle")) document.getElementById("teamBListTitle").textContent = labelB;
    if (document.getElementById("teamCListTitle")) document.getElementById("teamCListTitle").textContent = labelC || "Equipo C";
    if (document.getElementById("teamACompareTitle")) document.getElementById("teamACompareTitle").textContent = labelA;
    if (document.getElementById("teamBCompareTitle")) document.getElementById("teamBCompareTitle").textContent = labelB;
    if (document.getElementById("teamCCompareTitle")) document.getElementById("teamCCompareTitle").textContent = labelC || "Equipo C";
}

function teamStatAverage(indexes, keys) {
  if (!indexes.length) return 0;
  var total = 0;
  indexes.forEach(function(index) {
    applyDerivedSummary(state.players[index]);
    keys.forEach(function(key) {
      total += state.players[index][key];
    });
  });
  return Math.round(total / (indexes.length * keys.length));
}

function renderTeamCompare(id, indexes) {
  var container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = compareConfig.map(function(item) {
    var label = item[0];
    var keys = item[1];
    var value = teamStatAverage(indexes, keys);
    return '<div class="compare-row"><span>' + label + '</span><div class="bar"><i style="--w:' + value + '%;--c:#35e875"></i></div><b>' + value + '</b></div>';
  }).join("");
}

function bindStatsEditorDirtyState() {
  var container = document.getElementById("statsEditor");
  if (!container) return;

  container.querySelectorAll("input, select").forEach(function(input) {
    input.addEventListener("input", function() {
      setPlayersDirty(true);
    });
    input.addEventListener("change", function() {
      setPlayersDirty(true);
    });
  });
}


function renderDashboardPitch() {
  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";
  var labelC = colorLabel[state.match.teamCColor] || "Equipo C";
  setTeamLabels(labelA, labelB, labelC);
  renderPitch("dashboardPitchPlayers", state.teams.a || [], state.teams.b || [], state.teams.c || [], false);
}

function renderPitch(containerId, a, b, c, draggable) {
  renderTriangularModeUI();

  var html = "";

  (a || []).forEach(function(index) {
    html += pitchPlayerHTML(index, "team-a", draggable);
  });

  (b || []).forEach(function(index) {
    html += pitchPlayerHTML(index, "team-b", draggable);
  });

  if (isTriangular()) {
    (c || []).forEach(function(index) {
      html += pitchPlayerHTML(index, "team-c", draggable);
    });
  }

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

  var roleClass = "role-" + playerLineRole(p);

  return '<div class="pitch-player ' + teamClass + " " + roleClass + dragClass + '" data-index="' + index + '" style="left:' + pos.x + '%; top:' + pos.y + '%">' +
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
  var container = document.getElementById(id);
  if (!container) return;

  container.innerHTML = indexes.map(function(index) {
    var p = state.players[index];
    return '<div class="team-line"><span>' + p.name + ' <small class="muted">· ' + displayPositionLabel(p) + '</small></span><strong>' + overall(p) + '</strong></div>';
  }).join("") || '<p class="muted">Todavía no hay equipo generado.</p>';
}

function buildShareText() {
  var a = state.teams.a || [];
  var b = state.teams.b || [];
  var c = state.teams.c || [];
  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";
  var labelC = colorLabel[state.match.teamCColor] || "Equipo C";

  var text = "⚽ LOS BOSTEROS - EQUIPOS\\n\\n";
  text += "🏟️ " + state.match.place + "\\n";
  text += "🕖 Llegada: " + state.match.arrival + " · Inicio: " + state.match.start + "\\n";
  text += "💶 Costo: " + state.match.cost + "€\\n";
  text += "🎮 Formato: " + (isTriangular() ? "Triangular, 3 equipos" : "Normal, 2 equipos") + "\\n\\n";

  text += "🟡 " + labelA + " (" + teamAverage(a) + " OVR)\\n";
  a.forEach(function(index) {
    text += "• " + state.players[index].name + "\\n";
  });

  text += "\\n🔵 " + labelB + " (" + teamAverage(b) + " OVR)\\n";
  b.forEach(function(index) {
    text += "• " + state.players[index].name + "\\n";
  });

  if (isTriangular()) {
    text += "\\n⚪ " + labelC + " (" + teamAverage(c) + " OVR)\\n";
    c.forEach(function(index) {
      text += "• " + state.players[index].name + "\\n";
    });

    text += "\\n🔁 Orden sugerido triangular:\\n";
    text += "1. " + labelA + " vs " + labelB + "\\n";
    text += "2. " + labelB + " vs " + labelC + "\\n";
    text += "3. " + labelA + " vs " + labelC + "\\n";
  }

  text += "\\n📍 Mapa: " + state.match.map;
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
      state.teams = data.teams || { a: [], b: [], c: [], positions: {} };

      if (!state.teams.positions) {
        state.teams.positions = {};
      }
      if (!state.teams.c) {
        state.teams.c = [];
      }
      if (!state.match.mode) {
        state.match.mode = "normal";
      }
      if (!state.match.teamCColor) {
        state.match.teamCColor = "white";
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
