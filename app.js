const STORAGE_KEY = "futbol7_manager_v3";

function uid() {
  if (window.crypto && crypto.randomUUID) {
    return crypto.randomUUID();
  }

  return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 10);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

const defaultPlayers = [
  { id: uid(), name: "Flego", tecnica: 70, pase: 60, definicion: 80, defensa: 80, fisico: 80, inteligencia: 75, compromiso: 85, photo: "" },
  { id: uid(), name: "Gabi", tecnica: 60, pase: 60, definicion: 70, defensa: 80, fisico: 65, inteligencia: 65, compromiso: 85, photo: "" },
  { id: uid(), name: "Rodri", tecnica: 80, pase: 70, definicion: 85, defensa: 50, fisico: 60, inteligencia: 65, compromiso: 85, photo: "" },
  { id: uid(), name: "Rober", tecnica: 75, pase: 70, definicion: 80, defensa: 80, fisico: 65, inteligencia: 70, compromiso: 85, photo: "" },
  { id: uid(), name: "Cabe", tecnica: 65, pase: 65, definicion: 75, defensa: 60, fisico: 55, inteligencia: 60, compromiso: 75, photo: "" },
  { id: uid(), name: "Carlitos", tecnica: 70, pase: 70, definicion: 70, defensa: 80, fisico: 85, inteligencia: 65, compromiso: 85, photo: "" },
  { id: uid(), name: "Niko", tecnica: 80, pase: 65, definicion: 70, defensa: 60, fisico: 70, inteligencia: 65, compromiso: 70, photo: "" },
  { id: uid(), name: "Joni", tecnica: 60, pase: 70, definicion: 80, defensa: 40, fisico: 55, inteligencia: 75, compromiso: 60, photo: "" },
  { id: uid(), name: "Nico", tecnica: 80, pase: 65, definicion: 70, defensa: 60, fisico: 75, inteligencia: 70, compromiso: 70, photo: "" },
  { id: uid(), name: "Leo 🇮🇹", tecnica: 75, pase: 80, definicion: 85, defensa: 40, fisico: 70, inteligencia: 80, compromiso: 65, photo: "" },
  { id: uid(), name: "Tiziano", tecnica: 70, pase: 70, definicion: 70, defensa: 75, fisico: 80, inteligencia: 70, compromiso: 70, photo: "" },
  { id: uid(), name: "Facu", tecnica: 80, pase: 60, definicion: 70, defensa: 60, fisico: 60, inteligencia: 60, compromiso: 60, photo: "" },
  { id: uid(), name: "Cuchu", tecnica: 50, pase: 65, definicion: 60, defensa: 60, fisico: 50, inteligencia: 50, compromiso: 70, photo: "" },
  { id: uid(), name: "Dylan", tecnica: 75, pase: 70, definicion: 70, defensa: 70, fisico: 75, inteligencia: 70, compromiso: 65, photo: "" }
];

const defaultState = {
  players: defaultPlayers,
  match: {
    date: "",
    time: "",
    place: "",
    map: "",
    teamAColor: "amarilla",
    teamBColor: "azul",
    selectedPlayerIds: [],
    teamA: [],
    teamB: []
  }
};

let state = loadState();

const statConfig = [
  { key: "tecnica", label: "Técnica", color: "var(--green)" },
  { key: "pase", label: "Pase", color: "var(--blue)" },
  { key: "definicion", label: "Definición", color: "var(--yellow)" },
  { key: "defensa", label: "Defensa", color: "var(--red)" },
  { key: "fisico", label: "Físico", color: "var(--purple)" },
  { key: "inteligencia", label: "Inteligencia", color: "var(--cyan)" },
  { key: "compromiso", label: "Compromiso", color: "var(--pink)" }
];

const colorNames = {
  amarilla: "Boca amarilla",
  azul: "Boca azul",
  blanca: "Boca blanca"
};

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY) || localStorage.getItem("futbol7_manager_v2");

  if (!saved) return clone(defaultState);

  try {
    const parsed = JSON.parse(saved);

    if (!parsed.players || !parsed.match) {
      return clone(defaultState);
    }

    return parsed;
  } catch {
    return clone(defaultState);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    alert("No se pudo guardar. Puede ser porque las fotos son muy pesadas. Probá con una imagen más chica.");
    console.error(error);
  }
}

