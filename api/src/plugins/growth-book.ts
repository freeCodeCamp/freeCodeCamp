import { GrowthBook, Options } from '@growthbook/growthbook';
import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

import { FREECODECAMP_NODE_ENV } from '../utils/env';

declare module 'fastify' {
  interface FastifyInstance {
    gb: GrowthBook;
  }
}

const growthBook: FastifyPluginAsync<Options> = async (fastify, options) => {
  const gb = new GrowthBook(options);
  const res = await gb.init({ timeout: 3000 });

  if (res.error && FREECODECAMP_NODE_ENV === 'production') {
    fastify.log.error(res.error, 'Failed to initialize GrowthBook');
    fastify.Sentry.captureException(res.error);
  }

  fastify.decorate('gb', gb);

  fastify.addHook('onClose', () => {
    gb.destroy();
  });
};

export default fp(growthBook);
