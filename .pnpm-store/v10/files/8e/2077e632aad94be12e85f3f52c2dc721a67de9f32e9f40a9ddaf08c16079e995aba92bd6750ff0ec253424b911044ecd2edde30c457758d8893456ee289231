import type { Match } from "../../../locale/types.js";
import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export interface YearParserValue {
  year: number;
  isTwoDigitYear: boolean;
}
export declare class YearParser extends Parser<YearParserValue> {
  priority: number;
  incompatibleTokens: string[];
  parse(
    dateString: string,
    token: string,
    match: Match,
  ): ParseResult<YearParserValue>;
  validate<DateType extends Date>(
    _date: DateType,
    value: YearParserValue,
  ): boolean;
  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: YearParserValue,
  ): DateType;
}
