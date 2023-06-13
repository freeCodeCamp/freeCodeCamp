import { ErrorObject } from 'ajv';

type FormattedError = {
  type: 'error';
  message: string;
};

// This only formats invalid challenge submission for now.
export const formatValidationError = (
  error: ErrorObject[]
): FormattedError[] => {
  return error.map(err => {
    return err.params.missingProperty === 'solution'
      ? {
          type: 'error',
          message:
            'You have not provided the valid links for us to inspect your work.'
        }
      : {
          type: 'error',
          message: 'That does not appear to be a valid challenge submission.'
        };
  });
};
