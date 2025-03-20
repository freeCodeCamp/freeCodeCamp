import { render, screen } from '@testing-library/react';
import React from 'react';
import Stats, { calculateStreaks } from './stats';

const props: { calendar: { [key: number]: number }; points: number } = {
  calendar: {},
  points: 0
};

describe('<Stats/>', () => {
  it('calculates the correct longest streak', () => {
    render(<Stats {...props} />);
    expect(screen.getByTestId('longest-streak')).toHaveTextContent(
      'profile.longest-streak'
    );
  });

  it('calculates the correct current streak', () => {
    render(<Stats {...props} />);
    expect(screen.getByTestId('current-streak')).toHaveTextContent(
      'profile.current-streak'
    );
  });
});

const oldStreakCalendar = {
  '1736496000': 1, // 2025-01-10 08:00:00 UTC
  '1736582400': 1, // 2025-01-11 08:00:00 UTC
  '1736668800': 1, // 2025-01-12 08:00:00 UTC
  '1736755200': 1, // 2025-01-13 08:00:00 UTC
  '1736841600': 1 // 2025-01-14 08:00:00 UTC
};

const recentStreakCalendar = {
  '1736699400': 1, // 2025-01-12 16:30:00 UTC
  '1736763300': 1, // 2025-01-13 10:15:00 UTC
  '1736865900': 1 // 2025-01-14 14:45:00 UTC
};

const twoStreakCalendar = {
  '1736503200': 1, // 2025-01-10 10:00:00 UTC
  '1736604000': 1, // 2025-01-11 14:00:00 UTC
  '1736697600': 1, // 2025-01-12 16:00:00 UTC
  // Skipping Jan 13, 2025
  '1736845200': 1, // 2025-01-14 09:00:00 UTC
  '1736946000': 1 // 2025-01-15 13:00:00 UTC
};

const multipleEntriesInOneDay = {
  // Two on Jan 13, 2025
  '1736755200': 1, // 2025-01-13 08:00:00 UTC
  '1736755500': 1, // 2025-01-13 08:05:00 UTC
  // Two on Jan 14, 2025
  '1736845200': 1, // 2025-01-14 09:00:00 UTC
  '1736845500': 1, // 2025-01-14 09:05:00 UTC
  // Two on Jan 15, 2025
  '1736946000': 1, // 2025-01-15 13:00:00 UTC
  '1736946300': 1 // 2025-01-15 13:05:00 UTC
};

jest.useFakeTimers();

describe('calculateStreaks', () => {
  beforeEach(() => jest.setSystemTime(new Date(2025, 0, 15)));
  test('Should return 0 for the current streak if the user has not made progress today', () => {
    const { longestStreak, currentStreak } =
      calculateStreaks(oldStreakCalendar);

    expect(longestStreak).toBe(5);
    expect(currentStreak).toBe(0);
  });

  test('Should calculate longest streak, regardless of how long ago they were', () => {
    jest.setSystemTime(new Date(2030, 0, 15));
    const { longestStreak, currentStreak } =
      calculateStreaks(oldStreakCalendar);

    expect(longestStreak).toBe(5);
    expect(currentStreak).toBe(0);
  });

  test('Should return a longest streak of 3 days when the current streak is 3 days', () => {
    jest.setSystemTime(new Date(2025, 0, 14));
    const { longestStreak, currentStreak } =
      calculateStreaks(recentStreakCalendar);

    expect(longestStreak).toBe(3);
    expect(currentStreak).toBe(3);
  });

  test('Should return a longest and current streaks of 1 day when the user has recently completed their first challenge', () => {
    const calendar = {
      [Date.now() / 1000]: 1
    };

    const { longestStreak, currentStreak } = calculateStreaks(calendar);

    expect(longestStreak).toBe(1);
    expect(currentStreak).toBe(1);
  });

  test('Should return a current streak of 2 days with a longest streak of 3 days when the longest streak is longer than the current one', () => {
    const { longestStreak, currentStreak } =
      calculateStreaks(twoStreakCalendar);

    expect(longestStreak).toBe(3);
    expect(currentStreak).toBe(2);
  });

  test('Should return a streak of 0 days if no challenges have been completed', () => {
    const { longestStreak, currentStreak } = calculateStreaks({});

    expect(longestStreak).toBe(0);
    expect(currentStreak).toBe(0);
  });

  test('Should handle multiple entries in one day', () => {
    const { longestStreak, currentStreak } = calculateStreaks(
      multipleEntriesInOneDay
    );

    expect(longestStreak).toBe(3);
    expect(currentStreak).toBe(3);
  });
});
