import {
  devLogin,
  setupServer,
  superRequest,
  createSuperRequest
} from '../../jest.utils';
import { createUserInput } from '../utils/create-user';

import { isPictureWithProtocol, getWaitMessage } from './settings';

const baseProfileUI = {
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
};

const profileUI = {
  ...baseProfileUI,
  isLocked: true,
  showAbout: true,
  showDonation: true,
  showLocation: true,
  showName: true,
  showPortfolio: true
};

const developerUserEmail = 'foo@bar.com';
const otherDeveloperUserEmail = 'bar@bar.com';
const unusedEmailOne = 'nobody@would.com';
const unusedEmailTwo = 'would@they.com';

const updateErrorResponse = {
  type: 'danger',
  message: 'flash.wrong-updating'
};

describe('settingRoutes', () => {
  setupServer();

  // TODO: rather than testing every single route, create a single test for the
  // rest api plugin that checks that the appropriate hooks are added to all

  // This only tests one route, but all of the routes in the settings plugin add
  // the same hooks. So if this suite passes, the other routes should be
  // protected.
  describe('CSRF protection', () => {
    it('should return 403 if the _csrf secret is missing', async () => {
      const response = await superRequest('/update-my-profileui', {
        method: 'PUT'
      });

      expect(response.body).toEqual({
        code: 'FST_CSRF_MISSING_SECRET',
        error: 'Forbidden',
        message: 'Missing csrf secret',
        statusCode: 403
      });
      expect(response.statusCode).toEqual(403);
    });

    it('should return 403 if the csrf_token is invalid', async () => {
      const response = await superRequest('/update-my-profileui', {
        method: 'PUT'
      }).set('Cookie', ['_csrf=foo', 'csrf-token=bar']);

      expect(response.body).toEqual({
        code: 'FST_CSRF_INVALID_TOKEN',
        error: 'Forbidden',
        message: 'Invalid csrf token',
        statusCode: 403
      });
      expect(response.statusCode).toEqual(403);
    });

    it('should receive a new CSRF token + secret in the response', async () => {
      const response = await superRequest('/update-my-profileui', {
        method: 'PUT'
      });

      const newCookies = response.get('Set-Cookie');
      expect(newCookies).toEqual(
        expect.arrayContaining([
          expect.stringContaining('_csrf'),
          expect.stringContaining('csrf_token')
        ])
      );
    });
  });

  describe('Authenticated user', () => {
    let superPut: ReturnType<typeof createSuperRequest>;

    // Authenticate user
    beforeAll(async () => {
      const setCookies = await devLogin();
      superPut = createSuperRequest({ method: 'PUT', setCookies });
      // This is not strictly necessary, since the defaultUser has this
      // profileUI, but we're interested in how the profileUI is updated. As
      // such, setting this explicitly isolates these tests.
      await fastifyTestInstance.prisma.user.updateMany({
        where: { email: developerUserEmail },
        data: { profileUI: baseProfileUI }
      });

      const otherUser = await fastifyTestInstance.prisma.user.findFirst({
        where: { email: otherDeveloperUserEmail }
      });

      if (!otherUser) {
        await fastifyTestInstance.prisma.user.create({
          data: createUserInput(otherDeveloperUserEmail)
        });
      }
    });

    describe('/update-my-profileui', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-profileui').send({
          profileUI
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail }
        });

        expect(response.body).toEqual({
          message: 'flash.privacy-updated',
          type: 'success'
        });
        expect(user?.profileUI).toEqual(profileUI);
        expect(response.statusCode).toEqual(200);
      });

      test('PUT ignores invalid keys', async () => {
        const response = await superPut('/update-my-profileui').send({
          profileUI: {
            ...profileUI,
            invalidKey: 'invalidValue'
          }
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail }
        });

        expect(user?.profileUI).toEqual(profileUI);
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with missing keys', async () => {
        const response = await superPut('/update-my-profileui').send({
          profileUI: {
            isLocked: true,
            showName: true,
            showPoints: false,
            showPortfolio: true,
            showTimeLine: false
          }
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-email', () => {
      beforeEach(async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: developerUserEmail },
          data: {
            newEmail: null,
            emailVerified: true,
            emailVerifyTTL: null,
            emailAuthLinkTTL: null
          }
        });
      });
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-email').send({
          email: 'foo@foo.com'
        });

        expect(response?.body).toEqual({
          message: 'flash.email-valid',
          type: 'success'
        });
        expect(response?.statusCode).toEqual(200);
      });

      test("PUT updates the user's record in preparation for receiving auth email", async () => {
        const response = await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
          where: { email: developerUserEmail },
          select: { emailVerifyTTL: true, emailVerified: true, newEmail: true }
        });
        const emailVerifyTTL = user?.emailVerifyTTL;
        expect(emailVerifyTTL).toBeTruthy();
        // This throw is to mollify TS (if this is necessary a lot, create a
        // helper)
        if (!emailVerifyTTL) {
          throw new Error('emailVerifyTTL is not defined');
        }

        expect(response?.statusCode).toEqual(200);

        // expect the emailVerifyTTL to be within 10 seconds of the current time
        const tenSeconds = 10 * 1000;
        expect(emailVerifyTTL.getTime()).toBeGreaterThan(
          Date.now() - tenSeconds
        );
        expect(emailVerifyTTL.getTime()).toBeLessThan(Date.now() + tenSeconds);

        expect(user?.emailVerified).toEqual(false);
        expect(user?.newEmail).toEqual(unusedEmailOne);
      });

      test('PUT rejects invalid email addresses', async () => {
        const response = await superPut('/update-my-email').send({
          email: 'invalid'
        });

        // We cannot use fastify's default validation failure response here
        // because the client consumes the response and displays it to the user.
        expect(response?.body).toEqual({
          type: 'danger',
          message: 'Email format is invalid'
        });
        expect(response?.statusCode).toEqual(400);
      });

      test('PUT accepts requests to update to the current email address (ignoring case) if it is not verified', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: developerUserEmail },
          data: { emailVerified: false }
        });
        const response = await superPut('/update-my-email').send({
          email: developerUserEmail.toUpperCase()
        });

        expect(response?.statusCode).toEqual(200);
        expect(response?.body).toEqual({
          message: 'flash.email-valid',
          type: 'success'
        });
      });

      test('PUT rejects a request to update to the existing email (ignoring case) address', async () => {
        const response = await superPut('/update-my-email').send({
          email: developerUserEmail.toUpperCase()
        });

        expect(response?.body).toEqual({
          type: 'info',
          message: `${developerUserEmail} is already associated with this account.
You can update a new email address instead.`
        });
        expect(response?.statusCode).toEqual(400);
      });

      test('PUT rejects a request to update to the same email (ignoring case) twice', async () => {
        const successResponse = await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        expect(successResponse?.statusCode).toEqual(200);

        const failResponse = await superPut('/update-my-email').send({
          email: unusedEmailOne.toUpperCase()
        });

        expect(failResponse?.body).toEqual({
          type: 'info',
          message: `We have already sent an email confirmation request to ${unusedEmailOne}.
Please wait 5 minutes to resend an authentication link.`
        });
        expect(failResponse?.statusCode).toEqual(429);
      });

      test('PUT rejects a request if the new email is already in use', async () => {
        const response = await superPut('/update-my-email').send({
          email: otherDeveloperUserEmail
        });

        expect(response?.body).toEqual({
          type: 'info',
          message: `${otherDeveloperUserEmail} is already associated with another account.`
        });
        expect(response?.statusCode).toEqual(400);
      });

      test('PUT rejects the second request if is immediately after the first', async () => {
        const successResponse = await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        expect(successResponse?.statusCode).toEqual(200);

        const failResponse = await superPut('/update-my-email').send({
          email: unusedEmailTwo
        });

        expect(failResponse?.statusCode).toEqual(429);

        expect(failResponse?.body).toEqual({
          type: 'info',
          message: `Please wait 5 minutes to resend an authentication link.`
        });
      });

      // TODO: test that the correct email gets sent
    });

    describe('/update-my-theme', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-theme').send({
          theme: 'night'
        });

        expect(response.body).toEqual({
          message: 'flash.updated-themes',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with invalid theme', async () => {
        const response = await superPut('/update-my-theme').send({
          theme: 'invalid'
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-username', () => {
      test('PUT returns an error when the username uses special characters', async () => {
        const response = await superPut('/update-my-username').send({
          username: 'twaha@'
        });

        expect(response.body).toEqual({
          message: 'Username twaha@ contains invalid characters',
          type: 'info'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns an error when the username is an endpoint', async () => {
        const response = await superPut('/update-my-username').send({
          username: 'german'
        });

        expect(response.body).toEqual({
          message: 'flash.username-taken',
          type: 'info'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns an error when the username is a bad word', async () => {
        const response = await superPut('/update-my-username').send({
          username: 'ass'
        });

        expect(response.body).toEqual({
          message: 'flash.username-taken',
          type: 'info'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns an error when the username is a https status code', async () => {
        const response = await superPut('/update-my-username').send({
          username: '404'
        });

        expect(response.body).toEqual({
          message: 'Username 404 is a reserved error code',
          type: 'info'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns an error when the username is shorter than 3 characters', async () => {
        const response = await superPut('/update-my-username').send({
          username: 'fo'
        });

        expect(response.body).toEqual({
          message: 'body/username must NOT have fewer than 3 characters',
          type: 'info'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-username').send({
          username: 'TwaHa1'
        });

        expect(response.body).toStrictEqual({
          message: 'flash.username-updated',
          type: 'success',
          variables: { username: 'TwaHa1' }
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(user?.username).toEqual('twaha1');
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns an error when the username is already used', async () => {
        await fastifyTestInstance.prisma.user.create({
          data: {
            email: 'an@ran.dom',
            username: 'sembauke',
            about: 'about',
            acceptedPrivacyTerms: true,
            emailVerified: true,
            externalId: 'externalId',
            isDonating: true,
            picture: 'picture',
            sendQuincyEmail: true,
            unsubscribeId: 'unsubscribeId'
          }
        });
        await superPut('/update-my-username').send({ username: 'twaha2' });

        const secondUpdate = await superPut('/update-my-username').send({
          username: 'twaha2'
        });

        expect(secondUpdate.body).toEqual({
          message: 'flash.username-used',
          type: 'info'
        });
        expect(secondUpdate.statusCode).toEqual(400);

        // Not allowed because, while the usernameDisplay is different, the
        // username is not
        const existingUser = await superPut('/update-my-username').send({
          username: 'SemBauke'
        });

        expect(existingUser.body).toEqual({
          message: 'flash.username-taken',
          type: 'info'
        });
        expect(existingUser.statusCode).toEqual(400);
      });

      test('PUT returns 200 status code with "success" message', async () => {
        await superPut('/update-my-username').send({ username: 'twaha3' });

        const response = await superPut('/update-my-username').send({
          username: 'TWaha3'
        });

        expect(response.body).toStrictEqual({
          message: 'flash.username-updated',
          type: 'success',
          variables: { username: 'TWaha3' }
        });
        expect(response.statusCode).toEqual(200);
      });
      test('PUT /update-my-username returns 400 status code when username is too long', async () => {
        const username = 'a'.repeat(1001);
        const response = await superPut('/update-my-username').send({
          username
        });

        expect(response.body).toEqual({
          message: 'body/username must NOT have more than 1000 characters',
          type: 'info'
        });
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-keyboard-shortcuts', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-keyboard-shortcuts').send({
          keyboardShortcuts: true
        });

        expect(response.body).toEqual({
          message: 'flash.keyboard-shortcut-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with invalid shortcuts setting', async () => {
        const response = await superPut('/update-my-keyboard-shortcuts').send({
          keyboardShortcuts: 'invalid'
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-socials', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-socials').send({
          website: 'https://www.freecodecamp.org/',
          twitter: 'https://twitter.com/ossia',
          linkedin: 'https://www.linkedin.com/in/quincylarson',
          githubProfile: 'https://github.com/QuincyLarson'
        });

        expect(response.body).toEqual({
          message: 'flash.updated-socials',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT accepts empty strings for socials', async () => {
        const response = await superPut('/update-my-socials').send({
          website: 'https://www.freecodecamp.org/',
          twitter: '',
          linkedin: '',
          githubProfile: ''
        });

        expect(response.body).toEqual({
          message: 'flash.updated-socials',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with invalid socials setting', async () => {
        const response = await superPut('/update-my-socials').send({
          website: 'invalid',
          twitter: '',
          linkedin: '',
          githubProfile: 'invalid'
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-quincy-email', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-quincy-email').send({
          sendQuincyEmail: true
        });

        expect(response.body).toEqual({
          message: 'flash.subscribe-to-quincy-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with invalid sendQuincyEmail', async () => {
        const response = await superPut('/update-my-quincy-email').send({
          sendQuincyEmail: 'invalid'
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-about', () => {
      test('PUT updates the values in about settings', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture:
            'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
        });

        expect(response.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });

        const user = await fastifyTestInstance?.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(user?.about).toEqual('Teacher at freeCodeCamp');
        expect(user?.name).toEqual('Quincy Larson');
        expect(user?.location).toEqual('USA');
        expect(user?.picture).toEqual(
          'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
        );
        expect(response.statusCode).toEqual(200);
      });

      test('PUT updates the values in about settings without image', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          // `new URL` throws if the image isn't a URL, this checks if it doesn't throw.
          picture: 'invalid'
        });

        expect(response.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });
    });

    describe('/update-my-honesty', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-honesty').send({
          isHonest: true
        });

        expect(response.body).toEqual({
          message: 'buttons.accepted-honesty',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with invalid honesty', async () => {
        const response = await superPut('/update-my-honesty').send({
          isHonest: false
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-privacy-terms', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-privacy-terms').send({
          quincyEmails: true
        });

        expect(response.body).toEqual({
          message: 'flash.privacy-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code with non-boolean data', async () => {
        const response = await superPut('/update-privacy-terms').send({
          quincyEmails: '123'
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-portfolio', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-portfolio').send({
          portfolio: [{}]
        });

        expect(response.body).toEqual({
          message: 'flash.portfolio-item-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT returns 400 status code when the portfolio property is missing', async () => {
        const response = await superPut('/update-my-portfolio').send({});

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns 400 status code when any data is the wrong type', async () => {
        const response = await superPut('/update-my-portfolio').send({
          portfolio: [
            { id: '', title: '', description: '', url: '', image: '' },
            { id: '', title: {}, description: '', url: '', image: '' }
          ]
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-classroom-mode', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superPut('/update-my-classroom-mode').send({
          isClassroomAccount: true
        });

        expect(response.body).toEqual({
          message: 'flash.classroom-mode-updated',
          type: 'success'
        });

        expect(response.statusCode).toEqual(200);
      });

      test('After updating the classroom mode, the user should have this property set', async () => {
        await superPut('/update-my-classroom-mode').send({
          isClassroomAccount: false
        });

        const user = await fastifyTestInstance?.prisma.user.findFirst({
          where: {
            email: developerUserEmail
          }
        });

        expect(user?.isClassroomAccount).toEqual(false);
      });
    });

    describe('Unauthenticated User', () => {
      let setCookies: string[];

      // Get the CSRF cookies from an unprotected route
      beforeAll(async () => {
        const res = await superRequest('/status/ping', { method: 'GET' });
        setCookies = res.get('Set-Cookie');
      });

      const endpoints: { path: string; method: 'PUT' }[] = [
        { path: '/update-my-profileui', method: 'PUT' },
        { path: '/update-my-theme', method: 'PUT' },
        { path: '/update-my-username', method: 'PUT' },
        { path: '/update-my-keyboard-shortcuts', method: 'PUT' },
        { path: '/update-my-socials', method: 'PUT' },
        { path: '/update-my-quincy-email', method: 'PUT' },
        { path: '/update-my-about', method: 'PUT' },
        { path: '/update-my-honesty', method: 'PUT' },
        { path: '/update-privacy-terms', method: 'PUT' },
        { path: '/update-my-portfolio', method: 'PUT' }
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

  describe('isPictureWithProtocol', () => {
    test('Valid protocol', () => {
      expect(isPictureWithProtocol('https://www.example.com/')).toEqual(true);
      expect(isPictureWithProtocol('http://www.example.com/')).toEqual(true);
    });

    test('Invalid protocol', () => {
      expect(isPictureWithProtocol('htps://www.example.com/')).toEqual(false);
      expect(isPictureWithProtocol('tp://www.example.com/')).toEqual(false);
      expect(isPictureWithProtocol('www.example.com/')).toEqual(false);
    });
  });
});

describe('getWaitMessage', () => {
  const sec = 1000;
  const min = 60 * 1000;
  it.each([
    {
      sentAt: new Date(0),
      now: new Date(0),
      expected: 'Please wait 5 minutes to resend an authentication link.'
    },
    {
      sentAt: new Date(0),
      now: new Date(59 * sec),
      expected: 'Please wait 5 minutes to resend an authentication link.'
    },
    {
      sentAt: new Date(0),
      now: new Date(4 * min),
      expected: 'Please wait 1 minute to resend an authentication link.'
    },
    {
      sentAt: new Date(0),
      now: new Date(4 * min + 59 * sec),
      expected: 'Please wait 1 minute to resend an authentication link.'
    },
    {
      sentAt: new Date(0),
      now: new Date(5 * min),
      expected: null
    }
  ])(
    `returns "$expected" when sentAt is $sentAt and now is $now`,
    ({ sentAt, now, expected }) => {
      expect(getWaitMessage({ sentAt, now })).toEqual(expected);
    }
  );

  it('returns null when sentAt is null', () => {
    expect(getWaitMessage({ sentAt: null, now: new Date(0) })).toBeNull();
  });
  it('uses the current time when now is not provided', () => {
    expect(getWaitMessage({ sentAt: new Date() })).toEqual(
      'Please wait 5 minutes to resend an authentication link.'
    );
  });
});
