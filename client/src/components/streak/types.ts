/**
 * Type definitions for the streak tracking component.
 */

export interface StreakDay {
  date: string; // ISO 8601 date string (YYYY-MM-DD)
  completed: boolean;
  challengeCount: number;
}

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string | null;
  totalDaysActive: number;
  streakHistory: StreakDay[];
}

export interface StreakMilestone {
  days: number;
  label: string;
  emoji: string;
  achieved: boolean;
}

export interface StreakProps {
  completedChallenges: CompletedChallenge[];
  timezone?: string;
  showMilestones?: boolean;
  maxHistoryDays?: number;
}

export interface CompletedChallenge {
  id: string;
  completedDate: number; // Unix timestamp in milliseconds
  challengeType?: number;
  solution?: string;
}

export interface StreakCalendarProps {
  days: StreakDay[];
  currentStreak: number;
}

export interface StreakBadgeProps {
  streak: number;
  milestone: StreakMilestone | null;
}
