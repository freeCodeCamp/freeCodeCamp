import {KeywordCxt} from "../../ajv"
import type {CodeKeywordDefinition} from "../../types"
import {alwaysValidSchema} from "../../compile/util"

const def: CodeKeywordDefinition = {
  keyword: "metadata",
  schemaType: "object",
  code(cxt: KeywordCxt) {
    checkMetadata(cxt)
    const {gen, schema, it} = cxt
    if (alwaysValidSchema(it, schema)) return
    const valid = gen.name("valid")
    cxt.subschema({keyword: "metadata", jtdMetadata: true}, valid)
    cxt.ok(valid)
  },
}

export function checkMetadata({it, keyword}: KeywordCxt, metadata?: boolean): void {
  if (it.jtdMetadata !== metadata) {
    throw new Error(`JTD: "${keyword}" cannot be used in this schema location`)
  }
}

export default def
