/* ============================================================
   PANAMA TOURISM SITE — script.js
   Bilingual (ES / EN) with full translation object.
   Handles: language toggle, tourism cards, amenity cards,
            emergency cards, filter bar, hamburger menu.
============================================================ */

// ── TRANSLATION OBJECT ──────────────────────────────────────
const translations = {
  es: {
    // Navbar
    "nav.logo":       "Descubre Panamá",
    "nav.tourism":    "Turismo",
    "nav.amenities":  "Amenidades",
    "nav.emergency":  "Emergencias",

    // Hero
    "hero.eyebrow":   "Destino Centroamérica",
    "hero.title":     "La encrucijada del mundo",
    "hero.subtitle":  "Dos océanos. Una ciudad. Mil historias que descubrir.",
    "hero.cta":       "Explorar destinos",

    // Tourism section
    "tourism.eyebrow": "Lugares imperdibles",
    "tourism.title":   "Sitios de Turismo",
    "tourism.desc":    "Desde ruinas coloniales hasta archipiélagos vírgenes, Panamá lo tiene todo.",

    // Filter buttons
    "filter.all":       "Todos",
    "filter.city":      "Ciudad",
    "filter.provinces": "Provincias",

    // Amenities section
    "amenities.eyebrow": "Tu comodidad, primero",
    "amenities.title":   "Amenidades",
    "amenities.desc":    "Todo lo que necesitas para una estancia perfecta.",

    // Emergency section
    "emergency.eyebrow": "Seguridad primero",
    "emergency.title":   "Números de Emergencia",
    "emergency.desc":    "Guarda estos números antes de explorar. Tu seguridad es lo más importante.",

    // Footer
    "footer.copy": "© 2025 Descubre Panamá. Hecho con ❤️ para viajeros curiosos.",

    // Card labels
    "card.schedule":  "Horario",
    "card.price":     "Precio",
    "card.region.ciudad":    "Ciudad de Panamá",
    "card.region.provincias": "Provincias",

    // Amenities
    amenities: [
      { key: "supermarket", name: "Supermercado",    icon: "cart" },
      { key: "gaming",      name: "Sala de Juegos",  icon: "gamepad" },
      { key: "bar",         name: "Bar",             icon: "cocktail" },
      { key: "restaurant",  name: "Restaurantes",    icon: "restaurant" },
      { key: "pool",        name: "Piscina",          icon: "pool" },
      { key: "gym",         name: "Gimnasio",         icon: "gym" },
    ],

    // Emergency numbers
    emergency: [
      {
        icon: "🚔",
        name: "Policía Nacional",
        desc: "Para reportar delitos, robos o cualquier situación de inseguridad.",
        number: "104"
      },
      {
        icon: "🚒",
        name: "Benemérito Cuerpo de Bomberos",
        desc: "Incendios, rescates y emergencias de todo tipo.",
        number: "103"
      },
      {
        icon: "🏖️",
        name: "Policía de Turismo",
        desc: "Asistencia especializada para visitantes y turistas en Panamá.",
        number: "(+507) 211-0366"
      },
      {
        icon: "🏥",
        name: "SUME — Sistema Único de Manejo de Emergencias",
        desc: "Número único de emergencias médicas, desastres y coordinación.",
        number: "911"
      }
    ],

    // Tourism places
    places: [
      {
        nombre:  "Panamá la Vieja",
        region:  "ciudad",
        precio:  "$17.00",
        horario: "Martes a Domingo: 8:30 am – 5:30 pm (Taquilla cierra 4:30 pm)",
        detalles:"Ruinas históricas de la primera ciudad española en el Pacífico.",
        img:     "imagenes/panama-la-vieja.jpg"
      },
      {
        nombre:  "Biomuseo",
        region:  "ciudad",
        precio:  "$20.00",
        horario: "Mar–Vie: 9:00 am – 3:00 pm | Sáb–Dom: 10:00 am – 3:00 pm",
        detalles:"Museo de historia natural diseñado por Frank Gehry que explica cómo Panamá cambió el mundo.",
        img:     "imagenes/biomuseo.jpg"
      },
      {
        nombre:  "Canal de Panamá",
        region:  "ciudad",
        precio:  "$17.22",
        horario: "Lunes a Domingo: 8:00 am – 5:00 pm (Taquilla hasta 3:30 pm)",
        detalles:"Centro de visitantes de Miraflores para ver el tránsito de los barcos.",
        img:     "imagenes/canal-de-panama.jpg"
      },
      {
        nombre:  "Parque Natural Metropolitano",
        region:  "ciudad",
        precio:  "Adultos: $5.00 | Niños (3-17): $3.00",
        horario: "Lunes a Domingo: 7:00 am – 4:30 pm",
        detalles:"Un bosque tropical en plena ciudad, ideal para senderismo y avistamiento de aves.",
        img:     "imagenes/parque-metropolitano.jpg"
      },
      {
        nombre:  "Calzada de Amador",
        region:  "ciudad",
        precio:  "Entrada Gratuita",
        horario: "Lunes a Domingo: Todo el día",
        detalles:"Vía marítima que conecta tres islas, perfecta para caminar, andar en bicicleta y ver los barcos.",
        img:     "imagenes/calzada-de-amador.jpg"
      },
      {
        nombre:  "Cerro Ancón",
        region:  "ciudad",
        precio:  "Entrada Gratuita",
        horario: "Lunes a Domingo: 6:00 am – 6:00 pm",
        detalles:"El punto más alto de la ciudad con vistas panorámicas espectaculares y naturaleza.",
        img:     "imagenes/cerro-ancon.webp"
      },
      {
        nombre:  "Casco Antiguo",
        region:  "ciudad",
        precio:  "Entrada Gratuita",
        horario: "Lunes a Domingo: Todo el día",
        detalles:"Barrio colonial histórico lleno de plazas, iglesias, restaurantes y vida nocturna.",
        img:     "imagenes/casco-antiguo.webp"
      },
      {
        nombre:  "Mi Pueblito",
        region:  "ciudad",
        precio:  "$3.00",
        horario: "Lunes a Domingo: 8:00 am – 4:00 pm",
        detalles:"Réplica de pueblos tradicionales panameños: afroantillano, campesino e indígena.",
        img:     "imagenes/mi-pueblito.webp"
      },
      {
        nombre:  "Parque Nacional Soberanía",
        region:  "ciudad",
        precio:  "$5.00",
        horario: "Lunes a Domingo: 8:00 am – 5:00 pm",
        detalles:"Hogar del famoso Camino de Cruces y Pipeline Road, ideal para observar naturaleza pura.",
        img:     "imagenes/parque-soberania.jpg"
      },
      {
        nombre:  "Bocas del Toro",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Archipiélago caribeño famoso por sus playas, surf y biodiversidad marina.",
        img:     "imagenes/bocas-del-toro.webp"
      },
      {
        nombre:  "Chiriquí",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Tierras altas con el Volcán Barú, Boquete, el café geisha y un clima fresco.",
        img:     "imagenes/chiriqui.jpg"
      },
      {
        nombre:  "El Valle de Antón",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Un pueblo hermoso ubicado dentro del cráter de un volcán extinto.",
        img:     "imagenes/el-valle.jpg"
      },
      {
        nombre:  "San Blas",
        region:  "provincias",
        precio:  "Ver opciones de tours",
        horario: "Destino Turístico",
        detalles:"Islas paradisíacas manejadas por la comunidad indígena Guna Yala.",
        img:     "imagenes/san-blas.avif"
      }
    ]
  },

  // ── ENGLISH ───────────────────────────────────────────────
  en: {
    "nav.logo":       "Discover Panama",
    "nav.tourism":    "Tourism",
    "nav.amenities":  "Amenities",
    "nav.emergency":  "Emergency",

    "hero.eyebrow":   "Central America's Gem",
    "hero.title":     "The crossroads of the world",
    "hero.subtitle":  "Two oceans. One city. A thousand stories to discover.",
    "hero.cta":       "Explore destinations",

    "tourism.eyebrow": "Must-see places",
    "tourism.title":   "Tourism Sites",
    "tourism.desc":    "From colonial ruins to pristine archipelagos, Panama has it all.",

    "filter.all":       "All",
    "filter.city":      "City",
    "filter.provinces": "Provinces",

    "amenities.eyebrow": "Your comfort, first",
    "amenities.title":   "Amenities",
    "amenities.desc":    "Everything you need for a perfect stay.",

    "emergency.eyebrow": "Safety first",
    "emergency.title":   "Emergency Numbers",
    "emergency.desc":    "Save these numbers before you explore. Your safety matters most.",

    "footer.copy": "© 2025 Discover Panama. Made with ❤️ for curious travelers.",

    "card.schedule": "Hours",
    "card.price":    "Price",
    "card.region.ciudad":    "Panama City",
    "card.region.provincias": "Provinces",

    amenities: [
      { key: "supermarket", name: "Supermarket",  icon: "cart" },
      { key: "gaming",      name: "Game Room",    icon: "gamepad" },
      { key: "bar",         name: "Bar",           icon: "cocktail" },
      { key: "restaurant",  name: "Restaurants",   icon: "restaurant" },
      { key: "pool",        name: "Pool",           icon: "pool" },
      { key: "gym",         name: "Gym",            icon: "gym" },
    ],

    emergency: [
      {
        icon: "🚔",
        name: "National Police",
        desc: "Report crimes, theft, or any security situation.",
        number: "104"
      },
      {
        icon: "🚒",
        name: "Fire Department (Bomberos)",
        desc: "Fires, rescues, and all types of emergencies.",
        number: "103"
      },
      {
        icon: "🏖️",
        name: "Tourism Police",
        desc: "Specialized assistance for visitors and tourists in Panama.",
        number: "(+507) 211-0366"
      },
      {
        icon: "🏥",
        name: "SUME — Emergency Management System",
        desc: "Unified number for medical emergencies, disasters and coordination.",
        number: "911"
      }
    ],

    places: [
      {
        nombre:  "Panama Viejo",
        region:  "ciudad",
        precio:  "$17.00",
        horario: "Tuesday to Sunday: 8:30 am – 5:30 pm (Ticket office closes 4:30 pm)",
        detalles:"Historic ruins of the first Spanish city on the Pacific coast.",
        img:     "imagenes/panama-la-vieja.jpg"
      },
      {
        nombre:  "Biomuseum",
        region:  "ciudad",
        precio:  "$20.00",
        horario: "Tue–Fri: 9:00 am – 3:00 pm | Sat–Sun: 10:00 am – 3:00 pm",
        detalles:"Natural history museum designed by Frank Gehry that explains how Panama changed the world.",
        img:     "imagenes/biomuseo.jpg"
      },
      {
        nombre:  "Panama Canal",
        region:  "ciudad",
        precio:  "$17.22",
        horario: "Monday to Sunday: 8:00 am – 5:00 pm (Ticket office until 3:30 pm)",
        detalles:"Miraflores Visitors Center to watch ship transits through the canal.",
        img:     "imagenes/canal-de-panama.jpg"
      },
      {
        nombre:  "Metropolitan Natural Park",
        region:  "ciudad",
        precio:  "Adults: $5.00 | Children (3-17): $3.00",
        horario: "Monday to Sunday: 7:00 am – 4:30 pm",
        detalles:"A tropical forest right in the city — ideal for hiking and birdwatching.",
        img:     "imagenes/parque-metropolitano.jpg"
      },
      {
        nombre:  "Amador Causeway",
        region:  "ciudad",
        precio:  "Free Admission",
        horario: "Monday to Sunday: All day",
        detalles:"Maritime road connecting three islands, perfect for walking, cycling, and watching ships.",
        img:     "imagenes/calzada-de-amador.jpg"
      },
      {
        nombre:  "Ancón Hill",
        region:  "ciudad",
        precio:  "Free Admission",
        horario: "Monday to Sunday: 6:00 am – 6:00 pm",
        detalles:"The city's highest point with spectacular panoramic views and lush nature.",
        img:     "imagenes/cerro-ancon.jpg"
      },
      {
        nombre:  "Casco Viejo (Old Quarter)",
        region:  "ciudad",
        precio:  "Free Admission",
        horario: "Monday to Sunday: All day",
        detalles:"Historic colonial neighborhood full of plazas, churches, restaurants, and nightlife.",
        img:     "imagenes/casco-antiguo.jpg"
      },
      {
        nombre:  "Mi Pueblito",
        region:  "ciudad",
        precio:  "$3.00",
        horario: "Monday to Sunday: 8:00 am – 4:00 pm",
        detalles:"Replica of traditional Panamanian villages: Afro-Caribbean, peasant, and indigenous.",
        img:     "imagenes/mi-pueblito.jpg"
      },
      {
        nombre:  "Soberanía National Park",
        region:  "ciudad",
        precio:  "$5.00",
        horario: "Monday to Sunday: 8:00 am – 5:00 pm",
        detalles:"Home of the famous Camino de Cruces trail and Pipeline Road — pure nature at its best.",
        img:     "imagenes/parque-soberania.jpg"
      },
      {
        nombre:  "Bocas del Toro",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"Caribbean archipelago famous for its beaches, surfing, and marine biodiversity.",
        img:     "imagenes/bocas-del-toro.jpg"
      },
      {
        nombre:  "Chiriquí",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"Highlands featuring Barú Volcano, Boquete, geisha coffee, and a cool mountain climate.",
        img:     "imagenes/chiriqui.jpg"
      },
      {
        nombre:  "El Valle de Antón",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"A charming village nestled inside the crater of an ancient extinct volcano.",
        img:     "imagenes/el-valle.jpg"
      },
      {
        nombre:  "San Blas",
        region:  "provincias",
        precio:  "See tour options",
        horario: "Tourist Destination",
        detalles:"Paradise islands managed by the indigenous Guna Yala community.",
        img:     "imagenes/san-blas.jpg"
      }
    ]
  }
};

