import Fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, JWT_SECRET } from '../utils/env';
import { createAccessToken } from '../utils/tokens';
import codeFlowAuth from './code-flow-auth';

describe('auth', () => {
  describe('setAccessTokenCookie (decorator)', () => {
    it('should set the jwt_access_token cookie', async () => {
      const fastify = Fastify();
      const token = createAccessToken('test-id');
      await fastify.register(fastifyCookie);
      await fastify.register(codeFlowAuth);
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
});
