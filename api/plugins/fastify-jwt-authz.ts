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
