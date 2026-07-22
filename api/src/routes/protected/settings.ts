import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import type { FastifyError, FastifyInstance } from 'fastify';
import { differenceInMinutes } from 'date-fns';
import validator from 'validator';

import { isValidUsername } from '@freecodecamp/shared/utils/validate';
import * as schemas from '../../schemas.js';
import { createAuthToken, isExpired } from '../../utils/tokens.js';
import { API_LOCATION } from '../../utils/env.js';
import { getRedirectParams } from '../../utils/redirection.js';
import { isRestricted } from '../helpers/is-restricted.js';

type WaitMesssageArgs = {
  sentAt: Date | null;
  now?: Date;
};

/**
 * Get a message to display to the user about how long they need to wait before
 * they can request an authentication link.
 *
 * @param param The parameters.
 * @param param.sentAt The date the last email was sent at.
 * @param param.now The current date.
 * @returns The message to display to the user.
 */
export function getWaitMessage({ sentAt, now = new Date() }: WaitMesssageArgs) {
  const minutesLeft = getWaitPeriod({ sentAt, now });
  if (minutesLeft <= 0) return null;

  const timeToWait = `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}`;
  return `Please wait ${timeToWait} to resend an authentication link.`;
}

function getWaitPeriod({ sentAt, now }: Required<WaitMesssageArgs>) {
  if (sentAt == null) return 0;
  return 5 - differenceInMinutes(now, sentAt);
}

/**
 * Validate an image url.
 *
 * @param picture The url to check.
 * @returns Whether the url is a picture with a valid protocol.
 */
export const isPictureWithProtocol = (picture?: string): boolean => {
  if (!picture) return false;
  try {
    const url = new URL(picture);
    return url.protocol == 'http:' || url.protocol == 'https:';
  } catch {
    return false;
  }
};

const commonImageExtensions = [
  'apng',
  'avif',
  'gif',
  'jpg',
  'jpeg',
  'jfif',
  'pjpeg',
  'pjp',
  'png',
  'svg',
  'webp'
];

/**
 * Validate that a picture URL has a common image extension.
 *
 * @param picture The URL to check.
 * @returns Whether the URL has a common image extension.
 */

const validateImageExtension = (picture?: string): boolean => {
  if (!picture) return true;
  return commonImageExtensions.some(ext => picture.includes(`.${ext}`));
};

/**
 * Validate that a picture URL is valid. A valid picture URL either:
 *  - is empty/undefined (no update), or
 *  - has a valid http/https protocol AND has a common image extension.
 *
 * @param picture The URL to validate.
 * @returns Whether the picture URL is considered valid.
 */
const isValidPictureUrl = (picture?: string): boolean => {
  if (!picture) return true;
  return isPictureWithProtocol(picture) && validateImageExtension(picture);
};

const ALLOWED_DOMAINS_MAP = {
  githubProfile: ['github.com'],
  linkedin: ['linkedin.com'],
  twitter: ['twitter.com', 'x.com'],
  bluesky: ['bsky.app']
};

/**
 * Validate a social URL.
 *
 * @param socialUrl The URL to check.
 * @param key The key of the allowed socials and domains.
 * @returns Whether the URL is valid.
 */
export const validateSocialUrl = (
  socialUrl: string,
  key: keyof typeof ALLOWED_DOMAINS_MAP
): boolean => {
  if (!socialUrl) return true;

  try {
    const url = new URL(socialUrl);
    const domains = ALLOWED_DOMAINS_MAP[key];
    const domainAndTld = url.hostname.split('.').slice(-2).join('.');
    return domains.includes(domainAndTld);
  } catch {
    return false;
  }
};

/**
 * Plugin for all endpoints related to user settings.
 *
 * @param fastify The Fastify instance.
 * @param _options Fastify options I guess?
 * @param done Callback to signal that the logic has completed.
 */
