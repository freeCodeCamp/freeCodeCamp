import { type TTake } from './internal/take.mjs';
import { type TInteger } from './integer.mjs';
type TTakeBigInt<Input extends string> = (TInteger<Input> extends [infer Integer extends string, infer IntegerRest extends string] ? TTake<['n'], IntegerRest> extends [infer _N extends string, infer NRest extends string] ? [`${Integer}`, NRest] : [] : []);
/** Matches if next is a Integer literal with trailing 'n'. Trailing 'n' is omitted in result. */
export type TBigInt<Input extends string> = (TTakeBigInt<Input>);
/** Matches if next is a Integer literal with trailing 'n'. Trailing 'n' is omitted in result. */
export declare function BigInt<Input extends string>(input: Input): TBigInt<Input>;
export {};
