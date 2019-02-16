/* global describe xdescribe it expect */
import { isWhiteListedPath } from './jwt-authorization';

describe('jwt-authorization', () => {
  describe('isWhiteListedPath', () => {
    const whiteList = [/^\/is-ok\//, /^\/this-is\/also\/ok\//];

    it('returns a boolean', () => {
      const result = isWhiteListedPath();

      expect(typeof result).toBe('boolean');
    });

    it('returns true for a white listed path', () => {
      expect.assertions(2);

      const resultA = isWhiteListedPath('/is-ok/should-be/good', whiteList);
      const resultB = isWhiteListedPath('/this-is/also/ok/surely', whiteList);
      expect(resultA).toBe(true);
      expect(resultB).toBe(true);
    });

    it('returns false for a non-white-listed path', () => {
      const result = isWhiteListedPath('/hax0r-42/no-go', whiteList);
      expect(result).toBe(false);
    });
  });

  xdescribe('authorizeByJWT');
});
