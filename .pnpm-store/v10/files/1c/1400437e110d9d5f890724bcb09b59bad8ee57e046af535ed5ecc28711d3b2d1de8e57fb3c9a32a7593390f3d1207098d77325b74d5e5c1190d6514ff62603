import type { Match } from "../../../locale/types.js";
import type { Era } from "../../../types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class EraParser extends Parser<number> {
  priority: number;
  parse(dateString: string, token: string, match: Match): ParseResult<Era>;
  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: number,
  ): DateType;
  incompatibleTokens: string[];
}
