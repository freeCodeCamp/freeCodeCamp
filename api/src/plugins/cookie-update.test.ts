import Fastify, { FastifyInstance } from 'fastify';
import cookies, { type CookieSerializeOptions, sign } from './cookies';
import { cookieUpdate } from './cookie-update';

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock('../utils/env', () => ({
  ...jest.requireActual('../utils/env'),
  COOKIE_DOMAIN: 'www.example.com',
  FREECODECAMP_NODE_ENV: 'not-development'
}));

describe('Cookie updates', () => {
  let fastify: FastifyInstance;

  const setup = async (attributes: CookieSerializeOptions) => {
    // Since register creates a new scope, we need to create a route inside the
    // scope for the plugin to be applied.
    await fastify.register(cookieUpdate, fastify => {
      // eslint-disable-next-line @typescript-eslint/require-await
      fastify.get('/', async () => {
        return { hello: 'world' };
      });
      return {
        cookies: ['cookie_name'],
        attributes
      };
    });
  };

  beforeEach(async () => {
    fastify = Fastify();
    await fastify.register(cookies);
  });

  afterEach(async () => {
    await fastify.close();
  });

  it('should not set cookies that are not in the request', async () => {
    await setup({});

    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        cookie: 'cookie_name_two=cookie_value'
      }
    });

    expect(res.headers['set-cookie']).toBeUndefined();
  });

  it("should update the cookie's attributes without changing the value", async () => {
    await setup({ sameSite: 'strict' });
    const signedCookie = sign('cookie_value');
    const encodedCookie = encodeURIComponent(signedCookie);

    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        cookie: `cookie_name=${signedCookie}`
      }
    });

    const updatedCookie = res.headers['set-cookie'] as string;
    expect(updatedCookie).toEqual(
      expect.stringContaining(`cookie_name=${encodedCookie}`)
    );
    expect(updatedCookie).toEqual(expect.stringContaining('SameSite=Strict'));
  });

  it('should unsign the cookie if required', async () => {
    await setup({ signed: false });
    const signedCookie = sign('cookie_value');

    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        cookie: `cookie_name=${signedCookie}`
      }
    });

    const updatedCookie = res.headers['set-cookie'] as string;
    expect(updatedCookie).toEqual(
      expect.stringContaining('cookie_name=cookie_value')
    );
  });

  it('should respect the default cookie config if not overriden', async () => {
    await setup({});

    const res = await fastify.inject({
      method: 'GET',
      url: '/',
      headers: {
        cookie: 'cookie_name=anything'
      }
    });

    expect(res.cookies[0]).toStrictEqual({
      domain: 'www.example.com',
      httpOnly: true,
      name: 'cookie_name',
      path: '/',
      sameSite: 'Lax',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      value: expect.any(String),
      secure: true
    });
  });
});
