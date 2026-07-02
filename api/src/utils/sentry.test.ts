import type { Log } from '@sentry/node';
import { describe, expect, it, vi } from 'vitest';

import {
  makeTracesSampler,
  scrubRedundantLogAttributes,
  shouldSendLog
} from './sentry.js';

const makeLog = (overrides: Partial<Log> = {}): Log => ({
  level: 'info',
  message: 'something happened',
  attributes: {},
  ...overrides
});

describe('shouldSendLog', () => {
  it('drops the incoming request message regardless of level', () => {
    expect(
      shouldSendLog(makeLog({ message: 'incoming request' }), 1, () => 0)
    ).toBe(false);
    expect(
      shouldSendLog(
        makeLog({ message: 'incoming request', level: 'error' }),
        1,
        () => 0
      )
    ).toBe(false);
  });

  it('drops debug logs from suppressed routes', () => {
    expect(
      shouldSendLog(
        makeLog({
          level: 'debug',
          attributes: { route: '/user/session-user' }
        }),
        1,
        () => 0
      )
    ).toBe(false);
  });

  it('keeps debug logs on other routes without sampling', () => {
    expect(
      shouldSendLog(
        makeLog({ level: 'debug', attributes: { route: '/some/route' } }),
        0,
        () => 0.99
      )
    ).toBe(true);
  });

  it('keeps debug logs without a route without sampling', () => {
    expect(shouldSendLog(makeLog({ level: 'debug' }), 0, () => 0.99)).toBe(
      true
    );
  });

  it('keeps the request completed message so response telemetry is retained', () => {
    expect(
      shouldSendLog(makeLog({ message: 'request completed' }), 1, () => 0)
    ).toBe(true);
  });

  it('keeps non-info levels without sampling', () => {
    for (const level of ['warn', 'error', 'fatal'] as const) {
      expect(shouldSendLog(makeLog({ level }), 0, () => 0.99)).toBe(true);
    }
  });

  it('keeps non-info levels even on a suppressed route', () => {
    expect(
      shouldSendLog(
        makeLog({
          level: 'error',
          attributes: { route: '/user/session-user' }
        }),
        0,
        () => 0.99
      )
    ).toBe(true);
  });

  it('drops info logs from suppressed routes regardless of the global rate', () => {
    expect(
      shouldSendLog(
        makeLog({ attributes: { route: '/user/session-user' } }),
        1,
        () => 0
      )
    ).toBe(false);
  });

  it('samples info logs from other routes at the global rate', () => {
    expect(
      shouldSendLog(
        makeLog({ attributes: { route: '/some/route' } }),
        0.1,
        () => 0.05
      )
    ).toBe(true);
    expect(
      shouldSendLog(
        makeLog({ attributes: { route: '/some/route' } }),
        0.1,
        () => 0.1
      )
    ).toBe(false);
  });

  it('samples info logs without a route at the global rate', () => {
    expect(shouldSendLog(makeLog(), 0.1, () => 0.05)).toBe(true);
    expect(shouldSendLog(makeLog(), 0.1, () => 0.1)).toBe(false);
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
});

describe('makeTracesSampler', () => {
  const context = (name: string) => ({
    name,
    inheritOrSampleWith: vi.fn((fallback: number) => fallback)
  });

  it('drops health check transactions', () => {
    expect(makeTracesSampler(0.1)(context('GET /status/ping'))).toBe(0);
  });

  it('samples other transactions with the configured rate', () => {
    const ctx = context('GET /user/session-user');
    expect(makeTracesSampler(0.1)(ctx)).toBe(0.1);
    expect(ctx.inheritOrSampleWith).toHaveBeenCalledWith(0.1);
  });
});
