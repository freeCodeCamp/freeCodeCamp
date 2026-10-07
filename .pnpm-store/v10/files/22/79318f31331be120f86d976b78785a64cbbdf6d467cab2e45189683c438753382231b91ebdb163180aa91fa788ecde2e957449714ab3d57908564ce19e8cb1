import { type TTake } from './internal/take.mjs';
import { type TTrim } from './internal/trim.mjs';
import { type TSpan } from './span.mjs';
type TTakeInitial<Quotes extends string[], Input extends string> = (TTake<Quotes, Input>);
type TTakeSpan<Quote extends string, Input extends string> = (TSpan<Quote, Quote, false, Input>);
type TTakeString<Quotes extends string[], Input extends string> = (TTakeInitial<Quotes, Input> extends [infer Initial extends string, infer InitialRest extends string] ? TTakeSpan<Initial, `${Initial}${InitialRest}`> : []);
/** Matches a literal String with the given quotes */
export type TString<Quotes extends string[], Input extends string> = (TTakeString<Quotes, TTrim<Input>>);
/** Matches a literal String with the given quotes */
export declare function String<Quotes extends string[], Input extends string>(quotes: [...Quotes], input: Input): TString<Quotes, Input>;
export {};
