import type { Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult, ParserOptions } from "../types.js";
export declare class StandAloneLocalDayParser extends Parser<number> {
  priority: number;
  parse(
    dateString: string,
    token: string,
    match: Match,
    options: ParserOptions,
  ): ParseResult<number>;
  validate<DateType extends Date>(_date: DateType, value: number): boolean;
  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
    options: ParserOptions,
  ): DateType;
  incompatibleTokens: string[];
}
