import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern =
  /^(\d+|(ראשון|שני|שלישי|רביעי|חמישי|שישי|שביעי|שמיני|תשיעי|עשירי|ראשונה|שנייה|שלישית|רביעית|חמישית|שישית|שביעית|שמינית|תשיעית|עשירית))/i;
const parseOrdinalNumberPattern = /^(\d+|רא|שנ|של|רב|ח|שי|שב|שמ|ת|ע)/i;

const matchEraPatterns = {
  narrow: /^ל(ספירה|פנה״ס)/i,
  abbreviated: /^ל(ספירה|פנה״ס)/i,
  wide: /^ל(פני ה)?ספירה/i,
};
const parseEraPatterns = {
  any: [/^לפ/i, /^לס/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^רבעון [1234]/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^\d+/i,
  abbreviated: /^(ינו|פבר|מרץ|אפר|מאי|יוני|יולי|אוג|ספט|אוק|נוב|דצמ)׳?/i,
  wide: /^(ינואר|פברואר|מרץ|אפריל|מאי|יוני|יולי|אוגוסט|ספטמבר|אוקטובר|נובמבר|דצמבר)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^1$/i,
    /^2/i,
    /^3/i,
    /^4/i,
    /^5/i,
    /^6/i,
    /^7/i,
    /^8/i,
    /^9/i,
    /^10/i,
    /^11/i,
    /^12/i,
  ],

  any: [
    /^ינ/i,
    /^פ/i,
    /^מר/i,
    /^אפ/i,
    /^מא/i,
    /^יונ/i,
    /^יול/i,
    /^אוג/i,
    /^ס/i,
    /^אוק/i,
    /^נ/i,
    /^ד/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[אבגדהוש]׳/i,
  short: /^[אבגדהוש]׳/i,
  abbreviated: /^(שבת|יום (א|ב|ג|ד|ה|ו)׳)/i,
  wide: /^יום (ראשון|שני|שלישי|רביעי|חמישי|שישי|שבת)/i,
};
const parseDayPatterns = {
  abbreviated: [/א׳$/i, /ב׳$/i, /ג׳$/i, /ד׳$/i, /ה׳$/i, /ו׳$/i, /^ש/i],
  wide: [/ן$/i, /ני$/i, /לישי$/i, /עי$/i, /מישי$/i, /שישי$/i, /ת$/i],
  any: [/^א/i, /^ב/i, /^ג/i, /^ד/i, /^ה/i, /^ו/i, /^ש/i],
};

const matchDayPeriodPatterns = {
  any: /^(אחר ה|ב)?(חצות|צהריים|בוקר|ערב|לילה|אחה״צ|לפנה״צ)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^לפ/i,
    pm: /^אחה/i,
    midnight: /^ח/i,
    noon: /^צ/i,
    morning: /בוקר/i,
    afternoon: /בצ|אחר/i,
    evening: /ערב/i,
    night: /לילה/i,
  },
};

const ordinalName = ["רא", "שנ", "של", "רב", "ח", "שי", "שב", "שמ", "ת", "ע"];

export const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => {
      const number = parseInt(value, 10);
      return isNaN(number) ? ordinalName.indexOf(value) + 1 : number;
    },
  }),

  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
