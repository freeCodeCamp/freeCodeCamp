import crypto from 'node:crypto';
import assert from 'node:assert/strict';

import { beforeAll, describe, expect, test, vi } from 'vitest';

import {
  defaultUserId,
  devLogin,
  getSetCookies,
  setupServer,
  superRequest
} from '../../../vitest.utils.js';

const integrationTestsEnabled =
  process.env.FCC_ENABLE_CLICKHOUSE_TESTS === 'true';

interface SessionUserBody {
  result: string;
  user: Record<string, { resumeUrl?: string }>;
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

describe('Activity routes without ClickHouse', () => {
  setupServer();

  let setCookies: string[];

  beforeAll(async () => {
    setCookies = await devLogin();
  });

  describe('POST /activity', () => {
    test('returns 401 for unauthenticated requests', async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      const csrfCookies = getSetCookies(res);

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

    test('returns 503 without creating a tracking ID when tracking is disabled', async () => {
      await fastifyTestInstance.prisma.user.update({
        where: { id: defaultUserId },
        data: { activityTrackingId: null }
      });
      const response = await superRequest('/activity', {
        method: 'POST',
        setCookies
      }).send(createBody());

      expect(response.status).toBe(503);
      const user = await fastifyTestInstance.prisma.user.findUniqueOrThrow({
        where: { id: defaultUserId }
      });
      expect(user.activityTrackingId).toBeNull();
    });

    test('returns the session without a resume URL when tracking is disabled', async () => {
      await fastifyTestInstance.prisma.user.update({
        where: { id: defaultUserId },
        data: { activityTrackingId: 'existing-tracking-id' }
      });
      const response = await superRequest('/user/session-user', {
        method: 'GET',
        setCookies
      });
      const body = response.body as SessionUserBody;

      expect(response.status).toBe(200);
      expect(body.user[body.result]).not.toHaveProperty('resumeUrl');
      expect(fastifyTestInstance.hasDecorator('clickhouse')).toBe(false);
    });
  });
});

describe.skipIf(!integrationTestsEnabled)(
  'Activity routes with ClickHouse',
  () => {
    setupServer({ clickhouse: true });

    let setCookies: string[];

    beforeAll(async () => {
      setCookies = await devLogin();
    });

    describe('POST /activity', () => {
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
          .send(createBody({ eventId, url }));

        expect(response.status).toBe(200);

        const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
          where: { id: defaultUserId }
        });
        expect(user.activityTrackingId).toMatch(/^[0-9A-Za-z]{21}$/);

        const client = fastifyTestInstance.clickhouse;
        assert.ok(client);
        const result = await client.query({
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
          FROM activity_events FINAL
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

      test('selects the latest resume event after deduplicating corrected records', async () => {
        const client = fastifyTestInstance.clickhouse;
        assert.ok(client);
        const user = await fastifyTestInstance.prisma.user.findUniqueOrThrow({
          where: { id: defaultUserId }
        });
        const first = {
          event_id: crypto.randomUUID(),
          tracking_id: user.activityTrackingId,
          event_type: 'challenge_submit',
          url: '/learn/obsolete',
          occurred_at: '2030-02-01 00:00:00.000',
          activity_date: '2030-02-01',
          timezone: 'UTC',
          ingested_at: '2030-02-01 00:00:00.000'
        };
        const latestUrl = '/learn/latest-valid';
        await client.command({ query: 'SYSTEM STOP MERGES activity_events' });
        try {
          for (const row of [
            first,
            {
              ...first,
              url: '/learn/corrected',
              occurred_at: '2030-01-01 00:00:00.000',
              activity_date: '2030-01-01',
              ingested_at: '2030-02-02 00:00:00.000'
            },
            {
              ...first,
              event_id: crypto.randomUUID(),
              url: latestUrl,
              occurred_at: '2030-01-15 00:00:00.000',
              activity_date: '2030-01-15'
            }
          ]) {
            await client.insert({
              table: 'activity_events',
              format: 'JSONEachRow',
              values: [row]
            });
          }
          const response = await superRequest('/user/session-user', {
            method: 'GET',
            setCookies
          });
          const body = response.body as SessionUserBody;
          expect(response.status).toBe(200);
          expect(body.user[body.result]?.resumeUrl).toBe(latestUrl);
        } finally {
          await client.command({
            query: 'SYSTEM START MERGES activity_events'
          });
        }
      });

      test('returns 503 when ClickHouse cannot persist the event', async () => {
        const client = fastifyTestInstance.clickhouse;
        assert.ok(client);
        const insert = vi
          .spyOn(client, 'insert')
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
        const client = fastifyTestInstance.clickhouse;
        assert.ok(client);
        const query = vi
          .spyOn(client, 'query')
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
  }
);
