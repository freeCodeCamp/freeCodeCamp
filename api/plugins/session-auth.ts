import {
  DoneFuncWithErrOrRes,
  FastifyPluginCallback,
  FastifyReply,
  FastifyRequest
} from 'fastify';
import fp from 'fastify-plugin';

const sessionAuth: FastifyPluginCallback = (fastify, _opts, done) => {
  fastify.decorate('authenticateSession', authenticateSession);

  function authenticateSession(
    req: FastifyRequest,
    res: FastifyReply,
    done: DoneFuncWithErrOrRes
  ) {
    if (!req.session.user) {
      res.statusCode = 401;
      return res.send({ msg: 'Unauthorized' });
    }
    done();
  }

  done();
};

declare module 'fastify' {
  interface FastifyInstance {
    authenticateSession: (
      req: FastifyRequest,
      res: FastifyReply,
      done: DoneFuncWithErrOrRes
    ) => void;
  }
}

export default fp(sessionAuth);
