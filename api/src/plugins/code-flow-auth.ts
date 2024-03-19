import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { isBefore } from 'date-fns';
import { type user } from '@prisma/client';

import { COOKIE_DOMAIN, JWT_SECRET } from '../utils/env';
import { AccessToken } from '../utils/tokens';

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (
      this: FastifyReply,
      accessToken: AccessToken
    ) => void;
  }

  interface FastifyRequest {
    // TODO: is the full user the correct type here?
    user?: user;
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
      if (!user) return send401(reply, TOKEN_INVALID);
      req.user = user;
    }
  );

  done();
};

export default fp(codeFlowAuth);
