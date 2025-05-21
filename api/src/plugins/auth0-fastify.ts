import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';
import { ApiClient, VerifyAccessTokenError } from '@auth0/auth0-api-js';
import { AUTH0_DOMAIN } from '../utils/env';
import { findOrCreateUser } from '../routes/helpers/auth-helpers';
import { parseBearerToken } from '../utils/tokens';

interface AuthRouteOptions {
  scopes?: string | string[];
}

declare module 'fastify' {
  interface FastifyInstance {
    requireAuth: (
      opts?: AuthRouteOptions
    ) => (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}

export type Auth0FastifyApiOptions = {
  /**
   * The auth0 domain (without https://).
   */
  domain: string;
  /**
   * The audience for the API.
   */
  audience: string;
  /**
   * Optional, custom Fetch implementation to use.
   */
  customFetch?: typeof fetch;
};

export interface Token {
  sub?: string;
  aud?: string | string[];
  iss?: string;
  scope?: string;
}

function validateScopes(
  token: Token,
  requiredScopes: string | string[]
): boolean {
  const scopes = Array.isArray(requiredScopes)
    ? requiredScopes
    : [requiredScopes];

  // Extract token scopes (handling different formats)
  let tokenScopes: string[] = [];

  if (token.scope) {
    tokenScopes =
      typeof token.scope === 'string' ? token.scope.split(' ') : token.scope;
  }

  // All required scopes must be present
  return scopes.every(required => tokenScopes.includes(required));
}

function auth0FastifApi(
  fastify: FastifyInstance,
  options: Auth0FastifyApiOptions
) {
  if (!options.audience) {
    throw new Error(
      'In order to use the Auth0 Api plugin, you must provide an audience.'
    );
  }

  const apiClient = new ApiClient({
    domain: options.domain,
    audience: options.audience,
    customFetch: options.customFetch
  });

  const replyWithError = (
    reply: FastifyReply,
    statusCode: number,
    error: string,
    errorDescription: string
  ) => {
    return reply
      .code(statusCode)
      .header(
        'WWW-Authenticate',
        `Bearer error="${error.replaceAll('"', '\\"')}", error_description="${errorDescription.replaceAll('"', '\\"')}"`
      )
      .send({
        error: error,
        error_description: errorDescription
      });
  };

  fastify.decorate('requireAuth', function (opts: AuthRouteOptions = {}) {
    return async function (request: FastifyRequest, reply: FastifyReply) {
      const authorizationHeader = request.headers.authorization;
      if (!authorizationHeader) {
        return replyWithError(
          reply,
          400,
          'invalid_request',
          'No Authorization provided'
        );
      }

      const accessToken = parseBearerToken(authorizationHeader);

      if (!accessToken) {
        return replyWithError(
          reply,
          400,
          'invalid_request',
          'No Authorization provided'
        );
      }

      try {
        const token: Token = await apiClient.verifyAccessToken({
          accessToken
        });
        if (opts.scopes && !validateScopes(token, opts.scopes)) {
          return replyWithError(
            reply,
            403,
            'insufficient_scope',
            'Insufficient scopes'
          );
        }

        const res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { email } = (await res.json()) as { email: string };

        const user = await findOrCreateUser(fastify, email);

        request['user'] = user;
      } catch (error) {
        if (error instanceof VerifyAccessTokenError) {
          return replyWithError(reply, 401, 'invalid_token', error.message);
        }

        return replyWithError(reply, 401, 'invalid_token', 'Invalid token');
      }
    };
  });
}

export default fp(auth0FastifApi);
