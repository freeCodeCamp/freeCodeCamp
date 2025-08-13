import type { FastifyInstance, FastifyReply } from 'fastify';
import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import type { UpdateReqType } from '../../utils';

import { getClassroom } from '../../schemas';

/**
 * Sample classroom route handler.
 *
 * @param fastify The Fastify instance.
 * @param _options Options passed to the plugin via `fastify.register(plugin,
 * options)`.
 * @param done The callback to signal that the plugin is ready.
 */
export const classroomRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get(
    '/classroom/:id',
    {
      schema: getClassroom,
      attachValidation: true
    },
    getClassroomHandler
  );

  done();
};

async function getClassroomHandler(
  this: FastifyInstance,
  req: UpdateReqType<typeof getClassroom>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  const { id } = req.params;

  if (req.validationError) {
    logger.info(`Invalid classroom id: ${id}`);
    return reply.status(400).send({
      message: 'flash.invalid-classroom-id',
      type: 'info'
    });
  }

  const classroom = await this.prisma.classroom.findUnique({
    where: {
      id
    },
    include: {
      students: {
        select: {
          id: true
        }
      }
    }
  });

  if (!classroom) {
    logger.info(`Classroom ${id} not found`);
    return reply.send({ id: null, students: [] });
  }

  reply.send({ id, students: classroom.students });
}
