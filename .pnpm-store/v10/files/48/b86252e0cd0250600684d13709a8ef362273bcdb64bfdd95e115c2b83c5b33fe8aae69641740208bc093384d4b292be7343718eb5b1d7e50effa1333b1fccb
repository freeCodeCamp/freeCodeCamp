import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.م", "ب.م"],
  wide: ["قبل الميلاد", "بعد الميلاد"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ر1", "ر2", "ر3", "ر4"],
  wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"],
};

const monthValues = {
  narrow: ["ي", "ف", "م", "أ", "م", "ي", "ي", "أ", "س", "أ", "ن", "د"],
  abbreviated: [
    "ينا",
    "فبر",
    "مارس",
    "أبريل",
    "مايو",
    "يونـ",
    "يولـ",
    "أغسـ",
    "سبتـ",
    "أكتـ",
    "نوفـ",
    "ديسـ",
  ],

  wide: [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
};

const dayValues = {
  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  abbreviated: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],

  wide: [
    "الأحد",
    "الاثنين",
    "الثلاثاء",
    "الأربعاء",
    "الخميس",
    "الجمعة",
    "السبت",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "ص",
    pm: "م",
    midnight: "ن",
    noon: "ظ",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءً",
    night: "ليلاً",
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهراً",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءً",
    night: "ليلاً",
  },
  wide: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهراً",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءً",
    night: "ليلاً",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "ص",
    pm: "م",
    midnight: "ن",
    noon: "ظ",
    morning: "في الصباح",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهراً",
    morning: "في الصباح",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
  },
  wide: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    morning: "في الصباح",
    noon: "ظهراً",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  return String(dirtyNumber);
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
