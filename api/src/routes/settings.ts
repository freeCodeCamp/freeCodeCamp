import {
  Type,
  type FastifyPluginCallbackTypebox
} from '@fastify/type-provider-typebox';

export const settingRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.put(
    '/update-my-profileui',
    {
      schema: {
        body: Type.Object({
          profileUI: Type.Object({
            isLocked: Type.Boolean(),
            showAbout: Type.Boolean(),
            showCerts: Type.Boolean(),
            showDonation: Type.Boolean(),
            showHeatMap: Type.Boolean(),
            showLocation: Type.Boolean(),
            showName: Type.Boolean(),
            showPoints: Type.Boolean(),
            showPortfolio: Type.Boolean(),
            showTimeLine: Type.Boolean()
          })
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('flash.updated-preferences'),
            type: Type.Literal('success')
          }),
          500: Type.Object({
            message: Type.Literal('flash.wrong-updating'),
            type: Type.Literal('danger')
          })
        }
      }
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
          message: 'flash.updated-preferences',
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

  done();
};
