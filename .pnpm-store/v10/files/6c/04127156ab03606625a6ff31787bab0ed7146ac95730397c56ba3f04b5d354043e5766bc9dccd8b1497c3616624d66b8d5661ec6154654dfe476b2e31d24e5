import { type TSchema } from '../../types/schema.mjs';
import { type TPattern } from '../../script/parser.mjs';
/** Parses a Pattern into a sequence of TemplateLiteral types. A result of [] indicates failure to parse. */
export type TParsePatternIntoTypes<Pattern extends string, Parsed extends [TSchema[], string] | [] = TPattern<Pattern>, Result extends TSchema[] = Parsed extends [infer Types extends TSchema[], string] ? Types : []> = Result;
/** Parses a Pattern into a sequence of TemplateLiteral types. A result of [] indicates failure to parse. */
export declare function ParsePatternIntoTypes<Pattern extends string>(pattern: Pattern): TParsePatternIntoTypes<Pattern>;
