import {
  FastifyInstance,
  FastifyPluginCallback,
  FastifyRequest
} from 'fastify';

import { defaultUser } from '../utils/default-user';
import { AUTH0_DOMAIN } from '../utils/env';

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

const findOrCreateUser = async (fastify: FastifyInstance, email: string) => {
  // TODO: handle the case where there are multiple users with the same email.
  // e.g. use findMany and throw an error if more than one is found.
  const existingUser = await fastify.prisma.user.findFirst({
    where: { email },
    select: { id: true }
  });
  return (
    existingUser ??
    (await fastify.prisma.user.create({
      data: { ...defaultUser, email },
      select: { id: true }
    }))
  );
};

/**
 * Route handler for development login. This is only used in local
 * development, and bypasses Auth0, authenticating as the development
 * user.
 *
 * @param fastify The Fastify instance.
 * @param _options Fastify options I guess?
 * @param done Callback to signal that the logic has completed.
 */
// TODO: 1) use POST 2) make sure we prevent login CSRF
export const devLoginCallback: FastifyPluginCallback = (
  fastify,
  _options,
  done
) => {
  fastify.get('/dev-callback', async req => {
    const email = 'foo@bar.com';

    const { id } = await findOrCreateUser(fastify, email);
    req.session.user = { id };
    await req.session.save();
    return { statusCode: 200 };
  });

  done();
};

/**
 * Route handler for Auth0 authentication.
 *
 * @param fastify The Fastify instance.
 * @param _options Fastify options I guess?
 * @param done Callback to signal that the logic has completed.
 */
// TODO: 1) use POST 2) make sure we prevent login CSRF
export const auth0Routes: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.addHook('onRequest', fastify.authenticate);

  fastify.get('/callback', async req => {
    const email = await getEmailFromAuth0(req);

    const { id } = await findOrCreateUser(fastify, email);
    req.session.user = { id };
    await req.session.save();
  });

  done();
};
