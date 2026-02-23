const limits = {
  age: [
    { min: 14, max: 21, tag: "Putinha", emoji: "🍼" },
    { min: 22, max: 34, tag: "Vagabunda", emoji: "🔥" },
    { min: 35, max: 59, tag: "Milf", emoji: "💋" },
    { min: 60, max: 79, tag: "Madura", emoji: "👠" },
    { min: 80, max: Infinity, tag: "Gilf", emoji: "👑" }
  ],
  ass: [
    { min: 7.5, max: 11.2, tag: "Tábua" },
    { min: 11.3, max: 37.5, tag: "Pêssego" },
    { min: 37.6, max: 97.5, tag: "Melão" },
    { min: 97.6, max: 270, tag: "Melancia" },
    { min: 270.1, max: 735, tag: "Avantajada" }
  ],
  waist: [
    { min: 5.5, max: 9.7, tag: "Inexistente" },
    { min: 9.8, max: 30, tag: "Modelo" },
    { min: 30.1, max: 80, tag: "Atletica" },
    { min: 80.1, max: 222, tag: "Larga" },
    { min: 222.1, max: 605, tag: "Redonda" }
  ],
  thighs: [
    { min: 3.8, max: 6.4, tag: "Inexistente" },
    { min: 6.5, max: 20.4, tag: "Modelo" },
    { min: 20.5, max: 53.6, tag: "Atletica" },
    { min: 53.7, max: 148, tag: "Larga" },
    { min: 148.1, max: 403.2, tag: "Redonda" }
  ],
  breasts: [
    { min: 6.5, max: 10.2, tag: "Tábua" },
    { min: 10.3, max: 33.5, tag: "Cereja" },
    { min: 33.6, max: 87.5, tag: "Melão" },
    { min: 87.6, max: 242, tag: "Melancia" },
    { min: 242.1, max: 659, tag: "Avantajada" }
  ],
  vagina: [
    { min: 0.1, max: 0.7, tag: "Virgem" },
    { min: 0.8, max: 1.7, tag: "Apertada" },
    { min: 1.8, max: 4.9, tag: "Regular" },
    { min: 5, max: 13.2, tag: "Larga" },
    { min: 13.3, max: 36.2, tag: "Arrombada" }
  ],
  anus: [
    { min: 0.2, max: 1.8, tag: "Virgem" },
    { min: 1.9, max: 4.1, tag: "Apartado" },
    { min: 4.2, max: 11.9, tag: "Regular" },
    { min: 12, max: 32, tag: "Largo" },
    { min: 33, max: 87, tag: "Arrombado" }
  ],
  penisLength: [
    { min: 0.6, max: 1.5, tag: "Inexistente" },
    { min: 1.6, max: 4.2, tag: "Banana" },
    { min: 4.3, max: 11.4, tag: "Pepino" },
    { min: 11.5, max: 31.2, tag: "Berinjela" },
    { min: 31.3, max: 85.2, tag: "Avantajada" }
  ],
  penisGirth: [
    { min: 0.8, max: 1.3, tag: "Inexistente" },
    { min: 1.4, max: 4.2, tag: "Banana" },
    { min: 4.3, max: 11, tag: "Pepino" },
    { min: 11.1, max: 30.4, tag: "Berinjela" },
    { min: 30.5, max: 82.8, tag: "Grotesca" }
  ],
  ballsSize: [
    { min: 0.2, max: 0.4, tag: "Inexistentes" },
    { min: 0.5, max: 1.3, tag: "Bagos" },
    { min: 1.4, max: 3.5, tag: "Nozes" },
    { min: 3.6, max: 9.6, tag: "Ovos" },
    { min: 9.7, max: 26.2, tag: "Ovos de Páscoa" }
  ]
};

