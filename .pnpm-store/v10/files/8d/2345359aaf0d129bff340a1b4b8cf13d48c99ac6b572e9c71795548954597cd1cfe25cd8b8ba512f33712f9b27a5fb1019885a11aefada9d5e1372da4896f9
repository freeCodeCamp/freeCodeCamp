import { getSkewCorrectedDate } from "./getSkewCorrectedDate";

/**
 * @internal
 *
 * Checks if the provided date is within the skew window of 300000ms.
 *
 * @param clockTime - The time to check for skew in milliseconds.
 * @param systemClockOffset - The offset of the system clock in milliseconds.
 */
export const isClockSkewed = (clockTime: number, systemClockOffset: number) =>
  Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;
