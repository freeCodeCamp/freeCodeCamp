/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  defaultUserEmail,
  devLogin,
  setupServer,
  superRequest
} from '../../jest.utils';
import { HOME_LOCATION } from '../utils/env';
import { nanoidCharSet } from '../utils/create-user';

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

      await superRequest('/signin', { method: 'GET' });
      const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
        where: { email: defaultUserEmail }
      });

      expect(user).toMatchObject({
        about: '',
        acceptedPrivacyTerms: false,
        completedChallenges: [],
        currentChallengeId: '',
        email: defaultUserEmail,
        emailVerified: true,
        externalId: expect.stringMatching(uuidRe),
        is2018DataVisCert: false,
        is2018FullStackCert: false,
        isApisMicroservicesCert: false,
        isBackEndCert: false,
        isBanned: false,
        isCheater: false,
        isDataAnalysisPyCertV7: false,
        isDataVisCert: false,
        isDonating: false,
        isFrontEndCert: false,
        isFrontEndLibsCert: false,
        isFullStackCert: false,
        isHonest: false,
        isInfosecCertV7: false,
        isInfosecQaCert: false,
        isJsAlgoDataStructCert: false,
        isMachineLearningPyCertV7: false,
        isQaCertV7: false,
        isRelationalDatabaseCertV8: false,
        isCollegeAlgebraPyCertV8: false,
        isRespWebDesignCert: false,
        isSciCompPyCertV7: false,
        keyboardShortcuts: false,
        location: '',
        name: '',
        unsubscribeId: expect.stringMatching(unsubscribeIdRe),
        picture: '',
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
        progressTimestamps: [],
        sendQuincyEmail: false,
        theme: 'default',
        username: expect.stringMatching(fccUuidRe),
        usernameDisplay: expect.stringMatching(fccUuidRe)
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

  describe('GET /signout', () => {
    beforeEach(async () => {
      await devLogin();
    });
    it('should clear all the cookies', async () => {
      const res = await superRequest('/signout', { method: 'GET' });

      const setCookie = res.headers['set-cookie'];
      expect(setCookie).toEqual(
        expect.arrayContaining([
          'jwt_access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
          '_csrf=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
          'csrf_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT'
        ])
      );
      expect(setCookie).toHaveLength(3);
    });

    it('should redirect to / on the client by default', async () => {
      const res = await superRequest('/signout', { method: 'GET' });

      // This happens because localhost:8000 is not an allowed origin and so
      // normalizeParams rejects it and sets the returnTo to /learn. TODO:
      // separate the validation and normalization logic.
      expect(res.headers.location).toBe(`${HOME_LOCATION}/learn`);
      expect(res.status).toBe(302);
    });
  });
});
