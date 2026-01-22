/**
 * Checks if a timestamp was created within five minutes.
 * @param unixTimestamp - A unix timestamp .
 * @returns - The generated email template.
 */
export const inLastFiveMinutes = (unixTimestamp: number) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const timeDifference = currentTimestamp - unixTimestamp;
  return timeDifference <= 300; // 300 seconds is 5 minutes
};
