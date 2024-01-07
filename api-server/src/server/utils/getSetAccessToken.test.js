import jwt from 'jsonwebtoken';
import { mockReq, mockRes } from '../boot_tests/challenge.test';
import {
  getAccessTokenFromRequest,
  errorTypes,
  setAccessTokenToResponse,
  removeCookies
} from './getSetAccessToken';

describe('getSetAccessToken', () => {
  const validJWTSecret = 'this is a super secret string';
  const invalidJWTSecret = 'This is not correct secret';
  const now = new Date(Date.now());
  const theBeginningOfTime = new Date(0);
  const domain = process.env.COOKIE_DOMAIN || 'localhost';
  const accessToken = {
    id: '123abc',
    userId: '456def',
    ttl: 60000,
    created: now
  };

  describe('getAccessTokenFromRequest', () => {
    it('return `no token` error if no token is found', () => {
      const req = mockReq({ headers: {}, cookie: {} });
      const result = getAccessTokenFromRequest(req, validJWTSecret);
      expect(result.error).toEqual(errorTypes.noTokenFound);
    });

    describe('cookies', () => {
      it('returns `invalid token` error for malformed tokens', () => {
        const invalidJWT = jwt.sign({ accessToken }, invalidJWTSecret);
        // eslint-disable-next-line camelcase
        const req = mockReq({ cookie: { jwt_access_token: invalidJWT } });
        const result = getAccessTokenFromRequest(req, validJWTSecret);

        expect(result.error).toEqual(errorTypes.invalidToken);
      });

      it('returns `expired token` error for expired tokens', () => {
        const invalidJWT = jwt.sign(
          { accessToken: { ...accessToken, created: theBeginningOfTime } },
          validJWTSecret
        );
        // eslint-disable-next-line camelcase
        const req = mockReq({ cookie: { jwt_access_token: invalidJWT } });
        const result = getAccessTokenFromRequest(req, validJWTSecret);

        expect(result.error).toEqual(errorTypes.expiredToken);
      });

      it('returns a valid access token with no errors ', () => {
        expect.assertions(2);
        const validJWT = jwt.sign({ accessToken }, validJWTSecret);
        // eslint-disable-next-line camelcase
        const req = mockReq({ cookie: { jwt_access_token: validJWT } });
        const result = getAccessTokenFromRequest(req, validJWTSecret);

        expect(result.error).toBeFalsy();
        expect(result.accessToken).toEqual({
          ...accessToken,
          created: accessToken.created.toISOString()
        });
      });
    });
  });

  describe('setAccessTokenToResponse', () => {
    it('sets a jwt access token cookie in the response', () => {
      const req = mockReq();
      const res = mockRes();

      const expectedJWT = jwt.sign({ accessToken }, validJWTSecret);

      setAccessTokenToResponse({ accessToken }, req, res, validJWTSecret);

      expect(res.cookie).toHaveBeenNthCalledWith(
        1,
        'jwt_access_token',
        expectedJWT,
        {
          signed: false,
          domain,
          maxAge: accessToken.ttl
        }
      );
    });
  });

  describe('removeCookies', () => {
    // eslint-disable-next-line max-len
    it('removes four cookies set in the lifetime of an authenticated session', () => {
      // expect.assertions(4);
      const req = mockReq();
      const res = mockRes();
      const jwtOptions = { signed: false, domain };

      removeCookies(req, res);

      expect(res.clearCookie).toHaveBeenNthCalledWith(
        1,
        'jwt_access_token',
        jwtOptions
      );
      expect(res.clearCookie).toHaveBeenNthCalledWith(
        2,
        'access_token',
        jwtOptions
      );
      expect(res.clearCookie).toHaveBeenNthCalledWith(3, 'userId', jwtOptions);
      expect(res.clearCookie).toHaveBeenNthCalledWith(4, '_csrf', jwtOptions);
    });
  });
});
