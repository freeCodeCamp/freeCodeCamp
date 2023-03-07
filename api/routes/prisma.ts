import { FastifyPluginCallback } from 'fastify';

export const prismaRoute: FastifyPluginCallback = (fastify, _options, done) => {
  fastify.get('/test-prisma', async (_request, _reply) => {
    const user = await fastify.prisma.user.findFirst({
      where: { email: 'bar@bar.com' },
      select: { isCheater: true, completedChallenges: true }
    });
    return { completed: user?.completedChallenges, isCheater: user?.isCheater };
  });
  done();
};
