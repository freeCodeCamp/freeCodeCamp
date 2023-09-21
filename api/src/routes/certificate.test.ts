import { devLogin, setupServer, superRequest } from '../../jest.utils';

describe('certificate routes', () => {
  setupServer();
  describe('Authenticated user', () => {
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      setCookies = await devLogin();
    });

    describe('PUT /certificate/verify', () => {
      test('should return 400 if no certSlug', async () => {
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        });
        // .send({ certSlug: undefined });
        // Add check for response
        expect(response.status).toBe(400);
      });
      test('should return 400 if certSlug is invalid', async () => {
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'non-existant'
        });
        expect(response.status).toBe(400);
      });
      test('should return 500 if user not found in db', async () => {
        // @ts-expect-error `null` is assignable to `null`, but don't tell TS that 🤫
        fastifyTestInstance.prisma.user.findUnique = () => null;
        const response = await superRequest('/certificate/verify', {
          method: 'PUT',
          setCookies
        }).send({
          certSlug: 'responsive-web-design'
        });

        expect(response.status).toBe(500);
      });
    });
  });
});
