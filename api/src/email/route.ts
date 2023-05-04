import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';
import { isPast } from 'date-fns';

let fiveMinuteLimit: Date;

export const settingRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.addHook('onRequest', fastify.authenticateSession);
  fastify.addHook('onResponse', async (_request, _reply) => {
    if (fiveMinuteLimit !== undefined || isPast(fiveMinuteLimit))
      return (fiveMinuteLimit = new Date(new Date().getTime() + 5 * 60 * 1000));
  });

  fastify.put(
    '/update-my-email',
    {
      schema: {
        body: Type.Object({
          email: Type.String({ format: 'email' })
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('flash.email-valid'),
            type: Type.Literal('success')
          }),
          204: Type.Object({
            message: Type.String(),
            type: Type.Literal('info')
          }),
          500: Type.Object({
            message: Type.Literal('flash.wrong-updating'),
            type: Type.Literal('danger')
          })
        }
      }
    },
    async (req, reply) => {
      const userEmail = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: req.session.user.id },
        select: {
          email: true
        }
      });
      const newEmail = req.body.email.toLowerCase();
      const currentEmailFormated = userEmail.email.toLowerCase();
      const isSameEmail = newEmail === currentEmailFormated;
      if (isSameEmail) {
        return {
          type: 'info',
          message: `
                ${newEmail} is already associated with this account.
                You can update a new email address instead.`
        } as const;
      }

      if (!isPast(fiveMinuteLimit)) {
        const formattedLimitedTime = new Intl.DateTimeFormat('en-US', {
          dateStyle: 'full',
          timeStyle: 'long'
        }).format(fiveMinuteLimit);
        return {
          type: 'info',
          message: `
          We have already sent an email confirmation request to ${newEmail}.
          ${formattedLimitedTime}`
        } as const;
      }
      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            email: newEmail
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
  done();
};
