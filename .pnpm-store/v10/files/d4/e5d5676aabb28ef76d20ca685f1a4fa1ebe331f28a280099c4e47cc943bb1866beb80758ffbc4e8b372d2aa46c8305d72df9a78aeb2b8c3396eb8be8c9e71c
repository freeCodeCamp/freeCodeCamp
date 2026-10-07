import { type TTrim } from './internal/trim.mjs';
import { type TTake } from './internal/take.mjs';
import { type TMany } from './internal/many.mjs';
import { type TDigit } from './internal/char.mjs';
import { type TZero } from './internal/char.mjs';
import { type TNonZero } from './internal/char.mjs';
import { type TUnderScore } from './internal/char.mjs';
type TTakeNonZero<Input extends string> = (TTake<TNonZero, Input>);
type TAllowedDigits = [...TDigit, TUnderScore];
type TTakeDigits<Input extends string> = (TMany<TAllowedDigits, [TUnderScore], Input>);
type TTakeUnsignedInteger<Input extends string> = (TTake<[TZero], Input> extends [infer Zero extends string, infer ZeroRest extends string] ? [Zero, ZeroRest] : TTakeNonZero<Input> extends [infer NonZero extends string, infer NonZeroRest extends string] ? TTakeDigits<NonZeroRest> extends [infer Digits extends string, infer DigitsRest extends string] ? [`${NonZero}${Digits}`, DigitsRest] : [] : []);
/** Matches if next is a UnsignedInteger */
export type TUnsignedInteger<Input extends string> = (TTakeUnsignedInteger<TTrim<Input>>);
/** Matches if next is a UnsignedInteger */
export declare function UnsignedInteger<Input extends string>(input: Input): TUnsignedInteger<Input>;
export {};
