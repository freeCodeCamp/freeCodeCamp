import {
  devLogin,
  setupServer,
  superRequest,
  createSuperRequest
} from '../../../jest.utils';

describe('moduleRoutes', () => {
  setupServer();
  describe('Authenticated user', () => {
    let setCookies: string[];
    let superPost: ReturnType<typeof createSuperRequest>;

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
      superPost = createSuperRequest({ method: 'POST', setCookies });
    });

    describe('/module-completed', () => {
      describe('validation', () => {
        test('POST rejects requests without ids', async () => {
          const response = await superPost('/module-completed');

          expect(response.body).toStrictEqual({
            type: 'error',
            message: 'That does not appear to be a valid module submission.'
          });
          expect(response.statusCode).toBe(400);
        });
      });

      describe('handling', () => {
        beforeEach(async () => {
          const now = Date.now();

          await fastifyTestInstance.prisma.user.updateMany({
            where: { email: 'foo@bar.com' },
            data: {
              completedModules: [
                {
                  id: 'basic-html',
                  completedDate: now
                }
              ],
              progressTimestamps: [now]
            }
          });
        });

        test('POST handles new completed module', async () => {
          const res = await superPost('/module-completed').send({
            id: 'semantic-html'
          });

          const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
            where: { email: 'foo@bar.com' }
          });

          expect(user.progressTimestamps).toHaveLength(2);

          expect(user.completedModules).toMatchObject([
            {
              id: 'basic-html',
              completedDate: expect.any(Number)
            },
            {
              id: 'semantic-html',
              completedDate: expect.any(Number)
            }
          ]);

          expect(res.body).toStrictEqual({
            alreadyCompleted: false,
            points: 2,
            completedDate: expect.any(Number)
          });

          expect(res.statusCode).toBe(200);
        });

        test('POST handles already completed module', async () => {
          const res = await superPost('/module-completed').send({
            id: 'basic-html'
          });

          const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
            where: { email: 'foo@bar.com' }
          });

          expect(user.progressTimestamps).toHaveLength(1);

          expect(user.completedModules).toMatchObject([
            {
              id: 'basic-html',
              completedDate: expect.any(Number)
            }
          ]);

          expect(res.body).toStrictEqual({
            alreadyCompleted: true,
            points: 1,
            completedDate: expect.any(Number)
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

    const endpoints: { path: string; method: 'POST' | 'GET' }[] = [
      { path: '/module-completed', method: 'POST' }
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
