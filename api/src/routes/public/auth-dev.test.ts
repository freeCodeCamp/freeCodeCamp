/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  defaultUserEmail,
  setupServer,
  superRequest
} from '../../../jest.utils';
import { HOME_LOCATION } from '../../utils/env';
import { nanoidCharSet } from '../../utils/create-user';

describe('dev login', () => {
  setupServer();

  beforeEach(async () => {
    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });
  });

  afterAll(async () => {
    await fastifyTestInstance.prisma.user.deleteMany({
      where: { email: defaultUserEmail }
    });
  });

  describe('GET /signin', () => {
    it('should create an account if one does not exist', async () => {
      const res = await superRequest('/signin', { method: 'GET' });

      const count = await fastifyTestInstance.prisma.user.count({
        where: { email: defaultUserEmail }
      });

      expect(count).toBe(1);
      expect(res.body).toStrictEqual({});
      expect(res.status).toBe(302);
    });

    it('should populate the user with the correct data', async () => {
      const uuidRe = /^[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/;
      const fccUuidRe = /^fcc-[a-f0-9]{8}-([a-f0-9]{4}-){3}[a-f0-9]{12}$/;
      const unsubscribeIdRe = new RegExp(`^[${nanoidCharSet}]{21}$`);
      const mongodbIdRe = /^[a-f0-9]{24}$/;

      await superRequest('/signin', { method: 'GET' });
      const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
        where: { email: defaultUserEmail }
      });

      expect(user).toMatchObject({
        about: '',
        acceptedPrivacyTerms: false,
        completedChallenges: [],
        completedExams: [],
        currentChallengeId: '',
        donationEmails: [],
        email: defaultUserEmail,
        emailAuthLinkTTL: null,
        emailVerified: true,
        emailVerifyTTL: null,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        externalId: expect.stringMatching(uuidRe),
        githubProfile: null,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        id: expect.stringMatching(mongodbIdRe),
        is2018DataVisCert: false,
        is2018FullStackCert: false,
        isApisMicroservicesCert: false,
        isBackEndCert: false,
        isBanned: false,
        isCheater: false,
        isClassroomAccount: null,
        isDataAnalysisPyCertV7: false,
        isDataVisCert: false,
        isDonating: false,
        isFoundationalCSharpCertV8: false,
        isFrontEndCert: false,
        isFrontEndLibsCert: false,
        isFullStackCert: false,
        isHonest: false,
        isInfosecCertV7: false,
        isInfosecQaCert: false,
        isJsAlgoDataStructCert: false,
        isJsAlgoDataStructCertV8: false,
        isMachineLearningPyCertV7: false,
        isQaCertV7: false,
        isRelationalDatabaseCertV8: false,
        isCollegeAlgebraPyCertV8: false,
        isRespWebDesignCert: false,
        isSciCompPyCertV7: false,
        isUpcomingPythonCertV8: null,
        keyboardShortcuts: false,
        linkedin: null,
        location: '',
        name: '',
        needsModeration: false,
        newEmail: null,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        unsubscribeId: expect.stringMatching(unsubscribeIdRe),
        partiallyCompletedChallenges: [],
        password: null,
        picture: '',
        portfolio: [],
        profileUI: {
          isLocked: false,
          showAbout: false,
          showCerts: false,
          showDonation: false,
          showHeatMap: false,
          showLocation: false,
          showName: false,
          showPoints: false,
          showPortfolio: false,
          showTimeLine: false
        },
        progressTimestamps: [expect.any(Number)],
        savedChallenges: [],
        sendQuincyEmail: false,
        theme: 'default',
        timezone: null,
        twitter: null,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        username: expect.stringMatching(fccUuidRe),
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        usernameDisplay: expect.stringMatching(fccUuidRe),
        verificationToken: null,
        website: null,
        yearsTopContributor: []
      });
      expect(user.username).toBe(user.usernameDisplay);
    });

    it('should set the jwt_access_token cookie', async () => {
      const res = await superRequest('/signin', { method: 'GET' });

      expect(res.status).toBe(302);
      expect(res.headers['set-cookie']).toEqual(
        expect.arrayContaining([expect.stringMatching(/jwt_access_token=/)])
      );
      // TODO: check the cookie value
    });

    it.todo('should create a session');

    // duplicate of the server.test test to make sure I've not done something
    // silly
    it('should have OWASP recommended headers', async () => {
      const res = await superRequest('/signin', { method: 'GET' });
      expect(res.headers).toMatchObject({
        'cache-control': 'no-store',
        'content-security-policy': "frame-ancestors 'none'",
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'DENY'
      });
    });

    it('should redirect to the Referer (if it is a valid origin)', async () => {
      const res = await superRequest('/signin', { method: 'GET' }).set(
        'referer',
        'https://www.freecodecamp.org/some-path/or/other'
      );

      expect(res.status).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/some-path/or/other'
      );
    });

    it('should redirect to /valid-language/learn when signing in from /valid-language', async () => {
      const res = await superRequest('/signin', { method: 'GET' }).set(
        'referer',
        'https://www.freecodecamp.org/espanol'
      );

      expect(res.status).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/espanol/learn'
      );
    });

    it('should handle referers with trailing slahes', async () => {
      const res = await superRequest('/signin', {
        method: 'GET'
      }).set('referer', 'https://www.freecodecamp.org/espanol/');

      expect(res.status).toBe(302);
      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/espanol/learn'
      );
    });

    it('should redirect to /learn by default', async () => {
      const res = await superRequest('/signin', { method: 'GET' });

      expect(res.status).toBe(302);
      expect(res.headers.location).toBe(`${HOME_LOCATION}/learn`);
    });
  });
});
