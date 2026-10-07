import type {CodeKeywordDefinition, KeywordErrorDefinition} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, str, operators} from "../../compile/codegen"

const error: KeywordErrorDefinition = {
  message({keyword, schemaCode}) {
    const comp = keyword === "maxProperties" ? "more" : "fewer"
    return str`must NOT have ${comp} than ${schemaCode} properties`
  },
  params: ({schemaCode}) => _`{limit: ${schemaCode}}`,
}

const def: CodeKeywordDefinition = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: true,
  error,
  code(cxt: KeywordCxt) {
    const {keyword, data, schemaCode} = cxt
    const op = keyword === "maxProperties" ? operators.GT : operators.LT
    cxt.fail$data(_`Object.keys(${data}).length ${op} ${schemaCode}`)
  },
}

export default def
