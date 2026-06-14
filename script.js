/* ================================================
   GUÍA DE TURISMO PANAMÁ — script.js
   Bilingüe ES / EN
   Secciones: turismo, amenidades (3 sub-niveles), emergencias
================================================ */

// ── ICONOS SVG ────────────────────────────────────────────────
const ICONS = {
  cart: `<svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="5"/><path d="M6 12h4M8 10v4"/><circle cx="16" cy="11" r="1.2" fill="#dec45a" stroke="none"/><circle cx="18" cy="13" r="1.2" fill="#dec45a" stroke="none"/></svg>`,
  cocktail: `<svg viewBox="0 0 24 24"><path d="M8 22 12 11 16 22"/><path d="M5 3h14L12 13z"/></svg>`,
  restaurant: `<svg viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
  pool: `<svg viewBox="0 0 24 24"><path d="M2 20c2-2 4-3 6-3s4 1 6 3 4 3 6 3"/><path d="M2 16c2-2 4-3 6-3s4 1 6 3 4 3 6 3"/><circle cx="12" cy="7" r="4"/></svg>`,
  gym: `<svg viewBox="0 0 24 24"><path d="M6.5 6.5h11M6.5 17.5h11M3 10h4v4H3zM17 10h4v4h-4zM7 12h10"/></svg>`,
  phone: `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.41 2 2 0 0 1 3.59 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  coffee: `<svg viewBox="0 0 24 24"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/><line x1="6" y1="2" x2="6" y2="4"/><line x1="10" y1="2" x2="10" y2="4"/><line x1="14" y1="2" x2="14" y2="4"/></svg>`,
  museum: `<svg viewBox="0 0 24 24"><path d="M4 21h16M4 10h16M6 10v8M10 10v8M14 10v8M18 10v8M3 10l9-6 9 6"/></svg>`,
  car: `<svg viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="6" rx="2"/><circle cx="7.5" cy="17.5" r="1.5" fill="#dec45a" stroke="none"/><circle cx="16.5" cy="17.5" r="1.5" fill="#dec45a" stroke="none"/><path d="M5 11l2-4h10l2 4"/></svg>`,
  laptop: `<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="1"/><line x1="2" y1="20" x2="22" y2="20"/></svg>`,
  film: `<svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="4" x2="17" y2="20"/><line x1="2" y1="9" x2="7" y2="9"/><line x1="2" y1="15" x2="7" y2="15"/><line x1="17" y1="9" x2="22" y2="9"/><line x1="17" y1="15" x2="22" y2="15"/></svg>`,
  eye: `<svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  activity: `<svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
};