const profiles = [
  {
    id: "yor-forger",
    identity: {
      name: "Yor Forger",
      gender: "Mulher",
      universe: "Spy x Family",
      age: { value: 27, tag: "", range: "", emoji: "" }
    },
    shortDescription: "Assassina profissional com fachada de funcionária pública.",
    basicPhysicalDetails: {
      height: "170 cm",
      weight: "56 kg",
      species: "Humana",
      hairColor: "Preto",
      hairStyle: "Longo com franja",
      eyeColor: "Vermelho",
      skinColor: "Clara"
    },
    measurements: {
      ass: { value: 46, tag: "", range: "", emoji: "🍑" },
      waist: { value: 24, tag: "", range: "", emoji: "⏳" },
      thighs: { value: 35, tag: "", range: "", emoji: "🦵" },
      breasts: { value: 52, tag: "", range: "", emoji: "🍒", appliesTo: ["Mulher", "Futanari"] },
      vagina: { value: 2.1, tag: "", range: "", emoji: "💗", appliesTo: ["Mulher"] },
      anus: { value: 3.4, tag: "", range: "", emoji: "🍩" },
      penisLength: { value: 0, tag: "", range: "", emoji: "🍆", appliesTo: ["Futanari", "Femboy"] },
      penisGirth: { value: 0, tag: "", range: "", emoji: "📏", appliesTo: ["Futanari", "Femboy"] },
      ballsSize: { value: 0, tag: "", range: "", emoji: "🥚", appliesTo: ["Futanari", "Femboy"] }
    },
    sexualExperience: { experiencedPenises: 3, sexCount: 18 },
    preferences: {
      fetish: ["Roleplay", "Dominação leve"],
      favoritePosition: "Cowgirl",
      favoriteClothing: "Vestido preto",
      occupation: "Funcionária da prefeitura"
    },
    fullDescription: "Yor equilibra vida familiar com sua persona secreta. No perfil completo você consegue ver atributos e preferências organizados por blocos.",
    media: {
      images: ["https://picsum.photos/seed/yor1/800/500"],
      videos: [],
      gifs: [],
      counts: { images: 1, videos: 0, gifs: 0 }
    }
  },
  {
    id: "felix-argyle",
    identity: {
      name: "Felix Argyle",
      gender: "Femboy",
      universe: "Re:Zero",
      age: { value: 19, tag: "", range: "", emoji: "" }
    },
    shortDescription: "Curandeiro carismático com visual andrógino.",
    basicPhysicalDetails: {
      height: "165 cm",
      weight: "50 kg",
      species: "Humano",
      hairColor: "Loiro",
      hairStyle: "Curto",
      eyeColor: "Azul",
      skinColor: "Clara"
    },
    measurements: {
      ass: { value: 22, tag: "", range: "", emoji: "🍑" },
      waist: { value: 19, tag: "", range: "", emoji: "⏳" },
      thighs: { value: 17, tag: "", range: "", emoji: "🦵" },
      breasts: { value: 0, tag: "", range: "", emoji: "🍒", appliesTo: ["Mulher", "Futanari"] },
      vagina: { value: 0, tag: "", range: "", emoji: "💗", appliesTo: ["Mulher"] },
      anus: { value: 2.4, tag: "", range: "", emoji: "🍩" },
      penisLength: { value: 8.2, tag: "", range: "", emoji: "🍆", appliesTo: ["Futanari", "Femboy"] },
      penisGirth: { value: 3.8, tag: "", range: "", emoji: "📏", appliesTo: ["Futanari", "Femboy"] },
      ballsSize: { value: 1.2, tag: "", range: "", emoji: "🥚", appliesTo: ["Futanari", "Femboy"] }
    },
    sexualExperience: { experiencedPenises: 11, sexCount: 52 },
    preferences: {
      fetish: ["Praise kink", "Cosplay"],
      favoritePosition: "De quatro",
      favoriteClothing: "Roupa de criada",
      occupation: "Curandeiro"
    },
    fullDescription: "Perfil montado para demonstrar campos exclusivos de Femboy como rola, grossura e bolas com classificação automática.",
    media: {
      images: ["https://picsum.photos/seed/felix1/800/500", "https://picsum.photos/seed/felix2/800/500"],
      videos: [],
      gifs: ["https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2tyZGJpMDlhbmVtbjViZXh3aHk0b3BzcnEzNmx4YXF0M2Nod3VxYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3oriO0OEd9QIDdllqo/giphy.gif"],
      counts: { images: 2, videos: 0, gifs: 1 }
    }
  },
  {
    id: "astolfo",
    identity: {
      name: "Astolfo",
      gender: "Futanari",
      universe: "Fate",
      age: { value: 24, tag: "", range: "", emoji: "" }
    },
    shortDescription: "Cavaleiro excêntrico com energia caótica e alegre.",
    basicPhysicalDetails: {
      height: "164 cm",
      weight: "56 kg",
      species: "Humano",
      hairColor: "Rosa",
      hairStyle: "Médio",
      eyeColor: "Rosa",
      skinColor: "Clara"
    },
    measurements: {
      ass: { value: 90, tag: "", range: "", emoji: "🍑" },
      waist: { value: 31, tag: "", range: "", emoji: "⏳" },
      thighs: { value: 50, tag: "", range: "", emoji: "🦵" },
      breasts: { value: 44, tag: "", range: "", emoji: "🍒", appliesTo: ["Mulher", "Futanari"] },
      vagina: { value: 0, tag: "", range: "", emoji: "💗", appliesTo: ["Mulher"] },
      anus: { value: 5.1, tag: "", range: "", emoji: "🍩" },
      penisLength: { value: 14.2, tag: "", range: "", emoji: "🍆", appliesTo: ["Futanari", "Femboy"] },
      penisGirth: { value: 8.4, tag: "", range: "", emoji: "📏", appliesTo: ["Futanari", "Femboy"] },
      ballsSize: { value: 4.1, tag: "", range: "", emoji: "🥚", appliesTo: ["Futanari", "Femboy"] }
    },
    sexualExperience: { experiencedPenises: 27, sexCount: 120 },
    preferences: {
      fetish: ["Bondage", "Exibicionismo"],
      favoritePosition: "Spooning",
      favoriteClothing: "Armadura leve",
      occupation: "Cavaleiro"
    },
    fullDescription: "Exemplo de perfil com todos os blocos preenchidos e contagem de mídias para visualizar o modelo completo solicitado.",
    media: {
      images: ["https://picsum.photos/seed/astolfo1/800/500"],
      videos: ["https://example.com/video-astolfo.mp4"],
      gifs: [],
      counts: { images: 1, videos: 1, gifs: 0 }
    }
  }
];

