import type { FastifyReply, FastifyRequest } from 'fastify';
import { describe, expect, it, vi } from 'vitest';

import { recordHttpMetrics } from './http-metrics.js';

const invoke = ({
  method = 'GET',
  url = '/users/:id',
  matched = true,
  statusCode = 200,
  elapsedTime = 12.5,
  withMetrics = true
} = {}) => {
  const count = vi.fn();
  const distribution = vi.fn();
  const done = vi.fn();
  const req = {
    method,
    routeOptions: matched ? { url } : {},
    server: {
      Sentry: withMetrics ? { metrics: { count, distribution } } : {}
    }
  } as unknown as FastifyRequest;
  const reply = { statusCode, elapsedTime } as unknown as FastifyReply;

  recordHttpMetrics(req, reply, done);

  return { count, distribution, done };
};

describe('recordHttpMetrics', () => {
  it('counts the response by route pattern, method and status class', () => {
    const { count } = invoke({
      method: 'POST',
      url: '/users/:id',
      statusCode: 201
    });

    expect(count).toHaveBeenCalledWith('http.response', 1, {
      attributes: { route: '/users/:id', method: 'POST', statusClass: '2xx' }
    });
  });

  it('records request duration in milliseconds with the same attributes', () => {
    const { distribution } = invoke({ statusCode: 200, elapsedTime: 42 });

    expect(distribution).toHaveBeenCalledWith('http.request_duration_ms', 42, {
      unit: 'millisecond',
      attributes: { route: '/users/:id', method: 'GET', statusClass: '2xx' }
    });
  });

  it('derives a 4xx status class from the numeric status code', () => {
    expect(invoke({ statusCode: 404 }).count).toHaveBeenCalledWith(
      'http.response',
      1,
      { attributes: { route: '/users/:id', method: 'GET', statusClass: '4xx' } }
    );
  });

  it('derives a 5xx status class from the numeric status code', () => {
    expect(invoke({ statusCode: 503 }).count).toHaveBeenCalledWith(
      'http.response',
      1,
      { attributes: { route: '/users/:id', method: 'GET', statusClass: '5xx' } }
    );
  });

  it('labels an unmatched route rather than emitting an interpolated path', () => {
    expect(
      invoke({ matched: false, statusCode: 404 }).count
    ).toHaveBeenCalledWith('http.response', 1, {
      attributes: { route: 'unmatched', method: 'GET', statusClass: '4xx' }
    });
  });

  it('always completes the hook', () => {
    expect(invoke().done).toHaveBeenCalledOnce();
  });

  it('does not throw and still completes when metrics are unavailable', () => {
    const { count, distribution, done } = invoke({ withMetrics: false });

    expect(count).not.toHaveBeenCalled();
    expect(distribution).not.toHaveBeenCalled();
    expect(done).toHaveBeenCalledOnce();
  });
});
