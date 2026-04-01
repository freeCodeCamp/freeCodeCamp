import { describe, test, expect } from 'vitest';
import { getCalendar, getPoints } from './progress.js';

describe('utils/progress', () => {
  describe('getCalendar', () => {
    test('should return an empty object if no timestamps are passed', () => {
      expect(getCalendar([])).toEqual({});
      expect(getCalendar(null)).toEqual({});
    });
    test('should take timestamps and return a calendar object', () => {
      const timestamps = [-1111001, 0, 1111000, 1111500, 1113000, 9999999];

      expect(getCalendar(timestamps)).toEqual({
        '-1112': 1,
        0: 1,
        1111: 1,
        1113: 1,
        9999: 1
      });
    });

    test('should handle null, { timestamp: number } and float entries', () => {
      const timestamps = [null, { timestamp: 1113000 }, 1111000.5];

      expect(getCalendar(timestamps)).toEqual({
        1111: 1,
        1113: 1
      });
    });

    test('should merge activityTimestamps into the calendar', () => {
      const progressTimestamps = [1000000, 2000000];
      const activityTimestamps = [3000000, 4000000];

      expect(getCalendar(progressTimestamps, activityTimestamps)).toEqual({
        1000: 1,
        2000: 1,
        3000: 1,
        4000: 1
      });
    });

    test('should handle overlapping timestamps from both arrays', () => {
      const progressTimestamps = [1000000];
      const activityTimestamps = [1000000];

      expect(getCalendar(progressTimestamps, activityTimestamps)).toEqual({
        1000: 1
      });
    });

    test('should work with null or undefined activityTimestamps', () => {
      const progressTimestamps = [1000000];

      expect(getCalendar(progressTimestamps, null)).toEqual({ 1000: 1 });
      expect(getCalendar(progressTimestamps, undefined)).toEqual({ 1000: 1 });
    });
  });

  describe('getPoints', () => {
    test('should return 1 if there are no progressTimestamps', () => {
      expect(getPoints(null)).toEqual(1);
    });
    test('should return then number of progressTimestamps if there are any', () => {
      expect(getPoints([0, 1, 2])).toEqual(3);
    });
  });
});
