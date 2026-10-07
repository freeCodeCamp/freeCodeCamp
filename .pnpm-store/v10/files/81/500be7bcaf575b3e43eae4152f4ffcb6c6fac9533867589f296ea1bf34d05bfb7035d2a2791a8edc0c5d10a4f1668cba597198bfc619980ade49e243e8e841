import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern =
  /^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^((да )?н\.?\s?э\.?)/i,
  abbreviated: /^((да )?н\.?\s?э\.?)/i,
  wide: /^(да нашай эры|нашай эры|наша эра)/i,
};
const parseEraPatterns = {
  any: [/^д/i, /^н/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234](-?[ыі]?)? кв.?/i,
  wide: /^[1234](-?[ыі]?)? квартал/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[слкмчжв]/i,
  abbreviated:
    /^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,
  wide: /^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i,
};
const parseMonthPatterns = {
  narrow: [
    /^с/i,
    /^л/i,
    /^с/i,
    /^к/i,
    /^м/i,
    /^ч/i,
    /^л/i,
    /^ж/i,
    /^в/i,
    /^к/i,
    /^л/i,
    /^с/i,
  ],

  any: [
    /^ст/i,
    /^лю/i,
    /^са/i,
    /^кр/i,
    /^ма/i,
    /^ч/i,
    /^ліп/i,
    /^ж/i,
    /^в/i,
    /^ка/i,
    /^ліс/i,
    /^сн/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[нпасч]/i,
  short: /^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,
  abbreviated: /^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,
  wide: /^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i,
};
const parseDayPatterns = {
  narrow: [/^н/i, /^п/i, /^а/i, /^с/i, /^ч/i, /^п/i, /^с/i],
  any: [/^н/i, /^п[ан]/i, /^а/i, /^с[ер]/i, /^ч/i, /^п[ят]/i, /^с[уб]/i],
};

const matchDayPeriodPatterns = {
  narrow: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
  abbreviated: /^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,
  wide: /^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^дп/i,
    pm: /^пп/i,
    midnight: /^поўн/i,
    noon: /^поўд/i,
    morning: /^р/i,
    afternoon: /^д[зн]/i,
    evening: /^в/i,
    night: /^н/i,
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
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};
