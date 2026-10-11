import { afterEach, describe, expect, it, vi } from 'vitest';

import { getSessionUser, postDeleteAccount } from './ajax';

vi.mock('../../config/env.json', () => ({
  default: {
    apiLocation: 'https://api.example.com'
  }
}));

describe('ajax utils', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('handles empty DELETE responses without relying on the response body', async () => {
    const fetch = vi
      .fn()
      .mockResolvedValue(new Response(null, { status: 204 }));
    vi.stubGlobal('fetch', fetch);

    const result = await postDeleteAccount('abc123');

    expect(result.data).toBeUndefined();
    expect(result.response.status).toBe(204);

    expect(fetch).toHaveBeenCalledWith(
      'https://api.example.com/users/abc123',
      expect.objectContaining({
        method: 'DELETE',
        body: '{}'
      })
    );
  });

  it('handles empty responses with a readable body', async () => {
    const fetch = vi.fn().mockResolvedValue(new Response('', { status: 200 }));
    vi.stubGlobal('fetch', fetch);

    const result = await postDeleteAccount('abc123');

    expect(result.data).toBeUndefined();
    expect(result.response.status).toBe(200);
  });

  describe('getSessionUser', () => {
    // TODO(Post-MVP): drop this once /user/session-user always returns the
    // flat shape and the dynamic-key fallback is removed from ajax.ts.
    it('parses the legacy dynamic-key response shape', async () => {
      const fetch = vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({
            user: { foobar: { username: 'foobar' } },
            result: 'foobar'
          }),
          { status: 200 }
        )
      );
      vi.stubGlobal('fetch', fetch);

      const result = await getSessionUser();

      expect(result.data).toMatchObject({ username: 'foobar' });
    });

    it('parses the flat response shape', async () => {
      const fetch = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ user: { username: 'foobar' } }), {
          status: 200
        })
      );
      vi.stubGlobal('fetch', fetch);

      const result = await getSessionUser();

      expect(result.data).toMatchObject({ username: 'foobar' });
    });

    it('returns null for an unauthenticated user in either shape', async () => {
      const fetch = vi.fn().mockResolvedValue(
        new Response(JSON.stringify({ user: {}, result: '' }), {
          status: 200
        })
      );
      vi.stubGlobal('fetch', fetch);

      const result = await getSessionUser();

      expect(result.data).toBeNull();
    });
  });
});
