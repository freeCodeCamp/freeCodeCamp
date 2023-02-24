import { FastifyPluginCallback } from 'fastify';
import { UserObject } from '../plugins/fastify-jwt-authz';

export const auth0Routes: FastifyPluginCallback = (fastify, _options, done) => {
  void fastify.addHook(
    'onRequest',
    async (req, res) => await fastify.authenticate(req, res)
  );
  const collection = fastify.mongo.db?.collection('user');

  fastify.get('/callback', async (req, _res) => {
    const authUser = req.user as UserObject;
    const auth0Res = await fetch(
      `https://${process.env.AUTH0_DOMAIN!}/userinfo`,
      {
        headers: {
          Authorization: req.headers.authorization!
        }
      }
    );

    if (!auth0Res.ok) {
      console.log(auth0Res);
      throw new Error('Invalid Auth0 Access Token');
    }

    const { email } = (await auth0Res.json()) as { email: string };
    const user = await collection?.findOne({ email });

    return { user };
  });
  done();
};
