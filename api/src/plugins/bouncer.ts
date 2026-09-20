import type {
  FastifyPluginCallback,
  FastifyRequest,
  FastifyReply
} from 'fastify';
import fp from 'fastify-plugin';
import { getRedirectParams } from '../utils/redirection.js';

declare module 'fastify' {
  interface FastifyInstance {
    send401IfNoUser: (req: FastifyRequest, reply: FastifyReply) => void;
    redirectIfNoUser: (req: FastifyRequest, reply: FastifyReply) => void;
    redirectIfSignedIn: (req: FastifyRequest, reply: FastifyReply) => void;
  }
}

const plugin: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.decorate(
    'send401IfNoUser',
    async function (req: FastifyRequest, reply: FastifyReply) {
      if (!req.user) {
        req.log.trace(
          'Protected route accessed by unauthenticated user. Sent 401.'
        );

        await reply.status(401).send({
          type: req.accessDeniedMessage?.type,
          message: req.accessDeniedMessage?.content
        });
      }
    }
  );

  fastify.decorate(
    'redirectIfNoUser',
    async function (req: FastifyRequest, reply: FastifyReply) {
      if (!req.user) {
        req.log.trace(
          'Protected route accessed by unauthenticated user. Redirecting to login.'
        );
        const { origin } = getRedirectParams(req);
        await reply.redirectWithMessage(origin, {
          type: 'info',
          content:
            'Only authenticated users can access this route. Please sign in and try again.'
        });
      }
    }
  );

  fastify.decorate(
    'redirectIfSignedIn',
    async function (req: FastifyRequest, reply: FastifyReply) {
      if (req.user) {
        const { returnTo } = getRedirectParams(req);

        req.log.trace({ returnTo }, 'Signed-in user redirected');

        await reply.redirect(returnTo);
      }
    }
  );

  done();
};

export default fp(plugin, {
  dependencies: ['auth', 'redirect-with-message'],
  name: 'bouncer'
});
