import assert from 'node:assert';
import path from 'node:path';
import { config } from 'dotenv';

const envPath = path.resolve(__dirname, '../../../.env');
const { error } = config({ path: envPath });

if (error) {
  console.warn(`
  ----------------------------------------------------
  Warning: .env file not found.
  ----------------------------------------------------
  Please copy sample.env to .env

  You can ignore this warning if using a different way
  to setup this environment.
  ----------------------------------------------------
  `);
}

function isAllowedEnv(env: string): env is 'development' | 'production' {
  return ['development', 'production'].includes(env);
}

function isAllowedProvider(provider: string): provider is 'ses' | 'nodemailer' {
  return ['ses', 'nodemailer'].includes(provider);
}

function createTestConnectionURL(url: string, dbId?: string) {
  assert.notEqual(
    process.env.FREECODECAMP_NODE_ENV,
    'production',
    "The database URL can't be modified in production."
  );
  assert.ok(
    dbId,
    `dbId is required for test connection URL. Is this running in a test environment?
If so, ensure that the environment variable JEST_WORKER_ID is set.`
  );
  return url.replace(/(.*)(\?.*)/, `$1${dbId}$2`);
}

assert.ok(process.env.HOME_LOCATION);
assert.ok(process.env.FREECODECAMP_NODE_ENV);
assert.ok(isAllowedEnv(process.env.FREECODECAMP_NODE_ENV));
assert.ok(process.env.EMAIL_PROVIDER);
assert.ok(isAllowedProvider(process.env.EMAIL_PROVIDER));
assert.ok(process.env.AUTH0_CLIENT_ID);
assert.ok(process.env.AUTH0_CLIENT_SECRET);
assert.ok(process.env.AUTH0_DOMAIN);
assert.ok(process.env.AUTH0_AUDIENCE);
assert.ok(process.env.API_LOCATION);
assert.ok(process.env.FCC_ENABLE_SWAGGER_UI);
assert.ok(process.env.FCC_ENABLE_DEV_LOGIN_MODE);
assert.ok(process.env.JWT_SECRET);
assert.ok(process.env.STRIPE_SECRET_KEY);
assert.ok(process.env.SHOW_UPCOMING_CHANGES);
assert.ok(process.env.MONGOHQ_URL);
assert.ok(process.env.COOKIE_SECRET);

if (process.env.FREECODECAMP_NODE_ENV !== 'development') {
  assert.ok(process.env.SES_ID);
  assert.ok(process.env.SES_SECRET);
  assert.notEqual(
    process.env.SES_SECRET,
    'ses_secret_from_aws',
    'The SES secret should be changed from the default value.'
  );
  assert.ok(process.env.SES_REGION);
  assert.ok(process.env.COOKIE_DOMAIN);
  assert.notEqual(process.env.COOKIE_SECRET, 'a_cookie_secret');
  assert.ok(process.env.PORT);
  assert.ok(process.env.HOST);
  assert.ok(process.env.SENTRY_DSN);
  // The following values can exist in development, but production-like
  // environments need to override the defaults.
  assert.notEqual(
    process.env.SENTRY_DSN,
    'dsn_from_sentry_dashboard',
    `The DSN from Sentry's dashboard should be used.`
  );
  assert.notEqual(
    process.env.JWT_SECRET,
    'a_jwt_secret',
    'The JWT secret should be changed from the default value.'
  );
  assert.ok(
    process.env.FCC_ENABLE_DEV_LOGIN_MODE !== 'true',
    'Dev login mode MUST be disabled in production.'
  );
  assert.ok(
    process.env.EMAIL_PROVIDER === 'ses',
    'SES MUST be used in production.'
  );
  assert.notEqual(
    process.env.STRIPE_SECRET_KEY,
    'sk_from_stripe_dashboard',
    'The Stripe secret should be changed from the default value.'
  );
  assert.notEqual(process.env.NODE_ENV, 'test');
  assert.notEqual(
    process.env.AUTH0_CLIENT_SECRET,
    'client_secret_from_auth0_dashboard',
    'The Auth0 client secret should be changed from the default value.'
  );
}

export const HOME_LOCATION = process.env.HOME_LOCATION;
export const MAILHOG_HOST = process.env.MAILHOG_HOST ?? 'localhost';
export const MONGOHQ_URL =
  process.env.NODE_ENV === 'test'
    ? createTestConnectionURL(
        process.env.MONGOHQ_URL,
        process.env.JEST_WORKER_ID
      )
    : process.env.MONGOHQ_URL;

export const FREECODECAMP_NODE_ENV = process.env.FREECODECAMP_NODE_ENV;
export const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID;
export const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN;
export const AUTH0_AUDIENCE = process.env.AUTH0_AUDIENCE;
export const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET;
export const PORT = process.env.PORT || '3000';
export const HOST = process.env.HOST || 'localhost';
export const API_LOCATION = process.env.API_LOCATION;
export const FCC_ENABLE_SWAGGER_UI =
  process.env.FCC_ENABLE_SWAGGER_UI === 'true';
export const FCC_ENABLE_DEV_LOGIN_MODE =
  process.env.FCC_ENABLE_DEV_LOGIN_MODE === 'true';
export const SENTRY_DSN =
  process.env.SENTRY_DSN === 'dsn_from_sentry_dashboard'
    ? ''
    : process.env.SENTRY_DSN;
export const COOKIE_DOMAIN = process.env.COOKIE_DOMAIN;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;
export const JWT_SECRET = process.env.JWT_SECRET;
export const SES_ID = process.env.SES_ID;
export const SES_SECRET = process.env.SES_SECRET;
export const SES_REGION = process.env.SES_REGION;
export const EMAIL_PROVIDER = process.env.EMAIL_PROVIDER;
export const SHOW_UPCOMING_CHANGES =
  process.env.SHOW_UPCOMING_CHANGES === 'true';
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
