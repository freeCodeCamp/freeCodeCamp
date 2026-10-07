import type {CodeKeywordDefinition, KeywordCxt, KeywordErrorDefinition, ErrorObject} from "ajv"
import {_, str, and} from "ajv/dist/compile/codegen"
import {usePattern} from "./_util"

export type PatternRequiredError = ErrorObject<"patternRequired", {missingPattern: string}>

const error: KeywordErrorDefinition = {
  message: ({params: {missingPattern}}) =>
    str`should have property matching pattern '${missingPattern}'`,
  params: ({params: {missingPattern}}) => _`{missingPattern: ${missingPattern}}`,
}

export default function getDef(): CodeKeywordDefinition {
  return {
    keyword: "patternRequired",
    type: "object",
    schemaType: "array",
    error,
    code(cxt: KeywordCxt) {
      const {gen, schema, data} = cxt
      if (schema.length === 0) return
      const valid = gen.let("valid", true)
      for (const pat of schema) validateProperties(pat)

      function validateProperties(pattern: string): void {
        const matched = gen.let("matched", false)

        gen.forIn("key", data, (key) => {
          gen.assign(matched, _`${usePattern(cxt, pattern)}.test(${key})`)
          gen.if(matched, () => gen.break())
        })

        cxt.setParams({missingPattern: pattern})
        gen.assign(valid, and(valid, matched))
        cxt.pass(valid)
      }
    },
    metaSchema: {
      type: "array",
      items: {type: "string", format: "regex"},
      uniqueItems: true,
    },
  }
}

module.exports = getDef
