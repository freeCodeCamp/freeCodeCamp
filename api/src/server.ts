import './instrument';

import { build, buildOptions } from './app';
import { HOST, PORT } from './utils/env';

const start = async () => {
  const fastify = await build(buildOptions);
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
