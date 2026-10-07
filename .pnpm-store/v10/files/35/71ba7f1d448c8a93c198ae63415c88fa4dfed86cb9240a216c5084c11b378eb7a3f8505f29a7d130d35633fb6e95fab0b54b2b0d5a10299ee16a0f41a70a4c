import { type TTrim } from './internal/trim.mjs';
import { type TOptional } from './internal/optional.mjs';
import { type THyphen } from './internal/char.mjs';
import { type TUnsignedNumber } from './unsigned_number.mjs';
type TTakeSign<Input extends string> = (TOptional<THyphen, Input>);
type TTakeSignedNumber<Input extends string> = (TTakeSign<Input> extends [infer Sign extends string, infer SignRest extends string] ? TUnsignedNumber<SignRest> extends [infer UnsignedInteger extends string, infer UnsignedIntegerRest extends string] ? [`${Sign}${UnsignedInteger}`, UnsignedIntegerRest] : [] : []);
/** Matches if next is a signed or unsigned Number */
export type TNumber<Input extends string> = (TTakeSignedNumber<TTrim<Input>>);
/** Matches if next is a signed or unsigned Number */
export declare function Number<Input extends string>(input: Input): TNumber<Input>;
export {};
