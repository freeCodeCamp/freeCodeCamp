/* eslint-disable @typescript-eslint/naming-convention */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { schemas } from '../schemas';
import { HOME_LOCATION } from '../utils/env';

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
          void reply.code(302);
          // todo: origin? home? look at old API
          // probably switch to use origin so they get redirected to i18n
          void reply.redirectWithMessage(HOME_LOCATION, {
            type: 'info',
            content: 'We could not find an account to unsubscribe.'
          });
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async (req, reply) => {
      try {
        const { unsubscribeId } = req.params;
        const users = await fastify.prisma.user.findMany({
          where: { unsubscribeId }
        });

        if (!users.length) {
          void reply.code(302);
          return reply.redirectWithMessage(HOME_LOCATION, {
            type: 'info',
            content: 'We could not find an account to unsubscribe.'
          });
        }

        for (const user of users) {
          await fastify.prisma.user.update({
            where: { id: user.id },
            data: {
              sendQuincyEmail: false
            }
          });
        }

        return reply.redirectWithMessage(
          `${HOME_LOCATION}/unsubscribed/${unsubscribeId}`,
          {
            type: 'success',
            content: "We've successfully updated your email preferences."
          }
        );
      } catch (error) {
        fastify.log.error(error);
        void reply.code(302);
        return reply.redirectWithMessage(HOME_LOCATION, {
          type: 'danger',
          content: 'Something went wrong.'
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
          void reply.code(302);
          void reply.redirectWithMessage(HOME_LOCATION, {
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
      try {
        const { unsubscribeId } = req.params;
        const users = await fastify.prisma.user.findMany({
          where: { unsubscribeId }
        });

        if (!users.length) {
          void reply.code(302);
          return reply.redirectWithMessage(HOME_LOCATION, {
            type: 'info',
            content: 'We could not find an account to resubscribe.'
          });
        }

        await fastify.prisma.user.update({
          where: { id: users[0]?.id },
          data: {
            sendQuincyEmail: true
          }
        });

        return reply.redirectWithMessage(HOME_LOCATION, {
          type: 'success',
          content:
            "We've successfully updated your email preferences. Thank you for resubscribing."
        });
      } catch (error) {
        fastify.log.error(error);
        void reply.code(302);
        return reply.redirectWithMessage(HOME_LOCATION, {
          type: 'danger',
          content: 'Something went wrong.'
        });
      }
    }
  );

  done();
};
