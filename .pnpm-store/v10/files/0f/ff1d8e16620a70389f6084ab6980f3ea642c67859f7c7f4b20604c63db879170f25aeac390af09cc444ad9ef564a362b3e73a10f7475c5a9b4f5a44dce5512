import { type TSchema, type TSchemaOptions } from './schema.mjs';
export declare class InvalidLiteralValue extends Error {
    readonly cause: {
        value: unknown;
    };
    constructor(value: unknown);
}
export type StaticLiteral<Value extends TLiteralValue> = (Value);
export type TLiteralTypeName<Value extends TLiteralValue> = (Value extends bigint ? 'bigint' : Value extends boolean ? 'boolean' : Value extends number ? 'number' : Value extends string ? 'string' : never);
export declare function LiteralTypeName<Value extends TLiteralValue>(value: Value): TLiteralTypeName<Value>;
export type TLiteralValue = string | number | boolean | bigint;
/** Represents a Literal type. */
export interface TLiteral<Value extends TLiteralValue = TLiteralValue> extends TSchema {
    '~kind': 'Literal';
    type: TLiteralTypeName<Value>;
    const: Value;
}
/** Creates a Literal type. */
export declare function Literal<Value extends TLiteralValue>(value: Value, options?: TSchemaOptions): TLiteral<Value>;
/** Returns true if the given value is a TLiteralValue. */
export declare function IsLiteralValue(value: unknown): value is TLiteralValue;
/** Returns true if the given value is TLiteral<bigint>. */
export declare function IsLiteralBigInt(value: unknown): value is TLiteral<bigint>;
/** Returns true if the given value is TLiteral<boolean>. */
export declare function IsLiteralBoolean(value: unknown): value is TLiteral<boolean>;
/** Returns true if the given value is TLiteral<number>. */
export declare function IsLiteralNumber(value: unknown): value is TLiteral<number>;
/** Returns true if the given value is TLiteral<string>. */
export declare function IsLiteralString(value: unknown): value is TLiteral<string>;
/** Returns true if the given value is TLiteral. */
export declare function IsLiteral(value: unknown): value is TLiteral;
