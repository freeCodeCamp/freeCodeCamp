import { blocklistedUsernames } from './constants';

describe('constants', () => {
  describe('blocklistedUsernames', () => {
    it('should not contain duplicate values', () => {
      const uniqueValues = new Set(blocklistedUsernames);
      expect(blocklistedUsernames.length).toEqual(uniqueValues.size);
    });
  });
});
