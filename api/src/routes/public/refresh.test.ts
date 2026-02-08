/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { describe, it, expect, beforeEach } from 'vitest';
import jwt from 'jsonwebtoken';

import {
  setupServer,
  superRequest,
  defaultUserId,
  resetDefaultUser
} from '../../../vitest.utils.js';
import { sign } from '../../plugins/cookies.js';
import { deriveSigningKey } from '../../utils/keys.js';
import { JWT_SECRET } from '../../utils/env.js';
import {
  createRefreshToken,
  type Token,
  REFRESH_TOKEN_TTL
} from '../../utils/tokens.js';
import { customNanoid } from '../../utils/ids.js';

const REFRESH_KEY = deriveSigningKey(JWT_SECRET, 'fcc:refresh-token');

function makeRefreshCookie(token: Token): string {
  const signedJwt = jwt.sign({ refreshToken: token }, REFRESH_KEY);
  return sign(signedJwt);
}

describe('POST /auth/refresh', () => {
  setupServer();

  beforeEach(async () => {
    await resetDefaultUser();
  });

  it('should return 401 if no refresh token cookie is present', async () => {
    const res = await superRequest('/auth/refresh', { method: 'POST' });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Refresh token is required'
    });
  });

  it('should return 401 if the refresh token cookie is not properly signed', async () => {
    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: ['jwt_refresh_token=not-a-signed-value; Path=/']
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Invalid refresh token'
    });
  });

  it('should return 401 if JWT verification fails (wrong key)', async () => {
    const token = createRefreshToken(defaultUserId);
    const badJwt = jwt.sign({ refreshToken: token }, 'wrong-secret');
    const signedCookie = sign(badJwt);

    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${signedCookie}; Path=/`]
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Invalid refresh token'
    });
  });

  it('should return 401 if typ claim is not refresh', async () => {
    const token: Token = {
      userId: defaultUserId,
      id: customNanoid(),
      ttl: REFRESH_TOKEN_TTL,
      created: new Date().toISOString(),
      typ: 'access',
      aud: 'fcc:api'
    };
    const cookie = makeRefreshCookie(token);

    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Invalid token type'
    });
  });

  it('should return 401 if the refresh token is expired', async () => {
    const token: Token = {
      userId: defaultUserId,
      id: customNanoid(),
      ttl: 1, // 1ms TTL
      created: new Date(Date.now() - 1000).toISOString(), // created 1s ago
      typ: 'refresh',
      aud: 'fcc:api'
    };
    const cookie = makeRefreshCookie(token);

    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Refresh token has expired'
    });
  });

  it('should return 401 if the refresh token is blocklisted', async () => {
    const token = createRefreshToken(defaultUserId);
    const cookie = makeRefreshCookie(token);

    await fastifyTestInstance.prisma.refreshTokenBlocklist.create({
      data: {
        id: customNanoid(),
        tokenId: token.id,
        expireAt: new Date(Date.now() + 86400000),
        reason: 'test'
      }
    });

    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Refresh token has been revoked'
    });
  });

  it('should return 401 if the user does not exist', async () => {
    const token = createRefreshToken('nonexistent-user-id');
    const cookie = makeRefreshCookie(token);

    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'User not found'
    });
  });

  it('should return 200 and set a new access token cookie for a valid refresh token', async () => {
    const token = createRefreshToken(defaultUserId);
    const cookie = makeRefreshCookie(token);

    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    expect(res.status).toBe(200);
    expect(res.body).toStrictEqual({ type: 'success' });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const setCookies: string[] = res.headers['set-cookie'];
    const hasAccessToken = setCookies.some((c: string) =>
      c.startsWith('jwt_access_token=')
    );
    expect(hasAccessToken).toBe(true);
  });

  it('should return 401 when using a refresh token that was blocklisted by signout', async () => {
    const token = createRefreshToken(defaultUserId);
    const cookie = makeRefreshCookie(token);

    // First, signout with this refresh token to blocklist it
    await superRequest('/signout', {
      method: 'GET',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    // Now try to use the same refresh token
    const res = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });

    expect(res.status).toBe(401);
    expect(res.body).toStrictEqual({
      type: 'error',
      message: 'Refresh token has been revoked'
    });
  });

  it('should prevent reuse of a stolen refresh token after the legitimate user signs out', async () => {
    const token = createRefreshToken(defaultUserId);
    const cookie = makeRefreshCookie(token);

    // Attacker copies the refresh token cookie (simulated by having same cookie)
    const stolenCookie = cookie;

    // Legitimate user signs out — this blocklists the refresh token
    const signoutRes = await superRequest('/signout', {
      method: 'GET',
      setCookies: [`jwt_refresh_token=${cookie}; Path=/`]
    });
    expect(signoutRes.status).toBe(200);

    // Attacker tries to use the stolen refresh token
    const attackRes = await superRequest('/auth/refresh', {
      method: 'POST',
      setCookies: [`jwt_refresh_token=${stolenCookie}; Path=/`]
    });

    expect(attackRes.status).toBe(401);
    expect(attackRes.body).toStrictEqual({
      type: 'error',
      message: 'Refresh token has been revoked'
    });
  });
});
