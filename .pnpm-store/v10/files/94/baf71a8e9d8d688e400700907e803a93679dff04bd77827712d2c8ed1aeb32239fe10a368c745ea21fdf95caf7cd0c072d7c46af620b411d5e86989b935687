import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XAdditionalProperties<AdditionalProperties extends XSchema = XSchema> {
    additionalProperties: AdditionalProperties;
}
/**
 * Returns true if the schema contains a valid additionalProperties property
 * @specification Json Schema 7
 */
export declare function IsAdditionalProperties(schema: XSchemaObject): schema is XAdditionalProperties;
