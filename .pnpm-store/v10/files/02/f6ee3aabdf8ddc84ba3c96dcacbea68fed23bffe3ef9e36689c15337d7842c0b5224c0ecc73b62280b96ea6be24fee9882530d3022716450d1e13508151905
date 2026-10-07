import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XProperties<Properties extends Record<PropertyKey, XSchema> = Record<PropertyKey, XSchema>> {
    properties: Properties;
}
/**
 * Returns true if the schema contains a valid properties property
 * @specification Json Schema 7
 */
export declare function IsProperties(schema: XSchemaObject): schema is XProperties;
