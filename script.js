// ============================================================
//  PERIODIC TABLE DATA — All 118 elements
//  row: 1-based grid row  |  col: 1-based grid column
// ============================================================
const elements = [
  // Period 1
  { n:1,  sym:"H",  name:"Hydrogen",      mass:1.008,    cat:"nonmetal",        row:1, col:1,  period:1, group:1,  config:"1s¹",                       state:"Gas" },
  { n:2,  sym:"He", name:"Helium",        mass:4.0026,   cat:"noble-gas",       row:1, col:18, period:1, group:18, config:"1s²",                       state:"Gas" },

  // Period 2
  { n:3,  sym:"Li", name:"Lithium",       mass:6.94,     cat:"alkali-metal",    row:2, col:1,  period:2, group:1,  config:"[He] 2s¹",                  state:"Solid" },
  { n:4,  sym:"Be", name:"Beryllium",     mass:9.0122,   cat:"alkaline-earth",  row:2, col:2,  period:2, group:2,  config:"[He] 2s²",                  state:"Solid" },
  { n:5,  sym:"B",  name:"Boron",         mass:10.81,    cat:"metalloid",       row:2, col:13, period:2, group:13, config:"[He] 2s² 2p¹",              state:"Solid" },
  { n:6,  sym:"C",  name:"Carbon",        mass:12.011,   cat:"nonmetal",        row:2, col:14, period:2, group:14, config:"[He] 2s² 2p²",              state:"Solid" },
  { n:7,  sym:"N",  name:"Nitrogen",      mass:14.007,   cat:"nonmetal",        row:2, col:15, period:2, group:15, config:"[He] 2s² 2p³",              state:"Gas" },
  { n:8,  sym:"O",  name:"Oxygen",        mass:15.999,   cat:"nonmetal",        row:2, col:16, period:2, group:16, config:"[He] 2s² 2p⁴",              state:"Gas" },
  { n:9,  sym:"F",  name:"Fluorine",      mass:18.998,   cat:"halogen",         row:2, col:17, period:2, group:17, config:"[He] 2s² 2p⁵",              state:"Gas" },
  { n:10, sym:"Ne", name:"Neon",          mass:20.18,    cat:"noble-gas",       row:2, col:18, period:2, group:18, config:"[He] 2s² 2p⁶",              state:"Gas" },

  // Period 3
  { n:11, sym:"Na", name:"Sodium",        mass:22.990,   cat:"alkali-metal",    row:3, col:1,  period:3, group:1,  config:"[Ne] 3s¹",                  state:"Solid" },
  { n:12, sym:"Mg", name:"Magnesium",     mass:24.305,   cat:"alkaline-earth",  row:3, col:2,  period:3, group:2,  config:"[Ne] 3s²",                  state:"Solid" },
  { n:13, sym:"Al", name:"Aluminum",      mass:26.982,   cat:"post-transition", row:3, col:13, period:3, group:13, config:"[Ne] 3s² 3p¹",              state:"Solid" },
  { n:14, sym:"Si", name:"Silicon",       mass:28.085,   cat:"metalloid",       row:3, col:14, period:3, group:14, config:"[Ne] 3s² 3p²",              state:"Solid" },
  { n:15, sym:"P",  name:"Phosphorus",    mass:30.974,   cat:"nonmetal",        row:3, col:15, period:3, group:15, config:"[Ne] 3s² 3p³",              state:"Solid" },
  { n:16, sym:"S",  name:"Sulfur",        mass:32.06,    cat:"nonmetal",        row:3, col:16, period:3, group:16, config:"[Ne] 3s² 3p⁴",              state:"Solid" },
  { n:17, sym:"Cl", name:"Chlorine",      mass:35.45,    cat:"halogen",         row:3, col:17, period:3, group:17, config:"[Ne] 3s² 3p⁵",              state:"Gas" },
  { n:18, sym:"Ar", name:"Argon",         mass:39.948,   cat:"noble-gas",       row:3, col:18, period:3, group:18, config:"[Ne] 3s² 3p⁶",              state:"Gas" },

  // Period 4
  { n:19, sym:"K",  name:"Potassium",     mass:39.098,   cat:"alkali-metal",    row:4, col:1,  period:4, group:1,  config:"[Ar] 4s¹",                  state:"Solid" },
  { n:20, sym:"Ca", name:"Calcium",       mass:40.078,   cat:"alkaline-earth",  row:4, col:2,  period:4, group:2,  config:"[Ar] 4s²",                  state:"Solid" },
  { n:21, sym:"Sc", name:"Scandium",      mass:44.956,   cat:"transition-metal",row:4, col:3,  period:4, group:3,  config:"[Ar] 3d¹ 4s²",              state:"Solid" },
  { n:22, sym:"Ti", name:"Titanium",      mass:47.867,   cat:"transition-metal",row:4, col:4,  period:4, group:4,  config:"[Ar] 3d² 4s²",              state:"Solid" },
  { n:23, sym:"V",  name:"Vanadium",      mass:50.942,   cat:"transition-metal",row:4, col:5,  period:4, group:5,  config:"[Ar] 3d³ 4s²",              state:"Solid" },
  { n:24, sym:"Cr", name:"Chromium",      mass:51.996,   cat:"transition-metal",row:4, col:6,  period:4, group:6,  config:"[Ar] 3d⁵ 4s¹",              state:"Solid" },
  { n:25, sym:"Mn", name:"Manganese",     mass:54.938,   cat:"transition-metal",row:4, col:7,  period:4, group:7,  config:"[Ar] 3d⁵ 4s²",              state:"Solid" },
  { n:26, sym:"Fe", name:"Iron",          mass:55.845,   cat:"transition-metal",row:4, col:8,  period:4, group:8,  config:"[Ar] 3d⁶ 4s²",              state:"Solid" },
  { n:27, sym:"Co", name:"Cobalt",        mass:58.933,   cat:"transition-metal",row:4, col:9,  period:4, group:9,  config:"[Ar] 3d⁷ 4s²",              state:"Solid" },
  { n:28, sym:"Ni", name:"Nickel",        mass:58.693,   cat:"transition-metal",row:4, col:10, period:4, group:10, config:"[Ar] 3d⁸ 4s²",              state:"Solid" },
  { n:29, sym:"Cu", name:"Copper",        mass:63.546,   cat:"transition-metal",row:4, col:11, period:4, group:11, config:"[Ar] 3d¹⁰ 4s¹",             state:"Solid" },
  { n:30, sym:"Zn", name:"Zinc",          mass:65.38,    cat:"transition-metal",row:4, col:12, period:4, group:12, config:"[Ar] 3d¹⁰ 4s²",             state:"Solid" },
  { n:31, sym:"Ga", name:"Gallium",       mass:69.723,   cat:"post-transition", row:4, col:13, period:4, group:13, config:"[Ar] 3d¹⁰ 4s² 4p¹",        state:"Solid" },
  { n:32, sym:"Ge", name:"Germanium",     mass:72.630,   cat:"metalloid",       row:4, col:14, period:4, group:14, config:"[Ar] 3d¹⁰ 4s² 4p²",        state:"Solid" },
  { n:33, sym:"As", name:"Arsenic",       mass:74.922,   cat:"metalloid",       row:4, col:15, period:4, group:15, config:"[Ar] 3d¹⁰ 4s² 4p³",        state:"Solid" },
  { n:34, sym:"Se", name:"Selenium",      mass:78.971,   cat:"nonmetal",        row:4, col:16, period:4, group:16, config:"[Ar] 3d¹⁰ 4s² 4p⁴",        state:"Solid" },
  { n:35, sym:"Br", name:"Bromine",       mass:79.904,   cat:"halogen",         row:4, col:17, period:4, group:17, config:"[Ar] 3d¹⁰ 4s² 4p⁵",        state:"Liquid" },
  { n:36, sym:"Kr", name:"Krypton",       mass:83.798,   cat:"noble-gas",       row:4, col:18, period:4, group:18, config:"[Ar] 3d¹⁰ 4s² 4p⁶",        state:"Gas" },

  // Period 5
  { n:37, sym:"Rb", name:"Rubidium",      mass:85.468,   cat:"alkali-metal",    row:5, col:1,  period:5, group:1,  config:"[Kr] 5s¹",                  state:"Solid" },
  { n:38, sym:"Sr", name:"Strontium",     mass:87.62,    cat:"alkaline-earth",  row:5, col:2,  period:5, group:2,  config:"[Kr] 5s²",                  state:"Solid" },
  { n:39, sym:"Y",  name:"Yttrium",       mass:88.906,   cat:"transition-metal",row:5, col:3,  period:5, group:3,  config:"[Kr] 4d¹ 5s²",              state:"Solid" },
  { n:40, sym:"Zr", name:"Zirconium",     mass:91.224,   cat:"transition-metal",row:5, col:4,  period:5, group:4,  config:"[Kr] 4d² 5s²",              state:"Solid" },
  { n:41, sym:"Nb", name:"Niobium",       mass:92.906,   cat:"transition-metal",row:5, col:5,  period:5, group:5,  config:"[Kr] 4d⁴ 5s¹",              state:"Solid" },
  { n:42, sym:"Mo", name:"Molybdenum",    mass:95.96,    cat:"transition-metal",row:5, col:6,  period:5, group:6,  config:"[Kr] 4d⁵ 5s¹",              state:"Solid" },
  { n:43, sym:"Tc", name:"Technetium",    mass:98,       cat:"transition-metal",row:5, col:7,  period:5, group:7,  config:"[Kr] 4d⁵ 5s²",              state:"Solid" },
  { n:44, sym:"Ru", name:"Ruthenium",     mass:101.07,   cat:"transition-metal",row:5, col:8,  period:5, group:8,  config:"[Kr] 4d⁷ 5s¹",              state:"Solid" },
  { n:45, sym:"Rh", name:"Rhodium",       mass:102.91,   cat:"transition-metal",row:5, col:9,  period:5, group:9,  config:"[Kr] 4d⁸ 5s¹",              state:"Solid" },
  { n:46, sym:"Pd", name:"Palladium",     mass:106.42,   cat:"transition-metal",row:5, col:10, period:5, group:10, config:"[Kr] 4d¹⁰",                 state:"Solid" },
  { n:47, sym:"Ag", name:"Silver",        mass:107.87,   cat:"transition-metal",row:5, col:11, period:5, group:11, config:"[Kr] 4d¹⁰ 5s¹",             state:"Solid" },
  { n:48, sym:"Cd", name:"Cadmium",       mass:112.41,   cat:"transition-metal",row:5, col:12, period:5, group:12, config:"[Kr] 4d¹⁰ 5s²",             state:"Solid" },
  { n:49, sym:"In", name:"Indium",        mass:114.82,   cat:"post-transition", row:5, col:13, period:5, group:13, config:"[Kr] 4d¹⁰ 5s² 5p¹",        state:"Solid" },
  { n:50, sym:"Sn", name:"Tin",           mass:118.71,   cat:"post-transition", row:5, col:14, period:5, group:14, config:"[Kr] 4d¹⁰ 5s² 5p²",        state:"Solid" },
  { n:51, sym:"Sb", name:"Antimony",      mass:121.76,   cat:"metalloid",       row:5, col:15, period:5, group:15, config:"[Kr] 4d¹⁰ 5s² 5p³",        state:"Solid" },
  { n:52, sym:"Te", name:"Tellurium",     mass:127.60,   cat:"metalloid",       row:5, col:16, period:5, group:16, config:"[Kr] 4d¹⁰ 5s² 5p⁴",        state:"Solid" },
  { n:53, sym:"I",  name:"Iodine",        mass:126.90,   cat:"halogen",         row:5, col:17, period:5, group:17, config:"[Kr] 4d¹⁰ 5s² 5p⁵",        state:"Solid" },
  { n:54, sym:"Xe", name:"Xenon",         mass:131.29,   cat:"noble-gas",       row:5, col:18, period:5, group:18, config:"[Kr] 4d¹⁰ 5s² 5p⁶",        state:"Gas" },

  // Period 6
  { n:55, sym:"Cs", name:"Cesium",        mass:132.91,   cat:"alkali-metal",    row:6, col:1,  period:6, group:1,  config:"[Xe] 6s¹",                  state:"Solid" },
  { n:56, sym:"Ba", name:"Barium",        mass:137.33,   cat:"alkaline-earth",  row:6, col:2,  period:6, group:2,  config:"[Xe] 6s²",                  state:"Solid" },
  // 57-71 = lanthanides → row 9
  { n:72, sym:"Hf", name:"Hafnium",       mass:178.49,   cat:"transition-metal",row:6, col:4,  period:6, group:4,  config:"[Xe] 4f¹⁴ 5d² 6s²",        state:"Solid" },
  { n:73, sym:"Ta", name:"Tantalum",      mass:180.95,   cat:"transition-metal",row:6, col:5,  period:6, group:5,  config:"[Xe] 4f¹⁴ 5d³ 6s²",        state:"Solid" },
  { n:74, sym:"W",  name:"Tungsten",      mass:183.84,   cat:"transition-metal",row:6, col:6,  period:6, group:6,  config:"[Xe] 4f¹⁴ 5d⁴ 6s²",        state:"Solid" },
  { n:75, sym:"Re", name:"Rhenium",       mass:186.21,   cat:"transition-metal",row:6, col:7,  period:6, group:7,  config:"[Xe] 4f¹⁴ 5d⁵ 6s²",        state:"Solid" },
  { n:76, sym:"Os", name:"Osmium",        mass:190.23,   cat:"transition-metal",row:6, col:8,  period:6, group:8,  config:"[Xe] 4f¹⁴ 5d⁶ 6s²",        state:"Solid" },
  { n:77, sym:"Ir", name:"Iridium",       mass:192.22,   cat:"transition-metal",row:6, col:9,  period:6, group:9,  config:"[Xe] 4f¹⁴ 5d⁷ 6s²",        state:"Solid" },
  { n:78, sym:"Pt", name:"Platinum",      mass:195.08,   cat:"transition-metal",row:6, col:10, period:6, group:10, config:"[Xe] 4f¹⁴ 5d⁹ 6s¹",        state:"Solid" },
  { n:79, sym:"Au", name:"Gold",          mass:196.97,   cat:"transition-metal",row:6, col:11, period:6, group:11, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s¹",       state:"Solid" },
  { n:80, sym:"Hg", name:"Mercury",       mass:200.59,   cat:"transition-metal",row:6, col:12, period:6, group:12, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s²",       state:"Liquid" },
  { n:81, sym:"Tl", name:"Thallium",      mass:204.38,   cat:"post-transition", row:6, col:13, period:6, group:13, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",   state:"Solid" },
  { n:82, sym:"Pb", name:"Lead",          mass:207.2,    cat:"post-transition", row:6, col:14, period:6, group:14, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",   state:"Solid" },
  { n:83, sym:"Bi", name:"Bismuth",       mass:208.98,   cat:"post-transition", row:6, col:15, period:6, group:15, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",   state:"Solid" },
  { n:84, sym:"Po", name:"Polonium",      mass:209,      cat:"post-transition", row:6, col:16, period:6, group:16, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",   state:"Solid" },
  { n:85, sym:"At", name:"Astatine",      mass:210,      cat:"halogen",         row:6, col:17, period:6, group:17, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",   state:"Solid" },
  { n:86, sym:"Rn", name:"Radon",         mass:222,      cat:"noble-gas",       row:6, col:18, period:6, group:18, config:"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",   state:"Gas" },

  // Period 7
  { n:87,  sym:"Fr",  name:"Francium",     mass:223,     cat:"alkali-metal",    row:7, col:1,  period:7, group:1,  config:"[Rn] 7s¹",                  state:"Solid" },
  { n:88,  sym:"Ra",  name:"Radium",       mass:226,     cat:"alkaline-earth",  row:7, col:2,  period:7, group:2,  config:"[Rn] 7s²",                  state:"Solid" },
  // 89-103 = actinides → row 10
  { n:104, sym:"Rf",  name:"Rutherfordium",mass:267,     cat:"transition-metal",row:7, col:4,  period:7, group:4,  config:"[Rn] 5f¹⁴ 6d² 7s²",        state:"Solid" },
  { n:105, sym:"Db",  name:"Dubnium",      mass:268,     cat:"transition-metal",row:7, col:5,  period:7, group:5,  config:"[Rn] 5f¹⁴ 6d³ 7s²",        state:"Solid" },
  { n:106, sym:"Sg",  name:"Seaborgium",   mass:269,     cat:"transition-metal",row:7, col:6,  period:7, group:6,  config:"[Rn] 5f¹⁴ 6d⁴ 7s²",        state:"Solid" },
  { n:107, sym:"Bh",  name:"Bohrium",      mass:270,     cat:"transition-metal",row:7, col:7,  period:7, group:7,  config:"[Rn] 5f¹⁴ 6d⁵ 7s²",        state:"Solid" },
  { n:108, sym:"Hs",  name:"Hassium",      mass:269,     cat:"transition-metal",row:7, col:8,  period:7, group:8,  config:"[Rn] 5f¹⁴ 6d⁶ 7s²",        state:"Solid" },
  { n:109, sym:"Mt",  name:"Meitnerium",   mass:278,     cat:"transition-metal",row:7, col:9,  period:7, group:9,  config:"[Rn] 5f¹⁴ 6d⁷ 7s²",        state:"Unknown" },
  { n:110, sym:"Ds",  name:"Darmstadtium", mass:281,     cat:"transition-metal",row:7, col:10, period:7, group:10, config:"[Rn] 5f¹⁴ 6d⁸ 7s²",        state:"Unknown" },
  { n:111, sym:"Rg",  name:"Roentgenium",  mass:282,     cat:"transition-metal",row:7, col:11, period:7, group:11, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s¹",       state:"Unknown" },
  { n:112, sym:"Cn",  name:"Copernicium",  mass:285,     cat:"transition-metal",row:7, col:12, period:7, group:12, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s²",       state:"Unknown" },
  { n:113, sym:"Nh",  name:"Nihonium",     mass:286,     cat:"post-transition", row:7, col:13, period:7, group:13, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",   state:"Unknown" },
  { n:114, sym:"Fl",  name:"Flerovium",    mass:289,     cat:"post-transition", row:7, col:14, period:7, group:14, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",   state:"Unknown" },
  { n:115, sym:"Mc",  name:"Moscovium",    mass:290,     cat:"post-transition", row:7, col:15, period:7, group:15, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",   state:"Unknown" },
  { n:116, sym:"Lv",  name:"Livermorium",  mass:293,     cat:"post-transition", row:7, col:16, period:7, group:16, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",   state:"Unknown" },
  { n:117, sym:"Ts",  name:"Tennessine",   mass:294,     cat:"halogen",         row:7, col:17, period:7, group:17, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",   state:"Unknown" },
  { n:118, sym:"Og",  name:"Oganesson",    mass:294,     cat:"noble-gas",       row:7, col:18, period:7, group:18, config:"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",   state:"Unknown" },

  // Lanthanides — row 9, cols 3-17
  { n:57,  sym:"La", name:"Lanthanum",     mass:138.91,  cat:"lanthanide",      row:9, col:3,  period:6, group:3,  config:"[Xe] 5d¹ 6s²",              state:"Solid" },
  { n:58,  sym:"Ce", name:"Cerium",        mass:140.12,  cat:"lanthanide",      row:9, col:4,  period:6, group:"N/A",config:"[Xe] 4f¹ 5d¹ 6s²",        state:"Solid" },
  { n:59,  sym:"Pr", name:"Praseodymium",  mass:140.91,  cat:"lanthanide",      row:9, col:5,  period:6, group:"N/A",config:"[Xe] 4f³ 6s²",             state:"Solid" },
  { n:60,  sym:"Nd", name:"Neodymium",     mass:144.24,  cat:"lanthanide",      row:9, col:6,  period:6, group:"N/A",config:"[Xe] 4f⁴ 6s²",             state:"Solid" },
  { n:61,  sym:"Pm", name:"Promethium",    mass:145,     cat:"lanthanide",      row:9, col:7,  period:6, group:"N/A",config:"[Xe] 4f⁵ 6s²",             state:"Solid" },
  { n:62,  sym:"Sm", name:"Samarium",      mass:150.36,  cat:"lanthanide",      row:9, col:8,  period:6, group:"N/A",config:"[Xe] 4f⁶ 6s²",             state:"Solid" },
  { n:63,  sym:"Eu", name:"Europium",      mass:151.96,  cat:"lanthanide",      row:9, col:9,  period:6, group:"N/A",config:"[Xe] 4f⁷ 6s²",             state:"Solid" },
  { n:64,  sym:"Gd", name:"Gadolinium",    mass:157.25,  cat:"lanthanide",      row:9, col:10, period:6, group:"N/A",config:"[Xe] 4f⁷ 5d¹ 6s²",        state:"Solid" },
  { n:65,  sym:"Tb", name:"Terbium",       mass:158.93,  cat:"lanthanide",      row:9, col:11, period:6, group:"N/A",config:"[Xe] 4f⁹ 6s²",             state:"Solid" },
  { n:66,  sym:"Dy", name:"Dysprosium",    mass:162.50,  cat:"lanthanide",      row:9, col:12, period:6, group:"N/A",config:"[Xe] 4f¹⁰ 6s²",            state:"Solid" },
  { n:67,  sym:"Ho", name:"Holmium",       mass:164.93,  cat:"lanthanide",      row:9, col:13, period:6, group:"N/A",config:"[Xe] 4f¹¹ 6s²",            state:"Solid" },
  { n:68,  sym:"Er", name:"Erbium",        mass:167.26,  cat:"lanthanide",      row:9, col:14, period:6, group:"N/A",config:"[Xe] 4f¹² 6s²",            state:"Solid" },
  { n:69,  sym:"Tm", name:"Thulium",       mass:168.93,  cat:"lanthanide",      row:9, col:15, period:6, group:"N/A",config:"[Xe] 4f¹³ 6s²",            state:"Solid" },
  { n:70,  sym:"Yb", name:"Ytterbium",     mass:173.05,  cat:"lanthanide",      row:9, col:16, period:6, group:"N/A",config:"[Xe] 4f¹⁴ 6s²",            state:"Solid" },
  { n:71,  sym:"Lu", name:"Lutetium",      mass:174.97,  cat:"lanthanide",      row:9, col:17, period:6, group:3,  config:"[Xe] 4f¹⁴ 5d¹ 6s²",         state:"Solid" },

  // Actinides — row 10, cols 3-17
  { n:89,  sym:"Ac", name:"Actinium",      mass:227,     cat:"actinide",        row:10,col:3,  period:7, group:3,  config:"[Rn] 6d¹ 7s²",              state:"Solid" },
  { n:90,  sym:"Th", name:"Thorium",       mass:232.04,  cat:"actinide",        row:10,col:4,  period:7, group:"N/A",config:"[Rn] 6d² 7s²",             state:"Solid" },
  { n:91,  sym:"Pa", name:"Protactinium",  mass:231.04,  cat:"actinide",        row:10,col:5,  period:7, group:"N/A",config:"[Rn] 5f² 6d¹ 7s²",        state:"Solid" },
  { n:92,  sym:"U",  name:"Uranium",       mass:238.03,  cat:"actinide",        row:10,col:6,  period:7, group:"N/A",config:"[Rn] 5f³ 6d¹ 7s²",        state:"Solid" },
  { n:93,  sym:"Np", name:"Neptunium",     mass:237,     cat:"actinide",        row:10,col:7,  period:7, group:"N/A",config:"[Rn] 5f⁴ 6d¹ 7s²",        state:"Solid" },
  { n:94,  sym:"Pu", name:"Plutonium",     mass:244,     cat:"actinide",        row:10,col:8,  period:7, group:"N/A",config:"[Rn] 5f⁶ 7s²",             state:"Solid" },
  { n:95,  sym:"Am", name:"Americium",     mass:243,     cat:"actinide",        row:10,col:9,  period:7, group:"N/A",config:"[Rn] 5f⁷ 7s²",             state:"Solid" },
  { n:96,  sym:"Cm", name:"Curium",        mass:247,     cat:"actinide",        row:10,col:10, period:7, group:"N/A",config:"[Rn] 5f⁷ 6d¹ 7s²",        state:"Solid" },
  { n:97,  sym:"Bk", name:"Berkelium",     mass:247,     cat:"actinide",        row:10,col:11, period:7, group:"N/A",config:"[Rn] 5f⁹ 7s²",             state:"Solid" },
  { n:98,  sym:"Cf", name:"Californium",   mass:251,     cat:"actinide",        row:10,col:12, period:7, group:"N/A",config:"[Rn] 5f¹⁰ 7s²",            state:"Solid" },
  { n:99,  sym:"Es", name:"Einsteinium",   mass:252,     cat:"actinide",        row:10,col:13, period:7, group:"N/A",config:"[Rn] 5f¹¹ 7s²",            state:"Solid" },
  { n:100, sym:"Fm", name:"Fermium",       mass:257,     cat:"actinide",        row:10,col:14, period:7, group:"N/A",config:"[Rn] 5f¹² 7s²",            state:"Solid" },
  { n:101, sym:"Md", name:"Mendelevium",   mass:258,     cat:"actinide",        row:10,col:15, period:7, group:"N/A",config:"[Rn] 5f¹³ 7s²",            state:"Solid" },
  { n:102, sym:"No", name:"Nobelium",      mass:259,     cat:"actinide",        row:10,col:16, period:7, group:"N/A",config:"[Rn] 5f¹⁴ 7s²",            state:"Solid" },
  { n:103, sym:"Lr", name:"Lawrencium",    mass:262,     cat:"actinide",        row:10,col:17, period:7, group:3,  config:"[Rn] 5f¹⁴ 7p¹",             state:"Solid" },
];

// ============================================================
//  BUILD THE GRID
// ============================================================
const grid = document.getElementById('periodicGrid');

// Stagger animation delays
elements.forEach((el, i) => {
  const cell = document.createElement('div');
  cell.className = `element ${el.cat}`;
  cell.style.gridRow = el.row;
  cell.style.gridColumn = el.col;
  cell.style.animationDelay = `${i * 0.005}s`;
  cell.dataset.mass = `${el.mass} u`;
  cell.dataset.cat = el.cat;
  cell.dataset.name = el.name.toLowerCase();
  cell.dataset.sym = el.sym.toLowerCase();
  cell.dataset.num = el.n;

  cell.innerHTML = `
    <span class="el-number">${el.n}</span>
    <span class="el-symbol">${el.sym}</span>
    <span class="el-name">${el.name}</span>
    <span class="el-mass">${el.mass}</span>
  `;

  cell.addEventListener('click', () => openModal(el));
  grid.appendChild(cell);
});

// ============================================================
//  SEARCH
// ============================================================
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  applyFilters(q, activeFilter);
});

// ============================================================
//  CATEGORY FILTER
// ============================================================
let activeFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    applyFilters(searchInput.value.trim().toLowerCase(), activeFilter);
  });
});

function applyFilters(query, filter) {
  const cells = document.querySelectorAll('.element');
  cells.forEach(cell => {
    const matchSearch = !query ||
      cell.dataset.name.includes(query) ||
      cell.dataset.sym.includes(query) ||
      cell.dataset.num.toString().includes(query);

    const matchFilter = filter === 'all' || cell.dataset.cat === filter;

    if (matchSearch && matchFilter) {
      cell.classList.remove('dimmed');
      if (query || filter !== 'all') cell.classList.add('highlighted');
      else cell.classList.remove('highlighted');
    } else {
      cell.classList.add('dimmed');
      cell.classList.remove('highlighted');
    }
  });

  // If nothing searched, remove all highlights
  if (!query && filter === 'all') {
    cells.forEach(c => { c.classList.remove('dimmed', 'highlighted'); });
  }
}

// ============================================================
//  MODAL
// ============================================================
const overlay   = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

function openModal(el) {
  document.getElementById('modalNumber').textContent   = `Atomic Number ${el.n}`;
  document.getElementById('modalSymbol').textContent   = el.sym;
  document.getElementById('modalName').textContent     = el.name;
  document.getElementById('modalCategory').textContent = el.cat.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  document.getElementById('modalMass').textContent     = `${el.mass} u`;
  document.getElementById('modalPeriod').textContent   = el.period;
  document.getElementById('modalGroup').textContent    = el.group;
  document.getElementById('modalConfig').textContent   = el.config;
  document.getElementById('modalState').textContent    = el.state;
  overlay.classList.add('open');
}

function closeModal() { overlay.classList.remove('open'); }

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
