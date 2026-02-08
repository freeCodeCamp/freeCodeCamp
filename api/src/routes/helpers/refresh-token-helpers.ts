import jwt from 'jsonwebtoken';
import type { FastifyInstance, FastifyRequest } from 'fastify';

import { JWT_SECRET } from '../../utils/env.js';
import { deriveSigningKey } from '../../utils/keys.js';
import { type Token } from '../../utils/tokens.js';
import { blockRefreshToken } from '../../utils/refresh-token-blocklist.js';

const REFRESH_KEY = deriveSigningKey(JWT_SECRET, 'fcc:refresh-token');

/**
 * Best-effort blocklist of the current refresh token. Silently ignores
 * missing, unsigned, invalid, or duplicate tokens so callers don't need
 * error handling.
 */
export async function blockCurrentRefreshToken(
  req: FastifyRequest,
  prisma: FastifyInstance['prisma'],
  reason: string
): Promise<void> {
  try {
    const rawCookie = req.cookies['jwt_refresh_token'];
    if (!rawCookie) return;

    const unsigned = req.unsignCookie(rawCookie);
    if (!unsigned.valid) return;

    const payload = jwt.verify(unsigned.value, REFRESH_KEY) as {
      refreshToken: Token;
    };
    const refreshToken = payload.refreshToken;

    const expiresAt = new Date(
      new Date(refreshToken.created).getTime() + refreshToken.ttl
    );
    await blockRefreshToken(prisma, refreshToken.id, expiresAt, reason);
  } catch {
    // Best-effort: silently ignore all errors (invalid JWT, duplicate tokenId, DB issues)
  }
}
