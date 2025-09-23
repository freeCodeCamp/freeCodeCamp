import { describe, it, expect } from 'vitest';
import { 
  filterActiveUserChallenges, 
  getUserChallengeStats, 
  processTestUserData 
} from './filter-user-challenges.js';

describe('Filter User Challenges Utilities', () => {
  const mockChallengeMap = {
    'active-challenge-1': {
      title: 'Active Challenge 1',
      block: 'basic-html',
      superblock: 'responsive-web-design'
    },
    'active-challenge-2': {
      title: 'Active Challenge 2',
      block: 'basic-css',
      superblock: 'responsive-web-design'
    },
    'active-challenge-3': {
      title: 'Active Challenge 3',
      block: 'javascript-basics',
      superblock: 'javascript-algorithms-and-data-structures'
    }
  };

  const mockCompletedChallenges = [
    {
      id: 'active-challenge-1',
      completedDate: 1640995200000,
      files: []
    },
    {
      id: 'deprecated-challenge-1',
      completedDate: 1640995200000,
      files: []
    },
    {
      id: 'active-challenge-2',
      completedDate: 1640995200000,
      files: []
    },
    {
      id: 'deprecated-challenge-2',
      completedDate: 1640995200000,
      files: []
    }
  ];

  describe('filterActiveUserChallenges', () => {
    it('should filter out deprecated challenges', () => {
      const result = filterActiveUserChallenges(mockCompletedChallenges, mockChallengeMap);
      
      expect(result).toHaveLength(2);
      expect(result.map(c => c.id)).toEqual(['active-challenge-1', 'active-challenge-2']);
    });

    it('should return empty array when no active challenges', () => {
      const deprecatedOnly = [
        { id: 'deprecated-1', completedDate: 1640995200000, files: [] },
        { id: 'deprecated-2', completedDate: 1640995200000, files: [] }
      ];
      
      const result = filterActiveUserChallenges(deprecatedOnly, mockChallengeMap);
      expect(result).toHaveLength(0);
    });

    it('should return all challenges when all are active', () => {
      const activeOnly = [
        { id: 'active-challenge-1', completedDate: 1640995200000, files: [] },
        { id: 'active-challenge-2', completedDate: 1640995200000, files: [] }
      ];
      
      const result = filterActiveUserChallenges(activeOnly, mockChallengeMap);
      expect(result).toHaveLength(2);
    });
  });

  describe('getUserChallengeStats', () => {
    it('should calculate correct statistics', () => {
      const stats = getUserChallengeStats(mockCompletedChallenges, mockChallengeMap);
      
      expect(stats.totalCompleted).toBe(4);
      expect(stats.activeCompleted).toBe(2);
      expect(stats.deprecatedCompleted).toBe(2);
      expect(stats.completionBySuperblock['responsive-web-design']).toBe(2);
      expect(stats.completionPercentage).toBe(Math.round((2 / 3) * 100)); // 2 out of 3 total challenges
    });

    it('should handle empty completed challenges', () => {
      const stats = getUserChallengeStats([], mockChallengeMap);
      
      expect(stats.totalCompleted).toBe(0);
      expect(stats.activeCompleted).toBe(0);
      expect(stats.deprecatedCompleted).toBe(0);
      expect(stats.completionPercentage).toBe(0);
    });
  });

  describe('processTestUserData', () => {
    it('should process user data correctly', () => {
      const userData = { completedChallenges: mockCompletedChallenges };
      const result = processTestUserData(userData, mockChallengeMap);
      
      expect(result.completedChallenges).toHaveLength(2);
      expect(result.challengeStats).toBeDefined();
      expect(result.challengeStats.totalCompleted).toBe(4);
      expect(result.challengeStats.activeCompleted).toBe(2);
    });
  });
});