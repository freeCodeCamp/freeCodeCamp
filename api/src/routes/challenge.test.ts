import { setupServer, superRequest } from '../../jest.utils';

const isValidChallengeCompletionErrorMsg = {
  type: 'error',
  message: 'That does not appear to be a valid challenge submission.'
};

describe('challengeRoutes', () => {
  setupServer();
  describe('Authenticated user', () => {
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      const res = await superRequest('/auth/dev-callback', { method: 'GET' });
      expect(res.status).toBe(200);
      setCookies = res.get('Set-Cookie');
    });

    describe('/project-completed', () => {
      it('POST rejects requests without valid ObjectIDs', async () => {
        const response = await superRequest('/project-completed', {
          method: 'POST',
          setCookies
        }).send({ id: 'not-a-valid-id' });

        expect(response?.body).toStrictEqual(
          isValidChallengeCompletionErrorMsg
        );
        expect(response?.statusCode).toBe(400);
      });
    });
  });
  describe('Unauthenticated user', () => {
    let setCookies: string[];

    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await superRequest('/', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });

    describe('/project-completed', () => {
      test('POST returns 401 status code with error message', async () => {
        const response = await superRequest('/project-completed', {
          method: 'POST',
          setCookies
        });

        expect(response?.statusCode).toBe(401);
      });
    });
  });
});