function overall(player) {
  const total = statConfig.reduce((sum, stat) => sum + Number(player[stat.key] || 0), 0);
  return Math.round(total / statConfig.length);
}

function ringColor(value) {
  if (value >= 72) return "var(--green)";
  if (value >= 64) return "var(--yellow)";
  return "#ff8a00";
}

function initials(name) {
  return name.replace("🇮🇹", "").trim().slice(0, 2).toUpperCase();
}

function avatarHTML(player) {
  if (player.photo) return `<img src="${player.photo}" alt="${player.name}">`;
  return initials(player.name);
}

function renderPlayerCard(player, index, editable = false) {
  const value = overall(player);

  return `
    <article class="player-card">
      <div class="avatar">${avatarHTML(player)}</div>
      <h3>${player.name}</h3>

      <div class="overall-ring" style="--value:${value}; --ring-color:${ringColor(value)}">
        <strong>${value}</strong>
        <span>OVR</span>
      </div>

      ${statConfig.map(stat => `
        <div class="stat">
          <div>${stat.label}</div>
          <div class="bar" style="--stat:${player[stat.key]}; --color:${stat.color}">
            <span></span>
          </div>
          <div class="stat-value">${player[stat.key]}</div>
        </div>
      `).join("")}

      ${editable ? `
        <div class="card-actions">
          <button class="ghost" onclick="editPlayer('${player.id}')">Editar</button>
          <button class="ghost" onclick="deletePlayer('${player.id}')">Borrar</button>
        </div>
      ` : ""}
    </article>
  `;
}

function renderAll() {
  document.getElementById("dashboardPlayerCount").textContent = state.players.length;
  document.getElementById("playerCount")?.textContent = state.players.length;

  document.getElementById("dashboardPlayersGrid").innerHTML =
    state.players.map((player, index) => renderPlayerCard(player, index, false)).join("");

  document.getElementById("playersGrid").innerHTML =
    state.players.map((player, index) => renderPlayerCard(player, index, true)).join("");

  renderAverages();
  renderCallList();
  renderMatchInfo();
  renderTeams();
}

function renderAverages() {
  const container = document.getElementById("teamAverages");
  container.innerHTML = "";

  const squadOverall = state.players.length
    ? Math.round(state.players.reduce((sum, player) => sum + overall(player), 0) / state.players.length)
    : 0;

  document.getElementById("squadOverall").innerHTML = `<span>${squadOverall}</span>`;
  document.getElementById("squadOverall").style.setProperty("--value", squadOverall);
  document.getElementById("squadOverall").style.setProperty("--color", ringColor(squadOverall));
  document.getElementById("squadLabel").textContent = squadOverall >= 72 ? "Muy buen nivel" : squadOverall >= 64 ? "Buen nivel" : "Nivel parejo";

  statConfig.forEach(stat => {
    const avg = state.players.length
      ? Math.round(state.players.reduce((sum, player) => sum + Number(player[stat.key] || 0), 0) / state.players.length)
      : 0;

    container.innerHTML += `
      <div class="avg-item">
        <div class="mini-ring" style="--value:${avg}; --color:${stat.color}">
          <span>${avg}</span>
        </div>
        <div class="avg-label">${stat.label}</div>
      </div>
    `;
  });
}

function renderCallList() {
  const callList = document.getElementById("callList");
  callList.innerHTML = state.players.map(player => {
    const checked = state.match.selectedPlayerIds.includes(player.id) ? "checked" : "";
    return `
      <label class="call-item">
        <input type="checkbox" value="${player.id}" ${checked}>
        <div class="avatar" style="width:38px;height:38px;font-size:13px;margin:0">${avatarHTML(player)}</div>
        <div>
          <strong>${player.name}</strong>
          <div class="hint">${overall(player)} OVR</div>
        </div>
      </label>
    `;
  }).join("");

  callList.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {
      const selected = [...callList.querySelectorAll("input:checked")].map(el => el.value);
      state.match.selectedPlayerIds = selected;
      saveState();
      renderSelectedCount();
    });
  });

  renderSelectedCount();
}

function renderSelectedCount() {
  const count = state.match.selectedPlayerIds.length;
  document.getElementById("selectedCount").textContent = `${count} seleccionados`;
}

