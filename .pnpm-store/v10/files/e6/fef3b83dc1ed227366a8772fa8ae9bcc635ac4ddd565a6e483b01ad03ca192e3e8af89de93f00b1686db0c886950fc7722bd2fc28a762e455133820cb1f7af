import type { XSchema } from '../types/schema.mjs';
import type { XStaticSchema } from './schema.mjs';
export type XStaticAllOf<Stack extends string[], Root extends XSchema, Schemas extends XSchema[], Result extends unknown = unknown> = (Schemas extends readonly [infer Left extends XSchema, ...infer Right extends XSchema[]] ? XStaticAllOf<Stack, Root, Right, Result & XStaticSchema<Stack, Root, Left>> : Result);
