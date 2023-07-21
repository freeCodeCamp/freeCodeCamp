/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { setupServer, superRequest } from '../../jest.utils';

const isValidChallengeCompletionErrorMsg = {
  type: 'error',
  message: 'That does not appear to be a valid challenge submission.'
};

// /project-completed
const id1 = 'bd7123c8c441eddfaeb5bdef';
const id2 = 'bd7123c8c441eddfaeb5bdec';

const codeallyProject = {
  id: id1,
  challengeType: 13,
  solution: 'https://any.valid/url'
};
const backendProject = {
  id: id2,
  challengeType: 4,
  solution: 'https://any.valid/url',
  githubLink: 'https://github.com/anything/valid/'
};
const partialCompletion = { id: id1, completedDate: 1 };

// /backend-challenge-completed
const backendChallengeId1 = '587d7fb1367417b2b2512bf4';
const backendChallengeId2 = '587d7fb2367417b2b2512bf8';

const backendChallengeBody1 = {
  id: backendChallengeId1
};
const backendChallengeBody2 = {
  id: backendChallengeId2
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
      describe('validation', () => {
        it('POST rejects requests without ids', async () => {
          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send({});

          expect(response.body).toStrictEqual(
            isValidChallengeCompletionErrorMsg
          );
          expect(response.statusCode).toBe(400);
        });

        it('POST rejects requests without valid ObjectIDs', async () => {
          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
            // This is a departure from api-server, which does not require a
            // solution to give this error. However, the validator will reject
            // based on the missing solution before it gets to the invalid id.
          }).send({ id: 'not-a-valid-id', solution: '' });

          expect(response.body).toStrictEqual(
            isValidChallengeCompletionErrorMsg
          );
          expect(response.statusCode).toBe(400);
        });

        it('POST rejects requests with invalid challengeTypes', async () => {
          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send({
            id: id1,
            challengeType: 'not-a-valid-challenge-type',
            // TODO(Post-MVP): drop these comments, since the api-server will not
            // exist.

            // a solution is required, because otherwise the request will be
            // rejected before it gets to the challengeType validation. NOTE: this
            // is a departure from the api-server, but only in the message sent.
            solution: ''
          });

          expect(response.body).toStrictEqual(
            isValidChallengeCompletionErrorMsg
          );
          expect(response.statusCode).toBe(400);
        });

        it('POST rejects requests without solutions', async () => {
          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send({
            id: id1,
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
            id: id1,
            challengeType: 3,
            solution: 'not-a-valid-solution'
          });

          expect(response.body).toStrictEqual(
            isValidChallengeCompletionErrorMsg
          );
          expect(response.statusCode).toBe(400);
        });

        it('POST rejects CodeRoad/CodeAlly projects when the user has not completed the required challenges', async () => {
          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send({
            id: id1, // not a codeally challenge id, but does not matter
            challengeType: 13, // this does matter, however, since there's special logic for that challenge type
            solution: 'https://any.valid/url'
          });

          expect(response.body).toStrictEqual({
            type: 'error',
            message:
              'You have to complete the project before you can submit a URL.'
          });
          // It's not really a bad request, since the client is sending a valid
          // body. It's just that the user is not allowed to do this - hence 403.
          expect(response.statusCode).toBe(403);
        });
      });

      describe('handling', () => {
        beforeEach(async () => {
          // setup: complete the challenges that codeally projects require
          await fastifyTestInstance.prisma.user.updateMany({
            where: { email: 'foo@bar.com' },
            data: {
              partiallyCompletedChallenges: [{ id: id1, completedDate: 1 }]
            }
          });
        });

        afterEach(async () => {
          await fastifyTestInstance.prisma.user.updateMany({
            where: { email: 'foo@bar.com' },
            data: {
              partiallyCompletedChallenges: [],
              completedChallenges: [],
              savedChallenges: [],
              progressTimestamps: []
            }
          });
        });

        it('POST accepts CodeRoad/CodeAlly projects when the user has completed the required challenges', async () => {
          const now = Date.now();
          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send(codeallyProject);

          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: 'foo@bar.com' }
          });

          expect(user).toMatchObject({
            partiallyCompletedChallenges: [],
            completedChallenges: [
              {
                ...codeallyProject,
                completedDate: expect.any(Number)
              }
            ]
          });

          const completedDate = user?.completedChallenges[0]?.completedDate;

          // TODO: use a custom matcher for this
          expect(completedDate).toBeGreaterThan(now);
          expect(completedDate).toBeLessThan(now + 1000);

          expect(response.body).toStrictEqual({
            alreadyCompleted: false,
            points: 1,
            completedDate
          });

          expect(response.statusCode).toBe(200);
        });

        it('POST accepts backend projects', async () => {
          const now = Date.now();

          const response = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send(backendProject);

          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: 'foo@bar.com' }
          });

          expect(user).toMatchObject({
            partiallyCompletedChallenges: [partialCompletion],
            completedChallenges: [
              {
                ...backendProject,
                completedDate: expect.any(Number)
              }
            ]
          });

          const completedDate = user?.completedChallenges[0]?.completedDate;

          // TODO: use a custom matcher for this
          expect(completedDate).toBeGreaterThan(now);
          expect(completedDate).toBeLessThan(now + 1000);

          expect(response.body).toStrictEqual({
            alreadyCompleted: false,
            points: 1,
            completedDate
          });

          expect(response.statusCode).toBe(200);
        });

        it('POST correctly handles multiple requests', async () => {
          const resOriginal = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send(codeallyProject);

          const resBackend = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send(backendProject);

          // sending backendProject again should update its solution, but not
          // progressTimestamps or its completedDate

          const resUpdate = await superRequest('/project-completed', {
            method: 'POST',
            setCookies
          }).send({ ...codeallyProject, solution: 'https://any.other/url' });

          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: 'foo@bar.com' }
          });

          const expectedProgressTimestamps = user?.completedChallenges.map(
            challenge => challenge.completedDate
          );

          expect(user).toMatchObject({
            completedChallenges: [
              {
                ...codeallyProject,
                solution: 'https://any.other/url',
                completedDate: resOriginal.body.completedDate
              },
              {
                ...backendProject,
                completedDate: resBackend.body.completedDate
              }
            ],
            progressTimestamps: expectedProgressTimestamps
          });

          expect(resUpdate.body).toStrictEqual({
            alreadyCompleted: true,
            points: 2,
            completedDate: expect.any(Number)
          });

          // It should return an updated completedDate
          expect(resUpdate.body.completedDate).not.toBe(
            resOriginal.body.completedDate
          );
          expect(resUpdate.statusCode).toBe(200);
        });
      });
    });

    describe('/backend-challenge-completed', () => {
      describe('validation', () => {
        test('POST rejects requests without ids', async () => {
          const response = await superRequest('/backend-challenge-completed', {
            method: 'POST',
            setCookies
          });

          expect(response.statusCode).toBe(400);
          expect(response.body).toStrictEqual(
            isValidChallengeCompletionErrorMsg
          );
        });

        test('POST rejects requests without valid ObjectIDs', async () => {
          const response = await superRequest('/backend-challenge-completed', {
            method: 'POST',
            setCookies
          }).send({ id: 'not-a-valid-id', solution: '' });

          expect(response.statusCode).toBe(400);
          expect(response.body).toStrictEqual(
            isValidChallengeCompletionErrorMsg
          );
        });
      });

      describe('handling', () => {
        afterEach(async () => {
          await fastifyTestInstance.prisma.user.updateMany({
            where: { email: 'foo@bar.com' },
            data: {
              completedChallenges: [],
              progressTimestamps: []
            }
          });
        });

        test('POST accepts backend challenges', async () => {
          const now = Date.now();

          const response = await superRequest('/backend-challenge-completed', {
            method: 'POST',
            setCookies
          }).send(backendChallengeBody1);

          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: 'foo@bar.com' }
          });

          expect(user).toMatchObject({
            completedChallenges: [
              {
                ...backendChallengeBody1,
                completedDate: expect.any(Number)
              }
            ]
          });

          const completedDate = user?.completedChallenges[0]?.completedDate;
          expect(completedDate).toBeGreaterThanOrEqual(now);
          expect(completedDate).toBeLessThanOrEqual(now + 1000);

          expect(response.body).toStrictEqual({
            alreadyCompleted: false,
            points: 1,
            completedDate
          });
          expect(response.statusCode).toBe(200);
        });

        test('POST correctly handles multiple requests', async () => {
          const resOriginal = await superRequest(
            '/backend-challenge-completed',
            {
              method: 'POST',
              setCookies
            }
          ).send(backendChallengeBody1);

          await superRequest('/backend-challenge-completed', {
            method: 'POST',
            setCookies
          }).send(backendChallengeBody2);

          const resUpdated = await superRequest(
            '/backend-challenge-completed',
            {
              method: 'POST',
              setCookies
            }
          ).send({
            ...backendChallengeBody1
          });

          const user = await fastifyTestInstance.prisma.user.findFirst({
            where: { email: 'foo@bar.com' }
          });

          const expectedProgressTimestamps = user?.completedChallenges.map(
            challenge => challenge.completedDate
          );

          expect(user).toMatchObject({
            completedChallenges: [
              {
                ...backendChallengeBody1,
                completedDate: expect.any(Number)
              },
              {
                ...backendChallengeBody2,
                completedDate: expect.any(Number)
              }
            ],
            progressTimestamps: expectedProgressTimestamps
          });

          expect(resUpdated.statusCode).toBe(200);
          expect(resUpdated.body.completedDate).not.toBe(
            resOriginal.body.completedDate
          );
          expect(resUpdated.body).toStrictEqual({
            alreadyCompleted: true,
            points: 2,
            completedDate: expect.any(Number)
          });
        });
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

        expect(response.statusCode).toBe(401);
      });

      test('POST /backend-challenge-completed returns 401 status code for un-authenticated-user', async () => {
        const response = await superRequest('/backend-challenge-completed', {
          method: 'POST',
          setCookies
        });

        expect(response.statusCode).toBe(401);
      });
    });
  });
});
