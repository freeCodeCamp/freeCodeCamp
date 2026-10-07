import { constructFrom } from "../../../constructFrom.js";
import { Parser } from "../Parser.js";

import { parseAnyDigitsSigned } from "../utils.js";

export class TimestampMillisecondsParser extends Parser {
  priority = 20;

  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }

  set(date, _flags, value) {
    return [constructFrom(date, value), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}
