var EDITOR_PASSWORD = "bosteros2026";

var defaultPlayers = [
  { name: "Flego", tecnica: 70, pase: 60, definicion: 80, defensa: 80, fisico: 80, inteligencia: 75, compromiso: 85, arquero: 50, photo: "", status: "confirmed" },
  { name: "Gabi", tecnica: 60, pase: 60, definicion: 70, defensa: 80, fisico: 65, inteligencia: 65, compromiso: 85, arquero: 50, photo: "", status: "confirmed" },
  { name: "Rodri", tecnica: 80, pase: 70, definicion: 85, defensa: 50, fisico: 60, inteligencia: 65, compromiso: 85, arquero: 50, photo: "", status: "confirmed" },
  { name: "Rober", tecnica: 75, pase: 70, definicion: 80, defensa: 80, fisico: 65, inteligencia: 70, compromiso: 85, arquero: 50, photo: "", status: "confirmed" },
  { name: "Cabe", tecnica: 65, pase: 65, definicion: 75, defensa: 60, fisico: 55, inteligencia: 60, compromiso: 75, arquero: 50, photo: "", status: "confirmed" },
  { name: "Carlitos", tecnica: 70, pase: 70, definicion: 70, defensa: 80, fisico: 85, inteligencia: 65, compromiso: 85, arquero: 50, photo: "", status: "confirmed" },
  { name: "Niko", tecnica: 80, pase: 65, definicion: 70, defensa: 60, fisico: 70, inteligencia: 65, compromiso: 70, arquero: 50, photo: "", status: "confirmed" },
  { name: "Joni", tecnica: 60, pase: 70, definicion: 80, defensa: 40, fisico: 55, inteligencia: 75, compromiso: 60, arquero: 50, photo: "", status: "confirmed" },
  { name: "Nico", tecnica: 80, pase: 65, definicion: 70, defensa: 60, fisico: 75, inteligencia: 70, compromiso: 70, arquero: 50, photo: "", status: "confirmed" },
  { name: "Leo 🇮🇹", tecnica: 75, pase: 80, definicion: 85, defensa: 40, fisico: 70, inteligencia: 80, compromiso: 65, arquero: 50, photo: "", status: "confirmed" },
  { name: "Tiziano", tecnica: 70, pase: 70, definicion: 70, defensa: 75, fisico: 80, inteligencia: 70, compromiso: 70, arquero: 50, photo: "", status: "confirmed" },
  { name: "Facu", tecnica: 80, pase: 60, definicion: 70, defensa: 60, fisico: 60, inteligencia: 60, compromiso: 60, arquero: 50, photo: "", status: "confirmed" },
  { name: "Cuchu", tecnica: 50, pase: 65, definicion: 60, defensa: 60, fisico: 50, inteligencia: 50, compromiso: 70, arquero: 50, photo: "", status: "confirmed" },
  { name: "Dylan", tecnica: 75, pase: 70, definicion: 70, defensa: 70, fisico: 75, inteligencia: 70, compromiso: 65, arquero: 50, photo: "", status: "confirmed" }
];

