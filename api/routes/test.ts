import { FastifyInstance, FastifyRequest } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await
export async function testRoutes(fastify: FastifyInstance) {
  const collection = fastify?.mongo?.db?.collection('user');

  fastify.get('/test', async (_request, _reply) => {
    if (!collection) {
      return { error: 'No collection' };
    }
    const user = await collection?.findOne({ email: 'bar@bar.com' });
    return { user };
  });

  fastify.put(
    '/update-privacy-terms',
    {
      preHandler: [
        function (
          req: FastifyRequest<{ Body: { quincyEmails: boolean } }>,
          _res,
          done
        ) {
          req.jwtAuthz(['write:user'], done);
        }
      ],
      schema: {
        body: {
          required: ['quincyEmails'],
          properties: {
            quincyEmails: { type: 'boolean' }
          }
        }
      }
    },
    (req, res) => {
      const {
        user,
        body: { quincyEmails }
      } = req;

      const update = {
        acceptedPrivacyTerms: true,
        sendQuincyEmail: !!quincyEmails
      };

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
}
