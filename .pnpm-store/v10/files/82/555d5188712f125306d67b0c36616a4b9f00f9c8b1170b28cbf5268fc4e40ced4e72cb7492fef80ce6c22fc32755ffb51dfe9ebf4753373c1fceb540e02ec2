import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XPatternProperties<PatternProperties extends Record<PropertyKey, XSchema> = Record<PropertyKey, XSchema>> {
    patternProperties: PatternProperties;
}
/**
 * Returns true if the schema contains a valid patternProperties property
 * @specification Json Schema 7
 */
export declare function IsPatternProperties(schema: XSchemaObject): schema is XPatternProperties;
