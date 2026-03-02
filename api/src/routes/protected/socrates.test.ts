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
      test('should return 403 when user does not have socrates enabled', async () => {
        const response =
          await superPut('/socrates/get-hint').send(validPayload);

        expect(response.status).toBe(403);
        expect(response.body).toStrictEqual({
          error: 'You do not have access to Socrates.',
          type: 'danger'
        });
        expect(mockedFetch).not.toHaveBeenCalled();
      });

      describe('with socrates enabled', () => {
        beforeEach(async () => {
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { socrates: true }
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
            hint: 'Try adding a closing tag.'
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
            error:
              'You have reached the hint limit. Please wait a moment before trying again.',
            type: 'info'
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
            type: 'info'
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
            error: 'Socrates was unable to generate a hint. Please try again.',
            type: 'info'
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
            error:
              'Socrates is temporarily unavailable. Please try again later.',
            type: 'danger'
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
        });

        test('should return 500 when fetch throws', async () => {
          mockedFetch.mockRejectedValueOnce(new Error('Network error'));

          const response =
            await superPut('/socrates/get-hint').send(validPayload);

          expect(response.status).toBe(500);
          expect(response.body).toStrictEqual({
            error:
              'Socrates is temporarily unavailable. Please try again later.',
            type: 'danger'
          });
        });
      });

      describe('validation', () => {
        beforeEach(async () => {
          await fastifyTestInstance.prisma.user.update({
            where: { id: defaultUserId },
            data: { socrates: true }
          });
        });

        test('should return 400 when userInput is empty', async () => {
          const response = await superPut('/socrates/get-hint').send({
            ...validPayload,
            userInput: ''
          });

          expect(response.status).toBe(400);
          expect(response.body).toStrictEqual({
            error: 'Please write some code before asking Socrates for a hint.',
            type: 'info'
          });
          expect(mockedFetch).not.toHaveBeenCalled();
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
