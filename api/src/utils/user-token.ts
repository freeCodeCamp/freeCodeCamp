import jwt from 'jsonwebtoken';

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
