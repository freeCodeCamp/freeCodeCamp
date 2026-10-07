import { URIComponent } from "fast-uri";
import type { CodeGen, Code, Name, ScopeValueSets, ValueScopeName } from "../compile/codegen";
import type { SchemaEnv, SchemaCxt, SchemaObjCxt } from "../compile";
import type { JSONType } from "../compile/rules";
import type { KeywordCxt } from "../compile/validate";
import type Ajv from "../core";
interface _SchemaObject {
    id?: string;
    $id?: string;
    $schema?: string;
    [x: string]: any;
}
export interface SchemaObject extends _SchemaObject {
    id?: string;
    $id?: string;
    $schema?: string;
    $async?: false;
    [x: string]: any;
}
export interface AsyncSchema extends _SchemaObject {
    $async: true;
}
export type AnySchemaObject = SchemaObject | AsyncSchema;
export type Schema = SchemaObject | boolean;
export type AnySchema = Schema | AsyncSchema;
export type SchemaMap = {
    [Key in string]?: AnySchema;
};
export interface SourceCode {
    validateName: ValueScopeName;
    validateCode: string;
    scopeValues: ScopeValueSets;
    evaluated?: Code;
}
export interface DataValidationCxt<T extends string | number = string | number> {
    instancePath: string;
    parentData: {
        [K in T]: any;
    };
    parentDataProperty: T;
    rootData: Record<string, any> | any[];
    dynamicAnchors: {
        [Ref in string]?: ValidateFunction;
    };
}
export interface ValidateFunction<T = unknown> {
    (this: Ajv | any, data: any, dataCxt?: DataValidationCxt): data is T;
    errors?: null | ErrorObject[];
    evaluated?: Evaluated;
    schema: AnySchema;
    schemaEnv: SchemaEnv;
    source?: SourceCode;
}
export interface JTDParser<T = unknown> {
    (json: string): T | undefined;
    message?: string;
    position?: number;
}
export type EvaluatedProperties = {
    [K in string]?: true;
} | true;
export type EvaluatedItems = number | true;
export interface Evaluated {
    props?: EvaluatedProperties;
    items?: EvaluatedItems;
    dynamicProps: boolean;
    dynamicItems: boolean;
}
export interface AsyncValidateFunction<T = unknown> extends ValidateFunction<T> {
    (...args: Parameters<ValidateFunction<T>>): Promise<T>;
    $async: true;
}
export type AnyValidateFunction<T = any> = ValidateFunction<T> | AsyncValidateFunction<T>;
export interface ErrorObject<K extends string = string, P = Record<string, any>, S = unknown> {
    keyword: K;
    instancePath: string;
    schemaPath: string;
    params: P;
    propertyName?: string;
    message?: string;
    schema?: S;
    parentSchema?: AnySchemaObject;
    data?: unknown;
}
export type ErrorNoParams<K extends string, S = unknown> = ErrorObject<K, Record<string, never>, S>;
interface _KeywordDef {
    keyword: string | string[];
    type?: JSONType | JSONType[];
    schemaType?: JSONType | JSONType[];
    allowUndefined?: boolean;
    $data?: boolean;
    implements?: string[];
    before?: string;
    post?: boolean;
    metaSchema?: AnySchemaObject;
    validateSchema?: AnyValidateFunction;
    dependencies?: string[];
    error?: KeywordErrorDefinition;
    $dataError?: KeywordErrorDefinition;
}
export interface CodeKeywordDefinition extends _KeywordDef {
    code: (cxt: KeywordCxt, ruleType?: string) => void;
    trackErrors?: boolean;
}
export type MacroKeywordFunc = (schema: any, parentSchema: AnySchemaObject, it: SchemaCxt) => AnySchema;
export type CompileKeywordFunc = (schema: any, parentSchema: AnySchemaObject, it: SchemaObjCxt) => DataValidateFunction;
export interface DataValidateFunction {
    (...args: Parameters<ValidateFunction>): boolean | Promise<any>;
    errors?: Partial<ErrorObject>[];
}
export interface SchemaValidateFunction {
    (schema: any, data: any, parentSchema?: AnySchemaObject, dataCxt?: DataValidationCxt): boolean | Promise<any>;
    errors?: Partial<ErrorObject>[];
}
export interface FuncKeywordDefinition extends _KeywordDef {
    validate?: SchemaValidateFunction | DataValidateFunction;
    compile?: CompileKeywordFunc;
    schema?: boolean;
    modifying?: boolean;
    async?: boolean;
    valid?: boolean;
    errors?: boolean | "full";
}
export interface MacroKeywordDefinition extends FuncKeywordDefinition {
    macro: MacroKeywordFunc;
}
export type KeywordDefinition = CodeKeywordDefinition | FuncKeywordDefinition | MacroKeywordDefinition;
export type AddedKeywordDefinition = KeywordDefinition & {
    type: JSONType[];
    schemaType: JSONType[];
};
export interface KeywordErrorDefinition {
    message: string | Code | ((cxt: KeywordErrorCxt) => string | Code);
    params?: Code | ((cxt: KeywordErrorCxt) => Code);
}
export type Vocabulary = (KeywordDefinition | string)[];
export interface KeywordErrorCxt {
    gen: CodeGen;
    keyword: string;
    data: Name;
    $data?: string | false;
    schema: any;
    parentSchema?: AnySchemaObject;
    schemaCode: Code | number | boolean;
    schemaValue: Code | number | boolean;
    schemaType?: JSONType[];
    errsCount?: Name;
    params: KeywordCxtParams;
    it: SchemaCxt;
}
export type KeywordCxtParams = {
    [P in string]?: Code | string | number;
};
export type FormatValidator<T extends string | number> = (data: T) => boolean;
export type FormatCompare<T extends string | number> = (data1: T, data2: T) => number | undefined;
export type AsyncFormatValidator<T extends string | number> = (data: T) => Promise<boolean>;
export interface FormatDefinition<T extends string | number> {
    type?: T extends string ? "string" | undefined : "number";
    validate: FormatValidator<T> | (T extends string ? string | RegExp : never);
    async?: false | undefined;
    compare?: FormatCompare<T>;
}
export interface AsyncFormatDefinition<T extends string | number> {
    type?: T extends string ? "string" | undefined : "number";
    validate: AsyncFormatValidator<T>;
    async: true;
    compare?: FormatCompare<T>;
}
export type AddedFormat = true | RegExp | FormatValidator<string> | FormatDefinition<string> | FormatDefinition<number> | AsyncFormatDefinition<string> | AsyncFormatDefinition<number>;
export type Format = AddedFormat | string;
export interface RegExpEngine {
    (pattern: string, u: string): RegExpLike;
    code: string;
}
export interface RegExpLike {
    test: (s: string) => boolean;
}
export interface UriResolver {
    parse(uri: string): URIComponent;
    resolve(base: string, path: string): string;
    serialize(component: URIComponent): string;
}
export {};
