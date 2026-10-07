import { type TSchema } from '../../types/schema.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TIntersect } from '../../types/intersect.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TConvertToIntegerKey } from '../helpers/keys.mjs';
type TConvertLiteral<Value extends TLiteralValue, Result extends TSchema = TLiteral<TConvertToIntegerKey<Value>>> = Result;
type TArrayIndexerTypes<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TArrayIndexerTypes<Right, [...Result, TFormatArrayIndexer<Left>]> : Result);
/** Formats embedded integer-like strings on an Indexer to be number values inline with TS indexing | coercion behaviors. */
export type TFormatArrayIndexer<Type extends TSchema, Result extends TSchema = (Type extends TIntersect<infer Types extends TSchema[]> ? TIntersect<TArrayIndexerTypes<Types>> : Type extends TUnion<infer Types extends TSchema[]> ? TUnion<TArrayIndexerTypes<Types>> : Type extends TLiteral<infer Value extends TLiteralValue> ? TConvertLiteral<Value> : Type)> = Result;
/** Formats embedded integer-like strings on an Indexer to be number values inline with TS indexing | coercion behaviors. */
export declare function FormatArrayIndexer<Type extends TSchema>(type: Type): TFormatArrayIndexer<Type>;
export {};
