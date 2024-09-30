import Fastify, { type FastifyInstance } from 'fastify';

import notFound from './not-found';
import redirectWithMessage, { formatMessage } from './redirect-with-message';

describe('fourOhFour', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(redirectWithMessage);
    await fastify.register(notFound);
  });

  afterEach(async () => {
    await fastify.close();
  });

  it('should redirect to origin/404 if the request does not Accept json', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        referer: 'https://www.freecodecamp.org/anything',
        accept: 'text/plain'
      }
    });

    expect(res.headers['location']).toEqual(
      'https://www.freecodecamp.org/404?' +
        formatMessage({
          type: 'danger',
          content: "We couldn't find path /test"
        })
    );
    expect(res.statusCode).toEqual(302);
  });

  it('should return a 404 json response if the request does Accept json', async () => {
    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        referer: 'https://www.freecodecamp.org/anything',
        accept: 'application/json,text/plain'
      }
    });

    expect(res.json()).toEqual({ error: 'path not found' });
    expect(res.statusCode).toEqual(404);
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
      'https://www.freecodecamp.org/404?' +
        formatMessage({
          type: 'danger',
          content: "We couldn't find path /test"
        })
    );
    expect(res.statusCode).toEqual(302);
  });
});
