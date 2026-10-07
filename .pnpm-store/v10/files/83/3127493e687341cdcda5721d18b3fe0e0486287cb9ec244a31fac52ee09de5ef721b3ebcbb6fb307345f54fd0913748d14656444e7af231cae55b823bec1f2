// Type definitions for decimal.js >=7.0.0
// Project: https://github.com/MikeMcl/decimal.js
// Definitions by: Michael Mclaughlin <https://github.com/MikeMcl>
// Definitions: https://github.com/MikeMcl/decimal.js
//
// Documentation: http://mikemcl.github.io/decimal.js/
//
// Exports:
//
//   class     Decimal (default export)
//   type      Decimal.Constructor
//   type      Decimal.Instance
//   type      Decimal.Modulo
//   type      Decimal.Rounding
//   type      Decimal.Value
//   interface Decimal.Config
//
// Example (alternative syntax commented-out):
//
//   import {Decimal} from "decimal.js"
//   //import Decimal from "decimal.js"
//
//   let r: Decimal.Rounding = Decimal.ROUND_UP;
//   let c: Decimal.Configuration = {precision: 4, rounding: r};
//   Decimal.set(c);
//   let v: Decimal.Value = '12345.6789';
//   let d: Decimal = new Decimal(v);
//   //let d: Decimal.Instance = new Decimal(v);
//
// The use of compiler option `--strictNullChecks` is recommended.

export default Decimal;

export namespace Decimal {
  export type Constructor = typeof Decimal;
  export type Instance = Decimal;
  export type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  export type Modulo = Rounding | 9;
  export type Value = string | number | bigint | Decimal;

  // http://mikemcl.github.io/decimal.js/#constructor-properties
  export interface Config {
    precision?: number;
    rounding?: Rounding;
    toExpNeg?: number;
    toExpPos?: number;
    minE?: number;
    maxE?: number;
    crypto?: boolean;
    modulo?: Modulo;
    defaults?: boolean;
  }
}

export declare class Decimal {
  readonly d: number[];
  readonly e: number;
  readonly s: number;

  constructor(n: Decimal.Value);

  absoluteValue(): Decimal;
  abs(): Decimal;

  ceil(): Decimal;

  clampedTo(min: Decimal.Value, max: Decimal.Value): Decimal;
  clamp(min: Decimal.Value, max: Decimal.Value): Decimal;

  comparedTo(n: Decimal.Value): number;
  cmp(n: Decimal.Value): number;

  cosine(): Decimal;
  cos(): Decimal;

  cubeRoot(): Decimal;
  cbrt(): Decimal;

  decimalPlaces(): number;
  dp(): number;

  dividedBy(n: Decimal.Value): Decimal;
  div(n: Decimal.Value): Decimal;

  dividedToIntegerBy(n: Decimal.Value): Decimal;
  divToInt(n: Decimal.Value): Decimal;

  equals(n: Decimal.Value): boolean;
  eq(n: Decimal.Value): boolean;

  floor(): Decimal;

  greaterThan(n: Decimal.Value): boolean;
  gt(n: Decimal.Value): boolean;

  greaterThanOrEqualTo(n: Decimal.Value): boolean;
  gte(n: Decimal.Value): boolean;

  hyperbolicCosine(): Decimal;
  cosh(): Decimal;

  hyperbolicSine(): Decimal;
  sinh(): Decimal;

  hyperbolicTangent(): Decimal;
  tanh(): Decimal;

  inverseCosine(): Decimal;
  acos(): Decimal;

  inverseHyperbolicCosine(): Decimal;
  acosh(): Decimal;

  inverseHyperbolicSine(): Decimal;
  asinh(): Decimal;

  inverseHyperbolicTangent(): Decimal;
  atanh(): Decimal;

  inverseSine(): Decimal;
  asin(): Decimal;

  inverseTangent(): Decimal;
  atan(): Decimal;

  isFinite(): boolean;

  isInteger(): boolean;
  isInt(): boolean;

  isNaN(): boolean;

  isNegative(): boolean;
  isNeg(): boolean;

  isPositive(): boolean;
  isPos(): boolean;

  isZero(): boolean;

  lessThan(n: Decimal.Value): boolean;
  lt(n: Decimal.Value): boolean;

  lessThanOrEqualTo(n: Decimal.Value): boolean;
  lte(n: Decimal.Value): boolean;

  logarithm(n?: Decimal.Value): Decimal;
  log(n?: Decimal.Value): Decimal;

  minus(n: Decimal.Value): Decimal;
  sub(n: Decimal.Value): Decimal;

  modulo(n: Decimal.Value): Decimal;
  mod(n: Decimal.Value): Decimal;

  naturalExponential(): Decimal;
  exp(): Decimal;

  naturalLogarithm(): Decimal;
  ln(): Decimal;

  negated(): Decimal;
  neg(): Decimal;

  plus(n: Decimal.Value): Decimal;
  add(n: Decimal.Value): Decimal;

  precision(includeZeros?: boolean): number;
  sd(includeZeros?: boolean): number;

  round(): Decimal;

  sine() : Decimal;
  sin() : Decimal;

  squareRoot(): Decimal;
  sqrt(): Decimal;

  tangent() : Decimal;
  tan() : Decimal;

  times(n: Decimal.Value): Decimal;
  mul(n: Decimal.Value) : Decimal;

  toBinary(significantDigits?: number): string;
  toBinary(significantDigits: number, rounding: Decimal.Rounding): string;