const cardTemplate = document.getElementById("cardTemplate");
const searchInput = document.getElementById("searchInput");
const cardsGrid = document.getElementById("cardsGrid");
const listView = document.getElementById("listView");
const detailView = document.getElementById("detailView");
const profileDetail = document.getElementById("profileDetail");
const backButton = document.getElementById("backButton");

function findTag(table, value) {
  const range = table.find((item) => value >= item.min && value <= item.max);
  if (!range) {
    return { tag: "Fora da escala", range: "N/A" };
  }
  return { tag: range.tag, range: `${range.min}–${range.max} cm` };
}

function enrichProfile(profile) {
  const cloned = structuredClone(profile);
  cloned.identity.age.tag = findTag(limits.age, cloned.identity.age.value).tag;
  cloned.identity.age.range = limits.age
    .map((entry) => `${entry.tag}: ${entry.min}–${entry.max === Infinity ? "∞" : entry.max}`)
    .join(" | ");
  cloned.identity.age.emoji = "🎂";

  Object.entries(cloned.measurements).forEach(([key, metric]) => {
    const table = limits[key];
    if (!table || metric.value <= 0) return;
    const result = findTag(table, metric.value);
    metric.tag = result.tag;
    metric.range = result.range;
  });
  return cloned;
}

const enrichedProfiles = profiles.map(enrichProfile);

function profileSearchText(profile) {
  return [
    profile.identity.name,
    profile.identity.universe,
    profile.identity.gender,
    profile.shortDescription,
    profile.basicPhysicalDetails.species,
    profile.preferences.occupation
  ]
    .join(" ")
    .toLowerCase();
}

function renderCards(filteredProfiles) {
  cardsGrid.innerHTML = "";
  if (!filteredProfiles.length) {
    cardsGrid.innerHTML = '<p class="empty">Nenhum perfil encontrado para sua pesquisa.</p>';
    return;
  }

  filteredProfiles.forEach((profile) => {
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector(".card-name").textContent = profile.identity.name;
    card.querySelector(".card-meta").textContent = `${profile.identity.gender} • ${profile.identity.universe} • ${profile.identity.age.value} anos`;
    card.querySelector(".card-desc").textContent = profile.shortDescription;
    card.querySelector(".open-btn").addEventListener("click", () => {
      location.hash = `#/perfil/${profile.id}`;
    });
    cardsGrid.appendChild(card);
  });
}

function metricHtml(name, metric) {
  return `
    <article class="metric">
      <h4>${metric.emoji || "📌"} ${name}</h4>
      <p><strong>Valor:</strong> ${metric.value} cm</p>
      <p><strong>Tag:</strong> ${metric.tag || "Não classificado"}</p>
      <p><strong>Faixa:</strong> ${metric.range || "Sem faixa"}</p>
    </article>
  `;
}

