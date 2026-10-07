import { type TSchema } from '../../types/schema.mjs';
import { type TCyclic } from '../../types/cyclic.mjs';
import { type TEnum, type TEnumValue } from '../../types/enum.mjs';
import { type TIntersect } from '../../types/intersect.mjs';
import { type TLiteral, type TLiteralValue } from '../../types/literal.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TTemplateLiteral } from '../../types/template_literal.mjs';
import { type TUnion } from '../../types/union.mjs';
import { type TFromCyclic } from './from_cyclic.mjs';
import { type TFromEnum } from './from_enum.mjs';
import { type TFromIntersect } from './from_intersect.mjs';
import { type TFromLiteral } from './from_literal.mjs';
import { type TFromTemplateLiteral } from './from_template_literal.mjs';
import { type TFromUnion } from './from_union.mjs';
export type TFromType<Indexer extends TSchema, Result extends string[] = (Indexer extends TCyclic<infer Defs extends TProperties, infer Ref extends string> ? TFromCyclic<Defs, Ref> : Indexer extends TEnum<infer Values extends TEnumValue[]> ? TFromEnum<Values> : Indexer extends TIntersect<infer Types extends TSchema[]> ? TFromIntersect<Types> : Indexer extends TLiteral<infer Value extends TLiteralValue> ? TFromLiteral<Value> : Indexer extends TTemplateLiteral<infer Pattern extends string> ? TFromTemplateLiteral<Pattern> : Indexer extends TUnion<infer Types extends TSchema[]> ? TFromUnion<Types> : [
])> = Result;
export declare function FromType<Indexer extends TSchema>(type: Indexer): TFromType<Indexer>;
