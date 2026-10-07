import type {AnySchemaObject} from "./types"
import AjvCore from "./core"
import draft7Vocabularies from "./vocabularies/draft7"
import discriminator from "./vocabularies/discriminator"
import * as draft7MetaSchema from "./refs/json-schema-draft-07.json"

const META_SUPPORT_DATA = ["/properties"]

const META_SCHEMA_ID = "http://json-schema.org/draft-07/schema"

export class Ajv extends AjvCore {
  _addVocabularies(): void {
    super._addVocabularies()
    draft7Vocabularies.forEach((v) => this.addVocabulary(v))
    if (this.opts.discriminator) this.addKeyword(discriminator)
  }

  _addDefaultMetaSchema(): void {
    super._addDefaultMetaSchema()
    if (!this.opts.meta) return
    const metaSchema = this.opts.$data
      ? this.$dataMetaSchema(draft7MetaSchema, META_SUPPORT_DATA)
      : draft7MetaSchema
    this.addMetaSchema(metaSchema, META_SCHEMA_ID, false)
    this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID
  }

  defaultMeta(): string | AnySchemaObject | undefined {
    return (this.opts.defaultMeta =
      super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined))
  }
}

module.exports = exports = Ajv
module.exports.Ajv = Ajv
Object.defineProperty(exports, "__esModule", {value: true})

export default Ajv

export {
  Format,
  FormatDefinition,
  AsyncFormatDefinition,
  KeywordDefinition,
  KeywordErrorDefinition,
  CodeKeywordDefinition,
  MacroKeywordDefinition,
  FuncKeywordDefinition,
  Vocabulary,
  Schema,
  SchemaObject,
  AnySchemaObject,
  AsyncSchema,
  AnySchema,
  ValidateFunction,
  AsyncValidateFunction,
  SchemaValidateFunction,
  ErrorObject,
  ErrorNoParams,
} from "./types"

export {Plugin, Options, CodeOptions, InstanceOptions, Logger, ErrorsTextOptions} from "./core"
export {SchemaCxt, SchemaObjCxt} from "./compile"
export {KeywordCxt} from "./compile/validate"
export {DefinedError} from "./vocabularies/errors"
export {JSONType} from "./compile/rules"
export {JSONSchemaType} from "./types/json-schema"
export {_, str, stringify, nil, Name, Code, CodeGen, CodeGenOptions} from "./compile/codegen"
export {default as ValidationError} from "./runtime/validation_error"
export {default as MissingRefError} from "./compile/ref_error"
