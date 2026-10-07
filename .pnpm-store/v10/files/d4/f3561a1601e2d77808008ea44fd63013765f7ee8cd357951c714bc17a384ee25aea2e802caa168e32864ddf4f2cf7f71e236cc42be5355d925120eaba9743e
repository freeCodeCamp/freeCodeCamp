import type {CodeKeywordDefinition, KeywordCxt} from "ajv"
import {_, or, and, getProperty, Code} from "ajv/dist/compile/codegen"

export default function getDef(): CodeKeywordDefinition {
  return {
    keyword: "deepRequired",
    type: "object",
    schemaType: "array",
    code(ctx: KeywordCxt) {
      const {schema, data} = ctx
      const props = (schema as string[]).map((jp: string) => _`(${getData(jp)}) === undefined`)
      ctx.fail(or(...props))

      function getData(jsonPointer: string): Code {
        if (jsonPointer === "") throw new Error("empty JSON pointer not allowed")
        const segments = jsonPointer.split("/")
        let x: Code = data
        const xs = segments.map((s, i) =>
          i ? (x = _`${x}${getProperty(unescapeJPSegment(s))}`) : x
        )
        return and(...xs)
      }
    },
    metaSchema: {
      type: "array",
      items: {type: "string", format: "json-pointer"},
    },
  }
}

function unescapeJPSegment(s: string): string {
  return s.replace(/~1/g, "/").replace(/~0/g, "~")
}

module.exports = getDef
