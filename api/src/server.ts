// We need to use the triple-slash directive to ensure that ts-node uses the
// reset.d.ts file. It's not possible to import the file directly because it
// is not included in the build (it's a dev dependency).
// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./reset.d.ts" />
import { build } from './app';
import { FREECODECAMP_NODE_ENV, HOST, PORT } from './utils/env';

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
    await fastify.listen({ port, host: HOST });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
