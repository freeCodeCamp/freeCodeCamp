import buildMatchFn from "../../../_lib/buildMatchFn/index.js";
import buildMatchPatternFn from "../../../_lib/buildMatchPatternFn/index.js";
var matchOrdinalNumberPattern = /^(\d+)/;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(ق|ب)/g,
  abbreviated: /^(ق.م|ب.م)/g,
  wide: /^(قبل الميلاد|بعد الميلاد)/g
};
var parseEraPatterns = {
  any: [/^ق/g, /^ب/g]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/,
  abbreviated: /^ر[1234]/,
  wide: /^الربع (الأول|الثاني|الثالث|الرابع)/
};
var parseQuarterPatterns = {
  wide: [/الربع الأول/, /الربع الثاني/, /الربع الثالث/, /الربع الرابع/],
  any: [/1/, /2/, /3/, /4/]
};
var matchMonthPatterns = {
  narrow: /^(ي|ف|م|أ|س|ن|د)/,
  abbreviated: /^(ينا|فبر|مارس|أبريل|مايو|يونـ|يولـ|أغسـ|سبتـ|أكتـ|نوفـ|ديسـ)/,
  wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
};
var parseMonthPatterns = {
  narrow: [/^ي/, /^ف/, /^م/, /^أ/, /^م/, /^ي/, /^ي/, /^أ/, /^س/, /^أ/, /^ن/, /^د/],
  any: [/^ينا/, /^فبر/, /^مارس/, /^أبريل/, /^مايو/, /^يون/, /^يول/, /^أغس/, /^سبت/, /^أكت/, /^نوف/, /^ديس/]
};
var matchDayPatterns = {
  narrow: /^(ح|ن|ث|ر|خ|ج|س)/,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/
};
var parseDayPatterns = {
  narrow: [/^ح/, /^ن/, /^ث/, /^ر/, /^خ/, /^ج/, /^س/],
  any: [/أحد/, /اثنين/, /ثلاثاء/, /أربعاء/, /خميس/, /جمعة/, /سبت/]
};
var matchDayPeriodPatterns = {
  narrow: /^(ص|م|ن|ظ|في الصباح|بعد الظهر|في المساء|في الليل)/,
  abbreviated: /^(ص|م|نصف الليل|ظهراً|في الصباح|بعد الظهر|في المساء|في الليل)/,
  wide: /^(ص|م|نصف الليل|في الصباح|ظهراً|بعد الظهر|في المساء|في الليل)/,
  any: /^(ص|م|صباح|ظهر|مساء|ليل)/
};
var parseDayPeriodPatterns = {
  any: {
    am: /^ص/,
    pm: /^م/,
    midnight: /^ن/,
    noon: /^ظ/,
    morning: /^ص/,
    afternoon: /^بعد/,
    evening: /^م/,
    night: /^ل/
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
export default match;