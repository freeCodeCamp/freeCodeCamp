import { type TTrim } from './internal/trim.mjs';
import { type TTake } from './internal/take.mjs';
import { type TMany } from './internal/many.mjs';
import { type TDigit, type TUnderScore } from './internal/char.mjs';
import { type TDot } from './internal/char.mjs';
import { type TUnsignedInteger } from './unsigned_integer.mjs';
type TAllowedDigits = [...TDigit, TUnderScore];
type TIsLeadingDot<Input extends string> = (TTake<[TDot], Input> extends [string, string] ? true : false);
type TTakeFractional<Input extends string> = (TMany<TAllowedDigits, [TUnderScore], Input> extends [infer Digits extends string, infer DigitsRest extends string] ? Digits extends '' ? [] : [Digits, DigitsRest] : []);
type TLeadingDot<Input extends string> = (TTake<[TDot], Input> extends [infer Dot extends string, infer DotRest extends string] ? TTakeFractional<DotRest> extends [infer Fractional extends string, infer FractionalRest extends string] ? [`0${Dot}${Fractional}`, FractionalRest] : [] : []);
type TLeadingInteger<Input extends string> = (TUnsignedInteger<Input> extends [infer Integer extends string, infer IntegerRest extends string] ? TTake<[TDot], IntegerRest> extends [infer Dot extends string, infer DotRest extends string] ? TTakeFractional<DotRest> extends [infer Fractional extends string, infer FractionalRest extends string] ? [`${Integer}${Dot}${Fractional}`, FractionalRest] : [`${Integer}`, DotRest] : [`${Integer}`, IntegerRest] : []);
type TTakeUnsignedNumber<Input extends string> = (TIsLeadingDot<Input> extends true ? TLeadingDot<Input> : TLeadingInteger<Input>);
/** Matches if next is a UnsignedNumber */
export type TUnsignedNumber<Input extends string> = (TTakeUnsignedNumber<TTrim<Input>>);
/** Matches if next is a UnsignedNumber */
export declare function UnsignedNumber<Input extends string>(input: Input): TUnsignedNumber<Input>;
export {};
