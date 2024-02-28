import Fastify, { type FastifyInstance } from 'fastify';
import fastifyCookie from '@fastify/cookie';

import { COOKIE_SECRET } from '../utils/env';
import cookies from './cookies';

describe('cookies', () => {
  let fastify: FastifyInstance;

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(cookies);
  });

  afterEach(async () => {
    await fastify.close();
  });

  it('should prefix signed cookies with "s:" (url-encoded)', async () => {
    fastify.get('/test', async (req, reply) => {
      void reply.setCookie('test', 'value', { signed: true });
      return { ok: true };
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test'
    });

    expect(res.headers['set-cookie']).toMatch(/test=s%3Avalue\.\w*/);
  });

  it('should be able to unsign cookies', async () => {
    const signedCookie = `test=s%3A${fastifyCookie.sign('value', COOKIE_SECRET)}`;
    fastify.get('/test', async (req, _reply) => {
      const unsigned = req.unsignCookie(req.cookies.test!);
      return { cookie: unsigned.value };
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        cookie: signedCookie
      }
    });

    expect(res.json()).toEqual({ cookie: 'value' });
  });

  it('should give a helpful error message when unsigning a cookie without the "s:" prefix', async () => {
    const signedCookie = `test=${fastifyCookie.sign('value', COOKIE_SECRET)}`;
    fastify.get('/test', async (req, _reply) => {
      try {
        req.unsignCookie(signedCookie);
        return { ok: true };
      } catch (e) {
        return { error: (e as Error).message };
      }
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test'
    });

    expect(res.json()).toEqual({
      error: 'Signed cookie values must be prefixed with "s:"'
    });
  });
});
