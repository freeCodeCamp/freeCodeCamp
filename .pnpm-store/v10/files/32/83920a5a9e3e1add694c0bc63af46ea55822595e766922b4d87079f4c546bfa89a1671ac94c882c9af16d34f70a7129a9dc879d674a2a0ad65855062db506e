import type {CodeKeywordDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {validateProperties, error} from "./properties"

const def: CodeKeywordDefinition = {
  keyword: "optionalProperties",
  schemaType: "object",
  error,
  code(cxt: KeywordCxt) {
    if (cxt.parentSchema.properties) return
    validateProperties(cxt)
  },
}

export default def
