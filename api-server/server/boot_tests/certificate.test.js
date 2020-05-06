/* global it expect */

import { getFallbackFrontEndDate } from '../boot/certificate';
import { fullStackChallenges } from './fixtures';

describe('boot/certificate', () => {
  describe('getFallbackFrontEndDate', () => {
    it('should return the date of the latest completed challenge', () => {
      expect(getFallbackFrontEndDate(fullStackChallenges)).toBe(1685210952511);
    });
  });
});
