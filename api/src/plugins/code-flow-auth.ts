import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { isBefore } from 'date-fns';

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
    // TODO: type user
    user: unknown;
  }

  interface FastifyInstance {
    authorize: (req: FastifyRequest, reply: FastifyReply) => void;
  }
}

const codeFlowAuth: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorateReply(
    'setAccessTokenCookie',
    function (accessToken: AccessToken) {
      const signedToken = jwt.sign({ accessToken }, JWT_SECRET);
      void this.setCookie('jwt_access_token', signedToken, {
        path: '/',
        httpOnly: false,
        secure: false,
        sameSite: 'lax',
        domain: COOKIE_DOMAIN,
        signed: true,
        maxAge: accessToken.ttl
      });
    }
  );

  const TOKEN_REQUIRED = 'Access token is required for this request';
  const TOKEN_INVALID = 'Your access token is invalid';
  const TOKEN_EXPIRED = 'Access token is no longer valid';

  const send401 = (reply: FastifyReply, message: string) =>
    reply.status(401).send({ type: 'info', message });

  fastify.decorate(
    'authorize',
    async function (req: FastifyRequest, reply: FastifyReply) {
      const tokenCookie = req.cookies.jwt_access_token;
      if (!tokenCookie) return send401(reply, TOKEN_REQUIRED);

      const unsignedToken = req.unsignCookie(tokenCookie);
      if (!unsignedToken.valid) return send401(reply, TOKEN_REQUIRED);

      const jwtAccessToken = unsignedToken.value;

      try {
        jwt.verify(jwtAccessToken!, JWT_SECRET);
      } catch {
        return send401(reply, TOKEN_INVALID);
      }

      const {
        accessToken: { created, ttl, userId }
      } = jwt.decode(jwtAccessToken!) as { accessToken: AccessToken };
      const valid = isBefore(Date.now(), Date.parse(created) + ttl);
      if (!valid) return send401(reply, TOKEN_EXPIRED);

      const user = await fastify.prisma.user.findUnique({
        where: { id: userId }
      });
      req.user = user;
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
