import type { AnySchemaObject } from "./types";
import AjvCore, { Options } from "./core";
export declare class Ajv2019 extends AjvCore {
    constructor(opts?: Options);
    _addVocabularies(): void;
    _addDefaultMetaSchema(): void;
    defaultMeta(): string | AnySchemaObject | undefined;
}
export default Ajv2019;
export { Format, FormatDefinition, AsyncFormatDefinition, KeywordDefinition, KeywordErrorDefinition, CodeKeywordDefinition, MacroKeywordDefinition, FuncKeywordDefinition, Vocabulary, Schema, SchemaObject, AnySchemaObject, AsyncSchema, AnySchema, ValidateFunction, AsyncValidateFunction, ErrorObject, ErrorNoParams, } from "./types";
export { Plugin, Options, CodeOptions, InstanceOptions, Logger, ErrorsTextOptions } from "./core";
export { SchemaCxt, SchemaObjCxt } from "./compile";
export { KeywordCxt } from "./compile/validate";
export { DefinedError } from "./vocabularies/errors";
export { JSONType } from "./compile/rules";
export { JSONSchemaType } from "./types/json-schema";
export { _, str, stringify, nil, Name, Code, CodeGen, CodeGenOptions } from "./compile/codegen";
export { default as ValidationError } from "./runtime/validation_error";
export { default as MissingRefError } from "./compile/ref_error";
