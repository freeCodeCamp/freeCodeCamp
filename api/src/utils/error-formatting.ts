import { ErrorObject } from 'ajv';

type FormattedError = {
  type: 'error';
  message: string;
};

// TODO(Post-MVP): Normalize error responses (either msg or message, not both)
type CodeRoadError = {
  type: 'error';
  msg: string;
};

const getError = (errors: ErrorObject[]): ErrorObject => {
  // This is a guard against accidentally enabling allErrors in ajv and making
  // the server more vulnerable to DOS.
  const error = errors[0];
  if (!error || errors.length !== 1) {
    throw new Error(
      'Bad Argument: the array of errors must have exactly one element.'
    );
  }
  return error;
};

/**
 * Format validation errors for /project-completed.
 *
 * @param errors An array of validation errors.
 * @returns Formatted errors that can be used in the response.
 */
export const formatProjectCompletedValidation = (
  errors: ErrorObject[]
): FormattedError => {
  const error = getError(errors);

  // TODO: split this into two functions. There's no need for it to handle both
  // /project-completed and /save-challenge
  return error.instancePath === '' &&
    error.params.missingProperty === 'solution'
    ? {
        type: 'error',
        message:
          'You have not provided the valid links for us to inspect your work.'
      }
    : {
        type: 'error',
        message: 'That does not appear to be a valid challenge submission.'
      };
};

/**
 * Format validation errors for /coderoad-challenge-completed.
 *
 * @param errors An array of validation errors.
 * @returns Formatted errors that can be used in the response.
 */
export const formatCoderoadChallengeCompletedValidation = (
  errors: ErrorObject[]
): CodeRoadError => {
  const error = getError(errors);

  // TODO(Post-MVP): Return error saying that the body is not an object.
  if (error.instancePath === '' && error.message === 'must be object')
    return { type: 'error', msg: `'tutorialId' not found in request body` };

  if (
    error.instancePath === '' &&
    error.params.missingProperty === 'coderoad-user-token'
  ) {
    return {
      type: 'error',
      msg: `'Coderoad-User-Token' not found in request headers`
    };
  } else {
    // by process of elimination:
    return { type: 'error', msg: `'tutorialId' not found in request body` };
  }
};
