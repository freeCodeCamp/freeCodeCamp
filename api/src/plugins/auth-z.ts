import { Role } from '@prisma/client';
import { FastifyPluginCallback, FastifyRequest, FastifyReply } from 'fastify';
import fp from 'fastify-plugin';
declare module 'fastify' {
  interface FastifyInstance {
    authorizeRole: (
      role: Role
    ) => (req: FastifyRequest, reply: FastifyReply) => void;
  }
}

const authorize: FastifyPluginCallback = (fastify, _options, done) => {
  function handleAuthorizeRole(role: Role) {
    return async function (req: FastifyRequest, reply: FastifyReply) {
      const user = req.user;
      if (!user) {
        return reply.status(403).send({ error: 'User not authenticated' });
      }

      const userPermissions = await fastify.prisma.permission.findUnique({
        where: { userId: user.id }
      });

      if (!userPermissions) {
        return reply
          .status(403)
          .send({ error: 'User does not have permissions' });
      }

      const hasPermission = userPermissions.roles.some(
        userRole => userRole === role
      );

      if (!hasPermission) {
        return reply
          .status(403)
          .send({ error: 'User does not have the required role' });
      }
      // User has the required role, proceed with the request
      return true;
    };
  }
  fastify.decorate('authorizeRole', handleAuthorizeRole);

  done();
};

export default fp(authorize, {
  dependencies: ['auth']
});
