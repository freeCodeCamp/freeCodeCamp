import type { ErrorEvent, Log } from '@sentry/node';
import { describe, expect, it, vi } from 'vitest';

import {
  makeShouldSendLog,
  makeTracesSampler,
  scrubRedundantLogAttributes,
  scrubRequestPii
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

describe('makeShouldSendLog — info sampling', () => {
  it('always keeps audit info logs even at a zero sample rate', () => {
    expect(
      makeShouldSendLog(1, 0)(makeLog({ attributes: { audit: true } }))
    ).toBe(true);
  });

  it('always keeps audit info logs on an otherwise suppressed route', () => {
    expect(
      makeShouldSendLog(
        1,
        0
      )(
        makeLog({
          attributes: { audit: true, route: '/some/route' }
        })
      )
    ).toBe(true);
  });

  it('keeps audit info logs on a real suppressed route even at zero sample rates', () => {
    expect(
      makeShouldSendLog(
        0,
        0
      )(
        makeLog({
          message: 'audit',
          attributes: { audit: true, route: '/user/session-user' }
        })
      )
    ).toBe(true);
  });

  it('drops non-audit info logs at a zero sample rate', () => {
    expect(
      makeShouldSendLog(1, 0)(makeLog({ attributes: { traceId: 'abc' } }))
    ).toBe(false);
  });

  it('keeps non-audit info logs at a sample rate of 1', () => {
    expect(
      makeShouldSendLog(1, 1)(makeLog({ attributes: { traceId: 'abc' } }))
    ).toBe(true);
  });

  it('keeps info whose trace is sampled regardless of the info rate', () => {
    expect(
      makeShouldSendLog(
        1,
        0
      )(makeLog({ attributes: { traceId: 'abc', traceSampled: true } }))
    ).toBe(true);
  });

  it('samples non-audit info deterministically by traceId', () => {
    const log = makeLog({ attributes: { traceId: 'deadbeef' } });
    const first = makeShouldSendLog(1, 0.5)(log);
    const second = makeShouldSendLog(1, 0.5)(log);
    expect(first).toBe(second);
  });

  it('never touches warn/error/fatal regardless of the info rate', () => {
    for (const level of ['warn', 'error', 'fatal'] as const) {
      expect(makeShouldSendLog(1, 0)(makeLog({ level }))).toBe(true);
    }
  });

  it('defaults to a sample rate of 1 when none is given', () => {
    expect(
      makeShouldSendLog(1)(makeLog({ attributes: { traceId: 'abc' } }))
    ).toBe(true);
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

  it('redacts secret-token-shaped substrings found inside a string value', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({
        attributes: { note: 'leaked key sk_live_ABC123 in the log' }
      })
    );

    expect(result.attributes?.note).toBe('leaked key [REDACTED] in the log');
  });

  it('does not redact an email value as a secret-token substring', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({ attributes: { note: 'contact a@b.com for help' } })
    );

    expect(result.attributes?.note).toBe('contact a@b.com for help');
  });

  it('keeps email values unredacted on the Logs channel, unlike Issues', () => {
    const result = scrubRedundantLogAttributes(
      makeLog({ attributes: { email: 'keep@me.com' } })
    );

    expect(result.attributes?.email).toBe('keep@me.com');
  });
});

describe('scrubRequestPii', () => {
  const eventWithRequest = (request: ErrorEvent['request']): ErrorEvent => ({
    type: undefined,
    request
  });

  it('is a no-op when the event has no request', () => {
    const event = eventWithRequest(undefined);
    expect(scrubRequestPii(event)).toEqual(event);
  });

  it('strips the query string entirely and the query portion of the url', () => {
    const result = scrubRequestPii(
      eventWithRequest({
        url: 'https://api.freecodecamp.org/donate?code=abc123',
        query_string: 'code=abc123'
      })
    );

    expect(result.request?.query_string).toBeUndefined();
    expect(result.request?.url).toBe('https://api.freecodecamp.org/donate');
  });

  it('redacts PII- and secret-shaped keys from the request body', () => {
    const result = scrubRequestPii(
      eventWithRequest({
        data: {
          paymentMethodId: 'pm_12345',
          email: 'a@b.com',
          name: 'Camper Bot',
          code: 'oauth-code',
          state: 'oauth-state',
          amount: 500
        }
      })
    );

    expect(result.request?.data).toEqual({
      paymentMethodId: '[REDACTED]',
      email: '[REDACTED]',
      name: '[REDACTED]',
      code: '[REDACTED]',
      state: '[REDACTED]',
      amount: 500
    });
  });

  it('redacts sensitive request headers', () => {
    const result = scrubRequestPii(
      eventWithRequest({
        headers: { authorization: 'Bearer sk_live_LEAK', 'user-agent': 'x' }
      })
    );

    expect(result.request?.headers).toEqual({
      authorization: '[REDACTED]',
      'user-agent': 'x'
    });
  });

  it('redacts email and paymentMethodId when request data is a raw JSON string', () => {
    const result = scrubRequestPii(
      eventWithRequest({
        data: JSON.stringify({
          email: 'a@b.com',
          paymentMethodId: 'pm_123',
          amount: 5
        })
      })
    );

    const data = result.request?.data;
    const parsed = typeof data === 'string' ? JSON.parse(data) : data;

    expect(parsed).toEqual({
      email: '[REDACTED]',
      paymentMethodId: '[REDACTED]',
      amount: 5
    });
  });

  it('always strips cookies regardless of their content', () => {
    const result = scrubRequestPii(
      eventWithRequest({ cookies: { jwt_access_token: 'secret' } })
    );

    expect(result.request?.cookies).toBeUndefined();
  });

  it('redacts an email found inside a free-text data value', () => {
    const result = scrubRequestPii(
      eventWithRequest({ data: { about: 'reach me at me@example.com' } })
    );

    expect(result.request?.data).toEqual({
      about: 'reach me at [REDACTED]'
    });
  });

  it('redacts a secret-shaped value in a header whose key is not sensitive', () => {
    const result = scrubRequestPii(
      eventWithRequest({
        headers: { 'x-custom': 'Bearer abcdefghijklmnopqrstuvwxyz012345' }
      })
    );

    expect(result.request?.headers).toEqual({ 'x-custom': '[REDACTED]' });
  });

  it('fail-safe redacts a value nested past the depth cap', () => {
    const buildNested = (depth: number, leaf: unknown): unknown =>
      depth <= 0 ? leaf : { nested: buildNested(depth - 1, leaf) };

    const result = scrubRequestPii(
      eventWithRequest({ data: buildNested(9, 'just-a-plain-value') })
    );

    const serialized = JSON.stringify(result.request?.data);
    expect(serialized).toContain('[REDACTED]');
    expect(serialized).not.toContain('just-a-plain-value');
  });

  it('redacts an email in the exception message and in extra', () => {
    const event: ErrorEvent = {
      type: undefined,
      exception: { values: [{ value: 'failed for user x@y.com' }] },
      extra: { email: 'z@z.com' }
    };

    const result = scrubRequestPii(event);

    expect(result.exception?.values?.[0]?.value).toBe(
      'failed for user [REDACTED]'
    );
    expect(result.extra?.email).toBe('[REDACTED]');
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
