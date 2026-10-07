"use strict";
exports.Hour1to12Parser = void 0;
var _constants = require("../constants.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

class Hour1to12Parser extends _Parser.Parser {
  priority = 70;

  parse(dateString, token, match) {
    switch (token) {
      case "h":
        return (0, _utils.parseNumericPattern)(
          _constants.numericPatterns.hour12h,
          dateString,
        );
      case "ho":
        return match.ordinalNumber(dateString, { unit: "hour" });
      default:
        return (0, _utils.parseNDigits)(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 1 && value <= 12;
  }

  set(date, _flags, value) {
    const isPM = date.getHours() >= 12;
    if (isPM && value < 12) {
      date.setHours(value + 12, 0, 0, 0);
    } else if (!isPM && value === 12) {
      date.setHours(0, 0, 0, 0);
    } else {
      date.setHours(value, 0, 0, 0);
    }
    return date;
  }

  incompatibleTokens = ["H", "K", "k", "t", "T"];
}
exports.Hour1to12Parser = Hour1to12Parser;
