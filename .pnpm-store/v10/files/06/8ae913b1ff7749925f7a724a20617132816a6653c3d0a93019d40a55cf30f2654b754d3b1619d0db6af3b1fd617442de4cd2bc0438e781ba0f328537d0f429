import { Parser } from "../Parser.js";
import type { ParseFlags, ParseResult } from "../types.js";
export declare class TimestampSecondsParser extends Parser<number> {
  priority: number;
  parse(dateString: string): ParseResult<number>;
  set<DateType extends Date>(
    date: DateType,
    _flags: ParseFlags,
    value: number,
  ): [DateType, ParseFlags];
  incompatibleTokens: "*";
}
