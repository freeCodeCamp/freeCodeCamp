import type {CodeKeywordDefinition, ErrorObject} from "../../types"
import {
  validatePropertyDeps,
  error,
  DependenciesErrorParams,
  PropertyDependencies,
} from "../applicator/dependencies"

export type DependentRequiredError = ErrorObject<
  "dependentRequired",
  DependenciesErrorParams,
  PropertyDependencies
>

const def: CodeKeywordDefinition = {
  keyword: "dependentRequired",
  type: "object",
  schemaType: "object",
  error,
  code: (cxt) => validatePropertyDeps(cxt),
}

export default def
