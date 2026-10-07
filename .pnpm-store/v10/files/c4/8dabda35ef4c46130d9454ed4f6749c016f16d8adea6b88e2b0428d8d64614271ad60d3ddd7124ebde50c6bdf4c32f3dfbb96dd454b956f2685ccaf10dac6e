import { type TSchema, type TNumberOptions } from './schema.mjs';
export declare const NumberPattern = "-?(?:0|[1-9][0-9]*)(?:.[0-9]+)?";
export type StaticNumber = number;
/** Represents a Number type. */
export interface TNumber extends TSchema {
    '~kind': 'Number';
    type: 'number';
}
/** Creates a Number type. */
export declare function Number(options?: TNumberOptions): TNumber;
/** Returns true if the given value is a TNumber. */
export declare function IsNumber(value: unknown): value is TNumber;
