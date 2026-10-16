import { describe, expect, test } from 'vitest';

import { calculateActivityStreak } from './activity.js';

const start = new Date('2026-08-01T12:00:00.000Z');
const qualification = (hoursAfterStart: number) => ({
  occurred_at_milliseconds: start.getTime() + hoursAfterStart * 60 * 60 * 1000
});

describe('calculateActivityStreak', () => {
  test('starts a streak with the first qualification', () => {
    expect(calculateActivityStreak([qualification(0)], start)).toEqual({
      current: 1,
      longest: 1,
      activeSession: false,
      lastQualifiedAt: '2026-08-01T12:00:00.000Z',
      canIncrementAt: '2026-08-02T12:00:00.000Z',
      expiresAt: '2026-08-03T12:00:00.000Z'
    });
  });

  test('records qualifications under 24 hours without incrementing', () => {
    expect(
      calculateActivityStreak(
        [qualification(0), qualification(23)],
        new Date('2026-08-02T11:00:00.000Z')
      )
    ).toMatchObject({
      current: 1,
      longest: 1,
      lastQualifiedAt: '2026-08-02T11:00:00.000Z',
      canIncrementAt: '2026-08-02T12:00:00.000Z'
    });
  });

  test('increments between 24 and 48 hours', () => {
    expect(
      calculateActivityStreak(
        [qualification(0), qualification(24), qualification(72)],
        new Date('2026-08-04T12:00:00.000Z')
      )
    ).toMatchObject({ current: 3, longest: 3 });
  });

  test('resets after the 48-hour grace window', () => {
    expect(
      calculateActivityStreak(
        [qualification(0), qualification(24), qualification(73)],
        new Date('2026-08-04T13:00:00.000Z')
      )
    ).toMatchObject({ current: 1, longest: 2 });
  });

  test('expires a streak when no new qualification arrives', () => {
    expect(
      calculateActivityStreak(
        [qualification(0)],
        new Date('2026-08-03T12:00:00.001Z')
      )
    ).toMatchObject({ current: 0, longest: 1 });
  });

  test('sorts and deduplicates qualification timestamps', () => {
    expect(
      calculateActivityStreak(
        [qualification(24), qualification(0), qualification(24)],
        new Date('2026-08-02T12:00:00.000Z')
      )
    ).toMatchObject({ current: 2, longest: 2 });
  });
});
