import crypto from 'node:crypto';

import { beforeAll, describe, expect, test, vi } from 'vitest';

import { insertActivityEvent } from '../../data/activity.js';
import {
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

interface SessionUserBody {
  result: string;
  user: Record<
    string,
    {
      resumeUrl?: string;
      activityStreak?: {
        current: number;
        longest: number;
        activeSession: boolean;
        lastQualifiedAt?: string;
        canIncrementAt?: string;
        expiresAt?: string;
      };
    }
  >;
}

const createBody = (
  overrides: Partial<{
    eventId: string;
    eventType: string;
    subjectId: string;
    url: string;
  }> = {}
) => ({
  eventId: crypto.randomUUID(),
  eventType: 'challenge_submit' as const,
  subjectId: 'bd7123c8c441eddfaeb5bdef',
  url: '/learn/javascript/basic-javascript/step-1',
  ...overrides
});

describe('Activity Routes', () => {
  setupServer();

  let setCookies: string[];

  beforeAll(async () => {
    setCookies = await devLogin();
  });

  describe('POST /activity', () => {
    test('returns 401 for unauthenticated requests', async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      const csrfCookies = res.get('Set-Cookie');

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies: csrfCookies
      }).send(createBody());

      expect(response.status).toBe(401);
    });

    test.each([
      ['a non-learning URL', { url: '/settings' }],
      ['an unknown event', { eventType: 'unknown' }]
    ])('returns 400 for %s', async (_case, overrides) => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(createBody(overrides));

      expect(response.status).toBe(400);
    });

    test('initializes a legacy user and persists the complete event', async () => {
      const eventId = crypto.randomUUID();
      const url = '/learn/javascript/basic-javascript/step-2';

      await fastifyTestInstance.prisma.user.update({
        where: { id: defaultUserId },
        data: { activityTrackingId: null }
      });

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      })
        .set('X-FCC-Timezone', 'America/New_York')
        .send(
          createBody({
            eventId,
            eventType: 'challenge_submit',
            url
          })
        );

      expect(response.status).toBe(200);

      const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
        where: { id: defaultUserId }
      });
      expect(user.activityTrackingId).toMatch(/^[0-9A-Za-z]{21}$/);

      const result = await fastifyTestInstance.clickhouse.query({
        query: `
          SELECT
            toString(event_id) AS event_id_string,
            tracking_id,
            event_type,
            source,
            event_version,
            subject_id,
            url,
            toString(occurred_at) AS occurred_at,
            toString(activity_date) AS activity_date,
            timezone
          FROM activity_events
          WHERE event_id = {eventId: UUID}
        `,
        format: 'JSONEachRow',
        query_params: { eventId }
      });
      const rows = await result.json<{
        event_id_string: string;
        tracking_id: string;
        event_type: string;
        source: string;
        event_version: number;
        subject_id: string;
        url: string;
        occurred_at: string;
        activity_date: string;
        timezone: string;
      }>();
      expect(rows).toHaveLength(1);
      expect(rows[0]).toMatchObject({
        event_id_string: eventId,
        tracking_id: user.activityTrackingId,
        event_type: 'challenge_submit',
        source: 'client',
        event_version: 1,
        subject_id: 'bd7123c8c441eddfaeb5bdef',
        url,
        timezone: 'America/New_York'
      });
      expect(rows[0]?.occurred_at).toMatch(/^\d{4}-\d{2}-\d{2}/);
      expect(rows[0]?.activity_date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    test('returns the URL from the latest resume event', async () => {
      const recentUrl = '/learn/javascript/basic-javascript/recent';

      await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(createBody({ url: recentUrl }));
      const session = await superRequest('/user/session-user', {
        method: 'GET',
        setCookies
      });
      const sessionBody = session.body as SessionUserBody;

      expect(session.status).toBe(200);
      expect(sessionBody.user[sessionBody.result]?.resumeUrl).toBe(recentUrl);
    });

    test('accepts meaningful events without resume data', async () => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send({ eventId: crypto.randomUUID(), eventType: 'test_run' });

      expect(response.status).toBe(200);
    });

    test('persists repeated meaningful events', async () => {
      const eventIds = [crypto.randomUUID(), crypto.randomUUID()];
      for (const eventId of eventIds) {
        const response = await superRequest('/activity', {
          method: 'POST',
          setCookies
        }).send({ eventId, eventType: 'test_run' });
        expect(response.status).toBe(200);
      }

      const result = await fastifyTestInstance.clickhouse.query({
        query: `
          SELECT toString(event_id) AS event_id
          FROM activity_events
          WHERE event_id IN ({firstEventId: UUID}, {secondEventId: UUID})
          ORDER BY event_id
        `,
        format: 'JSONEachRow',
        query_params: {
          firstEventId: eventIds[0],
          secondEventId: eventIds[1]
        }
      });
      const rows = await result.json<{ event_id: string }>();

      expect(rows.map(row => row.event_id).sort()).toEqual(eventIds.sort());
    });

    test('returns 503 when ClickHouse cannot persist the event', async () => {
      const insert = vi
        .spyOn(fastifyTestInstance.clickhouse, 'insert')
        .mockRejectedValueOnce(new Error('ClickHouse unavailable'));

      try {
        const response = await superRequest('/activity', {
          method: 'POST',
          setCookies
        }).send(createBody());

        expect(response.status).toBe(503);
      } finally {
        insert.mockRestore();
      }
    });

    test('returns the session without a resume URL when ClickHouse is unavailable', async () => {
      const query = vi
        .spyOn(fastifyTestInstance.clickhouse, 'query')
        .mockRejectedValueOnce(new Error('ClickHouse unavailable'));

      try {
        const response = await superRequest('/user/session-user', {
          method: 'GET',
          setCookies
        });
        const responseBody = response.body as SessionUserBody;
        const user = responseBody.user[responseBody.result];

        expect(response.status).toBe(200);
        expect(user).not.toHaveProperty('resumeUrl');
      } finally {
        query.mockRestore();
      }
    });
  });

  describe('POST /activity/streak', () => {
    test('returns 401 for unauthenticated requests', async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      const csrfCookies = res.get('Set-Cookie');

      const response = await superRequest('/activity/streak', {
        method: 'POST',
        setCookies: csrfCookies
      }).send({});

      expect(response.status).toBe(401);
    });

    test('does not qualify a streak before five minutes', async () => {
      const response = await superRequest('/activity/streak', {
        method: 'POST',
        setCookies
      }).send({});

      expect(response.status).toBe(409);
    });

    test('qualifies once a meaningful event is at least five minutes old', async () => {
      await insertActivityEvent(fastifyTestInstance, {
        userId: defaultUserId,
        eventType: 'challenge_work',
        source: 'client',
        timezone: 'UTC',
        occurredAt: new Date(Date.now() - 6 * 60 * 1000)
      });

      const response = await superRequest('/activity/streak', {
        method: 'POST',
        setCookies
      })
        .set('X-FCC-Timezone', 'UTC')
        .send({});

      expect(response.status).toBe(200);
      expect(response.body).toMatchObject({
        activityStreak: { current: 1, longest: 1, activeSession: true }
      });

      const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
        where: { id: defaultUserId }
      });
      const result = await fastifyTestInstance.clickhouse.query({
        query: `
          SELECT source, event_version
          FROM activity_events
          WHERE tracking_id = {trackingId: String}
            AND event_type = 'streak_qualified'
        `,
        format: 'JSONEachRow',
        query_params: { trackingId: user.activityTrackingId }
      });
      const rows = await result.json<{
        source: string;
        event_version: number;
      }>();

      expect(rows).toContainEqual({ source: 'server', event_version: 1 });
    });

    test('requires new meaningful activity for another qualification', async () => {
      const response = await superRequest('/activity/streak', {
        method: 'POST',
        setCookies
      }).send({});

      expect(response.status).toBe(409);
    });

    test('returns 503 when ClickHouse cannot verify the streak', async () => {
      const query = vi
        .spyOn(fastifyTestInstance.clickhouse, 'query')
        .mockRejectedValueOnce(new Error('ClickHouse unavailable'));

      try {
        const response = await superRequest('/activity/streak', {
          method: 'POST',
          setCookies
        }).send({});

        expect(response.status).toBe(503);
      } finally {
        query.mockRestore();
      }
    });
  });
});