  toDecimalPlaces(decimalPlaces?: number): Decimal;
  toDecimalPlaces(decimalPlaces: number, rounding: Decimal.Rounding): Decimal;
  toDP(decimalPlaces?: number): Decimal;
  toDP(decimalPlaces: number, rounding: Decimal.Rounding): Decimal;

  toExponential(decimalPlaces?: number): string;
  toExponential(decimalPlaces: number, rounding: Decimal.Rounding): string;

  toFixed(decimalPlaces?: number): string;
  toFixed(decimalPlaces: number, rounding: Decimal.Rounding): string;

  toFraction(max_denominator?: Decimal.Value): Decimal[];

  toHexadecimal(significantDigits?: number): string;
  toHexadecimal(significantDigits: number, rounding: Decimal.Rounding): string;
  toHex(significantDigits?: number): string;
  toHex(significantDigits: number, rounding?: Decimal.Rounding): string;

  toJSON(): string;

  toNearest(n: Decimal.Value, rounding?: Decimal.Rounding): Decimal;

  toNumber(): number;

  toOctal(significantDigits?: number): string;
  toOctal(significantDigits: number, rounding: Decimal.Rounding): string;

  toPower(n: Decimal.Value): Decimal;
  pow(n: Decimal.Value): Decimal;

  toPrecision(significantDigits?: number): string;
  toPrecision(significantDigits: number, rounding: Decimal.Rounding): string;

  toSignificantDigits(significantDigits?: number): Decimal;
  toSignificantDigits(significantDigits: number, rounding: Decimal.Rounding): Decimal;
  toSD(significantDigits?: number): Decimal;
  toSD(significantDigits: number, rounding: Decimal.Rounding): Decimal;

  toString(): string;

  truncated(): Decimal;
  trunc(): Decimal;

  valueOf(): string;

  static abs(n: Decimal.Value): Decimal;
  static acos(n: Decimal.Value): Decimal;
  static acosh(n: Decimal.Value): Decimal;
  static add(x: Decimal.Value, y: Decimal.Value): Decimal;
  static asin(n: Decimal.Value): Decimal;
  static asinh(n: Decimal.Value): Decimal;
  static atan(n: Decimal.Value): Decimal;
  static atanh(n: Decimal.Value): Decimal;
  static atan2(y: Decimal.Value, x: Decimal.Value): Decimal;
  static cbrt(n: Decimal.Value): Decimal;
  static ceil(n: Decimal.Value): Decimal;
  static clamp(n: Decimal.Value, min: Decimal.Value, max: Decimal.Value): Decimal;
  static clone(object?: Decimal.Config): Decimal.Constructor;
  static config(object: Decimal.Config): Decimal.Constructor;
  static cos(n: Decimal.Value): Decimal;
  static cosh(n: Decimal.Value): Decimal;
  static div(x: Decimal.Value, y: Decimal.Value): Decimal;
  static exp(n: Decimal.Value): Decimal;
  static floor(n: Decimal.Value): Decimal;
  static hypot(...n: Decimal.Value[]): Decimal;
  static isDecimal(object: any): object is Decimal;
  static ln(n: Decimal.Value): Decimal;
  static log(n: Decimal.Value, base?: Decimal.Value): Decimal;
  static log2(n: Decimal.Value): Decimal;
  static log10(n: Decimal.Value): Decimal;
  static max(...n: Decimal.Value[]): Decimal;
  static min(...n: Decimal.Value[]): Decimal;
  static mod(x: Decimal.Value, y: Decimal.Value): Decimal;
  static mul(x: Decimal.Value, y: Decimal.Value): Decimal;
  static noConflict(): Decimal.Constructor;   // Browser only
  static pow(base: Decimal.Value, exponent: Decimal.Value): Decimal;
  static random(significantDigits?: number): Decimal;
  static round(n: Decimal.Value): Decimal;
  static set(object: Decimal.Config): Decimal.Constructor;
  static sign(n: Decimal.Value): number;
  static sin(n: Decimal.Value): Decimal;
  static sinh(n: Decimal.Value): Decimal;
  static sqrt(n: Decimal.Value): Decimal;
  static sub(x: Decimal.Value, y: Decimal.Value): Decimal;
  static sum(...n: Decimal.Value[]): Decimal;
  static tan(n: Decimal.Value): Decimal;
  static tanh(n: Decimal.Value): Decimal;
  static trunc(n: Decimal.Value): Decimal;

  static readonly default?: Decimal.Constructor;
  static readonly Decimal?: Decimal.Constructor;

  static readonly precision: number;
  static readonly rounding: Decimal.Rounding;
  static readonly toExpNeg: number;
  static readonly toExpPos: number;
  static readonly minE: number;
  static readonly maxE: number;
  static readonly crypto: boolean;
  static readonly modulo: Decimal.Modulo;

  static readonly ROUND_UP: 0;
  static readonly ROUND_DOWN: 1;
  static readonly ROUND_CEIL: 2;
  static readonly ROUND_FLOOR: 3;
  static readonly ROUND_HALF_UP: 4;
  static readonly ROUND_HALF_DOWN: 5;
  static readonly ROUND_HALF_EVEN: 6;
  static readonly ROUND_HALF_CEIL: 7;
  static readonly ROUND_HALF_FLOOR: 8;
  static readonly EUCLID: 9;
}

export declare function Decimal(n: Decimal.Value): Decimal;
