import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import type { FastifyError, FastifyReply, FastifyRequest } from 'fastify';
import { getMinutes, isBefore, sub } from 'date-fns';
import { isProfane } from 'no-profanity';

import { blocklistedUsernames } from '../../../shared/config/constants';
import { isValidUsername } from '../../../shared/utils/validate';
import { schemas } from '../schemas';

// TODO: move getWaitMessage and getWaitPeriod to own module and add tests
function getWaitMessage(lastEmailSentAt: Date | null) {
  const minutesLeft = getWaitPeriod(lastEmailSentAt);
  if (minutesLeft <= 0) {
    return null;
  }

  const timeToWait = minutesLeft
    ? `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}`
    : 'a few seconds';

  return `Please wait ${timeToWait} to resend an authentication link.`;
}

function getWaitPeriod(lastEmailSentAt: Date | null) {
  if (!lastEmailSentAt) return 0;

  const now = new Date();
  const fiveMinutesAgo = sub(now, { minutes: 5 });
  const isWaitPeriodOver = isBefore(lastEmailSentAt, fiveMinutesAgo);

  return isWaitPeriodOver
    ? 0
    : 5 - (getMinutes(now) - getMinutes(lastEmailSentAt));
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
  // The order matters here, since we want to reject invalid cross site requests
  // before checking if the user is authenticated.
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  function updateErrorHandler(
    error: FastifyError,
    request: FastifyRequest,
    reply: FastifyReply
  ) {
    if (error.validation) {
      void reply.code(400);
      void reply.send({ message: 'flash.wrong-updating', type: 'danger' });
    } else {
      fastify.errorHandler(error, request, reply);
    }
  }

  fastify.put(
    '/update-my-profileui',
    {
      schema: schemas.updateMyProfileUI,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
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
              showTimeLine: req.body.profileUI.showTimeLine
            }
          }
        });

        return {
          message: 'flash.privacy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        // TODO: send to Sentry
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-email',
    {
      schema: schemas.updateMyEmail,
      // We need to customize the responses to validation failures:
      attachValidation: true
    },
    async (req, reply) => {
      if (req.validationError) {
        void reply.code(400);
        return { message: 'Email format is invalid', type: 'danger' } as const;
      }

      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.session.user.id },
        select: {
          email: true,
          emailVerifyTTL: true,
          newEmail: true,
          emailVerified: true,
          emailAuthLinkTTL: true
        }
      });
      const newEmail = req.body.email.toLowerCase();
      const currentEmailFormatted = user.email.toLowerCase();
      const isVerifiedEmail = user.emailVerified;
      const isOwnEmail = newEmail === currentEmailFormatted;
      if (isOwnEmail && isVerifiedEmail) {
        void reply.code(400);
        return {
          type: 'info',
          message: `${newEmail} is already associated with this account.
You can update a new email address instead.`
        } as const;
      }

      const isResendUpdateToSameEmail =
        newEmail === user.newEmail?.toLowerCase();
      const isLinkSentWithinLimitTTL = getWaitMessage(user.emailVerifyTTL);

      if (isResendUpdateToSameEmail && isLinkSentWithinLimitTTL) {
        void reply.code(429);
        return {
          type: 'info',
          message: `We have already sent an email confirmation request to ${newEmail}.
${isLinkSentWithinLimitTTL}`
        } as const;
      }

      const isEmailAlreadyTaken =
        (await fastify.prisma.user.count({ where: { email: newEmail } })) > 0;

      if (isEmailAlreadyTaken && !isOwnEmail) {
        void reply.code(400);
        return {
          type: 'info',
          message: `${newEmail} is already associated with another account.`
        } as const;
      }

      // ToDo(MVP): email the new email and wait user to confirm it, before we update the user schema.
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
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
        const tooManyRequestsMessage = getWaitMessage(user.emailAuthLinkTTL);

        if (tooManyRequestsMessage) {
          void reply.code(429);
          return {
            type: 'info',
            message: tooManyRequestsMessage
          } as const;
        }

        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            emailAuthLinkTTL: new Date()
          }
        });

        return { message: 'flash.email-valid', type: 'success' } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-theme',
    {
      schema: schemas.updateMyTheme,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            theme: req.body.theme
          }
        });

        return {
          message: 'flash.updated-themes',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-socials',
    {
      schema: schemas.updateMySocials,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            website: req.body.website,
            twitter: req.body.twitter,
            githubProfile: req.body.githubProfile,
            linkedin: req.body.linkedin
          }
        });

        return {
          message: 'flash.updated-socials',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
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
          where: { id: req.session.user.id }
        });

        const newUsernameDisplay = req.body.username.trim();
        const oldUsernameDisplay = user.usernameDisplay?.trim();

        const newUsername = newUsernameDisplay.toLowerCase();
        const oldUsername = user.username.toLowerCase();

        const usernameUnchanged =
          newUsername === oldUsername &&
          newUsernameDisplay === oldUsernameDisplay;

        if (usernameUnchanged) {
          void reply.code(400);
          return {
            message: 'flash.username-used',
            type: 'info'
          } as const;
        }

        if (req.validationError) {
          void reply.code(400);
          return {
            message: req.validationError.message,
            type: 'info'
          } as const;
        }

        const validation = isValidUsername(newUsername);

        if (!validation.valid) {
          void reply.code(400);
          return {
            // TODO(Post-MVP): custom validation errors.
            message: `Username ${newUsername} ${validation.error}`,
            type: 'info'
          } as const;
        }

        const isUserNameProfane = isProfane(newUsername);
        const onBlocklist = blocklistedUsernames.includes(newUsername);

        const usernameTaken =
          newUsername === oldUsername
            ? false
            : await fastify.prisma.user.count({
                where: { username: newUsername }
              });

        if (usernameTaken || isUserNameProfane || onBlocklist) {
          void reply.code(400);
          return {
            message: 'flash.username-taken',
            type: 'info'
          } as const;
        }

        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            username: newUsername,
            usernameDisplay: newUsernameDisplay
          }
        });

        return {
          message: 'flash.username-updated',
          type: 'success',
          username: newUsernameDisplay
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );
  fastify.put(
    '/update-my-about',
    {
      schema: schemas.updateMyAbout
    },
    async (req, reply) => {
      const hasProtocol = isPictureWithProtocol(req.body.picture);

      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            about: req.body.about,
            name: req.body.name,
            location: req.body.location,
            ...(hasProtocol && { picture: req.body.picture })
          }
        });

        return {
          message: 'flash.updated-about-me',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-keyboard-shortcuts',
    {
      schema: schemas.updateMyKeyboardShortcuts,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            keyboardShortcuts: req.body.keyboardShortcuts
          }
        });

        return {
          message: 'flash.keyboard-shortcut-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-quincy-email',
    {
      schema: schemas.updateMyQuincyEmail,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            sendQuincyEmail: req.body.sendQuincyEmail
          }
        });

        return {
          message: 'flash.subscribe-to-quincy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-honesty',
    {
      schema: schemas.updateMyHonesty,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            isHonest: req.body.isHonest
          }
        });

        return {
          message: 'buttons.accepted-honesty',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-privacy-terms',
    {
      schema: schemas.updateMyPrivacyTerms,
      errorHandler: updateErrorHandler
    },
    async (req, reply) => {
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            acceptedPrivacyTerms: true,
            sendQuincyEmail: req.body.quincyEmails
          }
        });

        return {
          message: 'flash.privacy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-portfolio',
    {
      schema: schemas.updateMyPortfolio,
      errorHandler: updateErrorHandler
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
          where: { id: req.session.user.id },
          data: {
            portfolio
          }
        });

        return {
          message: 'flash.portfolio-item-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  done();
};
