import type {CodeKeywordDefinition, ErrorNoParams, AnySchema} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {alwaysValidSchema} from "../../compile/util"

export type NotKeywordError = ErrorNoParams<"not", AnySchema>

const def: CodeKeywordDefinition = {
  keyword: "not",
  schemaType: ["object", "boolean"],
  trackErrors: true,
  code(cxt: KeywordCxt) {
    const {gen, schema, it} = cxt
    if (alwaysValidSchema(it, schema)) {
      cxt.fail()
      return
    }

    const valid = gen.name("valid")
    cxt.subschema(
      {
        keyword: "not",
        compositeRule: true,
        createErrors: false,
        allErrors: false,
      },
      valid
    )

    cxt.failResult(
      valid,
      () => cxt.reset(),
      () => cxt.error()
    )
  },
  error: {message: "must NOT be valid"},
}

export default def
