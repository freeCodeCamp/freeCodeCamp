import type { Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class MonthParser extends Parser<number> {
  incompatibleTokens: string[];
  priority: number;
  parse(dateString: string, token: string, match: Match): ParseResult<number>;
  validate<DateType extends Date>(_date: DateType, value: number): boolean;
  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType;
}
