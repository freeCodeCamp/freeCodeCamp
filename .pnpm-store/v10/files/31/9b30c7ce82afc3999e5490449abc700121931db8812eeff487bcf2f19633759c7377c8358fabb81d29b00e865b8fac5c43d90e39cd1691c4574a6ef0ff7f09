import type { ContextOptions, DateArg } from "./types.js";
/**
 * The {@link closestTo} function options.
 */
export interface ClosestToOptions<DateType extends Date = Date>
  extends ContextOptions<DateType> {}
/**
 * The {@link closestTo} function result type. It resolves the proper data type.
 * It uses the first argument date object type, starting from the date argument,
 * then the start interval date, and finally the end interval date. If
 * a context function is passed, it uses the context function return type.
 */
export type ClosestToResult<
  DateToCompare extends DateArg<Date>,
  DatesType extends DateArg<Date>[],
  Options extends ClosestToOptions | undefined,
> =
  Options extends ClosestToOptions<infer DateType extends Date>
    ? DateType
    : DateToCompare extends Date
      ? DateToCompare
      : DatesType extends DateArg<infer DateType>[]
        ? DateType
        : Date;
/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateToCompare - Date to compare argument type.
 * @typeParam DatesType - Dates array argument type.
 * @typeParam Options - Options type.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
export declare function closestTo<
  DateToCompare extends DateArg<Date>,
  DatesType extends DateArg<Date>[],
  Options extends ClosestToOptions | undefined = undefined,
>(
  dateToCompare: DateToCompare,
  dates: DatesType,
  options?: Options | undefined,
): ClosestToResult<DateToCompare, DatesType, Options> | undefined;
