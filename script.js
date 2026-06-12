/* ===================================================
   PANAMÁ TOURIST GUIDE — script.js
   Bilingual (ES/EN) + Region Filter
   =================================================== */

// ─── DATA ────────────────────────────────────────────
const data = {
  emergencias: {
    titulo: { es: "Números de Emergencia", en: "Emergency Numbers" },
    lista: [
      { nombre: { es: "Policía Nacional",       en: "National Police"        }, numero: "104"      },
      { nombre: { es: "Urgencias Médicas (SUME)",en: "Medical Emergencies"   }, numero: "911"      },
      { nombre: { es: "Policía de Turismo",      en: "Tourism Police"        }, numero: "211-0366" },
      { nombre: { es: "Bomberos",                en: "Fire Department"       }, numero: "103"      }
    ]
  },
amenidades: [
  { icono: "🏊", nombre: { es: "Piscina",         en: "Swimming Pool" }, desc: { es: "Disfruta de la piscina infinita al aire libre con vista panorámica.", en: "Enjoy the outdoor infinity pool with panoramic views."        } },
  { icono: "🍸", nombre: { es: "Bar",              en: "Bar"           }, desc: { es: "Variedad de cocteles, tragos y bebidas.",                             en: "A variety of cocktails, drinks and beverages."               } },
  { icono: "🛒", nombre: { es: "Supermercado",     en: "Supermarket"   }, desc: { es: "Productos frescos y variados para tu despensa.",                      en: "Fresh and varied products for your pantry."                  } },
  { icono: "🏋️", nombre: { es: "Gimnasio",         en: "Gym"           }, desc: { es: "Equipos modernos disponibles para tus entrenamientos.",              en: "Modern equipment available for your workouts."               } },
  { icono: "🎱", nombre: { es: "Sala de juegos",   en: "Game Room"     }, desc: { es: "Entretenimiento para toda la familia.",                               en: "Entertainment for the whole family."                        } },
  { icono: "🍽️", nombre: { es: "Restaurantes",     en: "Restaurants"   }, desc: { es: "Cocina local e internacional con ingredientes frescos.",              en: "Local and international cuisine with fresh ingredients."     } }
],
  lugares: [
    {
      nombre:   { es: "Panamá la Vieja",               en: "Panama Viejo"                },
      region:   "ciudad",
      precio:   { es: "$17.00",                         en: "$17.00"                      },
      horario:  { es: "Martes a Domingo: 8:30 am a 5:30 pm (Taquilla hasta 4:30 pm)",
                  en: "Tuesday to Sunday: 8:30 am to 5:30 pm (Tickets until 4:30 pm)"    },
      detalles: { es: "Ruinas históricas de la primera ciudad española en el Pacífico.",
                  en: "Historical ruins of the first Spanish city on the Pacific."        },
      imagen: "./images/panama-vieja.jpg.jpg"
    },
    {
      nombre:   { es: "Biomuseo",                      en: "Biomuseo"                    },
      region:   "ciudad",
      precio:   { es: "$20.00",                         en: "$20.00"                      },
      horario:  { es: "Mar-Vie: 9:00 am a 3:00 pm | Sáb-Dom: 10:00 am a 3:00 pm",
                  en: "Tue-Fri: 9:00 am to 3:00 pm | Sat-Sun: 10:00 am to 3:00 pm"      },
      detalles: { es: "Museo de historia natural diseñado por Frank Gehry.",
                  en: "Natural history museum designed by Frank Gehry."                   },
      imagen: "./images/biomuseo.jpg.jpg"
    },
    {
      nombre:   { es: "Canal de Panamá",               en: "Panama Canal"                },
      region:   "ciudad",
      precio:   { es: "$17.22",                         en: "$17.22"                      },
      horario:  { es: "Lunes a Domingo: 8:00 am a 5:00 pm (Taquilla hasta 3:30 pm)",
                  en: "Monday to Sunday: 8:00 am to 5:00 pm (Tickets until 3:30 pm)"     },
      detalles: { es: "Centro de visitantes de Miraflores para ver las esclusas.",
                  en: "Miraflores Visitor Center to watch the locks."                     },
     imagen: "./images/canal.jpg.jpg"
    },
    {
      nombre:   { es: "Parque Natural Metropolitano",  en: "Metropolitan Natural Park"   },
      region:   "ciudad",
      precio:   { es: "Adultos: $5.00 | Niños: $3.00", en: "Adults: $5.00 | Children: $3.00" },
      horario:  { es: "Lunes a Domingo: 7:00 am a 4:30 pm",
                  en: "Monday to Sunday: 7:00 am to 4:30 pm"                              },
      detalles: { es: "Sendero ecológico y naturaleza en plena ciudad.",
                  en: "Ecological trails and wildlife right in the city."                  },
      imagen: "./images/parque-metropolitano.jpg.jpg"
    },
    {
      nombre:   { es: "Calzada de Amador",             en: "Amador Causeway"             },
      region:   "ciudad",
      precio:   { es: "Entrada Gratuita",               en: "Free Admission"              },
      horario:  { es: "Lunes a Domingo: Todo el día",   en: "Monday to Sunday: All day"   },
      detalles: { es: "Calzada marítima perfecta para caminar y ver barcos.",
                  en: "Marine causeway perfect for walking and ship watching."            },
     imagen: "./images/calzada-amador.jpg.jpg"
    },
    {
      nombre:   { es: "Cerro Ancón",                   en: "Ancon Hill"                  },
      region:   "ciudad",
      precio:   { es: "Entrada Gratuita",               en: "Free Admission"              },
      horario:  { es: "Lunes a Domingo: 6:00 am a 6:00 pm",
                  en: "Monday to Sunday: 6:00 am to 6:00 pm"                              },
      detalles: { es: "El punto más alto de la ciudad con vistas panorámicas.",
                  en: "The highest point in the city with panoramic views."               },
      imagen: "./images/cerro-ancon.jpg.webp"
    },
    {
      nombre:   { es: "Casco Antiguo",                 en: "Casco Antiguo"               },
      region:   "ciudad",
      precio:   { es: "Entrada Gratuita",               en: "Free Admission"              },
      horario:  { es: "Lunes a Domingo: Todo el día",   en: "Monday to Sunday: All day"   },
      detalles: { es: "Barrio colonial histórico lleno de cultura y restaurantes.",
                  en: "Historic colonial neighborhood full of culture and restaurants."   },
      imagen: "./images/casco-antiguo.jpg.webp"
    },
    {
      nombre:   { es: "Mi Pueblito",                   en: "Mi Pueblito"                 },
      region:   "ciudad",
      precio:   { es: "$3.00",                          en: "$3.00"                       },
      horario:  { es: "Lunes a Domingo: 8:00 am a 4:00 pm",
                  en: "Monday to Sunday: 8:00 am to 4:00 pm"                              },
      detalles: { es: "Réplicas de pueblos tradicionales panameños.",
                  en: "Replicas of traditional Panamanian villages."                      },
      imagen: "./images/mi-pueblito.jpg.webp"
    },
    {
      nombre:   { es: "Parque Nacional Soberanía",     en: "Soberania National Park"     },
      region:   "ciudad",
      precio:   { es: "$5.00",                          en: "$5.00"                       },
      horario:  { es: "Lunes a Domingo: 8:00 am a 5:00 pm",
                  en: "Monday to Sunday: 8:00 am to 5:00 pm"                              },
      detalles: { es: "Bosque tropical denso ideal para observar aves.",
                  en: "Dense rainforest ideal for birdwatching."                          },
     imagen: "./images/parque-soberania.jpg.jpg"
    },
    {
      nombre:   { es: "Bocas del Toro",                en: "Bocas del Toro"              },
      region:   "provincias",
      precio:   { es: "Tours disponibles",              en: "Tours available"             },
      horario:  { es: "Destino Caribeño",               en: "Caribbean Destination"       },
      detalles: { es: "Archipiélago caribeño famoso por playas cristalinas y vida nocturna.",
                  en: "Caribbean archipelago famous for crystal clear beaches and nightlife." },
      imagen: "./images/bocas.jpg.webp"
    },
    {
      nombre:   { es: "Chiriquí",                      en: "Chiriqui"                    },
      region:   "provincias",
      precio:   { es: "Tours disponibles",              en: "Tours available"             },
      horario:  { es: "Tierras Altas",                  en: "Highlands"                   },
      detalles: { es: "Clima fresco, hogar del majestuoso Volcán Barú y rutas del café.",
                  en: "Cool weather, home to the majestic Baru Volcano and coffee trails." },
      imagen: "./images/chiriqui.jpg.jpg"
    },
    {
      nombre:   { es: "El Valle de Antón",             en: "El Valle de Anton"           },
      region:   "provincias",
      precio:   { es: "Tours disponibles",              en: "Tours available"             },
      horario:  { es: "Cráter Volcánico",               en: "Volcanic Crater"             },
      detalles: { es: "Pueblo pintoresco en un volcán extinto, clima fresco y senderos.",
                  en: "Picturesque town inside an extinct volcano, cool weather and trails." },
      imagen: "./images/valle-anton.jpg.jpg"
    },
    {
      nombre:   { es: "San Blas",                      en: "San Blas"                    },
      region:   "provincias",
      precio:   { es: "Tours disponibles",              en: "Tours available"             },
      horario:  { es: "Islas Guna Yala",                en: "Guna Yala Islands"           },
      detalles: { es: "Islas paradisíacas de arena blanca y aguas turquesas del Caribe.",
                  en: "Paradisiacal islands with white sand and turquoise Caribbean waters." },
      imagen: "./images/san-blas.jpg.avif"
    }
  ]
};

