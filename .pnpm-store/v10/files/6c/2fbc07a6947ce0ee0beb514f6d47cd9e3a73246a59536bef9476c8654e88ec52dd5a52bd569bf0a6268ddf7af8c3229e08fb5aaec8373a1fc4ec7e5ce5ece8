import type { XSchema } from '../types/schema.mjs';
import type { XStaticSchema } from './schema.mjs';
export type XStaticAdditionalProperties<Stack extends string[], Root extends XSchema, Schema extends XSchema, Result extends Record<PropertyKey, unknown> = (Schema extends true ? {
    [key: string]: unknown;
} : Schema extends false ? {} : {
    [key: string]: XStaticSchema<Stack, Root, Schema>;
})> = Result;
