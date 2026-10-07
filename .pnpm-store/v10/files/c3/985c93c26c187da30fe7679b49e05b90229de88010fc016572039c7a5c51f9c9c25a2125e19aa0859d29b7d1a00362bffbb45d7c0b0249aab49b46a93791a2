import { type TTrim } from './internal/trim.mjs';
import { type TTake } from './internal/take.mjs';
import { type TAlpha } from './internal/char.mjs';
import { type TDigit } from './internal/char.mjs';
import { type TUnderScore } from './internal/char.mjs';
import { type TDollarSign } from './internal/char.mjs';
type TInitial = [...TAlpha, TUnderScore, TDollarSign];
type TTakeInitial<Input extends string> = (TTake<TInitial, Input>);
type TRemaining = [...TInitial, ...TDigit];
type TTakeRemaining<Input extends string, Result extends string = ''> = (TTake<TRemaining, Input> extends [infer Remaining extends string, infer RemainingRest extends string] ? TTakeRemaining<RemainingRest, `${Result}${Remaining}`> : [Result, Input]);
type TTakeIdent<Input extends string> = (TTakeInitial<Input> extends [infer Initial extends string, infer InitialRest extends string] ? TTakeRemaining<InitialRest> extends [infer Remaining extends string, infer RemainingRest extends string] ? [`${Initial}${Remaining}`, RemainingRest] : [] : []);
/** Matches if next is an Ident */
export type TIdent<Input extends string> = (TTakeIdent<TTrim<Input>>);
/** Matches if next is an Ident */
export declare function Ident<Input extends string>(input: Input): TIdent<Input>;
export {};
