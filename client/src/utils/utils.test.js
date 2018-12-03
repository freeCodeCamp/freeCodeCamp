/* global describe it expect */
import {
  slugWithId,
  slugWithIdAndHash,
  slugWithIdAndQuery,
  slugWithIdAndTrailingSlash,
  slugWithoutId,
  mockId
} from '../__mocks__/news-article';

import { getShortIdFromSlug } from './';

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
});
