import jwt from 'jsonwebtoken';
import { customNanoid } from './ids.js';

import { JWT_SECRET } from './env.js';

/**
 * Encode an id into a JWT (the naming suggests it's a user token, but it's the
 * id of the UserToken document).
 * @param userToken A token id to encode.
 * @returns An encoded object with the userToken property.
 */
export function encodeUserToken(userToken: string): string {
  return jwt.sign({ userToken }, JWT_SECRET);
}

export type Token = {
  userId: string;
  id: string;
  ttl: number;
  created: string;
  typ?: 'access' | 'refresh' | 'auth' | 'user';
  aud?: string;
};

export const ACCESS_TOKEN_TTL = 900000; // 15 minutes
export const REFRESH_TOKEN_TTL = 2592000000; // 30 days
export const LEGACY_ACCESS_TOKEN_TTL = 77760000000; // 900 days

type DbToken = {
  userId: string;
  id: string;
  ttl: number;
  created: Date;
};

/** Create a short-lived access token for API authentication. */
export const createAccessToken = (userId: string, ttl?: number): Token => ({
  userId,
  id: customNanoid(),
  ttl: ttl ?? LEGACY_ACCESS_TOKEN_TTL,
  created: new Date().toISOString(),
  typ: 'access',
  aud: 'fcc:api'
});

/** Create a long-lived refresh token for obtaining new access tokens. */
export const createRefreshToken = (userId: string, ttl?: number): Token => ({
  userId,
  id: customNanoid(),
  ttl: ttl ?? REFRESH_TOKEN_TTL,
  created: new Date().toISOString(),
  typ: 'refresh',
  aud: 'fcc:api'
});

/** Create a short-lived auth token used during the OAuth callback flow. */
export const createAuthToken = (userId: string, ttl?: number): Token => ({
  userId,
  id: customNanoid(),
  ttl: ttl ?? 900000,
  created: new Date().toISOString()
});

/** Check whether a token has exceeded its time-to-live. */
export const isExpired = (token: Token | DbToken): boolean => {
  const created = new Date(token.created);
  return Date.now() > created.getTime() + token.ttl;
};
