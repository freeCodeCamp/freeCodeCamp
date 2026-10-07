import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["ق", "ب"],
  abbreviated: ["ق.م.", "ب.م."],
  wide: ["قبل الميلاد", "بعد الميلاد"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["ر1", "ر2", "ر3", "ر4"],
  wide: ["الربع الأول", "الربع الثاني", "الربع الثالث", "الربع الرابع"],
};

const monthValues = {
  narrow: ["ج", "ف", "م", "أ", "م", "ج", "ج", "أ", "س", "أ", "ن", "د"],
  abbreviated: [
    "جانـ",
    "فيفـ",
    "مارس",
    "أفريل",
    "مايـ",
    "جوانـ",
    "جويـ",
    "أوت",
    "سبتـ",
    "أكتـ",
    "نوفـ",
    "ديسـ",
  ],

  wide: [
    "جانفي",
    "فيفري",
    "مارس",
    "أفريل",
    "ماي",
    "جوان",
    "جويلية",
    "أوت",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ],
};

const dayValues = {
  narrow: ["ح", "ن", "ث", "ر", "خ", "ج", "س"],
  short: ["أحد", "اثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"],
  abbreviated: ["أحد", "اثنـ", "ثلا", "أربـ", "خميـ", "جمعة", "سبت"],
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
    evening: "مساءاً",
    night: "ليلاً",
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءاً",
    night: "ليلاً",
  },
  wide: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "صباحاً",
    afternoon: "بعد الظهر",
    evening: "مساءاً",
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
    afternoon: "بعد الظـهر",
    evening: "في المساء",
    night: "في الليل",
  },
  abbreviated: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "في الصباح",
    afternoon: "بعد الظهر",
    evening: "في المساء",
    night: "في الليل",
  },
  wide: {
    am: "ص",
    pm: "م",
    midnight: "نصف الليل",
    noon: "ظهر",
    morning: "صباحاً",
    afternoon: "بعد الظـهر",
    evening: "في المساء",
    night: "في الليل",
  },
};

const ordinalNumber = (dirtyNumber) => {
  return String(dirtyNumber);
};

export const localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => Number(quarter) - 1,
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
