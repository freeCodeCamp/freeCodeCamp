import { build } from './app';

import { FREECODECAMP_NODE_ENV, PORT } from './utils/env';

const envToLogger = {
  development: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname'
      }
    },
    level: 'debug'
  },
  // TODO: is this the right level for production or should we use 'error'?
  production: { level: 'fatal' },
  test: undefined
};

const start = async () => {
  const fastify = await build({ logger: envToLogger[FREECODECAMP_NODE_ENV] });
  try {
    const port = Number(PORT);
    fastify.log.info(`Starting server on port ${port}`);
    await fastify.listen({ port });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
