import { describe, it, expect } from 'vitest';
import { isObjectID, trimTags } from './validation.js';

describe('Validation', () => {
  describe('isObjectID', () => {
    it('returns true for valid ObjectIDs', () => {
      expect(isObjectID('5f1e0f3b5d2c12b0b8f7a6b9')).toBe(true);
    });

    it('returns false for invalid ObjectIDs', () => {
      expect(isObjectID('5f1e0f3b5d2c12b0b8f7a6b')).toBe(false);
      expect(isObjectID('5f1e0f3b5d2c12b0b8f7a6b99')).toBe(false);
      expect(isObjectID('5f1e0f3b5d2c12b0b8f7a6b-')).toBe(false);
      expect(isObjectID(undefined)).toBe(false);
    });
  });
  describe('trimTags', () => {
    it('should not throw when input is undefined', () => {
      expect(() => trimTags(undefined)).not.toThrow();
      expect(trimTags(undefined)).toBe('');
    });

    it('should not throw when input is null', () => {
      expect(() => trimTags(null as unknown as string)).not.toThrow();
      expect(trimTags(null as unknown as string)).toBe('');
    });

    it('should remove HTML tags from string', () => {
      expect(trimTags('<p>Hello</p>')).toBe('Hello');
    });
  });
});