// ── OBJETO DE TRADUCCIONES ────────────────────────────────────
const T = {

  // ════════════════════════════════════════
  //  ESPAÑOL
  // ════════════════════════════════════════
  es: {
    // Navbar
    "nav.brand":      "Guía de Turismo",
    "nav.tourism":    "Turismo",
    "nav.amenities":  "Amenidades",
    "nav.emergency":  "Emergencias",

    // Hero
    "hero.title":    "Conoce Panamá",
    "hero.subtitle": "Puente del Mundo",

    // Sección turismo
    "tourism.title": "Lugares que debes visitar.",
    "tourism.desc":  "Descubre los destinos más fascinantes de Panamá.",

    // Filtros
    "filter.all":       "Todos",
    "filter.city":      "Ciudad",
    "filter.provinces": "Provincias",

    // Labels tarjetas
    "card.schedule":          "Horario",
    "card.price":             "Precio",
    "card.region.ciudad":     "Ciudad de Panamá",
    "card.region.provincias": "Provincias",

    // Sección amenidades
    "amenities.title": "Amenidades",
    "amenities.desc":  "Todo lo que necesitas para una estadía perfecta, distribuido en tres niveles.",

    // Sección emergencias
    "emergency.title": "Números de Emergencia",
    "emergency.desc":  "Guarda estos números. Tu seguridad es lo primero.",

    // Footer
    "footer.copy": "© 2025 Guía de Turismo Panamá · Información sujeta a cambios",

    // ── Amenidades por nivel ─────────────────
    amenidades: {
      plantaBaja: {
        titulo: "Planta Baja",
        items: [
          { tipo: "icono", name: "Bar Cafetería",       icon: "coffee"     },
          { tipo: "icono", name: "Supermercado",        icon: "cart"       },
          { tipo: "icono", name: "Museo",               icon: "museum"     },
          { tipo: "icono", name: "Restaurantes",        icon: "restaurant" },
          { tipo: "icono", name: "Alquiler de Carros",  icon: "car"        },
        ],
      },
      areaSocial: {
        titulo: "Área Social",
        items: [
          { tipo: "foto",  name: "Piscina Infinity", icon: "pool",
            img: "images/piscina-infinita.jpg",
            desc: "Relájate con una vista interminable hacia la ciudad y el mar." },
          { tipo: "foto",  name: "Sala de Juegos",   icon: "gamepad",
            img: "images/sala-de-juego.jpg",
            desc: "Diversión y entretenimiento para todas las edades." },
          { tipo: "icono", name: "Coworking",        icon: "laptop"     },
          { tipo: "icono", name: "Sala de Cine",     icon: "film"       },
          { tipo: "icono", name: "Bar y Restaurantes", icon: "cocktail" },
          { tipo: "icono", name: "Gimnasio",         icon: "gym"        },
        ],
      },
      rooftop: {
        titulo: "Rooftop",
        items: [
          { tipo: "foto", name: "Vista Point", icon: "eye",
            img: "images/vista-point.jpg",
            desc: "Panorámica de 360° del Casco Antiguo y el skyline moderno." },
          { tipo: "foto", name: "Tirolesa", icon: "activity",
            img: "images/tirolesa.jpg",
            desc: "Vive la adrenalina sobrevolando la ciudad de Panamá." },
          { tipo: "icono", name: "Restaurantes", icon: "restaurant" },
        ],
      },
    },

    // ── Emergencias ─────────────────────────
    emergency: [
      {
        name:   "Policía Nacional",
        desc:   "Para reportar delitos, robos o cualquier situación de inseguridad.",
        number: "104"
      },
      {
        name:   "Benemérito Cuerpo de Bomberos",
        desc:   "Incendios, rescates y emergencias de todo tipo.",
        number: "103"
      },
      {
        name:   "Policía de Turismo",
        desc:   "Asistencia especializada para visitantes y turistas en Panamá.",
        number: "(+507) 211-0366"
      },
      {
        name:   "SUME — Sistema Único de Manejo de Emergencias",
        desc:   "Número único para emergencias médicas, desastres y coordinación.",
        number: "911"
      },
    ],

    // ── Lugares turísticos ──────────────────
    places: [
      {
        nombre:  "Panamá la Vieja",
        region:  "ciudad",
        precio:  "$17.00",
        horario: "Martes a Domingo: 8:30 am – 5:30 pm (Taquilla cierra 4:30 pm)",
        detalles:"Ruinas históricas de la primera ciudad española en el Pacífico.",
        img:     "images/panama-la-vieja.jpg"
      },
      {
        nombre:  "Biomuseo",
        region:  "ciudad",
        precio:  "$20.00",
        horario: "Mar–Vie: 9:00 am – 3:00 pm | Sáb–Dom: 10:00 am – 3:00 pm",
        detalles:"Museo de historia natural diseñado por Frank Gehry que explica cómo Panamá cambió el mundo.",
        img:     "images/biomuseo.jpg"
      },
      {
        nombre:  "Canal de Panamá",
        region:  "ciudad",
        precio:  "$17.22",
        horario: "Lunes a Domingo: 8:00 am – 5:00 pm (Taquilla hasta 3:30 pm)",
        detalles:"Centro de visitantes de Miraflores para ver el tránsito de los barcos.",
        img:     "images/canal-de-panama.jpg"
      },
      {
        nombre:  "Parque Natural Metropolitano",
        region:  "ciudad",
        precio:  "Adultos: $5.00 | Niños (3-17): $3.00",
        horario: "Lunes a Domingo: 7:00 am – 4:30 pm",
        detalles:"Un bosque tropical en plena ciudad, ideal para senderismo y avistamiento de aves.",
        img:     "images/parque-metropolitano.jpg"
      },
      {
        nombre:  "Calzada de Amador",
        region:  "ciudad",
        precio:  "Entrada Gratuita",
        horario: "Lunes a Domingo: Todo el día",
        detalles:"Vía marítima que conecta tres islas, perfecta para caminar, andar en bicicleta y ver los barcos.",
        img:     "images/calzada-de-amador.jpg"
      },
      {
        nombre:  "Cerro Ancón",
        region:  "ciudad",
        precio:  "Entrada Gratuita",
        horario: "Lunes a Domingo: 6:00 am – 6:00 pm",
        detalles:"El punto más alto de la ciudad con vistas panorámicas espectaculares y naturaleza.",
        img:     "images/cerro-ancon.webp"
      },
      {
        nombre:  "Casco Antiguo",
        region:  "ciudad",
        precio:  "Entrada Gratuita",
        horario: "Lunes a Domingo: Todo el día",
        detalles:"Barrio colonial histórico lleno de plazas, iglesias, restaurantes y vida nocturna.",
        img:     "images/casco-antiguo.webp"
      },
      {
        nombre:  "Mi Pueblito",
        region:  "ciudad",
        precio:  "$3.00",
        horario: "Lunes a Domingo: 8:00 am – 4:00 pm",
        detalles:"Réplica de pueblos tradicionales panameños: afroantillano, campesino e indígena.",
        img:     "images/mi-pueblito.webp"
      },
      {
        nombre:  "Parque Nacional Soberanía",
        region:  "ciudad",
        precio:  "$5.00",
        horario: "Lunes a Domingo: 8:00 am – 5:00 pm",
        detalles:"Hogar del Camino de Cruces y Pipeline Road, ideal para observar naturaleza pura.",
        img:     "images/parque-soberania.jpg"
      },
      {
        nombre:  "Bocas del Toro",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Archipiélago caribeño famoso por sus playas, surf y biodiversidad marina.",
        img:     "images/bocas-del-toro.webp"
      },
      {
        nombre:  "Chiriquí",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Tierras altas con el Volcán Barú, Boquete, café geisha y clima fresco.",
        img:     "images/chiriqui.jpg"
      },
      {
        nombre:  "El Valle de Antón",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Un pueblo hermoso ubicado dentro del cráter de un volcán extinto.",
        img:     "images/el-valle.jpg"
      },
      {
        nombre:  "San Blas",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Islas paradisíacas manejadas por la comunidad indígena Guna Yala.",
        img:     "images/san-blas.avif"
      },
    ],
  },

  // ════════════════════════════════════════
  //  ENGLISH
  // ════════════════════════════════════════
  en: {
    "nav.brand":      "Tourism Guide",
    "nav.tourism":    "Tourism",
    "nav.amenities":  "Amenities",
    "nav.emergency":  "Emergency",

    "hero.title":    "Discover Panama",
    "hero.subtitle": "Bridge of the World",

    "tourism.title": "places you should visit.",
    "tourism.desc":  "Explore the most fascinating destinations in Panama.",

    "filter.all":       "All",
    "filter.city":      "City",
    "filter.provinces": "Provinces",

    "card.schedule":          "Hours",
    "card.price":             "Price",
    "card.region.ciudad":     "Panama City",
    "card.region.provincias": "Provinces",

    "amenities.title": "Amenities",
    "amenities.desc":  "Everything you need for a perfect stay, across three levels.",

    "emergency.title": "Emergency Numbers",
    "emergency.desc":  "Save these numbers. Your safety comes first.",

    "footer.copy": "© 2025 Panama Tourism Guide · Information subject to change",

    // ── Amenities by level ───────────────────
    amenidades: {
      plantaBaja: {
        titulo: "Ground Floor",
        items: [
          { tipo: "icono", name: "Café Bar",      icon: "coffee"     },
          { tipo: "icono", name: "Supermarket",   icon: "cart"       },
          { tipo: "icono", name: "Museum",        icon: "museum"     },
          { tipo: "icono", name: "Restaurants",   icon: "restaurant" },
          { tipo: "icono", name: "Car Rental",    icon: "car"        },
        ],
      },
      areaSocial: {
        titulo: "Social Area",
        items: [
          { tipo: "foto",  name: "Infinity Pool", icon: "pool",
            img: "images/piscina-infinita.jpg",
            desc: "Unwind with an endless view over the city and the sea." },
          { tipo: "foto",  name: "Game Room",     icon: "gamepad",
            img: "images/sala-de-juego.jpg",
            desc: "Fun and entertainment for all ages." },
          { tipo: "icono", name: "Coworking",     icon: "laptop"     },
          { tipo: "icono", name: "Cinema Room",   icon: "film"       },
          { tipo: "icono", name: "Bar & Restaurants", icon: "cocktail" },
          { tipo: "icono", name: "Gym",           icon: "gym"        },
        ],
      },
      rooftop: {
        titulo: "Rooftop",
        items: [
          { tipo: "foto", name: "Point View", icon: "eye",
            img: "images/vista-point.jpg",
            desc: "360° panorama of Casco Antiguo and the modern skyline." },
          { tipo: "foto", name: "Zipline", icon: "activity",
            img: "images/tirolesa.jpg",
            desc: "Feel the rush soaring above Panama City." },
          { tipo: "icono", name: "Restaurants", icon: "restaurant" },
        ],
      },
    },

    // ── Emergency ───────────────────────────
    emergency: [
      {
        name:   "National Police",
        desc:   "To report crimes, theft, or any security incident.",
        number: "104"
      },
      {
        name:   "Fire Department (Bomberos)",
        desc:   "Fires, rescues, and all types of emergencies.",
        number: "103"
      },
      {
        name:   "Tourism Police",
        desc:   "Specialized assistance for visitors and tourists in Panama.",
        number: "(+507) 211-0366"
      },
      {
        name:   "SUME — Emergency Management System",
        desc:   "Unified number for medical emergencies, disasters, and coordination.",
        number: "911"
      },
    ],

    // ── Tourism places ───────────────────────
    places: [
      {
        nombre:  "Panama Viejo",
        region:  "ciudad",
        precio:  "$17.00",
        horario: "Tuesday to Sunday: 8:30 am – 5:30 pm (Ticket office closes 4:30 pm)",
        detalles:"Historic ruins of the first Spanish city on the Pacific coast.",
        img:     "images/panama-la-vieja.jpg"
      },
      {
        nombre:  "Biomuseum",
        region:  "ciudad",
        precio:  "$20.00",
        horario: "Tue–Fri: 9:00 am – 3:00 pm | Sat–Sun: 10:00 am – 3:00 pm",
        detalles:"Natural history museum designed by Frank Gehry explaining how Panama changed the world.",
        img:     "images/biomuseo.jpg"
      },
      {
        nombre:  "Panama Canal",
        region:  "ciudad",
        precio:  "$17.22",
        horario: "Monday to Sunday: 8:00 am – 5:00 pm (Ticket office until 3:30 pm)",
        detalles:"Miraflores Visitors Center to watch ships transit through the canal.",
        img:     "images/canal-de-panama.jpg"
      },
      {
        nombre:  "Metropolitan Natural Park",
        region:  "ciudad",
        precio:  "Adults: $5.00 | Children (3-17): $3.00",
        horario: "Monday to Sunday: 7:00 am – 4:30 pm",
        detalles:"A tropical forest in the heart of the city, ideal for hiking and birdwatching.",
        img:     "images/parque-metropolitano.jpg"
      },
      {
        nombre:  "Amador Causeway",
        region:  "ciudad",
        precio:  "Free Admission",
        horario: "Monday to Sunday: All day",
        detalles:"Maritime road connecting three islands — perfect for walking, cycling and ship-watching.",
        img:     "images/calzada-de-amador.jpg"
      },
      {
        nombre:  "Ancón Hill",
        region:  "ciudad",
        precio:  "Free Admission",
        horario: "Monday to Sunday: 6:00 am – 6:00 pm",
        detalles:"The highest point in the city, offering spectacular panoramic views and lush nature.",
        img:     "images/cerro-ancon.webp"
      },
      {
        nombre:  "Casco Viejo (Old Quarter)",
        region:  "ciudad",
        precio:  "Free Admission",
        horario: "Monday to Sunday: All day",
        detalles:"Historic colonial neighborhood full of plazas, churches, restaurants, and nightlife.",
        img:     "images/casco-antiguo.webp"
      },
      {
        nombre:  "Mi Pueblito",
        region:  "ciudad",
        precio:  "$3.00",
        horario: "Monday to Sunday: 8:00 am – 4:00 pm",
        detalles:"Replica of traditional Panamanian villages: Afro-Caribbean, peasant, and indigenous.",
        img:     "images/mi-pueblito.webp"
      },
      {
        nombre:  "Soberanía National Park",
        region:  "ciudad",
        precio:  "$5.00",
        horario: "Monday to Sunday: 8:00 am – 5:00 pm",
        detalles:"Home of the Camino de Cruces trail and Pipeline Road — pure nature at its best.",
        img:     "images/parque-soberania.jpg"
      },
      {
        nombre:  "Bocas del Toro",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"Caribbean archipelago famous for its beaches, surfing, and marine biodiversity.",
        img:     "images/bocas-del-toro.webp"
      },
      {
        nombre:  "Chiriquí",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"Highlands featuring Barú Volcano, Boquete, geisha coffee, and a cool mountain climate.",
        img:     "images/chiriqui.jpg"
      },
      {
        nombre:  "El Valle de Antón",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"A charming town nestled inside the crater of an ancient extinct volcano.",
        img:     "images/el-valle.jpg"
      },
      {
        nombre:  "San Blas",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"Paradise islands managed by the indigenous Guna Yala community.",
        img:     "images/san-blas.avif"
      },
    ],
  },
};

