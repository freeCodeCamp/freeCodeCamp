/* global describe it expect */
import {
  slugWithId,
  slugWithIdAndHash,
  slugWithIdAndQuery,
  slugWithIdAndTrailingSlash,
  slugWithoutId,
  mockId
} from '../__mocks__/news-article';

import { getShortIdFromSlug, commaNumber } from './';

describe('client/src utilities', () => {
  describe('getShortIdFromSlug', () => {
    const emptyString = '';
    it('returns a string', () => {
      expect(typeof getShortIdFromSlug()).toEqual('string');
    });

    it('extracts the shortId when one is present', () => {
      const result = getShortIdFromSlug(slugWithId);
      expect(result).toEqual(mockId);
    });

    it('still returns a string when no id is found', () => {
      const result = getShortIdFromSlug(slugWithoutId);
      expect(result).toEqual(emptyString);
    });

    it('can handle query', () => {
      const result = getShortIdFromSlug(slugWithIdAndQuery);
      expect(result).toEqual(mockId);
    });

    it('can handle hash', () => {
      const result = getShortIdFromSlug(slugWithIdAndHash);
      expect(result).toEqual(mockId);
    });

    it('can handle trails slashes', () => {
      const result = getShortIdFromSlug(slugWithIdAndTrailingSlash);
      expect(result).toEqual(mockId);
    });
  });

  describe('commaNumber', () => {
    it('returns a string', () => {
      expect(typeof commaNumber(1)).toEqual('string');
    });

    it('returns a comma separated number, positive', () => {
      expect.assertions(6);
      expect(commaNumber(1000)).toEqual('1,000');
      expect(commaNumber(10000)).toEqual('10,000');
      expect(commaNumber(100000)).toEqual('100,000');
      expect(commaNumber(1000000)).toEqual('1,000,000');
      expect(commaNumber(1234567890)).toEqual('1,234,567,890');
      expect(commaNumber(Number.MAX_SAFE_INTEGER)).toEqual(
        '9,007,199,254,740,991'
      );
    });

    it('returns a comma separated number, negative', () => {
      expect.assertions(6);
      expect(commaNumber(-1000)).toEqual('-1,000');
      expect(commaNumber(-10000)).toEqual('-10,000');
      expect(commaNumber(-100000)).toEqual('-100,000');
      expect(commaNumber(-1000000)).toEqual('-1,000,000');
      expect(commaNumber(-1234567890)).toEqual('-1,234,567,890');
      expect(commaNumber(Number.MIN_SAFE_INTEGER)).toEqual(
        '-9,007,199,254,740,991'
      );
    });

  });
});
