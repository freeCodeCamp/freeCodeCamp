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
    fastify.get('/test', (req, reply) => {
      void reply.send({ unsigned: req.unsignCookie(req.cookies.test!) });
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        cookie: signedCookie
      }
    });

    expect(res.json()).toEqual({
      unsigned: { value: 'value', renew: false, valid: true }
    });
  });

  it('should reject cookies not prefixed with "s:"', async () => {
    const signedCookie = `test=${fastifyCookie.sign('value', COOKIE_SECRET)}`;
    fastify.get('/test', (req, reply) => {
      void reply.send({ unsigned: req.unsignCookie(req.cookies.test!) });
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test',
      headers: {
        cookie: signedCookie
      }
    });

    expect(res.json()).toEqual({
      unsigned: { value: null, renew: false, valid: false }
    });
  });
});
