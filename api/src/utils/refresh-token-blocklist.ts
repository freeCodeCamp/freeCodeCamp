import type { FastifyInstance } from 'fastify';
import { customNanoid } from './ids.js';

type AppPrisma = FastifyInstance['prisma'];

/** Add a refresh token to the blocklist so it can no longer be used. */
export async function blockRefreshToken(
  prisma: AppPrisma,
  tokenId: string,
  expiresAt: Date,
  reason: string
): Promise<void> {
  await prisma.refreshTokenBlocklist.create({
    data: {
      id: customNanoid(),
      tokenId,
      expireAt: expiresAt,
      reason
    }
  });
}

/** Check whether a refresh token has been blocklisted. */
export async function isRefreshTokenBlocked(
  prisma: AppPrisma,
  tokenId: string
): Promise<boolean> {
  const entry = await prisma.refreshTokenBlocklist.findUnique({
    where: { tokenId }
  });
  return entry !== null;
}
