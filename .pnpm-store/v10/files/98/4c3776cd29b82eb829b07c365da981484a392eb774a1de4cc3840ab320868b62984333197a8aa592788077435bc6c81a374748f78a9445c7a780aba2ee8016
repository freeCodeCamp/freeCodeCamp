import { type TTake } from './take.mjs';
type TIsDiscard<Discard extends string[], Input extends string> = (Discard extends [infer Left extends string, ...infer Right extends string[]] ? Input extends Left ? true : TIsDiscard<Right, Input> : false);
/** Takes characters from the Input until no-match. The Discard set is used to omit characters from the match */
export type TMany<Allowed extends string[], Discard extends string[], Input extends string, Result extends string = ''> = (TTake<Allowed, Input> extends [infer Char extends string, infer Rest extends string] ? TIsDiscard<Discard, Char> extends true ? TMany<Allowed, Discard, Rest, Result> : TMany<Allowed, Discard, Rest, `${Result}${Char}`> : [Result, Input]);
/** Takes characters from the Input until no-match. The Discard set is used to omit characters from the match */
export declare function Many<Allowed extends string[], Discard extends string[], Input extends string>(allowed: [...Allowed], discard: [...Discard], input: Input, result?: string): TMany<Allowed, Discard, Input>;
export {};
