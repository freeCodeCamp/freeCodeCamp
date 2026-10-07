import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["да н.э.", "н.э."],
  abbreviated: ["да н. э.", "н. э."],
  wide: ["да нашай эры", "нашай эры"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ы кв.", "2-і кв.", "3-і кв.", "4-ы кв."],
  wide: ["1-ы квартал", "2-і квартал", "3-і квартал", "4-ы квартал"],
};

const monthValues = {
  narrow: ["С", "Л", "С", "К", "Т", "Ч", "Л", "Ж", "В", "К", "Л", "С"],
  abbreviated: [
    "студз.",
    "лют.",
    "сак.",
    "крас.",
    "трав.",
    "чэрв.",
    "ліп.",
    "жн.",
    "вер.",
    "кастр.",
    "ліст.",
    "сьнеж.",
  ],

  wide: [
    "студзень",
    "люты",
    "сакавік",
    "красавік",
    "травень",
    "чэрвень",
    "ліпень",
    "жнівень",
    "верасень",
    "кастрычнік",
    "лістапад",
    "сьнежань",
  ],
};
const formattingMonthValues = {
  narrow: ["С", "Л", "С", "К", "Т", "Ч", "Л", "Ж", "В", "К", "Л", "С"],
  abbreviated: [
    "студз.",
    "лют.",
    "сак.",
    "крас.",
    "трав.",
    "чэрв.",
    "ліп.",
    "жн.",
    "вер.",
    "кастр.",
    "ліст.",
    "сьнеж.",
  ],

  wide: [
    "студзеня",
    "лютага",
    "сакавіка",
    "красавіка",
    "траўня",
    "чэрвеня",
    "ліпеня",
    "жніўня",
    "верасня",
    "кастрычніка",
    "лістапада",
    "сьнежня",
  ],
};

const dayValues = {
  narrow: ["Н", "П", "А", "С", "Ч", "П", "С"],
  short: ["нд", "пн", "аў", "ср", "чц", "пт", "сб"],
  abbreviated: ["нядз", "пан", "аўт", "сер", "чаць", "пят", "суб"],
  wide: [
    "нядзеля",
    "панядзелак",
    "аўторак",
    "серада",
    "чацьвер",
    "пятніца",
    "субота",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дзень",
    evening: "веч.",
    night: "ноч",
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дзень",
    evening: "веч.",
    night: "ноч",
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўнач",
    noon: "поўдзень",
    morning: "раніца",
    afternoon: "дзень",
    evening: "вечар",
    night: "ноч",
  },
};
const formattingDayPeriodValues = {
  narrow: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дня",
    evening: "веч.",
    night: "ночы",
  },
  abbreviated: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўн.",
    noon: "поўд.",
    morning: "ран.",
    afternoon: "дня",
    evening: "веч.",
    night: "ночы",
  },
  wide: {
    am: "ДП",
    pm: "ПП",
    midnight: "поўнач",
    noon: "поўдзень",
    morning: "раніцы",
    afternoon: "дня",
    evening: "вечара",
    night: "ночы",
  },
};

const ordinalNumber = (dirtyNumber, options) => {
  const unit = String(options?.unit);
  const number = Number(dirtyNumber);
  let suffix;

  /** Though it's an incorrect ordinal form of a date we use it here for consistency with other similar locales (ru, uk)
   *  For date-month combinations should be used `d` formatter.
   *  Correct:   `d MMMM` (4 верасня)
   *  Incorrect: `do MMMM` (4-га верасня)
   *
   *  But following the consistency leads to mistakes for literal uses of `do` formatter (ordinal day of month).
   *  So for phrase "5th day of month" (`do дзень месяца`)
   *  library will produce:            `5-га дзень месяца`
   *  but correct spelling should be:  `5-ы дзень месяца`
   *
   *  So I guess there should be a stand-alone and a formatting version of "day of month" formatters
   */
  if (unit === "date") {
    suffix = "-га";
  } else if (unit === "hour" || unit === "minute" || unit === "second") {
    suffix = "-я";
  } else {
    suffix =
      (number % 10 === 2 || number % 10 === 3) &&
      number % 100 !== 12 &&
      number % 100 !== 13
        ? "-і"
        : "-ы";
  }

  return number + suffix;
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "any",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};
