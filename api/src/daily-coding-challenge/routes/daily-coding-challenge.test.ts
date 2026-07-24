import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { addDays } from 'date-fns';

import { setupServer, superRequest } from '../../../vitest.utils.js';

function dateToDateParam(date: Date): string {
  return date.toISOString().split('T')[0] as string;
}

const todayUsCentral = new Date(Date.UTC(2025, 9, 2, 5)); // 2025-10-02 00:00:00 in US Central
const todayUtcMidnight = new Date(Date.UTC(2025, 9, 2, 0, 0, 0));

const todayDateParam = dateToDateParam(todayUtcMidnight);

const yesterdayUtcMidnight = addDays(todayUtcMidnight, -1);

const twoDaysAgoUtcMidnight = addDays(todayUtcMidnight, -2);
const twoDaysAgoDateParam = dateToDateParam(twoDaysAgoUtcMidnight);

const tomorrowUtcMidnight = addDays(todayUtcMidnight, 1);
const tomorrowDateParam = dateToDateParam(tomorrowUtcMidnight);

const yesterdaysChallenge = {
  id: '111111111111111111111111',
  challengeNumber: 1,
  date: yesterdayUtcMidnight,
  title: "Yesterday's Challenge",
  description: "Yesterday's Description",
  javascript: {
    tests: [{ text: 'JS Test Yesterday', testString: 'jsTestYesterday()' }],
    challengeFiles: [{ contents: 'JS Files Yesterday', fileKey: 'scriptjs' }]
  },
  python: {
    tests: [{ text: 'Py Test Yesterday', testString: 'py_test_yesterday()' }],
    challengeFiles: [{ contents: 'Py Files Yesterday', fileKey: 'mainpy' }]
  }
};

const todaysChallenge = {
  id: '222222222222222222222222',
  challengeNumber: 2,
  date: todayUtcMidnight,
  title: "Today's Challenge",
  description: "Today's Description",
  javascript: {
    tests: [{ text: 'JS Test Today', testString: 'jsTestToday()' }],
    challengeFiles: [{ contents: 'JS Files Today', fileKey: 'scriptjs' }]
  },
  python: {
    tests: [{ text: 'Py Test Today', testString: 'py_test_today()' }],
    challengeFiles: [{ contents: 'Py Files Today', fileKey: 'mainpy' }]
  }
};

const tomorrowsChallenge = {
  id: '333333333333333333333333',
  challengeNumber: 3,
  date: tomorrowUtcMidnight,
  title: "Tomorrow's Challenge",
  description: "Tomorrow's Description",
  javascript: {
    tests: [{ text: 'JS Test Tomorrow', testString: 'jsTestTomorrow()' }],
    challengeFiles: [{ contents: 'JS Files Tomorrow', fileKey: 'scriptjs' }]
  },
  python: {
    tests: [{ text: 'Py Test Tomorrow', testString: 'py_test_tomorrow()' }],
    challengeFiles: [{ contents: 'Py Files Tomorrow', fileKey: 'mainpy' }]
  }
};

const mockChallenges = [
  tomorrowsChallenge,
  todaysChallenge,
  yesterdaysChallenge
];

