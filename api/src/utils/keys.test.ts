import { describe, it, expect } from 'vitest';
import { deriveSigningKey } from './keys.js';

describe('deriveSigningKey', () => {
  const masterSecret = 'test-master-secret';

  it('should derive a 64-byte Buffer', () => {
    const key = deriveSigningKey(masterSecret, 'fcc:test');
    expect(Buffer.isBuffer(key)).toBe(true);
    expect(key.length).toBe(64);
  });

  it('should be deterministic', () => {
    const key1 = deriveSigningKey(masterSecret, 'fcc:test');
    const key2 = deriveSigningKey(masterSecret, 'fcc:test');
    expect(key1.equals(key2)).toBe(true);
  });

  it('should derive different keys for different purposes', () => {
    const accessKey = deriveSigningKey(masterSecret, 'fcc:access-token');
    const refreshKey = deriveSigningKey(masterSecret, 'fcc:refresh-token');
    expect(accessKey.equals(refreshKey)).toBe(false);
  });

  it('should derive different keys for different master secrets', () => {
    const key1 = deriveSigningKey('secret-1', 'fcc:access-token');
    const key2 = deriveSigningKey('secret-2', 'fcc:access-token');
    expect(key1.equals(key2)).toBe(false);
  });
});
