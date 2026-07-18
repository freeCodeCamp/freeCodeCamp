import type {
  FastifyReply,
  FastifyRequest,
  HookHandlerDoneFunction
} from 'fastify';

// eslint-disable-next-line jsdoc/require-jsdoc
export const recordHttpMetrics = (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
): void => {
  const metrics = req.server.Sentry?.metrics;
  if (metrics) {
    const attributes = {
      route: req.routeOptions?.url ?? 'unmatched',
      method: req.method,
      statusClass: `${Math.floor(reply.statusCode / 100)}xx`
    };
    metrics.count('http.response', 1, { attributes });
    metrics.distribution('http.request_duration_ms', reply.elapsedTime, {
      unit: 'millisecond',
      attributes
    });
  }
  done();
};
