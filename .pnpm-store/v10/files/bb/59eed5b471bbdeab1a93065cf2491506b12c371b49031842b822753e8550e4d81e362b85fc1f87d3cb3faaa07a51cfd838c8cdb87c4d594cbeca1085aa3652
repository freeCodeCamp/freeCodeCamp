import { isClockSkewed } from "./isClockSkewed";

/**
 * @internal
 *
 * If clock is skewed, it returns the difference between serverTime and current time.
 * If clock is not skewed, it returns currentSystemClockOffset.
 *
 * @param clockTime The string value of the server time.
 * @param currentSystemClockOffset The current system clock offset.
 */
export const getUpdatedSystemClockOffset = (clockTime: string, currentSystemClockOffset: number): number => {
  const clockTimeInMs = Date.parse(clockTime);
  if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
    return clockTimeInMs - Date.now();
  }
  return currentSystemClockOffset;
};
