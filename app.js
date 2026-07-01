const players = [
  { name: "Flego", tecnica: 70, pase: 60, definicion: 80, defensa: 80, fisico: 80, inteligencia: 75, compromiso: 85 },
  { name: "Gabi", tecnica: 60, pase: 60, definicion: 70, defensa: 80, fisico: 65, inteligencia: 65, compromiso: 85 },
  { name: "Rodri", tecnica: 80, pase: 70, definicion: 85, defensa: 50, fisico: 60, inteligencia: 65, compromiso: 85 },
  { name: "Rober", tecnica: 75, pase: 70, definicion: 80, defensa: 80, fisico: 65, inteligencia: 70, compromiso: 85 },
  { name: "Cabe", tecnica: 65, pase: 65, definicion: 75, defensa: 60, fisico: 55, inteligencia: 60, compromiso: 75 },
  { name: "Carlitos", tecnica: 70, pase: 70, definicion: 70, defensa: 80, fisico: 85, inteligencia: 65, compromiso: 85 },
  { name: "Niko", tecnica: 80, pase: 65, definicion: 70, defensa: 60, fisico: 70, inteligencia: 65, compromiso: 70 },
  { name: "Joni", tecnica: 60, pase: 70, definicion: 80, defensa: 40, fisico: 55, inteligencia: 75, compromiso: 60 },
  { name: "Nico", tecnica: 80, pase: 65, definicion: 70, defensa: 60, fisico: 75, inteligencia: 70, compromiso: 70 },
  { name: "Leo 🇮🇹", tecnica: 75, pase: 80, definicion: 85, defensa: 40, fisico: 70, inteligencia: 80, compromiso: 65 },
  { name: "Tiziano", tecnica: 70, pase: 70, definicion: 70, defensa: 75, fisico: 80, inteligencia: 70, compromiso: 70 },
  { name: "Facu", tecnica: 80, pase: 60, definicion: 70, defensa: 60, fisico: 60, inteligencia: 60, compromiso: 60 },
  { name: "Cuchu", tecnica: 50, pase: 65, definicion: 60, defensa: 60, fisico: 50, inteligencia: 50, compromiso: 70 },
  { name: "Dylan", tecnica: 75, pase: 70, definicion: 70, defensa: 70, fisico: 75, inteligencia: 70, compromiso: 65 }
];

const statConfig = [
  { key: "tecnica", label: "Técnica", color: "var(--green)" },
  { key: "pase", label: "Pase", color: "var(--blue)" },
  { key: "definicion", label: "Definición", color: "var(--yellow)" },
  { key: "defensa", label: "Defensa", color: "var(--red)" },
  { key: "fisico", label: "Físico", color: "var(--purple)" },
  { key: "inteligencia", label: "Inteligencia", color: "var(--cyan)" },
  { key: "compromiso", label: "Compromiso", color: "var(--pink)" }
];

function overall(player) {
  const total = statConfig.reduce((sum, stat) => sum + player[stat.key], 0);
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

function renderPlayers() {
  const grid = document.getElementById("playersGrid");
  grid.innerHTML = "";

  players.forEach((player, index) => {
    const value = overall(player);

    const card = document.createElement("article");
    card.className = "player-card";

    card.innerHTML = `
      <div class="rank">${index + 1}</div>
      <div class="avatar">${initials(player.name)}</div>
      <h3>${player.name}</h3>

      <div class="overall-ring" style="--value:${value}; --ring-color:${ringColor(value)}">
        <strong>${value}</strong>
        <span>OVR</span>
      </div>

      ${statConfig.map(stat => `
        <div class="stat">
          <div class="stat-name">${stat.label}</div>
          <div class="bar" style="--stat:${player[stat.key]}; --color:${stat.color}">
            <span></span>
          </div>
          <div class="stat-value">${player[stat.key]}</div>
        </div>
      `).join("")}
    `;

    grid.appendChild(card);
  });
}

function renderAverages() {
  const container = document.getElementById("teamAverages");
  container.innerHTML = "";

  const squadOverall = Math.round(
    players.reduce((sum, player) => sum + overall(player), 0) / players.length
  );

  document.getElementById("squadOverall").innerHTML = `<span>${squadOverall}</span>`;
  document.getElementById("squadOverall").style.setProperty("--value", squadOverall);
  document.getElementById("squadOverall").style.setProperty("--color", ringColor(squadOverall));

  statConfig.forEach(stat => {
    const avg = Math.round(players.reduce((sum, player) => sum + player[stat.key], 0) / players.length);

    const item = document.createElement("div");
    item.className = "avg-item";
    item.innerHTML = `
      <div class="mini-ring" style="--value:${avg}; --color:${stat.color}">
        <span>${avg}</span>
      </div>
      <div class="avg-label">${stat.label}</div>
    `;

    container.appendChild(item);
  });
}

function teamScore(team) {
  return Math.round(team.reduce((sum, player) => sum + overall(player), 0) / team.length);
}

function buildBalancedTeams() {
  const sorted = [...players].sort((a, b) => overall(b) - overall(a));
  const teamA = [];
  const teamB = [];

  sorted.forEach(player => {
    const scoreA = teamA.reduce((sum, p) => sum + overall(p), 0);
    const scoreB = teamB.reduce((sum, p) => sum + overall(p), 0);

    if (teamA.length >= 7) teamB.push(player);
    else if (teamB.length >= 7) teamA.push(player);
    else if (scoreA <= scoreB) teamA.push(player);
    else teamB.push(player);
  });

  renderTeam("teamA", teamA);
  renderTeam("teamB", teamB);

  document.getElementById("teamATotal").textContent = `Promedio: ${teamScore(teamA)} OVR`;
  document.getElementById("teamBTotal").textContent = `Promedio: ${teamScore(teamB)} OVR`;

  document.getElementById("teams").scrollIntoView({ behavior: "smooth" });
}

function renderTeam(elementId, team) {
  const container = document.getElementById(elementId);
  container.innerHTML = team
    .sort((a, b) => overall(b) - overall(a))
    .map(player => `
      <div class="team-player">
        <span>${player.name}</span>
        <span>${overall(player)}</span>
      </div>
    `).join("");
}

document.getElementById("buildTeamsBtn").addEventListener("click", buildBalancedTeams);

renderPlayers();
renderAverages();
buildBalancedTeams();
