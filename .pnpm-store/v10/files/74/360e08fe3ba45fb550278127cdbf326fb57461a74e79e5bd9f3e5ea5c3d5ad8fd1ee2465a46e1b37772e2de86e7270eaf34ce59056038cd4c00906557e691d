import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XThen<Then extends XSchema = XSchema> {
    then: Then;
}
/**
 * Returns true if the schema contains a valid then property
 * @specification Json Schema 7
 */
export declare function IsThen(schema: XSchemaObject): schema is XThen;
