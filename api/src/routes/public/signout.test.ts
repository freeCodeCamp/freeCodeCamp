import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { devLogin, setupServer, superRequest } from '../../../vitest.utils.js';

/**
 * Walks `Fastify` scopes to spy on the `Reply` prototype owning `generateCsrf`.
 *
 * @returns Spy on a shared prototype; callers must restore it.
 */
function spyOnCsrfTokenGeneration() {
  const symbolNamed = (instance: object, name: string) =>
    Object.getOwnPropertySymbols(instance).find(s => String(s) === name);

  const findOwner = (instance: object): object | undefined => {
    const replySymbol = symbolNamed(instance, 'Symbol(fastify.Reply)');
    const proto = replySymbol
      ? (instance[replySymbol as keyof object] as { prototype: object })
          ?.prototype
      : undefined;
    if (proto && Object.hasOwn(proto, 'generateCsrf')) return proto;

    const childrenSymbol = symbolNamed(instance, 'Symbol(fastify.children)');
    const children = childrenSymbol
      ? (instance[childrenSymbol as keyof object] as object[])
      : [];
    for (const child of children ?? []) {
      const found = findOwner(child);
      if (found) return found;
    }
    return undefined;
  };

  const owner = findOwner(fastifyTestInstance);
  if (!owner) throw Error('could not find the Reply owning generateCsrf');

  return vi.spyOn(owner as { generateCsrf: () => string }, 'generateCsrf');
}

describe('GET /signout', () => {
  setupServer();

  beforeEach(async () => {
    await devLogin();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should clear all the cookies', async () => {
    const res = await superRequest('/signout', { method: 'GET' });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    const setCookie = res.headers['set-cookie'];
    expect(setCookie).toEqual(
      expect.arrayContaining([
        expect.stringMatching(
          /^jwt_access_token=; Max-Age=0; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        ),
        expect.stringMatching(
          /^csrf_token=; Max-Age=0; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        ),
        expect.stringMatching(
          /^_csrf=; Max-Age=0; Path=\/; Expires=Thu, 01 Jan 1970 00:00:00 GMT/
        )
      ])
    );
    expect(setCookie).toHaveLength(3);
  });

  // Signout sits outside the token-issuing scope. Spy on generation because `clearOurCookies` would overwrite issued cookies, hiding a scope regression.
  it('should not generate a CSRF token', async () => {
    const generateCsrf = spyOnCsrfTokenGeneration();

    await superRequest('/signout', { method: 'GET' });
    expect(generateCsrf).not.toHaveBeenCalled();

    // Control to confirm the spy works.
    await superRequest('/status/ping', { method: 'GET' });
    expect(generateCsrf).toHaveBeenCalled();
  });

  it('should respond with an empty object', async () => {
    const res = await superRequest('/signout', { method: 'GET' });
    expect(res.body).toEqual({});
    expect(res.status).toBe(200);
  });

  it('counts an auth.signed_out metric', async () => {
    const count = vi.fn();
    const originalSentry = fastifyTestInstance.Sentry;
    fastifyTestInstance.Sentry = {
      ...originalSentry,
      metrics: { ...originalSentry.metrics, count }
    };

    await superRequest('/signout', { method: 'GET' });

    expect(count).toHaveBeenCalledWith('auth.signed_out', 1);

    fastifyTestInstance.Sentry = originalSentry;
  });
});
