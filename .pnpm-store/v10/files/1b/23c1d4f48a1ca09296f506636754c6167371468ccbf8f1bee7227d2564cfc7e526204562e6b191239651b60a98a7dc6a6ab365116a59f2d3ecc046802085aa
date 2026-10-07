import type { Maybe } from '../jsutils/Maybe';
import { GraphQLError } from '../error/GraphQLError';
import type { DocumentNode } from '../language/ast';
import type { GraphQLSchema } from '../type/schema';
import { TypeInfo } from '../utilities/TypeInfo';
import type { SDLValidationRule, ValidationRule } from './ValidationContext';
/**
 * Implements the "Validation" section of the spec.
 *
 * Validation runs synchronously, returning an array of encountered errors, or
 * an empty array if no errors were encountered and the document is valid.
 *
 * A list of specific validation rules may be provided. If not provided, the
 * default list of rules defined by the GraphQL specification will be used.
 *
 * Each validation rules is a function which returns a visitor
 * (see the language/visitor API). Visitor methods are expected to return
 * GraphQLErrors, or Arrays of GraphQLErrors when invalid.
 *
 * Validate will stop validation after a `maxErrors` limit has been reached.
 * Attackers can send pathologically invalid queries to induce a DoS attack,
 * so by default `maxErrors` set to 100 errors.
 *
 * Optionally a custom TypeInfo instance may be provided. If not provided, one
 * will be created from the provided schema.
 */
export declare function validate(
  schema: GraphQLSchema,
  documentAST: DocumentNode,
  rules?: ReadonlyArray<ValidationRule>,
  options?: {
    maxErrors?: number;
  },
  /** @deprecated will be removed in 17.0.0 */
  typeInfo?: TypeInfo,
): ReadonlyArray<GraphQLError>;
/**
 * @internal
 */
export declare function validateSDL(
  documentAST: DocumentNode,
  schemaToExtend?: Maybe<GraphQLSchema>,
  rules?: ReadonlyArray<SDLValidationRule>,
): ReadonlyArray<GraphQLError>;
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */
export declare function assertValidSDL(documentAST: DocumentNode): void;
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */
export declare function assertValidSDLExtension(
  documentAST: DocumentNode,
  schema: GraphQLSchema,
): void;
