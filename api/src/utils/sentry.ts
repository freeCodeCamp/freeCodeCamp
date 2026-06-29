import type { Log } from '@sentry/node';

export const REQUEST_LIFECYCLE_MESSAGES = new Set([
  'incoming request',
  'request completed'
]);

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
  if (REQUEST_LIFECYCLE_MESSAGES.has(log.message)) return false;
  if (log.level !== 'info') return true;
  if (log.attributes?.email != null) return true;
  return rng() < infoSampleRate;
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
