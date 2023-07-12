import { ErrorObject } from 'ajv';
import { formatValidationError } from './error-formatting';

const missingSolutionError = {
  instancePath: '',
  schemaPath: '#/required',
  keyword: 'required',
  params: { missingProperty: 'solution' },
  message: "must have required property 'solution'"
};

const missingIdError = {
  instancePath: '',
  schemaPath: '#/required',
  keyword: 'required',
  params: { missingProperty: 'id' },
  message: "must have required property 'id'"
};

describe('Error formatting', () => {
  describe('formatValidationError', () => {
    it('should handle missing solutions', () => {
      const formattedError = formatValidationError([missingSolutionError]);

      expect(formattedError).toStrictEqual({
        type: 'error',
        message:
          'You have not provided the valid links for us to inspect your work.'
      });
    });

    it('should handle missing ids', () => {
      const formattedError = formatValidationError([missingIdError]);

      expect(formattedError).toStrictEqual({
        type: 'error',

        message: 'That does not appear to be a valid challenge submission.'
      });
    });

    it('should return a generic error message for other errors', () => {
      const formattedError = formatValidationError([
        {
          ...missingSolutionError,
          params: { missingProperty: 'notSolution' }
        }
      ]);

      expect(formattedError).toStrictEqual({
        type: 'error',
        message: 'That does not appear to be a valid challenge submission.'
      });
    });

    it('should throw if passed zero errors', () => {
      expect(() => formatValidationError([] as ErrorObject[])).toThrow(
        Error(
          'Bad Argument: the array of errors must have exactly one element.'
        )
      );
    });

    it('should throw if passed more than one error', () => {
      expect(() => formatValidationError([{}, {}] as ErrorObject[])).toThrow(
        Error(
          'Bad Argument: the array of errors must have exactly one element.'
        )
      );
    });
  });
});
