import Fastify, { type FastifyInstance } from 'fastify';
import accepts from '@fastify/accepts';

import errorHandling from './error-handling';
import redirectWithMessage, { formatMessage } from './redirect-with-message';

describe('errorHandling', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(redirectWithMessage);
    await fastify.register(accepts);
    await fastify.register(errorHandling);

    fastify.get('/test', async (_req, _reply) => {
      throw new Error('a very bad thing happened');
      return { ok: true };
    });
  });

  afterEach(async () => {
    await fastify.close();
  });

  it('should redirect to the referer if the request does not Accept json', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        referer: 'https://www.freecodecamp.org/anything',
        accept: 'text/plain'
      }
    });

    expect(res.headers['location']).toEqual(
      'https://www.freecodecamp.org/anything?' +
        formatMessage({
          type: 'danger',
          content: 'flash.generic-error'
        })
    );
    expect(res.statusCode).toEqual(302);
  });

  it('should return a json response if the request does Accept json', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        referer: 'https://www.freecodecamp.org/anything',
        accept: 'application/json,text/plain'
      }
    });

    expect(res.json()).toEqual({
      message: 'flash.generic-error',
      type: 'danger'
    });
    expect(res.statusCode).toEqual(500);
  });

  it('should redirect if the request prefers text/html to json', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        referer: 'https://www.freecodecamp.org/anything',
        // this does accept json, (via the */*), but prefers text/html
        accept: 'text/html,*/*'
      }
    });

    expect(res.headers['location']).toEqual(
      'https://www.freecodecamp.org/anything?' +
        formatMessage({
          type: 'danger',
          content: 'flash.generic-error'
        })
    );
    expect(res.statusCode).toEqual(302);
  });
});
