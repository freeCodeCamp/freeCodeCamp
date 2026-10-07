import { GraphQLError } from '../error/GraphQLError';
import type { GraphQLSchema } from './schema';
/**
 * Implements the "Type Validation" sub-sections of the specification's
 * "Type System" section.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the Schema is valid.
 */
export declare function validateSchema(
  schema: GraphQLSchema,
): ReadonlyArray<GraphQLError>;
/**
 * Utility function which asserts a schema is valid by throwing an error if
 * it is invalid.
 */
export declare function assertValidSchema(schema: GraphQLSchema): void;
