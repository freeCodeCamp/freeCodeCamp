/* eslint-disable jsdoc/require-returns, jsdoc/require-param */
import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { Role } from '@prisma/client';
import {
  FastifySchema,
  type FastifyInstance,
  type FastifyReply
} from 'fastify';
import { UpdateReqType } from '../../utils';

/**
 * Wrapper for endpoints related to classroom mode.
 */
export const classroomRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.post(
    /// body with student ids
    '/classroom/student/invite/:classroomId',
    {
      // Only teachers may invite students
      preHandler: [fastify.authorizeRole(Role.Teacher)]
    },
    inviteStudentsHandler
  );

  fastify.post(
    '/classroom/student/accept/:classroomId',
    {
      // Only students may accept invites - might just automatically assign role of student if not already
      preHandler: [fastify.authorizeRole(Role.Student)]
    },
    acceptClassroomInviteHandler
  );
  done();
};

async function inviteStudentsHandler(
  this: FastifyInstance,
  req: UpdateReqType<FastifySchema>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ user: req.user });

  const a = await this.prisma.user.findUnique({
    where: { id: 'studentId' }
  });

  return reply.send({ a });
}

async function acceptClassroomInviteHandler(
  this: FastifyInstance,
  req: UpdateReqType<FastifySchema>,
  reply: FastifyReply
) {
  const logger = this.log.child({ req });
  logger.info({ user: req.user });

  const a = await this.prisma.user.findUnique({
    where: { id: 'studentId' }
  });

  return reply.send({ a });
}
