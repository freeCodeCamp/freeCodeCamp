import { normalizeTwitter } from './normalize';

describe('normalize', () => {
  describe('normalizeTwitter', () => {
    it('returns the input if it is a url', () => {
      const url = 'https://twitter.com/a_generic_user';
      expect(normalizeTwitter(url)).toEqual(url);
    });
    it('adds the handle to twitter.com if it is not a url', () => {
      const handle = '@a_generic_user';
      expect(normalizeTwitter(handle)).toEqual(
        'https://twitter.com/a_generic_user'
      );
    });
    it('returns undefined  if that is the input', () => {
      expect(normalizeTwitter('')).toBeUndefined();
    });
  });
});
