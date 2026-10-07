import type { XSchema } from '../types/schema.mjs';
import type { XStaticSchema } from './schema.mjs';
export type XStaticOneOf<Stack extends string[], Root extends XSchema, Schemas extends XSchema[], Result extends unknown = never> = (Schemas extends [infer Left extends XSchema, ...infer Right extends XSchema[]] ? XStaticOneOf<Stack, Root, Right, XStaticSchema<Stack, Root, Left> | Result> : Result);
