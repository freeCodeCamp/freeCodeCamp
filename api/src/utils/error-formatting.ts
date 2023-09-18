import { ErrorObject } from 'ajv';

type FormattedError = {
  type: 'error';
  message: string;
};

/**
 * Format invalid challenge submission errors.
 *
 * @param errors An array of validation errors.
 * @returns Formatted errors that can be used in the response.
 */
export const formatProjectCompletedValidation = (
  errors: ErrorObject[]
): FormattedError => {
  // This is a guard against accidentally enabling allErrors in ajv and making
  // the server more vulnerable to DOS.
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