function renderMatchInfo() {
  document.getElementById("matchDate").value = state.match.date || "";
  document.getElementById("matchTime").value = state.match.time || "";
  document.getElementById("matchPlace").value = state.match.place || "";
  document.getElementById("matchMap").value = state.match.map || "";
  document.getElementById("teamAColor").value = state.match.teamAColor || "amarilla";
  document.getElementById("teamBColor").value = state.match.teamBColor || "azul";

  const prettyDate = formatDateTime(state.match.date, state.match.time);
  document.getElementById("sideMatchTitle").textContent = prettyDate || "Sin partido cargado";
  document.getElementById("sideMatchMeta").textContent = state.match.place || "Cargá día, hora y cancha.";

  document.getElementById("teamsMatchDate").textContent = prettyDate || "Sin definir";
  document.getElementById("teamsMatchPlace").textContent = state.match.place || "Sin definir";

  const mapPreview = document.getElementById("mapPreview");
  const teamsMapLink = document.getElementById("teamsMapLink");

  if (state.match.map) {
    mapPreview.href = state.match.map;
    mapPreview.textContent = "Abrir ubicación en Google Maps";
    teamsMapLink.href = state.match.map;
    teamsMapLink.textContent = "Abrir mapa";
  } else {
    mapPreview.removeAttribute("href");
    mapPreview.textContent = "Todavía no hay link de mapa cargado.";
    teamsMapLink.removeAttribute("href");
    teamsMapLink.textContent = "Sin mapa";
  }

  document.getElementById("teamAColorLabel").textContent = colorNames[state.match.teamAColor] || "Equipo A";
  document.getElementById("teamBColorLabel").textContent = colorNames[state.match.teamBColor] || "Equipo B";
}

function formatDateTime(date, time) {
  if (!date && !time) return "";
  const dateText = date ? new Date(`${date}T12:00:00`).toLocaleDateString("es-ES", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit"
  }) : "Día sin definir";

  return `${dateText}${time ? ` · ${time} hs` : ""}`;
}

async function fileToBase64(file) {
  if (!file) return "";

  return new Promise(resolve => {
    const reader = new FileReader();

    reader.onload = event => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const maxSize = 420;
        const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);

        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);

        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };

      img.onerror = () => resolve(event.target.result);
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  });
}

document.getElementById("playerForm").addEventListener("submit", async event => {
  event.preventDefault();

  const id = document.getElementById("playerId").value;
  const existing = state.players.find(player => player.id === id);
  const photoFile = document.getElementById("photo").files[0];

  const playerData = {
    id: id || uid(),
    name: document.getElementById("name").value.trim(),
    tecnica: Number(document.getElementById("tecnica").value),
    pase: Number(document.getElementById("pase").value),
    definicion: Number(document.getElementById("definicion").value),
    defensa: Number(document.getElementById("defensa").value),
    fisico: Number(document.getElementById("fisico").value),
    inteligencia: Number(document.getElementById("inteligencia").value),
    compromiso: Number(document.getElementById("compromiso").value),
    photo: photoFile ? await fileToBase64(photoFile) : existing?.photo || ""
  };

  if (existing) {
    state.players = state.players.map(player => player.id === id ? playerData : player);
  } else {
    state.players.push(playerData);
  }

  saveState();
  event.target.reset();
  document.getElementById("playerId").value = "";
  document.getElementById("formTitle").textContent = "Agregar jugador";
  renderAll();
});

