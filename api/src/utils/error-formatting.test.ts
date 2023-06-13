import { formatValidationError } from './error-formatting';

const missingSolutionError = [
  {
    instancePath: '',
    schemaPath: '#/required',
    keyword: 'required',
    params: { missingProperty: 'solution' },
    message: "must have required property 'solution'"
  }
];

describe('Error formatting', () => {
  describe('formatValidationError', () => {
    it('should handle missing solutions', () => {
      const formattedError = formatValidationError(missingSolutionError);

      expect(formattedError).toStrictEqual([
        {
          type: 'error',
          message:
            'You have not provided the valid links for us to inspect your work.'
        }
      ]);
    });

    it('should return a generic error message for other errors', () => {
      throw new Error('Not implemented');
    });
  });
});
