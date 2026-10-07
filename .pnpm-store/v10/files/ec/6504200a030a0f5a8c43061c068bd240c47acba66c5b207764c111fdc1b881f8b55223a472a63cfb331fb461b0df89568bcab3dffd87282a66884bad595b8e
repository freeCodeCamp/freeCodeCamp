import type {CodeKeywordDefinition} from "../../types"
import {dynamicRef} from "./dynamicRef"

const def: CodeKeywordDefinition = {
  keyword: "$recursiveRef",
  schemaType: "string",
  code: (cxt) => dynamicRef(cxt, cxt.schema),
}

export default def
