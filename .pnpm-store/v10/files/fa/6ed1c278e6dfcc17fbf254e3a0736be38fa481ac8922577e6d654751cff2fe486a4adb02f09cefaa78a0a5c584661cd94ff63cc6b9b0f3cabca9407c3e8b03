"use strict";
exports.localize = void 0;
var _index = require("../../_lib/buildLocalizeFn.cjs");

// Vietnamese locale reference: http://www.localeplanet.com/icu/vi-VN/index.html
// Capitalization reference: http://hcmup.edu.vn/index.php?option=com_content&view=article&id=4106%3Avit-hoa-trong-vn-bn-hanh-chinh&catid=2345%3Atham-kho&Itemid=4103&lang=vi&site=134

const eraValues = {
  narrow: ["TCN", "SCN"],
  abbreviated: ["trước CN", "sau CN"],
  wide: ["trước Công Nguyên", "sau Công Nguyên"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["Quý 1", "Quý 2", "Quý 3", "Quý 4"],
};

const formattingQuarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  // I notice many news outlet use this "quý II/2018"
  wide: ["quý I", "quý II", "quý III", "quý IV"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],

  abbreviated: [
    "Thg 1",
    "Thg 2",
    "Thg 3",
    "Thg 4",
    "Thg 5",
    "Thg 6",
    "Thg 7",
    "Thg 8",
    "Thg 9",
    "Thg 10",
    "Thg 11",
    "Thg 12",
  ],

  wide: [
    "Tháng Một",
    "Tháng Hai",
    "Tháng Ba",
    "Tháng Tư",
    "Tháng Năm",
    "Tháng Sáu",
    "Tháng Bảy",
    "Tháng Tám",
    "Tháng Chín",
    "Tháng Mười",
    "Tháng Mười Một",
    "Tháng Mười Hai",
  ],
};
// In Vietnamese date formatting, month number less than 10 expected to have leading zero
const formattingMonthValues = {
  narrow: [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ],

  abbreviated: [
    "thg 1",
    "thg 2",
    "thg 3",
    "thg 4",
    "thg 5",
    "thg 6",
    "thg 7",
    "thg 8",
    "thg 9",
    "thg 10",
    "thg 11",
    "thg 12",
  ],

  wide: [
    "tháng 01",
    "tháng 02",
    "tháng 03",
    "tháng 04",
    "tháng 05",
    "tháng 06",
    "tháng 07",
    "tháng 08",
    "tháng 09",
    "tháng 10",
    "tháng 11",
    "tháng 12",
  ],
};

const dayValues = {
  narrow: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  short: ["CN", "Th 2", "Th 3", "Th 4", "Th 5", "Th 6", "Th 7"],
  abbreviated: ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],

  wide: [
    "Chủ Nhật",
    "Thứ Hai",
    "Thứ Ba",
    "Thứ Tư",
    "Thứ Năm",
    "Thứ Sáu",
    "Thứ Bảy",
  ],
};

// Vietnamese are used to AM/PM borrowing from English, hence `narrow` and
// `abbreviated` are just like English but I'm leaving the `wide`
// format being localized with abbreviations found in some systems (SÁng / CHiều);
// however, personally, I don't think `Chiều` sounds appropriate for `PM`
const dayPeriodValues = {
  // narrow date period is extremely rare in Vietnamese
  // I used abbreviated form for noon, morning and afternoon
  // which are regconizable by Vietnamese, others cannot be any shorter
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm",
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "nửa đêm",
    noon: "tr",
    morning: "sg",
    afternoon: "ch",
    evening: "tối",
    night: "đêm",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nửa đêm",
    noon: "trưa",
    morning: "sáng",
    afternoon: "chiều",
    evening: "tối",
    night: "đêm",
  },
  wide: {
    am: "SA",
    pm: "CH",
    midnight: "nửa đêm",
    noon: "giữa trưa",
    morning: "vào buổi sáng",
    afternoon: "vào buổi chiều",
    evening: "vào buổi tối",
    night: "vào ban đêm",
  },
};

const ordinalNumber = (dirtyNumber, options) => {
  const number = Number(dirtyNumber);
  const unit = options?.unit;

  if (unit === "quarter") {
    // many news outlets use "quý I"...
    switch (number) {
      case 1:
        return "I";
      case 2:
        return "II";
      case 3:
        return "III";
      case 4:
        return "IV";
    }
  } else if (unit === "day") {
    // day of week in Vietnamese has ordinal number meaning,
    // so we should use them, else it'll sound weird
    switch (number) {
      case 1:
        return "thứ 2"; // meaning 2nd day but it's the first day of the week :D
      case 2:
        return "thứ 3"; // meaning 3rd day
      case 3:
        return "thứ 4"; // meaning 4th day and so on
      case 4:
        return "thứ 5";
      case 5:
        return "thứ 6";
      case 6:
        return "thứ 7";
      case 7:
        return "chủ nhật"; // meaning Sunday, there's no 8th day :D
    }
  } else if (unit === "week") {
    if (number === 1) {
      return "thứ nhất";
    } else {
      return "thứ " + number;
    }
  } else if (unit === "dayOfYear") {
    if (number === 1) {
      return "đầu tiên";
    } else {
      return "thứ " + number;
    }
  }

  // there are no different forms of ordinal numbers in Vietnamese
  return String(number);
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
    formattingValues: formattingQuarterValues,
    defaultFormattingWidth: "wide",
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
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
});
