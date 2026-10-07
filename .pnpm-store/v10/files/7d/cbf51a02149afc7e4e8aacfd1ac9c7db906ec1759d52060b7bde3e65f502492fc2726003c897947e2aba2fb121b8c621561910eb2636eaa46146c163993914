// Produce the GraphQL query recommended for a full schema introspection.
export { getIntrospectionQuery } from './getIntrospectionQuery.mjs';
// Gets the target Operation from a Document.
export { getOperationAST } from './getOperationAST.mjs'; // Gets the Type for the target Operation AST.

export { getOperationRootType } from './getOperationRootType.mjs'; // Convert a GraphQLSchema to an IntrospectionQuery.

export { introspectionFromSchema } from './introspectionFromSchema.mjs'; // Build a GraphQLSchema from an introspection result.

export { buildClientSchema } from './buildClientSchema.mjs'; // Build a GraphQLSchema from GraphQL Schema language.

export { buildASTSchema, buildSchema } from './buildASTSchema.mjs';
// Extends an existing GraphQLSchema from a parsed GraphQL Schema language AST.
export { extendSchema } from './extendSchema.mjs'; // Sort a GraphQLSchema.

export { lexicographicSortSchema } from './lexicographicSortSchema.mjs'; // Print a GraphQLSchema to GraphQL Schema language.

export {
  printSchema,
  printType,
  printIntrospectionSchema,
} from './printSchema.mjs'; // Create a GraphQLType from a GraphQL language AST.

export { typeFromAST } from './typeFromAST.mjs'; // Create a JavaScript value from a GraphQL language AST with a type.

export { valueFromAST } from './valueFromAST.mjs'; // Create a JavaScript value from a GraphQL language AST without a type.

export { valueFromASTUntyped } from './valueFromASTUntyped.mjs'; // Create a GraphQL language AST from a JavaScript value.

export { astFromValue } from './astFromValue.mjs'; // A helper to use within recursive-descent visitors which need to be aware of the GraphQL type system.

export { TypeInfo, visitWithTypeInfo } from './TypeInfo.mjs'; // Coerces a JavaScript value to a GraphQL type, or produces errors.

export { coerceInputValue } from './coerceInputValue.mjs'; // Concatenates multiple AST together.

export { concatAST } from './concatAST.mjs'; // Separates an AST into an AST per Operation.

export { separateOperations } from './separateOperations.mjs'; // Strips characters that are not significant to the validity or execution of a GraphQL document.

export { stripIgnoredCharacters } from './stripIgnoredCharacters.mjs'; // Comparators for types

export {
  isEqualType,
  isTypeSubTypeOf,
  doTypesOverlap,
} from './typeComparators.mjs'; // Asserts that a string is a valid GraphQL name

export { assertValidName, isValidNameError } from './assertValidName.mjs'; // Compares two GraphQLSchemas and detects breaking changes.

export {
  BreakingChangeType,
  DangerousChangeType,
  findBreakingChanges,
  findDangerousChanges,
} from './findBreakingChanges.mjs';
// Schema coordinates
export {
  resolveSchemaCoordinate,
  resolveASTSchemaCoordinate,
} from './resolveSchemaCoordinate.mjs';
