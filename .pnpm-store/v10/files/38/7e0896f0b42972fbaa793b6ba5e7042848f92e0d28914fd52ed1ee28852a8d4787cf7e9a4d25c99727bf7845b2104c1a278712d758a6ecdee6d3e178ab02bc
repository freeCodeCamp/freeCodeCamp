import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XContains<Contains extends XSchema = XSchema> {
    contains: Contains;
}
/**
 * Returns true if the schema contains a valid contains property
 * @specification Json Schema 7
 */
export declare function IsContains(schema: XSchemaObject): schema is XContains;
