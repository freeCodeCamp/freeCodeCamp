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
            message: Type.Literal('flash.privacy-updated'),
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
          message: 'flash.privacy-updated',
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

  fastify.put(
    '/update-my-theme',
    {
      schema: {
        body: Type.Object({
          theme: Type.Union([Type.Literal('default'), Type.Literal('night')])
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('flash.updated-themes'),
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
            theme: req.body.theme
          }
        });

        return {
          message: 'flash.updated-themes',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-keyboard-shortcuts',
    {
      schema: {
        body: Type.Object({
          keyboardShortcuts: Type.Boolean()
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('flash.keyboard-shortcut-updated'),
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
            keyboardShortcuts: req.body.keyboardShortcuts
          }
        });

        return {
          message: 'flash.keyboard-shortcut-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-quincy-email',
    {
      schema: {
        body: Type.Object({
          sendQuincyEmail: Type.Boolean()
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('flash.subscribe-to-quincy-updated'),
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
            sendQuincyEmail: req.body.sendQuincyEmail
          }
        });

        return {
          message: 'flash.subscribe-to-quincy-updated',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );

  fastify.put(
    '/update-my-honesty',
    {
      schema: {
        body: Type.Object({
          isHonest: Type.Literal(true)
        }),
        response: {
          200: Type.Object({
            message: Type.Literal('buttons.accepted-honesty'),
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
            isHonest: req.body.isHonest
          }
        });

        return {
          message: 'buttons.accepted-honesty',
          type: 'success'
        } as const;
      } catch (err) {
        fastify.log.error(err);
        void reply.code(500);
        return { message: 'flash.wrong-updating', type: 'danger' } as const;
      }
    }
  );
  done();
};
