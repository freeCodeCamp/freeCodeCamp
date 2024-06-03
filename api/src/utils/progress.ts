export type ProgressTimestamp = number | { timestamp: number } | null;

/**
 * Converts a ProgressTimestamp array to a object with keys based on the timestamps.
 *
 * @param progressTimestamps The ProgressTimestamp array.
 * @returns The object with keys based on the timestamps.
 */
export const getCalendar = (
  progressTimestamps: ProgressTimestamp[] | null
): Record<string, 1> => {
  const calendar: Record<string, 1> = {};

  progressTimestamps?.forEach(progress => {
    if (progress === null) return;
    if (typeof progress === 'number') {
      calendar[Math.floor(progress / 1000)] = 1;
    } else {
      calendar[Math.floor(progress.timestamp / 1000)] = 1;
    }
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
  progressTimestamps: ProgressTimestamp[] | null
): number => {
  return progressTimestamps?.length ?? 1;
};
