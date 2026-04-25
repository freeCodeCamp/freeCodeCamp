import {
  CompletedChallenge,
  StreakData,
  StreakDay,
  StreakMilestone
} from './types';

/**
 * Normalize a timestamp to a date string in the user's timezone.
 * Uses UTC if no timezone is provided.
 */
export function normalizeToDateString(
  timestamp: number,
  timezone?: string
): string {
  const date = new Date(timestamp);
  if (timezone) {
    try {
      const formatter = new Intl.DateTimeFormat('en-CA', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      return formatter.format(date);
    } catch {
      // Fall back to UTC if timezone is invalid
    }
  }
  return date.toISOString().split('T')[0];
}

/**
 * Get today's date string in the given timezone.
 */
export function getTodayString(timezone?: string): string {
  return normalizeToDateString(Date.now(), timezone);
}

/**
 * Parse a date string (YYYY-MM-DD) to a Date object at midnight UTC.
 */
export function parseDateString(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

/**
 * Get the difference in days between two date strings.
 */
export function daysBetween(dateA: string, dateB: string): number {
  const a = parseDateString(dateA);
  const b = parseDateString(dateB);
  const diffMs = Math.abs(a.getTime() - b.getTime());
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

/**
 * Build a map of dates to challenge counts from completed challenges.
 */
export function buildDateMap(
  challenges: CompletedChallenge[],
  timezone?: string
): Map<string, number> {
  const dateMap = new Map<string, number>();

  for (const challenge of challenges) {
    if (!challenge.completedDate || challenge.completedDate <= 0) {
      continue;
    }
    const dateStr = normalizeToDateString(challenge.completedDate, timezone);
    const current = dateMap.get(dateStr) || 0;
    dateMap.set(dateStr, current + 1);
  }

  return dateMap;
}

/**
 * Calculate the current and longest streak from a set of completed challenges.
 */
export function calculateStreak(
  challenges: CompletedChallenge[],
  timezone?: string
): StreakData {
  if (!challenges || challenges.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      totalDaysActive: 0,
      streakHistory: []
    };
  }

  const dateMap = buildDateMap(challenges, timezone);
  const today = getTodayString(timezone);

  // Sort dates in descending order
  const sortedDates = Array.from(dateMap.keys()).sort((a, b) =>
    b.localeCompare(a)
  );

  if (sortedDates.length === 0) {
    return {
      currentStreak: 0,
      longestStreak: 0,
      lastActiveDate: null,
      totalDaysActive: 0,
      streakHistory: []
    };
  }

  const lastActiveDate = sortedDates[0];
  const totalDaysActive = sortedDates.length;

  // Calculate current streak (from today or yesterday backwards)
  let currentStreak = 0;
  const daysFromToday = daysBetween(today, lastActiveDate);

  if (daysFromToday <= 1) {
    // Streak is active if last active was today or yesterday
    let checkDate = daysFromToday === 0 ? today : lastActiveDate;
    let i = 0;
    while (dateMap.has(checkDate)) {
      currentStreak++;
      i++;
      const prevDate = parseDateString(checkDate);
      prevDate.setUTCDate(prevDate.getUTCDate() - 1);
      checkDate = prevDate.toISOString().split('T')[0];
    }
  }

  // Calculate longest streak
  let longestStreak = 0;
  let tempStreak = 1;
  for (let i = 0; i < sortedDates.length - 1; i++) {
    const diff = daysBetween(sortedDates[i], sortedDates[i + 1]);
    if (diff === 1) {
      tempStreak++;
    } else {
      longestStreak = Math.max(longestStreak, tempStreak);
      tempStreak = 1;
    }
  }
  longestStreak = Math.max(longestStreak, tempStreak);
  longestStreak = Math.max(longestStreak, currentStreak);

  // Build streak history (last 30 days)
  const streakHistory: StreakDay[] = [];
  for (let i = 29; i >= 0; i--) {
    const d = new Date(parseDateString(today));
    d.setUTCDate(d.getUTCDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    streakHistory.push({
      date: dateStr,
      completed: dateMap.has(dateStr),
      challengeCount: dateMap.get(dateStr) || 0
    });
  }

  return {
    currentStreak,
    longestStreak,
    lastActiveDate,
    totalDaysActive,
    streakHistory
  };
}

/**
 * Check if the user's streak is currently active.
 */
export function isStreakActive(
  lastActiveDate: string | null,
  timezone?: string
): boolean {
  if (!lastActiveDate) {
    return false;
  }
  const today = getTodayString(timezone);
  const diff = daysBetween(today, lastActiveDate);
  return diff <= 1;
}

/**
 * Get streak milestones with achieved status.
 */
export function getStreakMilestones(currentStreak: number): StreakMilestone[] {
  const milestones: StreakMilestone[] = [
    { days: 3, label: '3-Day Streak', emoji: '🔥', achieved: false },
    { days: 7, label: 'Week Warrior', emoji: '⚡', achieved: false },
    { days: 14, label: 'Two-Week Champion', emoji: '🏆', achieved: false },
    { days: 30, label: 'Monthly Master', emoji: '🌟', achieved: false },
    { days: 60, label: 'Double Month Hero', emoji: '💎', achieved: false },
    { days: 100, label: 'Century Coder', emoji: '🎯', achieved: false },
    { days: 365, label: 'Year of Code', emoji: '👑', achieved: false }
  ];

  return milestones.map((m) => ({
    ...m,
    achieved: currentStreak >= m.days
  }));
}

/**
 * Get the next milestone the user is working towards.
 */
export function getNextMilestone(
  currentStreak: number
): StreakMilestone | null {
  const milestones = getStreakMilestones(currentStreak);
  return milestones.find((m) => !m.achieved) || null;
}

/**
 * Get the highest achieved milestone.
 */
export function getHighestMilestone(
  currentStreak: number
): StreakMilestone | null {
  const milestones = getStreakMilestones(currentStreak);
  const achieved = milestones.filter((m) => m.achieved);
  return achieved.length > 0 ? achieved[achieved.length - 1] : null;
}
