import { Writable } from 'stream';
import { pino, type Logger } from 'pino';
import { describe, it, expect } from 'vitest';
import Fastify, { type FastifyReply, type FastifyRequest } from 'fastify';

import {
  bindRouteToLogger,
  genReqId,
  getLoggerOptions,
  serializers
} from './logger.js';

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

  it('uses the first hop of a comma-separated x-forwarded-for chain', () => {
    const result = serializers.req(
      fakeRequest({
        headers: { 'x-forwarded-for': '2.2.2.2, 10.0.0.1, 172.16.0.1' }
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

describe('serializers.err', () => {
  it('whitelists safe fields and drops secret/payment payloads', () => {
    const stripeErr = Object.assign(new Error('Your card was declined.'), {
      code: 'card_declined',
      statusCode: 402,
      requestId: 'req_123',
      raw: { payment_intent: { client_secret: 'pi_secret_LEAK' } },
      headers: { authorization: 'Bearer sk_live_LEAK' },
      payment_method: { card: { number: '4242424242424242' } }
    });

    const result = serializers.err(stripeErr);

    expect(result).toMatchObject({
      type: 'Error',
      message: 'Your card was declined.',
      code: 'card_declined',
      statusCode: 402,
      requestId: 'req_123'
    });
    expect(result).not.toHaveProperty('raw');
    expect(result).not.toHaveProperty('headers');
    expect(result).not.toHaveProperty('payment_method');
    const serialized = JSON.stringify(result);
    expect(serialized).not.toContain('pi_secret_LEAK');
    expect(serialized).not.toContain('sk_live_LEAK');
    expect(serialized).not.toContain('4242424242424242');
  });

  it('recursively whitelists the cause chain', () => {
    const cause = Object.assign(new Error('inner'), {
      raw: { client_secret: 'cause_LEAK' }
    });
    const err = Object.assign(new Error('outer'), { cause });

    const result = serializers.err(err);

    expect(JSON.stringify(result)).not.toContain('cause_LEAK');
    expect((result.cause as { message: string }).message).toBe('inner');
  });

  it('handles non-object errors', () => {
    expect(serializers.err('boom')).toEqual({ message: 'boom' });
  });
});

describe('bindRouteToLogger', () => {
  it('binds the matched route onto request logs', async () => {
    const lines: string[] = [];
    const sink = new Writable({
      write(chunk: Buffer, _enc, cb) {
        lines.push(chunk.toString());
        cb();
      }
    });
    const app = Fastify({
      loggerInstance: pino(getLoggerOptions('info'), sink)
    });
    app.addHook('onRequest', bindRouteToLogger);
    app.get('/widgets/:id', () => ({ ok: true }));

    await app.inject({ method: 'GET', url: '/widgets/42' });
    await app.close();

    const completed = lines
      .map(line => JSON.parse(line) as Record<string, unknown>)
      .find(entry => entry.msg === 'request completed');
    expect(completed?.route).toBe('/widgets/:id');
  });
});

describe('genReqId', () => {
  it('passes through a valid cf-ray header', () => {
    expect(genReqId({ headers: { 'cf-ray': 'abc-123_DEF' } })).toBe(
      'abc-123_DEF'
    );
  });

  it('uses the first value of an array header', () => {
    expect(genReqId({ headers: { 'cf-ray': ['first', 'second'] } })).toBe(
      'first'
    );
  });

  it('ignores a client-supplied x-request-id', () => {
    expect(genReqId({ headers: { 'x-request-id': 'client-spoofed' } })).toMatch(
      UUID_PATTERN
    );
  });

  it('generates a uuid when the header is missing', () => {
    expect(genReqId({ headers: {} })).toMatch(UUID_PATTERN);
  });

  it('rejects headers longer than 64 characters', () => {
    expect(genReqId({ headers: { 'cf-ray': 'a'.repeat(65) } })).toMatch(
      UUID_PATTERN
    );
  });

  it('rejects headers with characters outside [A-Za-z0-9_-]', () => {
    for (const dirty of ['abc def', 'abc\ndef', 'abc"def', 'abc{def']) {
      expect(genReqId({ headers: { 'cf-ray': dirty } })).toMatch(UUID_PATTERN);
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

  it('redacts oauth state and id_token query parameters', () => {
    const output = captureLog(logger =>
      logger.info(
        {
          req: fakeRequest({
            query: { state: 'csrf-state', id_token: 'jwt-secret', page: '1' }
          })
        },
        'incoming request'
      )
    );

    const parsed = JSON.parse(output) as {
      req: { query: { state: string; id_token: string; page: string } };
    };
    expect(parsed.req.query.state).toBe('[REDACTED]');
    expect(parsed.req.query.id_token).toBe('[REDACTED]');
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
