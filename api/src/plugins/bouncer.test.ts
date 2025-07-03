/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Fastify, { type FastifyInstance } from 'fastify';

import { HOME_LOCATION } from '../utils/env';
import bouncer from './bouncer';
import auth from './auth';
import cookies from './cookies';
import redirectWithMessage, { formatMessage } from './redirect-with-message';

let authorizeSpy: jest.SpyInstance;

async function setupServer() {
  const fastify = Fastify();
  await fastify.register(cookies);
  await fastify.register(auth);
  authorizeSpy = jest.spyOn(fastify, 'authorize');

  await fastify.register(redirectWithMessage);
  await fastify.register(bouncer);
  fastify.addHook('onRequest', fastify.authorize);
  fastify.get('/', (_req, reply) => {
    void reply.send({ foo: 'bar' });
  });
  return fastify;
}

describe('bouncer', () => {
  let fastify: FastifyInstance;
  beforeEach(async () => {
    fastify = await setupServer();
  });

  afterEach(async () => {
    await fastify.close();
  });

  describe('send401IfNoUser', () => {
    beforeEach(() => {
      fastify.addHook('onRequest', fastify.send401IfNoUser);
    });

    it('should return 401 if NO user is present', async () => {
      const message = {
        type: 'danger',
        content: 'Something undesirable occurred'
      };
      authorizeSpy.mockImplementationOnce((req, _reply, done) => {
        req.accessDeniedMessage = message;
        done();
      });
      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.json()).toStrictEqual({
        type: message.type,
        message: message.content
      });
      expect(res.statusCode).toEqual(401);
    });

    it('should not alter the response if a user is present', async () => {
      authorizeSpy.mockImplementationOnce((req, _reply, done) => {
        req.user = { id: '123' };
        done();
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.json()).toEqual({ foo: 'bar' });
      expect(res.statusCode).toEqual(200);
    });
  });

  describe('redirectIfNoUser', () => {
    beforeEach(() => {
      fastify.addHook('onRequest', fastify.redirectIfNoUser);
    });
    const redirectLocation = `${HOME_LOCATION}?${formatMessage({ type: 'info', content: 'Only authenticated users can access this route. Please sign in and try again.' })}`;

    // TODO(Post-MVP): make the redirects consistent between redirectIfNoUser
    // and redirectIfSignedIn. Either both should redirect to the referer or
    // both should redirect to HOME_LOCATION.
    it('should redirect to HOME_LOCATION if NO user is present', async () => {
      const message = {
        type: 'danger',
        content: 'At the moment, content is ignored'
      };
      authorizeSpy.mockImplementationOnce((req, _reply, done) => {
        req.accessDeniedMessage = message;
        done();
      });
      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.headers.location).toBe(redirectLocation);
      expect(res.statusCode).toEqual(302);
    });

    it('should not alter the response if a user is present', async () => {
      authorizeSpy.mockImplementationOnce((req, _reply, done) => {
        req.user = { id: '123' };
        done();
      });

      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.json()).toEqual({ foo: 'bar' });
      expect(res.statusCode).toEqual(200);
    });
  });

  describe('redirectIfSignedIn', () => {
    beforeEach(() => {
      fastify.addHook('onRequest', fastify.redirectIfSignedIn);
    });

    it('should redirect to the referer if a user is present', async () => {
      authorizeSpy.mockImplementationOnce((req, _reply, done) => {
        req.user = { id: '123' };
        done();
      });
      const res = await fastify.inject({
        method: 'GET',
        url: '/',
        headers: {
          referer: 'https://www.freecodecamp.org/some/other/path'
        }
      });

      expect(res.headers.location).toBe(
        'https://www.freecodecamp.org/some/other/path'
      );
      expect(res.statusCode).toEqual(302);
    });

    it('should not alter the response if NO user is present', async () => {
      const message = {
        type: 'danger',
        content: 'At the moment, content is ignored'
      };
      authorizeSpy.mockImplementationOnce((req, _reply, done) => {
        req.accessDeniedMessage = message;
        done();
      });
      const res = await fastify.inject({
        method: 'GET',
        url: '/'
      });

      expect(res.json()).toEqual({ foo: 'bar' });
      expect(res.statusCode).toEqual(200);
    });
  });
});
