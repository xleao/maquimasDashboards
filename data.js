/* =========================================================================
   GENERADOR DE DATOS MENSUALES MULTI-AÑO (demo local, sin servidor)
   Construye, para cada año, la serie mensual de:
     - cantidad  (unidades vendidas)
     - monto     (S/. facturado)
     - presupuesto / presupuestoMonto
   Los años 2025 y 2026 usan los valores reales del reporte; el resto se
   generan de forma determinista (misma salida en cada carga).
   ========================================================================= */
(function () {
  const MONTHS = [
    "ENE.",
    "FEB.",
    "MAR.",
    "ABR.",
    "MAY.",
    "JUN.",
    "JUL.",
    "AGO.",
    "SET.",
    "OCT.",
    "NOV.",
    "DIC.",
  ];

  // Forma estacional de las ventas a lo largo del año (más alto a fin de año)
  const season = [
    0.78, 0.76, 0.8, 0.82, 0.88, 0.9, 1.02, 1.05, 1.12, 1.18, 1.36, 1.33,
  ];
  const seasonSum = season.reduce((a, b) => a + b, 0);

  // Totales anuales reales (cantidad de ventas) — fuente del reporte
  const totals = {
    2012: 3840,
    2013: 4120,
    2014: 4560,
    2015: 4890,
    2016: 5010,
    2017: 4980,
    2018: 5045,
    2019: 5172,
    2020: 5679,
    2021: 10829,
    2022: 13788,
    2023: 12086,
    2024: 12932,
    2025: 17397,
    2026: 5675,
  };

  // Meses con información cargada (2026 solo Ene–Mar)
  const monthsWithData = { 2026: 3 };

  // Valores reales conocidos (para que el gráfico coincida con el reporte)
  const known = {
    2026: [
      2056,
      1824,
      1795,
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
    2025: [
      1355, 1341, 1120, 1049, 1242, 1301, 1456, 1465, 1585, 1630, 1970, 1883,
    ],
  };
  const presupuesto2026 = [
    1465, 1465, 1529, 1569, 1649, 1596, 1680, 1677, 1717, 1788, 1876, 1838,
  ];

  const TICKET = 348; // S/. promedio por unidad (para convertir cantidad -> monto)

  // PRNG determinista (LCG) para que la "data demo" sea estable entre cargas
  function rng(seed) {
    let s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return () => (s = (s * 16807) % 2147483647) / 2147483647;
  }

  function buildYear(year) {
    const total = totals[year];
    const nMonths = monthsWithData[year] || 12;

    // --- Cantidad ---
    let cantidad;
    if (known[year]) {
      cantidad = known[year].slice();
    } else {
      const rand = rng(year * 7 + 13);
      const raw = season.map((w) => w + (rand() - 0.5) * 0.25);
      const rawSum = raw.reduce((a, b) => a + b, 0);
      cantidad = raw.map((w) => Math.round((total * w) / rawSum));
      // Ajuste de redondeo para cuadrar el total exacto
      cantidad[11] += total - cantidad.reduce((a, b) => a + b, 0);
      if (nMonths < 12) for (let i = nMonths; i < 12; i++) cantidad[i] = null;
    }

    // --- Monto (S/.) = cantidad * ticket con leve variación de precio ---
    const randM = rng(year * 31 + 5);
    const monto = cantidad.map((c) =>
      c == null ? null : Math.round(c * (TICKET + (randM() - 0.5) * 60)),
    );

    // --- Presupuesto (cantidad) ---
    let presupuesto;
    if (year === 2026) {
      presupuesto = presupuesto2026.slice();
    } else {
      const randP = rng(year * 17 + 3);
      presupuesto = season.map((w) =>
        Math.round((total / seasonSum) * w * (0.95 + randP() * 0.08)),
      );
    }
    const presupuestoMonto = presupuesto.map((p) => Math.round(p * TICKET));

    return { cantidad, monto, presupuesto, presupuestoMonto };
  }

  const years = {};
  Object.keys(totals).forEach((y) => {
    years[+y] = buildYear(+y);
  });

  // Generador para Slide 2 (Ventas por Origen)
  const slide2Averages = {
    2020: 96.0,
    2021: 172.0,
    2022: 224.0,
    2023: 242.0,
    2024: 240.7,
    2025: 213.9,
    2026: 270.7,
  };

  const slide2YearsData = {};
  const knownVentas2025 = [
    195.0, 185.0, 161.0, 152.0, 137.0, 183.0, 225.0, 226.0, 245.0, 232.0, 302.0,
    252.0,
  ];
  const knownPresupuesto2025 = [
    265.0, 270.0, 285.6, 287.7, 289.7, 297.8, 303.6, 282.3, 296.9, 307.9, 318.8,
    300.2,
  ];
  const knownVentas2026 = [
    298.0,
    299.0,
    215.0,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const knownPresupuesto2026 = [
    248.7,
    248.4,
    258.3,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  Object.keys(slide2Averages).forEach((yStr) => {
    const y = Number(yStr);
    const avg = slide2Averages[y];
    let ventas = [];
    let presupuesto = [];

    if (y === 2025) {
      ventas = knownVentas2025.slice();
      presupuesto = knownPresupuesto2025.slice();
    } else if (y === 2026) {
      ventas = knownVentas2026.slice();
      presupuesto = knownPresupuesto2026.slice();
    } else {
      const rand = rng(y * 13 + 7);
      const randP = rng(y * 23 + 11);
      for (let m = 0; m < 12; m++) {
        const vFactor = 0.92 + rand() * 0.16;
        ventas.push(Number((avg * season[m] * vFactor).toFixed(1)));
        const pFactor = 0.95 + randP() * 0.12;
        presupuesto.push(Number((avg * season[m] * pFactor).toFixed(1)));
      }
    }

    slide2YearsData[y] = {
      pdv: {
        ventas: ventas,
        presupuesto: presupuesto,
      },
      lima: {
        ventas: ventas.map((v) =>
          v === null ? null : Number((v * 0.75).toFixed(1)),
        ),
        presupuesto: presupuesto.map((p) =>
          p === null ? null : Number((p * 0.75).toFixed(1)),
        ),
      },
      provincia: {
        ventas: ventas.map((v) =>
          v === null ? null : Number((v * 0.25).toFixed(1)),
        ),
        presupuesto: presupuesto.map((p) =>
          p === null ? null : Number((p * 0.25).toFixed(1)),
        ),
      },
    };
  });

  // Generador para Slide 3 (Ventas por Producto)
  const slide3Averages = {
    2020: 214.0,
    2021: 521.0,
    2022: 839.0,
    2023: 671.0,
    2024: 664.5,
    2025: 775.8,
    2026: 863.0,
  };

  const slide3YearsData = {};
  const knownVentas2025_s3 = [
    720.0, 710.0, 608.0, 568.0, 675.0, 700.0, 777.0, 763.0, 890.0, 869.0, 990.0,
    916.0,
  ];
  const knownPresupuesto2025_s3 = [
    730.0, 720.0, 714.0, 724.0, 731.0, 748.0, 763.0, 715.0, 745.0, 783.0, 798.0,
    747.0,
  ];
  const knownVentas2026_s3 = [
    935.0,
    873.0,
    781.0,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const knownPresupuesto2026_s3 = [
    826.0,
    826.0,
    859.0,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];

  Object.keys(slide3Averages).forEach((yStr) => {
    const y = Number(yStr);
    const avg = slide3Averages[y];
    let ventas = [];
    let presupuesto = [];

    if (y === 2025) {
      ventas = knownVentas2025_s3.slice();
      presupuesto = knownPresupuesto2025_s3.slice();
    } else if (y === 2026) {
      ventas = knownVentas2026_s3.slice();
      presupuesto = knownPresupuesto2026_s3.slice();
    } else {
      const rand = rng(y * 19 + 3);
      const randP = rng(y * 29 + 5);
      for (let m = 0; m < 12; m++) {
        const vFactor = 0.92 + rand() * 0.16;
        ventas.push(Number((avg * season[m] * vFactor).toFixed(1)));
        const pFactor = 0.95 + randP() * 0.12;
        presupuesto.push(Number((avg * season[m] * pFactor).toFixed(1)));
      }
    }

    slide3YearsData[y] = {
      autoahorro: {
        ventas: ventas,
        presupuesto: presupuesto,
      },
      casahorro: {
        ventas: ventas.map((v) =>
          v === null ? null : Number((v * 0.6).toFixed(1)),
        ),
        presupuesto: presupuesto.map((p) =>
          p === null ? null : Number((p * 0.6).toFixed(1)),
        ),
      },
      motoahorro: {
        ventas: ventas.map((v) =>
          v === null ? null : Number((v * 0.4).toFixed(1)),
        ),
        presupuesto: presupuesto.map((p) =>
          p === null ? null : Number((p * 0.4).toFixed(1)),
        ),
      },
    };
  });

  window.__salesOriginsYears = slide2YearsData;
  window.__salesProductsYears = slide3YearsData;

  window.__salesMonths = MONTHS;
  window.__salesYears = years;
  window.__salesTotals = totals;
})();

const dashboardData = {
  slide1: {
    title: "Cantidad de Ventas",
    months: window.__salesMonths,
    years: window.__salesYears,
    totals: window.__salesTotals,
    defaultYear: 2026,
  },
  slide2: {
    title: "Cantidad de ventas por Origen de la venta",
    filter: "Punto de Venta (PdV) / RS",
    chartAnnual: {
      categories: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
      values: [96.0, 172.0, 224.0, 242.0, 240.7, 213.9, 270.7],
      name: "Promedio Anual",
    },
    years: window.__salesOriginsYears,
  },
  slide3: {
    title: "Cantidad de ventas por Producto",
    filter: "Autoahorro",
    chartAnnual: {
      categories: ["2020", "2021", "2022", "2023", "2024", "2025", "2026"],
      values: [214.0, 521.0, 839.0, 671.0, 664.5, 775.8, 863.0],
      name: "Promedio Anual",
    },
    years: window.__salesProductsYears,
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
      target: [
        "400",
        "450",
        "500",
        "500",
        "520",
        "500",
        "1,000",
        "1,350",
        "500",
        "1,100",
        "2,700",
        "1,250",
      ],
      compliance: [
        "102.5%",
        "106.7%",
        "101.0%",
        "102.4%",
        "101.5%",
        "103.0%",
        "101.0%",
        "105.2%",
        "104.8%",
        "102.2%",
        "104.4%",
        "104.7%",
      ],
    },
    chart: {
      categories: [
        "ENE.",
        "FEB.",
        "MAR.",
        "ABR.",
        "MAY.",
        "JUN.",
        "JUL.",
        "AGO.",
        "SET.",
        "OCT.",
        "NOV.",
        "DIC.",
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
          color: "#8ECAE6",
        },
        {
          name: "Ventas 25",
          values: [156, 155, 147, 126, 176, 209, 257, 246, 274, 266, 377, 429],
          color: "#FFB4A2",
        },
        {
          name: "PRESUPUESTO",
          values: [295, 295, 304, 316, 329, 349, 365, 374, 379, 390, 401, 403],
          color: "#A8DADC",
        },
      ],
    },
  },
  slide5: {
    title: "Productividad por Antigüedad: Ene – Mar 2026",
    chart: {
      categories: ["< 1M", "[1-3] M", "[4-6] M", "> 6M"],
      series: [
        { name: "Oct-25", values: [0.82, 1.98, 2.26, 2.35], color: "#414751" },
        { name: "Nov-25", values: [1.57, 2.5, 3.03, 2.87], color: "#A8DADC" },
        { name: "Dic-25", values: [1.69, 2.37, 2.84, 3.35], color: "#8b919d" },
        { name: "Ene-26", values: [1.21, 3.0, 3.47, 3.67], color: "#A8DADC" },
        { name: "Feb-26", values: [1.29, 2.69, 2.07, 3.41], color: "#8ECAE6" },
        { name: "Mar-26", values: [1.19, 2.68, 2.54, 3.15], color: "#d4e4fa" },
      ],
    },
    table: {
      months: ["Oct-25", "Nov-25", "Dic-25", "Ene-26", "Feb-26", "Mar-26"],
      antiguedades: {
        "< 1M": [0.82, 1.57, 1.69, 1.21, 1.29, 1.19],
        "[1-3] M": [1.98, 2.5, 2.37, 3.0, 2.69, 2.68],
        "[4-6] M": [2.26, 3.03, 2.84, 3.47, 2.07, 2.54],
        "> 6M": [2.35, 2.87, 3.35, 3.67, 3.41, 3.15],
      },
    },
  },
  slide6: {
    title: "Dotación por Antigüedad: Ene – Mar 2026",
    chart: {
      categories: [
        "Mar-25",
        "Abr-25",
        "May-25",
        "Jun-25",
        "Jul-25",
        "Ago-25",
        "Set-25",
        "Oct-25",
        "Nov-25",
        "Dic-25",
        "Ene-26",
        "Feb-26",
        "Mar-26",
      ],
      series: [
        {
          name: "< 1M",
          values: [28, 31, 23, 18, 40, 17, 30, 17, 47, 36, 14, 54, 21],
          color: "#A8DADC",
        },
        {
          name: "[1-3] M",
          values: [35, 39, 58, 56, 49, 52, 49, 52, 38, 62, 59, 45, 57],
          color: "#414751",
        },
        {
          name: "[4-6] M",
          values: [19, 16, 14, 16, 23, 35, 36, 27, 30, 31, 36, 28, 35],
          color: "#8b919d",
        },
        {
          name: "> 6M",
          values: [37, 36, 40, 36, 36, 35, 34, 43, 46, 49, 51, 61, 60],
          color: "#A8DADC",
        },
        {
          name: "Total Staff",
          values: [
            119, 122, 135, 126, 148, 139, 149, 139, 161, 178, 160, 188, 173,
          ],
          color: "#8ECAE6",
          type: "line",
        },
      ],
    },
    table: {
      months: [
        "Mar-25",
        "Abr-25",
        "May-25",
        "Jun-25",
        "Jul-25",
        "Ago-25",
        "Set-25",
        "Oct-25",
        "Nov-25",
        "Dic-25",
        "Ene-26",
        "Feb-26",
        "Mar-26",
      ],
      series: {
        less_1m: [28, 31, 23, 18, 40, 17, 30, 17, 47, 36, 14, 54, 21],
        one_three_m: [35, 39, 58, 56, 49, 52, 49, 52, 38, 62, 59, 45, 57],
        four_six_m: [19, 16, 14, 16, 23, 35, 36, 27, 30, 31, 36, 28, 35],
        more_6m: [37, 36, 40, 36, 36, 35, 34, 43, 46, 49, 51, 61, 60],
        total: [
          119, 122, 135, 126, 148, 139, 149, 139, 161, 178, 160, 188, 173,
        ],
        rotation: [
          "3.5%",
          "2.8%",
          "3.1%",
          "4.2%",
          "2.1%",
          "3.6%",
          "2.8%",
          "3.9%",
          "3.4%",
          "4.0%",
          "2.9%",
          "3.5%",
          "2.7%",
        ],
      },
    },
  },
  slide7: {
    title: "Cantidad de Ventas Lima y provincias",
    tableQty: {
      headers: [
        "",
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
      rows: [
        [
          "LIMA",
          "3,450",
          "3,680",
          "4,010",
          "4,220",
          "4,450",
          "4,310",
          "7,713",
          "9,562",
          "8,343",
          "9,364",
          "13,582",
          "4,490",
        ],
        [
          "PROVINCIAS",
          "1,440",
          "1,330",
          "1,669",
          "1,459",
          "1,229",
          "1,369",
          "3,116",
          "4,226",
          "3,723",
          "3,563",
          "3,815",
          "1,185",
        ],
        [
          "TOTAL",
          "4,890",
          "5,010",
          "5,679",
          "5,679",
          "5,679",
          "5,679",
          "10,829",
          "13,788",
          "12,066",
          "12,927",
          "17,397",
          "5,675",
        ],
      ],
    },
    tablePct: {
      headers: [
        "",
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
      rows: [
        [
          "LIMA",
          "71%",
          "73%",
          "71%",
          "74%",
          "78%",
          "76%",
          "71%",
          "69%",
          "69%",
          "72%",
          "78%",
          "79%",
        ],
        [
          "PROVINCIAS",
          "29%",
          "27%",
          "29%",
          "26%",
          "22%",
          "24%",
          "29%",
          "31%",
          "31%",
          "28%",
          "22%",
          "21%",
        ],
        [
          "TOTAL",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
          "100%",
        ],
      ],
    },
  },
  slide8: {
    title: "Calidad de la Venta – Anulaciones por Motivos Comerciales",
    subtitle:
      "Objetivo de Anulaciones por Motivos Comerciales sobre Ventas Brutas: Lograr que representen como máximo el 2% de las ventas",
    chart: {
      categories: [
        "IV Trim 23",
        "I Trim 24",
        "II Trim 24",
        "III Trim 24",
        "IV Trim 24",
        "I Trim 25",
        "II Trim 25",
        "III Trim 25",
        "IV Trim 25",
        "I Trim 26",
      ],
      rates: [2.36, 1.61, 1.97, 1.89, 2.18, 1.79, 4.02, 1.91, 1.92, 1.9],
      volumes: [23, 17, 21, 25, 29, 26, 55, 31, 38, 40],
      grossSales: [974, 1055, 1065, 1322, 1330, 1452, 1368, 1623, 1979, 2105],
    },
  },
  slide9: {
    title: "Variables de Seguimiento y Control",
    subtitle: "Filtro: Gerencia - Subgerente - Supervisor (Historial Anual)",
    supervisors: {
      cuenca: {
        name: "CUENCA CARRASCO EDITH SUSANN",
        table: {
          headers: [
            "Mes",
            "Año 2020",
            "Año 2021",
            "Año 2022",
            "Año 2023",
            "Año 2024",
            "Año 2025",
          ],
          rows: [
            ["Enero", "23", "22", "35", "48", "62", "71"],
            ["Febrero", "15", "25", "38", "52", "65", "78"],
            ["Marzo", "8", "32", "42", "57", "70", "82"],
            ["Abril", "15", "44", "51", "63", "78", "90"],
            ["Mayo", "22", "63", "68", "75", "88", "102"],
            ["Junio", "26", "57", "62", "70", "84", "95"],
            ["Julio", "38", "86", "92", "98", "112", "125"],
            ["Agosto", "33", "101", "108", "115", "130", "142"],
            ["Setiembre", "33", "128", "135", "140", "155", "168"],
            ["Octubre", "26", "154", "162", "170", "185", "198"],
            ["Noviembre", "27", "168", "175", "182", "200", "215"],
            ["Diciembre", "29", "162", "170", "178", "195", "210"],
            ["Total", "295", "1,042", "1,138", "1,248", "1,424", "1,576"],
            ["% Crec", "", "353%", "109%", "110%", "114%", "111%"],
          ],
        },
      },
      gomez: {
        name: "GOMEZ PORTUGAL CARLOS",
        table: {
          headers: [
            "Mes",
            "Año 2020",
            "Año 2021",
            "Año 2022",
            "Año 2023",
            "Año 2024",
            "Año 2025",
          ],
          rows: [
            ["Enero", "28", "40", "45", "52", "58", "65"],
            ["Febrero", "21", "48", "53", "60", "68", "74"],
            ["Marzo", "19", "55", "60", "68", "75", "80"],
            ["Abril", "24", "50", "56", "65", "72", "78"],
            ["Mayo", "30", "72", "78", "85", "95", "105"],
            ["Junio", "28", "68", "74", "80", "90", "98"],
            ["Julio", "35", "95", "102", "110", "120", "132"],
            ["Agosto", "32", "110", "118", "125", "138", "150"],
            ["Setiembre", "36", "115", "122", "130", "142", "155"],
            ["Octubre", "29", "130", "138", "148", "160", "172"],
            ["Noviembre", "31", "142", "150", "158", "172", "185"],
            ["Diciembre", "33", "120", "128", "135", "150", "162"],
            ["Total", "346", "1,045", "1,124", "1,216", "1,340", "1,456"],
            ["% Crec", "", "302%", "108%", "108%", "110%", "109%"],
          ],
        },
      },
      diaz: {
        name: "DIAZ SILVA RAMIRO",
        table: {
          headers: [
            "Mes",
            "Año 2020",
            "Año 2021",
            "Año 2022",
            "Año 2023",
            "Año 2024",
            "Año 2025",
          ],
          rows: [
            ["Enero", "45", "75", "82", "90", "100", "112"],
            ["Febrero", "41", "80", "88", "95", "108", "118"],
            ["Marzo", "38", "92", "100", "108", "120", "130"],
            ["Abril", "40", "85", "92", "100", "112", "122"],
            ["Mayo", "52", "110", "118", "128", "140", "152"],
            ["Junio", "48", "105", "112", "122", "134", "145"],
            ["Julio", "59", "128", "138", "148", "162", "175"],
            ["Agosto", "52", "135", "145", "155", "170", "184"],
            ["Setiembre", "55", "140", "150", "162", "175", "190"],
            ["Octubre", "49", "162", "172", "185", "200", "215"],
            ["Noviembre", "51", "175", "188", "198", "215", "230"],
            ["Diciembre", "47", "160", "170", "182", "198", "212"],
            ["Total", "577", "1,447", "1,555", "1,673", "1,834", "1,985"],
            ["% Crec", "", "251%", "107%", "108%", "110%", "108%"],
          ],
        },
      },
      torres: {
        name: "TORRES MEDINA JUAN PABLO",
        table: {
          headers: [
            "Mes",
            "Año 2020",
            "Año 2021",
            "Año 2022",
            "Año 2023",
            "Año 2024",
            "Año 2025",
          ],
          rows: [
            ["Enero", "18", "32", "40", "55", "68", "80"],
            ["Febrero", "20", "35", "44", "58", "72", "85"],
            ["Marzo", "22", "38", "48", "62", "78", "90"],
            ["Abril", "25", "42", "52", "68", "82", "95"],
            ["Mayo", "28", "55", "65", "78", "92", "108"],
            ["Junio", "30", "50", "60", "72", "88", "100"],
            ["Julio", "35", "68", "78", "90", "105", "120"],
            ["Agosto", "32", "72", "82", "95", "112", "128"],
            ["Setiembre", "38", "78", "88", "102", "118", "135"],
            ["Octubre", "34", "85", "95", "110", "128", "145"],
            ["Noviembre", "36", "90", "100", "115", "135", "152"],
            ["Diciembre", "30", "75", "85", "98", "115", "130"],
            ["Total", "348", "720", "837", "1,003", "1,193", "1,368"],
            ["% Crec", "", "207%", "116%", "120%", "119%", "115%"],
          ],
        },
      },
      quispe: {
        name: "QUISPE HUAMAN MARIA ELENA",
        table: {
          headers: [
            "Mes",
            "Año 2020",
            "Año 2021",
            "Año 2022",
            "Año 2023",
            "Año 2024",
            "Año 2025",
          ],
          rows: [
            ["Enero", "15", "28", "38", "50", "65", "78"],
            ["Febrero", "12", "30", "42", "55", "70", "82"],
            ["Marzo", "10", "35", "45", "58", "75", "88"],
            ["Abril", "18", "40", "50", "65", "80", "92"],
            ["Mayo", "22", "52", "62", "75", "90", "105"],
            ["Junio", "20", "48", "58", "70", "85", "98"],
            ["Julio", "28", "62", "72", "85", "100", "115"],
            ["Agosto", "25", "68", "78", "92", "108", "122"],
            ["Setiembre", "30", "72", "82", "98", "115", "130"],
            ["Octubre", "27", "80", "90", "105", "122", "138"],
            ["Noviembre", "32", "85", "95", "112", "130", "148"],
            ["Diciembre", "25", "70", "80", "95", "110", "125"],
            ["Total", "264", "670", "792", "960", "1,150", "1,321"],
            ["% Crec", "", "254%", "118%", "121%", "120%", "115%"],
          ],
        },
      },
      rojas: {
        name: "ROJAS FERNANDEZ PEDRO LUIS",
        table: {
          headers: [
            "Mes",
            "Año 2020",
            "Año 2021",
            "Año 2022",
            "Año 2023",
            "Año 2024",
            "Año 2025",
          ],
          rows: [
            ["Enero", "35", "58", "68", "78", "92", "105"],
            ["Febrero", "38", "62", "72", "82", "98", "110"],
            ["Marzo", "40", "68", "78", "88", "105", "118"],
            ["Abril", "42", "72", "82", "92", "110", "122"],
            ["Mayo", "48", "85", "95", "108", "125", "140"],
            ["Junio", "45", "80", "90", "102", "118", "132"],
            ["Julio", "52", "98", "108", "120", "138", "155"],
            ["Agosto", "50", "105", "115", "128", "148", "162"],
            ["Setiembre", "55", "110", "120", "135", "155", "170"],
            ["Octubre", "48", "118", "128", "142", "162", "178"],
            ["Noviembre", "52", "125", "135", "150", "172", "188"],
            ["Diciembre", "42", "102", "112", "125", "145", "160"],
            ["Total", "547", "1,083", "1,203", "1,350", "1,568", "1,740"],
            ["% Crec", "", "198%", "111%", "112%", "116%", "111%"],
          ],
        },
      },
    },
  },
  slide10: {
    title: "Variables de Seguimiento y Control - Reporte Gerencial",
    subtitle:
      "Reporte Gerencial a nivel Gerencia/Subgerente – Supervisor - Vendedor (Año 2021)",
    supervisors: {
      cuenca: {
        name: "CUENCA CARRASCO EDITH SUSANN",
        table: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
            "Total / Prom",
          ],
          variables: [
            {
              name: "Real",
              values: [
                22, 25, 32, 44, 63, 57, 86, 101, 128, 154, 168, 162, 1042,
              ],
            },
            {
              name: "Caídas",
              values: [1, 1, 1, 7, 4, 2, 6, 8, 5, 8, 13, 3, 59],
            },
            {
              name: "% Caídas",
              values: [
                "4.5%",
                "4.0%",
                "3.1%",
                "15.9%",
                "6.3%",
                "3.5%",
                "7.0%",
                "7.9%",
                "3.9%",
                "5.2%",
                "7.7%",
                "1.9%",
                "5.7%",
              ],
            },
            {
              name: "Venta neta",
              values: [21, 24, 31, 37, 59, 55, 80, 93, 123, 146, 155, 159, 983],
            },
            {
              name: "Objetivo",
              values: [35, 38, 40, 42, 45, 46, 50, 54, 58, 62, 65, 65, 600],
            },
            {
              name: "% cumplimiento",
              values: [
                "60%",
                "63%",
                "78%",
                "88%",
                "131%",
                "120%",
                "160%",
                "172%",
                "212%",
                "235%",
                "238%",
                "245%",
                "164%",
              ],
            },
            {
              name: "Valor de certificado ($)",
              values: [
                "372.6k",
                "361.9k",
                "482.9k",
                "611.8k",
                "1,022.7k",
                "954.4k",
                "1,245.1k",
                "1,529.2k",
                "2,025.5k",
                "2,226.6k",
                "2,585.5k",
                "2,562.6k",
                "15,980.8k",
              ],
            },
            {
              name: "Dotación Inicial",
              values: [20, 26, 19, 28, 36, 45, 45, 54, 68, 73, 80, 82, 48],
            },
            {
              name: "Productividad",
              values: [
                1.1, 0.96, 1.68, 1.57, 1.75, 1.27, 1.91, 1.87, 1.88, 2.11, 2.1,
                1.98, 1.7,
              ],
            },
            {
              name: "Vendedores en cero",
              values: [7, 12, 0, 1, 1, 2, 3, 5, 0, 0, 1, 5, 3],
            },
            {
              name: "% Vendedores Improc.",
              values: [
                "35%",
                "46%",
                "0%",
                "4%",
                "3%",
                "4%",
                "7%",
                "9%",
                "0%",
                "0%",
                "1%",
                "6%",
                "10%",
              ],
            },
            {
              name: "CIC Promedio",
              values: [
                "2.82%",
                "2.76%",
                "2.79%",
                "3.38%",
                "3.50%",
                "3.48%",
                "3.43%",
                "3.42%",
                "3.59%",
                "3.73%",
                "3.81%",
                "3.67%",
                "3.40%",
              ],
            },
            {
              name: "Certificado Promedio ($)",
              values: [
                "16,936",
                "14,476",
                "15,091",
                "13,905",
                "16,233",
                "16,744",
                "14,478",
                "15,141",
                "15,824",
                "14,458",
                "15,390",
                "15,819",
                "15,337",
              ],
            },
          ],
        },
      },
      gomez: {
        name: "GOMEZ PORTUGAL CARLOS",
        table: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
            "Total / Prom",
          ],
          variables: [
            {
              name: "Real",
              values: [
                40, 48, 55, 50, 72, 68, 95, 110, 115, 130, 142, 120, 985,
              ],
            },
            {
              name: "Caídas",
              values: [3, 2, 4, 3, 5, 6, 8, 9, 10, 12, 15, 8, 85],
            },
            {
              name: "% Caídas",
              values: [
                "7.5%",
                "4.2%",
                "7.3%",
                "6.0%",
                "6.9%",
                "8.8%",
                "8.4%",
                "8.2%",
                "8.7%",
                "9.2%",
                "10.6%",
                "6.7%",
                "8.6%",
              ],
            },
            {
              name: "Venta neta",
              values: [
                37, 46, 51, 47, 67, 62, 87, 101, 105, 118, 127, 112, 900,
              ],
            },
            {
              name: "Objetivo",
              values: [45, 45, 50, 50, 60, 60, 80, 90, 100, 110, 120, 100, 910],
            },
            {
              name: "% cumplimiento",
              values: [
                "89%",
                "107%",
                "110%",
                "100%",
                "120%",
                "113%",
                "119%",
                "122%",
                "115%",
                "118%",
                "118%",
                "120%",
                "108%",
              ],
            },
            {
              name: "Valor de certificado ($)",
              values: [
                "680k",
                "816k",
                "935k",
                "850k",
                "1,224k",
                "1,156k",
                "1,615k",
                "1,870k",
                "1,955k",
                "2,210k",
                "2,414k",
                "2,040k",
                "17,765k",
              ],
            },
            {
              name: "Dotación Inicial",
              values: [24, 25, 26, 28, 30, 32, 35, 38, 40, 42, 44, 42, 34],
            },
            {
              name: "Productividad",
              values: [
                1.67, 1.92, 2.12, 1.79, 2.4, 2.13, 2.71, 2.89, 2.88, 3.1, 3.23,
                2.86, 2.89,
              ],
            },
            {
              name: "Vendedores en cero",
              values: [2, 1, 0, 1, 2, 1, 0, 1, 0, 0, 1, 2, 1],
            },
            {
              name: "% Vendedores Improc.",
              values: [
                "8%",
                "4%",
                "0%",
                "4%",
                "7%",
                "3%",
                "0%",
                "3%",
                "0%",
                "0%",
                "2%",
                "5%",
                "3%",
              ],
            },
            {
              name: "CIC Promedio",
              values: [
                "3.10%",
                "3.20%",
                "3.15%",
                "3.40%",
                "3.60%",
                "3.55%",
                "3.50%",
                "3.62%",
                "3.70%",
                "3.82%",
                "3.90%",
                "3.80%",
                "3.54%",
              ],
            },
            {
              name: "Certificado Promedio ($)",
              values: [
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
                "17,000",
              ],
            },
          ],
        },
      },
      diaz: {
        name: "DIAZ SILVA RAMIRO",
        table: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Setiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
            "Total / Prom",
          ],
          variables: [
            {
              name: "Real",
              values: [
                75, 80, 92, 85, 110, 105, 128, 135, 140, 162, 175, 160, 1447,
              ],
            },
            {
              name: "Caídas",
              values: [5, 4, 6, 8, 10, 9, 12, 14, 11, 15, 18, 12, 124],
            },
            {
              name: "% Caídas",
              values: [
                "6.7%",
                "5.0%",
                "6.5%",
                "9.4%",
                "9.1%",
                "8.6%",
                "9.4%",
                "10.4%",
                "7.9%",
                "9.3%",
                "10.3%",
                "7.5%",
                "8.6%",
              ],
            },
            {
              name: "Venta neta",
              values: [
                70, 76, 86, 77, 100, 96, 116, 121, 129, 147, 157, 148, 1323,
              ],
            },
            {
              name: "Objetivo",
              values: [
                70, 70, 80, 80, 90, 90, 110, 120, 130, 140, 150, 130, 1290,
              ],
            },
            {
              name: "% cumplimiento",
              values: [
                "107%",
                "114%",
                "115%",
                "106%",
                "122%",
                "117%",
                "116%",
                "113%",
                "108%",
                "116%",
                "117%",
                "123%",
                "112%",
              ],
            },
            {
              name: "Valor de certificado ($)",
              values: [
                "1,350k",
                "1,440k",
                "1,656k",
                "1,530k",
                "1,980k",
                "1,890k",
                "2,304k",
                "2,430k",
                "2,520k",
                "2,916k",
                "3,150k",
                "2,880k",
                "26,046k",
              ],
            },
            {
              name: "Dotación Inicial",
              values: [38, 40, 42, 42, 45, 48, 50, 52, 55, 58, 60, 58, 49],
            },
            {
              name: "Productividad",
              values: [
                1.97, 2.0, 2.19, 2.02, 2.44, 2.19, 2.56, 2.6, 2.55, 2.79, 2.92,
                2.76, 2.95,
              ],
            },
            {
              name: "Vendedores en cero",
              values: [1, 2, 1, 0, 1, 2, 0, 1, 0, 0, 1, 3, 1],
            },
            {
              name: "% Vendedores Improc.",
              values: [
                "3%",
                "5%",
                "2%",
                "0%",
                "2%",
                "4%",
                "0%",
                "2%",
                "0%",
                "0%",
                "2%",
                "5%",
                "2%",
              ],
            },
            {
              name: "CIC Promedio",
              values: [
                "3.40%",
                "3.42%",
                "3.38%",
                "3.52%",
                "3.70%",
                "3.68%",
                "3.62%",
                "3.75%",
                "3.80%",
                "3.92%",
                "3.95%",
                "3.88%",
                "3.68%",
              ],
            },
            {
              name: "Certificado Promedio ($)",
              values: [
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
                "18,000",
              ],
            },
          ],
        },
      },
    },
  },
  slide11: {
    title: "Cuota de Inscripción por mes / Origen de la venta",
    supervisors: {
      cuenca: {
        name: "CUENCA CARRASCO EDITH SUSANN",
        feeDistribution: {
          headers: [
            "Etiquetas de fila",
            "1% a 1.99%",
            "2% a 2.49%",
            "2.5% a 2.99%",
            "3% a 3.49%",
            "4% a más",
            "Total",
          ],
          rows: [
            ["BERMEJO AROTINCO MIGUEL EFRAIN", "1", "1", "2", "2", "1", "7"],
            ["BUSTOS SALGADO FERNANDO XAVIER", "1", "", "2", "1", "", "4"],
            ["JARAMILLO RAMIREZ BRYAM TAYLOR", "", "1", "", "1", "1", "3"],
            ["MEZA ALGUEDAS SANTOS JUNIOR", "2", "3", "1", "1", "3", "10"],
            ["VALLEJOS HURTADO LUIS ALEXANDER", "1", "2", "3", "2", "1", "9"],
            ["MARTINEZ PAGAN DIANA CAROLINA", "1", "1", "4", "", "2", "8"],
            ["SALVADOR CASTAÑEDA MARIA ZULEMA", "2", "", "1", "", "1", "4"],
            ["TOALINO HUAYANAY CRISTHIAN GIANCARLO", "", "2", "1", "", "", "3"],
            ["BELLO AVILA MARIA EUGENIA", "1", "", "", "2", "", "3"],
            [
              "CALDERON TUEROS OMAR HUMBERTO DRUHAL",
              "",
              "1",
              "2",
              "",
              "1",
              "4",
            ],
            ["PLAZA GEREDA FABIOLA GIULIANA", "1", "1", "", "", "2", "4"],
            ["OLIVARES MAESTRE ZURANNY DEL VALLE", "", "", "3", "1", "", "4"],
          ],
          totals: ["Total general", "10", "12", "19", "10", "12", "63"],
        },
        originSales: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
          ],
          categories: [
            "Base Datos",
            "Evento/Campaña",
            "Leads",
            "Punto de Venta",
            "Recompra",
            "Referido",
            "Redes Sociales Vendedor (RSV)",
            "Empresa",
            "Recompra por vendedor",
          ],
          series: {
            "Base Datos": [1, 4, 2, 3, 2, 9, 4],
            "Evento/Campaña": [2, 1, 1, 3, 2, 1, 2],
            Leads: [65, 59, 62, 55, 92, 69, 89],
            "Punto de Venta": [138, 35, 103, 142, 128, 122, 178],
            Recompra: [5, 4, 6, 4, 3, 4, 6],
            Referido: [45, 51, 51, 35, 47, 26, 38],
            "Redes Sociales Vendedor (RSV)": [99, 158, 126, 167, 150, 180, 218],
            Empresa: [3, 2, 4, 1, 3, 2, 5],
            "Recompra por vendedor": [1, 2, 1, 1, 1, 3, 2],
          },
        },
      },
      gomez: {
        name: "GOMEZ PORTUGAL CARLOS",
        feeDistribution: {
          headers: [
            "Etiquetas de fila",
            "1% a 1.99%",
            "2% a 2.49%",
            "2.5% a 2.99%",
            "3% a 3.49%",
            "4% a más",
            "Total",
          ],
          rows: [
            ["ALVAREZ LOPEZ JORGE", "1", "2", "", "1", "", "4"],
            ["CARDENAS RUIZ MARIA", "", "1", "2", "1", "2", "6"],
            ["LOPEZ PAZ ANDRES", "", "", "1", "3", "1", "5"],
            ["RAMIREZ SILVA CLAUDIA", "2", "1", "", "1", "1", "5"],
          ],
          totals: ["Total general", "3", "4", "3", "6", "4", "20"],
        },
        originSales: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
          ],
          categories: [
            "Base Datos",
            "Evento/Campaña",
            "Leads",
            "Punto de Venta",
            "Recompra",
            "Referido",
            "Redes Sociales Vendedor (RSV)",
            "Empresa",
            "Recompra por vendedor",
          ],
          series: {
            "Base Datos": [2, 3, 1, 4, 1, 6, 3],
            "Evento/Campaña": [1, 0, 0, 1, 0, 1, 0],
            Leads: [50, 48, 55, 52, 70, 60, 75],
            "Punto de Venta": [110, 95, 88, 120, 105, 98, 140],
            Recompra: [3, 4, 2, 5, 2, 3, 5],
            Referido: [35, 42, 38, 30, 40, 22, 32],
            "Redes Sociales Vendedor (RSV)": [80, 120, 102, 130, 115, 120, 150],
            Empresa: [0, 1, 0, 0, 1, 0, 1],
            "Recompra por vendedor": [1, 1, 0, 1, 0, 1, 1],
          },
        },
      },
      diaz: {
        name: "DIAZ SILVA RAMIRO",
        feeDistribution: {
          headers: [
            "Etiquetas de fila",
            "1% a 1.99%",
            "2% a 2.49%",
            "2.5% a 2.99%",
            "3% a 3.49%",
            "4% a más",
            "Total",
          ],
          rows: [
            ["SANCHEZ RUIZ GABRIEL", "1", "", "2", "2", "3", "8"],
            ["FLORES PAREDES LUCIA", "2", "2", "", "1", "1", "6"],
            ["TORRES VEGA MANUEL", "", "3", "1", "2", "2", "8"],
            ["GARCIA DIAZ ADRIANA", "1", "1", "3", "", "2", "7"],
          ],
          totals: ["Total general", "4", "6", "6", "5", "8", "29"],
        },
        originSales: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
          ],
          categories: [
            "Base Datos",
            "Evento/Campaña",
            "Leads",
            "Punto de Venta",
            "Recompra",
            "Referido",
            "Redes Sociales Vendedor (RSV)",
            "Empresa",
            "Recompra por vendedor",
          ],
          series: {
            "Base Datos": [3, 5, 4, 6, 2, 10, 6],
            "Evento/Campaña": [0, 1, 1, 0, 1, 0, 1],
            Leads: [90, 85, 92, 80, 130, 102, 125],
            "Punto de Venta": [190, 160, 152, 205, 180, 172, 250],
            Recompra: [7, 6, 9, 7, 5, 6, 9],
            Referido: [65, 75, 75, 52, 70, 40, 58],
            "Redes Sociales Vendedor (RSV)": [
              140, 220, 185, 240, 215, 222, 290,
            ],
            Empresa: [1, 0, 1, 1, 0, 1, 1],
            "Recompra por vendedor": [1, 1, 2, 2, 2, 1, 3],
          },
        },
      },
      torres: {
        name: "TORRES MEDINA JUAN PABLO",
        feeDistribution: {
          headers: [
            "Etiquetas de fila",
            "1% a 1.99%",
            "2% a 2.49%",
            "2.5% a 2.99%",
            "3% a 3.49%",
            "4% a más",
            "Total",
          ],
          rows: [
            ["QUINTANA RIOS HUGO", "1", "", "2", "2", "1", "6"],
            ["PAREDES MEJIA CARLA", "", "2", "1", "", "2", "5"],
            ["SOTO LOAYZA LUIS", "2", "1", "", "1", "1", "5"],
            ["CHAVEZ CASTRO RAQUEL", "", "", "3", "2", "1", "6"],
          ],
          totals: ["Total general", "3", "3", "6", "5", "5", "22"],
        },
        originSales: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
          ],
          categories: [
            "Base Datos",
            "Evento/Campaña",
            "Leads",
            "Punto de Venta",
            "Recompra",
            "Referido",
            "Redes Sociales Vendedor (RSV)",
            "Empresa",
            "Recompra por vendedor",
          ],
          series: {
            "Base Datos": [1, 2, 3, 2, 1, 4, 3],
            "Evento/Campaña": [0, 1, 0, 1, 0, 1, 1],
            Leads: [45, 52, 48, 60, 58, 65, 70],
            "Punto de Venta": [95, 110, 85, 100, 115, 120, 130],
            Recompra: [2, 3, 4, 3, 2, 4, 3],
            Referido: [25, 30, 28, 35, 32, 40, 38],
            "Redes Sociales Vendedor (RSV)": [75, 85, 90, 110, 95, 115, 125],
            Empresa: [1, 0, 1, 2, 1, 3, 2],
            "Recompra por vendedor": [1, 0, 1, 1, 2, 1, 1],
          },
        },
      },
      quispe: {
        name: "QUISPE HUAMAN MARIA ELENA",
        feeDistribution: {
          headers: [
            "Etiquetas de fila",
            "1% a 1.99%",
            "2% a 2.49%",
            "2.5% a 2.99%",
            "3% a 3.49%",
            "4% a más",
            "Total",
          ],
          rows: [
            ["ESTRADA HUAMAN JAVIER", "1", "2", "", "1", "2", "6"],
            ["CASTRO VEGA MARITZA", "", "1", "2", "2", "", "5"],
            ["ORTEGA POLO ALONSO", "2", "", "1", "1", "1", "5"],
            ["RIVERA DIAZ NATALIA", "", "2", "2", "", "2", "6"],
          ],
          totals: ["Total general", "3", "5", "5", "4", "5", "22"],
        },
        originSales: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
          ],
          categories: [
            "Base Datos",
            "Evento/Campaña",
            "Leads",
            "Punto de Venta",
            "Recompra",
            "Referido",
            "Redes Sociales Vendedor (RSV)",
            "Empresa",
            "Recompra por vendedor",
          ],
          series: {
            "Base Datos": [2, 1, 2, 3, 2, 5, 2],
            "Evento/Campaña": [1, 0, 1, 1, 2, 1, 0],
            Leads: [55, 45, 50, 62, 52, 70, 68],
            "Punto de Venta": [105, 90, 95, 115, 100, 125, 135],
            Recompra: [3, 2, 3, 4, 2, 5, 4],
            Referido: [32, 28, 30, 38, 35, 42, 40],
            "Redes Sociales Vendedor (RSV)": [85, 78, 88, 105, 92, 118, 120],
            Empresa: [2, 1, 2, 1, 3, 2, 4],
            "Recompra por vendedor": [0, 1, 1, 2, 1, 2, 1],
          },
        },
      },
      rojas: {
        name: "ROJAS FERNANDEZ PEDRO LUIS",
        feeDistribution: {
          headers: [
            "Etiquetas de fila",
            "1% a 1.99%",
            "2% a 2.49%",
            "2.5% a 2.99%",
            "3% a 3.49%",
            "4% a más",
            "Total",
          ],
          rows: [
            ["RODRIGUEZ SOLIS FABIO", "2", "1", "", "2", "1", "6"],
            ["MENDOZA LUNA BEATRIZ", "", "2", "2", "", "1", "5"],
            ["PANDO ARCE CARLOS", "1", "", "1", "2", "2", "6"],
            ["LEON CAMPOS PATRICIA", "", "2", "2", "1", "", "5"],
          ],
          totals: ["Total general", "3", "5", "5", "5", "4", "22"],
        },
        originSales: {
          months: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
          ],
          categories: [
            "Base Datos",
            "Evento/Campaña",
            "Leads",
            "Punto de Venta",
            "Recompra",
            "Referido",
            "Redes Sociales Vendedor (RSV)",
            "Empresa",
            "Recompra por vendedor",
          ],
          series: {
            "Base Datos": [1, 3, 2, 1, 2, 4, 3],
            "Evento/Campaña": [1, 1, 0, 2, 1, 1, 2],
            Leads: [48, 50, 52, 58, 60, 62, 65],
            "Punto de Venta": [100, 105, 110, 108, 112, 115, 120],
            Recompra: [4, 3, 2, 4, 3, 5, 3],
            Referido: [28, 32, 35, 30, 38, 36, 42],
            "Redes Sociales Vendedor (RSV)": [78, 82, 85, 90, 95, 98, 105],
            Empresa: [1, 2, 1, 3, 2, 1, 3],
            "Recompra por vendedor": [1, 1, 2, 1, 1, 2, 1],
          },
        },
      },
    },
  },
  slide12: {
    title: "Ventas por Centro Comercial / Concesionario",
    supervisors: {
      cuenca: {
        name: "CUENCA CARRASCO EDITH SUSANN",
        headers: [
          "Establecimiento",
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Oct",
          "Nov",
          "Dic",
          "Total",
        ],
        rows: [
          [
            "Mall Aventura Plaza Santa Anita Vehículos",
            0,
            0,
            0,
            3,
            1,
            2,
            7,
            5,
            10,
            6,
            0,
            7,
            41,
          ],
          ["Mall del Sur Vehículos", 0, 0, 0, 3, 3, 2, 6, 6, 10, 6, 4, 7, 47],
          [
            "Mall Plaza Bellavista Vehículos",
            0,
            0,
            2,
            0,
            3,
            3,
            2,
            4,
            2,
            3,
            3,
            0,
            22,
          ],
          [
            "Megaplaza Independencia Casino Vehículos",
            3,
            0,
            2,
            2,
            2,
            1,
            1,
            1,
            3,
            0,
            2,
            2,
            19,
          ],
          ["Ninguno", 15, 25, 22, 28, 35, 34, 56, 70, 86, 125, 140, 138, 774],
          ["Oficina Principal", 4, 0, 4, 5, 10, 4, 4, 8, 7, 9, 12, 4, 71],
          ["Plaza Lima Sur Vehículos", 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
          ["Plaza Norte Vehículos", 0, 0, 2, 3, 6, 9, 8, 5, 8, 5, 7, 3, 56],
          ["Real Plaza Centro Civico", 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
          [
            "Real Plaza Puruchuco Vehículos",
            0,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            2,
            0,
            0,
            0,
            4,
          ],
          [
            "MAP - Bellavista - Multimarca",
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
          ],
          ["Mallplaza Comas", 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 1, 5],
        ],
        totals: [
          "Total general",
          22,
          25,
          32,
          44,
          63,
          57,
          86,
          101,
          128,
          154,
          168,
          162,
          1042,
        ],
      },
      gomez: {
        name: "GOMEZ PORTUGAL CARLOS",
        headers: [
          "Establecimiento",
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Oct",
          "Nov",
          "Dic",
          "Total",
        ],
        rows: [
          [
            "Mall Aventura Plaza Santa Anita Vehículos",
            0,
            0,
            0,
            2,
            1,
            2,
            5,
            4,
            8,
            5,
            0,
            5,
            32,
          ],
          ["Mall del Sur Vehículos", 0, 0, 0, 2, 2, 2, 5, 5, 8, 5, 3, 5, 37],
          [
            "Mall Plaza Bellavista Vehículos",
            0,
            0,
            1,
            0,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            0,
            14,
          ],
          [
            "Megaplaza Independencia Casino Vehículos",
            2,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            1,
            1,
            11,
          ],
          ["Ninguno", 12, 20, 18, 22, 28, 26, 45, 55, 68, 98, 110, 108, 615],
          ["Oficina Principal", 3, 0, 3, 4, 8, 3, 3, 6, 5, 7, 9, 3, 54],
          ["Plaza Lima Sur Vehículos", 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
          ["Plaza Norte Vehículos", 0, 0, 1, 2, 4, 7, 6, 4, 6, 4, 5, 2, 41],
          ["Real Plaza Centro Civico", 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
          [
            "Real Plaza Puruchuco Vehículos",
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            3,
          ],
          [
            "MAP - Bellavista - Multimarca",
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
          ],
          ["Mallplaza Comas", 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 4],
        ],
        totals: [
          "Total general",
          17,
          20,
          26,
          33,
          48,
          43,
          65,
          76,
          99,
          121,
          130,
          126,
          804,
        ],
      },
      diaz: {
        name: "DIAZ SILVA RAMIRO",
        headers: [
          "Establecimiento",
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Set",
          "Oct",
          "Nov",
          "Dic",
          "Total",
        ],
        rows: [
          [
            "Mall Aventura Plaza Santa Anita Vehículos",
            0,
            0,
            0,
            4,
            2,
            3,
            10,
            7,
            14,
            8,
            0,
            10,
            58,
          ],
          ["Mall del Sur Vehículos", 0, 0, 0, 4, 4, 3, 8, 8, 14, 8, 6, 10, 65],
          [
            "Mall Plaza Bellavista Vehículos",
            0,
            0,
            3,
            0,
            4,
            4,
            3,
            5,
            3,
            4,
            4,
            0,
            30,
          ],
          [
            "Megaplaza Independencia Casino Vehículos",
            4,
            0,
            3,
            3,
            3,
            1,
            1,
            1,
            4,
            0,
            3,
            3,
            27,
          ],
          ["Ninguno", 20, 35, 30, 38, 48, 46, 76, 95, 118, 170, 190, 188, 1054],
          ["Oficina Principal", 5, 0, 5, 7, 13, 5, 5, 11, 9, 12, 16, 5, 98],
          ["Plaza Lima Sur Vehículos", 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
          ["Plaza Norte Vehículos", 0, 0, 3, 4, 8, 12, 11, 7, 11, 7, 9, 4, 76],
          ["Real Plaza Centro Civico", 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
          [
            "Real Plaza Puruchuco Vehículos",
            0,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            3,
            0,
            0,
            0,
            6,
          ],
          [
            "MAP - Bellavista - Multimarca",
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
          ],
          ["Mallplaza Comas", 0, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 1, 6],
        ],
        totals: [
          "Total general",
          29,
          35,
          44,
          60,
          86,
          76,
          116,
          138,
          176,
          209,
          228,
          221,
          1422,
        ],
      },
    },
  },
  slide13: {
    title: "Comparativo de Venta Diaria por Subgerencias",
    subgerencias: [
      "Subgerencia 1",
      "Subgerencia 2",
      "Subgerencia 3",
      "Subgerencia 4",
      "Subgerencia 5",
    ],
    months: {
      Enero: {
        days: 31,
        data: {
          "Subgerencia 1": [
            1, 2, 0, 1, 3, 2, 1, 0, 2, 3, 1, 2, 1, 0, 2, 3, 4, 1, 2, 0, 1, 2, 3,
            1, 0, 2, 3, 1, 2, 3, 2,
          ],
          "Subgerencia 2": [
            0, 1, 2, 1, 0, 2, 3, 1, 0, 2, 3, 1, 2, 0, 1, 2, 1, 0, 2, 3, 4, 1, 2,
            0, 1, 2, 1, 0, 2, 1, 3,
          ],
          "Subgerencia 3": [
            2, 1, 0, 2, 1, 0, 2, 3, 4, 1, 2, 0, 1, 2, 3, 1, 0, 2, 3, 1, 2, 0, 1,
            2, 3, 1, 0, 2, 1, 2, 1,
          ],
          "Subgerencia 4": [
            1, 0, 2, 3, 1, 2, 0, 1, 2, 1, 0, 2, 3, 1, 2, 0, 1, 2, 3, 4, 1, 2, 0,
            1, 2, 3, 1, 2, 0, 1, 2,
          ],
          "Subgerencia 5": [
            3, 2, 1, 0, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2, 0, 1, 2, 3, 1, 0, 2, 3, 4,
            1, 2, 0, 1, 2, 3, 1, 0,
          ],
        },
      },
      Febrero: {
        days: 28,
        data: {
          "Subgerencia 1": [
            2, 1, 0, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2, 0, 1, 2, 3,
            1, 0, 2, 1, 2,
          ],
          "Subgerencia 2": [
            1, 0, 2, 3, 1, 2, 0, 1, 2, 1, 0, 2, 3, 1, 2, 0, 1, 2, 3, 4, 1, 2, 0,
            1, 2, 3, 1, 2,
          ],
          "Subgerencia 3": [
            0, 2, 3, 1, 2, 0, 1, 2, 3, 1, 2, 0, 1, 2, 3, 1, 0, 2, 3, 1, 2, 0, 1,
            2, 3, 1, 0, 2,
          ],
          "Subgerencia 4": [
            3, 1, 2, 0, 1, 2, 3, 1, 0, 2, 3, 1, 2, 0, 1, 2, 1, 0, 2, 3, 4, 1, 2,
            0, 1, 2, 1, 0,
          ],
          "Subgerencia 5": [
            1, 2, 0, 1, 3, 2, 1, 0, 2, 3, 1, 2, 1, 0, 2, 3, 4, 1, 2, 0, 1, 2, 3,
            1, 0, 2, 3, 1,
          ],
        },
      },
    },
  },
  slide14: {
    title: "Productividad por Antigüedad: Matriz de Desempeño",
    supervisors: {
      cuenca: {
        name: "CUENCA CARRASCO EDITH SUSANN",
        totalSellers: 80,
        matrix: [
          [12, 2, 1, 0, 0, 0],
          [10, 5, 2, 1, 1, 1],
          [6, 4, 2, 2, 1, 1],
          [3, 3, 2, 2, 3, 3],
          [1, 2, 1, 2, 3, 3],
        ],
      },
      gomez: {
        name: "GOMEZ PORTUGAL CARLOS",
        totalSellers: 70,
        matrix: [
          [10, 2, 0, 0, 0, 0],
          [8, 4, 2, 1, 1, 0],
          [5, 3, 2, 1, 1, 1],
          [3, 2, 2, 2, 2, 2],
          [2, 1, 1, 2, 3, 4],
        ],
      },
      diaz: {
        name: "DIAZ SILVA RAMIRO",
        totalSellers: 110,
        matrix: [
          [18, 3, 1, 1, 0, 0],
          [14, 7, 3, 2, 1, 1],
          [8, 6, 3, 3, 2, 2],
          [4, 4, 3, 3, 4, 5],
          [2, 3, 2, 3, 5, 5],
        ],
      },
    },
    global: {
      name: "Reporte General Consolidado",
      totalSellers: 1000,
      matrix: [
        [150, 30, 10, 5, 3, 2],
        [120, 60, 30, 20, 10, 10],
        [70, 50, 25, 25, 15, 15],
        [40, 40, 20, 30, 32, 38],
        [20, 20, 15, 20, 40, 35],
      ],
    },
  },
};
