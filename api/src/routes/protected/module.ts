import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { ProgressTimestamp, getPoints } from '../../utils/progress';
import * as schemas from '../../schemas';

/**
 * Plugin for the module submission endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const moduleRoutes: FastifyPluginCallbackTypebox = (
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

      const alreadyCompletedModule = user.completedModules.find(
        ({ id: moduleId }) => moduleId === id
      );

      if (alreadyCompletedModule) {
        return {
          alreadyCompleted: true,
          completedDate: alreadyCompletedModule.completedDate,
          points: getPoints(user.progressTimestamps as ProgressTimestamp[])
        };
      }

      const completedModule = {
        id,
        completedDate: Date.now()
      };

      const newProgressTimestamps = [
        ...(user.progressTimestamps as ProgressTimestamp[]),
        completedModule.completedDate
      ];

      await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
          completedModules: [...user.completedModules, completedModule],
          progressTimestamps: newProgressTimestamps
        }
      });

      return {
        alreadyCompleted: false,
        completedDate: completedModule.completedDate,
        points: getPoints(newProgressTimestamps)
      };
    }
  );

  done();
};
