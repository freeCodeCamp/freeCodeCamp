import type { Localize } from "../../types.js";
type hiLocaleNumberType =
  | "\u0967"
  | "\u0968"
  | "\u0969"
  | "\u096A"
  | "\u096B"
  | "\u096C"
  | "\u096D"
  | "\u096E"
  | "\u096F"
  | "\u0966";
type enLocaleNumberType =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "0";
type enHiLocaleNumberType = {
  [enNumber in enLocaleNumberType]: hiLocaleNumberType;
};
type hiLocaleEnNumberType = {
  [hiNumber in hiLocaleNumberType]: enLocaleNumberType;
};
export interface hiLocaleNumberValuesType {
  locale: enHiLocaleNumberType;
  number: hiLocaleEnNumberType;
}
export declare function localeToNumber(locale: string): number;
export declare function numberToLocale(enNumber: number): string;
export declare const localize: Localize;
export {};
