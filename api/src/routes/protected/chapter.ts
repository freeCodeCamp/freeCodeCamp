import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import * as schemas from '../../schemas';

/**
 * Plugin for the chapter submission endpoints.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin, options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const chapterRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    '/chapter-completed',
    {
      schema: schemas.chapterCompleted,
      errorHandler(error, request, reply) {
        if (error.validation) {
          void reply.code(400);
          return {
            type: 'error',
            message: 'That does not appear to be a valid chapter submission.'
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
          completedChapters: true,
          progressTimestamps: true
        }
      });

      const alreadyCompletedChapter = user.completedChapters.find(
        ({ id: chapterId }) => chapterId === id
      );

      if (alreadyCompletedChapter) {
        return {
          alreadyCompleted: true,
          completedDate: alreadyCompletedChapter.completedDate
        };
      }

      const completedChapter = {
        id,
        completedDate: Date.now()
      };

      await fastify.prisma.user.update({
        where: { id: user.id },
        data: {
          completedChapters: [...user.completedChapters, completedChapter]
        }
      });

      return {
        alreadyCompleted: false,
        completedDate: completedChapter.completedDate
      };
    }
  );

  done();
};
