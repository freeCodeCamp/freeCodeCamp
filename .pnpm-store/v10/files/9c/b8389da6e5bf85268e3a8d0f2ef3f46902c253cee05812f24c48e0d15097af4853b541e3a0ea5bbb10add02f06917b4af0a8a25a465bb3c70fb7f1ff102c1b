import type { AnySchema, EvaluatedProperties, EvaluatedItems } from "../types";
import type { SchemaCxt, SchemaObjCxt } from ".";
import { Code, Name, CodeGen } from "./codegen";
import type { Rule, ValidationRules } from "./rules";
export declare function toHash<T extends string = string>(arr: T[]): {
    [K in T]?: true;
};
export declare function alwaysValidSchema(it: SchemaCxt, schema: AnySchema): boolean | void;
export declare function checkUnknownRules(it: SchemaCxt, schema?: AnySchema): void;
export declare function schemaHasRules(schema: AnySchema, rules: {
    [Key in string]?: boolean | Rule;
}): boolean;
export declare function schemaHasRulesButRef(schema: AnySchema, RULES: ValidationRules): boolean;
export declare function schemaRefOrVal({ topSchemaRef, schemaPath }: SchemaObjCxt, schema: unknown, keyword: string, $data?: string | false): Code | number | boolean;
export declare function unescapeFragment(str: string): string;
export declare function escapeFragment(str: string | number): string;
export declare function escapeJsonPointer(str: string | number): string;
export declare function unescapeJsonPointer(str: string): string;
export declare function eachItem<T>(xs: T | T[], f: (x: T) => void): void;
type SomeEvaluated = EvaluatedProperties | EvaluatedItems;
type MergeEvaluatedFunc<T extends SomeEvaluated> = (gen: CodeGen, from: Name | T, to: Name | Exclude<T, true> | undefined, toName?: typeof Name) => Name | T;
interface MergeEvaluated {
    props: MergeEvaluatedFunc<EvaluatedProperties>;
    items: MergeEvaluatedFunc<EvaluatedItems>;
}
export declare const mergeEvaluated: MergeEvaluated;
export declare function evaluatedPropsToName(gen: CodeGen, ps?: EvaluatedProperties): Name;
export declare function setEvaluated(gen: CodeGen, props: Name, ps: {
    [K in string]?: true;
}): void;
export declare function useFunc(gen: CodeGen, f: {
    code: string;
}): Name;
export declare enum Type {
    Num = 0,
    Str = 1
}
export declare function getErrorPath(dataProp: Name | string | number, dataPropType?: Type, jsPropertySyntax?: boolean): Code | string;
export declare function checkStrictMode(it: SchemaCxt, msg: string, mode?: boolean | "log"): void;
export {};
