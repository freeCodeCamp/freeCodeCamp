import { constructFrom } from "../../../constructFrom.js";
import { Parser } from "../Parser.js";

import { parseAnyDigitsSigned } from "../utils.js";

export class TimestampSecondsParser extends Parser {
  priority = 40;

  parse(dateString) {
    return parseAnyDigitsSigned(dateString);
  }

  set(date, _flags, value) {
    return [constructFrom(date, value * 1000), { timestampIsSet: true }];
  }

  incompatibleTokens = "*";
}
