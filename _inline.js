
    // Fallback data in case data.js is not loaded or fails (Single File completeness requirement)
    if (typeof dashboardData === 'undefined') {
      console.warn("data.js no fue encontrado. Cargando datos locales de respaldo.");
      const _months = ['ENE.', 'FEB.', 'MAR.', 'ABR.', 'MAY.', 'JUN.', 'JUL.', 'AGO.', 'SET.', 'OCT.', 'NOV.', 'DIC.'];
      window.dashboardData = {
        slide1: {
          title: "Cantidad de Ventas",
          months: _months,
          defaultYear: 2026,
          totals: { 2024: 12932, 2025: 17397, 2026: 5675 },
          years: {
            2024: {
              cantidad: [950, 920, 940, 960, 1010, 1040, 1130, 1160, 1210, 1260, 1500, 1450],
              monto: [330600, 320160, 327120, 334080, 351480, 361920, 393240, 403680, 421080, 438480, 522000, 504600],
              presupuesto: [930, 905, 925, 945, 990, 1010, 1100, 1130, 1180, 1230, 1450, 1410],
              presupuestoMonto: [323640, 314940, 321900, 328860, 344520, 351480, 382800, 393240, 410640, 428040, 504600, 490680]
            },
            2025: {
              cantidad: [1355, 1341, 1120, 1049, 1242, 1301, 1456, 1465, 1585, 1630, 1970, 1883],
              monto: [471540, 466668, 389760, 365052, 432216, 452748, 506688, 509820, 551580, 567240, 685560, 655284],
              presupuesto: [1465, 1465, 1529, 1569, 1649, 1596, 1680, 1677, 1717, 1788, 1876, 1838],
              presupuestoMonto: [509820, 509820, 532092, 546012, 573852, 555408, 584640, 583596, 597516, 622224, 652848, 639624]
            },
            2026: {
              cantidad: [2056, 1824, 1795, null, null, null, null, null, null, null, null, null],
              monto: [715488, 634752, 624660, null, null, null, null, null, null, null, null, null],
              presupuesto: [1465, 1465, 1529, 1569, 1649, 1596, 1680, 1677, 1717, 1788, 1876, 1838],
              presupuestoMonto: [509820, 509820, 532092, 546012, 573852, 555408, 584640, 583596, 597516, 622224, 652848, 639624]
            }
          }
        },
        slide2: {
          title: "Cantidad de ventas por Origen de la venta",
          filter: "Punto de Venta (PdV) / RS",
          chartAnnual: {
            categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            values: [96.0, 172.0, 224.0, 242.0, 240.7, 213.9, 270.7],
            name: "Promedio Anual"
          },
          chartMonthly: {
            categories: ['Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Oct.', 'Nov.', 'Dic.', 'Ene.', 'Feb.', 'Mar.'],
            series: [
              { name: "Ventas", values: [161.0, 152.0, 137.0, 183.0, 225.0, 226.0, 245.0, 232.0, 302.0, 252.0, 298.0, 299.0, 215.0], color: "#8ECAE6" },
              { name: "Presupuesto", values: [285.6, 287.7, 289.7, 297.8, 303.6, 282.3, 296.9, 307.9, 318.8, 300.2, 248.7, 248.4, 258.3], color: "#A8DADC" }
            ]
          },
          table: {
            months: ['Mar 25', 'Abr 25', 'May 25', 'Jun 25', 'Jul 25', 'Ago 25', 'Set 25', 'Oct 25', 'Nov 25', 'Dic 25', 'Ene 26', 'Feb 26', 'Mar 26'],
            ventas: [161, 152, 137, 183, 225, 226, 245, 232, 302, 252, 298, 299, 215],
            presupuesto: [285.6, 287.7, 289.7, 297.8, 303.6, 282.3, 296.9, 307.9, 318.8, 300.2, 248.7, 248.4, 258.3]
          }
        }
      };
    }

    // ====== CONFIGURACIÓN DE LAS 26 VISTAS ======
    const SLIDES = [
      { id:'s1',  label:'Ventas / Directivos',      icon:'fa-chart-column',        kind:'iframe', iframeUrl:'https://app.powerbi.com/view?r=eyJrIjoiYmVjMTQwOTktZTM3MS00NTI0LWEwMzctNmZlZWMwNzFkN2JmIiwidCI6IjM1NDU5OGE1LTQwMmYtNDM1MS05M2IxLTNmNWE5MzJlMzg1MiJ9', title:'Ventas / Directivos', subtitle:'Tablero Power BI' },
      { id:'s2',  label:'Ventas / Seguimiento',     icon:'fa-circle-nodes',        kind:'iframe', iframeUrl:'https://app.powerbi.com/view?r=eyJrIjoiYzllNThiMjctNjE3NS00MmYwLTg5M2ItMjEwNzAyY2RlZTYyIiwidCI6IjM1NDU5OGE1LTQwMmYtNDM1MS05M2IxLTNmNWE5MzJlMzg1MiJ9', title:'Ventas / Seguimiento', subtitle:'Tablero Power BI' },
      { id:'s3',  label:'Ventas por Producto',       icon:'fa-box-open',            kind:'origin', data:'slide3' },
      { id:'s4',  label:'Ventas Netas',              icon:'fa-coins',               kind:'combo3', data:'slide4' },
      { id:'s5',  label:'Productividad x Antig.',    icon:'fa-gauge-high',          kind:'grouped', data:'slide5' },
      { id:'s6',  label:'Dotación x Antigüedad',     icon:'fa-users',               kind:'stacked', data:'slide6' },
      { id:'s7',  label:'Lima y Provincias',         icon:'fa-location-dot',        kind:'limaprov', data:'slide7' },
      { id:'s8',  label:'Calidad de Venta',          icon:'fa-circle-check',        kind:'anulaciones', data:'slide8',
            subtitle:'Objetivo: anulaciones por motivos comerciales ≤ 2% de las ventas brutas' },
      { id:'s9',  label:'Seguimiento — E. Susann',   icon:'fa-table-list',  kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Filtro: Gerencia · Subgerente · Supervisor', images:['assets/s09_1.png'] },
      { id:'s10', label:'Reporte Gerencial',         icon:'fa-clipboard-list', kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Reporte Gerencial: Gerencia/Subgerente – Supervisor – Vendedor', images:['assets/s10_1.png'] },
      { id:'s11', label:'Cuota de Inscripción',      icon:'fa-receipt',     kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Cuota de Inscripción por mes · Origen de la venta', images:['assets/s11_1.png','assets/s11_2.png'] },
      { id:'s12', label:'Venta por C. Comercial',    icon:'fa-store',       kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Venta por Centro Comercial / Concesionario', images:['assets/s12_1.png'] },
      { id:'s13', label:'Venta Diaria',              icon:'fa-calendar-day',kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Comparativo de Venta Diaria: Gerencia / Subgerencia / Supervisor', images:['assets/s13_1.png'] },
      { id:'s14', label:'Productividad (Reporte)',   icon:'fa-gauge',       kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Productividad por antigüedad: Gerencia/Subgerencia/Supervisión', images:['assets/s14_1.png','assets/s14_2.png'] },
      { id:'s15', label:'Venta x Producto (Rep.)',   icon:'fa-boxes-stacked', kind:'image', title:'Variables de Seguimiento y Control', subtitle:'Venta por Producto: Gerencia/Subgerencia/Supervisor', images:['assets/s15_1.png'] },
      { id:'s16', label:'Cobranza General',          icon:'fa-hand-holding-dollar', kind:'image', title:'Cobranza General Maquisistema', subtitle:'Tablero Power BI — Recaudación', images:['assets/s16_1.jpg'] },
      { id:'s17', label:'CC — Cobranzas M0/M1',      icon:'fa-headset',     kind:'image', title:'Contact Center — Cobranzas M0–M1', subtitle:'Tablero Power BI', images:['assets/s17_1.jpg'] },
      { id:'s18', label:'CC — Bitácoras Inbound',    icon:'fa-phone-volume',kind:'image', title:'Contact Center — Bitácoras Inbound', subtitle:'Tablero Power BI', images:['assets/s18_1.jpg'] },
      { id:'s19', label:'ADG — Asambleas',           icon:'fa-people-group',kind:'image', title:'ADG — Asambleas Inaugurales', subtitle:'Tablero Power BI', images:['assets/s19_1.jpg'] },
      { id:'s20', label:'ADG — Reactivaciones',      icon:'fa-rotate-right',kind:'image', title:'ADG — Reactivaciones', subtitle:'Tablero Power BI', images:['assets/s20_1.jpg'] },
      { id:'s21', label:'Vehículos — Facturación',   icon:'fa-car',         kind:'image', title:'Vehículos — Facturación General', subtitle:'Tablero Power BI', images:['assets/s21_1.jpg'] },
      { id:'s22', label:'Vehículos — Entregas',      icon:'fa-truck',       kind:'image', title:'Vehículos — Entregas', subtitle:'Tablero Power BI', images:['assets/s22_1.jpg'] },
      { id:'s23', label:'Vehículos — Cartera',       icon:'fa-file-invoice-dollar', kind:'image', title:'Vehículos — Indicador de Cartera', subtitle:'Tablero Power BI', images:['assets/s23_1.jpg'] },
      { id:'s24', label:'Vendedores sin venta',      icon:'fa-user-slash',  kind:'image', title:'Vendedores sin Venta por Ciudad', subtitle:'Resumen por ciudad', images:['assets/s24_1.png'] },
      { id:'s25', label:'Dotación por Zonas',        icon:'fa-map-location-dot', kind:'image', title:'Total Dotación por Zonas', subtitle:'Resumen por ciudad', images:['assets/s25_1.png'] },
      { id:'s26', label:'Maquimas Colombia',         icon:'fa-flag',        kind:'image', title:'Total Maquimas Colombia', subtitle:'Ventas · Dotación · Productividad', images:['assets/s26_1.png'] }
    ];

    // Paleta armónica reutilizable
    const PALETTE = ['#0E8C9B', '#3A7CA5', '#E0A458', '#E2674F', '#2A9D8F', '#6C8EBF', '#C77F00', '#0C6470', '#9B5DE5', '#577590'];

    // STATE
    let activeSlide = 's1';
    let chartInstanceSlide1 = null;
    const dynCharts = {}; // gráficos de la vista dinámica

    // Estado de filtros del Slide 1
    const slide1Filters = {
      metric: 'cantidad',
      year: (dashboardData.slide1 && dashboardData.slide1.defaultYear) || 2026,
      from: 0,
      to: 11
    };

    // INITIALIZATION
    window.addEventListener('DOMContentLoaded', () => {
      buildNav();
      setupSlide1Filters();
      selectSlide('s1');
    });

    // Etiquetas largas de meses para los selects de periodo
    const MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    // Construir los selectores de filtro y enganchar eventos
    function setupSlide1Filters() {
      const data = dashboardData.slide1;
      const yearSel = document.getElementById('f-year');
      const fromSel = document.getElementById('f-from');
      const toSel = document.getElementById('f-to');
      if (!yearSel) return;

      // Años (de mayor a menor)
      const years = Object.keys(data.years).map(Number).sort((a, b) => b - a);
      yearSel.innerHTML = years.map(y => `<option value="${y}">${y}</option>`).join('');
      yearSel.value = slide1Filters.year;

      // Meses
      const monthOpts = MONTH_NAMES.map((m, i) => `<option value="${i}">${m}</option>`).join('');
      fromSel.innerHTML = monthOpts;
      toSel.innerHTML = monthOpts;
      fromSel.value = slide1Filters.from;
      toSel.value = slide1Filters.to;

      // Eventos en vivo
      document.getElementById('f-metric').addEventListener('change', e => {
        slide1Filters.metric = e.target.value;
        renderSlide1();
      });
      yearSel.addEventListener('change', e => {
        slide1Filters.year = Number(e.target.value);
        renderSlide1();
      });
      fromSel.addEventListener('change', e => {
        slide1Filters.from = Number(e.target.value);
        if (slide1Filters.from > slide1Filters.to) { slide1Filters.to = slide1Filters.from; toSel.value = slide1Filters.to; }
        renderSlide1();
      });
      toSel.addEventListener('change', e => {
        slide1Filters.to = Number(e.target.value);
        if (slide1Filters.to < slide1Filters.from) { slide1Filters.from = slide1Filters.to; fromSel.value = slide1Filters.from; }
        renderSlide1();
      });
    }

    // ====== NAVBAR (generado desde SLIDES) ======
    function buildNav() {
      document.getElementById('nav-list').innerHTML = SLIDES.map(s => {
        const isHidden = parseInt(s.id.substring(1)) >= 13;
        return `
        <li class="nav-item"${isHidden ? ' style="display: none;"' : ''}>
          <button class="nav-btn${s.id === 's1' ? ' active' : ''}" id="btn-${s.id}" onclick="selectSlide('${s.id}')">
            <i class="fa-solid ${s.icon}"></i>
            <span>${s.label}</span>
          </button>
        </li>`;
      }).join('');
    }

    // ====== ROUTER ======
    function selectSlide(id) {
      activeSlide = id;
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      const btn = document.getElementById('btn-' + id);
      if (btn) btn.classList.add('active');
      // destruir gráficos dinámicos previos
      Object.keys(dynCharts).forEach(k => { dynCharts[k].destroy(); delete dynCharts[k]; });
      renderView();
      const mc = document.querySelector('.main-content');
      if (mc) mc.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderView() {
      const currentSlide = SLIDES.find(s => s.id === activeSlide);
      const isIframe = currentSlide && currentSlide.kind === 'iframe';
      const isSlide1 = activeSlide === 's1' && !isIframe;
      const hf = document.getElementById('slide1-header-filters');
      if (hf) hf.style.display = isSlide1 ? 'flex' : 'none';
      document.getElementById('view-slide1').classList.toggle('active', isSlide1);
      document.getElementById('view-dynamic').classList.toggle('active', !isSlide1);
      document.getElementById('metrics-container').style.display = 'grid';

      if (isSlide1) { renderSlide1(); return; }
      renderDynamic(SLIDES.find(s => s.id === activeSlide));
    }

    // ====== HELPERS DE GRÁFICOS ======
    function drawChart(canvasId, cfg) {
      const el = document.getElementById(canvasId);
      if (!el) return;
      if (dynCharts[canvasId]) dynCharts[canvasId].destroy();
      dynCharts[canvasId] = new Chart(el.getContext('2d'), cfg);
    }
    const nf = (v, d = 0) => (v == null ? '' : new Intl.NumberFormat('es-PE', { maximumFractionDigits: d }).format(v));
    const num = x => Number(String(x).replace(/,/g, '')) || 0;
    const baseTooltip = { backgroundColor: '#fff', titleColor: '#0C6470', bodyColor: '#0E8C9B', borderColor: 'rgba(0,0,0,0.08)', borderWidth: 1, padding: 12, titleFont: { family: 'Inter', weight: '700' }, bodyFont: { family: 'Inter', weight: '600' } };
    const baseScales = (yfmt) => ({
      x: { grid: { display: false }, ticks: { font: { family: 'Inter', weight: '600' }, color: '#0C6470' } },
      y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { font: { family: 'Inter' }, color: '#6b7280', callback: yfmt || (v => v) } }
    });
    const legendTop = { position: 'top', labels: { font: { family: 'Inter', weight: '600' }, color: '#0C6470', usePointStyle: true, padding: 16 } };

    // Tarjeta de gráfico + leyenda opcional
    function chartCard(title, icon, canvasId, legendHtml) {
      return `<div class="chart-card">
        <div class="chart-card-header">
          <h3 class="chart-card-title"><i class="fa-solid ${icon}"></i><span>${title}</span></h3>
          ${legendHtml ? `<div class="chart-legend">${legendHtml}</div>` : ''}
        </div>
        <div class="chart-canvas-wrapper"><canvas id="${canvasId}"></canvas></div>
      </div>`;
    }
    function tableCard(title, tableId) {
      return `<section class="table-card">
        <div class="table-card-header"><h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>${title}</span></h3></div>
        <div class="table-outer-container"><table id="${tableId}"></table></div>
      </section>`;
    }

    // ---- IFRAME POWER BI ----
    function renderIframe(slide, host) {
      host.innerHTML = `
        <section class="chart-card" style="padding: 0; overflow: hidden; height: calc(100vh - 180px); min-height: 500px;">
          <iframe title="${slide.label}" width="100%" height="100%" src="${slide.iframeUrl}" frameborder="0" allowFullScreen="true" style="border: none;"></iframe>
        </section>
      `;
    }

    // ====== RENDER DINÁMICO ======
    function renderDynamic(slide) {
      document.getElementById('dashboard-title').textContent = slide.title || slide.label;
      document.getElementById('dashboard-subtitle').textContent = slide.subtitle || 'Portal Corporativo de Business Intelligence';
      const host = document.getElementById('view-dynamic');
      document.getElementById('metrics-container').style.display = (slide.kind === 'image' || slide.kind === 'iframe') ? 'none' : 'grid';
      host.innerHTML = '';
      ({
        origin: renderOrigin, combo3: renderCombo3, grouped: renderGrouped,
        stacked: renderStacked, limaprov: renderLimaProv, anulaciones: renderAnulaciones, image: renderImage,
        iframe: renderIframe
      }[slide.kind] || (() => {}))(slide, host);
    }

    // ---- IMAGEN (diapositivas 9-26) ----
    function renderImage(slide, host) {
      host.innerHTML = slide.images.map(src => `
        <section class="image-card"><img src="${src}" alt="${slide.title || ''}" loading="lazy"></section>`).join('');
    }

    // ---- ORIGEN / PRODUCTO (diapositivas 2, 3) ----
    function renderOrigin(slide, host) {
      const d = dashboardData[slide.data];
      const a = d.chartAnnual, m = d.chartMonthly;
      const ventas = m.series[0].values, pres = m.series[1].values;
      const lastV = ventas[ventas.length - 1], lastP = pres[pres.length - 1];
      const annual26 = a.values[a.values.length - 1];
      const comp = lastP ? (lastV / lastP * 100) : 0;
      renderMetricCards([
        { title: 'Promedio Anual 2026', value: nf(annual26, 1), icon: 'fa-calendar-days', trendText: d.filter || 'Promedio', trendUp: true, accentColor: '#0E8C9B' },
        { title: 'Última Venta (Mar)', value: nf(lastV, 1), icon: 'fa-shop', trendText: 'Mes más reciente', trendUp: true, accentColor: '#3A7CA5' },
        { title: 'Presupuesto (Mar)', value: nf(lastP, 1), icon: 'fa-bullseye', trendText: 'Meta del mes', trendUp: true, accentColor: '#E0A458' },
        { title: 'Cumplimiento', value: comp.toFixed(1) + '%', icon: 'fa-percentage', trendText: (comp >= 100 ? '+' : '') + (comp - 100).toFixed(1) + '% vs meta', trendUp: comp >= 100, accentColor: '#E2674F' }
      ]);
      host.innerHTML = `
        <section class="charts-grid two-columns">
          ${chartCard('Promedio Anual por Año', 'fa-chart-column', 'dyn-a')}
          ${chartCard('Comparativo Mensual: Ventas vs Presupuesto', 'fa-chart-line', 'dyn-b',
            '<div class="legend-pill"><span class="legend-swatch" style="background:#0E8C9B"></span>Ventas</div><div class="legend-pill"><span class="legend-swatch line" style="background:#E0A458"></span>Presupuesto</div>')}
        </section>
        ${tableCard('Detalle Mensual: Ventas vs Presupuesto', 'dyn-table')}`;

      drawChart('dyn-a', {
        type: 'bar',
        data: { labels: a.categories.map(c => String(c).replace('año ', '')), datasets: [{ data: a.values, backgroundColor: a.values.map((_, i) => PALETTE[i % PALETTE.length]), borderRadius: 6, maxBarThickness: 44 }] },
        options: { responsive: true, maintainAspectRatio: false, layout: { padding: { top: 20 } }, plugins: { legend: { display: false }, tooltip: baseTooltip, datalabels: { anchor: 'end', align: 'top', color: '#0C6470', font: { family: 'Inter', weight: '700', size: 11 }, formatter: v => nf(v, 0) } }, scales: baseScales() },
        plugins: [ChartDataLabels]
      });
      drawChart('dyn-b', {
        data: { labels: m.categories, datasets: [
          { type: 'bar', label: m.series[0].name, data: ventas, backgroundColor: '#0E8C9B', borderRadius: 5, maxBarThickness: 26 },
          { type: 'line', label: m.series[1].name, data: pres, borderColor: '#E0A458', backgroundColor: '#E0A458', borderWidth: 3, tension: 0.35, pointRadius: 3 }
        ] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false }, tooltip: baseTooltip, datalabels: { display: false } }, scales: baseScales() },
        plugins: [ChartDataLabels]
      });

      const t = d.table;
      let html = '<thead><tr><th>Mes</th><th>Ventas</th><th>Presupuesto</th><th>Cumplimiento</th><th>Estado</th></tr></thead><tbody>';
      t.months.forEach((mo, i) => {
        const v = t.ventas[i], pp = t.presupuesto[i]; const pc = pp ? (v / pp * 100) : 0; const ok = pc >= 100;
        html += `<tr><td style="text-align:left;padding-left:20px"><strong>${mo}</strong></td><td>${nf(v, 1)}</td><td>${nf(pp, 1)}</td><td class="${ok ? 'compliance-high' : 'compliance-low'}">${pc.toFixed(1)}%</td><td><span class="${ok ? 'compliance-high' : 'compliance-low'}"><i class="fa-solid ${ok ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${ok ? 'Meta' : 'Desv.'}</span></td></tr>`;
      });
      document.getElementById('dyn-table').innerHTML = html + '</tbody>';
    }

    // ---- COMBO 3 SERIES (diapositiva 4: Ventas Netas) ----
    function renderCombo3(slide, host) {
      const d = dashboardData[slide.data]; const c = d.chart;
      const s0 = c.series[0].values, s1 = c.series[1].values, s2 = c.series[2].values;
      const total26 = s0.reduce((x, v) => x + (v || 0), 0);
      const n = s0.filter(v => v != null).length || 1;
      const presAcum = s2.slice(0, n).reduce((x, v) => x + v, 0);
      const comp = presAcum ? (total26 / presAcum * 100) : 0;
      renderMetricCards([
        { title: 'Ventas Netas 2026', value: nf(total26), icon: 'fa-coins', trendText: 'Ene-Mar', trendUp: true, accentColor: '#0E8C9B' },
        { title: 'Promedio Mensual', value: nf(Math.round(total26 / n)), icon: 'fa-calculator', trendText: n + ' mes(es)', trendUp: true, accentColor: '#3A7CA5' },
        { title: 'Presupuesto Acum.', value: nf(presAcum), icon: 'fa-bullseye', trendText: 'Meta del periodo', trendUp: true, accentColor: '#E0A458' },
        { title: 'Cumplimiento', value: comp.toFixed(1) + '%', icon: 'fa-percentage', trendText: (comp >= 100 ? '+' : '') + (comp - 100).toFixed(1) + '% vs meta', trendUp: comp >= 100, accentColor: '#E2674F' }
      ]);
      host.innerHTML = `
        <section class="charts-grid">
          ${chartCard('Ventas Netas (2026 vs 2025 vs Presupuesto)', 'fa-chart-column', 'dyn-a',
            '<div class="legend-pill"><span class="legend-swatch" style="background:#0E8C9B"></span>Ventas 26</div><div class="legend-pill"><span class="legend-swatch line" style="background:#E2674F"></span>Ventas 25</div><div class="legend-pill"><span class="legend-swatch line" style="background:#E0A458"></span>Presupuesto</div>')}
        </section>
        ${tableCard('Resumen Anual (Ventas Netas)', 'dyn-table')}`;
      drawChart('dyn-a', {
        data: { labels: c.categories, datasets: [
          { type: 'bar', label: 'Ventas 26', data: s0, backgroundColor: '#0E8C9B', borderRadius: 6, maxBarThickness: 44, datalabels: { anchor: 'end', align: 'top', color: '#0C6470', font: { family: 'Inter', weight: '700', size: 11 }, formatter: v => nf(v) } },
          { type: 'line', label: 'Ventas 25', data: s1, borderColor: '#E2674F', backgroundColor: '#E2674F', borderWidth: 3, tension: 0.4, pointRadius: 3, datalabels: { display: false } },
          { type: 'line', label: 'Presupuesto', data: s2, borderColor: '#E0A458', backgroundColor: '#E0A458', borderWidth: 3, tension: 0.4, pointRadius: 3, datalabels: { display: false } }
        ] },
        options: { responsive: true, maintainAspectRatio: false, layout: { padding: { top: 22 } }, plugins: { legend: { display: false }, tooltip: baseTooltip, datalabels: { display: ctx => ctx.dataset.data[ctx.dataIndex] != null } }, scales: baseScales() },
        plugins: [ChartDataLabels]
      });
      const t = d.table;
      let html = '<thead><tr><th>AÑO</th>' + t.headers.slice(1).map(h => `<th>${h}</th>`).join('') + '</tr></thead><tbody>';
      html += '<tr><td class="row-label-total"><i class="fa-solid fa-coins"></i> TOTAL</td>' + t.total.map(v => `<td>${v}</td>`).join('') + '</tr>';
      html += '<tr><td class="row-label-avg"><i class="fa-solid fa-chart-simple"></i> PROMEDIO</td>' + t.average.map(v => `<td>${v}</td>`).join('') + '</tr></tbody>';
      document.getElementById('dyn-table').innerHTML = html;
    }

    // ---- BARRAS AGRUPADAS (diapositiva 5: Productividad) ----
    function renderGrouped(slide, host) {
      const d = dashboardData[slide.data]; const c = d.chart;
      const mar = c.series[c.series.length - 1];
      renderMetricCards(c.categories.map((cat, i) => ({
        title: mar.name + ' · ' + cat, value: mar.values[i].toFixed(2), icon: 'fa-gauge-high', trendText: 'Productividad', trendUp: mar.values[i] >= 2, accentColor: PALETTE[i % PALETTE.length]
      })));
      host.innerHTML = `
        <section class="charts-grid">${chartCard('Productividad por Antigüedad (por mes)', 'fa-chart-column', 'dyn-a')}</section>
        ${tableCard('Detalle de Productividad por Antigüedad', 'dyn-table')}`;
      drawChart('dyn-a', {
        type: 'bar',
        data: { labels: c.categories, datasets: c.series.map((s, i) => ({ label: s.name, data: s.values, backgroundColor: PALETTE[i % PALETTE.length], borderRadius: 5, maxBarThickness: 20 })) },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: legendTop, tooltip: baseTooltip, datalabels: { display: false } }, scales: baseScales() },
        plugins: [ChartDataLabels]
      });
      const tt = d.table;
      let html = '<thead><tr><th>Antigüedad</th>' + tt.months.map(mo => `<th>${mo}</th>`).join('') + '</tr></thead><tbody>';
      Object.keys(tt.antiguedades).forEach(band => {
        html += `<tr><td style="text-align:left;padding-left:20px"><strong>${band}</strong></td>` + tt.antiguedades[band].map(v => `<td>${v.toFixed(2)}</td>`).join('') + '</tr>';
      });
      document.getElementById('dyn-table').innerHTML = html + '</tbody>';
    }

    // ---- BARRAS APILADAS + LÍNEA (diapositiva 6: Dotación) ----
    function renderStacked(slide, host) {
      const d = dashboardData[slide.data]; const c = d.chart;
      const bars = c.series.filter(s => s.type !== 'line');
      const line = c.series.find(s => s.type === 'line') || c.series[c.series.length - 1];
      const last = c.categories.length - 1;
      const rot = d.table && d.table.series && d.table.series.rotation ? d.table.series.rotation[last] : '-';
      renderMetricCards([
        { title: 'Dotación Total (actual)', value: nf(line.values[last]), icon: 'fa-users', trendText: 'Staff vigente', trendUp: true, accentColor: '#0E8C9B' },
        { title: 'Nuevos (< 1M)', value: nf(bars[0].values[last]), icon: 'fa-user-plus', trendText: 'Ingresos recientes', trendUp: true, accentColor: '#3A7CA5' },
        { title: 'Senior (> 6M)', value: nf(bars[bars.length - 1].values[last]), icon: 'fa-user-shield', trendText: 'Experimentados', trendUp: true, accentColor: '#E0A458' },
        { title: 'Rotación', value: rot, icon: 'fa-arrows-rotate', trendText: 'Mes actual', trendUp: false, accentColor: '#E2674F' }
      ]);
      host.innerHTML = `
        <section class="charts-grid">${chartCard('Dotación por Antigüedad + Total', 'fa-users', 'dyn-a')}</section>
        ${tableCard('Detalle de Dotación por Antigüedad', 'dyn-table')}`;
      const ds = bars.map((s, i) => ({ type: 'bar', label: s.name, data: s.values, backgroundColor: PALETTE[i % PALETTE.length], stack: 'dot', maxBarThickness: 28 }));
      ds.push({ type: 'line', label: line.name, data: line.values, borderColor: '#E2674F', backgroundColor: '#E2674F', borderWidth: 3, tension: 0.35, pointRadius: 3 });
      drawChart('dyn-a', {
        data: { labels: c.categories, datasets: ds },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: legendTop, tooltip: baseTooltip, datalabels: { display: false } }, scales: { x: { stacked: true, grid: { display: false }, ticks: { font: { family: 'Inter', weight: '600' }, color: '#0C6470' } }, y: { stacked: true, beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#6b7280' } } } },
        plugins: [ChartDataLabels]
      });
      const sr = d.table.series; const labels = { less_1m: '< 1M', one_three_m: '[1-3] M', four_six_m: '[4-6] M', more_6m: '> 6M', total: 'Total', rotation: 'Rotación' };
      let html = '<thead><tr><th>Indicador</th>' + d.table.months.map(mo => `<th>${mo}</th>`).join('') + '</tr></thead><tbody>';
      Object.keys(sr).forEach(k => {
        html += `<tr><td style="text-align:left;padding-left:20px"><strong>${labels[k] || k}</strong></td>` + sr[k].map(v => `<td>${v}</td>`).join('') + '</tr>';
      });
      document.getElementById('dyn-table').innerHTML = html + '</tbody>';
    }

    // ---- LIMA Y PROVINCIAS (diapositiva 7) ----
    function renderLimaProv(slide, host) {
      const d = dashboardData[slide.data];
      const q = d.tableQty, p = d.tablePct;
      const years = q.headers.slice(1);
      const lima = q.rows.find(r => r[0] === 'LIMA').slice(1).map(num);
      const prov = q.rows.find(r => r[0] === 'PROVINCIAS').slice(1).map(num);
      const total = q.rows.find(r => r[0] === 'TOTAL').slice(1).map(num);
      const i = years.length - 1;
      const pctLima = p.rows.find(r => r[0] === 'LIMA').slice(1);
      renderMetricCards([
        { title: 'Lima ' + years[i], value: nf(lima[i]), icon: 'fa-city', trendText: 'Ventas Lima', trendUp: true, accentColor: '#0E8C9B' },
        { title: 'Provincias ' + years[i], value: nf(prov[i]), icon: 'fa-tree', trendText: 'Ventas provincias', trendUp: true, accentColor: '#3A7CA5' },
        { title: 'Total ' + years[i], value: nf(total[i]), icon: 'fa-layer-group', trendText: 'Ventas totales', trendUp: true, accentColor: '#E0A458' },
        { title: '% Lima', value: pctLima[i], icon: 'fa-percentage', trendText: 'Participación Lima', trendUp: true, accentColor: '#E2674F' }
      ]);
      host.innerHTML = `
        <section class="charts-grid">${chartCard('Ventas Lima vs Provincias por Año', 'fa-location-dot', 'dyn-a',
          '<div class="legend-pill"><span class="legend-swatch" style="background:#0E8C9B"></span>Lima</div><div class="legend-pill"><span class="legend-swatch" style="background:#E0A458"></span>Provincias</div>')}</section>
        ${tableCard('Cantidad de Ventas (Lima / Provincias)', 'dyn-table1')}
        ${tableCard('Distribución Porcentual de las Ventas', 'dyn-table2')}`;
      drawChart('dyn-a', {
        type: 'bar',
        data: { labels: years, datasets: [
          { label: 'Lima', data: lima, backgroundColor: '#0E8C9B', stack: 'v', maxBarThickness: 46 },
          { label: 'Provincias', data: prov, backgroundColor: '#E0A458', stack: 'v', maxBarThickness: 46 }
        ] },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: legendTop, tooltip: baseTooltip, datalabels: { display: false } }, scales: { x: { stacked: true, grid: { display: false }, ticks: { font: { family: 'Inter', weight: '600' }, color: '#0C6470' } }, y: { stacked: true, beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#6b7280' } } } },
        plugins: [ChartDataLabels]
      });
      const buildSimple = (tbl) => {
        let html = '<thead><tr>' + tbl.headers.map((h, k) => `<th>${k === 0 ? '' : h}</th>`).join('') + '</tr></thead><tbody>';
        tbl.rows.forEach(r => {
          html += '<tr>' + r.map((cell, k) => k === 0 ? `<td style="text-align:left;padding-left:20px"><strong>${cell}</strong></td>` : `<td>${cell}</td>`).join('') + '</tr>';
        });
        return html + '</tbody>';
      };
      document.getElementById('dyn-table1').innerHTML = buildSimple(q);
      document.getElementById('dyn-table2').innerHTML = buildSimple(p);
    }

    // ---- ANULACIONES (diapositiva 8) ----
    function renderAnulaciones(slide, host) {
      const c = dashboardData[slide.data].chart;
      const i = c.categories.length - 1;
      renderMetricCards([
        { title: 'Tasa Anulación (actual)', value: c.rates[i] + '%', icon: 'fa-circle-exclamation', trendText: c.categories[i], trendUp: c.rates[i] <= 2, accentColor: '#E2674F' },
        { title: 'Objetivo', value: '≤ 2.0%', icon: 'fa-bullseye', trendText: 'Meta máxima', trendUp: true, accentColor: '#0E8C9B' },
        { title: 'Volumen Anulado', value: nf(c.volumes[i]), icon: 'fa-ban', trendText: 'Trimestre actual', trendUp: false, accentColor: '#3A7CA5' },
        { title: 'Ventas Brutas', value: nf(c.grossSales[i]), icon: 'fa-cart-shopping', trendText: 'Base del trimestre', trendUp: true, accentColor: '#E0A458' }
      ]);
      host.innerHTML = `
        <section class="charts-grid">${chartCard('Anulaciones por Motivos Comerciales (% vs Objetivo 2%)', 'fa-circle-check', 'dyn-a',
          '<div class="legend-pill"><span class="legend-swatch" style="background:#3A7CA5"></span>Volumen</div><div class="legend-pill"><span class="legend-swatch line" style="background:#E2674F"></span>% Anulación</div><div class="legend-pill"><span class="legend-swatch line" style="background:#0E8C9B"></span>Objetivo 2%</div>')}</section>
        ${tableCard('Detalle por Trimestre', 'dyn-table')}`;
      drawChart('dyn-a', {
        data: { labels: c.categories, datasets: [
          { type: 'bar', label: 'Volumen', data: c.volumes, backgroundColor: '#3A7CA5', borderRadius: 5, maxBarThickness: 30, yAxisID: 'y', datalabels: { display: false } },
          { type: 'line', label: '% Anulación', data: c.rates, borderColor: '#E2674F', backgroundColor: '#E2674F', borderWidth: 3, tension: 0.35, pointRadius: 4, yAxisID: 'y1', datalabels: { align: 'top', color: '#C24B36', font: { family: 'Inter', weight: '700', size: 10 }, formatter: v => v + '%' } },
          { type: 'line', label: 'Objetivo 2%', data: c.categories.map(() => 2), borderColor: '#0E8C9B', borderDash: [6, 6], borderWidth: 2, pointRadius: 0, yAxisID: 'y1', datalabels: { display: false } }
        ] },
        options: {
          responsive: true, maintainAspectRatio: false, layout: { padding: { top: 18 } },
          plugins: { legend: { display: false }, tooltip: baseTooltip },
          scales: {
            x: { grid: { display: false }, ticks: { font: { family: 'Inter', weight: '600' }, color: '#0C6470' } },
            y: { position: 'left', beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#6b7280' }, title: { display: true, text: 'Volumen' } },
            y1: { position: 'right', beginAtZero: true, grid: { display: false }, ticks: { color: '#6b7280', callback: v => v + '%' } }
          }
        },
        plugins: [ChartDataLabels]
      });
      let html = '<thead><tr><th>Trimestre</th><th>% Anulación</th><th>Volumen</th><th>Ventas Brutas</th><th>Estado</th></tr></thead><tbody>';
      c.categories.forEach((cat, k) => {
        const ok = c.rates[k] <= 2;
        html += `<tr><td style="text-align:left;padding-left:20px"><strong>${cat}</strong></td><td class="${ok ? 'compliance-high' : 'compliance-low'}">${c.rates[k]}%</td><td>${nf(c.volumes[k])}</td><td>${nf(c.grossSales[k])}</td><td><span class="${ok ? 'compliance-high' : 'compliance-low'}"><i class="fa-solid ${ok ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${ok ? 'OK' : 'Excede'}</span></td></tr>`;
      });
      document.getElementById('dyn-table').innerHTML = html + '</tbody>';
    }

    // ============ RENDER COMPLETO DEL SLIDE 1 (según filtros) ============
    function renderSlide1() {
      const data = dashboardData.slide1;
      const { metric, year, from, to } = slide1Filters;
      const isMonto = metric === 'monto';
      const months = data.months;

      const cur = data.years[year] || {};
      const prev = data.years[year - 1] || {};

      const curSeries = isMonto ? cur.monto : cur.cantidad;
      const prevSeries = isMonto ? prev.monto : prev.cantidad;
      const presSeries = isMonto ? cur.presupuestoMonto : cur.presupuesto;

      // Recorte por periodo (desde - hasta)
      const labels = months.slice(from, to + 1);
      const curVals = (curSeries || []).slice(from, to + 1);
      const prevVals = (prevSeries || []).slice(from, to + 1);
      const presVals = (presSeries || []).slice(from, to + 1);

      // Título y subtítulo
      const fromName = MONTH_NAMES[from], toName = MONTH_NAMES[to];
      const periodTxt = from === to ? fromName : `${fromName} – ${toName}`;
      document.getElementById('dashboard-title').textContent =
        `${data.title}: ${periodTxt} ${year}`;
      document.getElementById('dashboard-subtitle').textContent =
        `Métrica: ${isMonto ? 'Monto (S/.)' : 'Cantidad de ventas'} · Comparativo ${year} vs ${year - 1} vs Presupuesto`;
      document.getElementById('slide1-chart-title').textContent =
        `${isMonto ? 'Monto' : 'Cantidad'} de ventas (${year} vs ${year - 1} vs Presupuesto)`;

      // Métricas (KPIs) calculadas sobre el periodo seleccionado
      renderSlide1Metrics(curVals, presVals, prevVals, isMonto, year);

      // Gráfico y tabla
      initChartSlide1({ labels, curVals, prevVals, presVals, year, isMonto });
      renderSlide1Legend(year);
      renderTableSlide1(isMonto);
    }

    // KPIs del slide 1
    function renderSlide1Metrics(curVals, presVals, prevVals, isMonto, year) {
      const sum = arr => arr.reduce((a, v) => a + (v || 0), 0);
      const count = arr => arr.filter(v => v != null).length;

      const totalCur = sum(curVals);
      const nMonths = count(curVals) || 1;
      const avgCur = totalCur / nMonths;
      const totalPres = sum(presVals);
      const totalPrev = sum(prevVals);
      const compliance = totalPres ? (totalCur / totalPres) * 100 : 0;
      const yoy = totalPrev ? ((totalCur - totalPrev) / totalPrev) * 100 : 0;

      const fmt = v => isMonto
        ? 'S/ ' + new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(v)
        : new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(v);

      const cards = [
        {
          title: `Ventas Totales ${year}`,
          value: fmt(totalCur),
          icon: "fa-solid fa-cart-shopping",
          trendText: `${yoy >= 0 ? '+' : ''}${yoy.toFixed(1)}% vs ${year - 1}`,
          trendUp: yoy >= 0,
          accentColor: "#0E8C9B"
        },
        {
          title: "Promedio Mensual",
          value: fmt(Math.round(avgCur)),
          icon: "fa-solid fa-calculator",
          trendText: `${nMonths} mes(es) con data`,
          trendUp: true,
          accentColor: "#3A7CA5"
        },
        {
          title: "Meta Acumulada",
          value: fmt(totalPres),
          icon: "fa-solid fa-bullseye",
          trendText: "Presupuesto del periodo",
          trendUp: true,
          accentColor: "#E0A458"
        },
        {
          title: "Cumplimiento",
          value: compliance.toFixed(1) + '%',
          icon: "fa-solid fa-percentage",
          trendText: `${compliance >= 100 ? '+' : ''}${(compliance - 100).toFixed(1)}% vs meta`,
          trendUp: compliance >= 100,
          accentColor: "#E2674F"
        }
      ];
      renderMetricCards(cards);
    }

    // Leyenda tipo reporte
    function renderSlide1Legend(year) {
      const el = document.getElementById('slide1-legend');
      if (!el) return;
      el.innerHTML = `
        <div class="legend-pill"><span class="legend-swatch" style="background:#0E8C9B"></span>Ventas ${String(year).slice(2)}</div>
        <div class="legend-pill"><span class="legend-swatch line" style="background:#E2674F"></span>Ventas ${String(year - 1).slice(2)}</div>
        <div class="legend-pill"><span class="legend-swatch line" style="background:#E0A458"></span>Presupuesto</div>
      `;
    }

    // Inyecta un set de tarjetas de métricas en el contenedor (reutilizable)
    function renderMetricCards(cardsData) {
      const metricsContainer = document.getElementById('metrics-container');
      metricsContainer.innerHTML = '';
      cardsData.forEach(card => {
        const trendClass = card.trendUp ? 'trend-up' : 'trend-down';
        const trendIcon = card.trendUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';
        metricsContainer.innerHTML += `
          <div class="metric-card" style="--accent: ${card.accentColor};">
            <div class="metric-header">
              <span class="metric-title">${card.title}</span>
              <div class="metric-icon-wrapper" style="color: ${card.accentColor};">
                <i class="${card.icon}"></i>
              </div>
            </div>
            <div class="metric-value" style="color: ${card.accentColor};">${card.value}</div>
            <div class="metric-footer">
              <span class="trend-badge ${trendClass}">
                <i class="fa-solid ${trendIcon}"></i>
                <span>${card.trendText}</span>
              </span>
            </div>
          </div>
        `;
      });
    }

    // RENDER METRIC CARDS DYNAMICALLY
    function renderMetrics() {
      const metricsContainer = document.getElementById('metrics-container');
      metricsContainer.innerHTML = ''; // Clear container

      let cardsData = [];

      if (activeView === 'slide1') {
        // Slide 1 Cards
        cardsData = [
          {
            title: "Ventas Totales 2026",
            value: "5,675",
            icon: "fa-solid fa-cart-shopping",
            trendText: "+48.7% vs 2025 (E-M)",
            trendUp: true,
            accentColor: "#008296" // Turquoise
          },
          {
            title: "Promedio Mensual 2026",
            value: "1,892",
            icon: "fa-solid fa-calculator",
            trendText: "+30.5% vs presupuesto",
            trendUp: true,
            accentColor: "#457B9D" // Slate Blue
          },
          {
            title: "Meta Acumulada",
            value: "5,300",
            icon: "fa-solid fa-bullseye",
            trendText: "Objetivo anual ajustado",
            trendUp: true,
            accentColor: "#D97706" // Warm Amber
          },
          {
            title: "Cumplimiento 2026",
            value: "107.1%",
            icon: "fa-solid fa-percentage",
            trendText: "+7.1% Sobre la meta",
            trendUp: true,
            accentColor: "#7B2CBF" // Violet
          }
        ];
      } else {
        // Slide 2 Cards
        cardsData = [
          {
            title: "Promedio Anual (2026)",
            value: "270.7",
            icon: "fa-solid fa-calendar-days",
            trendText: "+26.6% vs promedio 2025",
            trendUp: true,
            accentColor: "#025763" // Dark Turquoise
          },
          {
            title: "Ventas Mar 26",
            value: "215",
            icon: "fa-solid fa-shop",
            trendText: "-28.1% vs Ene/Feb 26",
            trendUp: false,
            accentColor: "#457B9D" // Slate Blue
          },
          {
            title: "Presupuesto Mar 26",
            value: "258.3",
            icon: "fa-solid fa-chart-line",
            trendText: "Presupuesto asignado",
            trendUp: true,
            accentColor: "#D97706" // Warm Amber
          },
          {
            title: "Cumplimiento Mar 26",
            value: "83.2%",
            icon: "fa-solid fa-check-double",
            trendText: "-16.8% Déficit mensual",
            trendUp: false,
            accentColor: "#7B2CBF" // Violet
          }
        ];
      }

      cardsData.forEach(card => {
        const trendClass = card.trendUp ? 'trend-up' : 'trend-down';
        const trendIcon = card.trendUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';
        
        const cardHtml = `
          <div class="metric-card">
            <div class="metric-header">
              <span class="metric-title">${card.title}</span>
              <div class="metric-icon-wrapper" style="color: ${card.accentColor};">
                <i class="${card.icon}"></i>
              </div>
            </div>
            <div class="metric-value" style="color: ${card.accentColor};">${card.value}</div>
            <div class="metric-footer">
              <span class="trend-badge ${trendClass}">
                <i class="fa-solid ${trendIcon}"></i>
                <span>${card.trendText}</span>
              </span>
            </div>
          </div>
        `;
        metricsContainer.innerHTML += cardHtml;
      });
    }

    // CHART GENERATION - SLIDE 1 (Barras año actual + líneas año previo y presupuesto)
    function initChartSlide1(d) {
      if (chartInstanceSlide1) chartInstanceSlide1.destroy();

      const ctx = document.getElementById('chart-slide1').getContext('2d');

      // Degradado turquesa para las barras
      const grad = ctx.createLinearGradient(0, 0, 0, 360);
      grad.addColorStop(0, '#16A6B6');
      grad.addColorStop(1, '#0C6470');

      const fmt = v => v == null ? '' : new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(v);

      chartInstanceSlide1 = new Chart(ctx, {
        data: {
          labels: d.labels,
          datasets: [
            {
              type: 'bar',
              label: `Ventas ${String(d.year).slice(2)}`,
              data: d.curVals,
              backgroundColor: grad,
              hoverBackgroundColor: '#008296',
              borderRadius: 6,
              maxBarThickness: 46,
              order: 3,
              datalabels: {
                anchor: 'end', align: 'top', offset: 2,
                color: '#025763', font: { family: 'Inter', weight: '700', size: 11 },
                formatter: fmt
              }
            },
            {
              type: 'line',
              label: `Ventas ${String(d.year - 1).slice(2)}`,
              data: d.prevVals,
              borderColor: '#E2674F',
              backgroundColor: '#E2674F',
              borderWidth: 3,
              pointRadius: 3,
              pointHoverRadius: 6,
              tension: 0.4,
              order: 1,
              datalabels: {
                align: 'bottom', color: '#C24B36',
                font: { family: 'Inter', weight: '600', size: 10 }, formatter: fmt
              }
            },
            {
              type: 'line',
              label: 'Presupuesto',
              data: d.presVals,
              borderColor: '#E0A458',
              backgroundColor: '#E0A458',
              borderWidth: 3,
              pointRadius: 3,
              pointHoverRadius: 6,
              tension: 0.4,
              order: 2,
              datalabels: {
                align: 'top', color: '#B97D2E',
                font: { family: 'Inter', weight: '600', size: 10 }, formatter: fmt
              }
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 24 } },
          plugins: {
            legend: { display: false },
            datalabels: { display: ctx2 => ctx2.dataset.data[ctx2.dataIndex] != null },
            tooltip: {
              backgroundColor: '#ffffff',
              titleColor: '#025763',
              bodyColor: '#008296',
              bodyFont: { family: 'Inter', weight: '600' },
              titleFont: { family: 'Inter', weight: '700' },
              borderColor: 'rgba(0,0,0,0.08)',
              borderWidth: 1,
              padding: 12,
              callbacks: {
                label: c => `${c.dataset.label}: ${d.isMonto ? 'S/ ' : ''}${fmt(c.parsed.y)}`
              }
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { family: 'Inter', weight: '600' }, color: '#025763' }
            },
            y: {
              beginAtZero: true,
              grid: { color: 'rgba(0,0,0,0.06)' },
              ticks: {
                font: { family: 'Inter' }, color: '#6b7280',
                callback: v => d.isMonto ? (v / 1000) + 'k' : v
              }
            }
          }
        },
        plugins: [ChartDataLabels]
      });
    }

    // CHART GENERATION - SLIDE 2 (Two Charts: Annual & Monthly)
    function initChartsSlide2(annualData, monthlyData) {
      // Clean previous instances
      if (chartInstanceSlide2Annual) chartInstanceSlide2Annual.destroy();
      if (chartInstanceSlide2Monthly) chartInstanceSlide2Monthly.destroy();

      // 1. Annual average chart (Multi-color Bar Chart)
      const ctxAnnual = document.getElementById('chart-slide2-annual').getContext('2d');
      chartInstanceSlide2Annual = new Chart(ctxAnnual, {
        type: 'bar',
        data: {
          labels: annualData.categories,
          datasets: [{
            label: annualData.name,
            data: annualData.values,
            backgroundColor: [
              '#025763', // 2020: Dark Turquoise
              '#008296', // 2021: Turquoise Medium
              '#2A9D8F', // 2022: Soft Emerald
              '#457B9D', // 2023: Slate Blue
              '#D97706', // 2024: Amber
              '#E76F51', // 2025: Coral
              '#7B2CBF'  // 2026: Violet
            ],
            hoverBackgroundColor: [
              '#013b43',
              '#006473',
              '#1e7268',
              '#315972',
              '#a25902',
              '#c24a2e',
              '#5a218c'
            ],
            borderRadius: 8,
            borderWidth: 0,
            barThickness: 24
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#F5F5F5',
              titleColor: '#025763',
              bodyColor: '#008296',
              bodyFont: { family: 'Inter', weight: '600' },
              titleFont: { family: 'Inter', weight: '700' },
              padding: 12
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { family: 'Inter', weight: '500' }, color: '#025763' }
            },
            y: {
              grid: { color: 'rgba(200, 200, 200, 0.2)' },
              ticks: { font: { family: 'Inter' }, color: '#025763' }
            }
          }
        }
      });

      // 2. Monthly comparison chart (Ventas as Bars vs Presupuesto as Line)
      const ctxMonthly = document.getElementById('chart-slide2-monthly').getContext('2d');
      chartInstanceSlide2Monthly = new Chart(ctxMonthly, {
        type: 'bar',
        data: {
          labels: monthlyData.categories,
          datasets: [
            {
              type: 'bar',
              label: 'Ventas Reales',
              data: monthlyData.series[0].values,
              backgroundColor: '#457B9D', // Slate Blue for actual sales
              hoverBackgroundColor: '#315972',
              borderRadius: 6,
              barThickness: 14
            },
            {
              type: 'line',
              label: 'Presupuesto Asignado',
              data: monthlyData.series[1].values,
              borderColor: '#E76F51', // Coral line for budget
              borderWidth: 3,
              borderDash: [5, 5],
              pointBackgroundColor: '#E76F51',
              pointRadius: 4,
              fill: false,
              tension: 0.2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: { font: { family: 'Inter', weight: '600' }, color: '#025763' }
            },
            tooltip: {
              backgroundColor: '#F5F5F5',
              titleColor: '#025763',
              bodyColor: '#008296',
              bodyFont: { family: 'Inter', weight: '600' },
              titleFont: { family: 'Inter', weight: '700' },
              padding: 12
            }
          },
          scales: {
            x: {
              grid: { display: false },
              ticks: { font: { family: 'Inter', weight: '500' }, color: '#025763' }
            },
            y: {
              grid: { color: 'rgba(200, 200, 200, 0.2)' },
              ticks: { font: { family: 'Inter' }, color: '#025763' }
            }
          }
        }
      });
    }

    // TABLE GENERATION - SLIDE 1 (Resumen anual: Total y Promedio por año)
    function renderTableSlide1(isMonto) {
      const data = dashboardData.slide1;
      const table = document.getElementById('table-slide1');
      const thead = table.querySelector('thead');
      const tbody = table.querySelector('tbody');

      const years = Object.keys(data.years).map(Number).sort((a, b) => a - b);
      const fmt = v => new Intl.NumberFormat('es-PE', { maximumFractionDigits: 0 }).format(v);
      const sel = slide1Filters.year;

      // Cabecera
      let head = '<tr><th>AÑO</th>';
      years.forEach(y => {
        head += `<th class="${y === sel ? 'col-selected' : ''}">${y}</th>`;
      });
      thead.innerHTML = head + '</tr>';

      // Calcular total y promedio por año según métrica
      const totalRow = [], avgRow = [];
      years.forEach(y => {
        const serie = (isMonto ? data.years[y].monto : data.years[y].cantidad) || [];
        const vals = serie.filter(v => v != null);
        const total = vals.reduce((a, v) => a + v, 0);
        const avg = vals.length ? total / vals.length : 0;
        totalRow.push({ y, v: total });
        avgRow.push({ y, v: Math.round(avg) });
      });

      const pref = isMonto ? 'S/ ' : '';
      let body = `<tr><td class="row-label-total"><i class="fa-solid fa-coins"></i> TOTAL</td>`;
      totalRow.forEach(c => body += `<td class="${c.y === sel ? 'col-selected' : ''}">${pref}${fmt(c.v)}</td>`);
      body += `</tr><tr><td class="row-label-avg"><i class="fa-solid fa-chart-simple"></i> PROMEDIO</td>`;
      avgRow.forEach(c => body += `<td class="${c.y === sel ? 'col-selected' : ''}">${pref}${fmt(c.v)}</td>`);
      body += '</tr>';
      tbody.innerHTML = body;
    }

    // TABLE GENERATION - SLIDE 2 (13 months rows)
    function renderTableSlide2(tableData) {
      const tbody = document.getElementById('table-slide2').querySelector('tbody');
      tbody.innerHTML = '';

      tableData.months.forEach((month, index) => {
        const venta = tableData.ventas[index];
        const pres = tableData.presupuesto[index];
        
        // Calculate compliance %
        const pct = ((venta / pres) * 100);
        const pctFormatted = pct.toFixed(1) + '%';
        const isGood = pct >= 100;
        
        const complianceClass = isGood ? 'compliance-high' : 'compliance-low';
        const statusBadge = isGood 
          ? `<span class="compliance-high"><i class="fa-solid fa-circle-check"></i> Meta Alcanzada</span>`
          : `<span class="compliance-low"><i class="fa-solid fa-circle-exclamation"></i> En Desviación</span>`;

        const rowHtml = `
          <tr>
            <td style="text-align: left; padding-left: 20px;"><strong>${month}</strong></td>
            <td>${venta.toFixed(1)}</td>
            <td>${pres.toFixed(1)}</td>
            <td class="${complianceClass}">${pctFormatted}</td>
            <td>${statusBadge}</td>
          </tr>
        `;
        tbody.innerHTML += rowHtml;
      });
    }

    // FILTERS APPLICATOR (SIMULATION)
    function applyFilter(filterVal) {
      showToast('Actualizando Segmento', `Cargando datos del canal para: ${filterVal.toUpperCase()}`);
      
      const tableOuter = document.querySelector('#view-slide2 .table-outer-container');
      const chartCards = document.querySelectorAll('#view-slide2 .chart-card');
      
      // Show visual loading shimmer class
      tableOuter.classList.add('shimmer-bg');
      chartCards.forEach(c => c.classList.add('shimmer-bg'));

      setTimeout(() => {
        tableOuter.classList.remove('shimmer-bg');
        chartCards.forEach(c => c.classList.remove('shimmer-bg'));
        
        // Generate simulated variations of Slide 2 data based on filter
        const multiplier = filterVal === 'lima' ? 0.75 : (filterVal === 'provincia' ? 0.25 : 1.0);
        const originalData = dashboardData.slide2;

        const filteredAnnual = {
          categories: originalData.chartAnnual.categories,
          values: originalData.chartAnnual.values.map(v => Number((v * multiplier).toFixed(1))),
          name: originalData.chartAnnual.name
        };

        const filteredMonthly = {
          categories: originalData.chartMonthly.categories,
          series: [
            {
              name: originalData.chartMonthly.series[0].name,
              values: originalData.chartMonthly.series[0].values.map(v => Number((v * multiplier).toFixed(1)))
            },
            {
              name: originalData.chartMonthly.series[1].name,
              values: originalData.chartMonthly.series[1].values.map(v => Number((v * multiplier).toFixed(1)))
            }
          ]
        };

        const filteredTable = {
          months: originalData.table.months,
          ventas: originalData.table.ventas.map(v => v * multiplier),
          presupuesto: originalData.table.presupuesto.map(v => v * multiplier)
        };

        // Redraw with filtered data
        initChartsSlide2(filteredAnnual, filteredMonthly);
        renderTableSlide2(filteredTable);

        // Update the metric card totals for Slide 2
        const metricsContainer = document.getElementById('metrics-container');
        metricsContainer.innerHTML = '';
        
        const avg2026 = (270.7 * multiplier).toFixed(1);
        const lastVenta = (215 * multiplier).toFixed(1);
        const lastPres = (258.3 * multiplier).toFixed(1);
        const complianceVal = ((lastVenta / lastPres) * 100).toFixed(1);
        const trendUp = complianceVal >= 100;

        const cardsData = [
          {
            title: `Promedio Anual (${filterVal.toUpperCase()})`,
            value: avg2026,
            icon: "fa-solid fa-calendar-days",
            trendText: `Promedio del canal`,
            trendUp: true,
            accentColor: "#025763"
          },
          {
            title: "Ventas Mar 26",
            value: lastVenta,
            icon: "fa-solid fa-shop",
            trendText: "Venta real canal",
            trendUp: trendUp,
            accentColor: "#457B9D"
          },
          {
            title: "Presupuesto Mar 26",
            value: lastPres,
            icon: "fa-solid fa-chart-line",
            trendText: "Presupuesto canal",
            trendUp: true,
            accentColor: "#D97706"
          },
          {
            title: "Cumplimiento Canal",
            value: `${complianceVal}%`,
            icon: "fa-solid fa-check-double",
            trendText: trendUp ? "Meta cumplida" : "Por debajo de meta",
            trendUp: trendUp,
            accentColor: "#7B2CBF"
          }
        ];

        cardsData.forEach(card => {
          const trendClass = card.trendUp ? 'trend-up' : 'trend-down';
          const trendIcon = card.trendUp ? 'fa-arrow-trend-up' : 'fa-arrow-trend-down';
          
          const cardHtml = `
            <div class="metric-card">
              <div class="metric-header">
                <span class="metric-title">${card.title}</span>
                <div class="metric-icon-wrapper" style="color: ${card.accentColor};">
                  <i class="${card.icon}"></i>
                </div>
              </div>
              <div class="metric-value" style="color: ${card.accentColor};">${card.value}</div>
              <div class="metric-footer">
                <span class="trend-badge ${trendClass}">
                  <i class="fa-solid ${trendIcon}"></i>
                  <span>${card.trendText}</span>
                </span>
              </div>
            </div>
          `;
          metricsContainer.innerHTML += cardHtml;
        });

      }, 550);
    }

    // COLAPSAR / EXPANDIR LA BARRA LATERAL
    function toggleSidebar() {
      document.body.classList.toggle('nav-collapsed');
      // Reajustar los gráficos tras la animación de ancho
      setTimeout(() => {
        [chartInstanceSlide1, chartInstanceSlide2Annual, chartInstanceSlide2Monthly]
          .forEach(c => { if (c) c.resize(); });
        // Redimensionar también los gráficos dinámicos de otras pestañas
        Object.values(dynCharts).forEach(c => { if (c) c.resize(); });
      }, 320);
    }

    // INTERACTIVE TOAST
    function showToast(title, description) {
      const toast = document.getElementById('toast-notify');
      document.getElementById('toast-title').textContent = title;
      document.getElementById('toast-desc').textContent = description;
      
      toast.classList.add('active');
      
      setTimeout(() => {
        toast.classList.remove('active');
      }, 3500);
    }

    // NOTIFICATIONS PANEL INTERACTION (Removed from UI)
    function toggleNotifications() {
      const dropdown = document.getElementById('dropdown-notifications');
      if (dropdown) dropdown.classList.toggle('active');
    }

    // Close notifications if clicking outside
    document.addEventListener('click', (e) => {
      const dropdown = document.getElementById('dropdown-notifications');
      const bell = document.querySelector('.notification-bell');
      if (dropdown && bell && !dropdown.contains(e.target) && !bell.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    function clearNotifications() {
      const list = document.getElementById('notification-list');
      const badge = document.getElementById('alert-badge');
      if (list) {
        list.innerHTML = `
          <div style="padding: 20px; text-align: center; font-size: 13px; color: var(--color-turquoise-dark); opacity: 0.6;">
            <i class="fa-solid fa-envelope-open" style="font-size: 20px; margin-bottom: 8px; display: block; color: var(--color-turquoise-medium);"></i>
            No tienes notificaciones pendientes.
          </div>
        `;
      }
      if (badge) badge.style.display = 'none';
      showToast('Bandeja de Entrada limpia', 'Todas las alertas corporativas marcadas como leídas.');
    }
  