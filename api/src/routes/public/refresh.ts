import type { FastifyPluginCallback } from 'fastify';
import jwt from 'jsonwebtoken';

import {
  type Token,
  createAccessToken,
  isExpired
} from '../../utils/tokens.js';
import { isRefreshTokenBlocked } from '../../utils/refresh-token-blocklist.js';
import { deriveSigningKey } from '../../utils/keys.js';
import { JWT_SECRET } from '../../utils/env.js';

const REFRESH_KEY = deriveSigningKey(JWT_SECRET, 'fcc:refresh-token');

/** Plugin that handles refresh token validation and access token reissue. */
export const refreshRoute: FastifyPluginCallback = (fastify, _opts, done) => {
  fastify.post('/auth/refresh', async (req, reply) => {
    const rawCookie = req.cookies['jwt_refresh_token'];
    if (!rawCookie) {
      return reply.status(401).send({
        type: 'error',
        message: 'Refresh token is required'
      });
    }

    const unsigned = req.unsignCookie(rawCookie);
    if (!unsigned.valid) {
      return reply.status(401).send({
        type: 'error',
        message: 'Invalid refresh token'
      });
    }

    let refreshToken: Token;
    try {
      const payload = jwt.verify(unsigned.value, REFRESH_KEY) as {
        refreshToken: Token;
      };
      refreshToken = payload.refreshToken;
    } catch {
      return reply.status(401).send({
        type: 'error',
        message: 'Invalid refresh token'
      });
    }

    if (refreshToken.typ !== 'refresh') {
      return reply.status(401).send({
        type: 'error',
        message: 'Invalid token type'
      });
    }

    if (isExpired(refreshToken)) {
      return reply.status(401).send({
        type: 'error',
        message: 'Refresh token has expired'
      });
    }

    const isBlocked = await isRefreshTokenBlocked(
      fastify.prisma,
      refreshToken.id
    );
    if (isBlocked) {
      return reply.status(401).send({
        type: 'error',
        message: 'Refresh token has been revoked'
      });
    }

    let user;
    try {
      user = await fastify.prisma.user.findUnique({
        where: { id: refreshToken.userId },
        select: { id: true }
      });
    } catch {
      return reply.status(401).send({
        type: 'error',
        message: 'User not found'
      });
    }
    if (!user) {
      return reply.status(401).send({
        type: 'error',
        message: 'User not found'
      });
    }

    reply.setAccessTokenCookie(createAccessToken(user.id));

    return reply.status(200).send({ type: 'success' });
  });

  done();
};