var state = {
  isEditor: false,
  players: [],
  teams: { a: [], b: [] },
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

var statConfig = [
  ["tecnica", "Técnica", "#35e875"],
  ["pase", "Pase", "#4ca8ff"],
  ["definicion", "Def.", "#ffd43b"],
  ["defensa", "Defensa", "#ff5353"],
  ["fisico", "Físico", "#9c6bff"],
  ["inteligencia", "Intel.", "#32d4d9"],
  ["compromiso", "Comp.", "#ff5bae"]
];

var compareConfig = [
  ["Ataque", ["tecnica", "pase", "definicion"]],
  ["Defensa", ["defensa"]],
  ["Físico", ["fisico"]],
  ["Táctica", ["inteligencia", "compromiso"]]
];

var colorLabel = {
  yellow: "Boca amarilla",
  blue: "Boca azul",
  white: "Boca blanca"
};

function init() {
  var saved = localStorage.getItem("bosteros_manager_data_v2");
  if (saved) {
    try {
      var parsed = JSON.parse(saved);
      state.players = parsed.players || defaultPlayers;
      state.match = parsed.match || state.match;
      state.teams = parsed.teams || state.teams;
    } catch (e) {
      state.players = defaultPlayers;
    }
  } else {
    state.players = defaultPlayers;
    saveData();
  }

  bindEvents();
  setNextWednesdayDate();
  renderAll();
}

function saveData() {
  try {
    localStorage.setItem("bosteros_manager_data_v2", JSON.stringify({
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

  document.getElementById("editorBtn").addEventListener("click", unlockEditor);
  document.getElementById("logoutEditorBtn").addEventListener("click", lockEditor);

  document.getElementById("openPlayerModalBtn").addEventListener("click", function(){ openPlayerModal(); });
  document.getElementById("openPlayerModalBtn2").addEventListener("click", function(){ openPlayerModal(); });
  document.getElementById("closePlayerModalBtn").addEventListener("click", closePlayerModal);
  document.getElementById("cancelPlayerBtn").addEventListener("click", closePlayerModal);
  document.getElementById("savePlayerBtn").addEventListener("click", savePlayerFromModal);
  document.getElementById("playerPhoto").addEventListener("change", handlePhotoInput);

  document.getElementById("quickGenerateBtn").addEventListener("click", generateTeams);
  document.getElementById("generateTeamsBtn").addEventListener("click", generateTeams);
  document.getElementById("regenerateTeamsBtn").addEventListener("click", regenerateTeams);
  document.getElementById("resetTeamsBtn").addEventListener("click", resetTeams);
  document.getElementById("shareTeamsBtn").addEventListener("click", showShareText);
  document.getElementById("copyShareBtn").addEventListener("click", copyShareText);
  document.getElementById("saveMatchBtn").addEventListener("click", saveMatchFromForm);
}

function showView(id) {
  document.querySelectorAll(".view").forEach(function(view) { view.classList.remove("active"); });
  document.querySelectorAll(".nav-btn").forEach(function(btn) { btn.classList.toggle("active", btn.dataset.view === id); });
  document.getElementById(id).classList.add("active");

  var titles = {
    dashboard: ["Dashboard", "Próximo partido, convocados y resumen general."],
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

function overall(p) {
  var total = p.tecnica + p.pase + p.definicion + p.defensa + p.fisico + p.inteligencia + p.compromiso;
  return Math.round(total / 7);
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
}

function playerCardHTML(p, i, editable) {
  var stats = statConfig.map(function(s) {
    var key = s[0], label = s[1], color = s[2];
    return '<div class="stat-row"><span>' + label + '</span><div class="bar"><i style="--w:' + p[key] + '%;--c:' + color + '"></i></div><b>' + p[key] + '</b></div>';
  }).join("");

  var actions = "";
  if (editable && state.isEditor) {
    actions = '<div class="card-actions"><button onclick="editPlayer(' + i + ')">Editar</button><button class="delete" onclick="deletePlayer(' + i + ')">Borrar</button></div>';
  }

  return '<article class="player-card">' +
    '<div class="player-top">' + avatar(p) +
    '<div><h4>' + p.name + '</h4><div class="ovr">' + overall(p) + ' OVR</div></div></div>' +
    stats +
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
      '<div class="call-player">' + avatar(p) + '<div><strong>' + p.name + '</strong><div class="muted">' + overall(p) + ' OVR</div></div></div>' +
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

function openPlayerModal(index) {
  if (!state.isEditor) {
    alert("Necesitás activar modo editor");
    return;
  }

  document.getElementById("playerModal").classList.remove("hidden");
  document.getElementById("editingIndex").value = "";

  var empty = { name: "", tecnica: 50, pase: 50, definicion: 50, defensa: 50, fisico: 50, inteligencia: 50, compromiso: 50, arquero: 50, photo: "" };

  if (typeof index === "number") {
    document.getElementById("modalTitle").textContent = "Editar jugador";
    document.getElementById("editingIndex").value = index;
    fillModal(state.players[index]);
  } else {
    document.getElementById("modalTitle").textContent = "Nuevo jugador";
    fillModal(empty);
  }
}

function fillModal(p) {
  document.getElementById("playerName").value = p.name;
  ["tecnica", "pase", "definicion", "defensa", "fisico", "inteligencia", "compromiso", "arquero"].forEach(function(k) {
    document.getElementById(k).value = p[k] || 50;
  });

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
  state.teams = { a: [], b: [] };
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
    tecnica: readNumber("tecnica"),
    pase: readNumber("pase"),
    definicion: readNumber("definicion"),
    defensa: readNumber("defensa"),
    fisico: readNumber("fisico"),
    inteligencia: readNumber("inteligencia"),
    compromiso: readNumber("compromiso"),
    arquero: readNumber("arquero"),
    photo: document.getElementById("photoPreview").dataset.photo || "",
    status: "confirmed"
  };

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

  if (randomize) {
    confirmed.sort(function(){ return Math.random() - 0.5; });
  }

  confirmed.sort(function(a, b){
    if (randomize) return Math.random() - 0.5;
    return overall(b.player) - overall(a.player);
  });

  var a = [];
  var b = [];

  confirmed.forEach(function(item) {
    var scoreA = a.reduce(function(sum, x){ return sum + overall(state.players[x]); }, 0);
    var scoreB = b.reduce(function(sum, x){ return sum + overall(state.players[x]); }, 0);

    if (a.length > b.length) b.push(item.index);
    else if (b.length > a.length) a.push(item.index);
    else if (scoreA <= scoreB) a.push(item.index);
    else b.push(item.index);
  });

  state.teams = { a: a, b: b };
  saveData();
  renderTeams();
  showView("teams");
}

function resetTeams() {
  if (!state.isEditor) return;
  if (!confirm("¿Resetear equipos? Se borra la formación actual.")) return;

  state.teams = { a: [], b: [] };
  saveData();
  renderTeams();
  document.getElementById("sharePanel").classList.add("hidden");
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

  document.getElementById("teamALabel").className = "shirt-tag " + state.match.teamAColor;
  document.getElementById("teamBLabel").className = "shirt-tag " + state.match.teamBColor;
  document.getElementById("teamALabel").textContent = labelA;
  document.getElementById("teamBLabel").textContent = labelB;
  document.getElementById("teamAListTitle").textContent = labelA;
  document.getElementById("teamBListTitle").textContent = labelB;
  document.getElementById("teamACompareTitle").textContent = labelA;
  document.getElementById("teamBCompareTitle").textContent = labelB;

  renderPitch(a, b);
  renderTeamList("teamAList", a);
  renderTeamList("teamBList", b);
  renderTeamCompare("teamACompare", a);
  renderTeamCompare("teamBCompare", b);
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

function renderPitch(a, b) {
  var positionsA = [[12,50], [25,24], [25,50], [25,76], [40,34], [40,66], [47,50]];
  var positionsB = [[88,50], [75,24], [75,50], [75,76], [60,34], [60,66], [53,50]];

  var html = "";

  a.forEach(function(index, i) {
    var p = state.players[index];
    var pos = positionsA[i] || [20 + i*5, 50];
    html += pitchPlayerHTML(p, pos, "team-a");
  });

  b.forEach(function(index, i) {
    var p = state.players[index];
    var pos = positionsB[i] || [80 - i*5, 50];
    html += pitchPlayerHTML(p, pos, "team-b");
  });

  if (!html) {
    html = '<div class="empty-pitch">Todavía no hay equipos generados.</div>';
  }

  document.getElementById("pitchPlayers").innerHTML = html;
}

function pitchPlayerHTML(p, pos, teamClass) {
  return '<div class="pitch-player ' + teamClass + '" style="left:' + pos[0] + '%; top:' + pos[1] + '%">' +
    avatar(p) +
    '<div class="name-tag">' + p.name + '</div>' +
  '</div>';
}

function renderTeamList(id, indexes) {
  document.getElementById(id).innerHTML = indexes.map(function(index) {
    var p = state.players[index];
    return '<div class="team-line"><span>' + p.name + '</span><strong>' + overall(p) + '</strong></div>';
  }).join("") || '<p class="muted">Todavía no hay equipo generado.</p>';
}

function buildShareText() {
  var a = state.teams.a || [];
  var b = state.teams.b || [];
  var labelA = colorLabel[state.match.teamAColor] || "Equipo A";
  var labelB = colorLabel[state.match.teamBColor] || "Equipo B";

  var text = "⚽ LOS BOSTEROS - EQUIPOS\\n\\n";
  text += "🏟️ " + state.match.place + "\\n";
  text += "🕖 Llegada: " + state.match.arrival + " · Inicio: " + state.match.start + "\\n";
  text += "💶 Costo: " + state.match.cost + "€\\n\\n";

  text += "🟡 " + labelA + " (" + teamAverage(a) + " OVR)\\n";
  a.forEach(function(index) {
    text += "• " + state.players[index].name + "\\n";
  });

  text += "\\n🔵 " + labelB + " (" + teamAverage(b) + " OVR)\\n";
  b.forEach(function(index) {
    text += "• " + state.players[index].name + "\\n";
  });

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

init();
