import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XAllOf<AllOf extends XSchema[] = XSchema[]> {
    allOf: AllOf;
}
/**
 * Returns true if the schema contains a valid allOf property
 * @specification Json Schema 7
 */
export declare function IsAllOf(schema: XSchemaObject): schema is XAllOf;
