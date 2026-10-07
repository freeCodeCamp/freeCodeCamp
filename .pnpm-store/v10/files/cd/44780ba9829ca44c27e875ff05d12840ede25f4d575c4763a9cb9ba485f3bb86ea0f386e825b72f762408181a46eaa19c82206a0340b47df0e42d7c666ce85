import type {CodeKeywordDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {checkStrictMode} from "../../compile/util"

const def: CodeKeywordDefinition = {
  keyword: ["maxContains", "minContains"],
  type: "array",
  schemaType: "number",
  code({keyword, parentSchema, it}: KeywordCxt) {
    if (parentSchema.contains === undefined) {
      checkStrictMode(it, `"${keyword}" without "contains" is ignored`)
    }
  },
}

export default def
