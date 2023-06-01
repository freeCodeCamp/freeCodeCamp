import request from 'supertest';

import { setupServer, superRequest } from '../../jest.utils';

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

describe('settingRoutes', () => {
  setupServer();

  // TODO: rather than testing every single route, create a single test for the
  // rest api plugin that checks that the appropriate hooks are added to all

  // This only tests one route, but all of the routes in the settings plugin add
  // the same hooks. So if this suite passes, the other routes should be
  // protected.
  describe('CSRF protection', () => {
    it('should return 403 if the _csrf secret is missing', async () => {
      const response = await request(fastifyTestInstance.server).put(
        '/update-my-profileui'
      );

      expect(response.statusCode).toEqual(403);
      expect(response.body).toEqual({
        code: 'FST_CSRF_MISSING_SECRET',
        error: 'Forbidden',
        message: 'Missing csrf secret',
        statusCode: 403
      });
    });

    it('should return 403 if the csrf_token is invalid', async () => {
      const response = await request(fastifyTestInstance.server)
        .put('/update-my-profileui')
        .set('Cookie', ['_csrf=foo', 'csrf-token=bar']);

      expect(response.statusCode).toEqual(403);
      expect(response.body).toEqual({
        code: 'FST_CSRF_INVALID_TOKEN',
        error: 'Forbidden',
        message: 'Invalid csrf token',
        statusCode: 403
      });
    });

    it('should receive a new CSRF token + secret in the response', async () => {
      const response = await request(fastifyTestInstance.server).put(
        '/update-my-profileui'
      );

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
    let setCookies: string[];

    // Authenticate user
    beforeAll(async () => {
      await fastifyTestInstance.prisma.user.updateMany({
        where: { email: 'foo@bar.com' },
        data: { profileUI: baseProfileUI }
      });
      const res = await request(fastifyTestInstance.server).get(
        '/auth/dev-callback'
      );
      setCookies = res.get('Set-Cookie');
    });

    describe('/update-my-profileui', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-profileui', {
          method: 'PUT',
          setCookies
        }).send({
          profileUI
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({
          message: 'flash.privacy-updated',
          type: 'success'
        });
        expect(user?.profileUI).toEqual(profileUI);
      });

      test('PUT ignores invalid keys', async () => {
        const response = await superRequest('/update-my-profileui', {
          method: 'PUT',
          setCookies
        }).send({
          profileUI: {
            ...profileUI,
            invalidKey: 'invalidValue'
          }
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(response.statusCode).toEqual(200);
        expect(user?.profileUI).toEqual(profileUI);
      });

      test('PUT returns 400 status code with missing keys', async () => {
        const response = await superRequest('/update-my-profileui', {
          method: 'PUT',
          setCookies
        }).send({
          profileUI: {
            isLocked: true,
            showName: true,
            showPoints: false,
            showPortfolio: true,
            showTimeLine: false
          }
        });

        expect(response.statusCode).toEqual(400);
        expect(response.body).toEqual({
          code: 'FST_ERR_VALIDATION',
          error: 'Bad Request',
          message: `body/profileUI must have required property 'showAbout'`,
          statusCode: 400
        });
      });
    });

    describe('/update-my-theme', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-theme', {
          method: 'PUT',
          setCookies
        }).send({
          theme: 'night'
        });

        expect(response.statusCode).toEqual(200);

        expect(response.body).toEqual({
          message: 'flash.updated-themes',
          type: 'success'
        });
      });

      test('PUT returns 400 status code with invalid theme', async () => {
        const response = await superRequest('/update-my-theme', {
          method: 'PUT',
          setCookies
        }).send({
          theme: 'invalid'
        });

        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-username', () => {
      test('PUT returns an error when the username uses special characters', async () => {
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'twaha@'
        });

        expect(response?.statusCode).toEqual(400);

        expect(response?.body).toEqual({
          message: 'Username twaha@ contains invalid characters',
          type: 'info'
        });
      });

      test('PUT returns an error when the username is an endpoint', async () => {
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'german'
        });

        expect(response?.statusCode).toEqual(400);

        expect(response?.body).toEqual({
          message: 'flash.username-taken',
          type: 'info'
        });
      });

      test('PUT returns an error when the username is a bad word', async () => {
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'ass'
        });

        expect(response?.statusCode).toEqual(400);

        expect(response?.body).toEqual({
          message: 'flash.username-taken',
          type: 'info'
        });
      });

      test('PUT returns an error when the username is a https status code', async () => {
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: '404'
        });

        expect(response?.statusCode).toEqual(400);

        expect(response?.body).toEqual({
          message: 'Username 404 is a reserved error code',
          type: 'info'
        });
      });

      test('PUT returns an error when the username is shorter than 3 characters', async () => {
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'fo'
        });

        expect(response?.statusCode).toEqual(400);
        expect(response.body).toEqual({
          message: 'body/username must NOT have fewer than 3 characters',
          type: 'info'
        });
      });

      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'TwaHa1'
        });

        expect(response?.statusCode).toEqual(200);

        expect(response?.body).toEqual({
          message: 'flash.username-updated',
          type: 'success',
          username: 'TwaHa1'
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(user?.username).toEqual('twaha1');
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
        await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'twaha2'
        });

        const secondUpdate = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'twaha2'
        });

        expect(secondUpdate.body).toEqual({
          message: 'flash.username-used',
          type: 'info'
        });
        expect(secondUpdate.statusCode).toEqual(400);

        // Not allowed because, while the usernameDisplay is different, the
        // username is not
        const existingUser = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'SemBauke'
        });

        expect(existingUser.body).toEqual({
          message: 'flash.username-taken',
          type: 'info'
        });
        expect(existingUser.statusCode).toEqual(400);
      });

      test('PUT returns 200 status code with "success" message', async () => {
        await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'twaha3'
        });

        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username: 'TWaha3'
        });

        expect(response?.body).toEqual({
          message: 'flash.username-updated',
          type: 'success',
          username: 'TWaha3'
        });
        expect(response?.statusCode).toEqual(200);
      });
      test('PUT /update-my-username returns 400 status code when username is too long', async () => {
        const username = 'a'.repeat(1001);
        const response = await superRequest('/update-my-username', {
          method: 'PUT',
          setCookies
        }).send({
          username
        });

        expect(response?.statusCode).toEqual(400);
        expect(response.body).toEqual({
          message: 'body/username must NOT have more than 1000 characters',
          type: 'info'
        });
      });
    });

    describe('/update-my-keyboard-shortcuts', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-keyboard-shortcuts', {
          method: 'PUT',
          setCookies
        }).send({ keyboardShortcuts: true });

        expect(response?.statusCode).toEqual(200);

        expect(response?.body).toEqual({
          message: 'flash.keyboard-shortcut-updated',
          type: 'success'
        });
      });

      test('PUT returns 400 status code with invalid shortcuts setting', async () => {
        const response = await superRequest('/update-my-keyboard-shortcuts', {
          method: 'PUT',
          setCookies
        }).send({ keyboardShortcuts: 'invalid' });

        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-socials', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-socials', {
          method: 'PUT',
          setCookies
        }).send({
          website: 'https://www.freecodecamp.org/',
          twitter: 'https://twitter.com/ossia',
          linkedin: 'https://www.linkedin.com/in/quincylarson',
          githubProfile: 'https://github.com/QuincyLarson'
        });

        expect(response.statusCode).toEqual(200);

        expect(response.body).toEqual({
          message: 'flash.updated-socials',
          type: 'success'
        });
      });

      test('PUT returns 400 status code with invalid socials setting', async () => {
        const response = await superRequest('/update-my-socials', {
          method: 'PUT',
          setCookies
        }).send({
          website: 'invalid',
          twitter: 'invalid',
          linkedin: 'invalid',
          githubProfile: 'invalid'
        });

        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-quincy-email', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-quincy-email', {
          method: 'PUT',
          setCookies
        }).send({ sendQuincyEmail: true });

        expect(response.statusCode).toEqual(200);

        expect(response.body).toEqual({
          message: 'flash.subscribe-to-quincy-updated',
          type: 'success'
        });
      });

      test('PUT returns 400 status code with invalid sendQuincyEmail', async () => {
        const response = await superRequest('/update-my-quincy-email', {
          method: 'PUT',
          setCookies
        }).send({ sendQuincyEmail: 'invalid' });

        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-honesty', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-my-honesty', {
          method: 'PUT',
          setCookies
        }).send({ isHonest: true });

        expect(response?.statusCode).toEqual(200);

        expect(response?.body).toEqual({
          message: 'buttons.accepted-honesty',
          type: 'success'
        });
      });

      test('PUT returns 400 status code with invalid honesty', async () => {
        const response = await superRequest('/update-my-honesty', {
          method: 'PUT',
          setCookies
        }).send({ isHonest: false });

        expect(response?.statusCode).toEqual(400);
      });
    });

    describe('/update-privacy-terms', () => {
      test('PUT returns 200 status code with "success" message', async () => {
        const response = await superRequest('/update-privacy-terms', {
          method: 'PUT',
          setCookies
        }).send({ quincyEmails: true });

        expect(response?.statusCode).toEqual(200);

        expect(response?.body).toEqual({
          message: 'flash.privacy-updated',
          type: 'success'
        });
      });

      test('PUT returns 400 status code with non-boolean data', async () => {
        const response = await superRequest('/update-privacy-terms', {
          method: 'PUT',
          setCookies
        }).send({ quincyEmails: '123' });

        expect(response?.statusCode).toEqual(400);
        expect(response?.body).toEqual({
          code: 'FST_ERR_VALIDATION',
          error: 'Bad Request',
          message: 'body/quincyEmails must be boolean',
          statusCode: 400
        });
      });
    });
  });

  describe('Unauthenticated User', () => {
    let setCookies: string[];

    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await request(fastifyTestInstance.server).get('/');
      setCookies = res.get('Set-Cookie');
    });

    test('PUT /update-my-profileui returns 401 status code for un-authenticated users', async () => {
      const response = await superRequest('/update-my-profileui', {
        method: 'PUT',
        setCookies
      });

      expect(response.statusCode).toEqual(401);
    });

    test('PUT /update-my-theme returns 401 status code for un-authenticated users', async () => {
      const response = await superRequest('/update-my-theme', {
        method: 'PUT',
        setCookies
      });

      expect(response.statusCode).toEqual(401);
    });

    test('PUT /update-privacy-terms returns 401 status code for un-authenticated users', async () => {
      const response = await superRequest('/update-privacy-terms', {
        method: 'PUT',
        setCookies
      });

      expect(response?.statusCode).toEqual(401);
    });

    test('PUT /update-my-username returns 401 status code for un-authenticated users', async () => {
      const response = await superRequest('/update-my-username', {
        method: 'PUT',
        setCookies
      }).send({
        username: 'twaha2'
      });

      expect(response?.statusCode).toEqual(401);
    });
  });
});
