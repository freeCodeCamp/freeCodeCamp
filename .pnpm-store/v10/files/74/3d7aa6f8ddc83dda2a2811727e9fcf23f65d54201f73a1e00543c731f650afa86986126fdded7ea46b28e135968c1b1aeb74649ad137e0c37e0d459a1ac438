import { buildMatchFn } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn } from "../../_lib/buildMatchPatternFn.js";

const matchOrdinalNumberPattern = /^(\d+)(chi)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(m\.a|m\.)/i,
  abbreviated: /^(m\.a\.?\s?m\.?)/i,
  wide: /^(miloddan avval|miloddan keyin)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](chi)? chorak/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[yfmasond]/i,
  abbreviated: /^(yan|fev|mar|apr|may|iyun|iyul|avg|sen|okt|noy|dek)/i,
  wide: /^(yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentabr|oktabr|noyabr|dekabr)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^y/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^i/i,
    /^i/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ya/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^iyun/i,
    /^iyul/i,
    /^av/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[ydschj]/i,
  short: /^(ya|du|se|cho|pa|ju|sha)/i,
  abbreviated: /^(yak|dush|sesh|chor|pay|jum|shan)/i,
  wide: /^(yakshanba|dushanba|seshanba|chorshanba|payshanba|juma|shanba)/i,
};
const parseDayPatterns = {
  narrow: [/^y/i, /^d/i, /^s/i, /^ch/i, /^p/i, /^j/i, /^sh/i],
  any: [/^ya/i, /^d/i, /^se/i, /^ch/i, /^p/i, /^j/i, /^sh/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|y\.t|p| (ertalab|tushdan keyin|kechqurun|tun))/i,
  any: /^([ap]\.?\s?m\.?|yarim tun|peshin| (ertalab|tushdan keyin|kechqurun|tun))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^y\.t/i,
    noon: /^pe/i,
    morning: /ertalab/i,
    afternoon: /tushdan keyin/i,
    evening: /kechqurun/i,
    night: /tun/i,
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
