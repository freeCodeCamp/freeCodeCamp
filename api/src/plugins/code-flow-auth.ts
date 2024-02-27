import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, JWT_SECRET } from '../utils/env';
import { AccessToken } from '../utils/tokens';

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (
      this: FastifyReply,
      accessToken: AccessToken
    ) => void;
  }
}

const codeFlowAuth: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorateReply(
    'setAccessTokenCookie',
    function (accessToken: AccessToken): void {
      const signedToken = jwt.sign({ accessToken }, JWT_SECRET);
      void this.setCookie('jwt_access_token', signedToken, {
        path: '/',
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        domain: COOKIE_DOMAIN
      });
    }
  );

  done();
};

export default fp(codeFlowAuth);
