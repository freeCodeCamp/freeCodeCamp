"use strict";
exports.ISOWeekYearParser = void 0;
var _index = require("../../../startOfISOWeek.cjs");
var _index2 = require("../../../constructFrom.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

// ISO week-numbering year
class ISOWeekYearParser extends _Parser.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return (0, _utils.parseNDigitsSigned)(4, dateString);
    }

    return (0, _utils.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = (0, _index2.constructFrom)(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return (0, _index.startOfISOWeek)(firstWeekOfYear);
  }

  incompatibleTokens = [
    "G",
    "y",
    "Y",
    "u",
    "Q",
    "q",
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
exports.ISOWeekYearParser = ISOWeekYearParser;
