import { devAssert } from '../jsutils/devAssert.mjs';
import { mapValue } from '../jsutils/mapValue.mjs';
import { GraphQLError } from '../error/GraphQLError.mjs';
import { QueryDocumentKeys } from '../language/ast.mjs';
import { visit, visitInParallel } from '../language/visitor.mjs';
import { assertValidSchema } from '../type/validate.mjs';
import { TypeInfo, visitWithTypeInfo } from '../utilities/TypeInfo.mjs';
import { specifiedRules, specifiedSDLRules } from './specifiedRules.mjs';
import {
  SDLValidationContext,
  ValidationContext,
} from './ValidationContext.mjs'; // Per the specification, descriptions must not affect validation.
// See https://spec.graphql.org/draft/#sec-Descriptions

const QueryDocumentKeysToValidate = mapValue(QueryDocumentKeys, (keys) =>
  keys.filter((key) => key !== 'description'),
);
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

export function validate(
  schema,
  documentAST,
  rules = specifiedRules,
  options,
  /** @deprecated will be removed in 17.0.0 */
  typeInfo = new TypeInfo(schema),
) {
  var _options$maxErrors;

  const maxErrors =
    (_options$maxErrors =
      options === null || options === void 0 ? void 0 : options.maxErrors) !==
      null && _options$maxErrors !== void 0
      ? _options$maxErrors
      : 100;
  documentAST || devAssert(false, 'Must provide document.'); // If the schema used for validation is invalid, throw an error.

  assertValidSchema(schema);
  const abortObj = Object.freeze({});
  const errors = [];
  const context = new ValidationContext(
    schema,
    documentAST,
    typeInfo,
    (error) => {
      if (errors.length >= maxErrors) {
        errors.push(
          new GraphQLError(
            'Too many validation errors, error limit reached. Validation aborted.',
          ),
        ); // eslint-disable-next-line @typescript-eslint/no-throw-literal

        throw abortObj;
      }

      errors.push(error);
    },
  ); // This uses a specialized visitor which runs multiple visitors in parallel,
  // while maintaining the visitor skip and break API.

  const visitor = visitInParallel(rules.map((rule) => rule(context))); // Visit the whole document with each instance of all provided rules.

  try {
    visit(
      documentAST,
      visitWithTypeInfo(typeInfo, visitor),
      QueryDocumentKeysToValidate,
    );
  } catch (e) {
    if (e !== abortObj) {
      throw e;
    }
  }

  return errors;
}
/**
 * @internal
 */

export function validateSDL(
  documentAST,
  schemaToExtend,
  rules = specifiedSDLRules,
) {
  const errors = [];
  const context = new SDLValidationContext(
    documentAST,
    schemaToExtend,
    (error) => {
      errors.push(error);
    },
  );
  const visitors = rules.map((rule) => rule(context));
  visit(documentAST, visitInParallel(visitors));
  return errors;
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

export function assertValidSDL(documentAST) {
  const errors = validateSDL(documentAST);

  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join('\n\n'));
  }
}
/**
 * Utility function which asserts a SDL document is valid by throwing an error
 * if it is invalid.
 *
 * @internal
 */

export function assertValidSDLExtension(documentAST, schema) {
  const errors = validateSDL(documentAST, schema);

  if (errors.length !== 0) {
    throw new Error(errors.map((error) => error.message).join('\n\n'));
  }
}
