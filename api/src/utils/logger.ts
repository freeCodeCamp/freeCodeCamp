import { randomUUID } from 'crypto';
import * as Sentry from '@sentry/node';
import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import { isEmpty } from 'lodash-es';
import type { Logger, LoggerOptions } from 'pino';
import { pino } from 'pino';

import { FCC_API_LOG_LEVEL, FCC_API_LOG_TRANSPORT } from './env.js';

const firstValue = (
  value: string | string[] | undefined
): string | undefined => (Array.isArray(value) ? value[0] : value);

const firstHop = (value: string | string[] | undefined): string | undefined =>
  firstValue(value)?.split(',')[0]?.trim();

const clientIp = (req: FastifyRequest): string | undefined =>
  firstValue(req.headers['cf-connecting-ip']) ??
  firstHop(req.headers['x-forwarded-for']) ??
  firstValue(req.headers['x-real-ip']) ??
  req.ip;

/**
 * Extract the client IP and country from proxy headers for fraud triage.
 *
 * @param req The incoming request.
 * @returns The client IP and ISO country code, when present.
 */
export const clientNetInfo = (
  req: FastifyRequest
): { ip: string | undefined; country: string | undefined } => ({
  ip: clientIp(req),
  country: firstValue(req.headers['cf-ipcountry'])
});

type SerializedRequest = {
  method: string;
  url: string;
  route?: string;
  ip: string | undefined;
  userAgent: string | undefined;
  country: string | undefined;
  query?: unknown;
};

const errSerializer = (err: unknown, depth = 0): Record<string, unknown> => {
  if (typeof err !== 'object' || err === null) return { message: String(err) };
  const e = err as Record<string, unknown>;
  const safe: Record<string, unknown> = {
    type: (e.constructor as { name?: string } | undefined)?.name ?? e.name,
    message: e.message,
    stack: e.stack
  };
  for (const key of ['code', 'statusCode', 'requestId'] as const) {
    if (e[key] !== undefined) safe[key] = e[key];
  }
  if (depth < 3 && e.cause != null)
    safe.cause = errSerializer(e.cause, depth + 1);
  return safe;
};

export const serializers = {
  req: (req: FastifyRequest): SerializedRequest => ({
    method: req.method,
    url: req.url.split('?')[0] ?? req.url,
    ...(req.routeOptions?.url ? { route: req.routeOptions.url } : {}),
    ip: clientIp(req),
    userAgent: firstValue(req.headers['user-agent']),
    country: firstValue(req.headers['cf-ipcountry']),
    ...(isEmpty(req.query) ? {} : { query: req.query })
  }),
  res: (reply: FastifyReply): { statusCode: number } => ({
    statusCode: reply.statusCode
  }),
  err: errSerializer
};

const REQUEST_ID_PATTERN = /^[\w-]{1,64}$/;

/**
 * Generate a request id, preferring the Cloudflare edge ray id. A
 * client-supplied x-request-id is not trusted (spoofable / collidable).
 *
 * @param req The incoming request.
 * @returns The edge-set ray id when valid, otherwise a random UUID.
 */
export const genReqId = (req: {
  headers: Record<string, string | string[] | undefined>;
}): string => {
  const edgeId = firstValue(req.headers['cf-ray']);
  return edgeId && REQUEST_ID_PATTERN.test(edgeId) ? edgeId : randomUUID();
};

const SENSITIVE_QUERY_PARAMS = [
  'token',
  'email',
  'code',
  'key',
  'state',
  'id_token',
  'access_token',
  'refresh_token',
  'password',
  'secret',
  'authorization'
];

/**
 * Build the pino options shared by all logger instances.
 *
 * @param level The minimum log level.
 * @returns The pino logger options.
 */
export const getLoggerOptions = (level: string): LoggerOptions => ({
  level,
  serializers,
  mixin: () => {
    const spanContext = Sentry.getActiveSpan()?.spanContext();
    if (!spanContext) return {};
    return {
      traceId: spanContext.traceId,
      traceSampled: (spanContext.traceFlags & 0x1) === 1
    };
  },
  redact: {
    paths: SENSITIVE_QUERY_PARAMS.map(param => `req.query.${param}`),
    censor: '[REDACTED]'
  }
});

/**
 * Bind the matched route onto the request logger so per-route policies apply.
 *
 * @param req The incoming request.
 * @param reply The reply whose logger is rebound alongside the request logger.
 * @param done The hook completion callback.
 */
export const bindRouteToLogger = (
  req: FastifyRequest,
  reply: FastifyReply,
  done: HookHandlerDoneFunction
): void => {
  const route = req.routeOptions?.url;
  if (route) {
    req.log = reply.log = req.log.child({ route });
  }
  done();
};

/**
 * Get a logger instance.
 *
 * @returns A logger instance.
 */
export const getLogger = (): Logger => {
  const options = getLoggerOptions(FCC_API_LOG_LEVEL || 'info');

  if (FCC_API_LOG_TRANSPORT === 'pretty') {
    return pino({
      ...options,
      transport: {
        target: 'pino-pretty',
        options: {
          singleLine: true,
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
          colorize: true
        }
      }
    });
  }

  return pino(options);
};
