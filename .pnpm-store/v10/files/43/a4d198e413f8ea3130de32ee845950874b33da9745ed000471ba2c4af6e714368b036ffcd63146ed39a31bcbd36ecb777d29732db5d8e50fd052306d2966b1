import { type TUnreachable } from '../../../system/unreachable/index.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TString } from '../../types/string.mjs';
import { type TTemplateLiteral } from '../../types/template_literal.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TParsePatternIntoTypes } from '../patterns/pattern.mjs';
import { type TIsTemplateLiteralFinite } from './is_finite.mjs';
type TFromLiteralPush<Variants extends string[], Value extends TLiteralValue, Result extends string[] = []> = Variants extends [infer Left extends string, ...infer Right extends string[]] ? TFromLiteralPush<Right, Value, [...Result, `${Left}${Value}`]> : Result;
type TFromLiteral<Variants extends string[], Value extends TLiteralValue> = Variants extends [] ? [`${Value}`] : TFromLiteralPush<Variants, Value>;
type TFromUnion<Variants extends string[], Types extends TSchema[], Result extends string[] = []> = Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromUnion<Variants, Right, [...Result, ...TFromType<Variants, Left>]> : Result;
type TFromType<Variants extends string[], Type extends TSchema, Result extends string[] = (Type extends TUnion<infer Types extends TSchema[]> ? TFromUnion<Variants, Types> : Type extends TLiteral<infer Value extends TLiteralValue> ? TFromLiteral<Variants, Value> : TUnreachable)> = Result;
type TDecodeFromSpan<Variants extends string[], Types extends TSchema[]> = Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TDecodeFromSpan<TFromType<Variants, Left>, Right> : Variants;
type TVariantsToLiterals<Variants extends string[], Result extends TSchema[] = []> = Variants extends [infer Left extends string, ...infer Right extends string[]] ? TVariantsToLiterals<Right, [...Result, TLiteral<Left>]> : Result;
type TDecodeTypesAsUnion<Types extends TSchema[], Variants extends string[] = TDecodeFromSpan<[], Types>, Literals extends TSchema[] = TVariantsToLiterals<Variants>, Result extends TSchema = TUnion<Literals>> = Result;
type TDecodeTypes<Types extends TSchema[], Result extends TSchema = (Types extends [] ? TUnreachable : Types extends [infer Type extends TLiteral] ? Type : TDecodeTypesAsUnion<Types>)> = Result;
/** Decodes a TemplateLiteral into a Type. */
export type TTemplateLiteralDecodeUnsafe<Pattern extends string, Types extends TSchema[] = TParsePatternIntoTypes<Pattern>, Result extends TSchema = (Types extends [] ? TString : TIsTemplateLiteralFinite<Types> extends true ? TDecodeTypes<Types> : TTemplateLiteral<Pattern>)> = Result;
/**
 * (Internal) Decodes a TemplateLiteral pattern into a Type. This function is unsafe. Decoding a non-finite
 * TemplateLiteral pattern may produce another TemplateLiteral pattern. During enumeration, this
 * TemplateLiteral -> TemplateLiteral behavior can cause a StackOverflow. A better in-flight template-literal
 * decoding algorithm is needed. (for review)
 */
export declare function TemplateLiteralDecodeUnsafe<Pattern extends string>(pattern: Pattern): TTemplateLiteralDecodeUnsafe<Pattern>;
/** Decodes a TemplateLiteral pattern but returns TString if the pattern in non-finite. */
export type TTemplateLiteralDecode<Pattern extends string, Decoded extends TSchema = TTemplateLiteralDecodeUnsafe<Pattern>, Result extends TSchema = Decoded extends TTemplateLiteral ? TString : Decoded> = Result;
/** Decodes a TemplateLiteral pattern but returns TString if the pattern in non-finite. */
export declare function TemplateLiteralDecode<Pattern extends string>(pattern: Pattern): TTemplateLiteralDecode<Pattern>;
export {};
