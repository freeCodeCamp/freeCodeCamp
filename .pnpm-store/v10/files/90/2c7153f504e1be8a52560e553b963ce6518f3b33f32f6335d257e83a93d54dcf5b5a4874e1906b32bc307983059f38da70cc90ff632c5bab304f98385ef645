import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XNot<Not extends XSchema = XSchema> {
    not: Not;
}
/**
 * Returns true if the schema contains a valid not property
 * @specification Json Schema 7
 */
export declare function IsNot(schema: XSchemaObject): schema is XNot;
