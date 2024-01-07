import { isObjectID } from './validation';

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
});
