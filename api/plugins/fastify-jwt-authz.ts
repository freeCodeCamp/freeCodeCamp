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

import { FastifyPluginCallback, FastifyRequest } from 'fastify';
import fp from 'fastify-plugin';

interface UserObject {
  scope: string;
}

export interface JwtAuthz {
  (scopes: string[], callback: (err?: Error) => void): Promise<void>;
}

const fastifyJwtAuthz: FastifyPluginCallback = (fastify, _opts, done) => {
  fastify.decorateRequest('jwtAuthz', checkScopes);

  done();

  function checkScopes(
    this: FastifyRequest,
    scopes: string[],
    callback: (err?: Error) => void
  ) {
    if (callback === undefined) {
      return new Promise((resolve, reject) => {
        void this.jwtAuthz(scopes, function (err) {
          return err ? reject(err) : resolve(null);
        });
      });
    }

    if (scopes.length === 0) {
      return callback(new Error('Scopes cannot be empty'));
    }
    const user = this.user as UserObject;
    if (!user) {
      return callback(new Error('request.user does not exist'));
    }
    if (typeof user.scope !== 'string') {
      return callback(new Error('request.user.scope must be a string'));
    }

    const userScopes = user.scope.split(' ');
    const allowed = scopes.some(scope => {
      return userScopes.indexOf(scope) !== -1;
    });

    return callback(allowed ? undefined : new Error('Insufficient scope'));
  }
};

declare module 'fastify' {
  interface FastifyRequest {
    jwtAuthz: JwtAuthz;
  }
}

export default fp(fastifyJwtAuthz);
