import type { Quarter, Era, Day, Month } from "../../types.js";
import type {
  LocaleUnitValue,
  LocaleWidth,
  LocaleDayPeriod,
  MatchFn,
  MatchValueCallback,
} from "../types.js";
export interface BuildMatchFnArgs<
  Result extends LocaleUnitValue,
  DefaultMatchWidth extends LocaleWidth,
  DefaultParseWidth extends LocaleWidth,
> {
  matchPatterns: BuildMatchFnMatchPatterns<DefaultMatchWidth>;
  defaultMatchWidth: DefaultMatchWidth;
  parsePatterns: BuildMatchFnParsePatterns<Result, DefaultParseWidth>;
  defaultParseWidth: DefaultParseWidth;
  valueCallback?: MatchValueCallback<
    Result extends LocaleDayPeriod ? string : number,
    Result
  >;
}
export type BuildMatchFnMatchPatterns<DefaultWidth extends LocaleWidth> = {
  [Width in LocaleWidth]?: RegExp;
} & {
  [Width in DefaultWidth]: RegExp;
};
export type BuildMatchFnParsePatterns<
  Value extends LocaleUnitValue,
  DefaultWidth extends LocaleWidth,
> = {
  [Width in LocaleWidth]?: ParsePattern<Value>;
} & {
  [Width in DefaultWidth]: ParsePattern<Value>;
};
export type ParsePattern<Value extends LocaleUnitValue> =
  Value extends LocaleDayPeriod
    ? Record<LocaleDayPeriod, RegExp>
    : Value extends Quarter
      ? readonly [RegExp, RegExp, RegExp, RegExp]
      : Value extends Era
        ? readonly [RegExp, RegExp]
        : Value extends Day
          ? readonly [RegExp, RegExp, RegExp, RegExp, RegExp, RegExp, RegExp]
          : Value extends Month
            ? readonly [
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
                RegExp,
              ]
            : never;
export declare function buildMatchFn<
  Value extends LocaleUnitValue,
  DefaultMatchWidth extends LocaleWidth,
  DefaultParseWidth extends LocaleWidth,
>(
  args: BuildMatchFnArgs<Value, DefaultMatchWidth, DefaultParseWidth>,
): MatchFn<Value>;
