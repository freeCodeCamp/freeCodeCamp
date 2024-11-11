import {
  devLogin,
  setupServer,
  superRequest,
  createSuperRequest
} from '../../../jest.utils';

const MOCK_DATE = new Date('2024-11-08').getTime();

describe('chapterRoutes', () => {
  setupServer();

  describe('Authenticated user', () => {
    let setCookies: string[];
    let superPost: ReturnType<typeof createSuperRequest>;

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
    });

    describe('/chapter-completed', () => {
      describe('validation', () => {
        test('POST rejects requests without ids', async () => {
          const response = await superPost('/chapter-completed');

          expect(response.body).toStrictEqual({
            type: 'error',
            message: 'That does not appear to be a valid chapter submission.'
          });
          expect(response.statusCode).toBe(400);
        });
      });

      describe('handling', () => {
        beforeAll(() => {
          jest.useFakeTimers({
            doNotFake: ['nextTick']
          });
          jest.setSystemTime(MOCK_DATE);
        });

        afterAll(() => {
          jest.useRealTimers();
        });

        beforeEach(async () => {
          await fastifyTestInstance.prisma.user.updateMany({
            where: { email: 'foo@bar.com' },
            data: {
              completedChapters: [
                {
                  id: 'html',
                  completedDate: MOCK_DATE
                }
              ],
              progressTimestamps: [MOCK_DATE]
            }
          });
        });

        test('POST handles newly completed chapter', async () => {
          const res = await superPost('/chapter-completed').send({
            id: 'css'
          });

          const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
            where: { email: 'foo@bar.com' }
          });

          expect(user.progressTimestamps).toHaveLength(2);

          expect(user.completedChapters).toMatchObject([
            {
              id: 'html',
              completedDate: MOCK_DATE
            },
            {
              id: 'css',
              completedDate: MOCK_DATE
            }
          ]);

          expect(res.body).toStrictEqual({
            alreadyCompleted: false,
            points: 2,
            completedDate: MOCK_DATE
          });

          expect(res.statusCode).toBe(200);
        });

        test('POST handles already completed chapter', async () => {
          const res = await superPost('/chapter-completed').send({
            id: 'html'
          });

          const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
            where: { email: 'foo@bar.com' }
          });

          expect(user.progressTimestamps).toHaveLength(1);

          expect(user.completedChapters).toMatchObject([
            {
              id: 'html',
              completedDate: MOCK_DATE
            }
          ]);

          expect(res.body).toStrictEqual({
            alreadyCompleted: true,
            points: 1,
            completedDate: MOCK_DATE
          });

          expect(res.statusCode).toBe(200);
        });
      });
    });
  });

  describe('Unauthenticated user', () => {
    let setCookies: string[];

    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });

    const endpoints: { path: string; method: 'POST' }[] = [
      { path: '/chapter-completed', method: 'POST' }
    ];

    endpoints.forEach(({ path, method }) => {
      test(`${method} ${path} returns 401 status code with error message`, async () => {
        const response = await superRequest(path, {
          method,
          setCookies
        });
        expect(response.statusCode).toBe(401);
      });
    });
  });
});
