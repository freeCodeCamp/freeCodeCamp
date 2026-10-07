import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class ISOWeekYearParser extends Parser<number> {
  priority: number;
  parse(dateString: string, token: string): ParseResult<number>;
  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType;
  incompatibleTokens: string[];
}
