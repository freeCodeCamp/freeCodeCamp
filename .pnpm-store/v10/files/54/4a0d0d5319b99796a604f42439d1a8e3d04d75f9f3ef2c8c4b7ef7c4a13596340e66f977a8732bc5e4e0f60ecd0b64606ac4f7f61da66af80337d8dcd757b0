import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XItemsSized<Items extends XSchema[] = XSchema[]> {
    items: Items;
}
export interface XItemsUnsized<Items extends XSchema = XSchema> {
    items: Items;
}
export interface XItems<Items extends (XSchema | XSchema[]) = (XSchema | XSchema[])> {
    items: Items;
}
/**
 * Returns true if the schema contains a valid items property
 * @specification Json Schema 7
 */
export declare function IsItems(schema: XSchemaObject): schema is XItems;
/** Returns true if this schema is a sized items variant */
export declare function IsItemsSized(schema: XSchemaObject): schema is XItemsSized;
/** Returns true if this schema is a unsized items variant */
export declare function IsItemsUnsized(schema: XSchemaObject): schema is XItemsUnsized;
