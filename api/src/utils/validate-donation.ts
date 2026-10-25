// A timestamp from the future is not recent, it is wrong, so the window is
// bounded at both ends. The slack absorbs clock drift between us and the
// payment provider.
const CLOCK_SKEW_SECONDS = 60;

/**
 * Checks if a timestamp is within the last given number of minutes.
 * @param unixTimestamp - A unix timestamp, in seconds.
 * @param minutes - How far back the timestamp is allowed to be.
 * @returns - Whether the timestamp is recent enough.
 */
export const isWithinMinutes = (unixTimestamp: number, minutes: number) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const timeDifference = currentTimestamp - unixTimestamp;
  return (
    timeDifference >= -CLOCK_SKEW_SECONDS && timeDifference <= minutes * 60
  );
};
