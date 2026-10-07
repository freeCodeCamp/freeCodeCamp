import { type TSchema, type TSchemaOptions } from './schema.mjs';
export declare const NeverPattern = "(?!)";
export type StaticNever = never;
/** Represents a Never type. */
export interface TNever extends TSchema {
    '~kind': 'Never';
    not: {};
}
/** Creates a Never type. */
export declare function Never(options?: TSchemaOptions): TNever;
/** Returns true if the given value is TNever. */
export declare function IsNever(value: unknown): value is TNever;
