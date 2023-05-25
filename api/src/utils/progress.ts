export type ProgressTimestamp = number | { timestamp: number } | null;

export const getCalendar = (
  progressTimestamps?: ProgressTimestamp[]
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
