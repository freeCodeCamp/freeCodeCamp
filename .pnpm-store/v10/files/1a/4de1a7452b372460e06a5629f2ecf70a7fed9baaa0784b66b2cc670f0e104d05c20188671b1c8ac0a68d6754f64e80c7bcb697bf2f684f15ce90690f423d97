import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XAnyOf<AnyOf extends XSchema[] = XSchema[]> {
    anyOf: AnyOf;
}
/**
 * Returns true if the schema contains a valid anyOf property
 * @specification Json Schema 7
 */
export declare function IsAnyOf(schema: XSchemaObject): schema is XAnyOf;
