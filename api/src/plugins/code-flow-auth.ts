import { FastifyPluginCallback, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { type user } from '@prisma/client';

import { JWT_SECRET } from '../utils/env';
import { type Token, isExpired } from '../utils/tokens';
import { getRedirectParams } from '../utils/redirection';

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (this: FastifyReply, accessToken: Token) => void;
  }

  interface FastifyRequest {
    // TODO: is the full user the correct type here?
    user?: user;
  }

  interface FastifyInstance {
    authorize: (req: FastifyRequest, reply: FastifyReply) => void;
    authorizeOrRedirect: (req: FastifyRequest, reply: FastifyReply) => void;
  }
}

const codeFlowAuth: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorateReply('setAccessTokenCookie', function (accessToken: Token) {
    const signedToken = jwt.sign({ accessToken }, JWT_SECRET);
    void this.setCookie('jwt_access_token', signedToken, {
      httpOnly: false,
      secure: false,
      maxAge: accessToken.ttl
    });
  });

  const TOKEN_REQUIRED = 'Access token is required for this request';
  const TOKEN_INVALID = 'Your access token is invalid';
  const TOKEN_EXPIRED = 'Access token is no longer valid';

  const send401 = (
    _req: FastifyRequest,
    reply: FastifyReply,
    message: string
  ): void => {
    void reply.status(401).send({ type: 'info', message });
  };

  const redirectHome = (
    req: FastifyRequest,
    reply: FastifyReply,
    _ignored: string
  ) => {
    const { origin } = getRedirectParams(req);

    void reply.redirectWithMessage(origin, {
      type: 'info',
      content:
        'Only authenticated users can access this route. Please sign in and try again.'
    });
  };

  const handleAuth =
    (
      rejectStrategy: (
        req: FastifyRequest,
        reply: FastifyReply,
        message: string
      ) => void
    ) =>
    async (req: FastifyRequest, reply: FastifyReply) => {
      const tokenCookie = req.cookies.jwt_access_token;
      if (!tokenCookie) return rejectStrategy(req, reply, TOKEN_REQUIRED);

      const unsignedToken = req.unsignCookie(tokenCookie);
      if (!unsignedToken.valid)
        return rejectStrategy(req, reply, TOKEN_REQUIRED);

      const jwtAccessToken = unsignedToken.value;

      try {
        jwt.verify(jwtAccessToken, JWT_SECRET);
      } catch {
        return rejectStrategy(req, reply, TOKEN_INVALID);
      }

      const { accessToken } = jwt.decode(jwtAccessToken) as {
        accessToken: Token;
      };

      if (isExpired(accessToken))
        return rejectStrategy(req, reply, TOKEN_EXPIRED);

      const user = await fastify.prisma.user.findUnique({
        where: { id: accessToken.userId }
      });
      if (!user) return rejectStrategy(req, reply, TOKEN_INVALID);
      req.user = user;
    };

  fastify.decorate('authorize', handleAuth(send401));
  fastify.decorate('authorizeOrRedirect', handleAuth(redirectHome));

  done();
};

export default fp(codeFlowAuth, { dependencies: ['redirect-with-message'] });
