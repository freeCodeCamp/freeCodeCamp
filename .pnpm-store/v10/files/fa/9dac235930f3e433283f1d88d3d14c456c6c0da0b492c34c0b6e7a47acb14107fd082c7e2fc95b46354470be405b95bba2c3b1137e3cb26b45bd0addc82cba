/**
 * Interface representing a fraction with numerator and denominator.
 */
export interface NumeratorDenominator {
    n: number | bigint;
    d: number | bigint;
}

/**
 * Type for handling multiple types of input for Fraction operations.
 */
export type FractionInput =
    | Fraction
    | number
    | bigint
    | string
    | [number | bigint | string, number | bigint | string]
    | NumeratorDenominator;

/**
 * Function signature for Fraction operations like add, sub, mul, etc.
 */
export type FractionParam = {
    (numerator: number | bigint, denominator: number | bigint): Fraction;
    (num: FractionInput): Fraction;
};

/**
 * Fraction class representing a rational number with numerator and denominator.
 */
declare class Fraction {
    constructor();
    constructor(num: FractionInput);
    constructor(numerator: number | bigint, denominator: number | bigint);

    s: bigint;
    n: bigint;
    d: bigint;

    abs(): Fraction;
    neg(): Fraction;

    add: FractionParam;
    sub: FractionParam;
    mul: FractionParam;
    div: FractionParam;
    pow: FractionParam;
    log: FractionParam;
    gcd: FractionParam;
    lcm: FractionParam;

    mod(): Fraction;
    mod(num: FractionInput): Fraction;

    ceil(places?: number): Fraction;
    floor(places?: number): Fraction;
    round(places?: number): Fraction;
    roundTo: FractionParam;

    inverse(): Fraction;
    simplify(eps?: number): Fraction;

    equals(num: FractionInput): boolean;
    lt(num: FractionInput): boolean;
    lte(num: FractionInput): boolean;
    gt(num: FractionInput): boolean;
    gte(num: FractionInput): boolean;
    compare(num: FractionInput): number;
    divisible(num: FractionInput): boolean;

    valueOf(): number;
    toString(decimalPlaces?: number): string;
    toLatex(showMixed?: boolean): string;
    toFraction(showMixed?: boolean): string;
    toContinued(): bigint[];
    clone(): Fraction;
}

export { Fraction as default, Fraction };