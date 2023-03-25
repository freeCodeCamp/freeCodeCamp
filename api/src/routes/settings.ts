import type { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { Type } from '@sinclair/typebox';

export const settingRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
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
        })
      }
    },
    async req => {
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
      } catch (err) {
        fastify.log.error(err);
      }
    }
  );

  done();
};