// ── SVG ICONS ────────────────────────────────────────────────
const icons = {
  cart: `<svg viewBox="0 0 24 24"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  gamepad: `<svg viewBox="0 0 24 24"><rect x="2" y="6" width="20" height="12" rx="5" ry="5"/><path d="M6 12h4M8 10v4"/><circle cx="16" cy="11" r="1" fill="white"/><circle cx="18" cy="13" r="1" fill="white"/></svg>`,
  cocktail: `<svg viewBox="0 0 24 24"><path d="m8 22 4-11 4 11"/><path d="M5 3h14L12 13z"/><path d="M5 3a2 2 0 0 0-2 2c0 3 2.5 7 9 7s9-4 9-7a2 2 0 0 0-2-2"/></svg>`,
  restaurant: `<svg viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z"/></svg>`,
  pool: `<svg viewBox="0 0 24 24"><path d="M2 20c1.5-1.5 3-2.5 5-2.5s3.5 1 5 2.5 3.5 2.5 5 2.5"/><circle cx="12" cy="8" r="4"/><path d="M12 2v2M12 14v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
  gym: `<svg viewBox="0 0 24 24"><path d="M6.5 6.5h11M6.5 17.5h11M3 10.5h4v3H3zM17 10.5h4v3h-4zM7 12h10"/></svg>`,
};

// ── STATE ────────────────────────────────────────────────────
let currentLang = 'es';
let currentFilter = 'all';

// ── HELPERS ──────────────────────────────────────────────────
function t(key) {
  return translations[currentLang][key] || key;
}

function isFree(precio) {
  const lower = precio.toLowerCase();
  return lower.includes('gratuita') || lower.includes('free');
}

// ── RENDER TOURISM CARDS ─────────────────────────────────────
function renderTourismCards() {
  const grid = document.getElementById('tourismGrid');
  const places = translations[currentLang].places;

  grid.innerHTML = places.map(place => {
    const free = isFree(place.precio);
    const badgeClass = free ? 'card-badge free' : 'card-badge';
    const badgeText  = free ? (currentLang === 'es' ? 'Gratis' : 'Free') : place.precio;
    const regionLabel = t(`card.region.${place.region}`);
    const hidden = (currentFilter !== 'all' && currentFilter !== place.region) ? 'hidden' : '';

    return `
      <article class="card ${hidden}" data-region="${place.region}">
        <div class="card-img-wrap">
          <img src="${place.img}" alt="${place.nombre}" loading="lazy" onerror="this.style.background='#1B5E3B';this.src='';" />
          <span class="${badgeClass}">${badgeText}</span>
        </div>
        <div class="card-body">
          <span class="card-region">${regionLabel}</span>
          <h3 class="card-name">${place.nombre}</h3>
          <p class="card-details">${place.detalles}</p>
          <div class="card-meta">
            <div class="card-meta-row">
              <span class="card-meta-icon">🕐</span>
              <span>${t('card.schedule')}: ${place.horario}</span>
            </div>
            <div class="card-meta-row">
              <span class="card-meta-icon">💰</span>
              <span class="card-price">${place.precio}</span>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// ── RENDER AMENITY CARDS ─────────────────────────────────────
function renderAmenities() {
  const grid = document.getElementById('amenitiesGrid');
  const list = translations[currentLang].amenities;

  grid.innerHTML = list.map(item => `
    <div class="amenity-card">
      <div class="amenity-icon">
        ${icons[item.icon] || ''}
      </div>
      <span class="amenity-name">${item.name}</span>
    </div>
  `).join('');
}

// ── RENDER EMERGENCY CARDS ───────────────────────────────────
function renderEmergency() {
  const grid = document.getElementById('emergencyGrid');
  const list = translations[currentLang].emergency;

  grid.innerHTML = list.map(item => `
    <div class="emergency-card">
      <div class="emergency-icon-wrap">${item.icon}</div>
      <h3 class="emergency-name">${item.name}</h3>
      <p class="emergency-desc">${item.desc}</p>
      <div class="emergency-number">${item.number}</div>
    </div>
  `).join('');
}

// ── APPLY STATIC TRANSLATIONS ────────────────────────────────
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });
  document.documentElement.lang = currentLang;
  document.title = currentLang === 'es' ? 'Descubre Panamá' : 'Discover Panama';
}

// ── FULL RENDER ───────────────────────────────────────────────
function render() {
  applyTranslations();
  renderTourismCards();
  renderAmenities();
  renderEmergency();
}

// ── LANGUAGE TOGGLE ──────────────────────────────────────────
document.getElementById('langToggle').addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  document.getElementById('langLabel').textContent = currentLang === 'es' ? 'EN' : 'ES';
  render();
});

// ── FILTER BAR ───────────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;
    renderTourismCards();
  });
});

// ── HAMBURGER MENU ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// Close mobile nav on link click
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

// ── NAVBAR SCROLL EFFECT ─────────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(10, 22, 40, 0.99)';
  } else {
    navbar.style.background = 'rgba(10, 22, 40, 0.96)';
  }
}, { passive: true });

// ── INIT ─────────────────────────────────────────────────────
render();