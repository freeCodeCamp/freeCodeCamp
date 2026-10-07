import type {
  CodeKeywordDefinition,
  ErrorObject,
  KeywordErrorDefinition,
  AnySchema,
} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, not} from "../../compile/codegen"
import {alwaysValidSchema} from "../../compile/util"

export type PropertyNamesError = ErrorObject<"propertyNames", {propertyName: string}, AnySchema>

const error: KeywordErrorDefinition = {
  message: "property name must be valid",
  params: ({params}) => _`{propertyName: ${params.propertyName}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "propertyNames",
  type: "object",
  schemaType: ["object", "boolean"],
  error,
  code(cxt: KeywordCxt) {
    const {gen, schema, data, it} = cxt
    if (alwaysValidSchema(it, schema)) return
    const valid = gen.name("valid")

    gen.forIn("key", data, (key) => {
      cxt.setParams({propertyName: key})
      cxt.subschema(
        {
          keyword: "propertyNames",
          data: key,
          dataTypes: ["string"],
          propertyName: key,
          compositeRule: true,
        },
        valid
      )
      gen.if(not(valid), () => {
        cxt.error(true)
        if (!it.allErrors) gen.break()
      })
    })

    cxt.ok(valid)
  },
}

export default def
