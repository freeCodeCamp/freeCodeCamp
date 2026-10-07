import type { XSchema } from '../types/schema.mjs';
import type { XStaticSchema } from './schema.mjs';
import type { XIf } from '../types/if.mjs';
import type { XElse } from '../types/else.mjs';
import type { XThen } from '../types/then.mjs';
export type XStaticIf<Stack extends string[], Root extends XSchema, Schema extends XIf, IfSchema extends XSchema, If extends unknown = XStaticSchema<Stack, Root, IfSchema>, Then extends unknown = Schema extends XThen<infer ThenSchema extends XSchema> ? XStaticSchema<Stack, Root, ThenSchema> : never, Else extends unknown = Schema extends XElse<infer ElseSchema extends XSchema> ? XStaticSchema<Stack, Root, ElseSchema> : never, IsThen extends boolean = Schema extends XThen ? true : false, IsElse extends boolean = Schema extends XElse ? true : false, Result extends unknown = ([
    IsThen,
    IsElse
] extends [true, true] ? (If & Then) | Exclude<Else, If> : [
    IsThen,
    IsElse
] extends [true, false] ? (If & Then) : [
    IsThen,
    IsElse
] extends [false, true] ? Exclude<Else, If> : unknown)> = Result;
