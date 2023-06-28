import { type FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';

import { schemas } from '../schemas';

export const userRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fastify.addHook('onRequest', fastify.csrfProtection);
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.post(
    '/account/delete',
    {
      schema: schemas.deleteMyAccount
    },
    async (req, reply) => {
      try {
        await fastify.prisma.userToken.deleteMany({
          where: { userId: req.session.user.id }
        });
        await fastify.prisma.user.delete({
          where: { id: req.session.user.id }
        });
        await req.session.destroy();
        void reply.clearCookie('sessionId');

        return {};
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return {
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.',
          type: 'danger'
        };
      }
    }
  );

  fastify.post(
    '/account/reset-progress',
    {
      schema: schemas.resetMyProgress
    },
    async (req, reply) => {
      try {
        await fastify.prisma.userToken.deleteMany({
          where: { userId: req.session.user.id }
        });
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: {
            progressTimestamps: [Date.now()],
            currentChallengeId: '',
            isRespWebDesignCert: false,
            is2018DataVisCert: false,
            isFrontEndLibsCert: false,
            isJsAlgoDataStructCert: false,
            isApisMicroservicesCert: false,
            isInfosecQaCert: false,
            isQaCertV7: false,
            isInfosecCertV7: false,
            is2018FullStackCert: false,
            isFrontEndCert: false,
            isBackEndCert: false,
            isDataVisCert: false,
            isFullStackCert: false,
            isSciCompPyCertV7: false,
            isDataAnalysisPyCertV7: false,
            isMachineLearningPyCertV7: false,
            isRelationalDatabaseCertV8: false,
            isCollegeAlgebraPyCertV8: false,
            completedChallenges: [],
            savedChallenges: [],
            partiallyCompletedChallenges: [],
            needsModeration: false
          }
        });

        return {};
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return {
          message:
            'Oops! Something went wrong. Please try again in a moment or contact support@freecodecamp.org if the error persists.',
          type: 'danger'
        };
      }
    }
  );

  done();
};