// ─── TEXTOS FIJOS DE LA UI ────────────────────────────
const ui = {
  eyebrow:        { es: "Guía de Viaje",           en: "Travel Guide"                  },
  heroSub:        { es: "Descubre lo mejor de",    en: "Discover the best of"          },
  heroHeading:    { es: "Panamá, puente del Mundo",en: "The Crossroads of the World"   },
  btnCiudad:      { es: "Ciudad de Panamá",        en: "Panama City"                   },
  btnProvincias:  { es: "Provincias",              en: "Provinces"                     },
  emergEyebrow:   { es: "Asistencia",              en: "Assistance"                    },
  emergTitle:     { es: "Números de Emergencia",   en: "Emergency Numbers"             },
  footer:         { es: "Diseñado para viajeros en Panamá · Información sujeta a cambios",
                    en: "Designed for travelers in Panama · Information subject to change" },
   amenidadesTitulo:    { es: "Nuestras amenidades",                en: "Our Amenities"                       },
amenidadesSubtitulo: { es: "Todo lo que necesitas, en un solo lugar", en: "Everything you need, in one place" },
   amenidadesTitulo:    { es: "Nuestras amenidades",                en: "Our Amenities"                       },
amenidadesSubtitulo: { es: "Todo lo que necesitas, en un solo lugar", en: "Everything you need, in one place" },
  langSwitch:     { es: "EN", en: "ES" } // lo que muestra el botón (el idioma al que va a cambiar)
};

