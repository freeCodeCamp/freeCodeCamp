"use strict";
exports.ExtendedYearParser = void 0;
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

class ExtendedYearParser extends _Parser.Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "u") {
      return (0, _utils.parseNDigitsSigned)(4, dateString);
    }

    return (0, _utils.parseNDigitsSigned)(token.length, dateString);
  }

  set(date, _flags, value) {
    date.setFullYear(value, 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
}
exports.ExtendedYearParser = ExtendedYearParser;
