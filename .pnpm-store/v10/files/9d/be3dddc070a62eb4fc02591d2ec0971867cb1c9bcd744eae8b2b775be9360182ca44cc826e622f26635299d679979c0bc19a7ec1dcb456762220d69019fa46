import { devAssert } from '../jsutils/devAssert.mjs';
import { GraphQLError } from '../error/GraphQLError.mjs';
import { isNameContinue, isNameStart } from '../language/characterClasses.mjs';
/**
 * Upholds the spec rules about naming.
 */

export function assertName(name) {
  name != null || devAssert(false, 'Must provide name.');
  typeof name === 'string' || devAssert(false, 'Expected name to be a string.');

  if (name.length === 0) {
    throw new GraphQLError('Expected name to be a non-empty string.');
  }

  for (let i = 1; i < name.length; ++i) {
    if (!isNameContinue(name.charCodeAt(i))) {
      throw new GraphQLError(
        `Names must only contain [_a-zA-Z0-9] but "${name}" does not.`,
      );
    }
  }

  if (!isNameStart(name.charCodeAt(0))) {
    throw new GraphQLError(
      `Names must start with [_a-zA-Z] but "${name}" does not.`,
    );
  }

  return name;
}
/**
 * Upholds the spec rules about naming enum values.
 *
 * @internal
 */

export function assertEnumValueName(name) {
  if (name === 'true' || name === 'false' || name === 'null') {
    throw new GraphQLError(`Enum values cannot be named: ${name}`);
  }

  return assertName(name);
}
