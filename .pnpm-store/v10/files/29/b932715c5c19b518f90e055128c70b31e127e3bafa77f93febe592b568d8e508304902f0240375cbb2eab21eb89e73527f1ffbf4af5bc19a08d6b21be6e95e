import type {CodeKeywordDefinition, KeywordErrorDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, str, operators} from "../../compile/codegen"

const error: KeywordErrorDefinition = {
  message({keyword, schemaCode}) {
    const comp = keyword === "maxItems" ? "more" : "fewer"
    return str`must NOT have ${comp} than ${schemaCode} items`
  },
  params: ({schemaCode}) => _`{limit: ${schemaCode}}`,
}

const def: CodeKeywordDefinition = {
  keyword: ["maxItems", "minItems"],
  type: "array",
  schemaType: "number",
  $data: true,
  error,
  code(cxt: KeywordCxt) {
    const {keyword, data, schemaCode} = cxt
    const op = keyword === "maxItems" ? operators.GT : operators.LT
    cxt.fail$data(_`${data}.length ${op} ${schemaCode}`)
  },
}

export default def
