import { Writable } from 'stream';
import { pino, type Logger } from 'pino';
import { describe, it, expect } from 'vitest';
import { type FastifyReply, type FastifyRequest } from 'fastify';

import { genReqId, getLoggerOptions, serializers } from './logger.js';

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

const fakeRequest = (overrides: {
  headers?: Record<string, string | string[] | undefined>;
  query?: unknown;
  id?: string;
  ip?: string;
  url?: string;
  routeUrl?: string;
}): FastifyRequest =>
  ({
    id: overrides.id ?? 'req-1',
    method: 'GET',
    url: overrides.url ?? '/status/ping',
    ip: overrides.ip ?? '127.0.0.1',
    headers: overrides.headers ?? {},
    query: overrides.query ?? {},
    routeOptions: { url: overrides.routeUrl }
  }) as unknown as FastifyRequest;

describe('serializers.req', () => {
  it('emits lowercase camelCase keys', () => {
    const result = serializers.req(
      fakeRequest({
        headers: {
          'user-agent': 'vitest',
          'cf-ipcountry': 'NL'
        },
        query: { page: '2' }
      })
    );

    expect(result).toEqual({
      method: 'GET',
      url: '/status/ping',
      ip: '127.0.0.1',
      userAgent: 'vitest',
      country: 'NL',
      query: { page: '2' }
    });
  });

  it('prefers cf-connecting-ip over other ip sources', () => {
    const result = serializers.req(
      fakeRequest({
        headers: {
          'cf-connecting-ip': '1.1.1.1',
          'x-forwarded-for': '2.2.2.2',
          'x-real-ip': '3.3.3.3'
        }
      })
    );
    expect(result.ip).toBe('1.1.1.1');
  });

  it('uses the first x-forwarded-for value when it is an array', () => {
    const result = serializers.req(
      fakeRequest({
        headers: { 'x-forwarded-for': ['2.2.2.2', '9.9.9.9'] }
      })
    );
    expect(result.ip).toBe('2.2.2.2');
  });

  it('falls back to req.ip when no proxy headers are present', () => {
    const result = serializers.req(fakeRequest({ ip: '10.0.0.5' }));
    expect(result.ip).toBe('10.0.0.5');
  });

  it('omits the query property when the query is empty', () => {
    const result = serializers.req(fakeRequest({ query: {} }));
    expect(result).not.toHaveProperty('query');
  });

  it('strips the query string from the logged url', () => {
    const result = serializers.req(
      fakeRequest({ url: '/status/ping?token=supersecret&page=1' })
    );
    expect(result.url).toBe('/status/ping');
    expect(JSON.stringify(result)).not.toContain('supersecret');
  });

  it('includes the templated route pattern when resolved', () => {
    const result = serializers.req(
      fakeRequest({ url: '/users/abc123', routeUrl: '/users/:id' })
    );
    expect(result.route).toBe('/users/:id');
  });

  it('omits the route property when no route matched', () => {
    const result = serializers.req(fakeRequest({}));
    expect(result).not.toHaveProperty('route');
  });
});

describe('serializers.res', () => {
  it('emits only statusCode', () => {
    const result = serializers.res({
      statusCode: 200,
      elapsedTime: 12.5
    } as unknown as FastifyReply);

    expect(result).toEqual({ statusCode: 200 });
  });
});

describe('genReqId', () => {
  it('passes through a valid x-request-id header', () => {
    expect(genReqId({ headers: { 'x-request-id': 'abc-123_DEF' } })).toBe(
      'abc-123_DEF'
    );
  });

  it('uses the first value of an array header', () => {
    expect(genReqId({ headers: { 'x-request-id': ['first', 'second'] } })).toBe(
      'first'
    );
  });

  it('generates a uuid when the header is missing', () => {
    expect(genReqId({ headers: {} })).toMatch(UUID_PATTERN);
  });

  it('rejects headers longer than 64 characters', () => {
    expect(genReqId({ headers: { 'x-request-id': 'a'.repeat(65) } })).toMatch(
      UUID_PATTERN
    );
  });

  it('rejects headers with characters outside [A-Za-z0-9_-]', () => {
    for (const dirty of ['abc def', 'abc\ndef', 'abc"def', 'abc{def']) {
      expect(genReqId({ headers: { 'x-request-id': dirty } })).toMatch(
        UUID_PATTERN
      );
    }
  });
});

describe('getLoggerOptions', () => {
  const captureLog = (write: (logger: Logger) => void): string => {
    const lines: string[] = [];
    const sink = new Writable({
      write(chunk: Buffer, _enc, cb) {
        lines.push(chunk.toString());
        cb();
      }
    });
    const logger = pino(getLoggerOptions('info'), sink);
    write(logger);
    return lines.join('');
  };

  it('sets the requested level', () => {
    expect(getLoggerOptions('warn').level).toBe('warn');
  });

  it('redacts sensitive query parameters in serialized requests', () => {
    const output = captureLog(logger =>
      logger.info(
        {
          req: fakeRequest({
            query: { token: 'super-secret', page: '1' }
          })
        },
        'incoming request'
      )
    );

    const parsed = JSON.parse(output) as {
      req: { query: { token: string; page: string } };
    };
    expect(parsed.req.query.token).toBe('[REDACTED]');
    expect(parsed.req.query.page).toBe('1');
  });

  it('exposes a mixin that is safe to call without an active Sentry span', () => {
    const { mixin } = getLoggerOptions('info');
    expect(mixin).toBeTypeOf('function');
    expect(mixin!({}, 30, pino({ level: 'info' }))).toEqual({});
  });

  it('serializes req with the standard lowercase shape in log output', () => {
    const output = captureLog(logger =>
      logger.info(
        { req: fakeRequest({ headers: { 'user-agent': 'vitest' } }) },
        'incoming request'
      )
    );

    const parsed = JSON.parse(output) as { req: Record<string, unknown> };
    expect(parsed.req.method).toBe('GET');
    expect(parsed.req.url).toBe('/status/ping');
    expect(parsed.req).not.toHaveProperty('REQ_METHOD');
  });
});
