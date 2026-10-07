"use strict";
exports.LocalWeekYearParser = void 0;
var _index = require("../../../getWeekYear.cjs");

var _index2 = require("../../../startOfWeek.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

// Local week-numbering year
class LocalWeekYearParser extends _Parser.Parser {
  priority = 130;

  parse(dateString, token, match) {
    const valueCallback = (year) => ({
      year,
      isTwoDigitYear: token === "YY",
    });

    switch (token) {
      case "Y":
        return (0, _utils.mapValue)(
          (0, _utils.parseNDigits)(4, dateString),
          valueCallback,
        );
      case "Yo":
        return (0, _utils.mapValue)(
          match.ordinalNumber(dateString, {
            unit: "year",
          }),
          valueCallback,
        );
      default:
        return (0, _utils.mapValue)(
          (0, _utils.parseNDigits)(token.length, dateString),
          valueCallback,
        );
    }
  }

  validate(_date, value) {
    return value.isTwoDigitYear || value.year > 0;
  }

  set(date, flags, value, options) {
    const currentYear = (0, _index.getWeekYear)(date, options);

    if (value.isTwoDigitYear) {
      const normalizedTwoDigitYear = (0, _utils.normalizeTwoDigitYear)(
        value.year,
        currentYear,
      );
      date.setFullYear(
        normalizedTwoDigitYear,
        0,
        options.firstWeekContainsDate,
      );
      date.setHours(0, 0, 0, 0);
      return (0, _index2.startOfWeek)(date, options);
    }

    const year =
      !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
    date.setFullYear(year, 0, options.firstWeekContainsDate);
    date.setHours(0, 0, 0, 0);
    return (0, _index2.startOfWeek)(date, options);
  }

  incompatibleTokens = [
    "y",
    "R",
    "u",
    "Q",
    "q",
    "M",
    "L",
    "I",
    "d",
    "D",
    "i",
    "t",
    "T",
  ];
}
exports.LocalWeekYearParser = LocalWeekYearParser;
