import { FastifyInstance } from 'fastify';

// eslint-disable-next-line @typescript-eslint/require-await
export async function prismaRoute(fastify: FastifyInstance) {
  fastify.get('/test-prisma', async (_request, _reply) => {
    const user = await fastify.prisma.user.findFirst({
      where: { email: 'bar@bar.com' },
      select: { isCheater: true, completedChallenges: true }
    });
    return { completed: user?.completedChallenges, isCheater: user?.isCheater };
  });
}
