import { buildLocalizeFn } from "../../_lib/buildLocalizeFn.js";

const eraValues = {
  narrow: ["Q", "W"],
  abbreviated: ["QK", "WK"],
  wide: ["qabel Kristu", "wara Kristu"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"],
};

const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Fra",
    "Mar",
    "Apr",
    "Mej",
    "Ġun",
    "Lul",
    "Aww",
    "Set",
    "Ott",
    "Nov",
    "Diċ",
  ],

  wide: [
    "Jannar",
    "Frar",
    "Marzu",
    "April",
    "Mejju",
    "Ġunju",
    "Lulju",
    "Awwissu",
    "Settembru",
    "Ottubru",
    "Novembru",
    "Diċembru",
  ],
};

const dayValues = {
  narrow: ["Ħ", "T", "T", "E", "Ħ", "Ġ", "S"],
  short: ["Ħa", "Tn", "Tl", "Er", "Ħa", "Ġi", "Si"],
  abbreviated: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
  wide: [
    "Il-Ħadd",
    "It-Tnejn",
    "It-Tlieta",
    "L-Erbgħa",
    "Il-Ħamis",
    "Il-Ġimgħa",
    "Is-Sibt",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  return number + "º";
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
