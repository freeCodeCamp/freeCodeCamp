import './instrument.js';

import { build, buildOptions } from './app.js';
import { HOST, PORT } from './utils/env.js';

const start = async () => {
  const fastify = await build(buildOptions);

  const stop = async (signal: NodeJS.Signals) => {
    fastify.log.info(`Received ${signal}, shutting down.`);

    fastify.server.closeAllConnections();
    await new Promise<void>(resolve => {
      fastify.server.close(() => resolve());
    });

    // Yield one tick so libuv can finalize uv_close() on the TCP handle
    // before pino's autoEnd blocks the event loop via Atomics.wait().
    await new Promise<void>(resolve => setImmediate(resolve));

    await fastify.close();
    process.exit(0);
  };

  process.on('SIGINT', signal => void stop(signal));
  process.on('SIGTERM', signal => void stop(signal));

  try {
    await fastify.listen({ port: Number(PORT), host: HOST });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

void start();
