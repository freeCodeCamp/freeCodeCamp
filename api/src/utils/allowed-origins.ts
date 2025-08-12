import { HOME_LOCATION, FREECODECAMP_NODE_ENV } from './env';

const ALLOWED_ORIGINS = [
  'https://www.freecodecamp.dev',
  'https://www.freecodecamp.org',
  // pretty sure the rest of these can go?
  'https://beta.freecodecamp.dev',
  'https://beta.freecodecamp.org',
  'https://chinese.freecodecamp.dev',
  'https://chinese.freecodecamp.org'
];

export const allowedOrigins =
  FREECODECAMP_NODE_ENV === 'development'
    ? [...ALLOWED_ORIGINS, HOME_LOCATION]
    : ALLOWED_ORIGINS;
