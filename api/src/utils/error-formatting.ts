import { ErrorObject } from 'ajv';

export type FormattedError = {
  type: 'error';
  message:
    | 'You have not provided the valid links for us to inspect your work.'
    | 'That does not appear to be a valid challenge submission.'
    // the next isn't generated here, but the type is more general.
    | 'You have to complete the project before you can submit a URL.';
};

/**
 * Format invalid challenge submission errors.
 *
 * @param errors An array of validation errors.
 * @returns Formatted errors that can be used in the response.
 */
export const formatValidationError = (
  errors: ErrorObject[]
): FormattedError => {
  if (errors.length !== 1) {
    throw new Error(
      'Bad Argument: the array of errors must have exactly one element.'
    );
  }

  return errors[0]?.params.missingProperty === 'solution'
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
