import { normalizeDates } from "./normalizeDates.js";

export function normalizeInterval(context, interval) {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}
