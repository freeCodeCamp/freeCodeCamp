import { describe, test, expect, vi, beforeEach } from 'vitest';
import type { FastifyInstance } from 'fastify';

import {
  blockRefreshToken,
  isRefreshTokenBlocked
} from './refresh-token-blocklist.js';

vi.mock('./ids.js', () => ({
  customNanoid: () => 'mock-nanoid-id'
}));

type AppPrisma = FastifyInstance['prisma'];

function createMockPrisma() {
  return {
    refreshTokenBlocklist: {
      create: vi.fn().mockResolvedValue(undefined),
      findUnique: vi.fn().mockResolvedValue(null)
    }
  } as unknown as AppPrisma;
}

describe('refresh-token-blocklist', () => {
  let prisma: AppPrisma;

  beforeEach(() => {
    prisma = createMockPrisma();
    vi.clearAllMocks();
  });

  describe('blockRefreshToken', () => {
    test('should call prisma.refreshTokenBlocklist.create with correct args', async () => {
      const tokenId = 'test-token-id';
      const expiresAt = new Date('2025-06-01T00:00:00Z');
      const reason = 'password_change';

      await blockRefreshToken(prisma, tokenId, expiresAt, reason);

      expect(prisma.refreshTokenBlocklist.create).toHaveBeenCalledWith({
        data: {
          id: 'mock-nanoid-id',
          tokenId,
          expireAt: expiresAt,
          reason
        }
      });
    });
  });

  describe('isRefreshTokenBlocked', () => {
    test('should return true when token is found', async () => {
      vi.mocked(prisma.refreshTokenBlocklist.findUnique).mockResolvedValueOnce({
        id: 'some-id',
        tokenId: 'blocked-token',
        expireAt: new Date(),
        reason: 'logout',
        createdAt: new Date()
      });

      const result = await isRefreshTokenBlocked(prisma, 'blocked-token');

      expect(result).toBe(true);
      expect(prisma.refreshTokenBlocklist.findUnique).toHaveBeenCalledWith({
        where: { tokenId: 'blocked-token' }
      });
    });

    test('should return false when token is not found', async () => {
      vi.mocked(prisma.refreshTokenBlocklist.findUnique).mockResolvedValueOnce(
        null
      );

      const result = await isRefreshTokenBlocked(prisma, 'valid-token');

      expect(result).toBe(false);
      expect(prisma.refreshTokenBlocklist.findUnique).toHaveBeenCalledWith({
        where: { tokenId: 'valid-token' }
      });
    });
  });
});
