"use strict";
exports.SecondParser = void 0;
var _constants = require("../constants.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

class SecondParser extends _Parser.Parser {
  priority = 50;

  parse(dateString, token, match) {
    switch (token) {
      case "s":
        return (0, _utils.parseNumericPattern)(
          _constants.numericPatterns.second,
          dateString,
        );
      case "so":
        return match.ordinalNumber(dateString, { unit: "second" });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setSeconds(value, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}
exports.SecondParser = SecondParser;
