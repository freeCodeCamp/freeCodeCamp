import { describe, expect, it } from 'vitest';

import {
  formatDate,
  formatDisplayDate,
  getTodayUsCentral,
  isValidDateOrMonthDayString,
  isValidDateString,
  isValidMonthDayString,
  toMonthDay,
  truncate
} from './helpers';

describe('daily-coding-challenge helpers', () => {
  describe('formatDate', () => {
    it('formats year, month, and day with leading zeros', () => {
      expect(formatDate({ year: 2026, month: 3, day: 5 })).toBe('2026-03-05');
      expect(formatDate({ year: 2026, month: 11, day: 28 })).toBe('2026-11-28');
    });
  });

  describe('getTodayUsCentral', () => {
    it('returns the America/Chicago calendar date across UTC midnight boundaries', () => {
      // 03:00 UTC in July (CDT, UTC-5) is 22:00 on the previous day in Chicago
      expect(getTodayUsCentral(new Date('2026-07-15T03:00:00.000Z'))).toBe(
        '2026-07-14'
      );
      expect(getTodayUsCentral(new Date('2026-07-15T06:00:00.000Z'))).toBe(
        '2026-07-15'
      );
    });
  });

  describe('isValidDateString', () => {
    it('validates yyyy-MM-dd date strings', () => {
      expect(isValidDateString('2026-07-15')).toBe(true);
      expect(isValidDateString('2026-13-01')).toBe(false);
      expect(isValidDateString('07-15')).toBe(false);
      expect(isValidDateString('invalid')).toBe(false);
    });
  });

  describe('isValidMonthDayString', () => {
    it('validates strict MM-DD strings including leap day', () => {
      expect(isValidMonthDayString('01-01')).toBe(true);
      expect(isValidMonthDayString('02-29')).toBe(true);
      expect(isValidMonthDayString('12-31')).toBe(true);
      expect(isValidMonthDayString('2-9')).toBe(false);
      expect(isValidMonthDayString('02-30')).toBe(false);
      expect(isValidMonthDayString('13-01')).toBe(false);
      expect(isValidMonthDayString('00-10')).toBe(false);
      expect(isValidMonthDayString('2026-07-15')).toBe(false);
    });
  });

  describe('isValidDateOrMonthDayString', () => {
    it('accepts either yyyy-MM-dd or MM-DD strings', () => {
      expect(isValidDateOrMonthDayString('2026-08-11')).toBe(true);
      expect(isValidDateOrMonthDayString('08-11')).toBe(true);
      expect(isValidDateOrMonthDayString('2026-02-30')).toBe(false);
      expect(isValidDateOrMonthDayString('not-a-date')).toBe(false);
    });
  });

  describe('toMonthDay', () => {
    it('extracts MM-DD and maps Feb 29 to Feb 28', () => {
      expect(toMonthDay('2026-08-11')).toBe('08-11');
      expect(toMonthDay('08-11')).toBe('08-11');
      expect(toMonthDay('2024-02-29')).toBe('02-28');
      expect(toMonthDay('02-29')).toBe('02-28');
    });
  });

  describe('formatDisplayDate', () => {
    it('formats valid dates as Month Day and falls back for invalid dates', () => {
      expect(formatDisplayDate('2026-08-11')).toBe('August 11');
      expect(formatDisplayDate('02-29')).toBe('February 28');
      expect(formatDisplayDate('invalid')).toBe('Invalid date');
    });
  });

  describe('truncate', () => {
    it('truncates strings exceeding maxLength with an ellipsis', () => {
      expect(truncate('Short title')).toBe('Short title');
      expect(truncate('a'.repeat(35))).toBe('a'.repeat(35));
      expect(truncate('a'.repeat(36))).toBe('a'.repeat(35) + '...');
      expect(truncate('Hello World', 5)).toBe('Hello...');
    });
  });
});
