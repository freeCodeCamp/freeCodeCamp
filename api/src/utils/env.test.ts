import { afterEach, describe, expect, test, vi } from 'vitest';

const API_HOST_PLACEHOLDER =
  'fastify_api_sdk_api_host_from_growthbook_dashboard';
const CLIENT_KEY_PLACEHOLDER =
  'fastify_api_sdk_client_key_from_growthbook_dashboard';

describe('GrowthBook environment configuration', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  test('ignores the sample environment placeholders in development', async () => {
    vi.stubEnv('FREECODECAMP_NODE_ENV', 'development');
    vi.stubEnv('GROWTHBOOK_FASTIFY_API_HOST', API_HOST_PLACEHOLDER);
    vi.stubEnv('GROWTHBOOK_FASTIFY_CLIENT_KEY', CLIENT_KEY_PLACEHOLDER);

    const { GROWTHBOOK_FASTIFY_API_HOST, GROWTHBOOK_FASTIFY_CLIENT_KEY } =
      await import('./env.js');

    expect(GROWTHBOOK_FASTIFY_API_HOST).toBeUndefined();
    expect(GROWTHBOOK_FASTIFY_CLIENT_KEY).toBeUndefined();
  });

  test('preserves configured GrowthBook credentials', async () => {
    vi.stubEnv('FREECODECAMP_NODE_ENV', 'development');
    vi.stubEnv('GROWTHBOOK_FASTIFY_API_HOST', 'https://example.com');
    vi.stubEnv('GROWTHBOOK_FASTIFY_CLIENT_KEY', 'sdk-test');

    const { GROWTHBOOK_FASTIFY_API_HOST, GROWTHBOOK_FASTIFY_CLIENT_KEY } =
      await import('./env.js');

    expect(GROWTHBOOK_FASTIFY_API_HOST).toBe('https://example.com');
    expect(GROWTHBOOK_FASTIFY_CLIENT_KEY).toBe('sdk-test');
  });
});
