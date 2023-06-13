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

        expect(response.body).toStrictEqual(isValidChallengeCompletionErrorMsg);
        expect(response.statusCode).toBe(400);
      });

      it('POST rejects requests with invalid challengeTypes', async () => {
        const response = await superRequest('/project-completed', {
          method: 'POST',
          setCookies
        }).send({
          id: 'bd7123c8c441eddfaeb5bdef',
          challengeType: 'not-a-valid-challenge-type'
        });

        expect(response.body).toStrictEqual(isValidChallengeCompletionErrorMsg);
        expect(response.statusCode).toBe(400);
      });

      it('POST rejects requests without solutions', async () => {
        const response = await superRequest('/project-completed', {
          method: 'POST',
          setCookies
        }).send({
          id: 'bd7123c8c441eddfaeb5bdef',
          challengeType: 3
        });

        expect(response.body).toStrictEqual({
          type: 'error',
          message:
            'You have not provided the valid links for us to inspect your work.'
        });
        expect(response.statusCode).toBe(400);
      });

      it('POST rejects requests with solutions that are not urls', async () => {
        const response = await superRequest('/project-completed', {
          method: 'POST',
          setCookies
        }).send({
          id: 'bd7123c8c441eddfaeb5bdef',
          challengeType: 3,
          solution: 'not-a-valid-solution'
        });

        expect(response.body).toStrictEqual(isValidChallengeCompletionErrorMsg);
        expect(response.statusCode).toBe(400);
      });

      it('POST rejects codeAlly projects when the user has not completed the required challenges', async () => {
        const response = await superRequest('/project-completed', {
          method: 'POST',
          setCookies
        }).send({
          id: 'bd7123c8c441eddfaeb5bdef', // not a codeally challenge id, but does not matter
          challengeType: 13, // this does matter, however, since there's special logic for that challenge type
          solution: 'https://any.valid/url'
        });

        expect(response.body).toStrictEqual({
          type: 'error',
          message:
            'You have to complete the project before you can submit a URL.'
        });
      });

      // tests to add: successfully codeAlly project, successfully non-codeAlly
      // project, successfully non-project challenge, resubmission, submission
      // of savable challenges.
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
