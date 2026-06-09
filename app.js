// App — New York 2026
(function() {
  'use strict';

  const data = itineraryData;
  const links = linksData;

  // ==== COUNTDOWN ====
  function updateCountdown() {
    const start = new Date(data.startDate);
    const now = new Date();
    const diff = start - now;
    const cd = document.getElementById('cd-days');
    const ch = document.getElementById('cd-hours');
    const cm = document.getElementById('cd-mins');
    const label = document.getElementById('countdown-label');

    if (diff <= 0) {
      cd.textContent = '00';
      ch.textContent = '00';
      cm.textContent = '00';
      label.textContent = '🎉 In viaggio!';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    cd.textContent = String(days).padStart(2, '0');
    ch.textContent = String(hours).padStart(2, '0');
    cm.textContent = String(mins).padStart(2, '0');
    label.textContent = `Partenza ${data.startDate.split('T')[0]}`;
  }
  updateCountdown();
  setInterval(updateCountdown, 60000);

  // ==== TAB SWITCHING ====
  window.switchTab = function(tab) {
    const panels = ['home','itinerary','map','info'];
    panels.forEach(p => {
      document.getElementById('panel-' + p).style.display = p === tab ? '' : 'none';
      document.getElementById('tab-' + p).classList.toggle('active', p === tab);
      document.getElementById('nav-' + p).classList.toggle('active', p === tab);
    });
    if (tab === 'map') initMap();
  };

  // ==== HOME PHASES ====
  function renderHome() {
    const container = document.getElementById('home-phases');
    container.innerHTML = data.days.map((d, i) => `
      <div class="home-phase" onclick="switchTab('itinerary');showDay(${i})">
        <div class="home-phase-icon">${d.emoji}</div>
        <div class="home-phase-text">
          <div class="home-phase-title">Giorno ${d.day} — ${d.title}</div>
          <div class="home-phase-sub">${d.date}</div>
        </div>
        <span class="home-phase-arrow">→</span>
      </div>
    `).join('');
  }
  renderHome();

  // ==== DAY GRID ====
  function renderDayGrid() {
    const grid = document.getElementById('day-grid');
    grid.innerHTML = data.days.map((d, i) => `
      <div class="day-tile" onclick="showDay(${i})">
        <div class="day-tile-bg" style="background-color:${d.bgColor};background-image:url('photos/day${d.day}.jpg')"></div>
        <div class="day-tile-overlay"></div>
        <div class="day-tile-icon">${d.emoji}</div>
        <div class="day-tile-content">
          <div class="day-tile-num">Giorno ${d.day} • ${d.date}</div>
          <div class="day-tile-title">${d.title}</div>
        </div>
      </div>
    `).join('');
  }
  renderDayGrid();

  // ==== DAY PHOTOS ====
  const dayPhotos = {
    1: 'photos/day1.jpg',
    2: 'photos/day2.jpg',
    3: 'photos/day3.jpg',
    4: 'photos/day4.jpg',
    5: 'photos/day5.jpg',
    6: 'photos/day6.jpg',
    7: 'photos/day7.jpg',
    8: 'photos/day8.jpg',
    9: 'photos/day9.jpg'
  };

  // ==== DAY DETAIL =====
  window.showDay = function(idx) {
    const d = data.days[idx];
    const area = document.getElementById('day-detail-area');
    const grid = document.getElementById('day-grid');
    grid.style.display = 'none';
    area.style.display = 'block';

    const activityHtml = d.activities.map(a => {
      const linkHtml = a.link ? `<a href="${a.link}" target="_blank" rel="noopener" style="color:#00529B;font-weight:700;font-size:10px">🔗 Sito ufficiale</a>` : '';
      return `
        <div class="detail-box">
          <div class="detail-title">${a.time} — ${a.title}</div>
          <div class="detail-text">${a.description}</div>
          ${linkHtml ? `<div style="margin-top:6px">${linkHtml}</div>` : ''}
        </div>
      `;
    }).join('');

    area.innerHTML = `
      <button class="day-back-btn" onclick="closeDay()">← Torna all'itinerario</button>
      <div class="day-card expanded">
        <div class="day-header" style="background:${d.bgColor};color:#FFF;border-radius:14px 14px 0 0">
          <div class="day-badge" style="background:${d.bgColor}">G${d.day}</div>
          <div class="day-info">
            <div class="day-title" style="color:#FFF">${d.emoji} ${d.title}</div>
            <div class="day-meta" style="color:rgba(255,255,255,0.8)">${d.date}</div>
          </div>
        </div>
        <div class="day-detail-inner">
          <!-- Day photo -->
          ${(() => {
            const photo = dayPhotos[d.day];
            if (photo) {
              return '<div style="margin:0 -14px 12px;height:200px;overflow:hidden;border-radius:8px"><img src="' + photo + '" style="width:100%;height:100%;object-fit:cover" loading="lazy"></div>';
            }
            return '';
          })()}

          <div class="day-nyc-subtitle">${d.date}</div>

          <div class="stats-grid">
            <div class="stat-box"><div class="stat-label">🌅 Colazione</div><div class="stat-value blue">${d.highlights.colazione}</div></div>
            <div class="stat-box"><div class="stat-label">🌞 Pranzo</div><div class="stat-value gold">${d.highlights.pranzo}</div></div>
            <div class="stat-box"><div class="stat-label">🌙 Cena</div><div class="stat-value red">${d.highlights.cena}</div></div>
            <div class="stat-box"><div class="stat-label">🏨 Notte</div><div class="stat-value">${d.highlights.pernottamento}</div></div>
          </div>

          ${activityHtml}
        </div>
      </div>
    `;
  };

  window.closeDay = function() {
    document.getElementById('day-grid').style.display = 'grid';
    document.getElementById('day-detail-area').style.display = 'none';
    document.getElementById('day-detail-area').innerHTML = '';
  };

  // ==== MAP ====
  let mapInitialized = false;
  function initMap() {
    if (mapInitialized) return;
    const mapEl = document.getElementById('map');
    if (typeof L === 'undefined') {
      document.getElementById('map').style.display = 'none';
      document.getElementById('map-fallback').style.display = 'block';
      return;
    }
    try {
      const map = L.map('map').setView([40.7484, -73.9967], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 18
      }).addTo(map);

      const markers = [
        { lat: 40.7580, lng: -73.9855, name: 'Times Square', emoji: '⭐' },
        { lat: 40.7484, lng: -73.9856, name: 'Empire State Building', emoji: '🏢' },
        { lat: 40.7587, lng: -73.9787, name: 'Top of the Rock', emoji: '🌇' },
        { lat: 40.6892, lng: -74.0445, name: 'Statua della Libertà', emoji: '🗽' },
        { lat: 40.7128, lng: -74.0060, name: 'One World Observatory', emoji: '🌆' },
        { lat: 40.7829, lng: -73.9654, name: 'Central Park', emoji: '🌳' },
        { lat: 40.7794, lng: -73.9632, name: 'The Met', emoji: '🎨' },
        { lat: 40.7061, lng: -73.9969, name: 'Brooklyn Bridge', emoji: '🌉' },
        { lat: 40.7480, lng: -74.0047, name: 'Chelsea Market', emoji: '🛒' },
        { lat: 40.7580, lng: -73.9925, name: 'MoMA', emoji: '🎨' },
        { lat: 40.7069, lng: -73.9967, name: 'DUMBO', emoji: '🏙️' },
        { lat: 40.6408, lng: -73.7788, name: 'JFK Airport', emoji: '✈️' }
      ];

      markers.forEach(m => {
        L.marker([m.lat, m.lng]).addTo(map)
          .bindPopup(`<b>${m.emoji} ${m.name}</b>`);
      });

      mapInitialized = true;
    } catch(e) {
      document.getElementById('map').style.display = 'none';
      document.getElementById('map-fallback').style.display = 'block';
    }
  }

  // ==== CHECKLIST ====
  function renderChecklist() {
    const cats = ['docs', 'apps', 'food'];
    const titles = {
      docs: '🛂 Documenti & Voli',
      apps: '🗽 App & Strumenti',
      food: '🍕 Cibo & Salute'
    };
    const ids = { docs: 'checklist-docs', apps: 'checklist-parks', food: 'checklist-food' };

    cats.forEach(cat => {
      const ul = document.getElementById(ids[cat]);
      if (!ul) return;
      ul.innerHTML = DATA.checklist[cat].map(item => {
        const checked = localStorage.getItem('chk_' + item.id) === 'true' ? 'checked' : '';
        return `
          <li class="checklist-item ${checked ? 'done' : ''}">
            <input type="checkbox" id="chk_${item.id}" ${checked} onchange="toggleCheck('${item.id}')">
            <label for="chk_${item.id}">${item.label}</label>
          </li>
        `;
      }).join('');
    });
    updateChecklistProgress();
  }

  window.toggleCheck = function(id) {
    const el = document.getElementById('chk_' + id);
    const checked = el.checked;
    localStorage.setItem('chk_' + id, checked);
    el.closest('li').classList.toggle('done', checked);
    updateChecklistProgress();
  };

  window.resetChecklist = function() {
    if (!confirm('Resettare tutta la checklist?')) return;
    const allItems = [...document.querySelectorAll('[id^="chk_"]')];
    allItems.forEach(el => {
      el.checked = false;
      localStorage.setItem(el.id.replace('chk_', 'chk_'), 'false');
      el.closest('li').classList.remove('done');
    });
    updateChecklistProgress();
  };

  function updateChecklistProgress() {
    const all = document.querySelectorAll('[id^="chk_"]');
    const done = document.querySelectorAll('[id^="chk_"]:checked');
    const p = document.getElementById('checklist-progress');
    if (p) p.textContent = `${done.length}/${all.length} completati`;
  }

  renderChecklist();

  // ==== INIT ====
  console.log('🗽 New York 2026 — Sito caricato!');
})();
