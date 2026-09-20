// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { getUUID } from './growthbook-cookie';

describe('getUUID', () => {
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
