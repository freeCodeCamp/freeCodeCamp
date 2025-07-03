import { FastifyPluginCallback, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { type user } from '@prisma/client';

import { JWT_SECRET } from '../utils/env';
import { type Token, isExpired } from '../utils/tokens';
import { ERRORS } from '../exam-environment/utils/errors';

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (this: FastifyReply, accessToken: Token) => void;
  }

  interface FastifyRequest {
    // TODO: is the full user the correct type here?
    user: user | null;
    accessDeniedMessage: { type: 'info'; content: string } | null;
  }

  interface FastifyInstance {
    authorize: (req: FastifyRequest, reply: FastifyReply) => void;
    authorizeExamEnvironmentToken: (
      req: FastifyRequest,
      reply: FastifyReply
    ) => void;
  }
}

const auth: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorateReply('setAccessTokenCookie', function (accessToken: Token) {
    const signedToken = jwt.sign({ accessToken }, JWT_SECRET);
    void this.setCookie('jwt_access_token', signedToken, {
      httpOnly: false,
      secure: false,
      maxAge: accessToken.ttl
    });
  });

  fastify.decorateRequest('accessDeniedMessage', null);
  fastify.decorateRequest('user', null);

  const TOKEN_REQUIRED = 'Access token is required for this request';
  const TOKEN_INVALID = 'Your access token is invalid';
  const TOKEN_EXPIRED = 'Access token is no longer valid';

  const setAccessDenied = (req: FastifyRequest, content: string) =>
    (req.accessDeniedMessage = { type: 'info', content });

  const handleAuth = async (req: FastifyRequest) => {
    const tokenCookie = req.cookies.jwt_access_token;
    if (!tokenCookie) return setAccessDenied(req, TOKEN_REQUIRED);

    const unsignedToken = req.unsignCookie(tokenCookie);
    if (!unsignedToken.valid) return setAccessDenied(req, TOKEN_REQUIRED);

    const jwtAccessToken = unsignedToken.value;

    try {
      jwt.verify(jwtAccessToken, JWT_SECRET);
    } catch {
      return setAccessDenied(req, TOKEN_INVALID);
    }

    const { accessToken } = jwt.decode(jwtAccessToken) as {
      accessToken: Token;
    };

    if (isExpired(accessToken)) return setAccessDenied(req, TOKEN_EXPIRED);

    const user = await fastify.prisma.user.findUnique({
      where: { id: accessToken.userId }
    });
    if (!user) return setAccessDenied(req, TOKEN_INVALID);
    req.user = user;
  };

  async function handleExamEnvironmentTokenAuth(
    req: FastifyRequest,
    reply: FastifyReply
  ) {
    const { 'exam-environment-authorization-token': encodedToken } =
      req.headers;

    if (!encodedToken || typeof encodedToken !== 'string') {
      void reply.code(400);
      return reply.send(
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
          'EXAM-ENVIRONMENT-AUTHORIZATION-TOKEN header is a required string.'
        )
      );
    }

    try {
      jwt.verify(encodedToken, JWT_SECRET);
    } catch (e) {
      void reply.code(403);
      return reply.send(
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
          JSON.stringify(e)
        )
      );
    }

    const payload = jwt.decode(encodedToken);

    if (typeof payload !== 'object' || payload === null) {
      void reply.code(500);
      return reply.send(
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
          'Unreachable. Decoded token has been verified.'
        )
      );
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const examEnvironmentAuthorizationToken =
      payload['examEnvironmentAuthorizationToken'];

    // if (typeof examEnvironmentAuthorizationToken !== 'string') {
    //   // TODO: This code is debatable, because the token would have to have been signed by the api
    //   //       which means it is valid, but, somehow, got signed as an object instead of a string.
    //   void reply.code(400+500);
    //   return reply.send(
    //     ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
    //       'EXAM-ENVIRONMENT-AUTHORIZATION-TOKEN is not valid.'
    //     )
    //   );
    // }

    assertIsString(examEnvironmentAuthorizationToken);

    const token =
      await fastify.prisma.examEnvironmentAuthorizationToken.findFirst({
        where: {
          id: examEnvironmentAuthorizationToken
        }
      });

    if (!token) {
      return {
        message: 'Token not found'
      };
    }

    const user = await fastify.prisma.user.findUnique({
      where: { id: token.userId }
    });
    if (!user) return setAccessDenied(req, TOKEN_INVALID);
    req.user = user;
  }

  fastify.decorate('authorize', handleAuth);
  fastify.decorate(
    'authorizeExamEnvironmentToken',
    handleExamEnvironmentTokenAuth
  );

  done();
};

function assertIsString(some: unknown): asserts some is string {
  if (typeof some !== 'string') {
    throw new Error('Expected a string');
  }
}

export default fp(auth, { name: 'auth', dependencies: ['cookies'] });
