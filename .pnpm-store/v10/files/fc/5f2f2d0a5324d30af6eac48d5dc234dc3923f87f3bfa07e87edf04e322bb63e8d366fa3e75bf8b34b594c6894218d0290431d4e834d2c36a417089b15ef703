import { type TLocalizedValidationError } from '../error/index.mjs';
import { type Static } from '../type/types/static.mjs';
import * as Schema from './types/index.mjs';
export declare class Validator<const Schema extends Schema.XSchema = Schema.XSchema, Value extends unknown = Static<Schema>> {
    private readonly build;
    private readonly result;
    constructor(context: Record<string, Schema.XSchema>, schema: Schema);
    /** Returns true if this Validator is using JIT acceleration. */
    IsAccelerated(): boolean;
    /** Returns the underlying Schema used to construct this Validator. */
    Schema(): Schema;
    /** Performs a type-guard check on the provided value. */
    Check(value: unknown): value is Value;
    /** Validates a value and returns it. Will throw if invalid. */
    Parse(value: unknown): Value;
    /** Inspects a value and returns a detailed list of validation errors. */
    Errors(value: unknown): [result: boolean, errors: TLocalizedValidationError[]];
}
/** Compiles this schema into a high performance Validator */
export declare function Compile<const Schema extends Schema.XSchema>(schema: Schema): Validator<Schema>;
/** Compiles this schema into a high performance Validator */
export declare function Compile<const Schema extends Schema.XSchema>(context: Record<PropertyKey, Schema.XSchema>, schema: Schema): Validator<Schema>;
