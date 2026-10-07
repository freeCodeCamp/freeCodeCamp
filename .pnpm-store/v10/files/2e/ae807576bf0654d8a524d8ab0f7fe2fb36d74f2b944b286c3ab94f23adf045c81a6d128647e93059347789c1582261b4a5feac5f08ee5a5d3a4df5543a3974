export { Format, FormatDefinition, AsyncFormatDefinition, KeywordDefinition, KeywordErrorDefinition, CodeKeywordDefinition, MacroKeywordDefinition, FuncKeywordDefinition, Vocabulary, Schema, SchemaObject, AnySchemaObject, AsyncSchema, AnySchema, ValidateFunction, AsyncValidateFunction, AnyValidateFunction, ErrorObject, ErrorNoParams, } from "./types";
export { SchemaCxt, SchemaObjCxt } from "./compile";
export interface Plugin<Opts> {
    (ajv: Ajv, options?: Opts): Ajv;
    [prop: string]: any;
}
export { KeywordCxt } from "./compile/validate";
export { DefinedError } from "./vocabularies/errors";
export { JSONType } from "./compile/rules";
export { JSONSchemaType } from "./types/json-schema";
export { JTDSchemaType, SomeJTDSchemaType, JTDDataType } from "./types/jtd-schema";
export { _, str, stringify, nil, Name, Code, CodeGen, CodeGenOptions } from "./compile/codegen";
import type { Schema, AnySchema, AnySchemaObject, SchemaObject, AsyncSchema, Vocabulary, KeywordDefinition, AddedKeywordDefinition, AnyValidateFunction, ValidateFunction, AsyncValidateFunction, ErrorObject, Format, AddedFormat, RegExpEngine, UriResolver } from "./types";
import type { JSONSchemaType } from "./types/json-schema";
import type { JTDSchemaType, SomeJTDSchemaType, JTDDataType } from "./types/jtd-schema";
import ValidationError from "./runtime/validation_error";
import MissingRefError from "./compile/ref_error";
import { ValidationRules } from "./compile/rules";
import { SchemaEnv } from "./compile";
import { Code, ValueScope } from "./compile/codegen";
export type Options = CurrentOptions & DeprecatedOptions;
export interface CurrentOptions {
    strict?: boolean | "log";
    strictSchema?: boolean | "log";
    strictNumbers?: boolean | "log";
    strictTypes?: boolean | "log";
    strictTuples?: boolean | "log";
    strictRequired?: boolean | "log";
    allowMatchingProperties?: boolean;
    allowUnionTypes?: boolean;
    validateFormats?: boolean;
    $data?: boolean;
    allErrors?: boolean;
    verbose?: boolean;
    discriminator?: boolean;
    unicodeRegExp?: boolean;
    timestamp?: "string" | "date";
    parseDate?: boolean;
    allowDate?: boolean;
    specialNumbers?: "fast" | "null";
    $comment?: true | ((comment: string, schemaPath?: string, rootSchema?: AnySchemaObject) => unknown);
    formats?: {
        [Name in string]?: Format;
    };
    keywords?: Vocabulary;
    schemas?: AnySchema[] | {
        [Key in string]?: AnySchema;
    };
    logger?: Logger | false;
    loadSchema?: (uri: string) => Promise<AnySchemaObject>;
    removeAdditional?: boolean | "all" | "failing";
    useDefaults?: boolean | "empty";
    coerceTypes?: boolean | "array";
    next?: boolean;
    unevaluated?: boolean;
    dynamicRef?: boolean;
    schemaId?: "id" | "$id";
    jtd?: boolean;
    meta?: SchemaObject | boolean;
    defaultMeta?: string | AnySchemaObject;
    validateSchema?: boolean | "log";
    addUsedSchema?: boolean;
    inlineRefs?: boolean | number;
    passContext?: boolean;
    loopRequired?: number;
    loopEnum?: number;
    ownProperties?: boolean;
    multipleOfPrecision?: number;
    int32range?: boolean;
    messages?: boolean;
    code?: CodeOptions;
    uriResolver?: UriResolver;
}
export interface CodeOptions {
    es5?: boolean;
    esm?: boolean;
    lines?: boolean;
    optimize?: boolean | number;
    formats?: Code;
    source?: boolean;
    process?: (code: string, schema?: SchemaEnv) => string;
    regExp?: RegExpEngine;
}
interface InstanceCodeOptions extends CodeOptions {
    regExp: RegExpEngine;
    optimize: number;
}
interface DeprecatedOptions {
    /** @deprecated */
    ignoreKeywordsWithRef?: boolean;
    /** @deprecated */
    jsPropertySyntax?: boolean;
    /** @deprecated */
    unicode?: boolean;
}
type RequiredInstanceOptions = {
    [K in "strictSchema" | "strictNumbers" | "strictTypes" | "strictTuples" | "strictRequired" | "inlineRefs" | "loopRequired" | "loopEnum" | "meta" | "messages" | "schemaId" | "addUsedSchema" | "validateSchema" | "validateFormats" | "int32range" | "unicodeRegExp" | "uriResolver"]: NonNullable<Options[K]>;
} & {
    code: InstanceCodeOptions;
};
export type InstanceOptions = Options & RequiredInstanceOptions;
export interface Logger {
    log(...args: unknown[]): unknown;
    warn(...args: unknown[]): unknown;
    error(...args: unknown[]): unknown;
}
export default class Ajv {
    opts: InstanceOptions;
    errors?: ErrorObject[] | null;
    logger: Logger;
    readonly scope: ValueScope;
    readonly schemas: {
        [Key in string]?: SchemaEnv;
    };
    readonly refs: {
        [Ref in string]?: SchemaEnv | string;
    };
    readonly formats: {
        [Name in string]?: AddedFormat;
    };
    readonly RULES: ValidationRules;
    readonly _compilations: Set<SchemaEnv>;
    private readonly _loading;
    private readonly _cache;
    private readonly _metaOpts;
    static ValidationError: typeof ValidationError;
    static MissingRefError: typeof MissingRefError;
    constructor(opts?: Options);
    _addVocabularies(): void;
    _addDefaultMetaSchema(): void;
    defaultMeta(): string | AnySchemaObject | undefined;
    validate(schema: Schema | string, data: unknown): boolean;
    validate(schemaKeyRef: AnySchema | string, data: unknown): boolean | Promise<unknown>;
    validate<T>(schema: Schema | JSONSchemaType<T> | string, data: unknown): data is T;
    validate<T>(schema: JTDSchemaType<T>, data: unknown): data is T;
    validate<N extends never, T extends SomeJTDSchemaType>(schema: T, data: unknown): data is JTDDataType<T>;
    validate<T>(schema: AsyncSchema, data: unknown | T): Promise<T>;
    validate<T>(schemaKeyRef: AnySchema | string, data: unknown): data is T | Promise<T>;
    compile<T = unknown>(schema: Schema | JSONSchemaType<T>, _meta?: boolean): ValidateFunction<T>;
    compile<T = unknown>(schema: JTDSchemaType<T>, _meta?: boolean): ValidateFunction<T>;
    compile<N extends never, T extends SomeJTDSchemaType>(schema: T, _meta?: boolean): ValidateFunction<JTDDataType<T>>;
    compile<T = unknown>(schema: AsyncSchema, _meta?: boolean): AsyncValidateFunction<T>;
    compile<T = unknown>(schema: AnySchema, _meta?: boolean): AnyValidateFunction<T>;
    compileAsync<T = unknown>(schema: SchemaObject | JSONSchemaType<T>, _meta?: boolean): Promise<ValidateFunction<T>>;
    compileAsync<T = unknown>(schema: JTDSchemaType<T>, _meta?: boolean): Promise<ValidateFunction<T>>;
    compileAsync<T = unknown>(schema: AsyncSchema, meta?: boolean): Promise<AsyncValidateFunction<T>>;
    compileAsync<T = unknown>(schema: AnySchemaObject, meta?: boolean): Promise<AnyValidateFunction<T>>;
    addSchema(schema: AnySchema | AnySchema[], // If array is passed, `key` will be ignored
    key?: string, // Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
    _meta?: boolean, // true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
    _validateSchema?: boolean | "log"): Ajv;
    addMetaSchema(schema: AnySchemaObject, key?: string, // schema key
    _validateSchema?: boolean | "log"): Ajv;
    validateSchema(schema: AnySchema, throwOrLogError?: boolean): boolean | Promise<unknown>;
    getSchema<T = unknown>(keyRef: string): AnyValidateFunction<T> | undefined;
    removeSchema(schemaKeyRef?: AnySchema | string | RegExp): Ajv;
    addVocabulary(definitions: Vocabulary): Ajv;
    addKeyword(kwdOrDef: string | KeywordDefinition, def?: KeywordDefinition): Ajv;
    getKeyword(keyword: string): AddedKeywordDefinition | boolean;
    removeKeyword(keyword: string): Ajv;
    addFormat(name: string, format: Format): Ajv;
    errorsText(errors?: ErrorObject[] | null | undefined, // optional array of validation errors
    { separator, dataVar }?: ErrorsTextOptions): string;
    $dataMetaSchema(metaSchema: AnySchemaObject, keywordsJsonPointers: string[]): AnySchemaObject;
    private _removeAllSchemas;
    _addSchema(schema: AnySchema, meta?: boolean, baseId?: string, validateSchema?: boolean | "log", addSchema?: boolean): SchemaEnv;
    private _checkUnique;
    private _compileSchemaEnv;
    private _compileMetaSchema;
}
export interface ErrorsTextOptions {
    separator?: string;
    dataVar?: string;
}
