"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["Î", "D"],
  abbreviated: ["Î.d.C.", "D.C."],
  wide: ["Înainte de Cristos", "După Cristos"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: [
    "primul trimestru",
    "al doilea trimestru",
    "al treilea trimestru",
    "al patrulea trimestru",
  ],
};

const monthValues = {
  narrow: ["I", "F", "M", "A", "M", "I", "I", "A", "S", "O", "N", "D"],
  abbreviated: [
    "ian",
    "feb",
    "mar",
    "apr",
    "mai",
    "iun",
    "iul",
    "aug",
    "sep",
    "oct",
    "noi",
    "dec",
  ],

  wide: [
    "ianuarie",
    "februarie",
    "martie",
    "aprilie",
    "mai",
    "iunie",
    "iulie",
    "august",
    "septembrie",
    "octombrie",
    "noiembrie",
    "decembrie",
  ],
};

const dayValues = {
  narrow: ["d", "l", "m", "m", "j", "v", "s"],
  short: ["du", "lu", "ma", "mi", "jo", "vi", "sâ"],
  abbreviated: ["dum", "lun", "mar", "mie", "joi", "vin", "sâm"],
  wide: ["duminică", "luni", "marți", "miercuri", "joi", "vineri", "sâmbătă"],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "ami",
    morning: "dim",
    afternoon: "da",
    evening: "s",
    night: "n",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mn",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "miezul nopții",
    noon: "amiază",
    morning: "dimineață",
    afternoon: "după-amiază",
    evening: "seară",
    night: "noapte",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  return String(dirtyNumber);
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
