import jwt from 'jsonwebtoken';

import { JWT_SECRET } from './env';

export function encodeUserToken(userToken: string): string {
  return jwt.sign({ userToken }, JWT_SECRET);
}
