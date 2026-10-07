"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

/**
 * General information
 * Reference: https://aplicacions.llengua.gencat.cat
 * Reference: https://www.uoc.edu/portal/ca/servei-linguistic/convencions/abreviacions/simbols/simbols-habituals.html
 */

/**
 * Abans de Crist: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abans+de+crist&action=Principal&method=detall_completa&numPagina=1&idHit=6876&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=6876&titol=abans%20de%20Crist%20(abreviatura)%20/%20abans%20de%20Crist%20(sigla)&numeroResultat=1&clickLink=detall&tipusCerca=cerca.fitxes
 * Desprest de Crist: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=despr%E9s+de+crist&action=Principal&method=detall_completa&numPagina=1&idHit=6879&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=6879&titol=despr%E9s%20de%20Crist%20(sigla)%20/%20despr%E9s%20de%20Crist%20(abreviatura)&numeroResultat=1&clickLink=detall&tipusCerca=cerca.fitxes
 */
const eraValues = {
  narrow: ["aC", "dC"],
  abbreviated: ["a. de C.", "d. de C."],
  wide: ["abans de Crist", "després de Crist"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"],
};

/**
 * Dins d'un text convé fer servir la forma sencera dels mesos, ja que sempre és més clar el mot sencer que l'abreviatura, encara que aquesta sigui força coneguda.
 * Cal reservar, doncs, les abreviatures per a les llistes o classificacions, els gràfics, les taules o quadres estadístics, els textos publicitaris, etc.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abreviacions+mesos&action=Principal&method=detall_completa&numPagina=1&idHit=8402&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=8402&titol=abreviatures%20dels%20mesos%20de%20l%27any&numeroResultat=5&clickLink=detall&tipusCerca=cerca.fitxes
 */
const monthValues = {
  narrow: [
    "GN",
    "FB",
    "MÇ",
    "AB",
    "MG",
    "JN",
    "JL",
    "AG",
    "ST",
    "OC",
    "NV",
    "DS",
  ],

  /**
   * Les abreviatures dels mesos de l'any es formen seguint una de les normes generals de formació d'abreviatures.
   * S'escriu la primera síl·laba i les consonants de la síl·laba següent anteriors a la primera vocal.
   * Els mesos de març, maig i juny no s'abreugen perquè són paraules d'una sola síl·laba.
   */
  abbreviated: [
    "gen.",
    "febr.",
    "març",
    "abr.",
    "maig",
    "juny",
    "jul.",
    "ag.",
    "set.",
    "oct.",
    "nov.",
    "des.",
  ],

  wide: [
    "gener",
    "febrer",
    "març",
    "abril",
    "maig",
    "juny",
    "juliol",
    "agost",
    "setembre",
    "octubre",
    "novembre",
    "desembre",
  ],
};

/**
 * Les abreviatures dels dies de la setmana comencen totes amb la lletra d.
 * Tot seguit porten la consonant següent a la i, excepte en el cas de dimarts, dimecres i diumenge, en què aquesta consonant és la m i, per tant, hi podria haver confusió.
 * Per evitar-ho, s'ha substituït la m per una t (en el cas de dimarts), una c (en el cas de dimecres) i una g (en el cas de diumenge), respectivament.
 *
 * Seguint la norma general d'ús de les abreviatures, les dels dies de la setmana sempre porten punt final.
 * Igualment, van amb la primera lletra en majúscula quan la paraula sencera també hi aniria.
 * En canvi, van amb la primera lletra en minúscula quan la inicial de la paraula sencera també hi aniria.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?input_cercar=abreviatures+dies&action=Principal&method=detall_completa&numPagina=1&idHit=8387&database=FITXES_PUB&tipusFont=Fitxes%20de%20l%27Optimot&idFont=8387&titol=abreviatures%20dels%20dies%20de%20la%20setmana&numeroResultat=1&clickLink=detall&tipusCerca=cerca.tot
 */
const dayValues = {
  narrow: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
  short: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
  abbreviated: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
  wide: [
    "diumenge",
    "dilluns",
    "dimarts",
    "dimecres",
    "dijous",
    "divendres",
    "dissabte",
  ],
};

/**
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/index.html?action=Principal&method=detall&input_cercar=parts+del+dia&numPagina=1&database=FITXES_PUB&idFont=12801&idHit=12801&tipusFont=Fitxes+de+l%27Optimot&numeroResultat=1&databases_avansada=&categories_avansada=&clickLink=detall&titol=Nom+de+les+parts+del+dia&tematica=&tipusCerca=cerca.fitxes
 */
const dayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "mitjanit",
    noon: "migdia",
    morning: "matí",
    afternoon: "tarda",
    evening: "vespre",
    night: "nit",
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "mitjanit",
    noon: "migdia",
    morning: "matí",
    afternoon: "tarda",
    evening: "vespre",
    night: "nit",
  },
  wide: {
    am: "ante meridiem",
    pm: "post meridiem",
    midnight: "mitjanit",
    noon: "migdia",
    morning: "matí",
    afternoon: "tarda",
    evening: "vespre",
    night: "nit",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "de la mitjanit",
    noon: "del migdia",
    morning: "del matí",
    afternoon: "de la tarda",
    evening: "del vespre",
    night: "de la nit",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "de la mitjanit",
    noon: "del migdia",
    morning: "del matí",
    afternoon: "de la tarda",
    evening: "del vespre",
    night: "de la nit",
  },
  wide: {
    am: "ante meridiem",
    pm: "post meridiem",
    midnight: "de la mitjanit",
    noon: "del migdia",
    morning: "del matí",
    afternoon: "de la tarda",
    evening: "del vespre",
    night: "de la nit",
  },
};

/**
 * Quan van en singular, els nombres ordinals es representen, en forma d’abreviatura, amb la xifra seguida de l’última lletra del mot desplegat.
 * És optatiu posar punt després de la lletra.
 *
 * Reference: https://aplicacions.llengua.gencat.cat/llc/AppJava/pdf/abrevia.pdf#page=18
 */
const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "r";
      case 2:
        return number + "n";
      case 3:
        return number + "r";
      case 4:
        return number + "t";
    }
  }
  return number + "è";
};

const localize = (exports.localize = {
  ordinalNumber,

  era: (0, _index.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0, _index.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0, _index.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0, _index.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
