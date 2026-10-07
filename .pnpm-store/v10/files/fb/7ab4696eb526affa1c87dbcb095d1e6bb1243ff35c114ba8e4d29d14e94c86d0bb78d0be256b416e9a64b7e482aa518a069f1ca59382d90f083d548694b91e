"use strict";
exports.ISOTimezoneParser = void 0;
var _index = require("../../../constructFrom.cjs");
var _index2 = require("../../../_lib/getTimezoneOffsetInMilliseconds.cjs");
var _constants = require("../constants.cjs");
var _Parser = require("../Parser.cjs");

var _utils = require("../utils.cjs");

// Timezone (ISO-8601)
class ISOTimezoneParser extends _Parser.Parser {
  priority = 10;

  parse(dateString, token) {
    switch (token) {
      case "x":
        return (0, _utils.parseTimezonePattern)(
          _constants.timezonePatterns.basicOptionalMinutes,
          dateString,
        );
      case "xx":
        return (0, _utils.parseTimezonePattern)(
          _constants.timezonePatterns.basic,
          dateString,
        );
      case "xxxx":
        return (0, _utils.parseTimezonePattern)(
          _constants.timezonePatterns.basicOptionalSeconds,
          dateString,
        );
      case "xxxxx":
        return (0, _utils.parseTimezonePattern)(
          _constants.timezonePatterns.extendedOptionalSeconds,
          dateString,
        );
      case "xxx":
      default:
        return (0, _utils.parseTimezonePattern)(
          _constants.timezonePatterns.extended,
          dateString,
        );
    }
  }

  set(date, flags, value) {
    if (flags.timestampIsSet) return date;
    return (0, _index.constructFrom)(
      date,
      date.getTime() -
        (0, _index2.getTimezoneOffsetInMilliseconds)(date) -
        value,
    );
  }

  incompatibleTokens = ["t", "T", "X"];
}
exports.ISOTimezoneParser = ISOTimezoneParser;
