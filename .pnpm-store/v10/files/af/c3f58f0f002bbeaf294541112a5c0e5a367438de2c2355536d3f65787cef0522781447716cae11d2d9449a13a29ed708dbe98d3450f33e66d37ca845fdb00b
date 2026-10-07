import { type XSchemaObject, type XSchema } from './schema.mjs';
export interface XDependentSchemas<DependentSchemas extends Record<PropertyKey, XSchema> = Record<PropertyKey, XSchema>> {
    dependentSchemas: DependentSchemas;
}
/**
 * Returns true if the schema contains a valid dependentRequired property
 * @specification Json Schema 2019-09
 */
export declare function IsDependentSchemas(schema: XSchemaObject): schema is XDependentSchemas;
