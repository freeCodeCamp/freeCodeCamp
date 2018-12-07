/* global describe it expect */
import { mockArguments, slugWithId} from '../src/__mocks__/news-article';
import { createArticleSlug } from './news';

describe('news utils', () => {
  describe('createArticleSlug', () => {

    it('returns a string', () => {
      expect(typeof createArticleSlug(mockArguments)).toEqual('string');
    });

    it('throws when values are missing', () => {
      expect.assertions(3);
      /* eslint-disable no-undefined */
      expect(() =>
        createArticleSlug({ ...mockArguments, shortId: undefined })
      ).toThrow();
      expect(() =>
        createArticleSlug({ ...mockArguments, slugPart: undefined })
      ).toThrow();
      expect(() =>
        createArticleSlug({ ...mockArguments, username: undefined })
      ).toThrow();
    });

    it('creates a slug in the expected format', () => {
      const result = createArticleSlug(mockArguments);

      expect(result).toEqual(slugWithId);
    });
  });
});
