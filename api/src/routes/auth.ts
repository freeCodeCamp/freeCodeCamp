import { FastifyPluginCallback, FastifyRequest } from 'fastify';

import { AUTH0_DOMAIN } from '../utils/env';
import { DbUtils } from './helpers/db-utils';

declare module 'fastify' {
  interface Session {
    user: {
      id: string;
    };
  }
}

const getEmailFromAuth0 = async (req: FastifyRequest) => {
  const auth0Res = await fetch(`https://${AUTH0_DOMAIN}/userinfo`, {
    headers: {
      Authorization: req.headers.authorization ?? ''
    }
  });

  if (!auth0Res.ok) {
    req.log.error(auth0Res);
    throw new Error('Invalid Auth0 Access Token');
  }

  const { email } = (await auth0Res.json()) as { email: string };
  return email;
};

export const devLoginCallback: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  const { findOrCreateUser } = new DbUtils(fastify);

  fastify.get('/dev-callback', async req => {
    const email = 'foo@bar.com';

    const { id } = await findOrCreateUser(email);
    req.session.user = { id };
    await req.session.save();
    return { statusCode: 200 };
  });

  done();
};

export const auth0Routes: FastifyPluginCallback = (fastify, _options, done) => {
  const { findOrCreateUser } = new DbUtils(fastify);
  fastify.addHook('onRequest', fastify.authenticate);

  fastify.get('/callback', async req => {
    const email = await getEmailFromAuth0(req);

    const { id } = await findOrCreateUser(email);
    req.session.user = { id };
    await req.session.save();
  });

  done();
};
