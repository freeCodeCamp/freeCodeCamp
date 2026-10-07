import { startOfISOWeek } from "../../../startOfISOWeek.js";
import { constructFrom } from "../../../constructFrom.js";
import { Parser } from "../Parser.js";

import { parseNDigitsSigned } from "../utils.js";

// ISO week-numbering year
export class ISOWeekYearParser extends Parser {
  priority = 130;

  parse(dateString, token) {
    if (token === "R") {
      return parseNDigitsSigned(4, dateString);
    }

    return parseNDigitsSigned(token.length, dateString);
  }

  set(date, _flags, value) {
    const firstWeekOfYear = constructFrom(date, 0);
    firstWeekOfYear.setFullYear(value, 0, 4);
    firstWeekOfYear.setHours(0, 0, 0, 0);
    return startOfISOWeek(firstWeekOfYear);
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
