import { type XSchemaObject } from './schema.mjs';
type XDependenciesProperty = Record<PropertyKey, boolean | Record<PropertyKey, unknown> | string[]>;
export interface XDependencies<Dependencies extends XDependenciesProperty = XDependenciesProperty> {
    dependencies: Dependencies;
}
/**
 * Returns true if the schema contains a valid dependencies property
 * @specification Json Schema 7
 */
export declare function IsDependencies(schema: XSchemaObject): schema is XDependencies;
export {};
