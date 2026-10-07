import { type TTrim } from './internal/trim.mjs';
import { type TOptional } from './internal/optional.mjs';
import { type THyphen } from './internal/char.mjs';
import { type TUnsignedInteger } from './unsigned_integer.mjs';
type TTakeSign<Input extends string> = (TOptional<THyphen, Input>);
type TTakeSignedInteger<Input extends string> = (TTakeSign<Input> extends [infer Sign extends string, infer SignRest extends string] ? TUnsignedInteger<SignRest> extends [infer UnsignedInteger extends string, infer UnsignedIntegerRest extends string] ? [`${Sign}${UnsignedInteger}`, UnsignedIntegerRest] : [] : []);
/** Matches if next is a signed or unsigned Integer */
export type TInteger<Input extends string> = (TTakeSignedInteger<TTrim<Input>>);
/** Matches if next is a signed or unsigned Integer */
export declare function Integer<Input extends string>(input: Input): TInteger<Input>;
export {};
