import type {KeywordDefinition, KeywordErrorDefinition, KeywordCxt, ErrorObject} from "ajv"
import {_, str, nil, Name} from "ajv/dist/compile/codegen"
import type {DefinitionOptions} from "./_types"
import {metaSchemaRef} from "./_util"

export type SelectError = ErrorObject<"select", {failingCase?: string; failingDefault?: true}>

const error: KeywordErrorDefinition = {
  message: ({params: {schemaProp}}) =>
    schemaProp
      ? str`should match case "${schemaProp}" schema`
      : str`should match default case schema`,
  params: ({params: {schemaProp}}) =>
    schemaProp ? _`{failingCase: ${schemaProp}}` : _`{failingDefault: true}`,
}

export default function getDef(opts?: DefinitionOptions): KeywordDefinition[] {
  const metaSchema = metaSchemaRef(opts)

  return [
    {
      keyword: "select",
      schemaType: ["string", "number", "boolean", "null"],
      $data: true,
      error,
      dependencies: ["selectCases"],
      code(cxt: KeywordCxt) {
        const {gen, schemaCode, parentSchema} = cxt
        cxt.block$data(nil, () => {
          const valid = gen.let("valid", true)
          const schValid = gen.name("_valid")
          const value = gen.const("value", _`${schemaCode} === null ? "null" : ${schemaCode}`)
          gen.if(false) // optimizer should remove it from generated code
          for (const schemaProp in parentSchema.selectCases) {
            cxt.setParams({schemaProp})
            gen.elseIf(_`"" + ${value} == ${schemaProp}`) // intentional ==, to match numbers and booleans
            const schCxt = cxt.subschema({keyword: "selectCases", schemaProp}, schValid)
            cxt.mergeEvaluated(schCxt, Name)
            gen.assign(valid, schValid)
          }
          gen.else()
          if (parentSchema.selectDefault !== undefined) {
            cxt.setParams({schemaProp: undefined})
            const schCxt = cxt.subschema({keyword: "selectDefault"}, schValid)
            cxt.mergeEvaluated(schCxt, Name)
            gen.assign(valid, schValid)
          }
          gen.endIf()
          cxt.pass(valid)
        })
      },
    },
    {
      keyword: "selectCases",
      dependencies: ["select"],
      metaSchema: {
        type: "object",
        additionalProperties: metaSchema,
      },
    },
    {
      keyword: "selectDefault",
      dependencies: ["select", "selectCases"],
      metaSchema,
    },
  ]
}

module.exports = getDef
