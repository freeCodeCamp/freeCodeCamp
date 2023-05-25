import { normalizeTwitter } from './normalize';

describe('normalize', () => {
  describe('normalizeTwitter', () => {
    it('returns an object with the twitter property', () => {
      expect(normalizeTwitter('@a_generic_user')).toEqual(
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        expect.objectContaining({ twitter: expect.any(String) })
      );
    });
    it('returns the input if it is a url', () => {
      const url = 'https://twitter.com/a_generic_user';
      expect(normalizeTwitter(url)).toEqual({ twitter: url });
    });
    it('adds the handle to twitter.com if it is not a url', () => {
      const handle = '@a_generic_user';
      expect(normalizeTwitter(handle)).toEqual({
        twitter: `https://twitter.com/a_generic_user`
      });
    });
    it('returns an empty string if that is the input', () => {
      expect(normalizeTwitter('')).toStrictEqual({});
    });
  });
});
