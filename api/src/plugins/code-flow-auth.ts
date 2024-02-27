import { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';

import { COOKIE_DOMAIN, HOME_LOCATION, JWT_SECRET } from '../utils/env';
import { AccessToken } from '../utils/tokens';
import { allowedOrigins } from '../../config/allowed-origins';

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (
      this: FastifyReply,
      accessToken: AccessToken
    ) => void;
  }

  interface FastifyRequest {
    getValidReferrer: (this: FastifyRequest) => string;
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

  const sanitizeReferer = (referer?: string): string => {
    if (!referer) throw Error();
    const origin = new URL(referer).origin;
    if (!allowedOrigins.includes(origin)) throw Error();
    return origin;
  };

  fastify.decorateRequest('getValidReferrer', function (): string {
    const referer = this.headers.referer;
    let origin = null;
    try {
      origin = sanitizeReferer(referer);
    } catch {
      this.log.warn(`Invalid referer: ${referer}`);
    }

    return origin ?? HOME_LOCATION;
  });

  done();
};

export default fp(codeFlowAuth);