export const settingRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.setErrorHandler((error: FastifyError, request, reply) => {
    if (error.validation) {
      request.log.warn(
        { validationError: error.validation },
        'Request validation failed'
      );
      void reply.code(400);
      void reply.send({ message: 'flash.wrong-updating', type: 'danger' });
    } else {
      throw error;
    }
  });

  fastify.put(
    '/update-my-profileui',
    {
      schema: schemas.updateMyProfileUI
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            profileUI: {
              isLocked: req.body.profileUI.isLocked,
              showAbout: req.body.profileUI.showAbout,
              showCerts: req.body.profileUI.showCerts,
              showDonation: req.body.profileUI.showDonation,
              showHeatMap: req.body.profileUI.showHeatMap,
              showLocation: req.body.profileUI.showLocation,
              showName: req.body.profileUI.showName,
              showPoints: req.body.profileUI.showPoints,
              showPortfolio: req.body.profileUI.showPortfolio,
              showExperience: req.body.profileUI.showExperience,
              showTimeLine: req.body.profileUI.showTimeLine
            }
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'profile_ui' }
        });

        return {
          message: 'flash.privacy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating profileUI');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  function createUpdateEmailText({ email, id }: { email: string; id: string }) {
    const encodedEmail = Buffer.from(email).toString('base64');
    return `Please confirm this email address for freeCodeCamp.org:

${API_LOCATION}/confirm-email?email=${encodedEmail}&token=${id}&emailChange=true

Happy coding!

- The freeCodeCamp.org Team
`;
  }

  fastify.put(
    '/update-my-email',
    {
      schema: schemas.updateMyEmail,
      // We need to customize the responses to validation failures:
      attachValidation: true
    },
    async (req, reply) => {
      if (req.validationError) {
        req.log.warn('Invalid email format');
        void reply.code(400);
        return { message: 'Email format is invalid', type: 'danger' } as const;
      }

      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.user?.id },
        select: {
          id: true,
          email: true,
          emailVerifyTTL: true,
          newEmail: true,
          emailVerified: true,
          emailAuthLinkTTL: true
        }
      });
      const newEmail = req.body.email.toLowerCase();
      const currentEmailFormatted = user.email ? user.email.toLowerCase() : '';
      const isVerifiedEmail = user.emailVerified;
      const isOwnEmail = newEmail === currentEmailFormatted;
      if (isOwnEmail && isVerifiedEmail) {
        req.log.warn(
          'New email address is already associated with this account'
        );
        void reply.code(400);
        return reply.send({
          type: 'info',
          message: `${newEmail} is already associated with this account.
You can update a new email address instead.`
        });
      }

      const isResendUpdateToSameEmail =
        newEmail === user.newEmail?.toLowerCase();
      const isLinkSentWithinLimitTTL = getWaitMessage({
        sentAt: user.emailVerifyTTL
      });

      if (isResendUpdateToSameEmail && isLinkSentWithinLimitTTL) {
        req.log.warn(
          'Email confirmation link has been sent within the last 5 minutes'
        );
        void reply.code(429);
        return reply.send({
          type: 'info',
          message: `We have already sent an email confirmation request to ${newEmail}.
${isLinkSentWithinLimitTTL}`
        });
      }

      const isEmailAlreadyTaken =
        (await fastify.prisma.user.count({ where: { email: newEmail } })) > 0;

      if (isEmailAlreadyTaken && !isOwnEmail) {
        req.log.warn(
          'New email address is already associated with another account'
        );
        void reply.code(400);
        return reply.send({
          type: 'info',
          message: `${newEmail} is already associated with another account.`
        });
      }

      // ToDo(MVP): email the new email and wait user to confirm it, before we update the user schema.
      try {
        await fastify.prisma.user.update({
          where: { id: user.id },
          data: {
            newEmail,
            emailVerified: false,
            emailVerifyTTL: new Date()
          }
        });

        // TODO: combine emailVerifyTTL and emailAuthLinkTTL? I'm not sure why
        // we need emailVeriftyTTL given that the main thing we want is to
        // restrict the rate of attempts and the emailAuthLinkTTL already does
        // that.
        const tooManyRequestsMessage = getWaitMessage({
          sentAt: user.emailAuthLinkTTL
        });

        if (tooManyRequestsMessage) {
          req.log.warn(
            'Email confirmation link has been sent within the last 5 minutes'
          );
          void reply.code(429);
          return reply.send({
            type: 'info',
            message: tooManyRequestsMessage
          });
        }

        // Update the emailAuthLinkTTL to ensure we don't send too many emails.
        await fastify.prisma.user.update({
          where: { id: user.id },
          data: {
            emailAuthLinkTTL: new Date()
          }
        });

        // The auth token is used to confirm that the user owns the email. If
        // the user provides the correct id (by following the link we send
        // them), then we can update the email.
        const { id } = await fastify.prisma.authToken.create({
          data: createAuthToken(user.id),
          select: { id: true }
        });

        await fastify.sendEmail({
          from: 'team@freecodecamp.org',
          to: newEmail,
          subject:
            'Please confirm your updated email address for freeCodeCamp.org',
          text: createUpdateEmailText({ email: newEmail, id })
        });

        fastify.Sentry?.metrics?.count('settings.email_change_requested', 1);

        await reply.send({
          message:
            'Check your email and click the link we sent you to confirm your new email address.',
          type: 'info'
        });
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating email address');
        void reply.code(500);
        await reply.send({ message: 'flash.wrong-updating', type: 'danger' });
      }
    }
  );

  fastify.put(
    '/update-my-theme',
    {
      schema: schemas.updateMyTheme
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            theme: req.body.theme
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'theme' }
        });

        return {
          message: 'flash.updated-themes',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating theme');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-socials',
    {
      schema: schemas.updateMySocials
    },
    async (req, reply) => {
      const socials = {
        twitter: req.body.twitter,
        bluesky: req.body.bluesky,
        githubProfile: req.body.githubProfile,
        linkedin: req.body.linkedin,
        website: req.body.website
      };

      const valid = (
        ['twitter', 'bluesky', 'githubProfile', 'linkedin'] as const
      ).every(key => validateSocialUrl(socials[key], key));

      if (!valid) {
        req.log.warn(
          {
            invalidSocials: (
              ['twitter', 'bluesky', 'githubProfile', 'linkedin'] as const
            ).filter(key => !validateSocialUrl(socials[key], key))
          },
          'Invalid social URL'
        );
        (['twitter', 'bluesky', 'githubProfile', 'linkedin'] as const)
          .filter(key => !validateSocialUrl(socials[key], key))
          .forEach(provider => {
            fastify.Sentry?.metrics?.count('settings.social_url_rejected', 1, {
              attributes: { provider }
            });
          });
        void reply.code(400);
        return reply.send({
          message: 'flash.wrong-updating',
          type: 'danger'
        });
      }

      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            website: socials.website,
            twitter: socials.twitter,
            bluesky: socials.bluesky,
            githubProfile: socials.githubProfile,
            linkedin: socials.linkedin
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'socials' }
        });

        return {
          message: 'flash.updated-socials',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating socials');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-username',
    {
      schema: schemas.updateMyUsername,
      attachValidation: true
    },
    async (req, reply) => {
      try {
        const user = await fastify.prisma.user.findFirstOrThrow({
          where: { id: req.user?.id }
        });

        const newUsernameDisplay = req.body.username.trim();
        const oldUsernameDisplay = user.usernameDisplay?.trim();

        const newUsername = newUsernameDisplay.toLowerCase();
        const oldUsername = user.username.toLowerCase();

        const usernameUnchanged =
          newUsername === oldUsername &&
          newUsernameDisplay === oldUsernameDisplay;

        if (usernameUnchanged) {
          req.log.warn('Username is unchanged');
          fastify.Sentry?.metrics?.count(
            'settings.username_change_rejected',
            1,
            {
              attributes: { reason: 'unchanged' }
            }
          );
          void reply.code(400);
          return {
            message: 'flash.username-used',
            type: 'info'
          } as const;
        }

        if (req.validationError) {
          req.log.warn(
            { username: req.body.username },
            'Bad request. Invalid username supplied'
          );
          void reply.code(400);
          return {
            message: req.validationError.message,
            type: 'info'
          } as const;
        }

        const validation = isValidUsername(newUsername);

        if (!validation.valid) {
          req.log.warn(
            { username: newUsername, validationError: validation.error },
            'Invalid username'
          );
          fastify.Sentry?.metrics?.count(
            'settings.username_change_rejected',
            1,
            {
              attributes: { reason: 'invalid' }
            }
          );
          void reply.code(400);
          return reply.send({
            // TODO(Post-MVP): custom validation errors.
            message: `Username ${newUsername} ${validation.error}`,
            type: 'info'
          });
        }

        const usernameTaken =
          newUsername === oldUsername
            ? false
            : await fastify.prisma.user.count({
                where: { username: newUsername }
              });

        if (usernameTaken || isRestricted(newUsername)) {
          req.log.warn(
            { username: newUsername },
            'Username is taken or restricted'
          );
          fastify.Sentry?.metrics?.count(
            'settings.username_change_rejected',
            1,
            {
              attributes: { reason: 'taken_or_restricted' }
            }
          );
          void reply.code(400);
          return reply.send({
            message: 'flash.username-taken',
            type: 'info'
          });
        }

        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            username: newUsername,
            usernameDisplay: newUsernameDisplay
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'username' }
        });

        return reply.send({
          message: 'flash.username-updated',
          type: 'success',
          variables: { username: newUsernameDisplay }
        });
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating username');
        void reply.code(500);
        await reply.send({ message: 'flash.wrong-updating', type: 'danger' });
      }
    }
  );

  fastify.put(
    '/update-my-about',
    {
      schema: schemas.updateMyAbout
    },
    async (req, reply) => {
      // No need to validate if picture is being deleted.
      if (req.body.picture) {
        if (req.body.picture !== req.user!.picture) {
          if (!isValidPictureUrl(req.body.picture)) {
            req.log.warn(
              {
                hasPicture: !!req.body.picture,
                pictureLength: req.body.picture?.length
              },
              'Invalid picture URL'
            );
            void reply.code(400);
            return { message: 'flash.wrong-updating', type: 'danger' } as const;
          }
        }
      }

      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            about: req.body.about,
            name: req.body.name,
            location: req.body.location,
            picture: req.body.picture
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'about' }
        });

        return {
          message: 'flash.updated-about-me',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating about');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-keyboard-shortcuts',
    {
      schema: schemas.updateMyKeyboardShortcuts
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            keyboardShortcuts: req.body.keyboardShortcuts
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'keyboard_shortcuts' }
        });

        return {
          message: 'flash.keyboard-shortcut-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating keyboard shortcuts');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-quincy-email',
    {
      schema: schemas.updateMyQuincyEmail
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            sendQuincyEmail: req.body.sendQuincyEmail
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'quincy_email' }
        });

        return {
          message: 'flash.subscribe-to-quincy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating Quincy email preference');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-socrates',
    {
      schema: schemas.updateSocrates
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            socrates: req.body.socrates
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'socrates' }
        });

        return {
          message: 'flash.socrates-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating Socrates preference');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-honesty',
    {
      schema: schemas.updateMyHonesty
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            isHonest: req.body.isHonest
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'honesty' }
        });

        return {
          message: 'buttons.accepted-honesty',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating honesty');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-privacy-terms',
    {
      schema: schemas.updateMyPrivacyTerms
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            acceptedPrivacyTerms: true,
            sendQuincyEmail: req.body.quincyEmails
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'privacy_terms' }
        });

        return {
          message: 'flash.privacy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating privacy terms');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-portfolio',
    {
      schema: schemas.updateMyPortfolio
    },
    async (req, reply) => {
      try {
        // TODO(Post-MVP): make all properties required in the schema and use
        // req.body.portfolio directly.
        const portfolio = req.body.portfolio.map(
          ({ id, title, url, description, image }) => ({
            id: id ? id : '',
            title: title ? title : '',
            url: url ? url : '',
            description: description ? description : '',
            image: image ? image : ''
          })
        );
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            portfolio
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'portfolio' }
        });

        return {
          message: 'flash.portfolio-item-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating portfolio');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-experience',
    {
      schema: schemas.updateMyExperience
    },
    async (req, reply) => {
      try {
        const { experience } = req.body;

        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            experience
          }
        });

        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'experience' }
        });

        return {
          message: 'flash.experience-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating experience');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  // See updateMyClassroomMode schema for one-way constraint details.
  fastify.put(
    '/update-my-classroom-mode',
    {
      schema: schemas.updateMyClassroomMode
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.user?.id },
          data: {
            isClassroomAccount: req.body.isClassroomAccount
          }
        });

        fastify.Sentry?.metrics?.count('settings.classroom_mode_toggled', 1, {
          attributes: { enabled: req.body.isClassroomAccount }
        });
        fastify.Sentry?.metrics?.count('settings.updated', 1, {
          attributes: { field: 'classroom_mode' }
        });

        return {
          message: 'flash.classroom-mode-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Error updating classroom mode');
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  done();
};

