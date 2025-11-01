// api/src/utils/env.test.ts
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

// Mock o módulo 'dotenv' ANTES de tudo
vi.mock('dotenv', () => ({
  config: vi.fn(() => ({ error: null, parsed: {} }))
}));

// Esta função helper é o setup MÍNIMO para passar no bloco de produção
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

// Força os testes a rodarem em ordem, um de cada vez
describe.sequential('Environment Variable Validation (env.ts)', () => {
  // --- Configuração Padrão (Ambiente de Desenvolvimento) ---
  beforeEach(() => {
    vi.resetModules();
    vi.unstubAllEnvs();

    // --- SETUP DO AMBIENTE MÍNIMO VIÁVEL ---
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

  // --- Testes da Lógica `dotenv` (Aviso de .env) ---
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

  // --- Testes de Cobertura de Decisão (O seu trabalho original) ---
  describe('FCC_API_LOG_TRANSPORT Logic (MC/DC)', () => {
    it('CT1: should not throw error when FCC_API_LOG_TRANSPORT is "pretty"', async () => {
      vi.stubEnv('FCC_API_LOG_TRANSPORT', 'pretty');
      await expect(import('./env.js')).resolves.toBeDefined();
    });

    it('CT2: should not throw error when FCC_API_LOG_TRANSPORT is "default"', async () => {
      vi.stubEnv('FCC_API_LOG_TRANSPORT', 'default');
      await expect(import('./env.js')).resolves.toBeDefined();
    });

    it('CT3: should throw error when FCC_API_LOG_TRANSPORT is invalid', async () => {
      vi.stubEnv('FCC_API_LOG_TRANSPORT', 'invalid-value');
      await expect(import('./env.js')).rejects.toThrow(
        "FCC_API_LOG_TRANSPORT must be one of 'pretty' or 'default'. Found invalid-value"
      );
    });

    it('CT4: should assign "default" and pass validation when FCC_API_LOG_TRANSPORT is undefined', async () => {
      const envModule = await import('./env.js');
      expect(envModule.FCC_API_LOG_TRANSPORT).toBe('default');
    });
  });

  // --- Testes de Cobertura de Outros Valores Padrão (|| e ??) ---
  describe('Default Value Assignments', () => {
    // Este teste cobre o "ramo verdadeiro" (quando o valor é fornecido)
    it('should use the provided values from stubs', async () => {
      const envModule = await import('./env.js');
      expect(envModule.EMAIL_PROVIDER).toBe('nodemailer');
      expect(envModule.FREECODECAMP_NODE_ENV).toBe('development');
      expect(envModule.FCC_API_LOG_LEVEL).toBe('info');
      expect(envModule.DEPLOYMENT_VERSION).toBe('unknown');
    });

    // CORREÇÃO: Teste dividido. Este testa os padrões seguros do modo 'development'.
    it('should use default values for EMAIL_PROVIDER and LOG_LEVEL in development', async () => {
      // O beforeEach já define FREECODECAMP_NODE_ENV = 'development'
      // Então o bloco de produção é pulado.
      vi.stubEnv('EMAIL_PROVIDER', undefined);
      vi.stubEnv('FCC_API_LOG_LEVEL', undefined);

      const envModule = await import('./env.js');

      expect(envModule.EMAIL_PROVIDER).toBe('ses'); // Valor padrão
      expect(envModule.FCC_API_LOG_LEVEL).toBe('info'); // Valor padrão
    });

    // CORREÇÃO: Novo teste. Testa o padrão do FREECODECAMP_NODE_ENV
    it('should use default value for FREECODECAMP_NODE_ENV (production)', async () => {
      // 1. Configura um ambiente de produção válido
      setupMinimalProdEnv();
      // 2. Sobrescreve a variável-alvo para undefined
      vi.stubEnv('FREECODECAMP_NODE_ENV', undefined);

      // 3. Importa
      const envModule = await import('./env.js');

      // 4. Verifica se o padrão 'production' foi usado
      expect(envModule.FREECODECAMP_NODE_ENV).toBe('production');
    });
  });

  // --- Testes de Cobertura para Flags Booleanas (undefinedOrBool) ---
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

  // --- Testes de Cobertura para Lógica de Sentry (Ternários) ---
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

  // --- Testes de Cobertura da Lógica do Banco de Dados (Test Env) ---
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

  // --- Testes de Cobertura do Bloco de Produção (o mais importante) ---
  describe('Production Environment (Strict Assertions)', () => {
    it('should NOT throw errors in production if all secrets are valid', async () => {
      setupMinimalProdEnv();
      await expect(import('./env.js')).resolves.toBeDefined();
    });

    it('should throw errors if production env uses default secrets', async () => {
      setupMinimalProdEnv();
      vi.stubEnv('JWT_SECRET', 'a_jwt_secret'); // INVÁLIDO (padrão)

      await expect(import('./env.js')).rejects.toThrow(
        'The JWT secret should be changed from the default value.'
      );
    });
  });
});