function renderDetail(profile) {
  const { identity, basicPhysicalDetails, sexualExperience, preferences, media } = profile;
  const measurementCards = Object.entries(profile.measurements)
    .filter(([_, metric]) => !metric.appliesTo || metric.appliesTo.includes(identity.gender))
    .map(([key, metric]) => metricHtml(key, metric))
    .join("");

  profileDetail.innerHTML = `
    <h2>${identity.name}</h2>
    <div class="grid-2">
      <section class="block">
        <h3>Identidade</h3>
        <p><strong>Gênero:</strong> ${identity.gender}</p>
        <p><strong>Universo:</strong> ${identity.universe}</p>
        <p><strong>Idade:</strong> ${identity.emoji} ${identity.age.value} (${identity.age.tag})</p>
        <p><strong>Escala:</strong> ${identity.age.range}</p>
        <p>${profile.shortDescription}</p>
      </section>
      <section class="block">
        <h3>Detalhes físicos</h3>
        <p><strong>Altura:</strong> ${basicPhysicalDetails.height}</p>
        <p><strong>Peso:</strong> ${basicPhysicalDetails.weight}</p>
        <p><strong>Espécie:</strong> ${basicPhysicalDetails.species}</p>
        <p><strong>Cabelo:</strong> ${basicPhysicalDetails.hairColor} • ${basicPhysicalDetails.hairStyle}</p>
        <p><strong>Olhos:</strong> ${basicPhysicalDetails.eyeColor}</p>
        <p><strong>Pele:</strong> ${basicPhysicalDetails.skinColor}</p>
      </section>
    </div>

    <section class="block">
      <h3>Medidas</h3>
      <div class="metric-grid">${measurementCards}</div>
    </section>

    <section class="grid-2">
      <div class="block">
        <h3>Experiência sexual</h3>
        <p><strong>Pênis experienciados:</strong> ${sexualExperience.experiencedPenises}</p>
        <p><strong>Quantidade de sexo:</strong> ${sexualExperience.sexCount}</p>
      </div>
      <div class="block">
        <h3>Preferências</h3>
        <p><strong>Fetiches:</strong> ${preferences.fetish.join(", ") || "Não informado"}</p>
        <p><strong>Posição favorita:</strong> ${preferences.favoritePosition || "Não informado"}</p>
        <p><strong>Roupa favorita:</strong> ${preferences.favoriteClothing || "Não informado"}</p>
        <p><strong>Ocupação:</strong> ${preferences.occupation || "Não informado"}</p>
      </div>
    </section>

    <section class="block">
      <h3>Descrição completa</h3>
      <p>${profile.fullDescription}</p>
    </section>

    <section class="block">
      <h3>Mídia</h3>
      <p>Imagens: ${media.counts.images} | Vídeos: ${media.counts.videos} | GIFs: ${media.counts.gifs}</p>
      <ul>
        ${media.images.map((img) => `<li>Imagem: <a href="${img}" target="_blank" rel="noreferrer">${img}</a></li>`).join("")}
        ${media.videos.map((video) => `<li>Vídeo: <a href="${video}" target="_blank" rel="noreferrer">${video}</a></li>`).join("")}
        ${media.gifs.map((gif) => `<li>GIF: <a href="${gif}" target="_blank" rel="noreferrer">${gif}</a></li>`).join("")}
      </ul>
    </section>
  `;
}

function showList() {
  listView.classList.remove("hidden");
  detailView.classList.add("hidden");
}

function showDetail(profile) {
  listView.classList.add("hidden");
  detailView.classList.remove("hidden");
  renderDetail(profile);
}

function handleRoute() {
  const [_, route, id] = location.hash.split("/");
  if (route === "perfil" && id) {
    const profile = enrichedProfiles.find((item) => item.id === id);
    if (profile) {
      showDetail(profile);
      return;
    }
  }
  showList();
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.toLowerCase().trim();
  const filtered = enrichedProfiles.filter((profile) => profileSearchText(profile).includes(query));
  renderCards(filtered);
});

backButton.addEventListener("click", () => {
  location.hash = "";
});

window.addEventListener("hashchange", handleRoute);

renderCards(enrichedProfiles);
handleRoute();
