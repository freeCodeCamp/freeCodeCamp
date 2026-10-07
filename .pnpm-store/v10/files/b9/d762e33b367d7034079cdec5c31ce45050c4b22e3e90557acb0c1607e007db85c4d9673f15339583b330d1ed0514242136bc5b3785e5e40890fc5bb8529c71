import type {CodeKeywordDefinition, ErrorNoParams, AnySchema} from "../../types"
import {validateUnion} from "../code"

export type AnyOfError = ErrorNoParams<"anyOf", AnySchema[]>

const def: CodeKeywordDefinition = {
  keyword: "anyOf",
  schemaType: "array",
  trackErrors: true,
  code: validateUnion,
  error: {message: "must match a schema in anyOf"},
}

export default def
