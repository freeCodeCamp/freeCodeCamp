import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { uniqBy } from 'lodash';
import { CompletedModule } from '@prisma/client';

import * as schemas from '../../schemas';

/**
 * Plugin for the challenge submission endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const challengeRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/module-completed',
    {
      schema: schemas.moduleCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return {
            type: 'error',
            message: 'That does not appear to be a valid module submission.'
          };
        } else {
          fastify.errorHandler(error, request, reply);
        }
      }
    },
    async req => {
      const { id } = req.body;
      const userId = req.user?.id;

      const user = await fastify.prisma.user.findUniqueOrThrow({
        where: { id: userId },
        select: {
          id: true,
          completedModules: true,
          progressTimestamps: true
        }
      });

      const alreadyCompleted = user.completedModules.find(
        ({ id: existingId }) => existingId === id
      );

      if (alreadyCompleted) {
      }

      const progressTimestamp = user.progressTimestamps as
        | ProgressTimestamp[]
        | null;
      const points = getPoints(progressTimestamp);

      const completedModule: CompletedModule = {
        id,
        completedDate: Date.now()
      };

      await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
          completedModules: userCompletedChallenges,
          progressTimestamps: [
            ...progressTimestamp,
            completedModule.completedDate
          ]
        }
      });

      return {
        alreadyCompleted,
        completedDate: completedModule.completedDate,
        points: alreadyCompleted ? points : points + 1
      };
    }
  );

  done();
};
