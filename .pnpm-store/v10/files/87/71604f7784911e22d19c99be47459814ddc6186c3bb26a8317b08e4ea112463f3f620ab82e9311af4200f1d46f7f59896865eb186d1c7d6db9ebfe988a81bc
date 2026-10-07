import type { LocaleDayPeriod, Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class AMPMParser extends Parser<LocaleDayPeriod> {
  priority: number;
  parse(
    dateString: string,
    token: string,
    match: Match,
  ): ParseResult<LocaleDayPeriod>;
  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: LocaleDayPeriod,
  ): DateType;
  incompatibleTokens: string[];
}
