import { FastifyPluginCallback } from 'fastify';

import fp from 'fastify-plugin';
import { HOME_LOCATION } from '../utils/env';

// import { FREECODECAMP_NODE_ENV } from '../utils/env';

const allowedOrigins = [
  'https://www.freecodecamp.dev',
  'https://www.freecodecamp.org',
  'https://beta.freecodecamp.dev',
  'https://beta.freecodecamp.org',
  'https://chinese.freecodecamp.dev',
  'https://chinese.freecodecamp.org'
];

const cors: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.addHook('onRequest', async (req, reply) => {
    const origin = req.headers.origin;
    if (origin && allowedOrigins.includes(origin)) {
      void reply.header('Access-Control-Allow-Origin', origin);
    } else {
      // TODO: Discuss if this is the correct approach. Standard practice is to
      // reflect one of a list of allowed origins and handle development
      // separately. If we switch to that approach we can replace use
      // @fastify/cors instead.
      void reply.header('Access-Control-Allow-Origin', HOME_LOCATION);
    }

    void reply
      .header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
      )
      .header('Access-Control-Allow-Credentials', true);
  });

  done();
};

export default fp(cors);
