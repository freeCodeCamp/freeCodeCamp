import { describe, it, expect } from 'vitest';
import { customNanoid } from './ids.js';

describe('ids', () => {
  describe('customNanoid', () => {
    it('should generate a string of length 64', () => {
      const id = customNanoid();
      expect(id).toHaveLength(64);
    });

    it('should generate a string containing only alphanumeric characters', () => {
      const id = customNanoid();
      expect(id).toMatch(/^[0-9a-zA-Z]+$/);
    });

    it('should generate unique values on consecutive calls', () => {
      const id1 = customNanoid();
      const id2 = customNanoid();
      expect(id1).not.toBe(id2);
    });
  });
});
