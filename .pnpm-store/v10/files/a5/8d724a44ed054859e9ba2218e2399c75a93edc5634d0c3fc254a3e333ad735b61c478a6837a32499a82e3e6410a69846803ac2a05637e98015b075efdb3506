import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["Ք", "Մ"],
  abbreviated: ["ՔԱ", "ՄԹ"],
  wide: ["Քրիստոսից առաջ", "Մեր թվարկության"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Ք1", "Ք2", "Ք3", "Ք4"],
  wide: ["1֊ին քառորդ", "2֊րդ քառորդ", "3֊րդ քառորդ", "4֊րդ քառորդ"],
};

const monthValues = {
  narrow: ["Հ", "Փ", "Մ", "Ա", "Մ", "Հ", "Հ", "Օ", "Ս", "Հ", "Ն", "Դ"],
  abbreviated: [
    "հուն",
    "փետ",
    "մար",
    "ապր",
    "մայ",
    "հուն",
    "հուլ",
    "օգս",
    "սեպ",
    "հոկ",
    "նոյ",
    "դեկ",
  ],

  wide: [
    "հունվար",
    "փետրվար",
    "մարտ",
    "ապրիլ",
    "մայիս",
    "հունիս",
    "հուլիս",
    "օգոստոս",
    "սեպտեմբեր",
    "հոկտեմբեր",
    "նոյեմբեր",
    "դեկտեմբեր",
  ],
};

const dayValues = {
  narrow: ["Կ", "Ե", "Ե", "Չ", "Հ", "Ո", "Շ"],
  short: ["կր", "եր", "եք", "չք", "հգ", "ուր", "շբ"],
  abbreviated: ["կիր", "երկ", "երք", "չոր", "հնգ", "ուրբ", "շաբ"],
  wide: [
    "կիրակի",
    "երկուշաբթի",
    "երեքշաբթի",
    "չորեքշաբթի",
    "հինգշաբթի",
    "ուրբաթ",
    "շաբաթ",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "կեսգշ",
    noon: "կեսօր",
    morning: "առավոտ",
    afternoon: "ցերեկ",
    evening: "երեկո",
    night: "գիշեր",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "կեսգիշեր",
    noon: "կեսօր",
    morning: "առավոտ",
    afternoon: "ցերեկ",
    evening: "երեկո",
    night: "գիշեր",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "կեսգիշեր",
    noon: "կեսօր",
    morning: "առավոտ",
    afternoon: "ցերեկ",
    evening: "երեկո",
    night: "գիշեր",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "կեսգշ",
    noon: "կեսօր",
    morning: "առավոտը",
    afternoon: "ցերեկը",
    evening: "երեկոյան",
    night: "գիշերը",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "կեսգիշերին",
    noon: "կեսօրին",
    morning: "առավոտը",
    afternoon: "ցերեկը",
    evening: "երեկոյան",
    night: "գիշերը",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "կեսգիշերին",
    noon: "կեսօրին",
    morning: "առավոտը",
    afternoon: "ցերեկը",
    evening: "երեկոյան",
    night: "գիշերը",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 < 10) {
    if (rem100 % 10 === 1) {
      return number + "֊ին";
    }
  }
  return number + "֊րդ";
};

export const localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
