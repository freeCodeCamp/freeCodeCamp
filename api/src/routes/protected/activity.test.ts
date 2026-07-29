import crypto from 'node:crypto';

import { beforeAll, describe, expect, test, vi } from 'vitest';

import {
  defaultUserId,
  devLogin,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

interface SessionUserBody {
  result: string;
  user: Record<string, { resumeUrl?: string }>;
}

const createBody = (
  overrides: Partial<{
    eventId: string;
    eventType: string;
    challengeId: string;
    url: string;
    occurredAt: string;
    timezone: string;
  }> = {}
) => ({
  eventId: crypto.randomUUID(),
  eventType: 'challenge_submit' as const,
  challengeId: 'bd7123c8c441eddfaeb5bdef',
  url: '/learn/javascript/basic-javascript/step-1',
  occurredAt: new Date().toISOString(),
  timezone: 'UTC',
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
      ['a test-run event', { eventType: 'test_run' }],
      ['an invalid timezone', { timezone: 'Not/A_Timezone' }],
      [
        'a stale timestamp',
        {
          occurredAt: new Date(
            Date.now() - 8 * 24 * 60 * 60 * 1000
          ).toISOString()
        }
      ],
      [
        'a future timestamp',
        { occurredAt: new Date(Date.now() + 10 * 60 * 1000).toISOString() }
      ]
    ])('returns 400 for %s', async (_case, overrides) => {
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(createBody(overrides));

      expect(response.status).toBe(400);
    });

    test('initializes a legacy user and persists the complete event', async () => {
      const eventId = crypto.randomUUID();
      const occurredAt = new Date();
      occurredAt.setUTCDate(occurredAt.getUTCDate() - 1);
      occurredAt.setUTCHours(1, 0, 0, 0);
      const expectedActivityDate = new Date(occurredAt);
      expectedActivityDate.setUTCDate(expectedActivityDate.getUTCDate() - 1);
      const url = '/learn/javascript/basic-javascript/step-2';

      await fastifyTestInstance.prisma.user.update({
        where: { id: defaultUserId },
        data: { activityTrackingId: null }
      });

      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(
        createBody({
          eventId,
          eventType: 'challenge_submit',
          occurredAt: occurredAt.toISOString(),
          url,
          timezone: 'America/New_York'
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
            challenge_id,
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
      expect(await result.json()).toStrictEqual([
        {
          event_id_string: eventId,
          tracking_id: user.activityTrackingId,
          event_type: 'challenge_submit',
          challenge_id: 'bd7123c8c441eddfaeb5bdef',
          url,
          occurred_at: occurredAt
            .toISOString()
            .replace('T', ' ')
            .replace('Z', ''),
          activity_date: expectedActivityDate.toISOString().slice(0, 10),
          timezone: 'America/New_York'
        }
      ]);
    });

    test('returns the URL from the latest event, not the latest insert', async () => {
      const recent = new Date(Date.now() - 60_000);
      const older = new Date(Date.now() - 120_000);
      const recentUrl = '/learn/javascript/basic-javascript/recent';

      await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(
        createBody({
          occurredAt: recent.toISOString(),
          url: recentUrl
        })
      );
      await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(
        createBody({
          occurredAt: older.toISOString(),
          url: '/learn/javascript/basic-javascript/older'
        })
      );
      const session = await superRequest('/user/session-user', {
        method: 'GET',
        setCookies
      });
      const sessionBody = session.body as SessionUserBody;

      expect(session.status).toBe(200);
      expect(sessionBody.user[sessionBody.result]?.resumeUrl).toBe(recentUrl);
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
});
