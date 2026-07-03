import type { Log } from '@sentry/node';

const DROPPED_LOG_MESSAGES = new Set([
  'incoming request',
  'request completed',
  'stream closed prematurely'
]);

// Hot / health routes whose routine info+debug chatter is filtered out of
// Sentry entirely (replaces the old per-route sample rates). warn/error/fatal
// on these routes is still forwarded.
const DROPPED_LOG_ROUTES = new Set(['/user/session-user', '/status/ping']);

const routeOf = (log: Log): string | undefined =>
  typeof log.attributes?.route === 'string' ? log.attributes.route : undefined;

const traceIdOf = (log: Log): string | undefined =>
  typeof log.attributes?.traceId === 'string'
    ? log.attributes.traceId
    : undefined;

const traceIsSampled = (log: Log): boolean =>
  log.attributes?.traceSampled === true;

const hashUnit = (value: string): number => {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) / 2 ** 32;
};

const shouldSendDebug = (log: Log, debugRate: number): boolean => {
  const route = routeOf(log);
  if (route !== undefined && DROPPED_LOG_ROUTES.has(route)) return false;
  if (traceIsSampled(log)) return true;
  const traceId = traceIdOf(log);
  const roll = traceId !== undefined ? hashUnit(traceId) : Math.random();
  return roll < debugRate;
};

/**
 * Build the beforeSendLog filter. Warn, error and fatal always pass. Info
 * passes unless it is on a hot or health route. Debug is trace-aware: it is
 * kept in full for a sampled trace, otherwise sampled deterministically by
 * trace id at the given debug rate.
 *
 * @param debugRate The sample rate for debug logs not on a sampled trace.
 * @returns A predicate deciding whether a log is forwarded to Sentry.
 */
export const makeShouldSendLog =
  (debugRate: number) =>
  (log: Log): boolean => {
    if (DROPPED_LOG_MESSAGES.has(log.message)) return false;
    if (log.level === 'debug') return shouldSendDebug(log, debugRate);
    if (log.level !== 'info') return true;
    const route = routeOf(log);
    if (route !== undefined && DROPPED_LOG_ROUTES.has(route)) return false;
    return true;
  };

const REDUNDANT_LOG_ATTRIBUTES = ['msg', 'pino.logger.level'] as const;

/**
 * Remove pino bindings that Sentry already records as native log fields.
 *
 * @param log The log entry from the SDK.
 * @returns The same log with redundant attributes removed.
 */
export const scrubRedundantLogAttributes = (log: Log): Log => {
  if (log.attributes == null) return log;
  for (const key of REDUNDANT_LOG_ATTRIBUTES) {
    delete log.attributes[key];
  }
  return log;
};

/**
 * Build a traces sampler that drops health check transactions.
 *
 * @param rate The sample rate for all other transactions.
 * @returns The sampler for Sentry.init.
 */
export const makeTracesSampler =
  (rate: number) =>
  (context: {
    name: string;
    inheritOrSampleWith: (fallbackSampleRate: number) => number;
  }): number =>
    context.name.includes('/status/ping')
      ? 0
      : context.inheritOrSampleWith(rate);
