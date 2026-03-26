/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  describe,
  test,
  expect,
  beforeAll,
  beforeEach,
  afterEach,
  vi
} from 'vitest';
import {
  devLogin,
  setupServer,
  createSuperRequest,
  defaultUserId
} from '../../../vitest.utils.js';

const mockedFetch = vi.fn();
vi.spyOn(globalThis, 'fetch').mockImplementation(mockedFetch);

const validPayload = {
  description: 'Make the text say hello',
  userInput: 'Hello world',
  seed: '<h1>Hello</h1>',
  hints: [{ text: 'Check your spelling', failed: true }]
};

describe('socratesRoutes', () => {
  setupServer();

  describe('Authenticated user', () => {
    let superPut: ReturnType<typeof createSuperRequest>;

    beforeAll(async () => {
      const setCookies = await devLogin();
      superPut = createSuperRequest({ method: 'PUT', setCookies });
    });

    afterEach(() => {
      vi.clearAllMocks();
    });

    describe('PUT /socrates/get-hint', () => {
      test('should return 403 when user has socrates explicitly disabled', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { socrates: false }
        });

        const response =
          await superPut('/socrates/get-hint').send(validPayload);

        expect(response.status).toBe(403);
        expect(response.body).toStrictEqual({
          error: 'socrates-no-access',
          type: 'danger',
          attempts: 0,
          limit: 0
        });
        expect(mockedFetch).not.toHaveBeenCalled();
      });

      test('should allow access when socrates is null (default)', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { socrates: null }
        });

        mockedFetch.mockResolvedValueOnce({
          ok: true,
          status: 200,
          text: () =>
            Promise.resolve(
              JSON.stringify({ hint: 'Try adding a closing tag.' })
            )
        });

        const response =
          await superPut('/socrates/get-hint').send(validPayload);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('hint');
      });

      describe('with socrates enabled', () => {
        beforeEach(async () => {
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { socrates: true }
          });
          await fastifyTestInstance.prisma.socratesUsage.deleteMany({
            where: { userId: defaultUserId }
          });
        });

        test('should return hint on successful Socrates API response', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () =>
              Promise.resolve(
                JSON.stringify({ hint: 'Try adding a closing tag.' })
              )
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(200);
          expect(response.body).toStrictEqual({
            hint: 'Try adding a closing tag.',
            attempts: 1,
            limit: 3
          });
        });

        test('should pass session userId, not client-supplied userId', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          await superPut('/socrates/get-hint').send({
            ...validPayload
          });

          const fetchCall = mockedFetch.mock.calls[0]!;
          const body = JSON.parse(fetchCall[1].body as string) as {
            userId: string;
          };
          expect(body.userId).toBe(defaultUserId);
        });

        test('should use session userId even when userId is sent in body', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          await superPut('/socrates/get-hint').send({
            ...validPayload,
            userId: 'attacker-id'
          });

          const fetchCall = mockedFetch.mock.calls[0]!;
          const body = JSON.parse(fetchCall[1].body as string) as {
            userId: string;
          };
          expect(body.userId).toBe(defaultUserId);
          expect(body.userId).not.toBe('attacker-id');
        });

        test('should return 429 when Socrates API rate limits', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: false,
            status: 429,
            text: () => Promise.resolve('')
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(429);
          expect(response.body).toStrictEqual({
            error: 'socrates-rate-limit',
            type: 'info',
            attempts: 0,
            limit: 3
          });
        });

        test('should forward upstream error message on 400', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: false,
            status: 400,
            text: () =>
              Promise.resolve(
                JSON.stringify({ error: 'Input too short for analysis.' })
              )
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(400);
          expect(response.body).toStrictEqual({
            error: 'Input too short for analysis.',
            type: 'info',
            attempts: 0,
            limit: 3
          });
        });

        test('should use fallback message on 400 with no upstream error', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: false,
            status: 400,
            text: () => Promise.resolve('')
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(400);
          expect(response.body).toStrictEqual({
            error: 'socrates-unable-to-generate',
            type: 'info',
            attempts: 0,
            limit: 3
          });
        });

        test('should return 500 on other Socrates API errors', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: false,
            status: 503,
            text: () => Promise.resolve('Service Unavailable')
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(500);
          expect(response.body).toStrictEqual({
            error: 'socrates-unavailable',
            type: 'danger',
            attempts: 0,
            limit: 3
          });
        });

        test('should return 500 when Socrates API returns invalid JSON', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () => Promise.resolve('not json')
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(500);
          expect(response.body.type).toBe('danger');
          expect(response.body.attempts).toBe(0);
          expect(response.body.limit).toBe(3);
        });

        test('should return 500 when Socrates API returns no hint', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ foo: 'bar' }))
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(500);
          expect(response.body.type).toBe('danger');
          expect(response.body.attempts).toBe(0);
          expect(response.body.limit).toBe(3);
        });

        test('should return 500 when fetch throws', async () => {
          mockedFetch.mockRejectedValueOnce(new Error('Network error'));

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(500);
          expect(response.body).toStrictEqual({
            error: 'socrates-unavailable',
            type: 'danger',
            attempts: 0,
            limit: 3
          });
        });
      });

      describe('daily usage entitlements', () => {
        beforeEach(async () => {
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { socrates: true, isDonating: false }
          });
          await fastifyTestInstance.prisma.socratesUsage.deleteMany({
            where: { userId: defaultUserId }
          });
        });

        afterEach(() => {
          vi.clearAllMocks();
        });

        test('should return attempts=1 and limit=3 on first hint for non-donor', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(200);
          expect(response.body.attempts).toBe(1);
          expect(response.body.limit).toBe(3);
        });

        test('should increment attempts on each request', async () => {
          mockedFetch.mockResolvedValue({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          await superPut('/socrates/get-hint').send(validPayload);
          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(200);
          expect(response.body.attempts).toBe(2);
        });

        test('should return 429 when non-donor exceeds 3 hints/day', async () => {
          mockedFetch.mockResolvedValue({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          for (let i = 0; i < 3; i++) {
            await superPut('/socrates/get-hint').send(validPayload);
          }

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(429);
          expect(response.body.attempts).toBe(3);
          expect(response.body.limit).toBe(3);
          expect(response.body.error).toBe('socrates-daily-limit');
          expect(mockedFetch).toHaveBeenCalledTimes(3);
        });

        test('should not inflate count beyond limit on repeated 429s', async () => {
          mockedFetch.mockResolvedValue({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          // Exhaust the non-donor limit
          for (let i = 0; i < 3; i++) {
            await superPut('/socrates/get-hint').send(validPayload);
          }

          // Make extra requests that should all be 429
          for (let i = 0; i < 5; i++) {
            const res = await superPut('/socrates/get-hint').send(validPayload);
            expect(res.status).toBe(429);
          }

          // Upgrade to donor (limit: 10) and verify access is restored
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { isDonating: true }
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(200);
          expect(response.body.attempts).toBe(4);
          expect(response.body.limit).toBe(10);
        });

        test('should allow 10 hints/day for donors', async () => {
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { isDonating: true }
          });

          mockedFetch.mockResolvedValue({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          let response =
            await superPut('/socrates/get-hint').send(validPayload);
          expect(response.status).toBe(200);

          for (let i = 1; i < 10; i++) {
            response = await superPut('/socrates/get-hint').send(validPayload);
            expect(response.status).toBe(200);
          }

          expect(response.body.attempts).toBe(10);
          expect(response.body.limit).toBe(10);

          response = await superPut('/socrates/get-hint').send(validPayload);
          expect(response.status).toBe(429);
        });

        test('should not consume an attempt on upstream API error', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: false,
            status: 500,
            text: () => Promise.resolve('Server Error')
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(500);
          expect(response.body.attempts).toBe(0);
          expect(response.body.limit).toBe(3);
        });

        test('should not count yesterday usage against today limit', async () => {
          const yesterday = new Date();
          yesterday.setUTCDate(yesterday.getUTCDate() - 1);
          const yesterdayUTC = new Date(
            Date.UTC(
              yesterday.getUTCFullYear(),
              yesterday.getUTCMonth(),
              yesterday.getUTCDate()
            )
          );

          await fastifyTestInstance.prisma.socratesUsage.create({
            data: { userId: defaultUserId, date: yesterdayUTC, count: 3 }
          });

          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () => Promise.resolve(JSON.stringify({ hint: 'A hint.' }))
          });

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(200);
          expect(response.body.attempts).toBe(1);
        });
      });

      describe('validation', () => {
        beforeEach(async () => {
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { socrates: true }
          });
        });

        test('should return 400 when userInput is empty string', async () => {
          const response = await superPut('/socrates/get-hint').send({
            ...validPayload,
            userInput: ''
          });

          expect(response.status).toBe(400);
          expect(response.body).toStrictEqual({
            error: 'socrates-invalid-request',
            type: 'info',
            attempts: 0,
            limit: 0
          });
          expect(mockedFetch).not.toHaveBeenCalled();
        });

        test('should accept request without userInput', async () => {
          mockedFetch.mockResolvedValueOnce({
            ok: true,
            status: 200,
            text: () =>
              Promise.resolve(
                JSON.stringify({ hint: 'Try adding a closing tag.' })
              )
          });

          const { userInput: _unused, ...payloadWithoutUserInput } =
            validPayload;
          const response = await superPut('/socrates/get-hint').send(
            payloadWithoutUserInput
          );

          expect(response.status).toBe(200);
          expect(response.body).toHaveProperty('hint');
          expect(mockedFetch).toHaveBeenCalledTimes(1);
        });

        test('should return 400 when seed is empty', async () => {
          const response = await superPut('/socrates/get-hint').send({
            ...validPayload,
            seed: ''
          });

          expect(response.status).toBe(400);
          expect(mockedFetch).not.toHaveBeenCalled();
        });

        test('should return 400 when description is empty', async () => {
          const response = await superPut('/socrates/get-hint').send({
            ...validPayload,
            description: ''
          });

          expect(response.status).toBe(400);
          expect(mockedFetch).not.toHaveBeenCalled();
        });

        test('should return 400 when required fields are missing', async () => {
          const response = await superPut('/socrates/get-hint').send({});

          expect(response.status).toBe(400);
          expect(mockedFetch).not.toHaveBeenCalled();
        });
      });
    });
  });

  describe('Unauthenticated user', () => {
    test('should not return a hint for unauthenticated requests', async () => {
      const response = await createSuperRequest({ method: 'PUT' })(
        '/socrates/get-hint'
      ).send(validPayload);

      // Unauthenticated requests fail before reaching the route handler
      expect(response.status).not.toBe(200);
      expect(response.body).not.toHaveProperty('hint');
    });
  });
});
