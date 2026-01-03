import { getTimezoneOffset } from 'date-fns-tz';
import { FastifyReply } from 'fastify';

/**
 * @returns Now US Central time.
 */
export function getNowUsCentral() {
  const offset = getTimezoneOffset('America/Chicago', new Date());
  return new Date(Date.now() + offset);
}

/**
 * Returns a Date object set to UTC midnight of the given date.
 * @param date - Date Object.
 * @returns UTC midnight of the given date.
 */
export function getUtcMidnight(date: Date): Date {
  return new Date(
    Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
  );
}

/**
 * Parses a date string in the format "YYYY-MM-DD" and returns a Date object set to UTC midnight.
 * Returns null if the input is not in the correct format.
 * @param dateStr - Date string in "YYYY-MM-DD" format.
 * @returns Date object set to UTC midnight or null if invalid.
 */
export function dateStringToUtcMidnight(dateStr: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return null;
  }

  const [year, month, day] = dateStr.split('-').map(Number) as [
    number,
    number,
    number
  ];

  return new Date(Date.UTC(year, month - 1, day));
}

/**
 * Sends a standardized server error response.
 *
 * @param reply The Fastify reply instance.
 * @param replyStatus HTTP status code to send (default is 500).
 * @param message Error message to return.
 * @param type Error type identifier.
 * @returns The Fastify reply instance.
 */

export function sendServerError(
  reply: FastifyReply,
  replyStatus = 500,
  message = 'Internal server error.',
  type = 'error'
) {
  return reply.status(replyStatus).send({
    type,
    message
  });
}