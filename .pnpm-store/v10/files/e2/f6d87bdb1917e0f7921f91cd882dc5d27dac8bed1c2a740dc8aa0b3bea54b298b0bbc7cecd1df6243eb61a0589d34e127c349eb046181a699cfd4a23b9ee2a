import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XElse<Else extends XSchema = XSchema> {
    else: Else;
}
/**
 * Returns true if the schema contains a valid else property
 * @specification Json Schema 7
 */
export declare function IsElse(schema: XSchemaObject): schema is XElse;
