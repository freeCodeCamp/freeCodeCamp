import { GrowthBook, Options } from '@growthbook/growthbook';
import { FastifyPluginAsync } from 'fastify';
import fp from 'fastify-plugin';

const growthBook: FastifyPluginAsync<Options> = async (fastify, options) => {
  const gb = new GrowthBook(options);
  await gb.init({ timeout: 3000 });

  fastify.decorate('gb', gb);

  fastify.addHook('onClose', () => {
    gb.destroy();
  });
};

export default fp(growthBook);
