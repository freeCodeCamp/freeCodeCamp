declare class Fraction {
  constructor();
  constructor(num: Fraction.FractionInput);
  constructor(numerator: number | bigint, denominator: number | bigint);

  s: bigint;
  n: bigint;
  d: bigint;

  abs(): Fraction;
  neg(): Fraction;

  add: Fraction.FractionParam;
  sub: Fraction.FractionParam;
  mul: Fraction.FractionParam;
  div: Fraction.FractionParam;
  pow: Fraction.FractionParam;
  log: Fraction.FractionParam;
  gcd: Fraction.FractionParam;
  lcm: Fraction.FractionParam;

  mod(): Fraction;
  mod(num: Fraction.FractionInput): Fraction;

  ceil(places?: number): Fraction;
  floor(places?: number): Fraction;
  round(places?: number): Fraction;
  roundTo: Fraction.FractionParam;

  inverse(): Fraction;
  simplify(eps?: number): Fraction;

  equals(num: Fraction.FractionInput): boolean;
  lt(num: Fraction.FractionInput): boolean;
  lte(num: Fraction.FractionInput): boolean;
  gt(num: Fraction.FractionInput): boolean;
  gte(num: Fraction.FractionInput): boolean;
  compare(num: Fraction.FractionInput): number;
  divisible(num: Fraction.FractionInput): boolean;

  valueOf(): number;
  toString(decimalPlaces?: number): string;
  toLatex(showMixed?: boolean): string;
  toFraction(showMixed?: boolean): string;
  toContinued(): bigint[];
  clone(): Fraction;

  static default: typeof Fraction;
  static Fraction: typeof Fraction;
}

declare namespace Fraction {
  interface NumeratorDenominator { n: number | bigint; d: number | bigint; }
  type FractionInput =
    | Fraction
    | number
    | bigint
    | string
    | [number | bigint | string, number | bigint | string]
    | NumeratorDenominator;

  type FractionParam = {
    (numerator: number | bigint, denominator: number | bigint): Fraction;
    (num: FractionInput): Fraction;
  };
}

/**
 * Export matches CJS runtime:
 *   module.exports = Fraction;
 *   module.exports.default  = Fraction;
 *   module.exports.Fraction = Fraction;
 */
declare const FractionExport: typeof Fraction & {
  default: typeof Fraction;
  Fraction: typeof Fraction;
};

export = FractionExport;