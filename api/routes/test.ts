import { ObjectId } from '@fastify/mongodb';
import { FastifyPluginCallback } from 'fastify';

export const testRoutes: FastifyPluginCallback = (fastify, _options, done) => {
  const collection = fastify.mongo.db?.collection('user');

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
    (req, res) => {
      const {
        body: { quincyEmails }
      } = req;

      const update = {
        acceptedPrivacyTerms: true,
        sendQuincyEmail: !!quincyEmails
      };

      const userId = new ObjectId(req.session.user.id);

      return collection
        ?.updateOne({ _id: userId }, { $set: update })
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
