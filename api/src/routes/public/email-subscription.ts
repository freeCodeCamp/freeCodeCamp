import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import * as schemas from '../../schemas.js';
import { getRedirectParams } from '../../utils/redirection.js';

/**
 * Endpoints to set 'sendQuincyEmail' to true or false using 'unsubscribeId'.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const emailSubscribtionRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/ue/:unsubscribeId',
    {
      schema: schemas.unsubscribe,
      errorHandler(error, request, reply) {
        if (error.validation) {
          const { origin } = getRedirectParams(request);
          void reply.code(302);
          void reply.redirectWithMessage(origin, {
            type: 'info',
            content: 'We could not find an account to unsubscribe.'
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const { origin } = getRedirectParams(req);
      const { unsubscribeId } = req.params;

      try {
        const unsubUsers = await fastify.prisma.user.findMany({
          where: { unsubscribeId }
        });

        if (!unsubUsers.length) {
          req.log.warn('No users found for unsubscribe request');
          fastify.Sentry?.metrics?.count('email_subscription.unsubscribed', 1, {
            attributes: { result: 'not_found' }
          });
          void reply.code(302);
          return reply.redirectWithMessage(origin, {
            type: 'info',
            content: 'We could not find an account to unsubscribe.'
          });
        }

        const userUpdatePromises = unsubUsers.map(user =>
          fastify.prisma.user.updateMany({
            where: { email: user.email },
            data: {
              sendQuincyEmail: false
            }
          })
        );

        await Promise.all(userUpdatePromises);
        req.log.info(
          { matchedUsers: unsubUsers.length, audit: true },
          'Successfully unsubscribed users from email'
        );
        fastify.Sentry?.metrics?.count('email_subscription.unsubscribed', 1, {
          attributes: { result: 'success' }
        });

        return reply.redirectWithMessage(
          `${origin}/unsubscribed/${unsubscribeId}`,
          {
            type: 'success',
            content: "We've successfully updated your email preferences."
          }
        );
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Failed to unsubscribe user from email');
        fastify.Sentry?.metrics?.count('email_subscription.unsubscribed', 1, {
          attributes: { result: 'error' }
        });
        void reply.code(302);
        return reply.redirectWithMessage(origin, {
          type: 'danger',
          content: `Failed to unsubscribe user, please contact support at support@freecodecamp.org`
        });
      }
    }
  );

  fastify.get(
    '/resubscribe/:unsubscribeId',
    {
      schema: schemas.resubscribe,
      errorHandler(error, request, reply) {
        if (error.validation) {
          const { origin } = getRedirectParams(request);
          void reply.code(302);
          void reply.redirectWithMessage(origin, {
            type: 'info',
            content:
              'We were unable to process this request, please check and try again.'
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      const { origin } = getRedirectParams(req);
      const { unsubscribeId } = req.params;

      try {
        const user = await fastify.prisma.user.findFirst({
          where: { unsubscribeId }
        });

        if (!user) {
          req.log.warn('No user found for resubscribe request');
          fastify.Sentry?.metrics?.count('email_subscription.resubscribed', 1, {
            attributes: { result: 'not_found' }
          });
          void reply.code(302);
          return reply.redirectWithMessage(origin, {
            type: 'info',
            content: 'We could not find an account to resubscribe.'
          });
        }

        req.log.debug({ userId: user.id }, 'Found user to resubscribe');
        await fastify.prisma.user.update({
          where: { id: user.id },
          data: {
            sendQuincyEmail: true
          }
        });
        req.log.info(
          { userId: user.id, audit: true },
          'Successfully resubscribed user'
        );
        fastify.Sentry?.metrics?.count('email_subscription.resubscribed', 1, {
          attributes: { result: 'success' }
        });

        return reply.redirectWithMessage(origin, {
          type: 'success',
          content:
            "We've successfully updated your email preferences. Thank you for resubscribing."
        });
      } catch (err) {
        fastify.Sentry?.captureException(err);
        req.log.error(err, 'Failed to resubscribe user to email');
        fastify.Sentry?.metrics?.count('email_subscription.resubscribed', 1, {
          attributes: { result: 'error' }
        });
        void reply.code(302);
        return reply.redirectWithMessage(origin, {
          type: 'danger',
          content: 'Something went wrong.'
        });
      }
    }
  );

  done();
};
