import type { XSchema } from '../types/schema.mjs';
import type { XMinItems } from '../types/minItems.mjs';
import type { XMaxItems } from '../types/maxItems.mjs';
import type { XAdditionalItems } from '../types/additionalItems.mjs';
import type { XStaticSchema } from './schema.mjs';
import type { XLessThan } from './_comparer.mjs';
type XWithElements<Stack extends string[], Root extends XSchema, Schemas extends XSchema[], Result extends unknown[] = []> = (Schemas extends [infer Left extends XSchema, ...infer Right extends XSchema[]] ? XWithElements<Stack, Root, Right, [...Result, XStaticSchema<Stack, Root, Left>]> : Result);
type XWithMaxItemsRemap<Elements extends unknown[], MaxItems extends number, Result extends unknown[] = []> = (Elements extends [infer Left extends unknown, ...infer Right extends unknown[]] ? XLessThan<Result['length'], MaxItems> extends true ? XWithMaxItemsRemap<Right, MaxItems, [...Result, Left]> : Result : Result);
type XWithMaxItems<Schema extends XSchema, Elements extends unknown[], MaxItems extends number | null = Schema extends XMaxItems<infer MaxItems extends number> ? MaxItems : null, Result extends unknown[] = MaxItems extends number ? XWithMaxItemsRemap<Elements, MaxItems> : Elements> = Result;
type XNeedsAdditionalItems<Schema extends XSchema, Elements extends unknown[], Result extends boolean = (Schema extends XMaxItems<infer MaxItems extends number> ? XLessThan<Elements['length'], MaxItems> : true)> = Result;
type XWithMinItemsRemap<Elements extends unknown[], MinItems extends number, Result extends unknown[] = []> = (Elements extends [infer Left, ...infer Right] ? XLessThan<Result['length'], MinItems> extends true ? XWithMinItemsRemap<Right, MinItems, [...Result, Left]> : XWithMinItemsRemap<Right, MinItems, [...Result, Left?]> : Result);
type XWithMinItems<Schema extends XSchema, Values extends unknown[], MinItems extends number = Schema extends XMinItems<infer MinItems extends number> ? MinItems : 0, Result extends unknown[] = XWithMinItemsRemap<Values, MinItems>> = Result;
type XWithAdditionalItems<Stack extends string[], Root extends XSchema, Schema extends XSchema, Elements extends unknown[], Result extends unknown[] = Schema extends XAdditionalItems<infer Schema extends XSchema> ? (Schema extends true ? [...Elements, ...unknown[]] : Schema extends false ? [...Elements] : [
    ...Elements,
    ...XStaticSchema<Stack, Root, Schema>[]
]) : [...Elements, ...unknown[]]> = Result;
export type XStaticElements<Stack extends string[], Root extends XSchema, Schema extends XSchema, PrefixItems extends XSchema[], WithElements extends unknown[] = XWithElements<Stack, Root, PrefixItems>, WithMaxItems extends unknown[] = XWithMaxItems<Schema, WithElements>, NeedsAdditional extends boolean = XNeedsAdditionalItems<Schema, WithMaxItems>, WithMinItems extends unknown[] = XWithMinItems<Schema, WithMaxItems>, WithAdditionalItems extends unknown[] = NeedsAdditional extends true ? XWithAdditionalItems<Stack, Root, Schema, WithMinItems> : WithMinItems> = WithAdditionalItems;
export {};
