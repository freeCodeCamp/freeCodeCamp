import * as array_ from "../../Array.js"
import * as Inspectable from "../../Inspectable.js"
import type * as AST from "../../SchemaAST.js"
import * as util_ from "./util.js"

const getErrorMessage = (
  reason: string,
  details?: string,
  path?: ReadonlyArray<PropertyKey>,
  ast?: AST.AST
): string => {
  let out = reason

  if (path && array_.isNonEmptyReadonlyArray(path)) {
    out += `\nat path: ${util_.formatPath(path)}`
  }

  if (details !== undefined) {
    out += `\ndetails: ${details}`
  }

  if (ast) {
    out += `\nschema (${ast._tag}): ${ast}`
  }

  return out
}

// ---------------------------------------------
// generic
// ---------------------------------------------

/** @internal */
export const getInvalidArgumentErrorMessage = (details: string) => getErrorMessage("Invalid Argument", details)

const getUnsupportedSchemaErrorMessage = (details?: string, path?: ReadonlyArray<PropertyKey>, ast?: AST.AST): string =>
  getErrorMessage("Unsupported schema", details, path, ast)

const getMissingAnnotationErrorMessage = (details?: string, path?: ReadonlyArray<PropertyKey>, ast?: AST.AST): string =>
  getErrorMessage("Missing annotation", details, path, ast)

// ---------------------------------------------
// Arbitrary
// ---------------------------------------------

/** @internal */
export const getArbitraryUnsupportedErrorMessage = (path: ReadonlyArray<PropertyKey>, ast: AST.AST) =>
  getUnsupportedSchemaErrorMessage("Cannot build an Arbitrary for this schema", path, ast)

/** @internal */
export const getArbitraryMissingAnnotationErrorMessage = (
  path: ReadonlyArray<PropertyKey>,
  ast: AST.AST
) =>
  getMissingAnnotationErrorMessage(
    `Generating an Arbitrary for this schema requires an "arbitrary" annotation`,
    path,
    ast
  )

/** @internal */
export const getArbitraryEmptyEnumErrorMessage = (path: ReadonlyArray<PropertyKey>) =>
  getErrorMessage("Empty Enums schema", "Generating an Arbitrary for this schema requires at least one enum", path)

// ---------------------------------------------
// Equivalence
// ---------------------------------------------

/** @internal */
export const getEquivalenceUnsupportedErrorMessage = (ast: AST.AST, path: ReadonlyArray<PropertyKey>) =>
  getUnsupportedSchemaErrorMessage("Cannot build an Equivalence", path, ast)

// ---------------------------------------------
// JSON Schema
// ---------------------------------------------

/** @internal */
export const getJSONSchemaMissingAnnotationErrorMessage = (
  path: ReadonlyArray<PropertyKey>,
  ast: AST.AST
) =>
  getMissingAnnotationErrorMessage(
    `Generating a JSON Schema for this schema requires a "jsonSchema" annotation`,
    path,
    ast
  )

/** @internal */
export const getJSONSchemaMissingIdentifierAnnotationErrorMessage = (
  path: ReadonlyArray<PropertyKey>,
  ast: AST.AST
) =>
  getMissingAnnotationErrorMessage(
    `Generating a JSON Schema for this schema requires an "identifier" annotation`,
    path,
    ast
  )

/** @internal */
export const getJSONSchemaUnsupportedPostRestElementsErrorMessage = (path: ReadonlyArray<PropertyKey>): string =>
  getErrorMessage(
    "Generating a JSON Schema for post-rest elements is not currently supported. You're welcome to contribute by submitting a Pull Request",
    undefined,
    path
  )

/** @internal */
export const getJSONSchemaUnsupportedKeyErrorMessage = (key: PropertyKey, path: ReadonlyArray<PropertyKey>): string =>
  getErrorMessage("Unsupported key", `Cannot encode ${Inspectable.formatPropertyKey(key)} key to JSON Schema`, path)

// ---------------------------------------------
// Pretty
// ---------------------------------------------

/** @internal */
export const getPrettyMissingAnnotationErrorMessage = (
  path: ReadonlyArray<PropertyKey>,
  ast: AST.AST
) => getMissingAnnotationErrorMessage(`Generating a Pretty for this schema requires a "pretty" annotation`, path, ast)

/** @internal */
export const getPrettyNeverErrorMessage = "Cannot pretty print a `never` value"

/** @internal */
export const getPrettyNoMatchingSchemaErrorMessage = (
  actual: unknown,
  path: ReadonlyArray<PropertyKey>,
  ast: AST.AST
) =>
  getErrorMessage(
    "Unexpected Error",
    `Cannot find a matching schema for ${Inspectable.formatUnknown(actual)}`,
    path,
    ast
  )

// ---------------------------------------------
// Schema
// ---------------------------------------------

/** @internal */
export const getSchemaExtendErrorMessage = (x: AST.AST, y: AST.AST, path: ReadonlyArray<PropertyKey>) =>
  getErrorMessage("Unsupported schema or overlapping types", `cannot extend ${x} with ${y}`, path)

/** @internal */
export const getSchemaUnsupportedLiteralSpanErrorMessage = (ast: AST.AST) =>
  getErrorMessage("Unsupported template literal span", undefined, undefined, ast)

// ---------------------------------------------
// AST
// ---------------------------------------------

/** @internal */
export const getASTUnsupportedSchemaErrorMessage = (ast: AST.AST) =>
  getUnsupportedSchemaErrorMessage(undefined, undefined, ast)

/** @internal */
export const getASTUnsupportedKeySchemaErrorMessage = (ast: AST.AST) =>
  getErrorMessage("Unsupported key schema", undefined, undefined, ast)

/** @internal */
export const getASTUnsupportedLiteralErrorMessage = (literal: AST.LiteralValue) =>
  getErrorMessage("Unsupported literal", `literal value: ${Inspectable.formatUnknown(literal)}`)

/** @internal */
export const getASTDuplicateIndexSignatureErrorMessage = (type: "string" | "symbol"): string =>
  getErrorMessage("Duplicate index signature", `${type} index signature`)

/** @internal */
export const getASTIndexSignatureParameterErrorMessage = getErrorMessage(
  "Unsupported index signature parameter",
  "An index signature parameter type must be `string`, `symbol`, a template literal type or a refinement of the previous types"
)

/** @internal */
export const getASTRequiredElementFollowinAnOptionalElementErrorMessage = getErrorMessage(
  "Invalid element",
  "A required element cannot follow an optional element. ts(1257)"
)

/** @internal */
export const getASTDuplicatePropertySignatureTransformationErrorMessage = (key: PropertyKey): string =>
  getErrorMessage("Duplicate property signature transformation", `Duplicate key ${Inspectable.formatUnknown(key)}`)

/** @internal */
export const getASTUnsupportedRenameSchemaErrorMessage = (ast: AST.AST): string =>
  getUnsupportedSchemaErrorMessage(undefined, undefined, ast)

/** @internal */
export const getASTDuplicatePropertySignatureErrorMessage = (key: PropertyKey): string =>
  getErrorMessage("Duplicate property signature", `Duplicate key ${Inspectable.formatUnknown(key)}`)
