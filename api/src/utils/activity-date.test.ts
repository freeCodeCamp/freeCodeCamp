import { describe, expect, test } from 'vitest';

import { getActivityDate } from './activity-date.js';

describe('activity date helpers', () => {
  test('derives the date in the provided timezone', () => {
    const date = new Date('2026-07-23T01:00:00.000Z');

    expect(getActivityDate(date, 'UTC')).toBe('2026-07-23');
    expect(getActivityDate(date, 'America/New_York')).toBe('2026-07-22');
  });
});
