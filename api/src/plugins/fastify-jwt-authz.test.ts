/*
MIT License

Copyright (c) 2018 Ethan Arrowood

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import Fastify from 'fastify';
import jwtAuthz from './fastify-jwt-authz';

interface ErrorResponse {
  statusCode: number;
  error: string;
  message: string;
}

describe('fastify-jwt-authz', () => {
  test('should decorate request instance with jwtAuthz method', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get('/', req => {
      expect(req).toHaveProperty('jwtAuthz');
      expect(req.jwtAuthz).toBeInstanceOf(Function);
      return { foo: 'bar' };
    });

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/'
    });

    expect(res.statusCode).toEqual(200);
  });

  test('should throw an error "Scopes cannot be empty" with an empty scopes parameter', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test2',
      {
        preHandler: function (request, _reply, done) {
          void request.jwtAuthz([], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test2'
    });
    const resData: ErrorResponse = res.json();

    expect(res.statusCode).toEqual(500);
    expect(resData.message).toEqual('Scopes cannot be empty');
  });

  test('should throw an error "request.user does not exist" non existing request.user', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test3',
      {
        preHandler: function (request, _reply, done) {
          void request.jwtAuthz(['baz'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test3'
    });
    const resData: ErrorResponse = res.json();

    expect(res.statusCode).toEqual(500);
    expect(resData.message).toEqual('request.user does not exist');
  });

  test('should throw an error "request.user.scope must be a string"', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test4',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 123
          };
          void request.jwtAuthz(['baz'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test4'
    });
    const resData: ErrorResponse = res.json();

    expect(res.statusCode).toEqual(500);
    expect(resData.message).toEqual('request.user.scope must be a string');
  });

  test('should throw an error "Insufficient scope"', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test5',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 'baz'
          };
          void request.jwtAuthz(['foo'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test5'
    });
    const resData: ErrorResponse = res.json();

    expect(res.statusCode).toEqual(500);
    expect(resData.message).toEqual('Insufficient scope');
  });

  test('should verify user scope', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test6',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 'user manager'
          };
          void request.jwtAuthz(['user'], done);
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test6'
    });

    const resData: { foo: string } = res.json();

    expect(res.statusCode).toEqual(200);
    expect(resData.foo).toEqual('bar');
  });

  test('should throw an error when there is no callback', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test7',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 123
          };

          request.jwtAuthz(['baz']);
          done();
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test7'
    });
    const resData: ErrorResponse = res.json();

    expect(res.statusCode).toEqual(500);
    expect(resData.message).toEqual('request.user.scope must be a string');
  });

  test('should verify user scope when there is no callback', async () => {
    const fastify = Fastify();
    await fastify.register(jwtAuthz);

    fastify.get(
      '/test8',
      {
        preHandler: function (request, _reply, done) {
          request.user = {
            name: 'sample',
            scope: 'user manager'
          };
          request.jwtAuthz(['user']);
          done();
        }
      },
      function () {
        return { foo: 'bar' };
      }
    );

    fastify.listen({ port: 0 }, function () {
      fastify.server.unref();
    });

    const res = await fastify.inject({
      method: 'GET',
      url: '/test8'
    });
    const resData: { foo: string } = res.json();

    expect(res.statusCode).toEqual(200);
    expect(resData.foo).toEqual('bar');
  });
});