window.editPlayer = function(id) {
  const player = state.players.find(p => p.id === id);
  if (!player) return;

  document.getElementById("playerId").value = player.id;
  document.getElementById("name").value = player.name;

  statConfig.forEach(stat => {
    document.getElementById(stat.key).value = player[stat.key];
  });

  document.getElementById("formTitle").textContent = `Editando a ${player.name}`;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.deletePlayer = function(id) {
  const player = state.players.find(p => p.id === id);
  if (!player) return;

  const ok = confirm(`¿Borrar a ${player.name}?`);
  if (!ok) return;

  state.players = state.players.filter(p => p.id !== id);
  state.match.selectedPlayerIds = state.match.selectedPlayerIds.filter(playerId => playerId !== id);
  state.match.teamA = state.match.teamA.filter(playerId => playerId !== id);
  state.match.teamB = state.match.teamB.filter(playerId => playerId !== id);

  saveState();
  renderAll();
};

document.getElementById("cancelEditBtn").addEventListener("click", () => {
  document.getElementById("playerForm").reset();
  document.getElementById("playerId").value = "";
  document.getElementById("formTitle").textContent = "Agregar jugador";
});

document.getElementById("matchForm").addEventListener("submit", event => {
  event.preventDefault();

  state.match.date = document.getElementById("matchDate").value;
  state.match.time = document.getElementById("matchTime").value;
  state.match.place = document.getElementById("matchPlace").value.trim();
  state.match.map = document.getElementById("matchMap").value.trim();
  state.match.teamAColor = document.getElementById("teamAColor").value;
  state.match.teamBColor = document.getElementById("teamBColor").value;

  saveState();
  renderMatchInfo();
  alert("Partido guardado.");
});

document.getElementById("generateTeamsBtn").addEventListener("click", () => {
  const selectedPlayers = state.players.filter(player => state.match.selectedPlayerIds.includes(player.id));

  if (selectedPlayers.length < 2) {
    alert("Seleccioná al menos 2 jugadores.");
    return;
  }

  if (selectedPlayers.length % 2 !== 0) {
    alert("Tenés un número impar de jugadores. Para dividir parejo, seleccioná una cantidad par.");
    return;
  }

  const sorted = [...selectedPlayers].sort((a, b) => overall(b) - overall(a));
  const teamA = [];
  const teamB = [];

  sorted.forEach(player => {
    const scoreA = teamA.reduce((sum, p) => sum + overall(p), 0);
    const scoreB = teamB.reduce((sum, p) => sum + overall(p), 0);

    if (teamA.length >= selectedPlayers.length / 2) teamB.push(player);
    else if (teamB.length >= selectedPlayers.length / 2) teamA.push(player);
    else if (scoreA <= scoreB) teamA.push(player);
    else teamB.push(player);
  });

  state.match.teamA = teamA.map(player => player.id);
  state.match.teamB = teamB.map(player => player.id);

  saveState();
  renderTeams();
  showView("teams");
});

function renderTeams() {
  const teamAPlayers = state.match.teamA
    .map(id => state.players.find(player => player.id === id))
    .filter(Boolean);

  const teamBPlayers = state.match.teamB
    .map(id => state.players.find(player => player.id === id))
    .filter(Boolean);

  renderTeam("teamA", teamAPlayers);
  renderTeam("teamB", teamBPlayers);

  document.getElementById("teamATotal").textContent = teamAPlayers.length
    ? `Promedio: ${teamScore(teamAPlayers)} OVR`
    : "Todavía no hay equipo generado.";

  document.getElementById("teamBTotal").textContent = teamBPlayers.length
    ? `Promedio: ${teamScore(teamBPlayers)} OVR`
    : "Todavía no hay equipo generado.";
}

function renderTeam(elementId, team) {
  document.getElementById(elementId).innerHTML = team
    .sort((a, b) => overall(b) - overall(a))
    .map(player => `
      <div class="team-player">
        <span>${player.name}</span>
        <span>${overall(player)}</span>
      </div>
    `).join("");
}

function teamScore(team) {
  return Math.round(team.reduce((sum, player) => sum + overall(player), 0) / team.length);
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach(view => view.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.view === viewId);
  });

  const titles = {
    dashboard: ["Dashboard", "Gestión de jugadores, convocados y equipos."],
    players: ["Base de jugadores", "Cargá jugadores, aptitudes y foto."],
    match: ["Armar partido", "Seleccioná convocados, cancha, mapa y camisetas."],
    teams: ["Equipos", "Equipos balanceados para el partido."]
  };

  document.getElementById("pageTitle").textContent = titles[viewId][0];
  document.getElementById("pageSubtitle").textContent = titles[viewId][1];
}

document.querySelectorAll("[data-view]").forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.view));
});

document.querySelectorAll("[data-view-target]").forEach(button => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "futbol-7-manager-data.json";
  a.click();
  URL.revokeObjectURL(url);
});

renderAll();

console.log("Fútbol 7 Manager cargado correctamente.");
