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

const clientIp = (req: FastifyRequest): string | undefined =>
  firstValue(req.headers['cf-connecting-ip']) ??
  firstValue(req.headers['x-forwarded-for']) ??
  firstValue(req.headers['x-real-ip']) ??
  req.ip;

type SerializedRequest = {
  method: string;
  url: string;
  route?: string;
  ip: string | undefined;
  userAgent: string | undefined;
  country: string | undefined;
  query?: unknown;
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
  })
};

const REQUEST_ID_PATTERN = /^[\w-]{1,64}$/;

/**
 * Generate a request id, preferring a valid inbound x-request-id header.
 *
 * @param req The incoming request.
 * @returns The sanitized inbound id or a random UUID.
 */
export const genReqId = (req: {
  headers: Record<string, string | string[] | undefined>;
}): string => {
  const inbound = firstValue(req.headers['x-request-id']);
  return inbound && REQUEST_ID_PATTERN.test(inbound) ? inbound : randomUUID();
};

const SENSITIVE_QUERY_PARAMS = ['token', 'email', 'code', 'key'];

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
    return spanContext ? { traceId: spanContext.traceId } : {};
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
