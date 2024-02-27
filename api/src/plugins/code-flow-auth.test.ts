import Fastify, { FastifyInstance } from 'fastify';
import fastifyCookie from '@fastify/cookie';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, HOME_LOCATION, JWT_SECRET } from '../utils/env';
import { createAccessToken } from '../utils/tokens';
import codeFlowAuth from './code-flow-auth';

describe('auth', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(fastifyCookie);
    await fastify.register(codeFlowAuth);
  });

  afterEach(async () => {
    await fastify.close();
  });

  describe('setAccessTokenCookie (decorator)', () => {
    it('should set the jwt_access_token cookie', async () => {
      const token = createAccessToken('test-id');
      fastify.get('/test', async (req, reply) => {
        reply.setAccessTokenCookie(token);
        return { ok: true };
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/test'
      });

      const signedToken = jwt.sign({ accessToken: token }, JWT_SECRET);
      expect(res.cookies[0]).toEqual(
        expect.objectContaining({
          name: 'jwt_access_token',
          value: signedToken,
          path: '/',
          sameSite: 'Lax',
          domain: COOKIE_DOMAIN
        })
      );
    });
  });

  // NOTE: fastify.inject handles all the mocking, but we need a way to access
  // the system under test. Reply.redirect is just there so that we can assert
  // what getValidReferrer returns.
  describe('getValidReferrer', () => {
    const fCCDotOrg = 'https://www.freecodecamp.org';
    beforeEach(() => {
      fastify.get('/test', async (req, reply) => {
        void reply.redirect(req.getValidReferrer());
      });
    });

    it('should use HOME_LOCATION as the default origin', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: 'https://an.n.random.origin'
        }
      });

      expect(res.headers.location).toBe(HOME_LOCATION);
    });

    it('should use the referer as the origin if it is a valid origin', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: fCCDotOrg
        }
      });

      expect(res.headers.location).toBe(fCCDotOrg);
    });

    it('should ignore everything after the origin', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: fCCDotOrg + '/stuff/?and=things'
        }
      });

      expect(res.headers.location).toBe(fCCDotOrg);
    });

    it('should default to HOME_LOCATION if the referer is gibberish', async () => {
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: 'gibberish'
        }
      });

      expect(res.headers.location).toBe(HOME_LOCATION);
    });

    it('should log a warning if the referer is invalid', async () => {
      const warnSpy = jest.spyOn(fastify.log, 'warn');
      const fakeFCCDotOrg = 'https://www.freecodecampp.org';
      const res = await fastify.inject({
        method: 'GET',
        url: '/test',
        headers: {
          referer: fakeFCCDotOrg
        }
      });

      expect(res.headers.location).toBe(HOME_LOCATION);
      expect(warnSpy).toHaveBeenCalledWith('Invalid referer: ' + fakeFCCDotOrg);
    });
  });
});
