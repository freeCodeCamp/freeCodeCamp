import { monitorEventLoopDelay } from 'node:perf_hooks';
import type { FastifyPluginCallback } from 'fastify';
import fp from 'fastify-plugin';

const SAMPLE_INTERVAL_MS = 15_000;

const runtimeMetrics: FastifyPluginCallback = (fastify, _options, done) => {
  const loopDelay = monitorEventLoopDelay({ resolution: 20 });
  loopDelay.enable();

  const timer = setInterval(() => {
    fastify.Sentry?.metrics?.gauge(
      'runtime.memory_rss_bytes',
      process.memoryUsage().rss,
      { unit: 'byte' }
    );
    fastify.Sentry?.metrics?.gauge(
      'runtime.event_loop_delay_p99_ms',
      loopDelay.percentile(99) / 1e6,
      { unit: 'millisecond' }
    );
    loopDelay.reset();
  }, SAMPLE_INTERVAL_MS);
  timer.unref();

  fastify.addHook('onClose', (_instance, hookDone) => {
    clearInterval(timer);
    loopDelay.disable();
    hookDone();
  });

  done();
};

export default fp(runtimeMetrics, { name: 'runtime-metrics' });
