import { numericPatterns } from "../constants.js";
import { Parser } from "../Parser.js";

import { parseNDigits, parseNumericPattern } from "../utils.js";

export class MinuteParser extends Parser {
  priority = 60;

  parse(dateString, token, match) {
    switch (token) {
      case "m":
        return parseNumericPattern(numericPatterns.minute, dateString);
      case "mo":
        return match.ordinalNumber(dateString, { unit: "minute" });
      default:
        return parseNDigits(token.length, dateString);
    }
  }

  validate(_date, value) {
    return value >= 0 && value <= 59;
  }

  set(date, _flags, value) {
    date.setMinutes(value, 0, 0);
    return date;
  }

  incompatibleTokens = ["t", "T"];
}
