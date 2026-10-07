import type { Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class DayOfYearParser extends Parser<number> {
  priority: number;
  subpriority: number;
  parse(dateString: string, token: string, match: Match): ParseResult<number>;
  validate<DateType extends Date>(date: DateType, value: number): boolean;
  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): DateType;
  incompatibleTokens: string[];
}
