"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

const eraValues = {
  narrow: ["ჩ.წ-მდე", "ჩ.წ"],
  abbreviated: ["ჩვ.წ-მდე", "ჩვ.წ"],
  wide: ["ჩვენს წელთაღრიცხვამდე", "ჩვენი წელთაღრიცხვით"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1-ლი კვ", "2-ე კვ", "3-ე კვ", "4-ე კვ"],
  wide: ["1-ლი კვარტალი", "2-ე კვარტალი", "3-ე კვარტალი", "4-ე კვარტალი"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: [
    "ია",
    "თე",
    "მა",
    "აპ",
    "მს",
    "ვნ",
    "ვლ",
    "აგ",
    "სე",
    "ოქ",
    "ნო",
    "დე",
  ],

  abbreviated: [
    "იან",
    "თებ",
    "მარ",
    "აპრ",
    "მაი",
    "ივნ",
    "ივლ",
    "აგვ",
    "სექ",
    "ოქტ",
    "ნოე",
    "დეკ",
  ],

  wide: [
    "იანვარი",
    "თებერვალი",
    "მარტი",
    "აპრილი",
    "მაისი",
    "ივნისი",
    "ივლისი",
    "აგვისტო",
    "სექტემბერი",
    "ოქტომბერი",
    "ნოემბერი",
    "დეკემბერი",
  ],
};

const dayValues = {
  narrow: ["კვ", "ორ", "სა", "ოთ", "ხუ", "პა", "შა"],
  short: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
  abbreviated: ["კვი", "ორშ", "სამ", "ოთხ", "ხუთ", "პარ", "შაბ"],
  wide: [
    "კვირა",
    "ორშაბათი",
    "სამშაბათი",
    "ოთხშაბათი",
    "ხუთშაბათი",
    "პარასკევი",
    "შაბათი",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "შუაღამე",
    noon: "შუადღე",
    morning: "დილა",
    afternoon: "საღამო",
    evening: "საღამო",
    night: "ღამე",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "შუაღამე",
    noon: "შუადღე",
    morning: "დილა",
    afternoon: "საღამო",
    evening: "საღამო",
    night: "ღამე",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "შუაღამე",
    noon: "შუადღე",
    morning: "დილა",
    afternoon: "საღამო",
    evening: "საღამო",
    night: "ღამე",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "შუაღამით",
    noon: "შუადღისას",
    morning: "დილით",
    afternoon: "ნაშუადღევს",
    evening: "საღამოს",
    night: "ღამით",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "შუაღამით",
    noon: "შუადღისას",
    morning: "დილით",
    afternoon: "ნაშუადღევს",
    evening: "საღამოს",
    night: "ღამით",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "შუაღამით",
    noon: "შუადღისას",
    morning: "დილით",
    afternoon: "ნაშუადღევს",
    evening: "საღამოს",
    night: "ღამით",
  },
};

const ordinalNumber = (dirtyNumber) => {
  const number = Number(dirtyNumber);

  if (number === 1) {
    return number + "-ლი";
  }

  return number + "-ე";
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
