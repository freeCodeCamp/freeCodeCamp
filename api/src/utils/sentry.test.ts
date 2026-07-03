import type { Log } from '@sentry/node';
import { describe, expect, it, vi } from 'vitest';

import {
  makeShouldSendLog,
  makeTracesSampler,
  scrubRedundantLogAttributes
} from './sentry.js';

const makeLog = (overrides: Partial<Log> = {}): Log => ({
  level: 'info',
  message: 'something happened',
  attributes: {},
  ...overrides
});

describe('shouldSendLog', () => {
  const shouldSendLog = makeShouldSendLog(1);

  it('drops the incoming request message regardless of level', () => {
    expect(shouldSendLog(makeLog({ message: 'incoming request' }))).toBe(false);
    expect(
      shouldSendLog(makeLog({ message: 'incoming request', level: 'error' }))
    ).toBe(false);
  });

  it('drops debug logs from suppressed routes', () => {
    expect(
      shouldSendLog(
        makeLog({ level: 'debug', attributes: { route: '/user/session-user' } })
      )
    ).toBe(false);
  });

  it('keeps debug logs on other routes', () => {
    expect(
      shouldSendLog(
        makeLog({ level: 'debug', attributes: { route: '/some/route' } })
      )
    ).toBe(true);
  });

  it('keeps debug logs without a route', () => {
    expect(shouldSendLog(makeLog({ level: 'debug' }))).toBe(true);
  });

  it('drops per-request framework lifecycle chatter regardless of route', () => {
    for (const message of ['request completed', 'stream closed prematurely']) {
      expect(shouldSendLog(makeLog({ message }))).toBe(false);
      expect(
        shouldSendLog(
          makeLog({ message, attributes: { route: '/some/route' } })
        )
      ).toBe(false);
    }
  });

  it('keeps request errored so response failures still reach Sentry', () => {
    expect(
      shouldSendLog(makeLog({ message: 'request errored', level: 'error' }))
    ).toBe(true);
  });

  it('keeps non-info levels', () => {
    for (const level of ['warn', 'error', 'fatal'] as const) {
      expect(shouldSendLog(makeLog({ level }))).toBe(true);
    }
  });

  it('keeps non-info levels even on a suppressed route', () => {
    expect(
      shouldSendLog(
        makeLog({ level: 'error', attributes: { route: '/user/session-user' } })
      )
    ).toBe(true);
  });

  it('drops info logs from suppressed routes', () => {
    expect(
      shouldSendLog(makeLog({ attributes: { route: '/user/session-user' } }))
    ).toBe(false);
  });

  it('keeps info logs on other routes', () => {
    expect(
      shouldSendLog(makeLog({ attributes: { route: '/some/route' } }))
    ).toBe(true);
  });

  it('keeps info logs without a route', () => {
    expect(shouldSendLog(makeLog())).toBe(true);
  });
});

describe('makeShouldSendLog — debug sampling', () => {
  const debugLog = (overrides: Partial<Log> = {}): Log =>
    makeLog({ level: 'debug', ...overrides });

  it('drops debug from suppressed routes even when the trace is sampled', () => {
    expect(
      makeShouldSendLog(1)(
        debugLog({
          attributes: { route: '/status/ping', traceSampled: true }
        })
      )
    ).toBe(false);
  });

  it('keeps debug whose trace is sampled regardless of rate', () => {
    expect(
      makeShouldSendLog(0)(
        debugLog({ attributes: { traceId: 'abc', traceSampled: true } })
      )
    ).toBe(true);
  });

  it('drops ambient (unsampled-trace) debug at rate 0', () => {
    expect(
      makeShouldSendLog(0)(debugLog({ attributes: { traceId: 'abc' } }))
    ).toBe(false);
    expect(makeShouldSendLog(0)(debugLog())).toBe(false);
  });

  it('keeps ambient debug at rate 1', () => {
    expect(
      makeShouldSendLog(1)(debugLog({ attributes: { traceId: 'abc' } }))
    ).toBe(true);
  });

  it('samples debug deterministically by traceId', () => {
    const log = debugLog({ attributes: { traceId: 'deadbeef' } });
    const first = makeShouldSendLog(0.5)(log);
    const second = makeShouldSendLog(0.5)(log);
    expect(first).toBe(second);
  });

  it('keeps warn/error/fatal regardless of the debug rate', () => {
    for (const level of ['warn', 'error', 'fatal'] as const) {
      expect(makeShouldSendLog(0)(makeLog({ level }))).toBe(true);
    }
  });
});

describe('scrubRedundantLogAttributes', () => {
  it('drops pino bindings duplicated by Sentry-native fields', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({
        attributes: {
          msg: 'hello',
          'pino.logger.level': 30,
          message: 'hello',
          trace_id: 'abc',
          level: 'info',
          severity_number: 9,
          userId: 'user-42'
        }
      })
    );

    expect(result.attributes).toEqual({
      message: 'hello',
      trace_id: 'abc',
      level: 'info',
      severity_number: 9,
      userId: 'user-42'
    });
  });

  it('is a no-op when there are no attributes', () => {
    expect(
      scrubRedundantLogAttributes(makeLog({ attributes: undefined }))
    ).toEqual(makeLog({ attributes: undefined }));
  });

  it('redacts secret- and payment-credential-shaped attribute keys', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({
        attributes: {
          userId: 'user-42',
          email: 'a@b.com',
          client_secret: 'pi_secret_LEAK',
          authorization: 'Bearer sk_live_LEAK',
          password: 'hunter2',
          api_key: 'key_LEAK',
          token: 'tok_LEAK',
          'err.raw.client_secret': 'nested_LEAK'
        }
      })
    );

    expect(result.attributes).toEqual({
      userId: 'user-42',
      email: 'a@b.com',
      client_secret: '[REDACTED]',
      authorization: '[REDACTED]',
      password: '[REDACTED]',
      api_key: '[REDACTED]',
      token: '[REDACTED]',
      'err.raw.client_secret': '[REDACTED]'
    });
  });

  it('redacts secrets nested inside object attribute values', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({
        attributes: {
          err: { message: 'boom', raw: { client_secret: 'LEAK' } }
        }
      })
    );

    expect(JSON.stringify(result.attributes)).not.toContain('LEAK');
  });

  it('keeps intentional PII (email, ip, country) unredacted', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({
        attributes: { email: 'a@b.com', ip: '1.2.3.4', country: 'US' }
      })
    );

    expect(result.attributes).toEqual({
      email: 'a@b.com',
      ip: '1.2.3.4',
      country: 'US'
    });
  });
});

describe('makeTracesSampler', () => {
  const context = (name: string) => ({
    name,
    inheritOrSampleWith: vi.fn((fallback: number) => fallback)
  });

  it('drops health check transactions', () => {
    expect(makeTracesSampler(0.1)(context('GET /status/ping'))).toBe(0);
    expect(makeTracesSampler(0.1)(context('GET /status/ready'))).toBe(0);
  });

  it('samples other transactions with the configured rate', () => {
    const ctx = context('GET /user/session-user');
    expect(makeTracesSampler(0.1)(ctx)).toBe(0.1);
    expect(ctx.inheritOrSampleWith).toHaveBeenCalledWith(0.1);
  });
});
