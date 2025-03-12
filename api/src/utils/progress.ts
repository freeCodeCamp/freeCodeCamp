import { user } from '@prisma/client';

export type Calendar = Record<number, 1>;
/**
 * Converts a ProgressTimestamp array to a object with keys based on the timestamps.
 *
 * TODO: Destroy this function. Client change needed.
 *
 * @param progressTimestamps The ProgressTimestamp array.
 * @returns The object with keys based on the timestamps.
 */
export const getCalendar = (
  progressTimestamps: user['progressTimestamps']
): Calendar => {
  const calendar: Calendar = {};

  progressTimestamps.forEach(progress => {
    calendar[Math.floor(progress / 1000)] = 1;
  });
  return calendar;
};

/**
 * Converts a ProgressTimestamp array to an integer number of points.
 *
 * @param progressTimestamps The ProgressTimestamp array.
 * @returns The number of points.
 */
export const getPoints = (
  progressTimestamps: user['progressTimestamps']
): number => {
  return progressTimestamps.length;
};
