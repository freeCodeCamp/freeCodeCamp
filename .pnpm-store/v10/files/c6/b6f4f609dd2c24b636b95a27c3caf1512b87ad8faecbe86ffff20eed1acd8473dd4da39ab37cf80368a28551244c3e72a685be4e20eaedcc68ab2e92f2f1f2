import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class ISOTimezoneWithZParser extends Parser<number> {
  priority: number;
  parse(dateString: string, token: string): ParseResult<number>;
  set<DateType extends Date>(
    date: DateType,
    flags: ParseFlags,
    value: number,
  ): DateType;
  incompatibleTokens: string[];
}
