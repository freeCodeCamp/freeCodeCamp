import { type StaticType, type StaticDirection } from './static.mjs';
import { type TSchema, type TSchemaOptions } from './schema.mjs';
import { type TProperties } from './properties.mjs';
export type StaticCyclic<Stack extends string[], Direction extends StaticDirection, Context extends TProperties, This extends TProperties, Defs extends TProperties, Ref extends string, Result extends unknown = (Ref extends keyof Defs ? StaticType<[...Stack, Ref], Direction, Defs, This, Defs[Ref]> : never)> = Result;
/** Represents a Cyclic type. */
export interface TCyclic<Defs extends TProperties = TProperties, Ref extends string = string> extends TSchema {
    '~kind': 'Cyclic';
    $defs: Defs;
    $ref: Ref;
}
/** Creates a Cyclic type. */
export declare function Cyclic<Defs extends TProperties, Ref extends string>($defs: Defs, $ref: Ref, options?: TSchemaOptions): TCyclic<Defs, Ref>;
/** Returns true if the given value is a TCyclic. */
export declare function IsCyclic(value: unknown): value is TCyclic;
/** Extracts options from a TCyclic. */
export declare function CyclicOptions(type: TCyclic): TSchemaOptions;
