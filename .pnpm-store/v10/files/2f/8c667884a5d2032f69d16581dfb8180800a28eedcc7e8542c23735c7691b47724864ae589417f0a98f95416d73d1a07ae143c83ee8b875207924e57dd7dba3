import type { CodeKeywordDefinition, ErrorObject, KeywordErrorDefinition, SchemaMap, AnySchema } from "../../types";
import type { KeywordCxt } from "../../compile/validate";
export type PropertyDependencies = {
    [K in string]?: string[];
};
export interface DependenciesErrorParams {
    property: string;
    missingProperty: string;
    depsCount: number;
    deps: string;
}
export type DependenciesError = ErrorObject<"dependencies", DependenciesErrorParams, {
    [K in string]?: string[] | AnySchema;
}>;
export declare const error: KeywordErrorDefinition;
declare const def: CodeKeywordDefinition;
export declare function validatePropertyDeps(cxt: KeywordCxt, propertyDeps?: {
    [K in string]?: string[];
}): void;
export declare function validateSchemaDeps(cxt: KeywordCxt, schemaDeps?: SchemaMap): void;
export default def;
