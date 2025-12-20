import { describe, test, expect, beforeEach } from 'vitest';
import Fastify, { FastifyInstance } from 'fastify';
import qs from 'query-string';

import redirectWithMessage from './redirect-with-message.js';

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(redirectWithMessage);
  return fastify;
}

const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

describe('redirectWithMessage plugin', () => {
  test('should decorate reply object with redirectWithMessage method', async () => {
    expect.assertions(3);

    const fastify = await setupServer();

    fastify.get('/', (_req, reply) => {
      expect(reply).toHaveProperty('redirectWithMessage');
      expect(reply.redirectWithMessage).toBeInstanceOf(Function);
      return { foo: 'bar' };
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    });

    expect(res.statusCode).toEqual(200);
  });

  describe('redirectWithMessage method', () => {
    let fastify: FastifyInstance;
    beforeEach(async () => {
      fastify = await setupServer();
    });

    test('should redirect to the first argument', async () => {
      fastify.get('/', (_req, reply) => {
        return reply.redirectWithMessage('/target', {
          type: 'info',
          content: 'foo'
        });
      });
      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.headers.location).toMatch(/^\/target/);
      expect(res.statusCode).toEqual(302);
    });

    test('should convert the second argument into a query string', async () => {
      fastify.get('/', (_req, reply) => {
        return reply.redirectWithMessage('/target', {
          type: 'info',
          content: 'foo'
        });
      });
      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.headers.location).toMatch(/^\/target\?messages=info/);
    });

    test('should encode the message twice when creating the query string', async () => {
      const expectedMessage = { danger: ['foo bar'] };

      fastify.get('/', (_req, reply) => {
        return reply.redirectWithMessage('/target', {
          type: 'danger',
          content: 'foo bar'
        });
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });
      if (!isString(res.headers.location))
        throw new Error('Location is not a string');
      const { search } = new URL(res.headers.location, 'http://localhost');

      // The query string itself is encoded:
      const { messages } = qs.parse(search, { arrayFormat: 'index' });
      if (!isString(messages)) throw new Error('Messages is not a string');

      // As is the message embedded in it:
      expect(qs.parse(messages, { arrayFormat: 'index' })).toEqual(
        expectedMessage
      );
    });
  });
});
