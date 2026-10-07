"use strict";
exports.TimestampSecondsParser = void 0;
var _index = require("../../../constructFrom.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

class TimestampSecondsParser extends _Parser.Parser {
  priority = 40;

  parse(dateString) {
    return (0, _utils.parseAnyDigitsSigned)(dateString);
  }

  set(date, _flags, value) {
    return [
      (0, _index.constructFrom)(date, value * 1000),
      { timestampIsSet: true },
    ];
  }

  incompatibleTokens = "*";
}
exports.TimestampSecondsParser = TimestampSecondsParser;
