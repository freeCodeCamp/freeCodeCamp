import './instrument';

import { build, buildOptions } from './app';
import { HOST, PORT } from './utils/env';

const start = async () => {
  const fastify = await build(buildOptions);

  const stop = async (signal: NodeJS.Signals) => {
    fastify.log.info(`Received ${signal}, shutting down.`);
    await fastify.close();
    fastify.log.info('Shutdown complete');
    process.exit(0);
  };

  process.on('SIGINT', signal => void stop(signal));
  process.on('SIGTERM', signal => void stop(signal));

  try {
    const port = Number(PORT);
    fastify.log.info(`Starting server on port ${port}`);
    await fastify.listen({ port, host: HOST });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
