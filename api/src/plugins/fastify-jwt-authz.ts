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

export interface UserObject {
  scope?: string;
}

interface JwtAuthz {
  (scopes: string[], callback?: (err?: Error) => void): void;
}

const fastifyJwtAuthz: FastifyPluginCallback = (fastify, _opts, done) => {
  fastify.decorateRequest('jwtAuthz', jwtAuthz);

  function checkScopes(user: UserObject, scopes: string[]) {
    if (scopes.length === 0) return Error('Scopes cannot be empty');

    if (!user) return Error('request.user does not exist');

    if (typeof user.scope !== 'string')
      return Error('request.user.scope must be a string');

    const userScopes = user.scope.split(' ');
    const sufficientScope = scopes.some(scope => userScopes.includes(scope));

    if (!sufficientScope) return Error('Insufficient scope');
  }

  function jwtAuthz(
    this: FastifyRequest,
    scopes: string[],
    callback?: (err?: Error) => void
  ) {
    const err = checkScopes(this.user as UserObject, scopes);
    if (callback) return callback(err);
    if (err) throw err;
  }

  done();
};

declare module 'fastify' {
  interface FastifyRequest {
    jwtAuthz: JwtAuthz;
  }
}

export default fp(fastifyJwtAuthz);
