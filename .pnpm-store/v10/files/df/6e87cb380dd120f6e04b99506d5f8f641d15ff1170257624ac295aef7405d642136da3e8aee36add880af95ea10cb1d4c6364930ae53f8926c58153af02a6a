import { type TSchema } from '../../types/index.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TEnum, type TEnumValue } from '../../types/enum.mjs';
import { type TTemplateLiteral } from '../../types/template_literal.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TEnumValuesToVariants } from '../enum/index.mjs';
import { type TTemplateLiteralDecode } from '../template_literal/decode.mjs';
type TFromTemplateLiteral<Pattern extends string, Decoded extends TSchema = TTemplateLiteralDecode<Pattern>, Result extends TSchema[] = TFromType<Decoded>> = Result;
type TFromUnion<Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromUnion<Right, [...Result, ...TFromType<Left>]> : Result);
type TFromLiteral<Value extends TLiteralValue, Result extends TSchema[] = Value extends number ? [TLiteral<`${Value}`>] : [TLiteral<Value>]> = Result;
type TFromType<Type extends TSchema, Result extends TSchema[] = (Type extends TEnum<infer Values extends TEnumValue[]> ? TFromUnion<TEnumValuesToVariants<Values>> : Type extends TLiteral<infer Value extends number> ? TFromLiteral<Value> : Type extends TTemplateLiteral<infer Pattern extends string> ? TFromTemplateLiteral<Pattern> : Type extends TUnion<infer Types extends TSchema[]> ? TFromUnion<Types> : [
    Type
])> = Result;
export type TMappedVariants<Type extends TSchema, Result extends TSchema[] = TFromType<Type>> = Result;
export declare function MappedVariants<Type extends TSchema>(type: Type): TMappedVariants<Type>;
export {};
