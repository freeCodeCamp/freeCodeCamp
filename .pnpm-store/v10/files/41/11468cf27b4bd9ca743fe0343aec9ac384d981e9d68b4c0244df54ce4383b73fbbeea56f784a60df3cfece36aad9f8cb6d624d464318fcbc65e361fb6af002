import type {CodeKeywordDefinition} from "../../types"
import {dynamicAnchor} from "./dynamicAnchor"
import {checkStrictMode} from "../../compile/util"

const def: CodeKeywordDefinition = {
  keyword: "$recursiveAnchor",
  schemaType: "boolean",
  code(cxt) {
    if (cxt.schema) dynamicAnchor(cxt, "")
    else checkStrictMode(cxt.it, "$recursiveAnchor: false is ignored")
  },
}

export default def
