import type {CodeKeywordDefinition, KeywordErrorDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, not, getProperty, Name} from "../../compile/codegen"
import {checkMetadata} from "./metadata"
import {checkNullableObject} from "./nullable"
import {typeErrorMessage, typeErrorParams, _JTDTypeError} from "./error"
import {DiscrError, DiscrErrorObj} from "../discriminator/types"

export type JTDDiscriminatorError =
  | _JTDTypeError<"discriminator", "object", string>
  | DiscrErrorObj<DiscrError.Tag>
  | DiscrErrorObj<DiscrError.Mapping>

const error: KeywordErrorDefinition = {
  message: (cxt) => {
    const {schema, params} = cxt
    return params.discrError
      ? params.discrError === DiscrError.Tag
        ? `tag "${schema}" must be string`
        : `value of tag "${schema}" must be in mapping`
      : typeErrorMessage(cxt, "object")
  },
  params: (cxt) => {
    const {schema, params} = cxt
    return params.discrError
      ? _`{error: ${params.discrError}, tag: ${schema}, tagValue: ${params.tag}}`
      : typeErrorParams(cxt, "object")
  },
}

const def: CodeKeywordDefinition = {
  keyword: "discriminator",
  schemaType: "string",
  implements: ["mapping"],
  error,
  code(cxt: KeywordCxt) {
    checkMetadata(cxt)
    const {gen, data, schema, parentSchema} = cxt
    const [valid, cond] = checkNullableObject(cxt, data)

    gen.if(cond)
    validateDiscriminator()
    gen.elseIf(not(valid))
    cxt.error()
    gen.endIf()
    cxt.ok(valid)

    function validateDiscriminator(): void {
      const tag = gen.const("tag", _`${data}${getProperty(schema)}`)
      gen.if(_`${tag} === undefined`)
      cxt.error(false, {discrError: DiscrError.Tag, tag})
      gen.elseIf(_`typeof ${tag} == "string"`)
      validateMapping(tag)
      gen.else()
      cxt.error(false, {discrError: DiscrError.Tag, tag}, {instancePath: schema})
      gen.endIf()
    }

    function validateMapping(tag: Name): void {
      gen.if(false)
      for (const tagValue in parentSchema.mapping) {
        gen.elseIf(_`${tag} === ${tagValue}`)
        gen.assign(valid, applyTagSchema(tagValue))
      }
      gen.else()
      cxt.error(
        false,
        {discrError: DiscrError.Mapping, tag},
        {instancePath: schema, schemaPath: "mapping", parentSchema: true}
      )
      gen.endIf()
    }

    function applyTagSchema(schemaProp: string): Name {
      const _valid = gen.name("valid")
      cxt.subschema(
        {
          keyword: "mapping",
          schemaProp,
          jtdDiscriminator: schema,
        },
        _valid
      )
      return _valid
    }
  },
}

export default def
