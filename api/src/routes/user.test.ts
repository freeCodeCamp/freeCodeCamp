import { setupServer, superRequest } from '../../jest.utils';

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
  });
});
