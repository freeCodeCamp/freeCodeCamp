export function formatSecondsToTime(s: number) {
  const hourInSeconds = 60 * 60;
  const minuteInSeconds = 60;
  const h = Math.floor(s / hourInSeconds);
  s -= h * hourInSeconds;

  const minutes = Math.floor(s / minuteInSeconds);
  s -= minutes * minuteInSeconds;

  const mm = minutes < 10 && h >= 1 ? `0${minutes}` : minutes;
  const seconds = s % 60;
  const ss = seconds < 10 ? `0${seconds}` : seconds;

  return h > 0 ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
}
