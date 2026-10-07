import { type TSchema, type TNumberOptions } from './schema.mjs';
export declare const BigIntPattern = "-?(?:0|[1-9][0-9]*)n";
export type StaticBigInt = bigint;
/** Represents a BigInt type. */
export interface TBigInt extends TSchema {
    '~kind': 'BigInt';
    type: 'bigint';
}
/** Creates a BigInt type. */
export declare function BigInt(options?: TNumberOptions): TBigInt;
/** Returns true if the given value is a TBigInt. */
export declare function IsBigInt(value: unknown): value is TBigInt;
