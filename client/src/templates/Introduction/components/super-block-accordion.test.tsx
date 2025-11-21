import { describe, it, expect } from 'vitest';

describe('SuperBlockAccordion', () => {
  describe('Progress Calculation', () => {
    it('calculates 0% progress and formats the steps text correctly when no challenges are completed', () => {
      const completedChallengeIds: string[] = [];
      const moduleChallengeIds: string[] = ['c1'];

      const completedInModule = completedChallengeIds.filter(id =>
        new Set(moduleChallengeIds).has(id)
      ).length;

      const totalInModule = moduleChallengeIds.length;

      const stepsText = `${completedInModule} of ${totalInModule} steps completed`;

      expect(completedInModule).toBe(0);
      expect(totalInModule).toBe(1);
      expect(stepsText).toBe('0 of 1 steps completed');
    });
  });
});
