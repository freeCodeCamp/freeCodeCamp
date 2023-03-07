import assert from 'node:assert';

import { NODE_ENV } from './env';

if (NODE_ENV !== 'development') assert.ok(process.env.MONGOHQ_URL);

export const MONGOHQ_URL =
  process.env.MONGOHQ_URL || 'mongodb://localhost:27017/freecodecamp';
