import { type XSchemaObject } from './schema.mjs';
export interface XDependentRequired<DependentRequired extends Record<PropertyKey, string[]> = Record<PropertyKey, string[]>> {
    dependentRequired: DependentRequired;
}
/**
 * Returns true if the schema contains a valid dependentRequired property
 * @specification Json Schema 2019-09
 */
export declare function IsDependentRequired(schema: XSchemaObject): schema is XDependentRequired;
