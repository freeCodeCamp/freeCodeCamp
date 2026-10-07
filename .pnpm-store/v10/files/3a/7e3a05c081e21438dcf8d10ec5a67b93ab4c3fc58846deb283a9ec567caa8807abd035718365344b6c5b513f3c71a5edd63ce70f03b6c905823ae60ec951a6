import { didYouMean } from '../jsutils/didYouMean.mjs';
import { inspect } from '../jsutils/inspect.mjs';
import { invariant } from '../jsutils/invariant.mjs';
import { isIterableObject } from '../jsutils/isIterableObject.mjs';
import { isObjectLike } from '../jsutils/isObjectLike.mjs';
import { addPath, pathToArray } from '../jsutils/Path.mjs';
import { printPathArray } from '../jsutils/printPathArray.mjs';
import { suggestionList } from '../jsutils/suggestionList.mjs';
import { GraphQLError } from '../error/GraphQLError.mjs';
import {
  isInputObjectType,
  isLeafType,
  isListType,
  isNonNullType,
} from '../type/definition.mjs';

/**
 * Coerces a JavaScript value given a GraphQL Input Type.
 */
export function coerceInputValue(inputValue, type, onError = defaultOnError) {
  return coerceInputValueImpl(inputValue, type, onError, undefined);
}

function defaultOnError(path, invalidValue, error) {
  let errorPrefix = 'Invalid value ' + inspect(invalidValue);

  if (path.length > 0) {
    errorPrefix += ` at "value${printPathArray(path)}"`;
  }

  error.message = errorPrefix + ': ' + error.message;
  throw error;
}

function coerceInputValueImpl(inputValue, type, onError, path) {
  if (isNonNullType(type)) {
    if (inputValue != null) {
      return coerceInputValueImpl(inputValue, type.ofType, onError, path);
    }

    onError(
      pathToArray(path),
      inputValue,
      new GraphQLError(
        `Expected non-nullable type "${inspect(type)}" not to be null.`,
      ),
    );
    return;
  }

  if (inputValue == null) {
    // Explicitly return the value null.
    return null;
  }

  if (isListType(type)) {
    const itemType = type.ofType;

    if (isIterableObject(inputValue)) {
      return Array.from(inputValue, (itemValue, index) => {
        const itemPath = addPath(path, index, undefined);
        return coerceInputValueImpl(itemValue, itemType, onError, itemPath);
      });
    } // Lists accept a non-list value as a list of one.

    return [coerceInputValueImpl(inputValue, itemType, onError, path)];
  }

  if (isInputObjectType(type)) {
    if (!isObjectLike(inputValue) || Array.isArray(inputValue)) {
      onError(
        pathToArray(path),
        inputValue,
        new GraphQLError(`Expected type "${type.name}" to be an object.`),
      );
      return;
    }

    const coercedValue = Object.create(null);
    const fieldDefs = type.getFields();

    for (const field of Object.values(fieldDefs)) {
      const fieldValue = inputValue[field.name];

      if (fieldValue === undefined) {
        if (field.defaultValue !== undefined) {
          coercedValue[field.name] = field.defaultValue;
        } else if (isNonNullType(field.type)) {
          const typeStr = inspect(field.type);
          onError(
            pathToArray(path),
            inputValue,
            new GraphQLError(
              `Field "${field.name}" of required type "${typeStr}" was not provided.`,
            ),
          );
        }

        continue;
      }

      coercedValue[field.name] = coerceInputValueImpl(
        fieldValue,
        field.type,
        onError,
        addPath(path, field.name, type.name),
      );
    } // Ensure every provided field is defined.

    for (const fieldName of Object.keys(inputValue)) {
      if (!fieldDefs[fieldName]) {
        const suggestions = suggestionList(
          fieldName,
          Object.keys(type.getFields()),
        );
        onError(
          pathToArray(path),
          inputValue,
          new GraphQLError(
            `Field "${fieldName}" is not defined by type "${type.name}".` +
              didYouMean(suggestions),
          ),
        );
      }
    }

    if (type.isOneOf) {
      const keys = Object.keys(coercedValue);

      if (keys.length !== 1) {
        onError(
          pathToArray(path),
          inputValue,
          new GraphQLError(
            `Exactly one key must be specified for OneOf type "${type.name}".`,
          ),
        );
      }

      const key = keys[0];
      const value = coercedValue[key];

      if (value === null) {
        onError(
          pathToArray(path).concat(key),
          value,
          new GraphQLError(`Field "${key}" must be non-null.`),
        );
      }
    }

    return { ...coercedValue };
  }

  if (isLeafType(type)) {
    let parseResult; // Scalars and Enums determine if a input value is valid via parseValue(),
    // which can throw to indicate failure. If it throws, maintain a reference
    // to the original error.

    try {
      parseResult = type.parseValue(inputValue);
    } catch (error) {
      if (error instanceof GraphQLError) {
        onError(pathToArray(path), inputValue, error);
      } else {
        onError(
          pathToArray(path),
          inputValue,
          new GraphQLError(`Expected type "${type.name}". ` + error.message, {
            originalError: error,
          }),
        );
      }

      return;
    }

    if (parseResult === undefined) {
      onError(
        pathToArray(path),
        inputValue,
        new GraphQLError(`Expected type "${type.name}".`),
      );
    }

    return parseResult;
  }
  /* c8 ignore next 3 */
  // Not reachable, all possible types have been considered.

  false || invariant(false, 'Unexpected input type: ' + inspect(type));
}
