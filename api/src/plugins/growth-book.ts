import { GrowthBook, Options } from '@growthbook/growthbook';
import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyInstance {
    gb: GrowthBook;
  }
}

const growthBook: FastifyPluginAsync<Options> = async (fastify, options) => {
  const gb = new GrowthBook(options);
  const res = await gb.init({ timeout: 3000 });

  if (res.error) {
    fastify.log.error(
      { error: res.error.message },
      'Failed to initialize GrowthBook'
    );
    fastify.Sentry.captureException(res.error);
  }

  fastify.decorate('gb', gb);

  fastify.addHook('onClose', () => {
    gb.destroy();
  });
};

export default fp(growthBook);
