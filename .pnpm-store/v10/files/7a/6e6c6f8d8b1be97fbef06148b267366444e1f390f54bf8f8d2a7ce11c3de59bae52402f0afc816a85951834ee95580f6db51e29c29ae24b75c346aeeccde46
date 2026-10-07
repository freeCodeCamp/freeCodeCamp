import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XDefs<Defs extends Record<PropertyKey, XSchema> = Record<PropertyKey, XSchema>> {
    $defs: Defs;
}
/** Returns true if the schema contains a valid $defs property */
export declare function IsDefs(schema: XSchemaObject): schema is XDefs;
