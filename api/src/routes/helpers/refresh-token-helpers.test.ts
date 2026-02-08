import { describe, test, expect, vi, beforeEach } from 'vitest';
import jwt from 'jsonwebtoken';
import type { FastifyInstance, FastifyRequest } from 'fastify';

import { JWT_SECRET } from '../../utils/env.js';
import { deriveSigningKey } from '../../utils/keys.js';
import { createRefreshToken } from '../../utils/tokens.js';
import { blockCurrentRefreshToken } from './refresh-token-helpers.js';

const REFRESH_KEY = deriveSigningKey(JWT_SECRET, 'fcc:refresh-token');

type AppPrisma = FastifyInstance['prisma'];

function createMockPrisma() {
  return {
    refreshTokenBlocklist: {
      create: vi.fn().mockResolvedValue(undefined)
    }
  } as unknown as AppPrisma;
}

function createMockRequest(
  cookieValue?: string,
  unsignValid = true
): FastifyRequest {
  return {
    cookies: cookieValue
      ? { jwt_refresh_token: cookieValue }
      : ({} as Record<string, string>),
    unsignCookie: vi.fn().mockReturnValue({
      valid: unsignValid,
      value: cookieValue
    })
  } as unknown as FastifyRequest;
}

describe('blockCurrentRefreshToken', () => {
  let prisma: AppPrisma;

  beforeEach(() => {
    prisma = createMockPrisma();
    vi.clearAllMocks();
  });

  test('should blocklist a valid refresh token', async () => {
    const refreshToken = createRefreshToken('user-123');
    const signedJwt = jwt.sign({ refreshToken }, REFRESH_KEY);
    const req = createMockRequest(signedJwt);

    await blockCurrentRefreshToken(req, prisma, 'email-change');

    expect(prisma.refreshTokenBlocklist.create).toHaveBeenCalledWith({
      data: {
        id: expect.any(String) as string,
        tokenId: refreshToken.id,
        expireAt: new Date(
          new Date(refreshToken.created).getTime() + refreshToken.ttl
        ),
        reason: 'email-change'
      }
    });
  });

  test('should do nothing if no refresh cookie exists', async () => {
    const req = createMockRequest();

    await blockCurrentRefreshToken(req, prisma, 'account-delete');

    expect(prisma.refreshTokenBlocklist.create).not.toHaveBeenCalled();
  });

  test('should do nothing if cookie is not validly signed', async () => {
    const req = createMockRequest('some-value', false);

    await blockCurrentRefreshToken(req, prisma, 'account-delete');

    expect(prisma.refreshTokenBlocklist.create).not.toHaveBeenCalled();
  });

  test('should do nothing if JWT verification fails', async () => {
    const signedJwt = jwt.sign(
      { refreshToken: createRefreshToken('user-456') },
      'wrong-secret'
    );
    const req = createMockRequest(signedJwt);

    await blockCurrentRefreshToken(req, prisma, 'progress-reset');

    expect(prisma.refreshTokenBlocklist.create).not.toHaveBeenCalled();
  });
});
