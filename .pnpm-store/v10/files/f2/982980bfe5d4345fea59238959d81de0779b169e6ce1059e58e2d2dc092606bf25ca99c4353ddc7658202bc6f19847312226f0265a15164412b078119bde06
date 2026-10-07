"use strict";
exports.ISOWeekParser = void 0;
var _index = require("../../../setISOWeek.cjs");
var _index2 = require("../../../startOfISOWeek.cjs");
var _constants = require("../constants.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

// ISO week of year
class ISOWeekParser extends _Parser.Parser {
  priority = 100;

  parse(dateString, token, match) {
    switch (token) {
      case "I":
        return (0, _utils.parseNumericPattern)(
          _constants.numericPatterns.week,
          dateString,
        );
      case "Io":
        return match.ordinalNumber(dateString, { unit: "week" });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 53;
  }

  set(date, _flags, value) {
    return (0, _index2.startOfISOWeek)((0, _index.setISOWeek)(date, value));
  }

  incompatibleTokens = [
    "y",
    "Y",
    "u",
    "q",
    "Q",
    "M",
    "L",
    "w",
    "d",
    "D",
    "e",
    "c",
    "t",
    "T",
  ];
}
exports.ISOWeekParser = ISOWeekParser;
