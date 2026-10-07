import type { Day, Era, Month, Quarter } from "../../types.js";
import type {
  LocaleDayPeriod,
  LocaleUnitValue,
  LocaleWidth,
  LocalizeFn,
} from "../types.js";
export type BuildLocalizeFnArgs<
  Value extends LocaleUnitValue,
  ArgCallback extends LocalizeFnArgCallback<Value> | undefined,
> = {
  values: LocalizePeriodValuesMap<Value>;
  defaultWidth: LocaleWidth;
  formattingValues?: LocalizePeriodValuesMap<Value>;
  defaultFormattingWidth?: LocaleWidth;
} & (ArgCallback extends undefined
  ? {
      argumentCallback?: undefined;
    }
  : {
      argumentCallback: LocalizeFnArgCallback<Value>;
    });
/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */
export type LocalizeFnArgCallback<Value extends LocaleUnitValue | number> = (
  value: Value,
) => LocalizeUnitIndex<Value>;
/**
 * The map of localized values for each width.
 */
export type LocalizePeriodValuesMap<Value extends LocaleUnitValue> = {
  [Pattern in LocaleWidth]?: LocalizeValues<Value>;
};
/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */
export type LocalizeUnitIndex<Value extends LocaleUnitValue | number> =
  Value extends LocaleUnitValue ? keyof LocalizeValues<Value> : number;
/**
 * Converts the unit value to the tuple of values.
 */
export type LocalizeValues<Value extends LocaleUnitValue> =
  Value extends LocaleDayPeriod
    ? Record<LocaleDayPeriod, string>
    : Value extends Era
      ? LocalizeEraValues
      : Value extends Quarter
        ? LocalizeQuarterValues
        : Value extends Day
          ? LocalizeDayValues
          : Value extends Month
            ? LocalizeMonthValues
            : never;
/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */
export type LocalizeEraValues = readonly [string, string];
/**
 * The tuple of localized quarter values. The first element represents Q1.
 */
export type LocalizeQuarterValues = readonly [string, string, string, string];
/**
 * The tuple of localized day values. The first element represents Sunday.
 */
export type LocalizeDayValues = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
/**
 * The tuple of localized month values. The first element represents January.
 */
export type LocalizeMonthValues = readonly [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
export declare function buildLocalizeFn<
  Value extends LocaleUnitValue,
  ArgCallback extends LocalizeFnArgCallback<Value> | undefined,
>(args: BuildLocalizeFnArgs<Value, ArgCallback>): LocalizeFn<Value>;
