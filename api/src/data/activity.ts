import { type FastifyInstance, type FastifyRequest } from 'fastify';

import { getActivityDate, isValidTimeZone } from '../utils/activity-date.js';
import { generateNanoId } from '../utils/ids.js';

export type ActivityEventType = 'challenge_submit';
export type ActivityEventSource = 'client' | 'server';

type ActivityEvent = {
  userId: string;
  eventType: ActivityEventType;
  source: ActivityEventSource;
  timezone: string;
  eventId?: string;
  subjectId?: string;
  url?: string;
  occurredAt?: Date;
};

const EVENT_VERSION = 1;

/**
 * Gets a valid camper timezone from a request, falling back to UTC.
 * @param req The incoming request.
 * @returns An IANA timezone name.
 */
export function getRequestTimezone(req: FastifyRequest): string {
  const timezone = req.headers['x-fcc-timezone'];
  return typeof timezone === 'string' && isValidTimeZone(timezone)
    ? timezone
    : 'UTC';
}

async function getActivityTrackingId(
  fastify: FastifyInstance,
  userId: string
): Promise<string> {
  let user = await fastify.prisma.user.findUnique({
    where: { id: userId },
    select: { activityTrackingId: true }
  });

  if (!user) throw new Error('Authenticated user does not exist');

  if (!user.activityTrackingId) {
    await fastify.prisma.user.updateMany({
      where: {
        id: userId,
        OR: [
          { activityTrackingId: null },
          { activityTrackingId: { isSet: false } }
        ]
      },
      data: { activityTrackingId: generateNanoId() }
    });
    user = await fastify.prisma.user.findUnique({
      where: { id: userId },
      select: { activityTrackingId: true }
    });
  }

  if (!user?.activityTrackingId) {
    throw new Error('Unable to initialize activity tracking ID');
  }

  return user.activityTrackingId;
}

/**
 * Persists an activity event in ClickHouse.
 * @param fastify The Fastify instance.
 * @param event The activity to persist.
 */
export async function insertActivityEvent(
  fastify: FastifyInstance,
  event: ActivityEvent
): Promise<string> {
  const trackingId = await getActivityTrackingId(fastify, event.userId);
  const occurredAt = event.occurredAt ?? new Date();
  const timezone = isValidTimeZone(event.timezone) ? event.timezone : 'UTC';
  const insertStart = performance.now();

  try {
    await fastify.clickhouse.insert({
      table: 'activity_events',
      format: 'JSONEachRow',
      values: [
        {
          event_id: event.eventId ?? crypto.randomUUID(),
          tracking_id: trackingId,
          event_type: event.eventType,
          source: event.source,
          event_version: EVENT_VERSION,
          subject_id: event.subjectId,
          url: event.url,
          occurred_at: occurredAt.toISOString(),
          activity_date: getActivityDate(occurredAt, timezone),
          timezone
        }
      ]
    });
    fastify.Sentry.metrics.distribution(
      'clickhouse.query_duration_ms',
      performance.now() - insertStart,
      {
        unit: 'millisecond',
        attributes: { operation: 'insert_activity', result: 'success' }
      }
    );
    return trackingId;
  } catch (error) {
    fastify.Sentry.metrics.count('clickhouse.insert_failed', 1);
    fastify.Sentry.metrics.distribution(
      'clickhouse.query_duration_ms',
      performance.now() - insertStart,
      {
        unit: 'millisecond',
        attributes: { operation: 'insert_activity', result: 'failure' }
      }
    );
    throw error;
  }
}

/**
 * Gets the latest recorded resume URL for a camper.
 * @param fastify The Fastify instance.
 * @param trackingId The camper's opaque tracking ID.
 * @returns The latest resume URL, if one exists.
 */
export async function getResumeUrl(
  fastify: FastifyInstance,
  trackingId: string
): Promise<string | undefined> {
  const result = await fastify.clickhouse.query({
    query: `
      SELECT url
      FROM activity_events
      WHERE tracking_id = {trackingId: String}
        AND event_type = 'challenge_submit'
        AND url IS NOT NULL
      ORDER BY occurred_at DESC, ingested_at DESC, event_id DESC
      LIMIT 1
    `,
    format: 'JSONEachRow',
    query_params: { trackingId }
  });
  const [latestActivity] = await result.json<{ url: string }>();
  return latestActivity?.url;
}
