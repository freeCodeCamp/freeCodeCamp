import { FastifyPluginCallback } from 'fastify';

export const testRoutes: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.addHook('onRequest', fastify.authenticateSession);

  fastify.put<{ Body: { quincyEmails: boolean } }>(
    '/update-privacy-terms',
    {
      schema: {
        body: {
          type: 'object',
          required: ['quincyEmails'],
          properties: {
            quincyEmails: { type: 'boolean' }
          }
        }
      }
    },
    async req => {
      const {
        body: { quincyEmails }
      } = req;

      try {
        await fastify.prisma.user.update({
          where: { id: req.session.user.id },
          data: { acceptedPrivacyTerms: true, sendQuincyEmail: quincyEmails }
        });
        return { msg: 'Successfully updated' };
      } catch (err) {
        fastify.log.error(err);
        throw { msg: 'Something went wrong' };
      }
    }
  );
  done();
};
