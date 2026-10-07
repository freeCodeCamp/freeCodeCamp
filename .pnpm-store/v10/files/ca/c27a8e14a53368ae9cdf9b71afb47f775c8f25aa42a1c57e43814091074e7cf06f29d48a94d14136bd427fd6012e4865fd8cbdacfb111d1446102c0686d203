import { type TLocalizedValidationError } from '../error/index.mjs';
import { type Static } from '../type/types/static.mjs';
import * as Schema from './types/index.mjs';
export declare class ParseError {
    schema: Schema.XSchema;
    value: unknown;
    errors: TLocalizedValidationError[];
    constructor(schema: Schema.XSchema, value: unknown, errors: TLocalizedValidationError[]);
}
/** Parses a value against the provided schema */
export declare function Parse<const Schema extends Schema.XSchema>(schema: Schema, value: unknown): Static<Schema>;
/** Parses a value against the provided schema */
export declare function Parse<const Schema extends Schema.XSchema>(context: Record<PropertyKey, Schema.XSchema>, schema: Schema, value: unknown): Static<Schema>;