/**
 * Plugin for endpoints that redirect if the user is not authenticated.
 *
 * @param fastify The Fastify instance.
 * @param _options Options for the plugin.
 * @param done Callback to signal that the logic has completed.
 */
export const settingRedirectRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  const redirectMessage = {
    type: 'danger',
    content:
      'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.'
  } as const;

  const expirationMessage = {
    type: 'info',
    content:
      'The link to confirm your new email address has expired. Please try again.'
  } as const;

  const successMessage = {
    type: 'success',
    content: 'flash.email-valid'
  } as const;

  async function updateEmail(
    fastify: FastifyInstance,
    { id, email }: { id: string; email: string }
  ) {
    await fastify.prisma.user.update({
      where: { id },
      data: {
        email,
        emailAuthLinkTTL: null,
        emailVerified: true,
        emailVerifyTTL: null,
        newEmail: null
      }
    });
  }

  async function deleteAuthToken(
    fastify: FastifyInstance,
    { id }: { id: string }
  ) {
    await fastify.prisma.authToken.delete({
      where: { id }
    });
  }

  fastify.get(
    '/confirm-email',
    {
      schema: schemas.confirmEmail,
      errorHandler(error, request, reply) {
        if (error.validation) {
          request.log.warn(
            { validationError: error.validation },
            'Request validation failed'
          );
          const { origin } = getRedirectParams(request);
          void reply.redirectWithMessage(origin, redirectMessage);
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const email = Buffer.from(req.query.email, 'base64').toString();

      const { origin } = getRedirectParams(req);
      if (!validator.default.isEmail(email)) {
        req.log.warn({ userId: req.user?.id }, 'Invalid email format');
        fastify.Sentry?.metrics?.count('settings.email_confirm_rejected', 1, {
          attributes: { reason: 'invalid_email' }
        });
        return reply.redirectWithMessage(origin, redirectMessage);
      }

      const authToken = await fastify.prisma.authToken.findUnique({
        where: { id: req.query.token }
      });

      if (!authToken) {
        req.log.warn('No token found');
        fastify.Sentry?.metrics?.count('settings.email_confirm_rejected', 1, {
          attributes: { reason: 'no_token' }
        });
        return reply.redirectWithMessage(origin, redirectMessage);
      }

      // TODO(Post-MVP): clean up expired auth tokens.
      if (isExpired(authToken)) {
        req.log.warn('Token expired');
        fastify.Sentry?.metrics?.count('settings.email_confirm_rejected', 1, {
          attributes: { reason: 'expired' }
        });
        return reply.redirectWithMessage(origin, expirationMessage);
      }

      const targetUser = await fastify.prisma.user.findUnique({
        where: { id: authToken.userId }
      });

      if (targetUser?.id !== req.user?.id) {
        req.log.warn('Target user does not match signed in user');
        fastify.Sentry?.metrics?.count('settings.email_confirm_rejected', 1, {
          attributes: { reason: 'user_mismatch' }
        });
        return reply.redirectWithMessage(origin, redirectMessage);
      }

      if (targetUser?.newEmail !== email) {
        fastify.Sentry?.metrics?.count('settings.email_confirm_rejected', 1, {
          attributes: { reason: 'email_mismatch' }
        });
        return reply.redirectWithMessage(origin, redirectMessage);
      }

      // TODO(Post-MVP): clean up any other auth tokens for this user once
      // the email is confirmed.
      await Promise.all([
        updateEmail(fastify, { id: targetUser.id, email }),
        deleteAuthToken(fastify, { id: authToken.id })
      ]);

      fastify.Sentry?.metrics?.count('settings.email_confirmed', 1);

      return reply.redirectWithMessage(origin, successMessage);
    }
  );

  done();
};