// ─── ESTADO GLOBAL ────────────────────────────────────
let idiomaActual = 'es';
let regionActual = 'ciudad';

// ─── HELPERS ─────────────────────────────────────────
const t = (obj) => obj[idiomaActual] ?? obj['es'];
const $ = (id)  => document.getElementById(id);

// ─── RENDER PRINCIPAL ─────────────────────────────────
function renderizarInterfaz() {
  renderizarTextosFijos();
  renderizarTarjetas();
  renderizarEmergencias();
  renderizarAmenidades();
    renderizarAmenidades(); // 
}

// Actualiza todos los textos estáticos del HTML
function renderizarTextosFijos() {
  $('txt-eyebrow').textContent       = t(ui.eyebrow);
  $('txt-hero-sub').textContent      = t(ui.heroSub);
  $('txt-hero-heading').textContent  = t(ui.heroHeading);
  $('txt-ciudad').textContent        = t(ui.btnCiudad);
  $('txt-provincias').textContent    = t(ui.btnProvincias);
  $('txt-emerg-eyebrow').textContent = t(ui.emergEyebrow);
  $('txt-emerg-title').textContent   = t(ui.emergTitle);
  $('txt-footer').textContent        = t(ui.footer);
  $('langLabel').textContent         = t(ui.langSwitch);

  // Actualiza lang attribute del <html>
  document.documentElement.lang = idiomaActual;
}

// Dibuja las tarjetas filtradas por región en el idioma activo
function renderizarTarjetas() {
  const grid = $('cardsGrid');
  const lugaresFiltrados = data.lugares.filter(l => l.region === regionActual);

  if (lugaresFiltrados.length === 0) {
    grid.innerHTML = `<div class="empty-state"><p>${idiomaActual === 'es' ? 'No hay lugares disponibles.' : 'No places available.'}</p></div>`;
    return;
  }

  grid.innerHTML = lugaresFiltrados.map(lugar => `
    <article class="card"
      style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.75)), url('${lugar.imagen}');"
      role="img"
      aria-label="${t(lugar.nombre)}"
    >
      <div class="card-body">
        <span class="card-price">${t(lugar.precio)}</span>
        <h3 class="card-name">${t(lugar.nombre)}</h3>
        <p class="card-detail">${t(lugar.detalles)}</p>
        <p class="card-schedule">${t(lugar.horario)}</p>
      </div>
    </article>
  `).join('');
}

// Dibuja la lista de emergencias en el idioma activo
function renderizarEmergencias() {
  const lista = $('emergencyList');

  lista.innerHTML = data.emergencias.lista.map(item => `
    <li class="emergency-item">
      <span class="emergency-name">${t(item.nombre)}</span>
      <a class="emergency-link" href="tel:${item.numero}" aria-label="Llamar a ${t(item.nombre)}">
        ${item.numero}
      </a>
    </li>
  `).join('');
}
// Render amenidades bilingüe
function renderizarAmenidades() {
  $('txt-amen-titulo').textContent    = t(ui.amenidadesTitulo);
  $('txt-amen-subtitulo').textContent = t(ui.amenidadesSubtitulo);

  $('amenidadesGrid').innerHTML = data.amenidades.map(a => `
    <div class="amenidad-card">
      <div class="amenidad-icono">${a.icono}</div>
      <h3 class="amenidad-nombre">${t(a.nombre)}</h3>
      <p class="amenidad-desc">${t(a.desc)}</p>
    </div>
  `).join('');
}
}
// ─── EVENTOS ──────────────────────────────────────────

// Toggle de idioma
$('langToggle').addEventListener('click', () => {
  idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
  renderizarInterfaz();
});

// Filtros de región
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    regionActual = btn.dataset.region;

    // Actualizar estilo activo
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    renderizarTarjetas();
  });
});

// ─── INICIO ───────────────────────────────────────────
renderizarInterfaz();
