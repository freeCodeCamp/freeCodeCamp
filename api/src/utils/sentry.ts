import type { ErrorEvent, Log, RequestEventData } from '@sentry/node';

const DROPPED_LOG_MESSAGES = new Set([
  'incoming request',
  'request completed',
  'stream closed prematurely'
]);

// Hot / health routes whose routine info+debug chatter is filtered out of
// Sentry entirely (replaces the old per-route sample rates). warn/error/fatal
// on these routes is still forwarded.
const DROPPED_LOG_ROUTES = new Set([
  '/user/session-user',
  '/status/ping',
  '/status/ready'
]);

const routeOf = (log: Log): string | undefined =>
  typeof log.attributes?.route === 'string' ? log.attributes.route : undefined;

const traceIdOf = (log: Log): string | undefined =>
  typeof log.attributes?.traceId === 'string'
    ? log.attributes.traceId
    : undefined;

const traceIsSampled = (log: Log): boolean =>
  log.attributes?.traceSampled === true;

const isAuditLog = (log: Log): boolean => log.attributes?.audit === true;

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

const shouldSendInfo = (log: Log, infoRate: number): boolean => {
  if (traceIsSampled(log)) return true;
  const traceId = traceIdOf(log);
  const roll = traceId !== undefined ? hashUnit(traceId) : Math.random();
  return roll < infoRate;
};

/**
 * Build the beforeSendLog filter. Warn, error and fatal always pass. Info
 * passes unless it is on a hot or health route, and is otherwise sampled at
 * the given info rate — unless it carries `audit: true`, which always
 * passes. Debug is trace-aware: it is kept in full for a sampled trace,
 * otherwise sampled deterministically by trace id at the given debug rate.
 *
 * @param debugRate The sample rate for debug logs not on a sampled trace.
 * @param infoRate The sample rate for non-audit info logs not on a sampled
 * trace. Defaults to 1 (send all), matching the pre-sampling behavior.
 * @returns A predicate deciding whether a log is forwarded to Sentry.
 */
export const makeShouldSendLog =
  (debugRate: number, infoRate = 1) =>
  (log: Log): boolean => {
    if (DROPPED_LOG_MESSAGES.has(log.message)) return false;
    if (isAuditLog(log)) return true;
    if (log.level === 'debug') return shouldSendDebug(log, debugRate);
    if (log.level !== 'info') return true;
    const route = routeOf(log);
    if (route !== undefined && DROPPED_LOG_ROUTES.has(route)) return false;
    return shouldSendInfo(log, infoRate);
  };

const REDUNDANT_LOG_ATTRIBUTES = ['msg', 'pino.logger.level'] as const;

const SECRET_KEY_PATTERN =
  /(client_?secret|secret|passwd|password|authorization|cookie|api[-_]?key|access[-_]?token|refresh[-_]?token|id[-_]?token|\bjwt\b|session[-_]?id|card[-_]?number|\bcvc\b|\bcvv\b|\btoken\b)/i;

const ISSUE_REQUEST_KEY_PATTERN =
  /(client_?secret|secret|passwd|password|authorization|cookie|api[-_]?key|access[-_]?token|refresh[-_]?token|id[-_]?token|\bjwt\b|session[-_]?id|card[-_]?number|\bcvc\b|\bcvv\b|\btoken\b|email|name|payment_?method_?id|\bcode\b|\bstate\b)/i;

const VALUE_SECRET_PATTERN =
  /\bsk_(?:live|test)_[A-Za-z0-9]+\b|\bghp_[A-Za-z0-9]+\b|\bgithub_pat_[A-Za-z0-9_]+\b|\bxox[baprs]-[A-Za-z0-9-]+\b|Bearer [A-Za-z0-9._-]{20,}/g;

const EMAIL_PATTERN = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

const redactSecretSubstrings = (value: string): string =>
  value.replace(VALUE_SECRET_PATTERN, '[REDACTED]');

const redactIssueSubstrings = (value: string): string =>
  value
    .replace(VALUE_SECRET_PATTERN, '[REDACTED]')
    .replace(EMAIL_PATTERN, '[REDACTED]');

