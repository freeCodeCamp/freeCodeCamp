import type { ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';

import {
  getDaysInMonth,
  getMonthInfo,
  type DailyChallengeMap
} from './calendar';

vi.mock('../../utils/get-words', () => ({
  randomQuote: () => ({ quote: 'Test quote', author: 'Test author' })
}));

function buildMap(
  entries: Record<string, Partial<DailyChallengeMap>>
): Map<string, DailyChallengeMap> {
  const map = new Map<string, DailyChallengeMap>();
  for (const [monthDay, entry] of Object.entries(entries)) {
    map.set(monthDay, {
      id: monthDay,
      date: entry.date ?? '',
      challengeNumber: entry.challengeNumber ?? 1,
      title: entry.title ?? '',
      completedLanguages: entry.completedLanguages ?? []
    });
  }
  return map;
}

function isAvailable(days: JSX.Element[], day: number): boolean {
  const element = days[day - 1] as ReactElement<{ isAvailable: boolean }>;
  return element.props.isAvailable;
}

describe('getDaysInMonth', () => {
  it('caps February at 28 days in a real leap year', () => {
    expect(getDaysInMonth(2028, 1)).toBe(28);
  });

  it('is still 28 days in a real non-leap year', () => {
    expect(getDaysInMonth(2026, 1)).toBe(28);
  });

  it('is unaffected for other months', () => {
    expect(getDaysInMonth(2026, 6)).toBe(31);
    expect(getDaysInMonth(2026, 3)).toBe(30);
  });
});

describe('getMonthInfo', () => {
  it('never generates a 29th day for February', () => {
    const { days } = getMonthInfo(2028, 1, buildMap({}));
    expect(days).toHaveLength(28);
  });

  it('marks a day unavailable when no challenge exists for it', () => {
    const { days } = getMonthInfo(2026, 6, buildMap({}));
    expect(isAvailable(days, 15)).toBe(false);
  });

  it('marks a day available when a challenge exists and no gating applies', () => {
    const map = buildMap({ '07-15': { date: '2026-07-15' } });
    const { days } = getMonthInfo(2026, 6, map);
    expect(isAvailable(days, 15)).toBe(true);
  });

  it('hideDaysAfter hides days past the given day, regardless of data', () => {
    const map = buildMap({
      '07-05': { date: '2026-07-05' },
      '07-10': { date: '2026-07-10' }
    });
    const { days } = getMonthInfo(2026, 6, map, 5);
    expect(isAvailable(days, 5)).toBe(true);
    expect(isAvailable(days, 10)).toBe(false);
  });

  it('hideDaysThrough hides days up to and including the given day', () => {
    const map = buildMap({
      '07-05': { date: '2026-07-05' },
      '07-10': { date: '2026-07-10' }
    });
    const { days } = getMonthInfo(2026, 6, map, undefined, 5);
    expect(isAvailable(days, 5)).toBe(false);
    expect(isAvailable(days, 10)).toBe(true);
  });

  describe('requireExactYear', () => {
    const map = buildMap({ '08-15': { date: '2025-08-15' } });

    it('hides a day whose stored year does not match the displayed year', () => {
      const { days } = getMonthInfo(2026, 7, map, undefined, undefined, true);
      expect(isAvailable(days, 15)).toBe(false);
    });

    it('shows the day when the displayed year matches the stored year', () => {
      const { days } = getMonthInfo(2025, 7, map, undefined, undefined, true);
      expect(isAvailable(days, 15)).toBe(true);
    });

    it('is ignored when not set, matching evergreen year-agnostic lookup', () => {
      const { days } = getMonthInfo(2026, 7, map);
      expect(isAvailable(days, 15)).toBe(true);
    });
  });
});
