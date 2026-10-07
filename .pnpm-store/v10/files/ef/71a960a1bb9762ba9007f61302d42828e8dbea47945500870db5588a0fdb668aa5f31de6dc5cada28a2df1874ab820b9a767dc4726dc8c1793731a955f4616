import type {
  CodeKeywordDefinition,
  ErrorObject,
  KeywordErrorDefinition,
  AnySchema,
} from "../../types"
import type {SchemaObjCxt} from "../../compile"
import type {KeywordCxt} from "../../compile/validate"
import {_, str, not, Name} from "../../compile/codegen"
import {alwaysValidSchema, checkStrictMode} from "../../compile/util"

export type IfKeywordError = ErrorObject<"if", {failingKeyword: string}, AnySchema>

const error: KeywordErrorDefinition = {
  message: ({params}) => str`must match "${params.ifClause}" schema`,
  params: ({params}) => _`{failingKeyword: ${params.ifClause}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "if",
  schemaType: ["object", "boolean"],
  trackErrors: true,
  error,
  code(cxt: KeywordCxt) {
    const {gen, parentSchema, it} = cxt
    if (parentSchema.then === undefined && parentSchema.else === undefined) {
      checkStrictMode(it, '"if" without "then" and "else" is ignored')
    }
    const hasThen = hasSchema(it, "then")
    const hasElse = hasSchema(it, "else")
    if (!hasThen && !hasElse) return

    const valid = gen.let("valid", true)
    const schValid = gen.name("_valid")
    validateIf()
    cxt.reset()

    if (hasThen && hasElse) {
      const ifClause = gen.let("ifClause")
      cxt.setParams({ifClause})
      gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause))
    } else if (hasThen) {
      gen.if(schValid, validateClause("then"))
    } else {
      gen.if(not(schValid), validateClause("else"))
    }

    cxt.pass(valid, () => cxt.error(true))

    function validateIf(): void {
      const schCxt = cxt.subschema(
        {
          keyword: "if",
          compositeRule: true,
          createErrors: false,
          allErrors: false,
        },
        schValid
      )
      cxt.mergeEvaluated(schCxt)
    }

    function validateClause(keyword: string, ifClause?: Name): () => void {
      return () => {
        const schCxt = cxt.subschema({keyword}, schValid)
        gen.assign(valid, schValid)
        cxt.mergeValidEvaluated(schCxt, valid)
        if (ifClause) gen.assign(ifClause, _`${keyword}`)
        else cxt.setParams({ifClause: keyword})
      }
    }
  },
}

function hasSchema(it: SchemaObjCxt, keyword: string): boolean {
  const schema = it.schema[keyword]
  return schema !== undefined && !alwaysValidSchema(it, schema)
}

export default def
