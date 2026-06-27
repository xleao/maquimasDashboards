
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
      { id:'s21', label:'Facturación General',       icon:'fa-car',         kind:'edbFacturacion', title:'EDB — Facturación General', subtitle:'Tablero Power BI' },
      { id:'s22', label:'Vehículos — Entregas',      icon:'fa-truck',       kind:'edbEntregas', title:'EDB — Entregas de Vehículos', subtitle:'Tablero Power BI' },
      { id:'s23', label:'Vehículos — Cartera',       icon:'fa-file-invoice-dollar', kind:'edbCartera', title:'Vehículos — Indicador de Cartera', subtitle:'Tablero Power BI' },
      { id:'s24', label:'Vendedores sin Venta',      icon:'fa-user-slash',  kind:'rrhhVendedores', title:'Vendedores sin Venta por Ciudad', subtitle:'Portal Corporativo de Business Intelligence' },
      { id:'s25', label:'Dotación por Zonas',        icon:'fa-map-location-dot', kind:'rrhhDotacion', title:'Total Dotación por Zonas', subtitle:'Portal Corporativo de Business Intelligence' },
      { id:'s26', label:'Maquimas Colombia',         icon:'fa-flag',        kind:'rrhhColombia', title:'Total Maquimas Colombia', subtitle:'Portal Corporativo de Business Intelligence' }
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
      'adg-asambleas': { slides: ['s19'] },
      'adg-reactivaciones': { slides: ['s20'] },
      'edb': { slides: ['s21', 's22', 's23'] },
      'edb-facturacion': { slides: ['s21'] },
      'edb-entregas': { slides: ['s22'] },
      'edb-cartera': { slides: ['s23'] },
      'rrhh': { slides: ['s24', 's25', 's26'] },
      'rrhh-vendedores': { slides: ['s24'] },
      'rrhh-dotacion': { slides: ['s25'] },
      'rrhh-colombia': { slides: ['s26'] },
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
      document.getElementById('metrics-container').style.display = 
        (slide.kind === 'image' || slide.kind === 'iframe' || slide.kind === 'adgAsambleas' || slide.kind === 'adgReactivaciones' || slide.kind === 'edbFacturacion' || slide.kind === 'edbEntregas' || slide.kind === 'edbCartera' || slide.kind === 'rrhhVendedores' || slide.kind === 'rrhhDotacion' || slide.kind === 'rrhhColombia') ? 'none' : 'grid';
      host.innerHTML = '';
      (
        ({
          origin: renderOrigin,
          combo3: renderCombo3,
          grouped: renderGrouped,
          stacked: renderStacked,
          limaprov: renderLimaProv,
          anulaciones: renderAnulaciones,
          image: renderImage,
          iframe: renderIframe,
          adgAsambleas: renderAdgAsambleas,
          adgReactivaciones: renderAdgReactivaciones,
          edbFacturacion: renderEdbFacturacion,
          edbEntregas: renderEdbEntregas,
          edbCartera: renderEdbCartera,
          rrhhVendedores: renderRrhhVendedores,
          rrhhDotacion: renderRrhhDotacion,
          rrhhColombia: renderRrhhColombia
        })[slide.kind] || (() => {})
      )(slide, host);
    }

    // ---- ADG ASAMBLEAS (slide 19) ----
    function renderAdgAsambleas(slide, host) {
        if (!window.slide19Filters) {
            window.slide19Filters = {
                year: 2026
            };
        }

        host.innerHTML = `
            <style>
                .adg-top-row {
                    display: grid;
                    grid-template-columns: 280px repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 12px;
                }
                @media (max-width: 992px) {
                    .adg-top-row {
                        grid-template-columns: 1fr;
                    }
                }
                .adg-tables-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 12px;
                }
            </style>

            <div class="adg-top-row">
                <!-- Periodo Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Periodo</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-adg-year">
                            <option value="2026" ${window.slide19Filters.year === 2026 ? "selected" : ""}>2026</option>
                            <option value="2025" ${window.slide19Filters.year === 2025 ? "selected" : ""}>2025</option>
                            <option value="2024" ${window.slide19Filters.year === 2024 ? "selected" : ""}>2024</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="adg-kpi-formacion">-</span>
                    <span class="adg-kpi-lbl">Cant. Grupos Formacion</span>
                </div>

                <!-- KPI 2 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="adg-kpi-listos">-</span>
                    <span class="adg-kpi-lbl">Cant. Grupos Listos para Asamblea</span>
                </div>

                <!-- KPI 3 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="adg-kpi-realizadas">-</span>
                    <span class="adg-kpi-lbl">Asambleas Inaugurales realizadas</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 15px; width: 100%;">
                <!-- Grupos en Formación -->
                <section class="table-card" style="margin: 0;">
                    <div class="table-card-header">
                        <h3 class="table-card-title"><i class="fa-solid fa-users-gear"></i><span>Grupos en Formación</span></h3>
                    </div>
                    <div class="table-outer-container">
                        <table class="bitacoras-table">
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
                            <tbody id="adg-table-formacion">
                                <!-- Dynamic rows -->
                            </tbody>
                        </table>
                    </div>
                </section>

                <div class="adg-tables-grid">
                    <!-- Grupos Programados para Asamblea -->
                    <section class="table-card" style="margin: 0;">
                        <div class="table-card-header">
                            <h3 class="table-card-title"><i class="fa-solid fa-calendar-check"></i><span>Grupos Programados para Asamblea</span></h3>
                        </div>
                        <div class="table-outer-container" style="min-height: 250px;">
                            <table class="bitacoras-table">
                                <thead>
                                    <tr>
                                        <th>Grupos</th>
                                        <th>Teórico del Grupo</th>
                                        <th>Contratos Inscritos</th>
                                        <th>Vacantes Libres</th>
                                        <th>Fecha Primera Asamblea</th>
                                    </tr>
                                </thead>
                                <tbody id="adg-table-programados">
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
                        <div class="table-outer-container" style="max-height: 350px; overflow-y: auto;">
                            <table class="bitacoras-table" style="min-width: 500px;">
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
                                <tbody id="adg-table-inaugurados">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </div>
        `;

        // Event listener
        const yearSelect = document.getElementById("f-adg-year");
        yearSelect.addEventListener("change", (e) => {
            window.slide19Filters.year = Number(e.target.value);
            updateAdgAsambleasDashboard();
        });

        function updateAdgAsambleasDashboard() {
            const year = window.slide19Filters.year;
            const countryFactor = (selectedCountry === 'colombia') ? 0.65 : 1.0;
            const currencyPrefix = (selectedCountry === 'colombia') ? "$" : "S/";

            // Determinar base según año
            let kpis = { formacion: 6, listos: 1, realizadas: 41 };
            let scale = 1.0;
            if (year === 2025) {
                kpis = { formacion: 5, listos: 2, realizadas: 38 };
                scale = 0.9;
            } else if (year === 2024) {
                kpis = { formacion: 7, listos: 0, realizadas: 31 };
                scale = 0.8;
            }

            // Update KPIs
            document.getElementById("adg-kpi-formacion").textContent = Math.round(kpis.formacion * countryFactor);
            document.getElementById("adg-kpi-listos").textContent = Math.round(kpis.listos * countryFactor);
            document.getElementById("adg-kpi-realizadas").textContent = Math.round(kpis.realizadas * countryFactor);

            // Formacion table data
            const baseFormacion = [
                { grupo: "A224", teorico: 180, contratos: 107, recAct: 24349.79, recMin: 20000.00, impConv: 0.00 },
                { grupo: "C207", teorico: 450, contratos: 36, recAct: 11500.04, recMin: 60000.00, impConv: 48499.96 },
                { grupo: "M3P5", teorico: 240, contratos: 240, recAct: 47801.25, recMin: 24000.00, impConv: 0.00 },
                { grupo: "M3P6", teorico: 240, contratos: 119, recAct: 24847.50, recMin: 24000.00, impConv: 0.00 },
                { grupo: "S1J2", teorico: 180, contratos: 180, recAct: 50060.69, recMin: 25000.00, impConv: 0.00 }
            ];

            const formacionTbody = document.getElementById("adg-table-formacion");
            formacionTbody.innerHTML = baseFormacion.map(item => {
                const recAct = Math.round(item.recAct * scale * countryFactor * 100) / 100;
                const recMin = Math.round(item.recMin * scale * countryFactor * 100) / 100;
                const impConv = Math.round(item.impConv * scale * countryFactor * 100) / 100;
                const contratos = Math.round(item.contratos * scale * countryFactor);
                const complianceClass = impConv === 0 ? "compliance-high" : "compliance-low";

                return `
                    <tr>
                        <td><strong>${item.grupo}</strong></td>
                        <td>${Math.round(item.teorico * countryFactor)}</td>
                        <td>${contratos}</td>
                        <td>${currencyPrefix} ${recAct.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td>${currencyPrefix} ${recMin.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td class="${complianceClass}">${currencyPrefix} ${impConv.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    </tr>
                `;
            }).join('');

            // Programados table data
            const baseProgramados = [
                { grupo: "A220", teorico: 180, contratos: 178, vacLib: 2, date: "15/07/2026" },
                { grupo: "C208", teorico: 450, contratos: 448, vacLib: 2, date: "22/07/2026" },
                { grupo: "S1J3", teorico: 240, contratos: 240, vacLib: 0, date: "28/07/2026" }
            ];

            const programadosTbody = document.getElementById("adg-table-programados");
            if (programadosTbody) {
                programadosTbody.innerHTML = baseProgramados.map(item => {
                    const teorico = Math.round(item.teorico * countryFactor);
                    const contratos = Math.round(item.contratos * scale * countryFactor);
                    const vacLib = Math.round(item.vacLib * countryFactor);
                    
                    let finalDate = item.date;
                    if (year === 2025) {
                        finalDate = item.date.replace("2026", "2025");
                    } else if (year === 2024) {
                        finalDate = item.date.replace("2026", "2024");
                    }

                    return `
                        <tr>
                            <td><strong>${item.grupo}</strong></td>
                            <td>${teorico}</td>
                            <td>${contratos}</td>
                            <td class="${vacLib === 0 ? 'compliance-high' : ''}">${vacLib}</td>
                            <td>${finalDate}</td>
                        </tr>
                    `;
                }).join('');
            }

            // Inaugurados table data
            const baseInaugurados = [
                { grupo: "A217", date: "07/01/2026", recInit: 39949.80, sorteos: 1, remates: 5, vacOcup: 178, vacLib: 2 },
                { grupo: "A218", date: "13/01/2026", recInit: 44366.31, sorteos: 1, remates: 4, vacOcup: 177, vacLib: 3 },
                { grupo: "A219", date: "13/02/2026", recInit: 45399.59, sorteos: 1, remates: 3, vacOcup: 177, vacLib: 3 },
                { grupo: "A220", date: "26/01/2026", recInit: 0.00, sorteos: 1, remates: 1, vacOcup: 0, vacLib: 180 },
                { grupo: "A220", date: "20/02/2026", recInit: 43916.35, sorteos: 1, remates: 4, vacOcup: 176, vacLib: 4 },
                { grupo: "A221", date: "26/02/2026", recInit: 45132.93, sorteos: 1, remates: 4, vacOcup: 180, vacLib: 0 },
                { grupo: "A222", date: "13/03/2026", recInit: 44249.64, sorteos: 1, remates: 3, vacOcup: 175, vacLib: 5 },
                { grupo: "A223", date: "31/03/2026", recInit: 43749.63, sorteos: 1, remates: 3, vacOcup: 179, vacLib: 1 },
                { grupo: "A224", date: "21/04/2026", recInit: 43266.34, sorteos: 1, remates: 4, vacOcup: 179, vacLib: 1 },
                { grupo: "A225", date: "30/04/2026", recInit: 43149.67, sorteos: 1, remates: 3, vacOcup: 180, vacLib: 0 }
            ];

            const inauguradosTbody = document.getElementById("adg-table-inaugurados");
            inauguradosTbody.innerHTML = baseInaugurados.map(item => {
                const recInit = Math.round(item.recInit * scale * countryFactor * 100) / 100;
                const vacOcup = Math.round(item.vacOcup * countryFactor);
                const vacLib = Math.round(item.vacLib * countryFactor);
                const complianceClass = vacLib === 0 ? "compliance-high" : (vacOcup === 0 ? "compliance-low" : "");

                // Adjust year in date label
                let finalDate = item.date;
                if (year === 2025) {
                    finalDate = item.date.replace("2026", "2025");
                } else if (year === 2024) {
                    finalDate = item.date.replace("2026", "2024");
                }

                return `
                    <tr>
                        <td><strong>${item.grupo}</strong></td>
                        <td>${finalDate}</td>
                        <td>${currencyPrefix} ${recInit.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td>${item.sorteos}</td>
                        <td>${item.remates}</td>
                        <td>${vacOcup}</td>
                        <td class="${complianceClass}">${vacLib}</td>
                    </tr>
                `;
            }).join('');
        }

        updateAdgAsambleasDashboard();
    }

    // ---- ADG REACTIVACIONES (slide 20) ----
    function renderAdgReactivaciones(slide, host) {
        if (!window.slide20Filters) {
            window.slide20Filters = {
                year: 2025,
                zona: "Todas"
            };
        }

        host.innerHTML = `
            <style>
                .adg-top-row-react {
                    display: grid;
                    grid-template-columns: 200px 200px repeat(3, 1fr);
                    gap: 20px;
                    margin-bottom: 12px;
                }
                @media (max-width: 992px) {
                    .adg-top-row-react {
                        grid-template-columns: 1fr;
                    }
                }
                .adg-grid-react {
                    display: grid;
                    grid-template-columns: 1.3fr 0.7fr;
                    gap: 25px;
                    margin-bottom: 25px;
                }
                @media (max-width: 1100px) {
                    .adg-grid-react {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="adg-top-row-react">
                <!-- Periodo Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Periodo</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-react-year">
                            <option value="2026" ${window.slide20Filters.year === 2026 ? "selected" : ""}>2026</option>
                            <option value="2025" ${window.slide20Filters.year === 2025 ? "selected" : ""}>2025</option>
                            <option value="2024" ${window.slide20Filters.year === 2024 ? "selected" : ""}>2024</option>
                        </select>
                    </div>
                </div>

                <!-- Zona Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Zona</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-react-zona">
                            <option value="Todas" ${window.slide20Filters.zona === "Todas" ? "selected" : ""}>Todas</option>
                            <option value="LIMA" ${window.slide20Filters.zona === "LIMA" ? "selected" : ""}>LIMA</option>
                            <option value="AREQUIPA" ${window.slide20Filters.zona === "AREQUIPA" ? "selected" : ""}>AREQUIPA</option>
                            <option value="TRUJILLO" ${window.slide20Filters.zona === "TRUJILLO" ? "selected" : ""}>TRUJILLO</option>
                            <option value="CHICLAYO" ${window.slide20Filters.zona === "CHICLAYO" ? "selected" : ""}>CHICLAYO</option>
                            <option value="PIURA" ${window.slide20Filters.zona === "PIURA" ? "selected" : ""}>PIURA</option>
                            <option value="HUANCAYO" ${window.slide20Filters.zona === "HUANCAYO" ? "selected" : ""}>HUANCAYO</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="adg-kpi-reactivaciones">-</span>
                    <span class="adg-kpi-lbl">Cant. Reactivaciones</span>
                </div>

                <!-- KPI 2 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="adg-kpi-meta-react">-</span>
                    <span class="adg-kpi-lbl">Meta Reactivaciones</span>
                </div>

                <!-- KPI 3 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="adg-kpi-cumplimiento-react">-</span>
                    <span class="adg-kpi-lbl">% Cumplimiento Reactivaciones</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 15px; width: 100%;">
                <div class="adg-grid-react">
                    <!-- Detalle de Reactivaciones (Tabla) -->
                    <section class="table-card" style="margin: 0;">
                        <div class="table-card-header">
                            <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span id="adg-table-title">Detalle de Reactivaciones</span></h3>
                        </div>
                        <div class="table-outer-container" style="max-height: 320px; overflow-y: auto;">
                            <table class="bitacoras-table">
                                <thead style="position: sticky; top: 0; z-index: 10;">
                                    <tr>
                                        <th>Año</th>
                                        <th>Mes</th>
                                        <th>Zona Oficial</th>
                                        <th style="text-align: right;">Cant. Reactivaciones</th>
                                        <th style="text-align: right;">Meta Reactivaciones</th>
                                        <th style="text-align: right;">% Cumplimiento</th>
                                    </tr>
                                </thead>
                                <tbody id="adg-react-tbody">
                                    <!-- Dynamic rows -->
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <!-- Distribución por Zonas -->
                    <div class="chart-card" style="margin: 0; display: flex; flex-direction: column; gap: 15px;">
                        <div class="chart-card-header">
                            <h3 class="chart-card-title"><i class="fa-solid fa-map-location-dot"></i><span>Distribución por Zonas</span></h3>
                        </div>
                        <div class="chart-canvas-wrapper" style="height: 250px;"><canvas id="adg-zone-chart"></canvas></div>
                    </div>
                </div>

                <!-- Comparativo Mensual -->
                <div class="chart-card" style="width: 100%; margin: 0; display: flex; flex-direction: column; gap: 15px;">
                    <div class="chart-card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-line"></i><span>Comparativo Mensual: Reactivaciones vs Meta & % Cumplimiento</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 320px;"><canvas id="adg-monthly-chart"></canvas></div>
                </div>
            </div>
        `;

        // Event listeners
        const yearSelect = document.getElementById("f-react-year");
        const zonaSelect = document.getElementById("f-react-zona");

        yearSelect.addEventListener("change", (e) => {
            window.slide20Filters.year = Number(e.target.value);
            updateAdgReactivacionesDashboard();
        });

        zonaSelect.addEventListener("change", (e) => {
            window.slide20Filters.zona = e.target.value;
            updateAdgReactivacionesDashboard();
        });

        function updateAdgReactivacionesDashboard() {
            const year = window.slide20Filters.year;
            const selectedZona = window.slide20Filters.zona;
            const countryFactor = (selectedCountry === 'colombia') ? 0.65 : 1.0;

            // Cargar datos baseline de 2025
            const baseData = {
                "Todas": {
                    reactivaciones: [292, 251, 245, 240, 249, 232, 235, 261, 273, 280, 255, 185],
                    meta: [268, 257, 267, 264, 275, 257, 255, 290, 298, 298, 275, 248],
                    zones: [
                        { name: "LIMA", pct: 70 },
                        { name: "AREQUIPA", pct: 14 },
                        { name: "TRUJILLO", pct: 5 },
                        { name: "CHICLAYO", pct: 4 },
                        { name: "PIURA", pct: 4 },
                        { name: "HUANCAYO", pct: 4 }
                    ]
                },
                "LIMA": {
                    reactivaciones: [204, 176, 171, 168, 174, 162, 164, 183, 191, 196, 178, 129],
                    meta: [188, 180, 187, 185, 192, 180, 178, 203, 209, 209, 192, 174],
                    zones: [{ name: "LIMA", pct: 100 }]
                },
                "AREQUIPA": {
                    reactivaciones: [42, 25, 40, 40, 38, 36, 21, 28, 37, 46, 34, 20],
                    meta: [25, 25, 25, 25, 25, 25, 25, 30, 25, 25, 25, 25],
                    zones: [{ name: "AREQUIPA", pct: 100 }]
                },
                "TRUJILLO": {
                    reactivaciones: [15, 13, 12, 12, 12, 12, 12, 13, 14, 14, 13, 8],
                    meta: [13, 13, 13, 13, 14, 13, 13, 14, 15, 15, 14, 12],
                    zones: [{ name: "TRUJILLO", pct: 100 }]
                },
                "CHICLAYO": {
                    reactivaciones: [12, 10, 10, 10, 10, 9, 9, 10, 11, 11, 10, 7],
                    meta: [11, 10, 11, 11, 11, 10, 10, 12, 12, 12, 11, 10],
                    zones: [{ name: "CHICLAYO", pct: 100 }]
                },
                "PIURA": {
                    reactivaciones: [12, 10, 10, 10, 10, 9, 9, 10, 11, 11, 10, 7],
                    meta: [11, 10, 11, 11, 11, 10, 10, 12, 12, 12, 11, 10],
                    zones: [{ name: "PIURA", pct: 100 }]
                },
                "HUANCAYO": {
                    reactivaciones: [12, 10, 10, 10, 10, 9, 9, 10, 11, 11, 10, 7],
                    meta: [11, 10, 11, 11, 11, 10, 10, 12, 12, 12, 11, 10],
                    zones: [{ name: "HUANCAYO", pct: 100 }]
                }
            }[selectedZona] || {
                reactivaciones: new Array(12).fill(0),
                meta: new Array(12).fill(0),
                zones: []
            };

            // Determinar escala por año
            let yearScale = 1.0;
            if (year === 2026) yearScale = 1.08;
            else if (year === 2024) yearScale = 0.93;

            const scaleFactor = yearScale * countryFactor;

            // List of months for tables
            const monthList = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

            // Scale datasets
            const scaledReactivaciones = baseData.reactivaciones.map(v => Math.round(v * scaleFactor));
            const scaledMeta = baseData.meta.map(v => Math.round(v * scaleFactor));

            // Calculate totals
            const totalReactivaciones = scaledReactivaciones.reduce((sum, v) => sum + v, 0);
            const totalMeta = scaledMeta.reduce((sum, v) => sum + v, 0);
            const totalCompliance = totalMeta > 0 ? Math.round((totalReactivaciones / totalMeta) * 100) : 0;

            // Update KPIs
            document.getElementById("adg-kpi-reactivaciones").textContent = totalReactivaciones.toLocaleString('es-PE');
            document.getElementById("adg-kpi-meta-react").textContent = totalMeta.toLocaleString('es-PE');
            document.getElementById("adg-kpi-cumplimiento-react").textContent = totalCompliance + " %";

            // Update Table Title
            document.getElementById("adg-table-title").textContent = `Detalle de Reactivaciones (${selectedZona === "Todas" ? "Todas las Zonas" : selectedZona})`;

            // Render Table Rows
            const tbody = document.getElementById("adg-react-tbody");
            let tableHtml = "";
            for (let i = 0; i < 12; i++) {
                const act = scaledReactivaciones[i];
                const met = scaledMeta[i];
                const cmp = met > 0 ? Math.round((act / met) * 100) : 0;
                const complianceClass = cmp >= 100 ? "compliance-high" : "compliance-low";

                tableHtml += `
                    <tr>
                        <td>${year}</td>
                        <td>${monthList[i]}</td>
                        <td>${selectedZona}</td>
                        <td style="text-align: right; font-weight: 600;">${act.toLocaleString('es-PE')}</td>
                        <td style="text-align: right; font-weight: 600;">${met.toLocaleString('es-PE')}</td>
                        <td class="${complianceClass}" style="text-align: right; font-weight: 700;">${cmp} %</td>
                    </tr>
                `;
            }
            // Total General row
            tableHtml += `
                <tr class="total-row" style="background-color: rgba(0, 130, 150, 0.05); font-weight: 700;">
                    <td colspan="3">Total General</td>
                    <td style="text-align: right;">${totalReactivaciones.toLocaleString('es-PE')}</td>
                    <td style="text-align: right;">${totalMeta.toLocaleString('es-PE')}</td>
                    <td style="text-align: right;" class="${totalCompliance >= 100 ? 'compliance-high' : 'compliance-low'}">${totalCompliance} %</td>
                </tr>
            `;
            tbody.innerHTML = tableHtml;

            // Render Zone Distribution Chart (Top Right)
            const zoneLabels = baseData.zones.map(z => z.name);
            const zonePcts = baseData.zones.map(z => z.pct);

            drawChart("adg-zone-chart", {
                type: "bar",
                data: {
                    labels: zoneLabels,
                    datasets: [{
                        data: zonePcts,
                        backgroundColor: "#f25c66", // Coral Red color from screenshot
                        borderRadius: 4,
                        maxBarThickness: 16
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: { padding: { top: 10, bottom: 5 } },
                    plugins: {
                        legend: { display: false },
                        tooltip: baseTooltip,
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            color: "#334155",
                            font: { family: "Inter", weight: "700", size: 10 },
                            formatter: v => v + "%"
                        }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600", size: 9 }, color: "#334155" } },
                        y: { beginAtZero: true, max: 100, ticks: { callback: v => v + "%", font: { size: 9 } }, grid: { color: "rgba(0,0,0,0.03)" } }
                    }
                },
                plugins: [ChartDataLabels]
            });

            // Render Monthly Chart (Bottom Chart)
            const monthlyCmp = scaledReactivaciones.map((act, idx) => {
                const met = scaledMeta[idx];
                return met > 0 ? Math.round((act / met) * 100) : 0;
            });

            const shortMonths = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

            drawChart("adg-monthly-chart", {
                data: {
                    labels: shortMonths,
                    datasets: [
                        {
                            type: "bar",
                            label: "Cant. Reactivaciones",
                            data: scaledReactivaciones,
                            backgroundColor: "#f25c66", // Coral Red
                            borderRadius: 4,
                            barThickness: 14,
                            yAxisID: "y",
                            datalabels: {
                                anchor: "end",
                                align: function(context) {
                                    const idx = context.dataIndex;
                                    const chart = context.chart;
                                    if (!chart.scales || !chart.scales.y || !chart.scales.y1) return 'start';
                                    const redVal = chart.data.datasets[0].data[idx];
                                    const yellowVal = chart.data.datasets[2].data[idx];
                                    const yPixel = chart.scales.y.getPixelForValue(redVal);
                                    const y1Pixel = chart.scales.y1.getPixelForValue(yellowVal);
                                    return (y1Pixel < yPixel) ? 'start' : 'end';
                                },
                                offset: 4,
                                color: "#ffffff",
                                backgroundColor: "#f25c66",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 }
                            }
                        },
                        {
                            type: "bar",
                            label: "Meta Reactivaciones",
                            data: scaledMeta,
                            backgroundColor: "#0B5FB0", // Royal Blue
                            borderRadius: 4,
                            barThickness: 14,
                            yAxisID: "y",
                            datalabels: {
                                anchor: "start",
                                align: "end",
                                color: "#ffffff",
                                backgroundColor: "#0B5FB0",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 }
                            }
                        },
                        {
                            type: "line",
                            label: "% Cumplimiento Reactivaciones",
                            data: monthlyCmp,
                            borderColor: "#ffd15c", // Orange/Yellow Line
                            borderWidth: 2,
                            borderDash: [4, 4],
                            pointBackgroundColor: "#ffd15c",
                            pointRadius: 4,
                            fill: false,
                            yAxisID: "y1",
                            datalabels: {
                                anchor: "center",
                                align: function(context) {
                                    const idx = context.dataIndex;
                                    const chart = context.chart;
                                    if (!chart.scales || !chart.scales.y || !chart.scales.y1) return 'top';
                                    const redVal = chart.data.datasets[0].data[idx];
                                    const yellowVal = chart.data.datasets[2].data[idx];
                                    const yPixel = chart.scales.y.getPixelForValue(redVal);
                                    const y1Pixel = chart.scales.y1.getPixelForValue(yellowVal);
                                    return (y1Pixel < yPixel) ? 'top' : 'bottom';
                                } ,
                                offset: 8,
                                color: "#000000",
                                backgroundColor: "#ffd15c",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 },
                                formatter: v => v + " %"
                            }
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: {
                                font: { family: "Inter", weight: "600", size: 10 },
                                color: "#334155"
                            }
                        },
                        tooltip: baseTooltip,
                        datalabels: {
                            display: true // Show all labels!
                        }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                        y: { position: "left", beginAtZero: true, grid: { color: "rgba(0,0,0,0.03)" }, ticks: { color: "#64748b" } },
                        y1: { position: "right", beginAtZero: true, max: 120, grid: { display: false }, ticks: { color: "#64748b", callback: v => v + "%" } }
                    }
                },
                plugins: [ChartDataLabels]
            });
        }

        updateAdgReactivacionesDashboard();
    }

    // ---- EDB FACTURACION (slide 21) ----
    function renderEdbFacturacion(slide, host) {
        if (!window.edbFacturacionFilters) {
            window.edbFacturacionFilters = {
                year: 2026,
                marca: "Todas",
                zona: "Todas",
                proveedor: "Todos"
            };
        }

        host.innerHTML = `
            <style>
                .edb-top-row {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 16px;
                    margin-bottom: 12px;
                }
                @media (max-width: 1200px) {
                    .edb-top-row {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .edb-top-row {
                        grid-template-columns: 1fr;
                    }
                }
                .edb-body-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.6fr;
                    gap: 20px;
                }
                @media (max-width: 992px) {
                    .edb-body-grid {
                        grid-template-columns: 1fr;
                    }
                }
                .edb-bottom-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.6fr;
                    gap: 20px;
                    margin-top: 16px;
                }
                @media (max-width: 992px) {
                    .edb-bottom-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="edb-top-row">
                <!-- Periodo Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Periodo</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-edb-year">
                            <option value="2026" ${window.edbFacturacionFilters.year === 2026 ? "selected" : ""}>2026</option>
                            <option value="2025" ${window.edbFacturacionFilters.year === 2025 ? "selected" : ""}>2025</option>
                            <option value="2024" ${window.edbFacturacionFilters.year === 2024 ? "selected" : ""}>2024</option>
                        </select>
                    </div>
                </div>

                <!-- Marca Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Marca</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-edb-marca">
                            <option value="Todas">Todas</option>
                            <option value="CHANGAN">CHANGAN</option>
                            <option value="KIA">KIA</option>
                            <option value="TOYOTA">TOYOTA</option>
                            <option value="JETOUR">JETOUR</option>
                            <option value="JAC">JAC</option>
                            <option value="HYUNDAI">HYUNDAI</option>
                            <option value="CHERY">CHERY</option>
                            <option value="DFSK">DFSK</option>
                            <option value="GEELY">GEELY</option>
                            <option value="CHEVROLET">CHEVROLET</option>
                        </select>
                    </div>
                </div>

                <!-- Zona Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Zona</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-edb-zona">
                            <option value="Todas">Todas</option>
                            <option value="LIMA">LIMA</option>
                            <option value="AREQUIPA">AREQUIPA</option>
                            <option value="TRUJILLO">TRUJILLO</option>
                            <option value="CHICLAYO">CHICLAYO</option>
                            <option value="PIURA">PIURA</option>
                            <option value="HUANCAYO">HUANCAYO</option>
                        </select>
                    </div>
                </div>

                <!-- Proveedor Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Proveedor</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-edb-proveedor">
                            <option value="Todos">Todos</option>
                            <option value="Derco">Derco</option>
                            <option value="Inchcape">Inchcape</option>
                            <option value="SK Motors">SK Motors</option>
                            <option value="Astara">Astara</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="edb-kpi-facturacion">-</span>
                    <span class="adg-kpi-lbl">Cant. Facturación VEH</span>
                </div>

                <!-- KPI 2 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="edb-kpi-meta">-</span>
                    <span class="adg-kpi-lbl">Meta Facturación VEH</span>
                </div>

                <!-- KPI 3 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="edb-kpi-cumplimiento">-</span>
                    <span class="adg-kpi-lbl">% Cumplimiento Facturación</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Monthly Table -->
                <section class="table-card" style="margin: 0;">
                    <div class="table-card-header">
                        <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Detalle Mensual de Facturación</span></h3>
                    </div>
                    <div class="table-outer-container" style="max-height: 380px; overflow-y: auto;">
                        <table class="bitacoras-table">
                            <thead style="position: sticky; top: 0; z-index: 10;">
                                <tr>
                                    <th>Año</th>
                                    <th>Mes</th>
                                    <th style="text-align: right;">Cant. Facturación VEH</th>
                                    <th style="text-align: right;">Meta Facturación VEH</th>
                                    <th style="text-align: right;">% Cumplimiento</th>
                                </tr>
                            </thead>
                            <tbody id="edb-table-body">
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Monthly Chart -->
                <section class="chart-card" style="margin: 0;">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-column"></i><span>Comparativo Mensual: Facturación vs Meta & % Cumplimiento</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 360px;"><canvas id="edb-monthly-chart"></canvas></div>
                </section>

                <div class="edb-bottom-grid">
                    <!-- Zone Distribution -->
                    <section class="chart-card" style="margin: 0;">
                        <div class="chart-card-header">
                            <h3 class="chart-card-title"><i class="fa-solid fa-map-location-dot"></i><span>Distribución por Zona</span></h3>
                        </div>
                        <div class="chart-canvas-wrapper" style="height: 280px;"><canvas id="edb-zone-chart"></canvas></div>
                    </section>

                    <!-- Brand Distribution -->
                    <section class="chart-card" style="margin: 0;">
                        <div class="chart-card-header">
                            <h3 class="chart-card-title"><i class="fa-solid fa-car"></i><span>Facturación por Marca</span></h3>
                        </div>
                        <div class="chart-canvas-wrapper" style="height: 280px;"><canvas id="edb-brand-chart"></canvas></div>
                    </section>
                </div>
            </div>
        `;

        // Event listeners
        document.getElementById("f-edb-year").addEventListener("change", (e) => {
            window.edbFacturacionFilters.year = Number(e.target.value);
            updateEdbFacturacionDashboard();
        });
        document.getElementById("f-edb-marca").addEventListener("change", (e) => {
            window.edbFacturacionFilters.marca = e.target.value;
            updateEdbFacturacionDashboard();
        });
        document.getElementById("f-edb-zona").addEventListener("change", (e) => {
            window.edbFacturacionFilters.zona = e.target.value;
            updateEdbFacturacionDashboard();
        });
        document.getElementById("f-edb-proveedor").addEventListener("change", (e) => {
            window.edbFacturacionFilters.proveedor = e.target.value;
            updateEdbFacturacionDashboard();
        });

        function updateEdbFacturacionDashboard() {
            const year = window.edbFacturacionFilters.year;
            const marca = window.edbFacturacionFilters.marca;
            const zona = window.edbFacturacionFilters.zona;
            const countryFactor = (selectedCountry === 'colombia') ? 0.65 : 1.0;

            // Base monthly data (2025 baseline, "Todas" marca, "Todas" zona)
            const baseFacturacion = [229, 220, 208, 245, 232, 238, 247, 252, 275, 278, 264, 271];
            const baseMeta         = [237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237, 237];

            // Brand filter multiplier
            const marcaFactors = {
                "Todas": 1.0, "CHANGAN": 0.15, "KIA": 0.12, "TOYOTA": 0.12,
                "JETOUR": 0.09, "JAC": 0.08, "HYUNDAI": 0.07, "CHERY": 0.07,
                "DFSK": 0.04, "GEELY": 0.03, "CHEVROLET": 0.03
            };
            const marcaFactor = marcaFactors[marca] || 1.0;

            // Zone filter multiplier
            const zonaFactors = {
                "Todas": 1.0, "LIMA": 0.71, "AREQUIPA": 0.11, "TRUJILLO": 0.07,
                "PIURA": 0.05, "CHICLAYO": 0.04, "HUANCAYO": 0.02
            };
            const zonaFactor = zonaFactors[zona] || 1.0;

            // Year scale
            let yearScale = 1.0;
            if (year === 2026) yearScale = 1.08;
            else if (year === 2024) yearScale = 0.91;

            const totalScale = yearScale * countryFactor * marcaFactor * zonaFactor;

            const scaledFacturacion = baseFacturacion.map(v => Math.round(v * totalScale));
            const scaledMeta = baseMeta.map(v => Math.round(v * totalScale));

            const totalFacturacion = scaledFacturacion.reduce((a, b) => a + b, 0);
            const totalMeta = scaledMeta.reduce((a, b) => a + b, 0);
            const totalCumplimiento = totalMeta > 0 ? Math.round((totalFacturacion / totalMeta) * 100) : 0;

            // Update KPIs
            document.getElementById("edb-kpi-facturacion").textContent = totalFacturacion.toLocaleString('es-PE');
            document.getElementById("edb-kpi-meta").textContent = totalMeta.toLocaleString('es-PE');
            document.getElementById("edb-kpi-cumplimiento").textContent = totalCumplimiento + " %";

            // Monthly table
            const monthList = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
            const tbody = document.getElementById("edb-table-body");
            let tableHtml = "";
            for (let i = 0; i < 12; i++) {
                const ent = scaledFacturacion[i];
                const met = scaledMeta[i];
                const cmp = met > 0 ? Math.round((ent / met) * 100) : 0;
                const cls = cmp >= 100 ? "compliance-high" : "compliance-low";
                tableHtml += `
                    <tr>
                        <td>${year}</td>
                        <td>${monthList[i]}</td>
                        <td style="text-align: right; font-weight: 600;">${ent.toLocaleString('es-PE')}</td>
                        <td style="text-align: right; font-weight: 600;">${met.toLocaleString('es-PE')}</td>
                        <td class="${cls}" style="text-align: right; font-weight: 700;">${cmp} %</td>
                    </tr>
                `;
            }
            tableHtml += `
                <tr class="total-row" style="background-color: rgba(0, 130, 150, 0.05); font-weight: 700;">
                    <td colspan="2">Total</td>
                    <td style="text-align: right;">${totalFacturacion.toLocaleString('es-PE')}</td>
                    <td style="text-align: right;">${totalMeta.toLocaleString('es-PE')}</td>
                    <td style="text-align: right;" class="${totalCumplimiento >= 100 ? 'compliance-high' : 'compliance-low'}">${totalCumplimiento} %</td>
                </tr>
            `;
            tbody.innerHTML = tableHtml;

            // Monthly Compliance %
            const monthlyCmp = scaledFacturacion.map((ent, idx) => {
                const met = scaledMeta[idx];
                return met > 0 ? Math.round((ent / met) * 100) : 0;
            });

            // Monthly Chart
            drawChart("edb-monthly-chart", {
                data: {
                    labels: monthList,
                    datasets: [
                        {
                            type: "bar",
                            label: "Cant. Facturación VEH",
                            data: scaledFacturacion,
                            backgroundColor: "#f25c66",
                            borderRadius: 4,
                            barThickness: 14,
                            yAxisID: "y",
                            datalabels: {
                                anchor: "end",
                                align: function(context) {
                                    const idx = context.dataIndex;
                                    const chart = context.chart;
                                    if (!chart.scales || !chart.scales.y || !chart.scales.y1) return 'start';
                                    const redVal = chart.data.datasets[0].data[idx];
                                    const yellowVal = chart.data.datasets[2].data[idx];
                                    const yPixel = chart.scales.y.getPixelForValue(redVal);
                                    const y1Pixel = chart.scales.y1.getPixelForValue(yellowVal);
                                    return (y1Pixel < yPixel) ? 'start' : 'end';
                                },
                                offset: 4,
                                color: "#ffffff",
                                backgroundColor: "#f25c66",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 }
                            }
                        },
                        {
                            type: "bar",
                            label: "Meta Facturación VEH",
                            data: scaledMeta,
                            backgroundColor: "#0B5FB0",
                            borderRadius: 4,
                            barThickness: 14,
                            yAxisID: "y",
                            datalabels: {
                                anchor: "start",
                                align: "end",
                                color: "#ffffff",
                                backgroundColor: "#0B5FB0",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 }
                            }
                        },
                        {
                            type: "line",
                            label: "% Cumplimiento Facturación VEH",
                            data: monthlyCmp,
                            borderColor: "#ffd15c",
                            borderWidth: 2,
                            borderDash: [4, 4],
                            pointBackgroundColor: "#ffd15c",
                            pointRadius: 4,
                            fill: false,
                            yAxisID: "y1",
                            datalabels: {
                                anchor: "center",
                                align: function(context) {
                                    const idx = context.dataIndex;
                                    const chart = context.chart;
                                    if (!chart.scales || !chart.scales.y || !chart.scales.y1) return 'top';
                                    const redVal = chart.data.datasets[0].data[idx];
                                    const yellowVal = chart.data.datasets[2].data[idx];
                                    const yPixel = chart.scales.y.getPixelForValue(redVal);
                                    const y1Pixel = chart.scales.y1.getPixelForValue(yellowVal);
                                    return (y1Pixel < yPixel) ? 'top' : 'bottom';
                                },
                                offset: 8,
                                color: "#000000",
                                backgroundColor: "#ffd15c",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 },
                                formatter: v => v + " %"
                            }
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: { font: { family: "Inter", weight: "600", size: 10 }, color: "#334155" }
                        },
                        tooltip: baseTooltip,
                        datalabels: { display: true }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                        y: {
                            position: "left",
                            beginAtZero: true,
                            suggestedMax: Math.ceil(Math.max(...scaledFacturacion, ...scaledMeta) * 1.25),
                            grid: { color: "rgba(0,0,0,0.03)" },
                            ticks: { color: "#64748b" }
                        },
                        y1: { position: "right", beginAtZero: true, max: 150, grid: { display: false }, ticks: { color: "#64748b", callback: v => v + "%" } }
                    }
                },
                plugins: [ChartDataLabels]
            });

            // Zone Distribution Chart
            const zoneData = [
                { name: "LIMA", pct: 71 },
                { name: "AREQUIPA", pct: 11 },
                { name: "TRUJILLO", pct: 7 },
                { name: "PIURA", pct: 5 },
                { name: "CHICLAYO", pct: 4 },
                { name: "HUANCAYO", pct: 2 }
            ];

            drawChart("edb-zone-chart", {
                type: "bar",
                data: {
                    labels: zoneData.map(z => z.name),
                    datasets: [{
                        data: zoneData.map(z => z.pct),
                        backgroundColor: ["#6a1b9a", "#8e24aa", "#ab47bc", "#ce93d8", "#e1bee7", "#f3e5f9"],
                        borderRadius: 4,
                        maxBarThickness: 20
                    }]
                },
                options: {
                    indexAxis: "y",
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: { padding: { right: 30 } },
                    plugins: {
                        legend: { display: false },
                        tooltip: baseTooltip,
                        datalabels: {
                            anchor: "end",
                            align: "right",
                            color: "#334155",
                            font: { family: "Inter", weight: "700", size: 11 },
                            formatter: v => v + "%"
                        }
                    },
                    scales: {
                        x: { display: false, max: 100 },
                        y: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600", size: 11 }, color: "#334155" } }
                    }
                },
                plugins: [ChartDataLabels]
            });

            // Brand Distribution Chart
            const brandBase = [
                { name: "CHANGAN", val: 444 },
                { name: "KIA", val: 351 },
                { name: "TOYOTA", val: 348 },
                { name: "JETOUR", val: 266 },
                { name: "JAC", val: 237 },
                { name: "HYUNDAI", val: 199 },
                { name: "CHERY", val: 198 },
                { name: "DFSK", val: 124 },
                { name: "GEELY", val: 99 },
                { name: "CHEVROLET", val: 96 }
            ];
            const brandScaled = brandBase.map(b => ({
                name: b.name,
                val: Math.round(b.val * yearScale * countryFactor * zonaFactor)
            }));

            drawChart("edb-brand-chart", {
                type: "bar",
                data: {
                    labels: brandScaled.map(b => b.name),
                    datasets: [{
                        data: brandScaled.map(b => b.val),
                        backgroundColor: "#3A7CA5",
                        borderRadius: 4,
                        maxBarThickness: 36
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    layout: { padding: { top: 25 } },
                    plugins: {
                        legend: { display: false },
                        tooltip: baseTooltip,
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            color: "#334155",
                            font: { family: "Inter", weight: "700", size: 11 },
                            formatter: v => v.toLocaleString('es-PE')
                        }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600", size: 9 }, color: "#334155", maxRotation: 45, minRotation: 45 } },
                        y: { beginAtZero: true, grid: { color: "rgba(0,0,0,0.03)" }, ticks: { color: "#64748b" } }
                    }
                },
                plugins: [ChartDataLabels]
            });
        }

        updateEdbFacturacionDashboard();
    }

    // ---- EDB ENTREGAS (slide 22) ----
    function renderEdbEntregas(slide, host) {
        if (!window.edbEntregasFilters) {
            window.edbEntregasFilters = {
                periodo: "Todos",
                producto: "Todas",
                zona: "Todas",
                fuerza: "Todas"
            };
        }

        host.innerHTML = `
            <style>
                .edb-top-row {
                    display: grid;
                    grid-template-columns: repeat(7, 1fr);
                    gap: 16px;
                    margin-bottom: 12px;
                }
                @media (max-width: 1200px) {
                    .edb-top-row {
                        grid-template-columns: repeat(4, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .edb-top-row {
                        grid-template-columns: 1fr;
                    }
                }
                .edb-body-grid-entregas {
                    display: grid;
                    grid-template-columns: 1fr 1.8fr;
                    gap: 20px;
                }
                @media (max-width: 992px) {
                    .edb-body-grid-entregas {
                        grid-template-columns: 1fr;
                    }
                }
                .edb-bottom-grid-entregas {
                    display: grid;
                    grid-template-columns: 1fr 1.8fr;
                    gap: 20px;
                    margin-top: 16px;
                }
                @media (max-width: 992px) {
                    .edb-bottom-grid-entregas {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="edb-top-row">
                <!-- Periodo Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Periodo</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-entregas-periodo">
                            <option value="Todos">Selección múltiple</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                </div>

                <!-- Producto Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Producto</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-entregas-producto">
                            <option value="Todas">Todas</option>
                            <option value="Autoahorro">Autoahorro</option>
                            <option value="Motoahorro">Motoahorro</option>
                        </select>
                    </div>
                </div>

                <!-- Zona Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Zona</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-entregas-zona">
                            <option value="Todas">Todas</option>
                            <option value="LIMA">LIMA</option>
                            <option value="AREQUIPA">AREQUIPA</option>
                            <option value="TRUJILLO">TRUJILLO</option>
                        </select>
                    </div>
                </div>

                <!-- Fuerza de Entrega Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Fuerza de Entrega</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-entregas-fuerza">
                            <option value="Todas">Todas</option>
                            <option value="Fuerza A">Fuerza A</option>
                            <option value="Fuerza B">Fuerza B</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="entregas-kpi-cant">1,540</span>
                    <span class="adg-kpi-lbl">Cant. Vehículos Entregados</span>
                </div>

                <!-- KPI 2 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="entregas-kpi-meta">265</span>
                    <span class="adg-kpi-lbl">Meta Entregas VEH</span>
                </div>

                <!-- KPI 3 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="entregas-kpi-cumplimiento">581 %</span>
                    <span class="adg-kpi-lbl">% Cumplimiento Entregas VEH</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Monthly Table -->
                <section class="table-card" style="margin: 0;">
                    <div class="table-card-header">
                        <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Detalle de Entregas</span></h3>
                    </div>
                    <div class="table-outer-container" style="max-height: 380px; overflow-y: auto;">
                        <table class="bitacoras-table">
                            <thead style="position: sticky; top: 0; z-index: 10;">
                                <tr>
                                    <th>Año</th>
                                    <th>Mes</th>
                                    <th style="text-align: right;">Cant. Vehículos Entregados</th>
                                    <th style="text-align: right;">Meta Entregas VEH</th>
                                    <th style="text-align: right;">% Cumplimiento</th>
                                </tr>
                            </thead>
                            <tbody id="entregas-table-body">
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Monthly Chart -->
                <section class="chart-card" style="margin: 0;">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-column"></i><span>Evolutivo de Entregas y Meta</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 360px;"><canvas id="entregas-monthly-chart"></canvas></div>
                </section>

                <div class="edb-bottom-grid-entregas">
                    <!-- Facturación Propia vs Externa Pie Chart -->
                    <section class="chart-card" style="margin: 0;">
                        <div class="chart-card-header">
                            <h3 class="chart-card-title"><i class="fa-solid fa-chart-pie"></i><span>Facturación Propia vs Externa</span></h3>
                        </div>
                        <div class="chart-canvas-wrapper" style="height: 280px; display: flex; justify-content: center; align-items: center;"><canvas id="entregas-pie-chart"></canvas></div>
                    </section>

                    <!-- Entregas por Categoría Bar Chart -->
                    <section class="chart-card" style="margin: 0;">
                        <div class="chart-card-header">
                            <h3 class="chart-card-title"><i class="fa-solid fa-chart-bar"></i><span>% TG Cant. Vehículos Entregados (Categoría)</span></h3>
                        </div>
                        <div class="chart-canvas-wrapper" style="height: 280px;"><canvas id="entregas-cat-chart"></canvas></div>
                    </section>
                </div>
            </div>
        `;

        // Event listeners
        document.getElementById("f-entregas-periodo").addEventListener("change", (e) => {
            window.edbEntregasFilters.periodo = e.target.value;
            updateEdbEntregasDashboard();
        });
        document.getElementById("f-entregas-producto").addEventListener("change", (e) => {
            window.edbEntregasFilters.producto = e.target.value;
            updateEdbEntregasDashboard();
        });
        document.getElementById("f-entregas-zona").addEventListener("change", (e) => {
            window.edbEntregasFilters.zona = e.target.value;
            updateEdbEntregasDashboard();
        });
        document.getElementById("f-entregas-fuerza").addEventListener("change", (e) => {
            window.edbEntregasFilters.fuerza = e.target.value;
            updateEdbEntregasDashboard();
        });

        function updateEdbEntregasDashboard() {
            const countryFactor = (selectedCountry === 'colombia') ? 0.65 : 1.0;
            const periodo = window.edbEntregasFilters.periodo;
            const producto = window.edbEntregasFilters.producto;
            const zona = window.edbEntregasFilters.zona;
            const fuerza = window.edbEntregasFilters.fuerza;

            // Multipliers
            let prodFactor = 1.0;
            if (producto === "Autoahorro") prodFactor = 0.60;
            else if (producto === "Motoahorro") prodFactor = 0.40;

            let zonaFactor = 1.0;
            if (zona === "LIMA") zonaFactor = 0.70;
            else if (zona === "AREQUIPA") zonaFactor = 0.20;
            else if (zona === "TRUJILLO") zonaFactor = 0.10;

            let fuerzaFactor = 1.0;
            if (fuerza === "Fuerza A") fuerzaFactor = 0.55;
            else if (fuerza === "Fuerza B") fuerzaFactor = 0.45;

            const filterFactor = prodFactor * zonaFactor * fuerzaFactor * countryFactor;

            // Base monthly data (Baseline from screenshot)
            const allMonths = ["agosto 2025", "enero 2026", "febrero 2026", "marzo 2026", "abril 2026", "mayo 2026", "junio 2026"];
            const allEntregas = [225, 256, 242, 285, 277, 247, 8];
            const allMeta = [265, 0, 0, 0, 0, 0, 0];

            const baseMonths = [];
            const baseEntregas = [];
            const baseMeta = [];

            for (let i = 0; i < allMonths.length; i++) {
                const mStr = allMonths[i];
                const yr = mStr.split(" ")[1];
                if (periodo === "Todos" || periodo === yr) {
                    baseMonths.push(allMonths[i]);
                    baseEntregas.push(allEntregas[i]);
                    baseMeta.push(allMeta[i]);
                }
            }

            const scaledEntregas = baseEntregas.map(v => Math.round(v * filterFactor));
            const scaledMeta = baseMeta.map(v => Math.round(v * filterFactor));

            const totalEntregas = scaledEntregas.reduce((a, b) => a + b, 0);
            const totalMeta = scaledMeta.reduce((a, b) => a + b, 0);
            const totalCumplimiento = totalMeta > 0 ? Math.round((totalEntregas / totalMeta) * 100) : 0;

            // Update KPIs
            document.getElementById("entregas-kpi-cant").textContent = totalEntregas.toLocaleString('es-PE');
            document.getElementById("entregas-kpi-meta").textContent = totalMeta.toLocaleString('es-PE');
            document.getElementById("entregas-kpi-cumplimiento").textContent = totalCumplimiento + " %";

            // Table rows
            const tbody = document.getElementById("entregas-table-body");
            let tableHtml = "";
            for (let i = 0; i < baseMonths.length; i++) {
                const mStr = baseMonths[i];
                const yr = mStr.split(" ")[1];
                const ms = mStr.split(" ")[0];
                const ent = scaledEntregas[i];
                const met = scaledMeta[i];
                let cmpText = "Infinito";
                let cls = "compliance-high";
                if (met > 0) {
                    const cmp = Math.round((ent / met) * 100);
                    cmpText = cmp + " %";
                    cls = cmp >= 100 ? "compliance-high" : "compliance-low";
                }
                tableHtml += `
                    <tr>
                        <td>${yr}</td>
                        <td>${ms}</td>
                        <td style="text-align: right; font-weight: 600;">${ent.toLocaleString('es-PE')}</td>
                        <td style="text-align: right; font-weight: 600;">${met > 0 ? met.toLocaleString('es-PE') : ""}</td>
                        <td class="${cls}" style="text-align: right; font-weight: 700;">${cmpText}</td>
                    </tr>
                `;
            }
            tableHtml += `
                <tr class="total-row" style="background-color: rgba(0, 130, 150, 0.05); font-weight: 700;">
                    <td colspan="2">Total</td>
                    <td style="text-align: right;">${totalEntregas.toLocaleString('es-PE')}</td>
                    <td style="text-align: right;">${totalMeta.toLocaleString('es-PE')}</td>
                    <td style="text-align: right;" class="${totalCumplimiento >= 100 ? 'compliance-high' : 'compliance-low'}">${totalCumplimiento} %</td>
                </tr>
            `;
            tbody.innerHTML = tableHtml;

            // Monthly Compliance dataset
            const monthlyCmp = scaledEntregas.map((ent, idx) => {
                const met = scaledMeta[idx];
                return met > 0 ? Math.round((ent / met) * 100) : null;
            });

            // Monthly Combo Chart (Bar + Line)
            drawChart("entregas-monthly-chart", {
                data: {
                    labels: baseMonths,
                    datasets: [
                        {
                            type: "bar",
                            label: "Cant. Vehículos Entregados",
                            data: scaledEntregas,
                            backgroundColor: "#f25c66",
                            borderRadius: 4,
                            barThickness: 16,
                            yAxisID: "y",
                            datalabels: {
                                anchor: "end",
                                align: function(context) {
                                    const idx = context.dataIndex;
                                    const chart = context.chart;
                                    if (!chart.scales || !chart.scales.y || !chart.scales.y1) return 'start';
                                    const redVal = chart.data.datasets[0].data[idx];
                                    const yellowVal = chart.data.datasets[2].data[idx];
                                    if (yellowVal === null) return 'end';
                                    const yPixel = chart.scales.y.getPixelForValue(redVal);
                                    const y1Pixel = chart.scales.y1.getPixelForValue(yellowVal);
                                    return (y1Pixel < yPixel) ? 'start' : 'end';
                                },
                                offset: 4,
                                color: "#ffffff",
                                backgroundColor: "#f25c66",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 }
                            }
                        },
                        {
                            type: "bar",
                            label: "Meta Entregas VEH",
                            data: scaledMeta.map(v => v > 0 ? v : null),
                            backgroundColor: "#0B5FB0",
                            borderRadius: 4,
                            barThickness: 16,
                            yAxisID: "y",
                            datalabels: {
                                anchor: "start",
                                align: "end",
                                color: "#ffffff",
                                backgroundColor: "#0B5FB0",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 9 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 }
                            }
                        },
                        {
                            type: "line",
                            label: "% Cumplimiento Entregas VEH",
                            data: monthlyCmp,
                            borderColor: "#ffd15c",
                            borderWidth: 2,
                            pointBackgroundColor: "#ffd15c",
                            pointRadius: 6,
                            fill: false,
                            yAxisID: "y1",
                            datalabels: {
                                anchor: "center",
                                align: function(context) {
                                    const idx = context.dataIndex;
                                    const chart = context.chart;
                                    if (!chart.scales || !chart.scales.y || !chart.scales.y1) return 'top';
                                    const redVal = chart.data.datasets[0].data[idx];
                                    const yellowVal = chart.data.datasets[2].data[idx];
                                    if (yellowVal === null) return 'top';
                                    const yPixel = chart.scales.y.getPixelForValue(redVal);
                                    const y1Pixel = chart.scales.y1.getPixelForValue(yellowVal);
                                    return (y1Pixel < yPixel) ? 'top' : 'bottom';
                                },
                                offset: 10,
                                color: "#000000",
                                backgroundColor: "#ffd15c",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 10 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 },
                                formatter: v => v + " %"
                            }
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: { font: { family: "Inter", weight: "600", size: 10 }, color: "#334155" }
                        },
                        tooltip: baseTooltip,
                        datalabels: { display: true }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                        y: {
                            position: "left",
                            beginAtZero: true,
                            suggestedMax: Math.ceil(Math.max(...scaledEntregas) * 1.25),
                            grid: { color: "rgba(0,0,0,0.03)" },
                            ticks: { color: "#64748b" }
                        },
                        y1: { position: "right", beginAtZero: true, max: 160, grid: { display: false }, ticks: { color: "#64748b", callback: v => v + "%" } }
                    }
                },
                plugins: [ChartDataLabels]
            });

            // Facturación Pie Chart
            const externaVal = Math.round(589 * filterFactor);
            const propiaVal = Math.round(951 * filterFactor);
            const totalVal = externaVal + propiaVal;
            const extPct = totalVal > 0 ? ((externaVal / totalVal) * 100).toFixed(2) : "0.00";
            const propPct = totalVal > 0 ? ((propiaVal / totalVal) * 100).toFixed(2) : "0.00";

            drawChart("entregas-pie-chart", {
                type: "pie",
                data: {
                    labels: ["FACTURACIÓN EXTERNA", "FACTURACIÓN PROPIA"],
                    datasets: [{
                        data: [externaVal, propiaVal],
                        backgroundColor: ["#0B5FB0", "#f25c66"],
                        borderWidth: 2,
                        borderColor: "#ffffff"
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: { font: { family: "Inter", weight: "700", size: 10 }, color: "#334155" }
                        },
                        tooltip: baseTooltip,
                        datalabels: {
                            display: true,
                            color: "#ffffff",
                            font: { family: "Inter", weight: "700", size: 10 },
                            formatter: (value, context) => {
                                const pct = context.dataIndex === 0 ? extPct : propPct;
                                return `${value} (${pct}%)`;
                            }
                        }
                    }
                },
                plugins: [ChartDataLabels]
            });

            // Slightly shift category data depending on filters so they change
            let catData = [51, 39, 9];
            if (producto === "Autoahorro") catData = [62, 30, 8];
            else if (producto === "Motoahorro") catData = [35, 52, 13];
            if (zona === "LIMA") catData = catData.map((v, i) => Math.max(2, v + (i === 0 ? 5 : -2)));
            else if (zona === "AREQUIPA") catData = catData.map((v, i) => Math.max(2, v + (i === 1 ? 6 : -3)));

            // Category Bar Chart
            drawChart("entregas-cat-chart", {
                type: "bar",
                data: {
                    labels: ["S", "M", "A"],
                    datasets: [{
                        data: catData,
                        backgroundColor: "#0B5FB0",
                        borderRadius: 4,
                        maxBarThickness: 50
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: baseTooltip,
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            color: "#334155",
                            font: { family: "Inter", weight: "700", size: 11 },
                            formatter: v => v + "%"
                        }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600", size: 11 }, color: "#334155" } },
                        y: { beginAtZero: true, max: 100, ticks: { callback: v => v + "%", color: "#64748b" }, grid: { color: "rgba(0,0,0,0.03)" } }
                    }
                },
                plugins: [ChartDataLabels]
            });
        }

        updateEdbEntregasDashboard();
    }


    // ---- EDB CARTERA (slide 23) ----
    function renderEdbCartera(slide, host) {
        if (!window.edbCarteraFilters) {
            window.edbCarteraFilters = {
                periodo: "Todos",
                zona: "Todas"
            };
        }

        host.innerHTML = `
            <style>
                .edb-top-row-cartera {
                    display: grid;
                    grid-template-columns: repeat(6, 1fr);
                    gap: 16px;
                    margin-bottom: 12px;
                }
                @media (max-width: 1200px) {
                    .edb-top-row-cartera {
                        grid-template-columns: repeat(3, 1fr);
                    }
                }
                @media (max-width: 768px) {
                    .edb-top-row-cartera {
                        grid-template-columns: 1fr;
                    }
                }
            </style>

            <div class="edb-top-row-cartera">
                <!-- Periodo Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Periodo</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-cartera-periodo">
                            <option value="Todos">Selección múltiple</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                        </select>
                    </div>
                </div>

                <!-- Zona Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Zona</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-cartera-zona">
                            <option value="Todas">Todas</option>
                            <option value="LIMA">LIMA</option>
                            <option value="AREQUIPA">AREQUIPA</option>
                            <option value="TRUJILLO">TRUJILLO</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="cartera-kpi-adjudicados">-</span>
                    <span class="adg-kpi-lbl">Cant. Adjudicados VEH</span>
                </div>

                <!-- KPI 2 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="cartera-kpi-sinvinculados">-</span>
                    <span class="adg-kpi-lbl">Cant. Sin Vinculados</span>
                </div>

                <!-- KPI 3 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="cartera-kpi-promedio">-</span>
                    <span class="adg-kpi-lbl">Prom. Adjudicaciones VEH</span>
                </div>

                <!-- KPI 4 -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="cartera-kpi-indicador">-</span>
                    <span class="adg-kpi-lbl">Indicador de Cartera</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Table -->
                <section class="table-card" style="margin: 0;">
                    <div class="table-card-header">
                        <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Detalle de Cartera</span></h3>
                    </div>
                    <div class="table-outer-container" style="max-height: 380px; overflow-y: auto;">
                        <table class="bitacoras-table">
                            <thead style="position: sticky; top: 0; z-index: 10;">
                                <tr>
                                    <th>Año</th>
                                    <th>Mes</th>
                                    <th style="text-align: right;">Cant. Adjudicados VEH</th>
                                    <th style="text-align: right;">Cant. Sin Vinculados</th>
                                    <th style="text-align: right;">Prom. Adjudicaciones VEH</th>
                                    <th style="text-align: right;">Indicador de Cartera</th>
                                </tr>
                            </thead>
                            <tbody id="cartera-table-body">
                            </tbody>
                        </table>
                    </div>
                </section>

                <!-- Chart -->
                <section class="chart-card" style="margin: 0;">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-line"></i><span>Evolutivo de Cartera</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 360px;"><canvas id="cartera-monthly-chart"></canvas></div>
                </section>
            </div>
        `;

        document.getElementById("f-cartera-periodo").addEventListener("change", (e) => {
            window.edbCarteraFilters.periodo = e.target.value;
            updateEdbCarteraDashboard();
        });
        document.getElementById("f-cartera-zona").addEventListener("change", (e) => {
            window.edbCarteraFilters.zona = e.target.value;
            updateEdbCarteraDashboard();
        });

        function updateEdbCarteraDashboard() {
            const countryFactor = (selectedCountry === 'colombia') ? 0.65 : 1.0;
            const periodo = window.edbCarteraFilters.periodo;
            const zona = window.edbCarteraFilters.zona;

            let zonaFactor = 1.0;
            if (zona === "LIMA") zonaFactor = 0.70;
            else if (zona === "AREQUIPA") zonaFactor = 0.20;
            else if (zona === "TRUJILLO") zonaFactor = 0.10;

            const totalFactor = countryFactor * zonaFactor;

            // Full datasets
            const allMonths = [
                "enero 2024", "febrero 2024", "marzo 2024", "abril 2024", "mayo 2024", "junio 2024", "julio 2024", "agosto 2024", "septiembre 2024", "octubre 2024", "noviembre 2024", "diciembre 2024",
                "enero 2025", "febrero 2025", "marzo 2025", "abril 2025", "mayo 2025", "junio 2025", "julio 2025", "agosto 2025", "septiembre 2025", "octubre 2025"
            ];
            const allAdjudicados = [350, 370, 360, 340, 330, 310, 320, 315, 380, 446, 427, 355, 472, 468, 473, 454, 405, 454, 518, 459, 490, 558];
            const allSinVinculados = [520, 550, 540, 530, 510, 490, 500, 495, 596, 677, 690, 644, 685, 755, 802, 794, 774, 788, 818, 842, 839, 915];
            const allPromedio = [360, 380, 370, 355, 340, 325, 335, 330, 396, 407, 418, 409, 418, 432, 471, 465, 444, 438, 459, 477, 489, 502];
            const allIndicador = [1.72, 1.86, 1.86, 1.79, 1.72, 1.59, 1.63, 1.61, 1.51, 1.66, 1.65, 1.57, 1.64, 1.75, 1.70, 1.71, 1.74, 1.80, 1.78, 1.77, 1.72, 1.82];

            // Filter datasets
            const baseMonths = [];
            const baseAdjudicados = [];
            const baseSinVinculados = [];
            const basePromedio = [];
            const baseIndicador = [];

            for (let i = 0; i < allMonths.length; i++) {
                const mStr = allMonths[i];
                const yr = mStr.split(" ")[1];
                if (periodo === "Todos" || periodo === yr) {
                    baseMonths.push(allMonths[i]);
                    baseAdjudicados.push(allAdjudicados[i]);
                    baseSinVinculados.push(allSinVinculados[i]);
                    basePromedio.push(allPromedio[i]);
                    baseIndicador.push(allIndicador[i]);
                }
            }

            // Scaled datasets
            const scaledAdjudicados = baseAdjudicados.map(v => Math.round(v * totalFactor));
            const scaledSinVinculados = baseSinVinculados.map(v => Math.round(v * totalFactor));
            const scaledPromedio = basePromedio.map(v => Math.round(v * totalFactor));
            const scaledIndicador = baseIndicador;

            // Latest values for KPIs
            const lastIdx = baseMonths.length - 1;
            const kpiAdjudicados = lastIdx >= 0 ? scaledAdjudicados[lastIdx] : 0;
            const kpiSinVinculados = lastIdx >= 0 ? scaledSinVinculados[lastIdx] : 0;
            const kpiPromedio = lastIdx >= 0 ? scaledPromedio[lastIdx] : 0;
            const kpiIndicador = lastIdx >= 0 ? scaledIndicador[lastIdx].toFixed(2).replace('.', ',') : "0,00";

            // Update KPIs
            document.getElementById("cartera-kpi-adjudicados").textContent = kpiAdjudicados.toLocaleString('es-PE');
            document.getElementById("cartera-kpi-sinvinculados").textContent = kpiSinVinculados.toLocaleString('es-PE');
            document.getElementById("cartera-kpi-promedio").textContent = kpiPromedio.toLocaleString('es-PE');
            document.getElementById("cartera-kpi-indicador").textContent = kpiIndicador;

            // Table rows
            const tbody = document.getElementById("cartera-table-body");
            let tableHtml = "";
            for (let i = 0; i < baseMonths.length; i++) {
                const mStr = baseMonths[i];
                const yr = mStr.split(" ")[1];
                const ms = mStr.split(" ")[0];
                const adj = scaledAdjudicados[i];
                const sin = scaledSinVinculados[i];
                const prom = scaledPromedio[i];
                const ind = scaledIndicador[i].toFixed(2).replace('.', ',');
                tableHtml += `
                    <tr>
                        <td>${yr}</td>
                        <td>${ms}</td>
                        <td style="text-align: right; font-weight: 600;">${adj.toLocaleString('es-PE')}</td>
                        <td style="text-align: right; font-weight: 600;">${sin.toLocaleString('es-PE')}</td>
                        <td style="text-align: right; font-weight: 600;">${prom.toLocaleString('es-PE')}</td>
                        <td style="text-align: right; font-weight: 700; color: #0b5fb0;">${ind}</td>
                    </tr>
                `;
            }
            tbody.innerHTML = tableHtml;

            // Draw Line Chart
            drawChart("cartera-monthly-chart", {
                type: "line",
                data: {
                    labels: baseMonths.map(m => {
                        const parts = m.split(" ");
                        return parts[0].substring(0, 3) + " " + parts[1];
                    }),
                    datasets: [
                        {
                            label: "Indicador de Cartera",
                            data: scaledIndicador,
                            borderColor: "#0B5FB0",
                            borderWidth: 3,
                            borderDash: [2, 2],
                            pointBackgroundColor: "#0B5FB0",
                            pointRadius: 5,
                            fill: false,
                            datalabels: {
                                anchor: "center",
                                align: "top",
                                offset: 10,
                                color: "#ffffff",
                                backgroundColor: "#0B5FB0",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 10 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 },
                                formatter: v => v.toFixed(2).replace('.', ',')
                            }
                        },
                        {
                            label: "Meta Indicador Cartera",
                            data: Array(baseMonths.length).fill(1.48),
                            borderColor: "#f25c66",
                            borderWidth: 2,
                            borderDash: [5, 5],
                            pointRadius: 0,
                            fill: false,
                            datalabels: {
                                display: (context) => context.dataIndex === 0 || context.dataIndex === context.dataset.data.length - 1,
                                anchor: "center",
                                align: "top",
                                color: "#ffffff",
                                backgroundColor: "#f25c66",
                                borderRadius: 3,
                                font: { family: "Inter", weight: "700", size: 10 },
                                padding: { top: 3, bottom: 3, left: 6, right: 6 },
                                formatter: v => v.toFixed(2).replace('.', ',')
                            }
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: { font: { family: "Inter", weight: "600", size: 10 }, color: "#334155" }
                        },
                        tooltip: baseTooltip,
                        datalabels: { display: true }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                        y: {
                            beginAtZero: false,
                            suggestedMin: 1.0,
                            suggestedMax: 2.2,
                            grid: { color: "rgba(0,0,0,0.03)" },
                            ticks: { color: "#64748b" }
                        }
                    }
                },
                plugins: [ChartDataLabels]
            });
        }

        updateEdbCarteraDashboard();
    }

    // ==================== RRHH - VENDEDORES SIN VENTA ====================
    function renderRrhhVendedores(slide, host) {
        if (!window.rrhhFilters) {
            window.rrhhFilters = {
                ciudad: "Todas"
            };
        }

        host.innerHTML = `
            <style>
                .rrhh-top-row {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    margin-bottom: 12px;
                }
                @media (max-width: 992px) {
                    .rrhh-top-row {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 576px) {
                    .rrhh-top-row {
                        grid-template-columns: 1fr;
                    }
                }
                /* Scrollable table container with fixed first column */
                .rrhh-table-wrapper {
                    position: relative;
                    width: 100%;
                    overflow-x: auto;
                    max-height: 400px;
                    border-radius: 8px;
                    background: #ffffff;
                }
                .rrhh-custom-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-size: 11px;
                }
                .rrhh-custom-table th, 
                .rrhh-custom-table td {
                    padding: 6px 8px;
                    text-align: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    border-right: 1px solid rgba(0, 0, 0, 0.05);
                    white-space: nowrap;
                }
                /* Table Colors matching the screenshot */
                .rrhh-custom-table thead tr:first-child th {
                    background-color: #ffffff;
                    color: var(--color-turquoise-dark);
                    font-weight: 700;
                }
                .rrhh-custom-table thead tr:last-child th,
                .rrhh-custom-table thead th[colspan] {
                    background-color: #0b5fb0;
                    color: #ffffff;
                    font-weight: 600;
                }
                .rrhh-custom-table th.ciudad-hdr,
                .rrhh-custom-table td.ciudad-cell {
                    position: sticky;
                    left: 0;
                    background-color: #0b5fb0 !important;
                    color: #ffffff !important;
                    font-weight: 700;
                    z-index: 5;
                    border-right: 2px solid rgba(0,0,0,0.1);
                }
                .rrhh-custom-table tr:hover td {
                    background-color: rgba(0, 130, 150, 0.04);
                }
                .rrhh-custom-table tr.total-row td {
                    background-color: #0b5fb0;
                    color: #ffffff;
                    font-weight: 700;
                }
                .rrhh-custom-table tr.highlighted-row td:not(.ciudad-cell) {
                    background-color: rgba(255, 209, 92, 0.15);
                    font-weight: 600;
                }
            </style>

            <div class="rrhh-top-row">
                <!-- Ciudad Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Ciudad</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-rrhh-vendedores-ciudad">
                            <option value="Todas">Todas</option>
                            <option value="BOGOTA">BOGOTÁ</option>
                            <option value="BARRANQUILLA">BARRANQUILLA</option>
                            <option value="MEDELLIN">MEDELLÍN</option>
                            <option value="BUCARAMANGA">BUCARAMANGA</option>
                            <option value="CALI">CALI</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1: Cantidad Cero Ventas (Último Mes) -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="rrhh-kpi-cant">126</span>
                    <span class="adg-kpi-lbl">Vendedores con Cero Ventas</span>
                </div>

                <!-- KPI 2: % Cero Ventas (Último Mes) -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="rrhh-kpi-pct">29 %</span>
                    <span class="adg-kpi-lbl">% Vendedores Cero Ventas</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Table Card -->
                <section class="table-card" style="margin: 0; padding: 15px;">
                    <div class="table-card-header" style="margin-bottom: 10px;">
                        <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Cantidad de Vendedores con Cero Ventas</span></h3>
                    </div>
                    <div class="rrhh-table-wrapper">
                        <table class="rrhh-custom-table" id="rrhh-vendedores-table">
                            <!-- Dynamic content -->
                        </table>
                    </div>
                </section>

                <!-- Chart Card -->
                <section class="chart-card" style="margin: 0; padding: 15px;">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-column"></i><span id="rrhh-chart-title">Evolución de Vendedores con Cero Ventas</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 300px;"><canvas id="rrhh-vendedores-chart"></canvas></div>
                </section>
            </div>
        `;

        document.getElementById("f-rrhh-vendedores-ciudad").value = window.rrhhFilters.ciudad;
        document.getElementById("f-rrhh-vendedores-ciudad").addEventListener("change", (e) => {
            window.rrhhFilters.ciudad = e.target.value;
            updateRrhhVendedores();
        });

        function updateRrhhVendedores() {
            const selCiudad = window.rrhhFilters.ciudad;
            const months = ["may-25", "jun-25", "jul-25", "ago-25", "sep-25", "oct-25", "nov-25", "dic-25", "ene-26", "feb-26", "mar-26", "abr-26", "may-26"];
            const cities = ["BOGOTA", "BARRANQUILLA", "MEDELLIN", "BUCARAMANGA", "CALI"];
            
            const vendedoresData = {
                "BOGOTA": [26, 31, 16, 21, 23, 29, 38, 11, 21, 10, 20, 30, 26],
                "BARRANQUILLA": [37, 29, 25, 29, 36, 32, 39, 40, 39, 22, 11, 30, 25],
                "MEDELLIN": [8, 32, 25, 25, 27, 23, 36, 24, 33, 19, 24, 31, 37],
                "BUCARAMANGA": [14, 16, 20, 24, 25, 23, 34, 27, 12, 18, 22, 36, 30],
                "CALI": [null, null, null, 1, 0, 3, 7, 1, 3, 6, 3, 9, 8]
            };

            const dotacionData = {
                "BOGOTA": [66, 69, 57, 68, 77, 81, 90, 77, 85, 67, 87, 93, 94],
                "BARRANQUILLA": [104, 97, 87, 92, 103, 102, 92, 91, 91, 77, 69, 78, 80],
                "MEDELLIN": [59, 76, 72, 78, 82, 86, 95, 86, 107, 102, 108, 115, 112],
                "BUCARAMANGA": [54, 57, 70, 86, 83, 94, 97, 96, 97, 95, 103, 125, 117],
                "CALI": [null, null, null, 2, 3, 6, 12, 15, 19, 29, 26, 36, 38]
            };

            // Compute Totals
            const totalVendedores = [];
            const totalDotacion = [];
            const totalPct = [];
            
            for (let m = 0; m < months.length; m++) {
                let sumVend = 0;
                let sumDot = 0;
                cities.forEach(c => {
                    const valV = vendedoresData[c][m];
                    const valD = dotacionData[c][m];
                    if (valV !== null) sumVend += valV;
                    if (valD !== null) sumDot += valD;
                });
                totalVendedores.push(sumVend);
                totalDotacion.push(sumDot);
                totalPct.push(sumDot > 0 ? Math.round((sumVend / sumDot) * 100) : 0);
            }

            // Update KPIs (use may-26 index = 12)
            let lastV = 126;
            let lastD = 441;
            let lastP = 29;

            if (selCiudad !== "Todas") {
                const mIdx = months.length - 1;
                lastV = vendedoresData[selCiudad][mIdx] || 0;
                lastD = dotacionData[selCiudad][mIdx] || 0;
                lastP = lastD > 0 ? Math.round((lastV / lastD) * 100) : 0;
            }

            document.getElementById("rrhh-kpi-cant").textContent = lastV.toLocaleString('es-PE');
            document.getElementById("rrhh-kpi-pct").textContent = lastP + " %";

            // Render Table
            const table = document.getElementById("rrhh-vendedores-table");
            let headerHtml = `
                <thead>
                    <tr>
                        <th rowspan="2" class="ciudad-hdr" style="vertical-align: middle;">CIUDAD</th>
                        ${months.map(m => `<th colspan="2" style="border-bottom: 1px solid rgba(255,255,255,0.2);">${m}</th>`).join('')}
                    </tr>
                    <tr>
                        ${months.map(() => `<th>Cant.</th><th>%</th>`).join('')}
                    </tr>
                </thead>
            `;

            let bodyHtml = "<tbody>";
            cities.forEach(c => {
                const isHighlighted = (c === selCiudad);
                bodyHtml += `<tr class="${isHighlighted ? 'highlighted-row' : ''}">`;
                bodyHtml += `<td class="ciudad-cell">${c}</td>`;
                for (let m = 0; m < months.length; m++) {
                    const v = vendedoresData[c][m];
                    const d = dotacionData[c][m];
                    const pct = (v !== null && d > 0) ? Math.round((v / d) * 100) : null;
                    bodyHtml += `
                        <td>${v !== null ? v : ''}</td>
                        <td>${pct !== null ? pct + '%' : ''}</td>
                    `;
                }
                bodyHtml += `</tr>`;
            });

            // Total row
            bodyHtml += `<tr class="total-row">`;
            bodyHtml += `<td class="ciudad-cell" style="background-color: #0b5fb0 !important;">TOTAL</td>`;
            for (let m = 0; m < months.length; m++) {
                bodyHtml += `
                    <td>${totalVendedores[m]}</td>
                    <td>${totalPct[m]}%</td>
                `;
            }
            bodyHtml += `</tr></tbody>`;
            table.innerHTML = headerHtml + bodyHtml;

            // Render Chart
            let chartDatasets = [];
            let chartTitle = "";

            if (selCiudad === "Todas") {
                chartTitle = "Vendedores con Cero Ventas por Ciudad (Cantidad)";
                // Stacked bars of all cities
                const colors = ["#0B5FB0", "#3A7CA5", "#E0A458", "#E2674F", "#2A9D8F"];
                chartDatasets = cities.map((c, idx) => ({
                    label: c,
                    data: vendedoresData[c],
                    backgroundColor: colors[idx],
                    stack: 'stack1',
                    borderRadius: 2
                }));
            } else {
                chartTitle = `Desempeño de Vendedores sin Venta: ${selCiudad}`;
                chartDatasets = [
                    {
                        type: "bar",
                        label: "Cant. Vendedores sin Venta",
                        data: vendedoresData[selCiudad],
                        backgroundColor: "#0B5FB0",
                        yAxisID: "y",
                        borderRadius: 4,
                        barThickness: 20,
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            color: "#334155",
                            font: { family: "Inter", weight: "700", size: 9 }
                        }
                    },
                    {
                        type: "line",
                        label: "% Cero Ventas",
                        data: vendedoresData[selCiudad].map((v, mIdx) => {
                            const d = dotacionData[selCiudad][mIdx];
                            return (v !== null && d > 0) ? Math.round((v / d) * 100) : null;
                        }),
                        borderColor: "#f25c66",
                        borderWidth: 2,
                        pointBackgroundColor: "#f25c66",
                        pointRadius: 4,
                        fill: false,
                        yAxisID: "y1",
                        datalabels: {
                            anchor: "center",
                            align: "top",
                            color: "#f25c66",
                            font: { family: "Inter", weight: "700", size: 9 },
                            formatter: v => v !== null ? v + "%" : ""
                        }
                    }
                ];
            }

            document.getElementById("rrhh-chart-title").textContent = chartTitle;

            drawChart("rrhh-vendedores-chart", {
                type: selCiudad === "Todas" ? "bar" : "bar",
                data: {
                    labels: months,
                    datasets: chartDatasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: { font: { family: "Inter", weight: "600", size: 10 }, color: "#334155" }
                        },
                        tooltip: baseTooltip,
                        datalabels: {
                            display: selCiudad !== "Todas",
                        }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                        y: {
                            position: "left",
                            beginAtZero: true,
                            grid: { color: "rgba(0,0,0,0.03)" },
                            ticks: { color: "#64748b" }
                        },
                        y1: selCiudad === "Todas" ? { display: false } : {
                            position: "right",
                            beginAtZero: true,
                            max: 100,
                            grid: { display: false },
                            ticks: { color: "#64748b", callback: v => v + "%" }
                        }
                    }
                },
                plugins: [ChartDataLabels]
            });
        }

        updateRrhhVendedores();
    }

    // ==================== RRHH - TOTAL DOTACIÓN ====================
    function renderRrhhDotacion(slide, host) {
        if (!window.rrhhFilters) {
            window.rrhhFilters = {
                ciudad: "Todas"
            };
        }

        host.innerHTML = `
            <style>
                .rrhh-top-row {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 16px;
                    margin-bottom: 12px;
                }
                @media (max-width: 992px) {
                    .rrhh-top-row {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }
                @media (max-width: 576px) {
                    .rrhh-top-row {
                        grid-template-columns: 1fr;
                    }
                }
                .rrhh-table-wrapper {
                    position: relative;
                    width: 100%;
                    overflow-x: auto;
                    max-height: 400px;
                    border-radius: 8px;
                    background: #ffffff;
                }
                .rrhh-custom-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-size: 11px;
                }
                .rrhh-custom-table th, 
                .rrhh-custom-table td {
                    padding: 8px 10px;
                    text-align: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    border-right: 1px solid rgba(0, 0, 0, 0.05);
                    white-space: nowrap;
                }
                .rrhh-custom-table thead tr th {
                    background-color: #0b5fb0;
                    color: #ffffff;
                    font-weight: 600;
                }
                .rrhh-custom-table th.ciudad-hdr,
                .rrhh-custom-table td.ciudad-cell {
                    position: sticky;
                    left: 0;
                    background-color: #0b5fb0 !important;
                    color: #ffffff !important;
                    font-weight: 700;
                    z-index: 5;
                    border-right: 2px solid rgba(0,0,0,0.1);
                }
                .rrhh-custom-table tr:hover td {
                    background-color: rgba(0, 130, 150, 0.04);
                }
                .rrhh-custom-table tr.total-row td {
                    background-color: #0b5fb0;
                    color: #ffffff;
                    font-weight: 700;
                }
                .rrhh-custom-table tr.highlighted-row td:not(.ciudad-cell) {
                    background-color: rgba(255, 209, 92, 0.15);
                    font-weight: 600;
                }
            </style>

            <div class="rrhh-top-row">
                <!-- Ciudad Filter -->
                <div class="adg-filter-card">
                    <span class="adg-filter-title">Ciudad</span>
                    <div class="select-wrapper">
                        <select class="select-neumorphic" id="f-rrhh-dotacion-ciudad">
                            <option value="Todas">Todas</option>
                            <option value="BOGOTA">BOGOTÁ</option>
                            <option value="BARRANQUILLA">BARRANQUILLA</option>
                            <option value="MEDELLIN">MEDELLÍN</option>
                            <option value="BUCARAMANGA">BUCARAMANGA</option>
                            <option value="CALI">CALI</option>
                        </select>
                    </div>
                </div>

                <!-- KPI 1: Total Dotación (Último Mes) -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" id="rrhh-dot-kpi-total">441</span>
                    <span class="adg-kpi-lbl">Total Dotación Colombia</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Table Card -->
                <section class="table-card" style="margin: 0; padding: 15px;">
                    <div class="table-card-header" style="margin-bottom: 10px;">
                        <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Total Dotación por Zonas</span></h3>
                    </div>
                    <div class="rrhh-table-wrapper">
                        <table class="rrhh-custom-table" id="rrhh-dotacion-table">
                            <!-- Dynamic content -->
                        </table>
                    </div>
                </section>

                <!-- Chart Card -->
                <section class="chart-card" style="margin: 0; padding: 15px;">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-line"></i><span id="rrhh-dot-chart-title">Evolución de Dotación por Zonas</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 300px;"><canvas id="rrhh-dotacion-chart"></canvas></div>
                </section>
            </div>
        `;

        document.getElementById("f-rrhh-dotacion-ciudad").value = window.rrhhFilters.ciudad;
        document.getElementById("f-rrhh-dotacion-ciudad").addEventListener("change", (e) => {
            window.rrhhFilters.ciudad = e.target.value;
            updateRrhhDotacion();
        });

        function updateRrhhDotacion() {
            const selCiudad = window.rrhhFilters.ciudad;
            const months = ["may-25", "jun-25", "jul-25", "ago-25", "sep-25", "oct-25", "nov-25", "dic-25", "ene-26", "feb-26", "mar-26", "abr-26", "may-26"];
            const cities = ["BOGOTA", "BARRANQUILLA", "MEDELLIN", "BUCARAMANGA", "CALI"];

            const dotacionData = {
                "BOGOTA": [66, 69, 57, 68, 77, 81, 90, 77, 85, 67, 87, 93, 94],
                "BARRANQUILLA": [104, 97, 87, 92, 103, 102, 92, 91, 91, 77, 69, 78, 80],
                "MEDELLIN": [59, 76, 72, 78, 82, 86, 95, 86, 107, 102, 108, 115, 112],
                "BUCARAMANGA": [54, 57, 70, 86, 83, 94, 97, 96, 97, 95, 103, 125, 117],
                "CALI": [null, null, null, 2, 3, 6, 12, 15, 19, 29, 26, 36, 38]
            };

            const totalDotacion = [283, 299, 286, 326, 348, 369, 386, 365, 399, 370, 393, 447, 441];

            // Update KPI
            let lastD = 441;
            if (selCiudad !== "Todas") {
                lastD = dotacionData[selCiudad][months.length - 1] || 0;
            }
            document.getElementById("rrhh-dot-kpi-total").textContent = lastD.toLocaleString('es-PE');

            // Render Table
            const table = document.getElementById("rrhh-dotacion-table");
            let headerHtml = `
                <thead>
                    <tr>
                        <th class="ciudad-hdr">CIUDAD</th>
                        ${months.map(m => `<th>${m}</th>`).join('')}
                    </tr>
                </thead>
            `;

            let bodyHtml = "<tbody>";
            cities.forEach(c => {
                const isHighlighted = (c === selCiudad);
                bodyHtml += `<tr class="${isHighlighted ? 'highlighted-row' : ''}">`;
                bodyHtml += `<td class="ciudad-cell">${c}</td>`;
                for (let m = 0; m < months.length; m++) {
                    const val = dotacionData[c][m];
                    bodyHtml += `<td>${val !== null ? val : ''}</td>`;
                }
                bodyHtml += `</tr>`;
            });

            // Total row
            bodyHtml += `<tr class="total-row">`;
            bodyHtml += `<td class="ciudad-cell" style="background-color: #0b5fb0 !important;">TOTAL</td>`;
            totalDotacion.forEach(t => {
                bodyHtml += `<td>${t}</td>`;
            });
            bodyHtml += `</tr></tbody>`;
            table.innerHTML = headerHtml + bodyHtml;

            // Render Chart
            let chartDatasets = [];
            let chartTitle = "";

            if (selCiudad === "Todas") {
                chartTitle = "Distribución de Dotación por Zonas";
                const colors = ["#0E8C9B", "#3A7CA5", "#E0A458", "#E2674F", "#2A9D8F"];
                chartDatasets = cities.map((c, idx) => ({
                    type: "bar",
                    label: c,
                    data: dotacionData[c],
                    backgroundColor: colors[idx],
                    stack: 'stack1',
                    borderRadius: 2
                }));
            } else {
                chartTitle = `Evolutivo de Dotación: ${selCiudad}`;
                chartDatasets = [{
                    type: "line",
                    label: "Total Dotación",
                    data: dotacionData[selCiudad],
                    borderColor: "#0B5FB0",
                    borderWidth: 3,
                    pointBackgroundColor: "#0B5FB0",
                    pointRadius: 5,
                    fill: false,
                    datalabels: {
                        display: true,
                        anchor: "center",
                        align: "top",
                        color: "#0B5FB0",
                        font: { family: "Inter", weight: "700", size: 10 }
                    }
                }];
            }

            document.getElementById("rrhh-dot-chart-title").textContent = chartTitle;

            drawChart("rrhh-dotacion-chart", {
                type: selCiudad === "Todas" ? "bar" : "line",
                data: {
                    labels: months,
                    datasets: chartDatasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: "top",
                            labels: { font: { family: "Inter", weight: "600", size: 10 }, color: "#334155" }
                        },
                        tooltip: baseTooltip,
                        datalabels: {
                            display: selCiudad !== "Todas",
                        }
                    },
                    scales: {
                        x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                        y: {
                            beginAtZero: true,
                            grid: { color: "rgba(0,0,0,0.03)" },
                            ticks: { color: "#64748b" }
                        }
                    }
                },
                plugins: [ChartDataLabels]
            });
        }

        updateRrhhDotacion();
    }

    // ==================== RRHH - TOTAL MAQUIMAS COLOMBIA ====================
    function renderRrhhColombia(slide, host) {
        host.innerHTML = `
            <style>
                .rrhh-top-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 16px;
                    margin-bottom: 12px;
                }
                @media (max-width: 768px) {
                    .rrhh-top-row {
                        grid-template-columns: 1fr;
                    }
                }
                .rrhh-table-wrapper {
                    position: relative;
                    width: 100%;
                    overflow-x: auto;
                    border-radius: 8px;
                    background: #ffffff;
                }
                .rrhh-custom-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-size: 11px;
                }
                .rrhh-custom-table th, 
                .rrhh-custom-table td {
                    padding: 8px 10px;
                    text-align: center;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    border-right: 1px solid rgba(0, 0, 0, 0.05);
                    white-space: nowrap;
                }
                .rrhh-custom-table thead tr th {
                    background-color: #0b5fb0;
                    color: #ffffff;
                    font-weight: 600;
                }
                .rrhh-custom-table td.label-cell {
                    position: sticky;
                    left: 0;
                    font-weight: 700;
                    z-index: 5;
                    border-right: 2px solid rgba(0,0,0,0.1);
                }
                .rrhh-custom-table tr.total-row td {
                    font-weight: 700;
                }
            </style>

            <div class="rrhh-top-row">
                <!-- KPI 1: Ventas -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" style="color: #0B5FB0;">897</span>
                    <span class="adg-kpi-lbl">Ventas (Último Mes)</span>
                </div>

                <!-- KPI 2: Dotación -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" style="color: #3A7CA5;">441</span>
                    <span class="adg-kpi-lbl">Dotación (Último Mes)</span>
                </div>

                <!-- KPI 3: Productividad -->
                <div class="adg-kpi-card">
                    <span class="adg-kpi-val" style="color: #f25c66;">2,00</span>
                    <span class="adg-kpi-lbl">Productividad (Último Mes)</span>
                </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                <!-- Table Card -->
                <section class="table-card" style="margin: 0; padding: 15px;">
                    <div class="table-card-header" style="margin-bottom: 10px;">
                        <h3 class="table-card-title"><i class="fa-solid fa-table"></i><span>Resumen Total Maquimas Colombia</span></h3>
                    </div>
                    <div class="rrhh-table-wrapper">
                        <table class="rrhh-custom-table" id="rrhh-colombia-table">
                            <!-- Content -->
                        </table>
                    </div>
                </section>

                <!-- Chart Card -->
                <section class="chart-card" style="margin: 0; padding: 15px;">
                    <div class="chart-card-header">
                        <h3 class="chart-card-title"><i class="fa-solid fa-chart-line"></i><span>Ventas vs Productividad Maquimas Colombia</span></h3>
                    </div>
                    <div class="chart-canvas-wrapper" style="height: 300px;"><canvas id="rrhh-colombia-chart"></canvas></div>
                </section>
            </div>
        `;

        const months = ["may-25", "jun-25", "jul-25", "ago-25", "sep-25", "oct-25", "nov-25", "dic-25", "ene-26", "feb-26", "mar-26", "abr-26", "may-26"];
        const ventas = [564, 479, 661, 694, 628, 835, 580, 664, 1046, 921, 992, 1010, 897];
        const dotacion = [283, 299, 286, 326, 348, 369, 386, 365, 399, 370, 392, 447, 441];
        const productividad = [1.99, 1.6, 2.31, 2.13, 1.8, 2.26, 1.5, 1.8, 2.6, 2.5, 2.5, 2.3, 2.0];

        // Render Table
        const table = document.getElementById("rrhh-colombia-table");
        let tableHtml = `
            <thead>
                <tr>
                    <th class="label-cell" style="background-color: #0b5fb0 !important; color: #ffffff;">MÉTRICA</th>
                    ${months.map(m => `<th>${m}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr class="total-row" style="background-color: rgba(11, 95, 176, 0.05);">
                    <td class="label-cell" style="background-color: #ffffff; color: #0b5fb0;">VENTAS TOTAL</td>
                    ${ventas.map(v => `<td>${v.toLocaleString('es-PE')}</td>`).join('')}
                </tr>
                <tr class="total-row" style="background-color: rgba(58, 124, 165, 0.05);">
                    <td class="label-cell" style="background-color: #ffffff; color: #3a7ca5;">DOTACIÓN TOTAL</td>
                    ${dotacion.map(d => `<td>${d.toLocaleString('es-PE')}</td>`).join('')}
                </tr>
                <tr class="total-row" style="background-color: rgba(242, 92, 102, 0.05);">
                    <td class="label-cell" style="background-color: #ffffff; color: #f25c66;">PRODUCTIVIDAD TOTAL</td>
                    ${productividad.map(p => `<td>${p.toFixed(2).replace('.', ',')}</td>`).join('')}
                </tr>
            </tbody>
        `;
        table.innerHTML = tableHtml;

        // Render Chart
        drawChart("rrhh-colombia-chart", {
            type: "bar",
            data: {
                labels: months,
                datasets: [
                    {
                        type: "bar",
                        label: "Ventas",
                        data: ventas,
                        backgroundColor: "#0B5FB0",
                        yAxisID: "y",
                        borderRadius: 4,
                        barThickness: 16,
                        datalabels: {
                            anchor: "end",
                            align: "top",
                            color: "#334155",
                            font: { family: "Inter", weight: "700", size: 8 }
                        }
                    },
                    {
                        type: "line",
                        label: "Productividad",
                        data: productividad,
                        borderColor: "#f25c66",
                        borderWidth: 2,
                        pointBackgroundColor: "#f25c66",
                        pointRadius: 4,
                        fill: false,
                        yAxisID: "y1",
                        datalabels: {
                            anchor: "center",
                            align: "top",
                            color: "#f25c66",
                            font: { family: "Inter", weight: "700", size: 9 },
                            formatter: v => v.toFixed(2).replace('.', ',')
                        }
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: "top",
                        labels: { font: { family: "Inter", weight: "600", size: 10 }, color: "#334155" }
                    },
                    tooltip: baseTooltip,
                    datalabels: {
                        display: true,
                    }
                },
                scales: {
                    x: { grid: { display: false }, ticks: { font: { family: "Inter", weight: "600" }, color: "#334155" } },
                    y: {
                        position: "left",
                        beginAtZero: true,
                        grid: { color: "rgba(0,0,0,0.03)" },
                        ticks: { color: "#64748b" }
                    },
                    y1: {
                        position: "right",
                        beginAtZero: true,
                        max: 4.0,
                        grid: { display: false },
                        ticks: { color: "#64748b" }
                    }
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
  