import type { Log } from '@sentry/node';

const DROPPED_LOG_MESSAGES = new Set(['incoming request']);

const ROUTE_LOG_SAMPLE_RATES: Record<string, number> = {
  '/user/session-user': 0,
  '/status/ping': 0
};

const routeOf = (log: Log): string | undefined =>
  typeof log.attributes?.route === 'string' ? log.attributes.route : undefined;

/**
 * Decide whether a log should be forwarded to Sentry.
 *
 * @param log The log entry from the SDK.
 * @param infoSampleRate The sample rate applied to info-level logs.
 * @param rng The random source used for sampling.
 * @returns Whether the log should be sent.
 */
export const shouldSendLog = (
  log: Log,
  infoSampleRate: number,
  rng: () => number
): boolean => {
  if (DROPPED_LOG_MESSAGES.has(log.message)) return false;
  if (log.level !== 'info' && log.level !== 'debug') return true;
  const route = routeOf(log);
  const routeRate =
    route !== undefined ? ROUTE_LOG_SAMPLE_RATES[route] : undefined;
  if (routeRate !== undefined) return rng() < routeRate;
  // debug is verbose but low-volume off the suppressed routes; keep it.
  return log.level === 'debug' ? true : rng() < infoSampleRate;
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
