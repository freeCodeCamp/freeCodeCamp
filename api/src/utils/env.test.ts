import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('dotenv', () => ({
  config: vi.fn(() => ({ error: null, parsed: {} }))
}));

const setupMinimalProdEnv = () => {
  vi.stubEnv('FREECODECAMP_NODE_ENV', 'production');
  vi.stubEnv('EMAIL_PROVIDER', 'ses');
  vi.stubEnv('SES_ID', 'my-ses-id');
  vi.stubEnv('SES_SECRET', 'my-ses-secret');
  vi.stubEnv('COOKIE_DOMAIN', 'freecodecamp.org');
  vi.stubEnv('COOKIE_SECRET', 'my-real-cookie-secret');
  vi.stubEnv('SENTRY_DSN', 'my-real-sentry-dsn');
  vi.stubEnv('SENTRY_ENVIRONMENT', 'production');
  vi.stubEnv('DEPLOYMENT_VERSION', '1.2.3');
  vi.stubEnv('JWT_SECRET', 'my-real-jwt-secret');
  vi.stubEnv('FCC_ENABLE_DEV_LOGIN_MODE', 'false');
  vi.stubEnv('STRIPE_SECRET_KEY', 'sk_live_my-real-key');
  vi.stubEnv('NODE_ENV', 'production');
  vi.stubEnv('AUTH0_CLIENT_SECRET', 'my-real-auth0-secret');
  vi.stubEnv('GROWTHBOOK_FASTIFY_API_HOST', 'my-real-growthbook-host');
  vi.stubEnv('GROWTHBOOK_FASTIFY_CLIENT_KEY', 'my-real-growthbook-key');
};

