import type { XAdditionalProperties } from '../types/additionalProperties.mjs';
import type { XAnyOf } from '../types/anyOf.mjs';
import type { XAllOf } from '../types/allOf.mjs';
import type { XConst } from '../types/const.mjs';
import type { XEnum } from '../types/enum.mjs';
import type { XIf } from '../types/if.mjs';
import type { XItems } from '../types/items.mjs';
import type { XOneOf } from '../types/oneOf.mjs';
import type { XPatternProperties } from '../types/patternProperties.mjs';
import type { XPrefixItems } from '../types/prefixItems.mjs';
import type { XProperties } from '../types/properties.mjs';
import type { XRef } from '../types/ref.mjs';
import type { XRequired } from '../types/required.mjs';
import type { XSchema } from '../types/schema.mjs';
import type { XType } from '../types/type.mjs';
import type { XUnevaluatedProperties } from '../types/unevaluatedProperties.mjs';
import type { XStaticAdditionalProperties } from './additionalProperties.mjs';
import type { XStaticAllOf } from './allOf.mjs';
import type { XStaticAnyOf } from './anyOf.mjs';
import type { XStaticConst } from './const.mjs';
import type { XStaticEnum } from './enum.mjs';
import type { XStaticIf } from './if.mjs';
import type { XStaticItems } from './items.mjs';
import type { XStaticOneOf } from './oneOf.mjs';
import type { XStaticPatternProperties } from './patternProperties.mjs';
import type { XStaticPrefixItems } from './prefixItems.mjs';
import type { XStaticProperties } from './properties.mjs';
import type { XStaticRef } from './ref.mjs';
import type { XStaticRequired } from './required.mjs';
import type { XStaticType } from './type.mjs';
import type { XStaticUnevaluatedProperties } from './unevaluatedProperties.mjs';
type XFromKeywords<Stack extends string[], Root extends XSchema, Schema extends XSchema, Result extends unknown[] = [
    Schema extends XAdditionalProperties<infer Type extends XSchema> ? XStaticAdditionalProperties<Stack, Root, Type> : unknown,
    Schema extends XAllOf<infer Types extends XSchema[]> ? XStaticAllOf<Stack, Root, Types> : unknown,
    Schema extends XAnyOf<infer Types extends XSchema[]> ? XStaticAnyOf<Stack, Root, Types> : unknown,
    Schema extends XConst<infer Value extends unknown> ? XStaticConst<Value> : unknown,
    Schema extends XIf<infer Type extends XSchema> ? XStaticIf<Stack, Root, Schema, Type> : unknown,
    Schema extends XEnum<infer Values extends unknown[]> ? XStaticEnum<Values> : unknown,
    Schema extends XItems<infer Types extends XSchema[] | XSchema> ? XStaticItems<Stack, Root, Schema, Types> : unknown,
    Schema extends XOneOf<infer Types extends XSchema[]> ? XStaticOneOf<Stack, Root, Types> : unknown,
    Schema extends XPatternProperties<infer Properties extends Record<PropertyKey, XSchema>> ? XStaticPatternProperties<Stack, Root, Properties> : unknown,
    Schema extends XPrefixItems<infer Types extends XSchema[]> ? XStaticPrefixItems<Stack, Root, Schema, Types> : unknown,
    Schema extends XProperties<infer Properties extends Record<PropertyKey, XSchema>> ? XStaticProperties<Stack, Root, Schema, Properties> : unknown,
    Schema extends XRef<infer Ref extends string> ? XStaticRef<Stack, Root, Ref> : unknown,
    Schema extends XRequired<infer Keys extends string[]> ? XStaticRequired<Stack, Root, Schema, Keys> : unknown,
    Schema extends XType<infer TypeName extends string[] | string> ? XStaticType<TypeName> : unknown,
    Schema extends XUnevaluatedProperties<infer Type extends XSchema> ? XStaticUnevaluatedProperties<Stack, Root, Type> : unknown
]> = Result;
type XKeywordsIntersected<Schemas extends unknown[], Result extends unknown = unknown> = (Schemas extends [infer Left extends unknown, ...infer Right extends unknown[]] ? XKeywordsIntersected<Right, Result & Left> : Result);
type XKeywordsEvaluated<Schema extends unknown, Result extends unknown = Schema extends object ? {
    [Key in keyof Schema]: Schema[Key];
} : Schema> = Result;
export type XStaticObject<Stack extends string[], Root extends XSchema, Schema extends XSchema, Keywords extends unknown[] = XFromKeywords<Stack, Root, Schema>, Intersected extends unknown = XKeywordsIntersected<Keywords>, Evaluated extends unknown = XKeywordsEvaluated<Intersected>> = Evaluated;
export type XStaticBoolean<Schema extends boolean, Result extends unknown = Schema extends false ? never : unknown> = Result;
export type XStaticSchema<Stack extends string[], Root extends XSchema, Schema extends XSchema, Result extends unknown = Schema extends boolean ? XStaticBoolean<Schema> : XStaticObject<Stack, Root, Schema>> = Result;
export {};
