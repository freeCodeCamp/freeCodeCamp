import { type TTrimWhitespace } from './internal/trim.mjs';
import { type TTrim } from './internal/trim.mjs';
import { type TTake } from './internal/take.mjs';
import { type TNewLine } from './internal/char.mjs';
import { type TWhiteSpace } from './internal/char.mjs';
type TTakeConst<Const extends string, Input extends string> = (TTake<[Const], Input>);
/** Matches if next is the given Const value */
export type TConst<Const extends string, Input extends string> = (Const extends '' ? ['', Input] : Const extends `${infer First extends string}${string}` ? (First extends TNewLine ? TTakeConst<Const, TTrimWhitespace<Input>> : First extends TWhiteSpace ? TTakeConst<Const, Input> : TTakeConst<Const, TTrim<Input>>) : never);
/** Matches if next is the given Const value */
export declare function Const<Const extends string, Input extends string>(const_: Const, input: Input): TConst<Const, Input>;
export {};
