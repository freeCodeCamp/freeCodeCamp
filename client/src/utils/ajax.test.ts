import { afterEach, describe, expect, it, vi } from 'vitest';

import { postDeleteAccount } from './ajax';

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
});
