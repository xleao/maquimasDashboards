
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
        },
        slide3: {
          title: "Cantidad de ventas por Producto",
          filter: "Autoahorro",
          chartAnnual: {
            categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
            values: [214.0, 521.0, 839.0, 671.0, 664.5, 775.8, 863.0],
            name: "Promedio Anual"
          },
          chartMonthly: {
            categories: ['Mar.', 'Abr.', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Set.', 'Oct.', 'Nov.', 'Dic.', 'Ene.', 'Feb.', 'Mar.'],
            series: [
              { name: "Ventas", values: [608.0, 568.0, 675.0, 700.0, 777.0, 763.0, 890.0, 869.0, 990.0, 916.0, 935.0, 873.0, 781.0], color: "#8ECAE6" },
              { name: "Presupuesto", values: [714.0, 724.0, 731.0, 748.0, 763.0, 715.0, 745.0, 783.0, 798.0, 747.0, 826.0, 826.0, 859.0], color: "#A8DADC" }
            ]
          },
          table: {
            months: ['Mar 25', 'Abr 25', 'May 25', 'Jun 25', 'Jul 25', 'Ago 25', 'Set 25', 'Oct 25', 'Nov 25', 'Dic 25', 'Ene 26', 'Feb 26', 'Mar 26'],
            ventas: [608.0, 568.0, 675.0, 700.0, 777.0, 763.0, 890.0, 869.0, 990.0, 916.0, 935.0, 873.0, 781.0],
            presupuesto: [714.0, 724.0, 731.0, 748.0, 763.0, 715.0, 745.0, 783.0, 798.0, 747.0, 826.0, 826.0, 859.0]
          }
        },
        slide4: {
          title: "Cantidad de Ventas Netas: Ene – Mar 2026",
          table: {
            headers: [
              "AÑO",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019",
              "2020",
              "2021",
              "2022",
              "2023",
              "2024",
              "2025",
              "2026",
            ],
            total: [
              "410",
              "480",
              "505",
              "512",
              "528",
              "515",
              "1,010",
              "1,420",
              "524",
              "1,124",
              "2,818",
              "1,309",
            ],
            average: [
              "34",
              "40",
              "42",
              "43",
              "44",
              "43",
              "84",
              "118",
              "48",
              "94",
              "235",
              "436",
            ],
          },
          chart: {
            categories: [
              "Ene.",
              "Feb.",
              "Mar.",
              "Abr.",
              "May.",
              "Jun.",
              "Jul.",
              "Ago.",
              "Set.",
              "Oct.",
              "Nov.",
              "Dic.",
            ],
            series: [
              {
                name: "Ventas 26",
                values: [
                  476,
                  419,
                  414,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                ],
              },
              {
                name: "Ventas 25",
                values: [
                  156,
                  155,
                  147,
                  126,
                  176,
                  209,
                  257,
                  246,
                  274,
                  266,
                  377,
                  429,
                ],
              },
              {
                name: "Presupuesto",
                values: [
                  295,
                  295,
                  304,
                  316,
                  329,
                  349,
                  365,
                  374,
                  379,
                  390,
                  401,
                  403,
                ],
              },
            ],
          },
        }
      };
    }

    // ====== CONFIGURACIÓN DE LAS 26 VISTAS ======
    const SLIDES = [
      { id:'s1',  label:'Ventas / Directivos',      icon:'fa-chart-column',        kind:'iframe', iframeUrl:'https://app.powerbi.com/view?r=eyJrIjoiZjIxMGFiNzktODQyZi00YTJiLWI4ZjgtNmU2OGJhMWQ3OGZhIiwidCI6IjM1NDU5OGE1LTQwMmYtNDM1MS05M2IxLTNmNWE5MzJlMzg1MiJ9', title:'Ventas / Directivos', subtitle:'Tablero Power BI' },
      { id:'s2',  label:'Ventas / Seguimiento',     icon:'fa-circle-nodes',        kind:'iframe', iframeUrl:'https://app.powerbi.com/view?r=eyJrIjoiYmVjMTQwOTktZTM3MS00NTI0LWEwMzctNmZlZWMwNzFkN2JmIiwidCI6IjM1NDU5OGE1LTQwMmYtNDM1MS05M2IxLTNmNWE5MzJlMzg1MiJ9', title:'Ventas / Seguimiento', subtitle:'Tablero Power BI' },
      { id:'s3',  label:'Ventas por Origen',       icon:'fa-circle-nodes',            kind:'origin', data:'slide2', title: 'Cantidad de ventas por Origen de la venta' },
      { id:'s27', label:'Ventas por Producto',     icon:'fa-circle-nodes',            kind:'origin', data:'slide3', title: 'Cantidad de ventas por Producto' },
      { id:'s28', label:'Ventas Netas',              icon:'fa-coins',               kind:'combo3', data:'slide4', title: 'Cantidad de Ventas Netas: Ene – Mar 2026' },
      { id:'s4',  label:'Cantidad de Ventas',        icon:'fa-chart-column',        kind:'sales', data:'slide1' },
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
      { id:'s19', label:'ADG — Asambleas',           icon:'fa-people-group',kind:'adgAsambleas', title:'ADG — Asambleas Inaugurales', subtitle:'Portal de Business Intelligence' },
      { id:'s20', label:'ADG — Reactivaciones',      icon:'fa-rotate-right',kind:'adgReactivaciones', title:'ADG — Reactivaciones', subtitle:'Portal de Business Intelligence' },
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
        if (slide1Filters.from > slide1Filters.to) { slide1Filters.to = slide1Filters.from; toSel.value = slide1Filters.to; }
        renderSlide1();
      });
      toSel.addEventListener('change', e => {
        slide1Filters.to = Number(e.target.value);
        if (slide1Filters.to < slide1Filters.from) { slide1Filters.from = slide1Filters.to; fromSel.value = slide1Filters.from; }
        renderSlide1();
      });
    }

    // Mapping of sub-categories to their corresponding slides/views
    const SUBCAT_MAPPING = {
      'directivos': { slides: ['s1'] },
      'seguimiento': { slides: ['s2'] },
      'cantidadventas': { slides: ['s4'] },
      'ventasproducto': { slides: ['s3'] },
      'ventasporproducto': { slides: ['s27'] },
      'ventasnetas': { slides: ['s28'] },
      'productividadantig': { slides: ['s5'] },
      'dotacionantig': { slides: ['s6'] },
      'limaprovincia': { slides: ['s7'] },
      'calidadventa': { slides: ['s8'] },
      'segsusann': { slides: ['s9'] },
      'reportegerencial': { slides: ['s10'] },
      'cuotainscripcion': { slides: ['s11'] },
      'ventacomercial': { slides: ['s12'] },
      'ventadiaria': { slides: ['s13'] },
      'ventaprodrep': { slides: ['s15'] },
      'productividadreporte': { slides: ['s14'] },
      'vendedoressinventa': { slides: ['s24'] },
      'adg': { slides: ['s19', 's20'] },
      'edb': { slides: ['s21', 's22', 's23'] },
      'rrhh': { slides: ['s25'] },
      'contactcenter': { slides: ['s17', 's18'] },
      'varios': { slides: ['s7', 's8', 's9', 's10', 's11', 's12', 's13', 's15'] },
      'cobranza': { slides: ['s16'] }
    };

    let currentCategory = 'ventas';
    let currentSubCategory = 'directivos';
    let lastPeruSlide = 's1';

    // ====== NAVBAR INITIALIZATION ======
    function buildNav() {
      // Expand "Ventas" by default on startup
      const catVentas = document.getElementById("cat-ventas");
      if (catVentas) catVentas.classList.add("expanded");

      // Activate "Directivos" sub-item on startup
      const btnDirectivos = document.getElementById("btn-directivos");
      if (btnDirectivos) btnDirectivos.classList.add("active");
      
      renderSubTabs('directivos');
    }

    function selectMenuSubItem(catKey, subCatKey) {
      currentCategory = catKey;
      currentSubCategory = subCatKey;

      // Deactivate all sub-btns
      document.querySelectorAll(".sub-btn").forEach(btn => btn.classList.remove("active"));
      
      // Activate clicked one(s) (handles duplicates in main and nested menus)
      const clickedBtns = document.querySelectorAll(`[onclick*="'${subCatKey}'"]`);
      clickedBtns.forEach(clickedBtn => {
        clickedBtn.classList.add("active");
        // Expand parent nested category if button is inside one
        const parentNested = clickedBtn.closest(".nested-category");
        if (parentNested) {
          parentNested.classList.add("expanded");
        }
      });

      // Get corresponding slides
      const mapping = SUBCAT_MAPPING[subCatKey];
      if (mapping && mapping.slides.length > 0) {
        selectSlide(mapping.slides[0]);
        renderSubTabs(subCatKey);
      } else {
        // Placeholder views (Planeamiento, Créditos, Tesorería, Usuarios, Roles)
        showPlaceholderView(subCatKey);
      }
    }

    function renderSubTabs(subCatKey) {
      const container = document.getElementById("sub-tabs-container");
      if (!container) return;

      const mapping = SUBCAT_MAPPING[subCatKey];
      if (!mapping || mapping.slides.length <= 1) {
        container.style.display = "none";
        return;
      }

      container.style.display = "flex";
      container.innerHTML = mapping.slides.map(slideId => {
        const slide = SLIDES.find(s => s.id === slideId);
        if (!slide) return '';
        const activeClass = (activeSlide === slideId) ? 'active' : '';
        return `<button class="sub-tab-btn ${activeClass}" onclick="selectSubTab('${slideId}', '${subCatKey}')">${slide.label}</button>`;
      }).join('');
    }

    function selectSubTab(slideId, subCatKey) {
      selectSlide(slideId);
      renderSubTabs(subCatKey);
    }

    function showPlaceholderView(subCatKey) {
      // Set title
      let title = subCatKey.charAt(0).toUpperCase() + subCatKey.slice(1);
      if (subCatKey === 'planeamiento') title = 'Finanzas / Planeamiento';
      if (subCatKey === 'creditos') title = 'Finanzas / Créditos';
      if (subCatKey === 'tesoreria') title = 'Finanzas / Tesorería';
      if (subCatKey === 'usuarios') title = 'Seguridad / Usuarios';
      if (subCatKey === 'roles') title = 'Seguridad / Roles';

      document.getElementById("dashboard-title").textContent = title;
      document.getElementById("dashboard-subtitle").textContent = "Portal Corporativo de Business Intelligence";
      
      // Hide filters and metrics
      const hf = document.getElementById("slide1-header-filters");
      if (hf) hf.style.display = "none";
      document.getElementById("metrics-container").style.display = "none";
      document.getElementById("sub-tabs-container").style.display = "none";

      // Show placeholder in view-dynamic
      const host = document.getElementById("view-dynamic");
      document.getElementById("view-slide1").classList.remove("active");
      document.getElementById("view-dynamic").classList.add("active");

      host.innerHTML = `
        <section class="chart-card" style="padding: 50px; text-align: center; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px; gap: 20px;">
          <div style="width: 80px; height: 80px; background-color: var(--color-bg-gray); border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-raised-sm); color: var(--color-turquoise-medium); font-size: 32px;">
            <i class="fa-solid fa-clock-rotate-left"></i>
          </div>
          <h2 style="color: var(--color-turquoise-dark); font-weight: 700; margin-top: 10px;">Módulo en Construcción</h2>
          <p style="color: var(--color-turquoise-dark); opacity: 0.7; max-width: 450px; font-size: 14px; line-height: 1.6;">
            Este tablero se encuentra actualmente en fase de desarrollo y estará disponible en la próxima actualización del Portal de BI.
          </p>
        </section>
      `;
    }

    function handleCountryChange(value) {
      if (value === 'colombia') {
        // Store last Peru slide if it wasn't s26
        if (activeSlide !== 's26') {
          lastPeruSlide = activeSlide;
        }
        
        // Collapse all accordion categories
        document.querySelectorAll(".menu-category").forEach(cat => {
          cat.classList.remove("expanded");
        });
        // Deactivate all sub-btns
        document.querySelectorAll(".sub-btn").forEach(btn => btn.classList.remove("active"));
        
        // Hide sub tabs
        document.getElementById("sub-tabs-container").style.display = "none";
        
        // Select slide s26 (Maquimas Colombia)
        selectSlide('s26');
      } else {
        // Switch back to Peru: expand last category and load last Peru slide
        let foundSubCat = 'directivos';
        let foundCat = 'ventas';
        for (const [subCatKey, mapping] of Object.entries(SUBCAT_MAPPING)) {
          if (mapping.slides.includes(lastPeruSlide)) {
            foundSubCat = subCatKey;
            if (['directivos', 'seguimiento'].includes(subCatKey)) foundCat = 'ventas';
            else if (['adg', 'edb', 'rrhh', 'contactcenter', 'varios'].includes(subCatKey)) foundCat = 'operaciones';
            else if (['cobranza'].includes(subCatKey)) foundCat = 'finanzas';
            break;
          }
        }
        
        const catDiv = document.getElementById("cat-" + foundCat);
        if (catDiv) catDiv.classList.add("expanded");
        
        selectMenuSubItem(foundCat, foundSubCat);
        
        // If the slide was inside a group, select the correct slide
        selectSlide(lastPeruSlide);
        renderSubTabs(foundSubCat);
      }
    }

    // Toggle category logic
    function toggleCategory(catKey) {
      const countryRadioPeru = document.querySelector('input[name="country"][value="peru"]');
      const countryRadioCol = document.querySelector('input[name="country"][value="colombia"]');
      if (countryRadioCol && countryRadioCol.checked) {
        countryRadioCol.checked = false;
        if (countryRadioPeru) countryRadioPeru.checked = true;
        handleCountryChange('peru');
      }

      const catDiv = document.getElementById("cat-" + catKey);
      if (!catDiv) return;

      const isExpanded = catDiv.classList.contains("expanded");
      
      document.querySelectorAll(".menu-category").forEach(cat => {
        if (cat !== catDiv) cat.classList.remove("expanded");
      });

      if (isExpanded) {
        catDiv.classList.remove("expanded");
      } else {
        catDiv.classList.add("expanded");
      }
    }

    function triggerActualizarDatos() {
      showToast("Actualizando datos...", "Sincronizando con los servidores de Power BI.");
      setTimeout(() => {
        showToast("Datos actualizados", "Todos los tableros han sido actualizados con éxito.");
      }, 1200);
    }

    function triggerSalir() {
      showToast("Cerrando sesión...", "Redirigiendo de forma segura al portal corporativo.");
      setTimeout(() => {
        alert("Sesión finalizada. Redirigiendo...");
      }, 1500);
    }

    // Keyboard Shortcuts Listener
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        triggerActualizarDatos();
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        triggerSalir();
      }
    });

    // ====== ROUTER ======
    function selectSlide(id) {
      activeSlide = id;
      document.querySelectorAll('.sub-btn').forEach(b => b.classList.remove('active'));
      
      let subCatKey = null;
      for (const [key, mapping] of Object.entries(SUBCAT_MAPPING)) {
        if (mapping.slides.includes(id)) {
          subCatKey = key;
          break;
        }
      }
      if (subCatKey) {
        const btn = document.getElementById("btn-" + subCatKey);
        if (btn) btn.classList.add("active");
      }

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
        iframe: renderIframe, adgAsambleas: renderAdgAsambleas, adgReactivaciones: renderAdgReactivaciones
      }[slide.kind] || (() => {}))(slide, host);
    }

    // ---- ADG ASAMBLEAS (slide 19) ----
    function renderAdgAsambleas(slide, host) {
      renderMetricCards([
        { title: "Cant. Grupos Formación", value: "6", icon: "fa-solid fa-people-group", trendText: "Periodo 2026", trendUp: true, accentColor: "#0E8C9B" },
        { title: "Grupos Listos para Asamblea", value: "1", icon: "fa-solid fa-list-check", trendText: "Listo para convocar", trendUp: true, accentColor: "#3A7CA5" },
        { title: "Asambleas Inaugurales", value: "41", icon: "fa-solid fa-circle-check", trendText: "Realizadas", trendUp: true, accentColor: "#E0A458" },
        { title: "Periodo", value: "2026", icon: "fa-solid fa-calendar", trendText: "Filtro activo", trendUp: true, accentColor: "#E2674F" }
      ]);

      host.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 30px; width: 100%;">
          <!-- Grupos en Formación -->
          <section class="table-card" style="margin: 0;">
            <div class="table-card-header">
              <h3 class="table-card-title"><i class="fa-solid fa-users-gear"></i><span>Grupos en Formación</span></h3>
            </div>
            <div class="table-outer-container">
              <table>
                <thead>
                  <tr>
                    <th>Grupo</th>
                    <th>Teórico del Grupo</th>
                    <th>Contratos Inscritos</th>
                    <th>Recaudación Actual</th>
                    <th>Recaudación Mínima</th>
                    <th>Importe para Convocar Asamblea</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>A224</strong></td><td>180</td><td>107</td><td>S/ 24,349.79</td><td>S/ 20,000.00</td><td class="compliance-high">S/ 0.00</td></tr>
                  <tr><td><strong>C207</strong></td><td>450</td><td>36</td><td>S/ 11,500.04</td><td>S/ 60,000.00</td><td class="compliance-low">S/ 48,499.96</td></tr>
                  <tr><td><strong>M3P5</strong></td><td>240</td><td>240</td><td>S/ 47,801.25</td><td>S/ 24,000.00</td><td class="compliance-high">S/ 0.00</td></tr>
                  <tr><td><strong>M3P6</strong></td><td>240</td><td>119</td><td>S/ 24,847.50</td><td>S/ 24,000.00</td><td class="compliance-high">S/ 0.00</td></tr>
                  <tr><td><strong>S1J2</strong></td><td>180</td><td>180</td><td>S/ 50,060.69</td><td>S/ 25,000.00</td><td class="compliance-high">S/ 0.00</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <!-- Grupos Programados para Asamblea -->
            <section class="table-card" style="margin: 0;">
              <div class="table-card-header">
                <h3 class="table-card-title"><i class="fa-solid fa-calendar-check"></i><span>Grupos Programados para Asamblea</span></h3>
              </div>
              <div class="table-outer-container" style="min-height: 250px;">
                <table>
                  <thead>
                    <tr>
                      <th>Grupos</th>
                      <th>Teórico del Grupo</th>
                      <th>Contratos Inscritos</th>
                      <th>Vacantes Libres</th>
                      <th>Fecha Primera Asamblea</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colspan="5" style="text-align: center; padding: 60px 20px; color: var(--color-turquoise-dark); opacity: 0.6;">
                        <i class="fa-solid fa-circle-info" style="font-size: 24px; display: block; margin-bottom: 12px; color: var(--color-turquoise-medium);"></i>
                        No hay grupos programados actualmente para asamblea.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Grupos Inaugurados -->
            <section class="table-card" style="margin: 0;">
              <div class="table-card-header">
                <h3 class="table-card-title"><i class="fa-solid fa-award"></i><span>Grupos Inaugurados</span></h3>
              </div>
              <div class="table-outer-container" style="max-height: 250px; overflow-y: auto;">
                <table style="min-width: 600px;">
                  <thead style="position: sticky; top: 0; z-index: 10;">
                    <tr>
                      <th>Grupo</th>
                      <th>Fecha 1ra. Asamblea</th>
                      <th>Recaudación Inicial</th>
                      <th>Sorteos</th>
                      <th>Remates</th>
                      <th>Vacantes Ocupadas</th>
                      <th>Vacantes Libres</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td><strong>A217</strong></td><td>07/01/2026</td><td>S/ 39,949.80</td><td>1</td><td>5</td><td>178</td><td>2</td></tr>
                    <tr><td><strong>A218</strong></td><td>13/01/2026</td><td>S/ 44,366.31</td><td>1</td><td>4</td><td>177</td><td>3</td></tr>
                    <tr><td><strong>A219</strong></td><td>13/02/2026</td><td>S/ 45,399.59</td><td>1</td><td>3</td><td>177</td><td>3</td></tr>
                    <tr><td><strong>A220</strong></td><td>26/01/2026</td><td>S/ 0.00</td><td>1</td><td>1</td><td>0</td><td class="compliance-low">180</td></tr>
                    <tr><td><strong>A220</strong></td><td>20/02/2026</td><td>S/ 43,916.35</td><td>1</td><td>4</td><td>176</td><td>4</td></tr>
                    <tr><td><strong>A221</strong></td><td>26/02/2026</td><td>S/ 45,132.93</td><td>1</td><td>4</td><td>180</td><td class="compliance-high">0</td></tr>
                    <tr><td><strong>A222</strong></td><td>13/03/2026</td><td>S/ 44,249.64</td><td>1</td><td>3</td><td>175</td><td>5</td></tr>
                    <tr><td><strong>A223</strong></td><td>31/03/2026</td><td>S/ 43,749.63</td><td>1</td><td>3</td><td>179</td><td>1</td></tr>
                    <tr><td><strong>A224</strong></td><td>21/04/2026</td><td>S/ 43,266.34</td><td>1</td><td>4</td><td>179</td><td>1</td></tr>
                    <tr><td><strong>A225</strong></td><td>30/04/2026</td><td>S/ 43,149.67</td><td>1</td><td>3</td><td>180</td><td class="compliance-high">0</td></tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      `;
    }

    // ---- ADG REACTIVACIONES (slide 20) ----
    function renderAdgReactivaciones(slide, host) {
      renderMetricCards([
        { title: "Cant. Reactivaciones", value: "2,998", icon: "fa-solid fa-arrows-rotate", trendText: "Total acumulado", trendUp: true, accentColor: "#0E8C9B" },
        { title: "Meta Reactivaciones", value: "3,252", icon: "fa-solid fa-bullseye", trendText: "Meta del año", trendUp: true, accentColor: "#E0A458" },
        { title: "% Cumplimiento Reactivaciones", value: "92%", icon: "fa-solid fa-percentage", trendText: "Desviación: -8%", trendUp: false, accentColor: "#E2674F" },
        { title: "Periodo / Zona", value: "2025 / Todas", icon: "fa-solid fa-globe", trendText: "Filtro regional", trendUp: true, accentColor: "#3A7CA5" }
      ]);

      host.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 30px; width: 100%;">
          <div style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 25px;">
            <!-- Detalle de Reactivaciones (Tabla) -->
            <section class="table-card" style="margin: 0;">
              <div class="table-card-header">
                <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Detalle de Reactivaciones (Arequipa)</span></h3>
              </div>
              <div class="table-outer-container" style="max-height: 320px; overflow-y: auto;">
                <table>
                  <thead style="position: sticky; top: 0; z-index: 10;">
                    <tr>
                      <th>Año</th>
                      <th>Mes</th>
                      <th>Zona Oficial</th>
                      <th>Cant. Reactivaciones</th>
                      <th>Meta Reactivaciones</th>
                      <th>% Cumplimiento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>2025</td><td>Enero</td><td>AREQUIPA</td><td>42</td><td>25</td><td class="compliance-high">168%</td></tr>
                    <tr><td>2025</td><td>Febrero</td><td>AREQUIPA</td><td>25</td><td>25</td><td class="compliance-high">100%</td></tr>
                    <tr><td>2025</td><td>Marzo</td><td>AREQUIPA</td><td>40</td><td>25</td><td class="compliance-high">160%</td></tr>
                    <tr><td>2025</td><td>Abril</td><td>AREQUIPA</td><td>40</td><td>25</td><td class="compliance-high">160%</td></tr>
                    <tr><td>2025</td><td>Mayo</td><td>AREQUIPA</td><td>38</td><td>25</td><td class="compliance-high">152%</td></tr>
                    <tr><td>2025</td><td>Junio</td><td>AREQUIPA</td><td>36</td><td>25</td><td class="compliance-high">144%</td></tr>
                    <tr><td>2025</td><td>Julio</td><td>AREQUIPA</td><td>21</td><td>25</td><td class="compliance-low">84%</td></tr>
                    <tr><td>2025</td><td>Agosto</td><td>AREQUIPA</td><td>28</td><td>30</td><td class="compliance-low">93%</td></tr>
                    <tr><td>2025</td><td>Septiembre</td><td>AREQUIPA</td><td>37</td><td>25</td><td class="compliance-high">148%</td></tr>
                    <tr><td>2025</td><td>Octubre</td><td>AREQUIPA</td><td>46</td><td>25</td><td class="compliance-high">184%</td></tr>
                    <tr style="background-color: rgba(14, 140, 155, 0.1); font-weight: 700;">
                      <td colspan="3"><strong>Total General</strong></td>
                      <td>2,998</td>
                      <td>3,252</td>
                      <td class="compliance-high">92%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <!-- Distribución por Zonas (Gráfico de Barras) -->
            <div class="chart-card" style="margin: 0;">
              <div class="chart-card-header">
                <h3 class="chart-card-title"><i class="fa-solid fa-map-location-dot"></i><span>Distribución por Zonas</span></h3>
              </div>
              <div class="chart-canvas-wrapper"><canvas id="adg-zone-chart"></canvas></div>
            </div>
          </div>

          <!-- Comparativo Mensual (Gráfico de Barras + Línea) -->
          <div class="chart-card" style="width: 100%; margin: 0;">
            <div class="chart-card-header">
              <h3 class="chart-card-title"><i class="fa-solid fa-chart-line"></i><span>Comparativo Mensual: Reactivaciones vs Meta & % Cumplimiento (2025)</span></h3>
              <div class="chart-legend">
                <div class="legend-pill"><span class="legend-swatch" style="background:#E2674F"></span>Reactivaciones</div>
                <div class="legend-pill"><span class="legend-swatch" style="background:#3A7CA5"></span>Meta</div>
                <div class="legend-pill"><span class="legend-swatch line" style="background:#E0A458"></span>% Cumplimiento</div>
              </div>
            </div>
            <div class="chart-canvas-wrapper" style="height: 320px;"><canvas id="adg-monthly-chart"></canvas></div>
          </div>
        </div>
      `;

      // Draw Zone Chart
      drawChart("adg-zone-chart", {
        type: "bar",
        data: {
          labels: ["LIMA", "AREQUIPA", "TRUJILLO", "CHICLAYO", "PIURA", "HUANCAYO"],
          datasets: [{
            data: [70, 14, 5, 4, 4, 4],
            backgroundColor: ["#0E8C9B", "#3A7CA5", "#E0A458", "#E2674F", "#2A9D8F", "#6C8EBF"],
            borderRadius: 6,
            maxBarThickness: 26
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          plugins: {
            legend: { display: false },
            tooltip: baseTooltip,
            datalabels: {
              anchor: "end",
              align: "right",
              color: "#0C6470",
              font: { family: "Inter", weight: "700", size: 10 },
              formatter: v => v + "%"
            }
          },
          scales: {
            x: { beginAtZero: true, max: 100, ticks: { callback: v => v + "%" }, grid: { color: "rgba(0,0,0,0.04)" } },
            y: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#0C6470" } }
          }
        },
        plugins: [ChartDataLabels]
      });

      // Draw Monthly Chart
      drawChart("adg-monthly-chart", {
        data: {
          labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
          datasets: [
            {
              type: "bar",
              label: "Reactivaciones",
              data: [292, 251, 245, 240, 249, 232, 235, 261, 273, 280, 255, 185],
              backgroundColor: "#E2674F",
              borderRadius: 5,
              maxBarThickness: 20,
              yAxisID: "y"
            },
            {
              type: "bar",
              label: "Meta",
              data: [268, 257, 267, 264, 275, 257, 255, 290, 298, 298, 275, 248],
              backgroundColor: "#3A7CA5",
              borderRadius: 5,
              maxBarThickness: 20,
              yAxisID: "y"
            },
            {
              type: "line",
              label: "% Cumplimiento",
              data: [109, 98, 92, 91, 91, 90, 92, 90, 92, 94, 93, 75],
              borderColor: "#E0A458",
              backgroundColor: "#E0A458",
              borderWidth: 3,
              tension: 0.3,
              pointRadius: 4,
              yAxisID: "y1",
              datalabels: {
                align: "top",
                color: "#B46500",
                font: { family: "Inter", weight: "700", size: 10 },
                formatter: v => v + "%"
              }
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 15 } },
          plugins: {
            legend: { display: false },
            tooltip: baseTooltip,
            datalabels: {
              display: ctx => ctx.dataset.type === "line"
            }
          },
          scales: {
            x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#0C6470" } },
            y: { position: "left", beginAtZero: true, grid: { color: "rgba(0,0,0,0.06)" }, ticks: { color: "#6b7280" } },
            y1: { position: "right", beginAtZero: true, max: 150, grid: { display: false }, ticks: { color: "#6b7280", callback: v => v + "%" } }
          }
        },
        plugins: [ChartDataLabels]
      });
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
            '<div class="legend-pill"><span class="legend-swatch line" style="background:#0E8C9B"></span>Ventas</div><div class="legend-pill"><span class="legend-swatch line" style="background:#E2674F"></span>Presupuesto</div>')}
        </section>
        ${(slide.id === 's27' || slide.id === 's3') ? '' : tableCard('Detalle Mensual: Ventas vs Presupuesto', 'dyn-table')}`;

      drawChart('dyn-a', {
        type: 'bar',
        data: { labels: a.categories.map(c => String(c).replace('año ', '')), datasets: [{ data: a.values, backgroundColor: a.values.map((_, i) => PALETTE[i % PALETTE.length]), borderRadius: 6, maxBarThickness: 44 }] },
        options: { responsive: true, maintainAspectRatio: false, layout: { padding: { top: 20 } }, plugins: { legend: { display: false }, tooltip: baseTooltip, datalabels: { anchor: 'end', align: 'top', color: '#0C6470', font: { family: 'Inter', weight: '700', size: 11 }, formatter: v => nf(v, 0) } }, scales: baseScales() },
        plugins: [ChartDataLabels]
      });
      drawChart('dyn-b', {
        data: { labels: m.categories, datasets: [
          {
            type: 'line',
            label: m.series[0].name,
            data: ventas,
            borderColor: '#0E8C9B',
            backgroundColor: '#0E8C9B',
            borderWidth: 3,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#FFFFFF',
            pointBorderColor: '#0E8C9B',
            pointBorderWidth: 2,
            datalabels: {
              backgroundColor: 'rgba(235, 246, 242, 0.9)',
              borderRadius: 4,
              padding: { top: 2, right: 5, bottom: 2, left: 5 },
              color: '#0C6470',
              font: { family: 'Inter', weight: '700', size: 10 },
              align: (ctx) => {
                const i = ctx.dataIndex;
                const vVal = ctx.chart.data.datasets[0].data[i];
                const pVal = ctx.chart.data.datasets[1].data[i];
                if (vVal === null || pVal === null) return "bottom";
                return vVal >= pVal ? "top" : "bottom";
              },
              anchor: (ctx) => {
                const i = ctx.dataIndex;
                const vVal = ctx.chart.data.datasets[0].data[i];
                const pVal = ctx.chart.data.datasets[1].data[i];
                if (vVal === null || pVal === null) return "start";
                return vVal >= pVal ? "end" : "start";
              },
              formatter: v => nf(v, 1)
            }
          },
          {
            type: 'line',
            label: m.series[1].name,
            data: pres,
            borderColor: '#E2674F',
            backgroundColor: '#E2674F',
            borderWidth: 3,
            tension: 0.35,
            pointRadius: 4,
            pointBackgroundColor: '#FFFFFF',
            pointBorderColor: '#E2674F',
            pointBorderWidth: 2,
            datalabels: {
              backgroundColor: 'rgba(253, 242, 240, 0.9)',
              borderRadius: 4,
              padding: { top: 2, right: 5, bottom: 2, left: 5 },
              color: '#A23B24',
              font: { family: 'Inter', weight: '700', size: 10 },
              align: (ctx) => {
                const i = ctx.dataIndex;
                const vVal = ctx.chart.data.datasets[0].data[i];
                const pVal = ctx.chart.data.datasets[1].data[i];
                if (vVal === null || pVal === null) return "top";
                return vVal >= pVal ? "bottom" : "top";
              },
              anchor: (ctx) => {
                const i = ctx.dataIndex;
                const vVal = ctx.chart.data.datasets[0].data[i];
                const pVal = ctx.chart.data.datasets[1].data[i];
                if (vVal === null || pVal === null) return "end";
                return vVal >= pVal ? "start" : "end";
              },
              formatter: v => nf(v, 1)
            }
          }
        ] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 22, bottom: 10 } },
          plugins: {
            legend: { display: false },
            tooltip: baseTooltip,
            datalabels: { display: (ctx) => ctx.dataset.data[ctx.dataIndex] != null }
          },
          scales: baseScales()
        },
        plugins: [ChartDataLabels]
      });

      if (slide.id !== 's27' && slide.id !== 's3') {
        const t = d.table;
        let html = '<thead><tr><th>Mes</th><th>Ventas</th><th>Presupuesto</th><th>Cumplimiento</th><th>Estado</th></tr></thead><tbody>';
        t.months.forEach((mo, i) => {
          const v = t.ventas[i], pp = t.presupuesto[i]; const pc = pp ? (v / pp * 100) : 0; const ok = pc >= 100;
          html += `<tr><td style="text-align:left;padding-left:20px"><strong>${mo}</strong></td><td>${nf(v, 1)}</td><td>${nf(pp, 1)}</td><td class="${ok ? 'compliance-high' : 'compliance-low'}">${pc.toFixed(1)}%</td><td><span class="${ok ? 'compliance-high' : 'compliance-low'}"><i class="fa-solid ${ok ? 'fa-circle-check' : 'fa-circle-exclamation'}"></i> ${ok ? 'Meta' : 'Desv.'}</span></td></tr>`;
        });
        document.getElementById('dyn-table').innerHTML = html + '</tbody>';
      }
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
      const canvas = document.getElementById("dyn-a");
      const ctx = canvas.getContext("2d");
      const grad = ctx.createLinearGradient(0, 0, 0, 360);
      grad.addColorStop(0, "#16A6B6");
      grad.addColorStop(1, "#0C6470");

      drawChart('dyn-a', {
        data: { labels: c.categories, datasets: [
          {
            type: 'bar',
            label: 'Ventas 26',
            data: s0,
            backgroundColor: grad,
            hoverBackgroundColor: '#008296',
            borderRadius: 6,
            maxBarThickness: 46,
            order: 3,
            datalabels: {
              anchor: 'start',
              align: 'top',
              offset: 2,
              clamp: true,
              backgroundColor: 'rgba(235, 246, 242, 0.9)',
              borderRadius: 4,
              padding: { top: 2, right: 5, bottom: 2, left: 5 },
              color: '#025763',
              font: { family: 'Inter', weight: '700', size: 11 },
              formatter: v => nf(v)
            }
          },
          {
            type: 'line',
            label: 'Ventas 25',
            data: s1,
            borderColor: '#E2674F',
            backgroundColor: '#E2674F',
            borderWidth: 3,
            pointRadius: 3,
            pointHoverRadius: 6,
            tension: 0.4,
            order: 1,
            datalabels: {
              backgroundColor: 'rgba(235, 246, 242, 0.9)',
              borderRadius: 4,
              padding: { top: 2, right: 5, bottom: 2, left: 5 },
              align: (ctx) => {
                const i = ctx.dataIndex;
                const red = s1[i];
                const yellow = s2[i];
                if (red == null || yellow == null) return 'bottom';
                return 'bottom';
              },
              offset: (ctx) => {
                const i = ctx.dataIndex;
                const red = s1[i];
                const yellow = s2[i];
                if (red == null || yellow == null) return 8;
                return Math.abs(red - yellow) <= 120 ? 16 : 8;
              },
              clamp: true,
              color: '#C24B36',
              font: { family: 'Inter', weight: '700', size: 10 },
              formatter: v => nf(v)
            }
          },
          {
            type: 'line',
            label: 'Presupuesto',
            data: s2,
            borderColor: '#E0A458',
            backgroundColor: '#E0A458',
            borderWidth: 3,
            pointRadius: 3,
            pointHoverRadius: 6,
            tension: 0.4,
            order: 2,
            datalabels: {
              backgroundColor: 'rgba(235, 246, 242, 0.9)',
              borderRadius: 4,
              padding: { top: 2, right: 5, bottom: 2, left: 5 },
              align: (ctx) => {
                const i = ctx.dataIndex;
                const red = s1[i];
                const yellow = s2[i];
                if (red == null || yellow == null) return 'top';
                return 'top';
              },
              offset: (ctx) => {
                const i = ctx.dataIndex;
                const red = s1[i];
                const yellow = s2[i];
                if (red == null || yellow == null) return 8;
                return Math.abs(red - yellow) <= 120 ? 16 : 8;
              },
              clamp: true,
              color: '#B97D2E',
              font: { family: 'Inter', weight: '700', size: 10 },
              formatter: v => nf(v)
            }
          }
        ] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 24 } },
          plugins: {
            legend: { display: false },
            tooltip: baseTooltip,
            datalabels: { display: (ctx) => ctx.dataset.data[ctx.dataIndex] != null }
          },
          scales: baseScales()
        },
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
        ${slide.id === 's5' ? '' : tableCard('Detalle de Productividad por Antigüedad', 'dyn-table')}`;
      drawChart('dyn-a', {
        type: 'bar',
        data: { labels: c.categories, datasets: c.series.map((s, i) => ({ label: s.name, data: s.values, backgroundColor: PALETTE[i % PALETTE.length], borderRadius: 5, maxBarThickness: 20 })) },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: legendTop, tooltip: baseTooltip, datalabels: { display: false } }, scales: baseScales() },
        plugins: [ChartDataLabels]
      });
      if (slide.id !== 's5') {
        const tt = d.table;
        let html = '<thead><tr><th>Antigüedad</th>' + tt.months.map(mo => `<th>${mo}</th>`).join('') + '</tr></thead><tbody>';
        Object.keys(tt.antiguedades).forEach(band => {
          html += `<tr><td style="text-align:left;padding-left:20px"><strong>${band}</strong></td>` + tt.antiguedades[band].map(v => `<td>${v.toFixed(2)}</td>`).join('') + '</tr>';
        });
        document.getElementById('dyn-table').innerHTML = html + '</tbody>';
      }
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
        ${slide.id === 's6' ? '' : tableCard('Detalle de Dotación por Antigüedad', 'dyn-table')}`;
      const ds = bars.map((s, i) => ({ type: 'bar', label: s.name, data: s.values, backgroundColor: PALETTE[i % PALETTE.length], stack: 'dot', maxBarThickness: 28 }));
      ds.push({ type: 'line', label: line.name, data: line.values, borderColor: '#E2674F', backgroundColor: '#E2674F', borderWidth: 3, tension: 0.35, pointRadius: 3 });
      drawChart('dyn-a', {
        data: { labels: c.categories, datasets: ds },
        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: legendTop, tooltip: baseTooltip, datalabels: { display: false } }, scales: { x: { stacked: true, grid: { display: false }, ticks: { font: { family: 'Inter', weight: '600' }, color: '#0C6470' } }, y: { stacked: true, beginAtZero: true, grid: { color: 'rgba(0,0,0,0.06)' }, ticks: { color: '#6b7280' } } } },
        plugins: [ChartDataLabels]
      });
      if (slide.id !== 's6') {
        const sr = d.table.series; const labels = { less_1m: '< 1M', one_three_m: '[1-3] M', four_six_m: '[4-6] M', more_6m: '> 6M', total: 'Total', rotation: 'Rotación' };
        let html = '<thead><tr><th>Indicador</th>' + d.table.months.map(mo => `<th>${mo}</th>`).join('') + '</tr></thead><tbody>';
        Object.keys(sr).forEach(k => {
          html += `<tr><td style="text-align:left;padding-left:20px"><strong>${labels[k] || k}</strong></td>` + sr[k].map(v => `<td>${v}</td>`).join('') + '</tr>';
        });
        document.getElementById('dyn-table').innerHTML = html + '</tbody>';
      }
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
  