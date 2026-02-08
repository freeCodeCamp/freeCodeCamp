import { FastifyPluginCallback, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
import jwt from 'jsonwebtoken';
import { type user } from '@prisma/client';

import { FREECODECAMP_NODE_ENV, JWT_SECRET } from '../utils/env.js';
import { deriveSigningKey } from '../utils/keys.js';
import { type Token, isExpired } from '../utils/tokens.js';
import { ERRORS } from '../exam-environment/utils/errors.js';

declare module 'fastify' {
  interface FastifyReply {
    setAccessTokenCookie: (this: FastifyReply, accessToken: Token) => void;
    setRefreshTokenCookie: (this: FastifyReply, refreshToken: Token) => void;
  }

  interface FastifyRequest {
    // TODO: is the full user the correct type here?
    user: user | null;
    accessDeniedMessage: { type: 'info'; content: string } | null;
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
  const ACCESS_KEY = deriveSigningKey(JWT_SECRET, 'fcc:access-token');
  const REFRESH_KEY = deriveSigningKey(JWT_SECRET, 'fcc:refresh-token');

  const isProduction = FREECODECAMP_NODE_ENV !== 'development';

  const accessCookieOpts = {
    httpOnly: isProduction,
    secure: isProduction,
    maxAge: 2592000 // 30 days in seconds (matches legacy token lifetime until client supports refresh)
  };

  const refreshCookieOpts = {
    httpOnly: isProduction,
    secure: isProduction,
    maxAge: 2592000 // 30 days in seconds
  };

  fastify.decorateReply('setAccessTokenCookie', function (accessToken: Token) {
    const signedToken = jwt.sign({ accessToken }, ACCESS_KEY);
    void this.setCookie('jwt_access_token', signedToken, accessCookieOpts);
  });

  fastify.decorateReply(
    'setRefreshTokenCookie',
    function (refreshToken: Token) {
      const signedToken = jwt.sign({ refreshToken }, REFRESH_KEY);
      void this.setCookie('jwt_refresh_token', signedToken, refreshCookieOpts);
    }
  );

  // update existing jwt_access_token and jwt_refresh_token cookie properties
  fastify.addHook('onRequest', (req, reply, done) => {
    const rawAccessCookie = req.cookies['jwt_access_token'];
    if (rawAccessCookie) {
      const jwtAccessToken = req.unsignCookie(rawAccessCookie);
      if (jwtAccessToken.valid) {
        reply.setCookie(
          'jwt_access_token',
          jwtAccessToken.value,
          accessCookieOpts
        );
      }
    }

    const rawRefreshCookie = req.cookies['jwt_refresh_token'];
    if (rawRefreshCookie) {
      const jwtRefreshToken = req.unsignCookie(rawRefreshCookie);
      if (jwtRefreshToken.valid) {
        reply.setCookie(
          'jwt_refresh_token',
          jwtRefreshToken.value,
          refreshCookieOpts
        );
      }
    }

    done();
  });

  fastify.decorateRequest('accessDeniedMessage', null);
  fastify.decorateRequest('user', null);

  const TOKEN_REQUIRED = 'Access token is required for this request';
  const TOKEN_INVALID = 'Your access token is invalid';
  const TOKEN_EXPIRED = 'Access token is no longer valid';

  const setAccessDenied = (req: FastifyRequest, content: string) =>
    (req.accessDeniedMessage = { type: 'info', content });

  const handleAuth = async (req: FastifyRequest): Promise<void> => {
    const tokenCookie = req.cookies.jwt_access_token;
    if (!tokenCookie) return void setAccessDenied(req, TOKEN_REQUIRED);

    const unsignedToken = req.unsignCookie(tokenCookie);
    if (!unsignedToken.valid) return void setAccessDenied(req, TOKEN_REQUIRED);

    const jwtAccessToken = unsignedToken.value;

    // Try new-style token first (HKDF-derived key)
    let accessToken: Token | null = null;

    try {
      const payload = jwt.verify(jwtAccessToken, ACCESS_KEY) as {
        accessToken: Token;
      };
      accessToken = payload.accessToken;
      // HKDF-signed tokens must have typ:'access' (no legacy tokens use this key)
      if (accessToken.typ !== 'access') {
        return void setAccessDenied(req, TOKEN_INVALID);
      }
    } catch {
      // Fall back to old-style token (raw JWT_SECRET)
      try {
        jwt.verify(jwtAccessToken, JWT_SECRET);
        const { accessToken: legacyToken } = jwt.decode(jwtAccessToken) as {
          accessToken: Token;
        };
        // Old tokens have no typ claim — accept them.
        // Reject refresh tokens or other non-access types.
        if (legacyToken.typ && legacyToken.typ !== 'access') {
          return void setAccessDenied(req, TOKEN_INVALID);
        }
        accessToken = legacyToken;
      } catch {
        return void setAccessDenied(req, TOKEN_INVALID);
      }
    }

    if (!accessToken) return void setAccessDenied(req, TOKEN_INVALID);
    if (isExpired(accessToken)) return void setAccessDenied(req, TOKEN_EXPIRED);
    // We're using token.userId since it's possible for the user record to be
    // malformed and for prisma to throw while trying to find the user.
    fastify.Sentry?.setUser({
      id: accessToken.userId
    });

    const user = await fastify.prisma.user.findUnique({
      where: { id: accessToken.userId }
    });
    if (!user) return void setAccessDenied(req, TOKEN_INVALID);
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
      void reply.code(403);
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