// ── ESTADO ────────────────────────────────────────────────────
let lang   = 'es';
let filter = 'all';

// ── HELPERS ───────────────────────────────────────────────────
const t = key => T[lang][key] ?? key;

// ── RENDER: TARJETAS DE TURISMO ───────────────────────────────
function renderTurismo() {
  const grid   = document.getElementById('tourismGrid');
  const places = T[lang].places;

  grid.innerHTML = places.map(p => {
    const oculta     = (filter !== 'all' && filter !== p.region) ? 'oculta' : '';
    const regionText = t(`card.region.${p.region}`);

    return `
      <article class="card ${oculta}" data-region="${p.region}">
        <img class="card-img" src="${p.img}" alt="${p.nombre}" loading="lazy" />
        <div class="card-overlay"></div>
        <div class="card-body">
          <span class="card-region">${regionText}</span>
          <h3 class="card-name">${p.nombre}</h3>
          <p class="card-details">${p.detalles}</p>
          <div class="card-meta">
            <div class="card-meta-row">
              <span>🕐</span>
              <span>${t('card.schedule')}: ${p.horario}</span>
            </div>
            <div class="card-meta-row">
              <span>💰</span>
              <span class="card-price">${p.precio}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ── RENDER: AMENIDADES (3 sub-niveles) ────────────────────────
function renderAmenidades() {
  const container = document.getElementById('amenitiesContainer');
  const data = T[lang].amenidades;
  const niveles = [data.plantaBaja, data.areaSocial, data.rooftop];

  container.innerHTML = niveles.map(nivel => `
    <div class="amenity-section">
      <div class="amenity-section-header">
        <h3 class="amenity-section-title">${nivel.titulo}</h3>
      </div>
      <div class="amenities-grid">
        ${nivel.items.map(item => {
          if (item.tipo === 'foto') {
            return `
              <div class="amenity-card-featured">
                <img src="${item.img}" alt="${item.name}" loading="lazy" />
                <div class="amenity-overlay"></div>
                <div class="amenity-badge">${ICONS[item.icon] || ''}</div>
                <div class="amenity-featured-content">
                  <h4 class="amenity-featured-name">${item.name}</h4>
                  <p class="amenity-featured-desc">${item.desc}</p>
                </div>
              </div>
            `;
          }
          return `
            <div class="amenity-card">
              <div class="amenity-icon">${ICONS[item.icon] || ''}</div>
              <span class="amenity-name">${item.name}</span>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `).join('');
}

// ── RENDER: EMERGENCIAS ───────────────────────────────────────
function renderEmergencias() {
  const grid = document.getElementById('emergencyGrid');
  grid.innerHTML = T[lang].emergency.map(e => `
    <div class="emergency-card">
      <div class="emergency-top">
        <div class="emergency-phone-icon">${ICONS.phone}</div>
        <h3 class="emergency-name">${e.name}</h3>
      </div>
      <p class="emergency-desc">${e.desc}</p>
      <div class="emergency-number">${e.number}</div>
    </div>
  `).join('');
}

// ── APLICAR TRADUCCIONES ESTÁTICAS ───────────────────────────
function applyStatic() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (val) el.textContent = val;
  });
  document.documentElement.lang = lang;
  document.title = lang === 'es'
    ? 'Guía de Turismo — Panamá'
    : 'Tourism Guide — Panama';
}

// ── RENDER COMPLETO ───────────────────────────────────────────
function render() {
  applyStatic();
  renderTurismo();
  renderAmenidades();
  renderEmergencias();
}

// ── BOTÓN DE IDIOMA ───────────────────────────────────────────
document.getElementById('langToggle').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  document.getElementById('langLabel').textContent = lang === 'es' ? 'EN' : 'ES';
  render();
});

// ── FILTROS ───────────────────────────────────────────────────
document.querySelectorAll('.filtro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('activo'));
    btn.classList.add('activo');
    filter = btn.dataset.filter;
    renderTurismo();
  });
});

// ── MENÚ HAMBURGUESA ──────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

hamburger.addEventListener('click', () => navMobile.classList.toggle('open'));
navMobile.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navMobile.classList.remove('open'))
);

// ── INICIALIZAR ───────────────────────────────────────────────
render();