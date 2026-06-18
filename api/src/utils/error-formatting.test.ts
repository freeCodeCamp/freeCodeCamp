import { describe, test, expect } from 'vitest';
import {
  formatProjectCompletedValidation,
  formatChallengeValidation
} from './error-formatting.js';

describe('error-formatting', () => {
  describe('formatProjectCompletedValidation', () => {
    test('returns missing links message when solution is missing', () => {
      const error = [
        {
          instancePath: '',
          schemaPath: '#/required',
          keyword: 'required',
          params: { missingProperty: 'solution' },
          message: "must have required property 'solution'"
        }
      ];
      expect(formatProjectCompletedValidation(error)).toEqual({
        type: 'error',
        message:
          'You have not provided the valid links for us to inspect your work.'
      });
    });

    test('returns generic message for other errors', () => {
      const error = [
        {
          instancePath: '',
          schemaPath: '#/required',
          keyword: 'required',
          params: { missingProperty: 'id' },
          message: "must have required property 'id'"
        }
      ];
      expect(formatProjectCompletedValidation(error)).toEqual({
        type: 'error',
        message: 'That does not appear to be a valid challenge submission.'
      });
    });
  });

  describe('formatChallengeValidation', () => {
    test('returns generic message', () => {
      const error = [
        {
          instancePath: '',
          schemaPath: '#/required',
          keyword: 'required',
          params: { missingProperty: 'id' },
          message: "must have required property 'id'"
        }
      ];
      expect(formatChallengeValidation(error)).toEqual({
        type: 'error',
        message: 'That does not appear to be a valid challenge submission.'
      });
    });
  });
});
