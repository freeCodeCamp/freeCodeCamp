/* eslint-disable turbo/no-undeclared-env-vars -- test-only env vars, not build inputs */
/**
 * Minimal repro of api/src/server.ts shutdown mechanics, isolated from the
 * real app (no Mongo, no Sentry, no plugins). Normally driven by
 * shutdown-test.mjs — see that file for the full story — but it can also be
 * run standalone when you want to poke at one configuration by hand:
 *
 *   SHUTDOWN_MODE=naive-exit npx tsx watch --clear-screen=false \
 *     shutdown-test-server.ts.
 *
 * Then `touch` this file from another terminal to trigger a restart, or
 * `kill -TERM <pid>` for a single shutdown. GET / returns the current pid;
 * GET /hang never responds (an active connection for close() to wait on).
 *
 * Env:
 *   SHUTDOWN_MODE  current | naive-exit | pre-pr | no-exit  (default: current)
 *                  pre-pr = naive-exit handler + forceCloseConnections:false,
 *                  i.e. The app as it actually was before PR #66135
 *   POISON_HANDLE  1 to add a stray ref'd interval no hook cleans up
 *   TEST_PORT      port to bind (default 3999)
 *   LOG_BURST      log lines emitted during shutdown (default 20000).
 */
import Fastify from 'fastify';

const MODE = process.env.SHUTDOWN_MODE ?? 'current';
const POISON = process.env.POISON_HANDLE === '1';
const PORT = Number(process.env.TEST_PORT ?? 3999);
const LOG_BURST = Number(process.env.LOG_BURST ?? 20_000);

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: { singleLine: true, colorize: false }
    }
  },
  // 'pre-pr' reproduces the fastify default the app ran with before
  // PR #66135; everything else uses the dev setting from api/src/app.ts
  forceCloseConnections: MODE !== 'pre-pr'
});

fastify.get('/', () => ({ pid: process.pid, mode: MODE }));

// An endpoint that never replies: a held request here is an active
// connection that close() must wait for unless forceCloseConnections
// destroys it. Stands in for the dev client's polling/long requests.
fastify.get('/hang', () => new Promise(() => {}));

if (POISON) {
  // Stand-in for a misbehaving SDK: a ref'd handle that no onClose hook
  // clears. This is the failure mode process.exit() defends against.
  setInterval(() => {}, 2 ** 30);
}

const PAD = 'x'.repeat(120);

const stop = async (signal: NodeJS.Signals) => {
  fastify.log.info({ signal, mode: MODE, pid: process.pid }, 'shutting down');
  // Fill thread-stream's ring buffer so the process-exit flushSync
  // (Atomics.wait) has something to block on — this is what makes the
  // original race reproducible instead of sporadic.
  for (let i = 0; i < LOG_BURST; i++) fastify.log.info(`flush ${i} ${PAD}`);

  if (MODE === 'current') {
    // What api/src/server.ts does today (post-#66135).
    fastify.server.closeAllConnections();
    await new Promise<void>(resolve => {
      fastify.server.close(() => resolve());
    });
    await new Promise<void>(resolve => setImmediate(resolve));
    await fastify.close();
    process.exit(0);
  } else if (MODE === 'naive-exit' || MODE === 'pre-pr') {
    // The pre-#66135 handler that caused EADDRINUSE.
    await fastify.close();
    process.exit(0);
  } else if (MODE === 'no-exit') {
    // Proposed: close everything and let the event loop drain naturally.
    await fastify.close();
  } else {
    throw new Error(`unknown SHUTDOWN_MODE: ${MODE}`);
  }
};

process.on('SIGINT', signal => void stop(signal));
process.on('SIGTERM', signal => void stop(signal));

await fastify.listen({ port: PORT, host: '127.0.0.1' });
