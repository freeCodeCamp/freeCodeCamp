/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import jwt, { JwtPayload } from 'jsonwebtoken';

import { setupServer, superRequest } from '../../jest.utils';
import { JWT_SECRET } from '../utils/env';

const baseProgressData = {
  currentChallengeId: '',
  isRespWebDesignCert: false,
  is2018DataVisCert: false,
  isFrontEndLibsCert: false,
  isJsAlgoDataStructCert: false,
  isApisMicroservicesCert: false,
  isInfosecQaCert: false,
  isQaCertV7: false,
  isInfosecCertV7: false,
  is2018FullStackCert: false,
  isFrontEndCert: false,
  isBackEndCert: false,
  isDataVisCert: false,
  isFullStackCert: false,
  isSciCompPyCertV7: false,
  isDataAnalysisPyCertV7: false,
  isMachineLearningPyCertV7: false,
  isRelationalDatabaseCertV8: false,
  isCollegeAlgebraPyCertV8: false,
  completedChallenges: [],
  savedChallenges: [],
  partiallyCompletedChallenges: [],
  needsModeration: false
};

const modifiedProgressData = {
  ...baseProgressData,
  currentChallengeId: 'hello there',
  isRespWebDesignCert: true,
  isJsAlgoDataStructCert: true,
  isRelationalDatabaseCertV8: true,
  needsModeration: true
};

describe('userRoutes', () => {
  setupServer();

  describe('Authenticated user', () => {
    let setCookies: string[];

    beforeEach(async () => {
      const res = await superRequest('/auth/dev-callback', { method: 'GET' });
      expect(res.status).toBe(200);
      setCookies = res.get('Set-Cookie');
    });

    describe('/account/delete', () => {
      test('POST returns 200 status code with empty object', async () => {
        const response = await superRequest('/account/delete', {
          method: 'POST',
          setCookies
        });

        const userCount = await fastifyTestInstance.prisma.user.count({
          where: { email: 'foo@bar.com' }
        });

        expect(response.body).toStrictEqual({});
        expect(response.status).toBe(200);
        expect(userCount).toBe(0);
      });
    });

    describe('/account/reset-progress', () => {
      test('POST returns 200 status code with empty object', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: 'foo@bar.com' },
          data: modifiedProgressData
        });

        const response = await superRequest('/account/reset-progress', {
          method: 'POST',
          setCookies
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(response.body).toStrictEqual({});
        expect(response.status).toBe(200);

        expect(user?.progressTimestamps).toHaveLength(1);
        expect(user).toMatchObject(baseProgressData);
      });
    });
    describe('/user/user-token', () => {
      beforeEach(async () => {
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        await fastifyTestInstance.prisma.userToken.deleteMany({
          where: {
            userId: user?.id
          }
        });
      });

      // TODO(Post-MVP): consider using PUT and updating the logic to upsert
      test('POST success response includes a JWT encoded string', async () => {
        const response = await superRequest('/user/user-token', {
          method: 'POST',
          setCookies
        });

        const userToken = response.body.userToken;
        const decodedToken = jwt.decode(userToken);

        expect(response.body).toStrictEqual({ userToken: expect.any(String) });
        expect(decodedToken).toStrictEqual({
          userToken: expect.stringMatching(/^[a-zA-Z0-9]{64}$/),
          iat: expect.any(Number)
        });

        expect(() => jwt.verify(userToken, 'wrong-secret')).toThrow();
        expect(() => jwt.verify(userToken, JWT_SECRET)).not.toThrow();

        // TODO(Post-MVP): consider using 201 for new tokens.
        expect(response.status).toBe(200);
      });

      test('POST responds with an encoded UserToken id', async () => {
        const response = await superRequest('/user/user-token', {
          method: 'POST',
          setCookies
        });

        const decodedToken = jwt.decode(response.body.userToken);
        const userTokenId = (decodedToken as JwtPayload).userToken;

        // Verify that the token has been created.
        await fastifyTestInstance.prisma.userToken.findUniqueOrThrow({
          where: { id: userTokenId }
        });

        // TODO(Post-MVP): consider using 201 for new tokens.
        expect(response.status).toBe(200);
      });

      test('POST deletes old tokens when creating a new one', async () => {
        const response = await superRequest('/user/user-token', {
          method: 'POST',
          setCookies
        });

        const decodedToken = jwt.decode(response.body.userToken);
        const userTokenId = (decodedToken as JwtPayload).userToken;

        // Verify that the token has been created.
        await fastifyTestInstance.prisma.userToken.findUniqueOrThrow({
          where: { id: userTokenId }
        });

        await superRequest('/user/user-token', {
          method: 'POST',
          setCookies
        });

        // Verify that the old token has been deleted.
        expect(
          await fastifyTestInstance.prisma.userToken.findUnique({
            where: { id: userTokenId }
          })
        ).toBeNull();
        expect(await fastifyTestInstance.prisma.userToken.count()).toBe(1);
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

    describe('/account/delete', () => {
      test('POST returns 401 status code with error message', async () => {
        const response = await superRequest('/account/delete', {
          method: 'POST',
          setCookies
        });

        expect(response?.statusCode).toBe(401);
      });
    });

    describe('/account/reset-progress', () => {
      test('POST returns 401 status code with error message', async () => {
        const response = await superRequest('/account/reset-progress', {
          method: 'POST',
          setCookies
        });

        expect(response?.statusCode).toBe(401);
      });
    });

    describe('/user/user-token', () => {
      test('POST returns 401 status code with error message', async () => {
        const response = await superRequest('/user/user-token', {
          method: 'POST',
          setCookies
        });

        expect(response.statusCode).toBe(401);
      });
    });
  });
});
