import {
  normalizeToDateString,
  getTodayString,
  parseDateString,
  daysBetween,
  buildDateMap,
  calculateStreak,
  isStreakActive,
  getStreakMilestones,
  getNextMilestone,
  getHighestMilestone
} from './streak-utils';
import { CompletedChallenge } from './types';

describe('streak-utils', () => {
  describe('normalizeToDateString', () => {
    it('should normalize a timestamp to YYYY-MM-DD format', () => {
      // 2024-01-15 12:00:00 UTC
      const ts = Date.UTC(2024, 0, 15, 12, 0, 0);
      const result = normalizeToDateString(ts);
      expect(result).toBe('2024-01-15');
    });

    it('should handle timezone conversion', () => {
      const ts = Date.UTC(2024, 0, 15, 23, 30, 0);
      const resultUTC = normalizeToDateString(ts);
      expect(resultUTC).toBe('2024-01-15');
    });

    it('should fallback to UTC for invalid timezone', () => {
      const ts = Date.UTC(2024, 0, 15, 12, 0, 0);
      const result = normalizeToDateString(ts, 'Invalid/Timezone');
      expect(result).toBe('2024-01-15');
    });
  });

  describe('parseDateString', () => {
    it('should parse YYYY-MM-DD to Date', () => {
      const date = parseDateString('2024-01-15');
      expect(date.getUTCFullYear()).toBe(2024);
      expect(date.getUTCMonth()).toBe(0);
      expect(date.getUTCDate()).toBe(15);
    });
  });

  describe('daysBetween', () => {
    it('should calculate days between two dates', () => {
      expect(daysBetween('2024-01-01', '2024-01-05')).toBe(4);
    });

    it('should return 0 for same date', () => {
      expect(daysBetween('2024-01-01', '2024-01-01')).toBe(0);
    });

    it('should handle reverse order', () => {
      expect(daysBetween('2024-01-05', '2024-01-01')).toBe(4);
    });
  });

  describe('buildDateMap', () => {
    it('should build a map from challenges', () => {
      const challenges: CompletedChallenge[] = [
        { id: '1', completedDate: Date.UTC(2024, 0, 15, 12, 0, 0) },
        { id: '2', completedDate: Date.UTC(2024, 0, 15, 14, 0, 0) },
        { id: '3', completedDate: Date.UTC(2024, 0, 16, 10, 0, 0) }
      ];
      const map = buildDateMap(challenges);
      expect(map.get('2024-01-15')).toBe(2);
      expect(map.get('2024-01-16')).toBe(1);
    });

    it('should skip challenges with invalid dates', () => {
      const challenges: CompletedChallenge[] = [
        { id: '1', completedDate: 0 },
        { id: '2', completedDate: -1 },
        { id: '3', completedDate: Date.UTC(2024, 0, 15, 12, 0, 0) }
      ];
      const map = buildDateMap(challenges);
      expect(map.size).toBe(1);
    });
  });

  describe('calculateStreak', () => {
    it('should return empty data for no challenges', () => {
      const result = calculateStreak([]);
      expect(result.currentStreak).toBe(0);
      expect(result.longestStreak).toBe(0);
      expect(result.lastActiveDate).toBeNull();
      expect(result.totalDaysActive).toBe(0);
    });

    it('should return empty data for null challenges', () => {
      const result = calculateStreak(null as unknown as CompletedChallenge[]);
      expect(result.currentStreak).toBe(0);
    });

    it('should calculate streak for consecutive days', () => {
      const today = new Date();
      const challenges: CompletedChallenge[] = [];

      for (let i = 0; i < 5; i++) {
        const d = new Date(today);
        d.setUTCDate(d.getUTCDate() - i);
        challenges.push({
          id: `${i}`,
          completedDate: d.getTime()
        });
      }

      const result = calculateStreak(challenges);
      expect(result.currentStreak).toBe(5);
      expect(result.longestStreak).toBe(5);
      expect(result.totalDaysActive).toBe(5);
    });

    it('should have 30 days in streak history', () => {
      const challenges: CompletedChallenge[] = [
        { id: '1', completedDate: Date.now() }
      ];
      const result = calculateStreak(challenges);
      expect(result.streakHistory.length).toBe(30);
    });
  });

  describe('isStreakActive', () => {
    it('should return false for null date', () => {
      expect(isStreakActive(null)).toBe(false);
    });

    it('should return true for today', () => {
      const today = getTodayString();
      expect(isStreakActive(today)).toBe(true);
    });

    it('should return true for yesterday', () => {
      const yesterday = new Date();
      yesterday.setUTCDate(yesterday.getUTCDate() - 1);
      const dateStr = yesterday.toISOString().split('T')[0];
      expect(isStreakActive(dateStr)).toBe(true);
    });

    it('should return false for 2 days ago', () => {
      const twoDaysAgo = new Date();
      twoDaysAgo.setUTCDate(twoDaysAgo.getUTCDate() - 2);
      const dateStr = twoDaysAgo.toISOString().split('T')[0];
      expect(isStreakActive(dateStr)).toBe(false);
    });
  });

  describe('getStreakMilestones', () => {
    it('should return milestones with correct achieved status', () => {
      const milestones = getStreakMilestones(10);
      expect(milestones[0].achieved).toBe(true); // 3 days
      expect(milestones[1].achieved).toBe(true); // 7 days
      expect(milestones[2].achieved).toBe(false); // 14 days
    });

    it('should have 7 milestones', () => {
      const milestones = getStreakMilestones(0);
      expect(milestones.length).toBe(7);
    });

    it('should mark all achieved for large streak', () => {
      const milestones = getStreakMilestones(400);
      expect(milestones.every((m) => m.achieved)).toBe(true);
    });
  });

  describe('getNextMilestone', () => {
    it('should return 3-day milestone for zero streak', () => {
      const next = getNextMilestone(0);
      expect(next).not.toBeNull();
      expect(next!.days).toBe(3);
    });

    it('should return null when all milestones achieved', () => {
      const next = getNextMilestone(400);
      expect(next).toBeNull();
    });
  });

  describe('getHighestMilestone', () => {
    it('should return null for zero streak', () => {
      const highest = getHighestMilestone(0);
      expect(highest).toBeNull();
    });

    it('should return week milestone for 10-day streak', () => {
      const highest = getHighestMilestone(10);
      expect(highest).not.toBeNull();
      expect(highest!.days).toBe(7);
    });
  });
});
