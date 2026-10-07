import type { XSchema } from '../types/schema.mjs';
import type { XStaticSchema } from './schema.mjs';
import type { XStaticElements } from './_elements.mjs';
type XFromSized<Stack extends string[], Root extends XSchema, Schema extends XSchema, Items extends XSchema[]> = (XStaticElements<Stack, Root, Schema, Items>);
type XFromUnsized<Stack extends string[], Root extends XSchema, Schema extends XSchema> = (XStaticSchema<Stack, Root, Schema>[]);
export type XStaticItems<Stack extends string[], Root extends XSchema, Schema extends XSchema, Items extends XSchema[] | XSchema, Result extends unknown = (Items extends XSchema[] ? XFromSized<Stack, Root, Schema, [...Items]> : Items extends XSchema ? XFromUnsized<Stack, Root, Items> : never)> = Result;
export {};
