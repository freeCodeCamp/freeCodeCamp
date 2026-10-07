import { type TSchema, type TNumberOptions } from './schema.mjs';
export declare const IntegerPattern = "-?(?:0|[1-9][0-9]*)";
export type StaticInteger = number;
/** Represents an integer type. */
export interface TInteger extends TSchema {
    '~kind': 'Integer';
    type: 'integer';
}
/** Creates a Integer type. */
export declare function Integer(options?: TNumberOptions): TInteger;
/** Returns true if the given value is TInteger. */
export declare function IsInteger(value: unknown): value is TInteger;
