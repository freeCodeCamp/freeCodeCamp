import { type TSchema } from '../../types/schema.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TUnion } from '../../types/union.mjs';
type TFromLiteral<_Value extends TLiteralValue> = true;
type TFromTypesReduce<Types extends TSchema[]> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TFromType<Left> extends true ? TFromTypesReduce<Right> : false : true);
type TFromTypes<Types extends TSchema[], Result extends boolean = Types extends [] ? false : TFromTypesReduce<Types>> = Result;
type TFromType<Type extends TSchema> = Type extends TUnion<infer Types extends TSchema[]> ? TFromTypes<Types> : Type extends TLiteral<infer Value extends TLiteralValue> ? TFromLiteral<Value> : false;
/** Returns true if the given TemplateLiteral types yields a finite variant set */
export type TIsTemplateLiteralFinite<Types extends TSchema[], Result extends boolean = TFromTypes<Types>> = Result;
/** Returns true if the given TemplateLiteral types yields a finite variant set */
export declare function IsTemplateLiteralFinite<Types extends TSchema[]>(types: [...Types]): TIsTemplateLiteralFinite<Types>;
export {};
