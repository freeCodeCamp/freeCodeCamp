"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["πΧ", "μΧ"],
  abbreviated: ["π.Χ.", "μ.Χ."],
  wide: ["προ Χριστού", "μετά Χριστόν"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Τ1", "Τ2", "Τ3", "Τ4"],
  wide: ["1ο τρίμηνο", "2ο τρίμηνο", "3ο τρίμηνο", "4ο τρίμηνο"],
};

const monthValues = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μάρ",
    "Απρ",
    "Μάι",
    "Ιούν",
    "Ιούλ",
    "Αύγ",
    "Σεπ",
    "Οκτ",
    "Νοέ",
    "Δεκ",
  ],

  wide: [
    "Ιανουάριος",
    "Φεβρουάριος",
    "Μάρτιος",
    "Απρίλιος",
    "Μάιος",
    "Ιούνιος",
    "Ιούλιος",
    "Αύγουστος",
    "Σεπτέμβριος",
    "Οκτώβριος",
    "Νοέμβριος",
    "Δεκέμβριος",
  ],
};

const formattingMonthValues = {
  narrow: ["Ι", "Φ", "Μ", "Α", "Μ", "Ι", "Ι", "Α", "Σ", "Ο", "Ν", "Δ"],
  abbreviated: [
    "Ιαν",
    "Φεβ",
    "Μαρ",
    "Απρ",
    "Μαΐ",
    "Ιουν",
    "Ιουλ",
    "Αυγ",
    "Σεπ",
    "Οκτ",
    "Νοε",
    "Δεκ",
  ],

  wide: [
    "Ιανουαρίου",
    "Φεβρουαρίου",
    "Μαρτίου",
    "Απριλίου",
    "Μαΐου",
    "Ιουνίου",
    "Ιουλίου",
    "Αυγούστου",
    "Σεπτεμβρίου",
    "Οκτωβρίου",
    "Νοεμβρίου",
    "Δεκεμβρίου",
  ],
};

const dayValues = {
  narrow: ["Κ", "Δ", "T", "Τ", "Π", "Π", "Σ"],
  short: ["Κυ", "Δε", "Τρ", "Τε", "Πέ", "Πα", "Σά"],
  abbreviated: ["Κυρ", "Δευ", "Τρί", "Τετ", "Πέμ", "Παρ", "Σάβ"],
  wide: [
    "Κυριακή",
    "Δευτέρα",
    "Τρίτη",
    "Τετάρτη",
    "Πέμπτη",
    "Παρασκευή",
    "Σάββατο",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "πμ",
    pm: "μμ",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα",
  },
  abbreviated: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα",
  },
  wide: {
    am: "π.μ.",
    pm: "μ.μ.",
    midnight: "μεσάνυχτα",
    noon: "μεσημέρι",
    morning: "πρωί",
    afternoon: "απόγευμα",
    evening: "βράδυ",
    night: "νύχτα",
  },
};

const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;
  let suffix;

  if (unit === "year" || unit === "month") {
    suffix = "ος";
  } else if (
    unit === "week" ||
    unit === "dayOfYear" ||
    unit === "day" ||
    unit === "hour" ||
    unit === "date"
  ) {
    suffix = "η";
  } else {
    suffix = "ο";
  }

  return number + suffix;
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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: "wide",
  }),

  day: (0, _index.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0, _index.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
  }),
});
