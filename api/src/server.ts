import './instrument.js';

import os from 'node:os';

import * as Sentry from '@sentry/node';
import { build, buildOptions } from './app.js';
import {
  DEPLOYMENT_VERSION,
  HOST,
  PORT,
  SENTRY_SERVER_NAME
} from './utils/env.js';

const start = async () => {
  let fastify: Awaited<ReturnType<typeof build>> | undefined;

  try {
    fastify = await build(buildOptions);

    const stop = async (signal: NodeJS.Signals) => {
      fastify!.log.info({ signal }, 'Received signal, shutting down');

      fastify!.server.closeAllConnections();
      await new Promise<void>(resolve => {
        fastify!.server.close(() => resolve());
      });

      // Yield one tick so libuv can finalize uv_close() on the TCP handle
      // before pino's autoEnd blocks the event loop via Atomics.wait().
      await new Promise<void>(resolve => setImmediate(resolve));

      await fastify!.close();
      Sentry.metrics.count('server.shutdown_completed', 1, {
        attributes: { signal }
      });
      await fastify!.Sentry.close(2000);
      process.exit(0);
    };

    process.on('SIGINT', signal => void stop(signal));
    process.on('SIGTERM', signal => void stop(signal));

    const address = await fastify.listen({ port: Number(PORT), host: HOST });
    fastify.log.info(
      {
        audit: true,
        version: DEPLOYMENT_VERSION,
        instanceId: SENTRY_SERVER_NAME ?? os.hostname(),
        address
      },
      'API server started'
    );
    Sentry.metrics.count('server.boot', 1, {
      attributes: { result: 'success' }
    });
  } catch (err) {
    if (fastify) {
      fastify.log.error(err, 'Failed to start server');
    } else {
      console.error('Failed to start server', err);
    }
    Sentry.metrics.count('server.boot', 1, {
      attributes: { result: 'failure' }
    });
    Sentry.captureException(err);
    await (fastify?.Sentry ?? Sentry).close(2000);
    process.exit(1);
  }
};

void start();
