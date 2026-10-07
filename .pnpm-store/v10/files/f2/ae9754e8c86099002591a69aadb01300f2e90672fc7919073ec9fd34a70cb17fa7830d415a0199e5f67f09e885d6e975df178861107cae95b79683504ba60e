import type { LocaleDayPeriod } from "../../locale/types.js";
import type { ParseResult } from "./types.js";
export declare function mapValue<TInput, TResult>(
  parseFnResult: ParseResult<TInput>,
  mapFn: (value: TInput) => TResult,
): ParseResult<TResult>;
export declare function parseNumericPattern(
  pattern: RegExp,
  dateString: string,
): ParseResult<number>;
export declare function parseTimezonePattern(
  pattern: RegExp,
  dateString: string,
): ParseResult<number>;
export declare function parseAnyDigitsSigned(
  dateString: string,
): ParseResult<number>;
export declare function parseNDigits(
  n: number,
  dateString: string,
): ParseResult<number>;
export declare function parseNDigitsSigned(
  n: number,
  dateString: string,
): ParseResult<number>;
export declare function dayPeriodEnumToHours(
  dayPeriod: LocaleDayPeriod,
): number;
export declare function normalizeTwoDigitYear(
  twoDigitYear: number,
  currentYear: number,
): number;
export declare function isLeapYearIndex(year: number): boolean;
