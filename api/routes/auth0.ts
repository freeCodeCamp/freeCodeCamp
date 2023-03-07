import { FastifyPluginCallback } from 'fastify';

declare module 'fastify' {
  interface Session {
    user: {
      id: string;
    };
  }
}

export const auth0Routes: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.addHook(
    'onRequest',
    async (req, res) => await fastify.authenticate(req, res)
  );
  const collection = fastify.mongo.db?.collection('user');

  fastify.get('/callback', async (req, _res) => {
    const auth0Res = await fetch(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      `https://${process.env.AUTH0_DOMAIN!}/userinfo`,
      {
        headers: {
          Authorization: req.headers.authorization ?? ''
        }
      }
    );

    if (!auth0Res.ok) {
      fastify.log.error(auth0Res);
      throw new Error('Invalid Auth0 Access Token');
    }

    const { email } = (await auth0Res.json()) as { email: string };
    const user = await collection?.findOne({ email });
    if (user) {
      req.session.user = { id: user._id.toString() };
    } else {
      const DBRes = await collection?.insertOne({ email });
      req.session.user = { id: DBRes?.insertedId.toString() ?? '' };
    }
    await req.session.save();
  });
  done();
};
