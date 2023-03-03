import { FastifyPluginCallback } from 'fastify';

export const testRoutes: FastifyPluginCallback = (fastify, _options, done) => {
  const collection = fastify.mongo.db?.collection('user');

  fastify.addHook('onRequest', (req, res, done) => {
    if (req.session.user === undefined) {
      res.statusCode = 401;
      void res.send({ msg: 'Unauthorized' });
    }
    done();
  });

  fastify.get('/test', async (_request, _reply) => {
    if (!collection) {
      return { error: 'No collection' };
    }
    const user = await collection?.findOne({ email: 'bar@bar.com' });
    return { user };
  });

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
    (req, res) => {
      const {
        body: { quincyEmails }
      } = req;

      const update = {
        acceptedPrivacyTerms: true,
        sendQuincyEmail: !!quincyEmails
      };

      // console.log(req.session.user);

      return collection
        ?.updateOne({ email: 'bar@bar.com' }, { $set: update })
        .then(() => {
          void res.code(200).send({ msg: 'Successfully updated' });
        })
        .catch(err => {
          fastify.log.error(err);
          void res.code(500).send({ msg: 'Something went wrong' });
        });
    }
  );
  done();
};