describe.sequential('Environment Variable Validation (env.ts)', () => {
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();

    vi.stubEnv('HOME_LOCATION', 'http://localhost:8000');
    vi.stubEnv('FREECODECAMP_NODE_ENV', 'development');
    vi.stubEnv('DEPLOYMENT_ENV', 'staging');
    vi.stubEnv('EMAIL_PROVIDER', 'nodemailer');
    vi.stubEnv('AUTH0_CLIENT_ID', 'test_client_id');
    vi.stubEnv('AUTH0_CLIENT_SECRET', 'test_client_secret');
    vi.stubEnv('AUTH0_DOMAIN', 'test.auth0.com');
    vi.stubEnv('API_LOCATION', 'http://localhost:3000');
    vi.stubEnv('JWT_SECRET', 'a_jwt_secret');
    vi.stubEnv('STRIPE_SECRET_KEY', 'sk_test_key');
    vi.stubEnv(
      'MONGOHQ_URL',
      'mongodb://127.0.0.1:27017/freecodecamp?directConnection=true'
    );
    vi.stubEnv('COOKIE_SECRET', 'a_cookie_secret');
    vi.stubEnv('FCC_API_LOG_LEVEL', 'info');
    vi.stubEnv('VITEST_WORKER_ID', '1');
  });

  afterEach(() => {
    vi.unstubAllEnvs();
  });

  describe('dotenv Warning Logic', () => {
    it('should warn if .env is missing in development', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      vi.doMock('dotenv', () => ({
        config: vi.fn(() => ({ error: new Error('.env not found') }))
      }));

      await import('./env.js');
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        expect.stringContaining('Warning: .env file not found')
      );
      consoleWarnSpy.mockRestore();
    });

    it('should NOT warn if .env is missing in production', async () => {
      const consoleWarnSpy = vi
        .spyOn(console, 'warn')
        .mockImplementation(() => {});

      vi.doMock('dotenv', () => ({
        config: vi.fn(() => ({ error: new Error('.env not found') }))
      }));

      setupMinimalProdEnv();

      await import('./env.js');
      expect(consoleWarnSpy).not.toHaveBeenCalled();
      consoleWarnSpy.mockRestore();
    });
  });

  describe('FCC_API_LOG_TRANSPORT Logic (MC/DC)', () => {
    it('should not throw error when FCC_API_LOG_TRANSPORT is "pretty"', async () => {
      vi.stubEnv('FCC_API_LOG_TRANSPORT', 'pretty');
      await expect(import('./env.js')).resolves.toBeDefined();
    });

    it('should not throw error when FCC_API_LOG_TRANSPORT is "default"', async () => {
      vi.stubEnv('FCC_API_LOG_TRANSPORT', 'default');
      await expect(import('./env.js')).resolves.toBeDefined();
    });

    it('should throw error when FCC_API_LOG_TRANSPORT is invalid', async () => {
      vi.stubEnv('FCC_API_LOG_TRANSPORT', 'invalid-value');
      await expect(import('./env.js')).rejects.toThrow(
        "FCC_API_LOG_TRANSPORT must be one of 'pretty' or 'default'. Found invalid-value"
      );
    });

    it('should assign "default" and pass validation when FCC_API_LOG_TRANSPORT is undefined', async () => {
      const envModule = await import('./env.js');
      expect(envModule.FCC_API_LOG_TRANSPORT).toBe('default');
    });
  });

  describe('Default Value Assignments', () => {
    it('should use the provided values from stubs', async () => {
      const envModule = await import('./env.js');
      expect(envModule.EMAIL_PROVIDER).toBe('nodemailer');
      expect(envModule.FREECODECAMP_NODE_ENV).toBe('development');
      expect(envModule.FCC_API_LOG_LEVEL).toBe('info');
      expect(envModule.DEPLOYMENT_VERSION).toBe('unknown');
    });

    it('should use default values for EMAIL_PROVIDER and LOG_LEVEL in development', async () => {
      vi.stubEnv('EMAIL_PROVIDER', undefined);
      vi.stubEnv('FCC_API_LOG_LEVEL', undefined);

      const envModule = await import('./env.js');

      expect(envModule.EMAIL_PROVIDER).toBe('ses');
      expect(envModule.FCC_API_LOG_LEVEL).toBe('info');
    });

    it('should use default value for FREECODECAMP_NODE_ENV (production)', async () => {
      setupMinimalProdEnv();
      vi.stubEnv('FREECODECAMP_NODE_ENV', undefined);

      const envModule = await import('./env.js');
      expect(envModule.FREECODECAMP_NODE_ENV).toBe('production');
    });
  });

  describe('Boolean Flag (undefinedOrBool) Logic', () => {
    it('should correctly parse "true" string to boolean true', async () => {
      vi.stubEnv('FCC_ENABLE_DEV_LOGIN_MODE', 'true');
      vi.stubEnv('SHOW_UPCOMING_CHANGES', 'true');
      const envModule = await import('./env.js');
      expect(envModule.FCC_ENABLE_DEV_LOGIN_MODE).toBe(true);
      expect(envModule.SHOW_UPCOMING_CHANGES).toBe(true);
    });

    it('should correctly parse "false" (or any) string to boolean false', async () => {
      vi.stubEnv('FCC_ENABLE_DEV_LOGIN_MODE', 'false');
      vi.stubEnv('SHOW_UPCOMING_CHANGES', 'false');
      const envModule = await import('./env.js');
      expect(envModule.FCC_ENABLE_DEV_LOGIN_MODE).toBe(false);
      expect(envModule.SHOW_UPCOMING_CHANGES).toBe(false);
    });

    it('should correctly parse undefined variable to undefined', async () => {
      const envModule = await import('./env.js');
      expect(envModule.FCC_ENABLE_SWAGGER_UI).toBe(undefined);
    });
  });

  describe('Sentry Default Value Logic', () => {
    it('should return empty strings for default Sentry values', async () => {
      vi.stubEnv('SENTRY_DSN', 'dsn_from_sentry_dashboard');
      vi.stubEnv('SENTRY_ENVIRONMENT', 'development');
      const envModule = await import('./env.js');
      expect(envModule.SENTRY_DSN).toBe('');
      expect(envModule.SENTRY_ENVIRONMENT).toBe('');
    });

    it('should return real values for Sentry', async () => {
      vi.stubEnv('SENTRY_DSN', 'my-real-sentry-dsn');
      vi.stubEnv('SENTRY_ENVIRONMENT', 'my-production-env');
      const envModule = await import('./env.js');
      expect(envModule.SENTRY_DSN).toBe('my-real-sentry-dsn');
      expect(envModule.SENTRY_ENVIRONMENT).toBe('my-production-env');
    });
  });

  describe('Database URL (MONGOHQ_URL) Logic', () => {
    it('should use the plain MONGOHQ_URL in development', async () => {
      vi.stubEnv('NODE_ENV', 'development');
      const envModule = await import('./env.js');
      expect(envModule.MONGOHQ_URL).toBe(
        'mongodb://127.0.0.1:27017/freecodecamp?directConnection=true'
      );
    });

    it('should call createTestConnectionURL in a test environment', async () => {
      vi.stubEnv('NODE_ENV', 'test');
      vi.stubEnv('VITEST_WORKER_ID', '5');
      const envModule = await import('./env.js');
      expect(envModule.MONGOHQ_URL).toContain(
        'mongodb://127.0.0.1:27017/freecodecamp5?directConnection=true'
      );
    });

    it('should throw if createTestConnectionURL is called in production', async () => {
      setupMinimalProdEnv();
      vi.stubEnv('FREECODECAMP_NODE_ENV', 'production');
      vi.stubEnv('NODE_ENV', 'test');

      await expect(import('./env.js')).rejects.toThrow("'test' != 'test'");
    });

    it('should throw if createTestConnectionURL is called without a dbId', async () => {
      vi.stubEnv('NODE_ENV', 'test');
      vi.stubEnv('VITEST_WORKER_ID', undefined);

      await expect(import('./env.js')).rejects.toThrow(
        'dbId is required for test connection URL'
      );
    });
  });

  describe('Production Environment (Strict Assertions)', () => {
    it('should NOT throw errors in production if all secrets are valid', async () => {
      setupMinimalProdEnv();
      await expect(import('./env.js')).resolves.toBeDefined();
    });

    it('should throw errors if production env uses default secrets', async () => {
      setupMinimalProdEnv();
      vi.stubEnv('JWT_SECRET', 'a_jwt_secret');

      await expect(import('./env.js')).rejects.toThrow(
        'The JWT secret should be changed from the default value.'
      );
    });
  });
});
