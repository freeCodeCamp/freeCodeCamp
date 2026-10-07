import { type TSchema } from '../../types/schema.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TUnion } from '../../types/union.mjs';
type TKeysToLiterals<Keys extends PropertyKey[], Result extends TLiteral[] = []> = (Keys extends [infer Left extends PropertyKey, ...infer Right extends PropertyKey[]] ? (Left extends TLiteralValue ? TKeysToLiterals<Right, [...Result, TLiteral<Left>]> : TKeysToLiterals<Right, Result>) : Result);
export type TKeysToIndexer<Keys extends PropertyKey[], Literals extends TLiteral[] = TKeysToLiterals<Keys>, Result extends TSchema = TUnion<Literals>> = Result;
export declare function KeysToIndexer<Keys extends PropertyKey[]>(keys: [...Keys]): TKeysToIndexer<Keys>;
export {};