const redactDeep = (
  value: unknown,
  keyPattern: RegExp,
  scrubValue: (v: string) => string,
  depth = 0,
  redactOnDepthCap = false
): unknown => {
  if (value === null) return value;
  if (depth > 6) return redactOnDepthCap ? '[REDACTED]' : value;
  if (typeof value === 'string') return scrubValue(value);
  if (typeof value !== 'object') return value;
  if (Array.isArray(value))
    return value.map(entry =>
      redactDeep(entry, keyPattern, scrubValue, depth + 1, redactOnDepthCap)
    );
  const out: Record<string, unknown> = {};
  for (const [key, entry] of Object.entries(value as Record<string, unknown>)) {
    out[key] = keyPattern.test(key)
      ? '[REDACTED]'
      : redactDeep(entry, keyPattern, scrubValue, depth + 1, redactOnDepthCap);
  }
  return out;
};

const scrubSecretsDeep = (value: unknown, depth = 0): unknown =>
  redactDeep(value, SECRET_KEY_PATTERN, redactSecretSubstrings, depth);

/**
 * Remove pino bindings that Sentry already records as native log fields, then
 * redact any secret- or payment-credential-shaped attribute value.
 *
 * @param log The log entry from the SDK.
 * @returns The same log with redundant attributes removed and secrets redacted.
 */
export const scrubRedundantLogAttributes = (log: Log): Log => {
  if (log.attributes == null) return log;
  for (const key of REDUNDANT_LOG_ATTRIBUTES) {
    delete log.attributes[key];
  }
  log.attributes = scrubSecretsDeep(log.attributes) as typeof log.attributes;
  return log;
};

const stripQueryFromUrl = (url: string): string => url.split('?', 1)[0] ?? url;

const redactHeaders = (
  headers: Record<string, string>
): Record<string, string> => {
  const out: Record<string, string> = {};
  for (const [key, value] of Object.entries(headers)) {
    out[key] = ISSUE_REQUEST_KEY_PATTERN.test(key)
      ? '[REDACTED]'
      : redactIssueSubstrings(value);
  }
  return out;
};

const scrubIssueBody = (data: unknown): unknown => {
  if (typeof data === 'string') {
    try {
      const parsed: unknown = JSON.parse(data);
      return JSON.stringify(
        redactDeep(
          parsed,
          ISSUE_REQUEST_KEY_PATTERN,
          redactIssueSubstrings,
          0,
          true
        )
      );
    } catch {
      return redactIssueSubstrings(data);
    }
  }
  return redactDeep(
    data,
    ISSUE_REQUEST_KEY_PATTERN,
    redactIssueSubstrings,
    0,
    true
  );
};

// eslint-disable-next-line jsdoc/require-jsdoc
export const scrubRequestPii = (event: ErrorEvent): ErrorEvent => {
  const out: ErrorEvent = { ...event };
  const { request } = event;

  if (request != null) {
    const scrubbed: RequestEventData = { ...request };
    delete scrubbed.query_string;
    delete scrubbed.cookies;
    if (scrubbed.url != null) {
      scrubbed.url = redactIssueSubstrings(stripQueryFromUrl(scrubbed.url));
    }
    if (scrubbed.data != null) {
      scrubbed.data = scrubIssueBody(scrubbed.data);
    }
    if (scrubbed.headers != null) {
      scrubbed.headers = redactHeaders(scrubbed.headers);
    }
    out.request = scrubbed;
  }

  if (out.exception?.values) {
    out.exception = {
      ...out.exception,
      values: out.exception.values.map(value =>
        typeof value.value === 'string'
          ? { ...value, value: redactIssueSubstrings(value.value) }
          : value
      )
    };
  }

  if (out.extra !== undefined) {
    out.extra = redactDeep(
      out.extra,
      ISSUE_REQUEST_KEY_PATTERN,
      redactIssueSubstrings,
      0,
      true
    ) as ErrorEvent['extra'];
  }

  return out;
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
    context.name.includes('/status/ping') ||
    context.name.includes('/status/ready')
      ? 0
      : context.inheritOrSampleWith(rate);
