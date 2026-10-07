"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

// Source: https://www.unicode.org/cldr/charts/32/summary/te.html
// Source: https://dsal.uchicago.edu/dictionaries/brown/

// CLDR #1605 - #1608
const eraValues = {
  narrow: ["క్రీ.పూ.", "క్రీ.శ."],
  abbreviated: ["క్రీ.పూ.", "క్రీ.శ."],
  wide: ["క్రీస్తు పూర్వం", "క్రీస్తుశకం"],
};

// CLDR #1613 - #1628
const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["త్రై1", "త్రై2", "త్రై3", "త్రై4"],
  wide: ["1వ త్రైమాసికం", "2వ త్రైమాసికం", "3వ త్రైమాసికం", "4వ త్రైమాసికం"],
};

// CLDR #1637 - #1708
const monthValues = {
  narrow: ["జ", "ఫి", "మా", "ఏ", "మే", "జూ", "జు", "ఆ", "సె", "అ", "న", "డి"],

  abbreviated: [
    "జన",
    "ఫిబ్ర",
    "మార్చి",
    "ఏప్రి",
    "మే",
    "జూన్",
    "జులై",
    "ఆగ",
    "సెప్టెం",
    "అక్టో",
    "నవం",
    "డిసెం",
  ],

  wide: [
    "జనవరి",
    "ఫిబ్రవరి",
    "మార్చి",
    "ఏప్రిల్",
    "మే",
    "జూన్",
    "జులై",
    "ఆగస్టు",
    "సెప్టెంబర్",
    "అక్టోబర్",
    "నవంబర్",
    "డిసెంబర్",
  ],
};

// CLDR #1709 - #1764
const dayValues = {
  narrow: ["ఆ", "సో", "మ", "బు", "గు", "శు", "శ"],
  short: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
  abbreviated: ["ఆది", "సోమ", "మంగళ", "బుధ", "గురు", "శుక్ర", "శని"],
  wide: [
    "ఆదివారం",
    "సోమవారం",
    "మంగళవారం",
    "బుధవారం",
    "గురువారం",
    "శుక్రవారం",
    "శనివారం",
  ],
};

// CLDR #1767 - #1806
const dayPeriodValues = {
  narrow: {
    am: "పూర్వాహ్నం",
    pm: "అపరాహ్నం",
    midnight: "అర్ధరాత్రి",
    noon: "మిట్టమధ్యాహ్నం",
    morning: "ఉదయం",
    afternoon: "మధ్యాహ్నం",
    evening: "సాయంత్రం",
    night: "రాత్రి",
  },
  abbreviated: {
    am: "పూర్వాహ్నం",
    pm: "అపరాహ్నం",
    midnight: "అర్ధరాత్రి",
    noon: "మిట్టమధ్యాహ్నం",
    morning: "ఉదయం",
    afternoon: "మధ్యాహ్నం",
    evening: "సాయంత్రం",
    night: "రాత్రి",
  },
  wide: {
    am: "పూర్వాహ్నం",
    pm: "అపరాహ్నం",
    midnight: "అర్ధరాత్రి",
    noon: "మిట్టమధ్యాహ్నం",
    morning: "ఉదయం",
    afternoon: "మధ్యాహ్నం",
    evening: "సాయంత్రం",
    night: "రాత్రి",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "పూర్వాహ్నం",
    pm: "అపరాహ్నం",
    midnight: "అర్ధరాత్రి",
    noon: "మిట్టమధ్యాహ్నం",
    morning: "ఉదయం",
    afternoon: "మధ్యాహ్నం",
    evening: "సాయంత్రం",
    night: "రాత్రి",
  },
  abbreviated: {
    am: "పూర్వాహ్నం",
    pm: "అపరాహ్నం",
    midnight: "అర్ధరాత్రి",
    noon: "మిట్టమధ్యాహ్నం",
    morning: "ఉదయం",
    afternoon: "మధ్యాహ్నం",
    evening: "సాయంత్రం",
    night: "రాత్రి",
  },
  wide: {
    am: "పూర్వాహ్నం",
    pm: "అపరాహ్నం",
    midnight: "అర్ధరాత్రి",
    noon: "మిట్టమధ్యాహ్నం",
    morning: "ఉదయం",
    afternoon: "మధ్యాహ్నం",
    evening: "సాయంత్రం",
    night: "రాత్రి",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "వ";
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
