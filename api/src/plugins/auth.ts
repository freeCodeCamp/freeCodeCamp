import { FastifyPluginCallback, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { type user } from '@prisma/client';

import { JWT_SECRET } from '../utils/env.js';
import { type Token, isExpired } from '../utils/tokens.js';
import { ERRORS } from '../exam-environment/utils/errors.js';

type AuthResult =
  | {
      message: string;
      user?: never;
    }
  | {
      message?: never;
      user: user;
    };

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (this: FastifyReply, accessToken: Token) => void;
  }

  interface FastifyRequest {
    // TODO: is the full user the correct type here?
    user: user | null;
    accessDeniedMessage: { type: 'info'; content: string } | null;
    getAuthedUser: () => Promise<AuthResult>;
  }

  interface FastifyInstance {
    authorize: (req: FastifyRequest, reply: FastifyReply) => Promise<void>;
    authorizeExamEnvironmentToken: (
      req: FastifyRequest,
      reply: FastifyReply
    ) => void;
  }
}

const auth: FastifyPluginCallback = (fastify, _options, done) => {
  const cookieOpts = {
    httpOnly: true,
    secure: true,
    maxAge: 2592000 // thirty days in seconds
  };
  fastify.decorateReply('setAccessTokenCookie', function (accessToken: Token) {
    const signedToken = jwt.sign({ accessToken }, JWT_SECRET);
    void this.setCookie('jwt_access_token', signedToken, cookieOpts);
  });

  // update existing jwt_access_token cookie properties
  fastify.addHook('onRequest', (req, reply, done) => {
    const rawCookie = req.cookies['jwt_access_token'];
    if (rawCookie) {
      const jwtAccessToken = req.unsignCookie(rawCookie);
      if (jwtAccessToken.valid) {
        reply.setCookie('jwt_access_token', jwtAccessToken.value, cookieOpts);
      }
    }
    done();
  });

  fastify.decorateRequest('accessDeniedMessage', null);
  fastify.decorateRequest('user', null);

  const TOKEN_REQUIRED = 'Access token is required for this request';
  const TOKEN_INVALID = 'Your access token is invalid';
  const TOKEN_EXPIRED = 'Access token is no longer valid';

  const setAccessDenied = (req: FastifyRequest, content: string) => {
    const isAnonymousPoll =
      req.routeOptions?.url === '/user/session-user' &&
      content === TOKEN_REQUIRED;
    if (!isAnonymousPoll) {
      fastify.Sentry?.metrics?.count('auth.access_denied', 1, {
        attributes: { reason: content }
      });
    }
    req.accessDeniedMessage = { type: 'info', content };
  };

  async function getAuthedUser(this: FastifyRequest): Promise<AuthResult> {
    const tokenCookie = this.cookies.jwt_access_token;
    if (!tokenCookie) return { message: TOKEN_REQUIRED };

    const unsignedToken = this.unsignCookie(tokenCookie);
    if (!unsignedToken.valid) return { message: TOKEN_REQUIRED };

    const jwtAccessToken = unsignedToken.value;

    try {
      jwt.verify(jwtAccessToken, JWT_SECRET);
    } catch {
      return { message: TOKEN_INVALID };
    }

    const { accessToken } = jwt.decode(jwtAccessToken) as {
      accessToken: Token;
    };

    if (isExpired(accessToken)) return { message: TOKEN_EXPIRED };
    // We're using token.userId since it's possible for the user record to be
    // malformed and for prisma to throw while trying to find the user.
    fastify.Sentry?.setUser({
      id: accessToken.userId
    });

    const user = await fastify.prisma.user.findUnique({
      where: { id: accessToken.userId }
    });
    if (user) {
      fastify.Sentry?.setUser({ id: user.id });
    }

    return user ? { user } : { message: TOKEN_INVALID };
  }

  fastify.decorateRequest('getAuthedUser', getAuthedUser);

  const handleAuth = async (
    req: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    const { message, user } = await req.getAuthedUser();

    if (user) {
      req.user = user;
      req.log = reply.log = req.log.child({ userId: user.id });
    } else {
      req.log.debug({ reason: message }, 'Request not authenticated');
      setAccessDenied(req, message);
    }
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
      req.log.warn({ err: e }, 'Exam environment token verification failed');
      void reply.code(401);
      return reply.send(
        ERRORS.FCC_EINVAL_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
          JSON.stringify(e)
        )
      );
    }

    const payload = jwt.decode(encodedToken);

    if (typeof payload !== 'object' || payload === null) {
      req.log.error(
        'Unreachable: exam-environment token verified but decoded payload is not an object'
      );
      fastify.Sentry?.captureException(
        new Error(
          'Unreachable: exam-environment token decoded payload is not an object'
        )
      );
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
      req.log.warn(
        { tokenId: examEnvironmentAuthorizationToken },
        'Exam environment authorization token revoked or not found'
      );
      void reply.code(401);
      return reply.send(
        ERRORS.FCC_ENOENT_EXAM_ENVIRONMENT_AUTHORIZATION_TOKEN(
          'Provided token is revoked.'
        )
      );
    }
    // We're using token.userId since it's possible for the user record to be
    // malformed and for prisma to throw while trying to find the user.

    fastify.Sentry?.setUser({
      id: token.userId
    });

    const user = await fastify.prisma.user.findUnique({
      where: { id: token.userId }
    });
    if (!user) return setAccessDenied(req, TOKEN_INVALID);
    fastify.Sentry?.setUser({ id: user.id });
    req.user = user;
    req.log = reply.log = req.log.child({ userId: user.id });
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
