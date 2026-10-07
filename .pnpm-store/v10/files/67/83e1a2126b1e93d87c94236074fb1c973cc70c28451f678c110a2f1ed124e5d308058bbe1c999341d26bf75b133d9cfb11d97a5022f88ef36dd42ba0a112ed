import type {AnySchemaObject} from "./types"
import AjvCore, {Options} from "./core"

import draft2020Vocabularies from "./vocabularies/draft2020"
import discriminator from "./vocabularies/discriminator"
import addMetaSchema2020 from "./refs/json-schema-2020-12"

const META_SCHEMA_ID = "https://json-schema.org/draft/2020-12/schema"

export class Ajv2020 extends AjvCore {
  constructor(opts: Options = {}) {
    super({
      ...opts,
      dynamicRef: true,
      next: true,
      unevaluated: true,
    })
  }

  _addVocabularies(): void {
    super._addVocabularies()
    draft2020Vocabularies.forEach((v) => this.addVocabulary(v))
    if (this.opts.discriminator) this.addKeyword(discriminator)
  }

  _addDefaultMetaSchema(): void {
    super._addDefaultMetaSchema()
    const {$data, meta} = this.opts
    if (!meta) return
    addMetaSchema2020.call(this, $data)
    this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID
  }

  defaultMeta(): string | AnySchemaObject | undefined {
    return (this.opts.defaultMeta =
      super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined))
  }
}

module.exports = exports = Ajv2020
module.exports.Ajv2020 = Ajv2020
Object.defineProperty(exports, "__esModule", {value: true})

export default Ajv2020

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
