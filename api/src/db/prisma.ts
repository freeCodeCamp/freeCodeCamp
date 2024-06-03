import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';

// importing MONGOHQ_URL so we can mock it in testing.
import { MONGOHQ_URL } from '../utils/env';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server, _options) => {
  const prisma = new PrismaClient({
    datasources: {
      db: {
        url: MONGOHQ_URL
      }
    }
  });

  await prisma.$connect();

  server.decorate('prisma', prisma);

  server.addHook('onClose', async server => {
    await server.prisma.$disconnect();
  });
});

export default prismaPlugin;
