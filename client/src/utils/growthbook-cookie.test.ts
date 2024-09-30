import { getUUID } from './growthbook-cookie';

describe('getUUID', () => {
  let originalCookie: string;

  beforeEach(() => {
    global.crypto = {
      ...global.crypto,
      randomUUID: () => '123e4567-e89b-12d3-a456-426614174000'
    };

    // Save original cookie
    originalCookie = document.cookie;

    // Clear the cookie before each test
    document.cookie.split(';').forEach(c => {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
  });

  afterEach(() => {
    // Restore original cookie
    document.cookie = originalCookie;
  });

  it('should generate a new UUID if none exists', () => {
    const uuid = getUUID();
    expect(uuid).toBeDefined();
    expect(document.cookie).toContain('gbuuid=' + uuid);
  });

  it('should return the existing UUID if one exists', () => {
    const existingUUID = '123e4567-e89b-12d3-a456-426614174000';
    document.cookie = 'gbuuid=' + existingUUID;
    const uuid = getUUID();
    expect(uuid).toBe(existingUUID);
  });
});