describe('/daily-coding-challenge', () => {
  setupServer();
  // This has to happen after setupServer since it needs real timers.
  beforeEach(() => {
    vi.useFakeTimers({ now: todayUsCentral });
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  describe('GET /daily-coding-challenge/date/:date', () => {
    beforeEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: mockChallenges
      });
    });

    afterEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();
    });

    it('should return 400 for an invalid date format', async () => {
      const invalidFormats = [
        'invalid-format',
        '2025-07',
        '07-18-2025',
        '25-07-18',
        '2025-7-18',
        '2025-07-8'
      ];

      for (const invalidFormat of invalidFormats) {
        const res = await superRequest(
          `/daily-coding-challenge/date/${invalidFormat}`,
          {
            method: 'GET'
          }
        ).send({});

        expect(res.status).toBe(400);
        expect(res.body).toEqual({
          type: 'error',
          message: 'Invalid date format. Please use YYYY-MM-DD.'
        });
      }
    });

    it('should return 404 for a date without a challenge', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest(
        `/daily-coding-challenge/date/${twoDaysAgoDateParam}`,
        {
          method: 'GET'
        }
      ).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'Challenge not found.'
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_not_found', 1, {
        attributes: { route: '/daily-coding-challenge/date/:date' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return a challenge for a valid date', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest(
        `/daily-coding-challenge/date/${todayDateParam}`,
        {
          method: 'GET'
        }
      ).send({});

      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        ...todaysChallenge,
        date: todaysChallenge.date.toISOString()
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_viewed', 1, {
        attributes: { route: '/daily-coding-challenge/date/:date' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should not return a challenge for a future date relative to US Central', async () => {
      const res = await superRequest(
        `/daily-coding-challenge/date/${tomorrowDateParam}`,
        {
          method: 'GET'
        }
      ).send({});
      expect(res.body).toEqual({
        type: 'error',
        message: 'Challenge not found.'
      });
    });
  });

  describe('GET /daily-coding-challenge/day/:day', () => {
    beforeEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: mockChallenges
      });
    });

    afterEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();
    });

    it('should return 400 for an invalid day format', async () => {
      const invalidFormats = [
        'invalid-format',
        '2025-10-02',
        '010-02',
        '2025-10',
        '10-2',
        '1-02',
        '13-45',
        '04-31',
        '00-15'
      ];

      for (const invalidFormat of invalidFormats) {
        const res = await superRequest(
          `/daily-coding-challenge/day/${invalidFormat}`,
          {
            method: 'GET'
          }
        ).send({});

        expect(res.status).toBe(400);
        expect(res.body).toEqual({
          type: 'error',
          message: 'Invalid date format. Please use MM-DD.'
        });
      }
    });

    it('should return 404 for a day without a challenge', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/day/09-30', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'Challenge not found.'
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_not_found', 1, {
        attributes: { route: '/daily-coding-challenge/day/:day' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return a challenge for a valid day request', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/day/10-02', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        ...todaysChallenge,
        date: todaysChallenge.date.toISOString()
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_viewed', 1, {
        attributes: { route: '/daily-coding-challenge/day/:day' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it("should not return a day's challenge if it hasn't been released even once yet (temporary, until the original run finishes on 2026-08-10)", async () => {
      const res = await superRequest('/daily-coding-challenge/day/10-03', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'Challenge not found.'
      });
    });

    it('should return a day once real time has passed the entire original run, even for days that were never released relative to the mocked "today" above', async () => {
      vi.setSystemTime(addDays(todayUsCentral, 365));

      const res = await superRequest('/daily-coding-challenge/day/10-03', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        ...tomorrowsChallenge,
        date: tomorrowsChallenge.date.toISOString()
      });
    });

    it('should map a Feb 29 day request to the Feb 28 challenge', async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();

      const feb28UtcMidnight = new Date(Date.UTC(2026, 1, 28));
      const feb28Challenge = {
        ...todaysChallenge,
        date: feb28UtcMidnight
      };
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: [feb28Challenge]
      });

      vi.setSystemTime(new Date(Date.UTC(2028, 1, 29, 6)));

      const res = await superRequest('/daily-coding-challenge/day/02-29', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        ...feb28Challenge,
        date: feb28UtcMidnight.toISOString()
      });
    });
  });

  describe('GET /daily-coding-challenge/today', () => {
    beforeEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: mockChallenges
      });
    });

    afterEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();
    });

    it("should return today's challenge", async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/today', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        ...todaysChallenge,
        date: todaysChallenge.date.toISOString()
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_viewed', 1, {
        attributes: { route: '/daily-coding-challenge/today' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return 404 when no challenge exists for today', async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();

      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/today', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'Challenge not found.'
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_not_found', 1, {
        attributes: { route: '/daily-coding-challenge/today' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it("should loop back to last year's challenge on the same month/day, returning the source date rather than a real requested year", async () => {
      vi.setSystemTime(addDays(todayUsCentral, 365));

      const res = await superRequest('/daily-coding-challenge/today', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(res.body).toMatchObject({
        ...todaysChallenge,
        date: todaysChallenge.date.toISOString()
      });
    });
  });

  describe('GET /daily-coding-challenge/month/:month', () => {
    beforeEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: mockChallenges
      });
    });

    afterEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();
    });

    it('should return 400 for invalid month format', async () => {
      const invalidFormats = ['invalid-month', '2025-13', '2025-1', '25-07'];

      for (const invalidFormat of invalidFormats) {
        const res = await superRequest(
          `/daily-coding-challenge/month/${invalidFormat}`,
          {
            method: 'GET'
          }
        ).send({});

        expect(res.status).toBe(400);
        expect(res.body).toEqual({
          type: 'error',
          message: 'Invalid date format. Please use YYYY-MM.'
        });
      }
    });

    it('should return two challenges on the second day of the month', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest(`/daily-coding-challenge/month/2025-10`, {
        method: 'GET'
      }).send({});

      // Should include yesterday's and today's challenges, but not tomorrow's
      const expectedResponse = [
        {
          id: todaysChallenge.id,
          challengeNumber: todaysChallenge.challengeNumber,
          date: todaysChallenge.date.toISOString(),
          title: todaysChallenge.title
        },
        {
          id: yesterdaysChallenge.id,
          challengeNumber: yesterdaysChallenge.challengeNumber,
          date: yesterdaysChallenge.date.toISOString(),
          title: yesterdaysChallenge.title
        }
      ];

      expect(res.body).toEqual(expectedResponse);
      expect(res.status).toBe(200);
      expect(count).toHaveBeenCalledWith('dcc.challenge_viewed', 1, {
        attributes: { route: '/daily-coding-challenge/month/:month' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return one challenge on the first day of the month', async () => {
      vi.setSystemTime(new Date(Date.UTC(2025, 9, 1, 5))); // 2025-10-01 00:00:00 in US Central

      const res = await superRequest(`/daily-coding-challenge/month/2025-10`, {
        method: 'GET'
      }).send({});

      // Should include yesterday's challenges
      const expectedResponse = [
        {
          id: yesterdaysChallenge.id,
          challengeNumber: yesterdaysChallenge.challengeNumber,
          date: yesterdaysChallenge.date.toISOString(),
          title: yesterdaysChallenge.title
        }
      ];

      expect(res.body).toEqual(expectedResponse);
      expect(res.status).toBe(200);
    });

    it('should return 404 when no challenges exist for the given month', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/month/2024-01', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'No challenges found.'
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_not_found', 1, {
        attributes: { route: '/daily-coding-challenge/month/:month' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });
  });

  describe('GET /daily-coding-challenge/all', () => {
    beforeEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: mockChallenges
      });
    });

    afterEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();
    });

    it('should return { _id, date, challengeNumber, title } for all challenges up to today US Central', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/all', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);

      // Should include yesterday's and today's challenges, but not tomorrow's
      const expectedResponse = [
        {
          id: todaysChallenge.id,
          challengeNumber: todaysChallenge.challengeNumber,
          date: todaysChallenge.date.toISOString(),
          title: todaysChallenge.title
        },
        {
          id: yesterdaysChallenge.id,
          challengeNumber: yesterdaysChallenge.challengeNumber,
          date: yesterdaysChallenge.date.toISOString(),
          title: yesterdaysChallenge.title
        }
      ];

      expect(res.body).toHaveLength(2);
      expect(res.body).toEqual(expectedResponse);
      expect(count).toHaveBeenCalledWith('dcc.challenge_viewed', 1, {
        attributes: { route: '/daily-coding-challenge/all' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return 404 when no challenges exist', async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();

      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/all', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'No challenges found.'
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_not_found', 1, {
        attributes: { route: '/daily-coding-challenge/all' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should include every challenge once real time has passed all of their release dates', async () => {
      vi.setSystemTime(addDays(todayUsCentral, 365));

      const res = await superRequest('/daily-coding-challenge/all', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);

      const expectedResponse = [
        {
          id: tomorrowsChallenge.id,
          challengeNumber: tomorrowsChallenge.challengeNumber,
          date: tomorrowsChallenge.date.toISOString(),
          title: tomorrowsChallenge.title
        },
        {
          id: todaysChallenge.id,
          challengeNumber: todaysChallenge.challengeNumber,
          date: todaysChallenge.date.toISOString(),
          title: todaysChallenge.title
        },
        {
          id: yesterdaysChallenge.id,
          challengeNumber: yesterdaysChallenge.challengeNumber,
          date: yesterdaysChallenge.date.toISOString(),
          title: yesterdaysChallenge.title
        }
      ];

      expect(res.body).toHaveLength(3);
      expect(res.body).toEqual(expectedResponse);
    });
  });

  describe('GET /daily-coding-challenge/newest', () => {
    beforeEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.createMany({
        data: [yesterdaysChallenge, todaysChallenge, tomorrowsChallenge]
      });
    });

    afterEach(async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();
    });

    it('should return { date } of the newest challenge in the database', async () => {
      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/newest', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(200);
      expect(res.body).toEqual({
        date: tomorrowsChallenge.date.toISOString()
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_viewed', 1, {
        attributes: { route: '/daily-coding-challenge/newest' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('should return 404 when no challenges exist', async () => {
      await fastifyTestInstance.prisma.dailyCodingChallenges.deleteMany();

      const count = vi.fn();
      const originalSentry = fastifyTestInstance.Sentry;
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        metrics: { ...originalSentry.metrics, count }
      };

      const res = await superRequest('/daily-coding-challenge/newest', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(404);
      expect(res.body).toEqual({
        type: 'error',
        message: 'No challenges found.'
      });
      expect(count).toHaveBeenCalledWith('dcc.challenge_not_found', 1, {
        attributes: { route: '/daily-coding-challenge/newest' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });
  });

  describe('Sentry Issue reporting', () => {
    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('captures unexpected errors when getting a challenge by date', async () => {
      const originalSentry = fastifyTestInstance.Sentry;
      const captureException = vi.fn();
      const count = vi.fn();
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };
      vi.spyOn(
        fastifyTestInstance.prisma.dailyCodingChallenges,
        'findFirst'
      ).mockRejectedValueOnce(new Error('DB error'));

      const res = await superRequest(
        `/daily-coding-challenge/date/${todayDateParam}`,
        { method: 'GET' }
      ).send({});

      expect(res.status).toBe(500);
      expect(captureException).toHaveBeenCalledOnce();
      expect(count).toHaveBeenCalledWith('dcc.request_failed', 1, {
        attributes: { route: '/daily-coding-challenge/date/:date' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it("captures unexpected errors when getting today's challenge", async () => {
      const originalSentry = fastifyTestInstance.Sentry;
      const captureException = vi.fn();
      const count = vi.fn();
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };
      vi.spyOn(
        fastifyTestInstance.prisma.dailyCodingChallenges,
        'findFirst'
      ).mockRejectedValueOnce(new Error('DB error'));

      const res = await superRequest('/daily-coding-challenge/today', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(500);
      expect(captureException).toHaveBeenCalledOnce();
      expect(count).toHaveBeenCalledWith('dcc.request_failed', 1, {
        attributes: { route: '/daily-coding-challenge/today' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('captures unexpected errors when getting a month of challenges', async () => {
      const originalSentry = fastifyTestInstance.Sentry;
      const captureException = vi.fn();
      const count = vi.fn();
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };
      vi.spyOn(
        fastifyTestInstance.prisma.dailyCodingChallenges,
        'findMany'
      ).mockRejectedValueOnce(new Error('DB error'));

      const res = await superRequest('/daily-coding-challenge/month/2025-10', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(500);
      expect(captureException).toHaveBeenCalledOnce();
      expect(count).toHaveBeenCalledWith('dcc.request_failed', 1, {
        attributes: { route: '/daily-coding-challenge/month/:month' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('captures unexpected errors when getting all challenges', async () => {
      const originalSentry = fastifyTestInstance.Sentry;
      const captureException = vi.fn();
      const count = vi.fn();
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };
      vi.spyOn(
        fastifyTestInstance.prisma.dailyCodingChallenges,
        'findMany'
      ).mockRejectedValueOnce(new Error('DB error'));

      const res = await superRequest('/daily-coding-challenge/all', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(500);
      expect(captureException).toHaveBeenCalledOnce();
      expect(count).toHaveBeenCalledWith('dcc.request_failed', 1, {
        attributes: { route: '/daily-coding-challenge/all' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });

    it('captures unexpected errors when getting the newest challenge', async () => {
      const originalSentry = fastifyTestInstance.Sentry;
      const captureException = vi.fn();
      const count = vi.fn();
      fastifyTestInstance.Sentry = {
        ...originalSentry,
        captureException,
        metrics: { ...originalSentry.metrics, count }
      };
      vi.spyOn(
        fastifyTestInstance.prisma.dailyCodingChallenges,
        'findFirst'
      ).mockRejectedValueOnce(new Error('DB error'));

      const res = await superRequest('/daily-coding-challenge/newest', {
        method: 'GET'
      }).send({});

      expect(res.status).toBe(500);
      expect(captureException).toHaveBeenCalledOnce();
      expect(count).toHaveBeenCalledWith('dcc.request_failed', 1, {
        attributes: { route: '/daily-coding-challenge/newest' }
      });

      fastifyTestInstance.Sentry = originalSentry;
    });
  });
});
