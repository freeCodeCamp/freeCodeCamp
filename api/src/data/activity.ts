import { type FastifyInstance, type FastifyRequest } from 'fastify';

import { getActivityDate, isValidTimeZone } from '../utils/activity-date.js';
import { generateNanoId } from '../utils/ids.js';

export const meaningfulActivityEventTypes = [
  'challenge_work',
  'test_run',
  'challenge_completed',
  'daily_challenge_attempted',
  'daily_challenge_completed',
  'module_completed',
  'project_submitted',
  'ms_trophy_completed',
  'exam_completed'
] as const;

export const activityEventTypes = [
  ...meaningfulActivityEventTypes,
  'streak_qualified',
  'challenge_submit'
] as const;

export type ActivityEventType = (typeof activityEventTypes)[number];
export type ActivityEventSource = 'client' | 'server';

export const clientActivityEventTypes = [
  'challenge_work',
  'test_run',
  'daily_challenge_attempted',
  'module_completed',
  'challenge_submit'
] as const satisfies readonly ActivityEventType[];

export type ClientActivityEventType = (typeof clientActivityEventTypes)[number];

export type ActivityStreak = {
  current: number;
  longest: number;
  activeSession: boolean;
  lastQualifiedAt?: string;
  canIncrementAt?: string;
  expiresAt?: string;
};

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

type StreakQualification = {
  occurred_at_milliseconds: string | number;
};

const EVENT_VERSION = 1;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;
const GRACE_WINDOW_MS = 48 * 60 * 60 * 1000;
const meaningfulEventTypeList = meaningfulActivityEventTypes
  .map(eventType => `'${eventType}'`)
  .join(', ');

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
 * Persists a non-critical server activity event without failing the primary request.
 * @param fastify The Fastify instance.
 * @param req The request that produced the event.
 * @param event The activity to persist.
 */
export async function insertActivityEventSafely(
  fastify: FastifyInstance,
  req: FastifyRequest,
  event: Omit<ActivityEvent, 'source' | 'timezone'> & { timezone?: string }
): Promise<void> {
  try {
    await insertActivityEvent(fastify, {
      ...event,
      source: 'server',
      timezone: event.timezone ?? getRequestTimezone(req)
    });
  } catch (error) {
    req.log.error(error, 'Unable to record activity event');
    fastify.Sentry.captureException(error);
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

/**
 * Calculates a streak from qualification timestamps. A qualification can
 * increment the streak after 24 hours. The existing streak expires after a
 * 48-hour rolling grace window.
 * @param qualifications Qualification timestamps.
 * @param now The time at which to calculate the streak.
 * @returns Current, longest and rolling-window streak state.
 */
export function calculateActivityStreak(
  qualifications: StreakQualification[],
  now: Date = new Date()
): ActivityStreak {
  const qualificationTimes = [
    ...new Set(
      qualifications
        .map(({ occurred_at_milliseconds }) => Number(occurred_at_milliseconds))
        .filter(Number.isFinite)
    )
  ].sort((first, second) => first - second);

  let longest = 0;
  let run = 0;
  let lastIncrementedAt: number | undefined;
  for (const qualificationTime of qualificationTimes) {
    if (lastIncrementedAt === undefined) {
      run = 1;
      lastIncrementedAt = qualificationTime;
    } else {
      const elapsed = qualificationTime - lastIncrementedAt;
      if (elapsed < ONE_DAY_MS) continue;

      run = elapsed <= GRACE_WINDOW_MS ? run + 1 : 1;
      lastIncrementedAt = qualificationTime;
    }
    longest = Math.max(longest, run);
  }

  if (lastIncrementedAt === undefined) {
    return { current: 0, longest: 0, activeSession: false };
  }

  const expiresAt = lastIncrementedAt + GRACE_WINDOW_MS;
  const latestQualification = qualificationTimes.at(-1)!;

  return {
    current: now.getTime() <= expiresAt ? run : 0,
    longest,
    activeSession: false,
    lastQualifiedAt: new Date(latestQualification).toISOString(),
    canIncrementAt: new Date(lastIncrementedAt + ONE_DAY_MS).toISOString(),
    expiresAt: new Date(expiresAt).toISOString()
  };
}

/**
 * Calculates the camper's streak from server-qualified sessions.
 * @param fastify The Fastify instance.
 * @param trackingId The camper's opaque tracking ID.
 * @returns Current, longest and rolling-window streak state.
 */
export async function getActivityStreak(
  fastify: FastifyInstance,
  trackingId: string | null | undefined
): Promise<ActivityStreak> {
  if (!trackingId) {
    return { current: 0, longest: 0, activeSession: false };
  }

  const result = await fastify.clickhouse.query({
    query: `
      SELECT
        toString(toUnixTimestamp64Milli(occurred_at))
          AS occurred_at_milliseconds
      FROM activity_events
      WHERE tracking_id = {trackingId: String}
        AND event_type = 'streak_qualified'
      ORDER BY occurred_at
    `,
    format: 'JSONEachRow',
    query_params: { trackingId }
  });
  const qualifications = await result.json<StreakQualification>();
  return calculateActivityStreak(qualifications);
}

export type StreakQualificationResult =
  | { status: 'not_ready' }
  | {
      status: 'qualified';
      activityStreak: ActivityStreak;
    };

/**
 * Qualifies a session after a recent meaningful event has aged five minutes.
 * @param fastify The Fastify instance.
 * @param userId The authenticated camper ID.
 * @param timezone The camper's current timezone.
 * @returns Whether the session qualified and the resulting streak state.
 */
export async function qualifyActivityStreak(
  fastify: FastifyInstance,
  userId: string,
  timezone: string
): Promise<StreakQualificationResult> {
  const trackingId = await getActivityTrackingId(fastify, userId);
  const result = await fastify.clickhouse.query({
    query: `
      SELECT count() AS eligible_count
      FROM activity_events
      WHERE tracking_id = {trackingId: String}
        AND event_type IN (${meaningfulEventTypeList})
        AND occurred_at <= now64(3) - INTERVAL 5 MINUTE
        AND occurred_at >= now64(3) - INTERVAL 24 HOUR
        AND occurred_at > (
          SELECT max(occurred_at)
          FROM activity_events
          WHERE tracking_id = {trackingId: String}
            AND event_type = 'streak_qualified'
        )
    `,
    format: 'JSONEachRow',
    query_params: { trackingId }
  });
  const [counts] = await result.json<{
    eligible_count: string | number;
  }>();

  if (Number(counts?.eligible_count) === 0) return { status: 'not_ready' };

  await insertActivityEvent(fastify, {
    userId,
    eventType: 'streak_qualified',
    source: 'server',
    timezone
  });
  return {
    status: 'qualified',
    activityStreak: {
      ...(await getActivityStreak(fastify, trackingId)),
      activeSession: true
    }
  };
}
