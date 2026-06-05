import type { Log } from '@sentry/node';
import { describe, expect, it, vi } from 'vitest';

import { makeTracesSampler, shouldSendLog } from './sentry.js';

const makeLog = (overrides: Partial<Log> = {}): Log => ({
  level: 'info',
  message: 'something happened',
  attributes: {},
  ...overrides
});

describe('shouldSendLog', () => {
  it('drops request lifecycle messages regardless of level', () => {
    expect(
      shouldSendLog(makeLog({ message: 'incoming request' }), 1, () => 0)
    ).toBe(false);
    expect(
      shouldSendLog(
        makeLog({ message: 'request completed', level: 'error' }),
        1,
        () => 0
      )
    ).toBe(false);
  });

  it('keeps non-info levels without sampling', () => {
    for (const level of ['warn', 'error', 'fatal'] as const) {
      expect(shouldSendLog(makeLog({ level }), 0, () => 0.99)).toBe(true);
    }
  });

  it('keeps info logs carrying an email attribute', () => {
    expect(
      shouldSendLog(
        makeLog({ attributes: { email: 'foo@bar.com' } }),
        0,
        () => 0.99
      )
    ).toBe(true);
  });

  it('samples info logs without an email attribute', () => {
    expect(shouldSendLog(makeLog(), 0.1, () => 0.05)).toBe(true);
    expect(shouldSendLog(makeLog(), 0.1, () => 0.1)).toBe(false);
    expect(
      shouldSendLog(makeLog({ attributes: { userId: 'abc' } }), 0.1, () => 0.99)
    ).toBe(false);
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
