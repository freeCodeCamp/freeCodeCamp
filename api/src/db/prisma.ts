import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';

import { FREECODECAMP_NODE_ENV, MONGOHQ_URL } from '../utils/env';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

function createTestConnectionURL(url: string, dbId: string) {
  return url.replace(/(.*\/)(.*)(\?.*)/, `$1$2${dbId}$3`);
}

const prismaPlugin: FastifyPluginAsync = fp(async (server, _options) => {
  const prisma =
    process.env.JEST_WORKER_ID && FREECODECAMP_NODE_ENV === 'development'
      ? new PrismaClient({
          datasources: {
            db: {
              url: createTestConnectionURL(
                MONGOHQ_URL,
                process.env.JEST_WORKER_ID
              )
            }
          }
        })
      : new PrismaClient();

  await prisma.$connect();

  server.decorate('prisma', prisma);

  server.addHook('onClose', async server => {
    await server.prisma.$disconnect();
  });
});

export default prismaPlugin;
