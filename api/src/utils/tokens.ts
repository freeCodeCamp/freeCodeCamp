import jwt from 'jsonwebtoken';
import { customNanoid } from './ids';

import { JWT_SECRET } from './env';

/**
 * Encode an id into a JWT (the naming suggests it's a user token, but it's the
 * id of the UserToken document).
 * @param userToken A token id to encode.
 * @returns An encoded object with the userToken property.
 */
export function encodeUserToken(userToken: string): string {
  return jwt.sign({ userToken }, JWT_SECRET);
}

export type AccessToken = {
  userId: string;
  id: string;
  ttl: number;
  created: string;
};

/**
 * Creates an access token.
 * @param userId The user ID as a string (yes, it's an ObjectID, but it will be serialized to a string anyway).
 * @param ttl The time to live for the token in milliseconds (default: 77760000000).
 * @returns The access token.
 */
export const createAccessToken = (
  userId: string,
  ttl?: number
): AccessToken => {
  return {
    userId,
    id: customNanoid(),
    ttl: ttl ?? 77760000000,
    created: new Date().toISOString()
  };
};
