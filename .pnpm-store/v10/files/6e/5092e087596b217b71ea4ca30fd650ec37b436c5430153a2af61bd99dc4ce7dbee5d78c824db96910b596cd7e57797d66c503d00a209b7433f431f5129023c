import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XOneOf<OneOf extends XSchema[] = XSchema[]> {
    oneOf: OneOf;
}
/**
 * Returns true if the schema contains a valid oneOf property
 * @specification Json Schema 7
 */
export declare function IsOneOf(schema: XSchemaObject): schema is XOneOf;
