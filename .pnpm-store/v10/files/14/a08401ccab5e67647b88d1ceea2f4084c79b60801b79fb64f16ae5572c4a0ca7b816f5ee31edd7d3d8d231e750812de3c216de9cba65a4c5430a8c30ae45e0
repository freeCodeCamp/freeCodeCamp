import type {CodeKeywordDefinition, KeywordCxt} from "ajv"
import {_} from "ajv/dist/compile/codegen"

const TYPES = ["undefined", "string", "number", "object", "function", "boolean", "symbol"]

export default function getDef(): CodeKeywordDefinition {
  return {
    keyword: "typeof",
    schemaType: ["string", "array"],
    code(cxt: KeywordCxt) {
      const {data, schema, schemaValue} = cxt
      cxt.fail(
        typeof schema == "string"
          ? _`typeof ${data} != ${schema}`
          : _`${schemaValue}.indexOf(typeof ${data}) < 0`
      )
    },
    metaSchema: {
      anyOf: [
        {type: "string", enum: TYPES},
        {type: "array", items: {type: "string", enum: TYPES}},
      ],
    },
  }
}

module.exports = getDef
