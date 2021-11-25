import { getFallbackFullStackDate } from '../boot/certificate';
import { fullStackChallenges } from './fixtures';

describe('boot/certificate', () => {
  describe('getFallbackFullStackDate', () => {
    it('should return the date of the latest completed challenge', () => {
      expect(getFallbackFullStackDate(fullStackChallenges)).toBe(1685210952511);
    });
  });
});
