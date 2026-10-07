import { type TUntil } from './until.mjs';
/** Match Input until but not including End. No match if End not found or match is zero-length. */
export type TUntil_1<End extends string[], Input extends string> = (TUntil<End, Input> extends [infer Until extends string, infer UntilRest extends string] ? Until extends '' ? [] : [Until, UntilRest] : []);
/** Match Input until but not including End. No match if End not found or match is zero-length. */
export declare function Until_1<End extends string[], Input extends string>(end: [...End], input: Input): TUntil_1<End, Input>;
