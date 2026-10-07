import { type XSchemaObject } from './schema.mjs';
export interface XRef<Ref extends string = string> {
    $ref: Ref;
}
/**
 * Returns true if the schema contains a valid $ref property
 * @specification Json Schema 7
 */
export declare function IsRef(schema: XSchemaObject): schema is XRef;
