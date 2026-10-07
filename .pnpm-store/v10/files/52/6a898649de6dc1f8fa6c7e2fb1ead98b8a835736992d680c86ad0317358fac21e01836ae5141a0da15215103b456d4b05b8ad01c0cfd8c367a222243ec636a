import { type XSchemaObject } from './schema.mjs';
export interface XPattern<Pattern extends string | RegExp = string | RegExp> {
    pattern: Pattern;
}
/**
 * Returns true if the schema contains a valid pattern property
 * @specification Json Schema 7
 */
export declare function IsPattern(schema: XSchemaObject): schema is XPattern;
