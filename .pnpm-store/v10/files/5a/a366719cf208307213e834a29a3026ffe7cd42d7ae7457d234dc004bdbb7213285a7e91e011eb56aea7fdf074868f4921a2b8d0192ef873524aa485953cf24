import type {
  CodeKeywordDefinition,
  KeywordErrorDefinition,
  ErrorObject,
  AnySchema,
} from "../../types"
import type {KeywordCxt} from "../../compile/validate"
import {_, str} from "../../compile/codegen"
import {alwaysValidSchema} from "../../compile/util"
import {validateArray} from "../code"
import {validateAdditionalItems} from "./additionalItems"

export type ItemsError = ErrorObject<"items", {limit: number}, AnySchema>

const error: KeywordErrorDefinition = {
  message: ({params: {len}}) => str`must NOT have more than ${len} items`,
  params: ({params: {len}}) => _`{limit: ${len}}`,
}

const def: CodeKeywordDefinition = {
  keyword: "items",
  type: "array",
  schemaType: ["object", "boolean"],
  before: "uniqueItems",
  error,
  code(cxt: KeywordCxt) {
    const {schema, parentSchema, it} = cxt
    const {prefixItems} = parentSchema
    it.items = true
    if (alwaysValidSchema(it, schema)) return
    if (prefixItems) validateAdditionalItems(cxt, prefixItems)
    else cxt.ok(validateArray(cxt))
  },
}

export default def
