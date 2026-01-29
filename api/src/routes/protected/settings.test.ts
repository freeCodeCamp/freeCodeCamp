/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  describe,
  test,
  expect,
  beforeAll,
  afterEach,
  beforeEach,
  vi,
  MockInstance
} from 'vitest';
import {
  devLogin,
  setupServer,
  superRequest,
  createSuperRequest,
  defaultUserId,
  defaultUserEmail
} from '../../../vitest.utils.js';
import { formatMessage } from '../../plugins/redirect-with-message.js';
import { createUserInput } from '../../utils/create-user.js';
import { API_LOCATION, HOME_LOCATION } from '../../utils/env.js';
import {
  isPictureWithProtocol,
  getWaitMessage,
  validateSocialUrl
} from './settings.js';
import { findOrCreateUser } from '../helpers/auth-helpers.js';

const baseProfileUI = {
  isLocked: false,
  showAbout: false,
  showCerts: false,
  showDonation: false,
  showExperience: false,
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

  describe('Authenticated user', () => {
    let superPut: ReturnType<typeof createSuperRequest>;
    let superGet: ReturnType<typeof createSuperRequest>;

    // Authenticate user
    beforeAll(async () => {
      const setCookies = await devLogin();
      superPut = createSuperRequest({ method: 'PUT', setCookies });
      superGet = createSuperRequest({ method: 'GET', setCookies });
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

    describe('/confirm-email', () => {
      const defaultErrorMessage = {
        type: 'danger',
        content:
          'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
      } as const;

      const successMessage = {
        type: 'success',
        content: 'flash.email-valid'
      } as const;

      const validToken =
        '4kZFEVHChxzY7kX1XSzB4uhh8fcUwcqAGWV9hv25hsI6nviVlwzXCv2YE9lENYGy';
      // This is a valid id for a token, but it doesn't exist in the database
      const validButMissingToken =
        '4kZFEVHChxzY7kX1XSzB4uhh8fcUwcqAGWV9hv25hsI6nviVlwzXCv2YE9lENYGY';
      const tokenWithMissingUser =
        '4kZFEVHChxzY7kX1XSzB4uhh8fcUwcqAGWV9hv25hsI6nviVlwzXCv2YE9lENYGH';
      const tokenWithDifferentUser =
        '4kZFEVHChxzY7kX1XSzB4uhh8fcUwcqAGWV9hv25hsI6nviVlwzXCv2YE9lENYGI';
      const expiredToken =
        '4kZFEVHChxzY7kX1XSzB4uhh8fcUwcqAGWV9hv25hsI6nviVlwzXCv2YE9lENYGE';

      const tokens = [
        validToken,
        tokenWithMissingUser,
        expiredToken,
        tokenWithDifferentUser
      ];
      const newEmail = 'anything@goes.com';
      const otherUserEmail = 'another@user.com';
      const encodedEmail = Buffer.from(newEmail).toString('base64');
      const notEmail = Buffer.from('foobar.com').toString('base64');

      beforeEach(async () => {
        const otherUser = await findOrCreateUser(
          fastifyTestInstance,
          otherUserEmail
        );

        await fastifyTestInstance.prisma.authToken.create({
          data: {
            created: new Date(),
            id: validToken,
            ttl: 1000,
            userId: defaultUserId
          }
        });

        await fastifyTestInstance.prisma.authToken.create({
          data: {
            created: new Date(),
            id: tokenWithMissingUser,
            ttl: 1000,
            // Random ObjectId
            userId: '6650ac23ccc46c0349a86dee'
          }
        });

        await fastifyTestInstance.prisma.authToken.create({
          data: {
            created: new Date(),
            id: tokenWithDifferentUser,
            ttl: 1000,
            userId: otherUser.id
          }
        });

        await fastifyTestInstance.prisma.authToken.create({
          data: {
            created: new Date(Date.now() - 1000),
            id: expiredToken,
            ttl: 1000,
            userId: defaultUserId
          }
        });

        // We expect these properties to be changed by the endpoint, so they
        // need to be set so that change can be confirmed.
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            newEmail,
            emailVerified: false,
            emailVerifyTTL: new Date(),
            emailAuthLinkTTL: new Date()
          }
        });

        // Simulate another user changing their email. This user is signed out.
        await fastifyTestInstance.prisma.user.update({
          where: { id: otherUser.id },
          data: {
            newEmail,
            emailVerified: false,
            emailVerifyTTL: new Date(),
            emailAuthLinkTTL: new Date()
          }
        });
      });

      afterEach(async () => {
        await fastifyTestInstance.prisma.authToken.deleteMany({
          where: { id: { in: tokens } }
        });
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { newEmail: null, email: defaultUserEmail, emailVerified: true }
        });
        await fastifyTestInstance.prisma.user.deleteMany({
          where: { email: otherUserEmail }
        });
      });

      test('should reject requests without params', async () => {
        const resNoParams = await superGet('/confirm-email');

        expect(resNoParams.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(resNoParams.status).toBe(302);
      });

      test('should reject requests which have an invalid token param', async () => {
        const res = await superGet(
          // token should be 64 characters long
          `/confirm-email?email=${encodedEmail}&token=tooshort`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(res.status).toBe(302);
      });

      test('should reject requests which have an invalid email param', async () => {
        const res = await superGet(
          `/confirm-email?email=${notEmail}&token=${validToken}`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(res.status).toBe(302);
      });

      test('should reject requests when the auth token is not in the database', async () => {
        const res = await superGet(
          `/confirm-email?email=${encodedEmail}&token=${validButMissingToken}`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(res.status).toBe(302);
      });

      test('should reject requests when the auth token exists, but the user does not', async () => {
        const res = await superGet(
          `/confirm-email?email=${encodedEmail}&token=${validButMissingToken}`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(res.status).toBe(302);
      });

      test('should reject requests when the target user does not match the signed in user', async () => {
        // The signed in user is the default (foo@bar.com), but the token is for
        // a different user (another@user.com).

        const res = await superGet(
          `/confirm-email?email=${encodedEmail}&token=${tokenWithDifferentUser}`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(res.status).toBe(302);
      });

      // TODO(Post-MVP): there's no need to keep the auth token around if,
      // somehow, the user is missing
      test.todo(
        'should delete the auth token if there is no user associated with it'
      );

      test('should reject requests when the email param is different from user.newEmail', async () => {
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: { newEmail: 'an@oth.er' }
        });

        const res = await superGet(
          `/confirm-email?email=${encodedEmail}&token=${validToken}`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(defaultErrorMessage)
        );
        expect(res.status).toBe(302);
      });

      test('should reject requests if the auth token has expired', async () => {
        const res = await superGet(
          `/confirm-email?email=${encodedEmail}&token=${expiredToken}`
        );

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` +
            formatMessage({
              content:
                'The link to confirm your new email address has expired. Please try again.',
              type: 'info'
            })
        );
        expect(res.status).toBe(302);
      });

      test('should update the user email', async () => {
        const res = await superGet(
          `/confirm-email?email=${encodedEmail}&token=${validToken}`
        );
        const user = await fastifyTestInstance.prisma.user.findUniqueOrThrow({
          where: { id: defaultUserId }
        });

        expect(res.headers.location).toBe(
          `${HOME_LOCATION}?` + formatMessage(successMessage)
        );
        expect(user.email).toBe(newEmail);
      });

      test('should clean up the user record', async () => {
        await superGet(
          `/confirm-email?email=${encodedEmail}&token=${validToken}`
        );

        const user = await fastifyTestInstance.prisma.user.findUniqueOrThrow({
          where: { id: defaultUserId }
        });

        expect(user.newEmail).toBeNull();
        expect(user.emailVerified).toBe(true);
        expect(user.emailVerifyTTL).toBeNull();
        expect(user.emailAuthLinkTTL).toBeNull();
      });

      test('should remove the auth token on success', async () => {
        await superGet(
          `/confirm-email?email=${encodedEmail}&token=${validToken}`
        );

        const authToken = await fastifyTestInstance.prisma.authToken.findUnique(
          {
            where: { id: validToken }
          }
        );

        expect(authToken).toBeNull();
      });
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
      let sendEmailSpy: MockInstance;
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

        sendEmailSpy = vi
          .spyOn(fastifyTestInstance, 'sendEmail')
          .mockImplementationOnce(vi.fn());
      });

      afterEach(async () => {
        vi.clearAllMocks();
        await fastifyTestInstance.prisma.authToken.deleteMany({
          where: { userId: defaultUserId }
        });
      });
      test('PUT returns 200 status code with "info" message', async () => {
        const response = await superPut('/update-my-email').send({
          email: 'foo@foo.com'
        });

        expect(response.body).toEqual({
          message:
            'Check your email and click the link we sent you to confirm your new email address.',
          type: 'info'
        });
        expect(response.statusCode).toEqual(200);
      });

      test("PUT updates the user's record in preparation for receiving auth email", async () => {
        const timeBefore = Date.now();
        const response = await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        const user = await fastifyTestInstance.prisma.user.findFirstOrThrow({
          where: { email: developerUserEmail },
          select: {
            emailAuthLinkTTL: true,
            emailVerifyTTL: true,
            emailVerified: true,
            newEmail: true
          }
        });

        // expect the emailVerifyTTL and emailAuthLinkTTL to be set to the current time
        expect(user.emailVerifyTTL!.getTime()).toBeGreaterThan(timeBefore);
        expect(user.emailVerifyTTL!.getTime()).toBeLessThan(Date.now());
        expect(user.emailAuthLinkTTL!.getTime()).toBeGreaterThan(timeBefore);
        expect(user.emailAuthLinkTTL!.getTime()).toBeLessThan(Date.now());

        expect(user.emailVerified).toEqual(false);
        expect(user.newEmail).toEqual(unusedEmailOne);
        expect(response.statusCode).toEqual(200);
      });

      test('PUT rejects invalid email addresses', async () => {
        const response = await superPut('/update-my-email').send({
          email: 'invalid'
        });

        // We cannot use fastify's default validation failure response here
        // because the client consumes the response and displays it to the user.
        expect(response.body).toEqual({
          type: 'danger',
          message: 'Email format is invalid'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT accepts requests to update to the current email address (ignoring case) if it is not verified', async () => {
        await fastifyTestInstance.prisma.user.updateMany({
          where: { email: developerUserEmail },
          data: { emailVerified: false }
        });
        const response = await superPut('/update-my-email').send({
          email: developerUserEmail.toUpperCase()
        });

        expect(response.statusCode).toEqual(200);
        expect(response.body).toEqual({
          message:
            'Check your email and click the link we sent you to confirm your new email address.',
          type: 'info'
        });
      });

      test('PUT rejects a request to update to the existing email (ignoring case) address', async () => {
        const response = await superPut('/update-my-email').send({
          email: developerUserEmail.toUpperCase()
        });

        expect(response.body).toEqual({
          type: 'info',
          message: `${developerUserEmail} is already associated with this account.
You can update a new email address instead.`
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT rejects a request to update to the same email (ignoring case) twice', async () => {
        const successResponse = await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        expect(successResponse.statusCode).toEqual(200);

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

        expect(response.body).toEqual({
          type: 'info',
          message: `${otherDeveloperUserEmail} is already associated with another account.`
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT rejects the second request if is immediately after the first', async () => {
        const successResponse = await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        expect(successResponse.statusCode).toEqual(200);

        const failResponse = await superPut('/update-my-email').send({
          email: unusedEmailTwo
        });

        expect(failResponse?.statusCode).toEqual(429);

        expect(failResponse?.body).toEqual({
          type: 'info',
          message: `Please wait 5 minutes to resend an authentication link.`
        });
      });

      test('PUT creates an auth token record for the requesting user', async () => {
        // Reset user state to avoid rate limiting from previous tests
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            emailAuthLinkTTL: null,
            newEmail: null
          }
        });

        const noToken = await fastifyTestInstance.prisma.authToken.findFirst({
          where: { userId: defaultUserId }
        });
        expect(noToken).toBeNull();

        await superPut('/update-my-email').send({
          email: unusedEmailTwo
        });

        const token = await fastifyTestInstance.prisma.authToken.findFirst({
          where: { userId: defaultUserId }
        });

        expect(token).toEqual({
          ttl: 15 * 60 * 1000,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          created: expect.any(Date),
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          id: expect.any(String),
          userId: defaultUserId
        });
      });

      // This has to be the last test since vi.mockRestore replaces the original
      // function with undefined when restoring a prisma function (for some
      // reason)
      test('PUT sends an email to the new email address', async () => {
        vi.spyOn(
          fastifyTestInstance.prisma.authToken,
          'create'
        ).mockImplementationOnce(() =>
          // @ts-expect-error This is a mock implementation, all we're
          // interested in is the id.
          Promise.resolve({
            id: '123'
          })
        );
        await superPut('/update-my-email').send({
          email: unusedEmailOne
        });

        const expectedLink = `${API_LOCATION}/confirm-email?email=${Buffer.from(unusedEmailOne).toString('base64')}&token=123&emailChange=true`;
        expect(sendEmailSpy).toHaveBeenCalledWith({
          from: 'team@freecodecamp.org',
          to: unusedEmailOne,
          subject:
            'Please confirm your updated email address for freeCodeCamp.org',
          text: `Please confirm this email address for freeCodeCamp.org:

${expectedLink}

Happy coding!

- The freeCodeCamp.org Team
`
        });
      });
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
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(user?.username).toEqual('twaha1');
        expect(response.body).toStrictEqual({
          message: 'flash.username-updated',
          type: 'success',
          variables: { username: 'TwaHa1' }
        });
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
          bluesky: 'https://bsky.app/profile/quincy.bsky.social',
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
          bluesky: '',
          linkedin: '',
          githubProfile: ''
        });

        expect(response.body).toEqual({
          message: 'flash.updated-socials',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT rejects non-url values', async () => {
        const response = await superPut('/update-my-socials').send({
          website: 'invalid',
          twitter: '',
          bluesky: '',
          linkedin: '',
          githubProfile: ''
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('PUT only accepts urls to certain domains', async () => {
        const response = await superPut('/update-my-socials').send({
          website: '',
          twitter: '',
          bluesky: '',
          linkedin: '',
          githubProfile: 'https://x.com/should-be-github'
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

      test('PUT returns 400 if the URL is invalid', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture: 'invalid'
        });

        expect(response.body).toEqual({
          message: 'flash.wrong-updating',
          type: 'danger'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns 400 if the URL has no image extension', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture: 'https://example.com/avatar'
        });

        expect(response.body).toEqual({
          message: 'flash.wrong-updating',
          type: 'danger'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns 400 if the URL has a non-image extension', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture: 'https://example.com/file.txt'
        });

        expect(response.body).toEqual({
          message: 'flash.wrong-updating',
          type: 'danger'
        });
        expect(response.statusCode).toEqual(400);
      });

      test('PUT accepts an image URL with query string', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture: 'https://example.com/photo.png?size=200&cache=bust'
        });

        expect(response.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT accepts an image URL with a different valid extension (.webp)', async () => {
        const response = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture: 'https://example.com/avatar.webp'
        });

        expect(response.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);
      });

      test('PUT with empty strings clears the values in about settings', async () => {
        const initialResponse = await superPut('/update-my-about').send({
          about: 'Teacher at freeCodeCamp',
          name: 'Quincy Larson',
          location: 'USA',
          picture:
            'https://cdn.freecodecamp.org/platform/english/images/quincy-larson-signature.svg'
        });

        expect(initialResponse.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });
        expect(initialResponse.statusCode).toEqual(200);

        const response = await superPut('/update-my-about').send({
          about: '',
          name: '',
          location: '',
          picture: ''
        });

        expect(response.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);

        const user = await fastifyTestInstance?.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });
        expect(user?.about).toEqual('');
        expect(user?.name).toEqual('');
        expect(user?.location).toEqual('');
        expect(user?.picture).toEqual('');
      });

      test('PUT returns 400 status code with invalid about settings', async () => {
        const response = await superPut('/update-my-about').send({
          about: { no: 'objects' }
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('PUT allows updating location/about when picture is unchanged (even without extension)', async () => {
        // Simulate a user who already has a GitHub avatar URL saved (e.g., from before strict validation)
        const githubAvatarUrl =
          'https://avatars0.githubusercontent.com/u/34585031?v=4';
        await fastifyTestInstance.prisma.user.update({
          where: { id: defaultUserId },
          data: {
            picture: githubAvatarUrl,
            about: 'Initial about',
            name: 'Test User',
            location: 'Initial Location'
          }
        });

        // Now update only location and about, keeping the same picture (no extension)
        const updateResponse = await superPut('/update-my-about').send({
          about: 'Updated about text',
          name: 'Test User',
          location: 'New Location',
          picture: githubAvatarUrl // Same URL, no extension - should skip validation
        });

        expect(updateResponse.body).toEqual({
          message: 'flash.updated-about-me',
          type: 'success'
        });
        expect(updateResponse.statusCode).toEqual(200);

        const user = await fastifyTestInstance?.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(user?.about).toEqual('Updated about text');
        expect(user?.location).toEqual('New Location');
        expect(user?.picture).toEqual(githubAvatarUrl);
      });

      test('PUT still validates picture when it is actually changed', async () => {
        // Set initial valid picture
        const validPictureUrl = 'https://example.com/avatar.png';
        await superPut('/update-my-about').send({
          about: 'Initial',
          name: 'Test',
          location: 'Location',
          picture: validPictureUrl
        });

        // Try to change picture to invalid URL (no extension)
        const updateResponse = await superPut('/update-my-about').send({
          about: 'Initial',
          name: 'Test',
          location: 'Location',
          picture: 'https://example.com/new-avatar' // Changed but invalid
        });

        expect(updateResponse.statusCode).toEqual(400);
        expect(updateResponse.body).toEqual({
          message: 'flash.wrong-updating',
          type: 'danger'
        });

        // Verify picture wasn't updated
        const user = await fastifyTestInstance?.prisma.user.findFirst({
          where: { email: 'foo@bar.com' }
        });

        expect(user?.picture).toEqual(validPictureUrl);
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

    describe('/update-my-experience', () => {
      test('PUT returns 200 status code with "success" message and saves experience', async () => {
        const payload = {
          experience: [
            {
              id: '1',
              title: 'Software Engineer',
              company: 'Tech Corp',
              location: 'Remote',
              startDate: '2020-01',
              endDate: '2022-06',
              description: 'Worked on various projects'
            }
          ]
        };

        const response = await superPut('/update-my-experience').send(payload);

        expect(response.body).toEqual({
          message: 'flash.experience-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { experience: true }
        });

        expect(user?.experience).toEqual(payload.experience);
      });

      test('rejects extraneous keys on entries', async () => {
        const res = await superPut('/update-my-experience').send({
          experience: [
            {
              id: 'x',
              title: 'Dev',
              company: 'Co',
              startDate: '',
              description: '',
              foo: 'bar'
            }
          ]
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { experience: true }
        });

        expect(user?.experience).toEqual([
          {
            id: 'x',
            title: 'Dev',
            company: 'Co',
            location: null,
            startDate: '',
            endDate: null,
            description: ''
          }
        ]);
        expect(res.statusCode).toBe(200);
      });

      test('returns 400 when experience is not an array', async () => {
        const response = await superPut('/update-my-experience').send({
          experience: { not: 'an array' } as unknown as []
        });
        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('supports current position (omitted endDate becomes null)', async () => {
        const response = await superPut('/update-my-experience').send({
          experience: [
            {
              id: 'cur',
              title: 'Engineer',
              company: 'Now Co',
              startDate: '2023-01',
              description: ''
              // endDate omitted
            }
          ]
        });

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { experience: true }
        });
        expect(user?.experience?.[0]).toEqual({
          id: 'cur',
          title: 'Engineer',
          company: 'Now Co',
          location: null,
          startDate: '2023-01',
          endDate: null,
          description: ''
        });
      });

      test('accepts long descriptions', async () => {
        const long = 'x'.repeat(1000);
        const response = await superPut('/update-my-experience').send({
          experience: [
            {
              id: '',
              title: 'Writer',
              company: 'Docs Inc',
              startDate: '2020-01',
              endDate: '2020-12',
              description: long
            }
          ]
        });

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { experience: true }
        });
        expect(user?.experience?.[0]?.description).toEqual(long);
      });
      test('PUT accepts empty array and clears experience', async () => {
        // seed with one item first
        await superPut('/update-my-experience').send({
          experience: [
            {
              id: 'seed',
              title: 'Seed Title',
              company: 'Seed Co',
              location: 'Seed City',
              startDate: '2019-01',
              endDate: '2019-12',
              description: 'Seed desc'
            }
          ]
        });

        const response = await superPut('/update-my-experience').send({
          experience: []
        });

        expect(response.body).toEqual({
          message: 'flash.experience-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { experience: true }
        });
        expect(user?.experience).toEqual([]);
      });

      test('PUT saves multiple experiences and preserves order', async () => {
        const payload = {
          experience: [
            {
              id: '1',
              title: 'Junior Dev',
              company: 'A Inc',
              location: 'NY',
              startDate: '2018-01',
              endDate: '2019-01',
              description: 'Did stuff'
            },
            {
              id: '2',
              title: 'Senior Dev',
              company: 'B LLC',
              location: 'SF',
              startDate: '2019-02',
              endDate: '2021-03',
              description: 'Did more stuff'
            }
          ]
        };

        const response = await superPut('/update-my-experience').send(payload);

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { experience: true }
        });
        expect(user?.experience).toEqual(payload.experience);
      });

      test('PUT returns 400 status code when the experience property is missing', async () => {
        const response = await superPut('/update-my-experience').send({});

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns 400 status code when any data is the wrong type', async () => {
        const response = await superPut('/update-my-experience').send({
          experience: [
            {
              id: '',
              title: '',
              company: '',
              location: '',
              startDate: '',
              endDate: '',
              description: ''
            },
            {
              id: '',
              title: {},
              company: '',
              location: '',
              startDate: '',
              endDate: '',
              description: ''
            }
          ]
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });
    });

    describe('/update-my-education', () => {
      test('PUT returns 200 status code with "success" message and saves education', async () => {
        const payload = {
          education: [
            {
              id: '1',
              school: 'MIT',
              degree: 'Bachelor of Science',
              fieldOfStudy: 'Computer Science',
              location: 'Cambridge, MA',
              startDate: '2016-09',
              endDate: '2020-05',
              description: 'Studied computer science and mathematics'
            }
          ]
        };

        const response = await superPut('/update-my-education').send(payload);

        expect(response.body).toEqual({
          message: 'flash.education-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });

        expect(user?.education).toEqual(payload.education);
      });

      test('rejects extraneous keys on entries', async () => {
        const res = await superPut('/update-my-education').send({
          education: [
            {
              id: 'x',
              school: 'Harvard',
              degree: 'PhD',
              foo: 'bar'
            }
          ]
        });

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });

        expect(user?.education).toEqual([
          {
            id: 'x',
            school: 'Harvard',
            degree: 'PhD',
            fieldOfStudy: null,
            location: null,
            startDate: null,
            endDate: null,
            description: null
          }
        ]);
        expect(res.statusCode).toBe(200);
      });

      test('returns 400 when education is not an array', async () => {
        const response = await superPut('/update-my-education').send({
          education: { not: 'an array' } as unknown as []
        });
        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('supports currently enrolled (omitted endDate becomes null)', async () => {
        const response = await superPut('/update-my-education').send({
          education: [
            {
              id: 'cur',
              school: 'Stanford',
              degree: 'Masters',
              startDate: '2023-01'
              // endDate omitted
            }
          ]
        });

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });
        expect(user?.education?.[0]).toEqual({
          id: 'cur',
          school: 'Stanford',
          degree: 'Masters',
          fieldOfStudy: null,
          location: null,
          startDate: '2023-01',
          endDate: null,
          description: null
        });
      });

      test('accepts long descriptions', async () => {
        const long = 'x'.repeat(1000);
        const response = await superPut('/update-my-education').send({
          education: [
            {
              id: '',
              school: 'University',
              degree: 'Doctorate',
              startDate: '2020-01',
              endDate: '2024-12',
              description: long
            }
          ]
        });

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });
        expect(user?.education?.[0]?.description).toEqual(long);
      });

      test('PUT accepts empty array and clears education', async () => {
        // seed with one item first
        await superPut('/update-my-education').send({
          education: [
            {
              id: 'seed',
              school: 'Seed University',
              degree: 'Seed Degree',
              location: 'Seed City',
              startDate: '2019-01',
              endDate: '2019-12',
              description: 'Seed desc'
            }
          ]
        });

        const response = await superPut('/update-my-education').send({
          education: []
        });

        expect(response.body).toEqual({
          message: 'flash.education-updated',
          type: 'success'
        });
        expect(response.statusCode).toEqual(200);

        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });
        expect(user?.education).toEqual([]);
      });

      test('PUT saves multiple education entries and preserves order', async () => {
        const payload = {
          education: [
            {
              id: '1',
              school: 'High School',
              degree: 'Diploma',
              fieldOfStudy: 'General Studies',
              location: 'Hometown',
              startDate: '2012-09',
              endDate: '2016-06',
              description: 'General education'
            },
            {
              id: '2',
              school: 'State University',
              degree: 'Bachelor of Arts',
              fieldOfStudy: 'English',
              location: 'College Town',
              startDate: '2016-09',
              endDate: '2020-05',
              description: 'Liberal arts education'
            }
          ]
        };

        const response = await superPut('/update-my-education').send(payload);

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });
        expect(user?.education).toEqual(payload.education);
      });

      test('PUT returns 400 status code when the education property is missing', async () => {
        const response = await superPut('/update-my-education').send({});

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('PUT returns 400 status code when required fields are wrong type', async () => {
        const response = await superPut('/update-my-education').send({
          education: [
            {
              id: '',
              school: {},
              degree: ''
            }
          ]
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
      });

      test('all fields except id, school, and degree are optional', async () => {
        const response = await superPut('/update-my-education').send({
          education: [
            {
              id: 'minimal',
              school: 'Minimal School',
              degree: 'Minimal Degree'
            }
          ]
        });

        expect(response.statusCode).toEqual(200);
        const user = await fastifyTestInstance.prisma.user.findFirst({
          where: { email: developerUserEmail },
          select: { education: true }
        });
        expect(user?.education?.[0]).toEqual({
          id: 'minimal',
          school: 'Minimal School',
          degree: 'Minimal Degree',
          fieldOfStudy: null,
          location: null,
          startDate: null,
          endDate: null,
          description: null
        });
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

      test('PUT returns 400 status code with invalid classroom mode', async () => {
        const response = await superPut('/update-my-classroom-mode').send({
          isClassroomAccount: 'invalid'
        });

        expect(response.body).toEqual(updateErrorResponse);
        expect(response.statusCode).toEqual(400);
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
  });

  describe('Unauthenticated User', () => {
    let setCookies: string[];

    // Get the CSRF cookies from an unprotected route
    beforeAll(async () => {
      const res = await superRequest('/status/ping', { method: 'GET' });
      setCookies = res.get('Set-Cookie');
    });

    describe('/confirm-email', () => {
      test('redirects to the HOME_LOCATION with flash message', async () => {
        const res = await superRequest('/confirm-email', {
          method: 'GET'
        }).set('Referer', 'https://who.knows/');

        expect(res.status).toBe(302);
        expect(res.headers).toMatchObject({
          location: `http://localhost:8000?${formatMessage({ type: 'info', content: 'Only authenticated users can access this route. Please sign in and try again.' })}`
        });
      });
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
      { path: '/update-my-portfolio', method: 'PUT' },
      { path: '/update-my-experience', method: 'PUT' },
      { path: '/update-my-education', method: 'PUT' }
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
  test.each([
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

  test('returns null when sentAt is null', () => {
    expect(getWaitMessage({ sentAt: null, now: new Date(0) })).toBeNull();
  });
  test('uses the current time when now is not provided', () => {
    expect(getWaitMessage({ sentAt: new Date() })).toEqual(
      'Please wait 5 minutes to resend an authentication link.'
    );
  });
});

describe('validateSocialUrl', () => {
  test.each(['githubProfile', 'linkedin', 'twitter', 'bluesky'] as const)(
    'accepts empty strings for %s',
    social => {
      expect(validateSocialUrl('', social)).toBe(true);
    }
  );

  test.each([
    ['githubProfile', 'https://something.com/user'],
    ['linkedin', 'https://www.x.com/in/username'],
    ['twitter', 'https://www.toomanyexes.com/username'],
    ['bluesky', 'https://www.twitter.com/username']
  ] as const)('rejects invalid urls for %s', (social, url) => {
    expect(validateSocialUrl(url, social)).toBe(false);
  });

  test.each([
    ['githubProfile', 'https://something.github.com/user'],
    ['linkedin', 'https://www.linkedin.com/in/username'],
    ['twitter', 'https://twitter.com/username'],
    ['twitter', 'https://x.com/username'],
    ['bluesky', 'https://bsky.app/profile/username.bsky.social']
  ] as const)('accepts valid urls for %s', (social, url) => {
    expect(validateSocialUrl(url, social)).toBe(true);
  });
});
