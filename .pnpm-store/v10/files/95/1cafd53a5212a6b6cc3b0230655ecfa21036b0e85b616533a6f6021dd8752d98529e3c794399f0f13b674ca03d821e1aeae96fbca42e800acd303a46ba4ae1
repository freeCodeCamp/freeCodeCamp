import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern = /^(\d+)(వ)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(క్రీ\.పూ\.|క్రీ\.శ\.)/i,
  abbreviated:
    /^(క్రీ\.?\s?పూ\.?|ప్ర\.?\s?శ\.?\s?పూ\.?|క్రీ\.?\s?శ\.?|సా\.?\s?శ\.?)/i,
  wide: /^(క్రీస్తు పూర్వం|ప్రస్తుత శకానికి పూర్వం|క్రీస్తు శకం|ప్రస్తుత శకం)/i,
};
const parseEraPatterns = {
  any: [/^(పూ|శ)/i, /^సా/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^త్రై[1234]/i,
  wide: /^[1234](వ)? త్రైమాసికం/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^(జూ|జు|జ|ఫి|మా|ఏ|మే|ఆ|సె|అ|న|డి)/i,
  abbreviated: /^(జన|ఫిబ్ర|మార్చి|ఏప్రి|మే|జూన్|జులై|ఆగ|సెప్|అక్టో|నవ|డిసె)/i,
  wide: /^(జనవరి|ఫిబ్రవరి|మార్చి|ఏప్రిల్|మే|జూన్|జులై|ఆగస్టు|సెప్టెంబర్|అక్టోబర్|నవంబర్|డిసెంబర్)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^జ/i,
    /^ఫి/i,
    /^మా/i,
    /^ఏ/i,
    /^మే/i,
    /^జూ/i,
    /^జు/i,
    /^ఆ/i,
    /^సె/i,
    /^అ/i,
    /^న/i,
    /^డి/i,
  ],

  any: [
    /^జన/i,
    /^ఫి/i,
    /^మా/i,
    /^ఏ/i,
    /^మే/i,
    /^జూన్/i,
    /^జులై/i,
    /^ఆగ/i,
    /^సె/i,
    /^అ/i,
    /^న/i,
    /^డి/i,
  ],
};

const matchDayPatterns = {
  narrow: /^(ఆ|సో|మ|బు|గు|శు|శ)/i,
  short: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,
  abbreviated: /^(ఆది|సోమ|మం|బుధ|గురు|శుక్ర|శని)/i,
  wide: /^(ఆదివారం|సోమవారం|మంగళవారం|బుధవారం|గురువారం|శుక్రవారం|శనివారం)/i,
};
const parseDayPatterns = {
  narrow: [/^ఆ/i, /^సో/i, /^మ/i, /^బు/i, /^గు/i, /^శు/i, /^శ/i],
  any: [/^ఆది/i, /^సోమ/i, /^మం/i, /^బుధ/i, /^గురు/i, /^శుక్ర/i, /^శని/i],
};

const matchDayPeriodPatterns = {
  narrow:
    /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,
  any: /^(పూర్వాహ్నం|అపరాహ్నం|అర్ధరాత్రి|మిట్టమధ్యాహ్నం|ఉదయం|మధ్యాహ్నం|సాయంత్రం|రాత్రి)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^పూర్వాహ్నం/i,
    pm: /^అపరాహ్నం/i,
    midnight: /^అర్ధ/i,
    noon: /^మిట్ట/i,
    morning: /ఉదయం/i,
    afternoon: /మధ్యాహ్నం/i,
    evening: /సాయంత్రం/i,
    night: /రాత్రి/i,
  },
};

export const match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
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
