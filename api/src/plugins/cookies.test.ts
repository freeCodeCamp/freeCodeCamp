import Fastify, { type FastifyInstance } from 'fastify';
import fastifyCookie from '@fastify/cookie';

import { COOKIE_SECRET } from '../utils/env';
import cookies from './cookies';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../utils/env', () => ({
  ...jest.requireActual('../utils/env'),
  COOKIE_DOMAIN: 'www.example.com',
  FREECODECAMP_NODE_ENV: 'not-development'
}));

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

  it('should have reasonable defaults', async () => {
    fastify.get('/test', async (req, reply) => {
      void reply.setCookie('test', 'value');
      return { ok: true };
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test'
    });

    // No max-age, so we default to a session cookie.
    expect(res.cookies[0]).toStrictEqual({
      name: 'test',
      // defaults:
      domain: 'www.example.com',
      httpOnly: true,
      path: '/',
      sameSite: 'Lax',
      secure: true,
      // sign by default:
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value: expect.stringMatching(/s:value\.\w*/)
    });
  });

  // TODO(Post-MVP): Clear all cookies rather than just three specific ones?
  // Then it should be called something like clearAllCookies.
  it('clearOurCookies should clear cookies that we set', async () => {
    fastify.get('/test', async (req, reply) => {
      void reply.clearOurCookies();
      return { ok: true };
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test'
    });

    expect(res.cookies).toStrictEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'jwt_access_token',
          expires: new Date(0),
          value: ''
        }),
        expect.objectContaining({
          name: '_csrf',
          expires: new Date(0),
          value: ''
        }),
        expect.objectContaining({
          name: 'csrf_token',
          expires: new Date(0),
          value: ''
        })
      ])
    );
  });
});
