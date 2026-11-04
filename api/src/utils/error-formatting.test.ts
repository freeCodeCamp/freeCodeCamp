import { describe, expect, it } from 'vitest';
import type { ErrorObject } from 'ajv';

import {
  formatCoderoadChallengeCompletedValidation,
  formatProjectCompletedValidation
} from './error-formatting.js';

const createError = (overrides: Partial<ErrorObject> = {}): ErrorObject => ({
  instancePath: '',
  schemaPath: '#/required',
  keyword: 'required',
  params: {},
  ...overrides
});

const missingProperty = (property: string): ErrorObject =>
  createError({
    params: { missingProperty: property },
    message: `must have required property '${property}'`
  });

describe('error-formatting', () => {
  describe.each([
    ['formatProjectCompletedValidation', formatProjectCompletedValidation],
    [
      'formatCoderoadChallengeCompletedValidation',
      formatCoderoadChallengeCompletedValidation
    ]
  ])('%s', (_name, format) => {
    it('throws if there are no errors', () => {
      expect(() => format([])).toThrow(
        'Bad Argument: the array of errors must have exactly one element.'
      );
    });

    it('throws if there is more than one error', () => {
      expect(() =>
        format([missingProperty('id'), missingProperty('solution')])
      ).toThrow(
        'Bad Argument: the array of errors must have exactly one element.'
      );
    });
  });

  describe('formatProjectCompletedValidation', () => {
    it('asks for valid links when the solution is missing', () => {
      expect(
        formatProjectCompletedValidation([missingProperty('solution')])
      ).toEqual({
        type: 'error',
        message:
          'You have not provided the valid links for us to inspect your work.'
      });
    });

    it.each([
      ['a different property is missing', missingProperty('id')],
      [
        'a nested solution property is missing',
        createError({
          instancePath: '/files/0',
          params: { missingProperty: 'solution' }
        })
      ],
      [
        'a property has the wrong type',
        createError({
          instancePath: '/solution',
          keyword: 'format',
          params: { format: 'url' },
          message: 'must match format "url"'
        })
      ]
    ])('returns a generic message when %s', (_case, error) => {
      expect(formatProjectCompletedValidation([error])).toEqual({
        type: 'error',
        message: 'That does not appear to be a valid challenge submission.'
      });
    });
  });

  describe('formatCoderoadChallengeCompletedValidation', () => {
    it('reports the missing header when coderoad-user-token is missing', () => {
      expect(
        formatCoderoadChallengeCompletedValidation([
          missingProperty('coderoad-user-token')
        ])
      ).toEqual({
        type: 'error',
        msg: `'Coderoad-User-Token' not found in request headers`
      });
    });

    it.each([
      [
        'the body is not an object',
        createError({
          keyword: 'type',
          params: { type: 'object' },
          message: 'must be object'
        })
      ],
      ['tutorialId is missing', missingProperty('tutorialId')]
    ])('reports the missing tutorialId when %s', (_case, error) => {
      expect(formatCoderoadChallengeCompletedValidation([error])).toEqual({
        type: 'error',
        msg: `'tutorialId' not found in request body`
      });
    });
  });
});
