import { execSync } from 'node:child_process';
import fp from 'fastify-plugin';
import { FastifyPluginAsync } from 'fastify';
import { PrismaClient } from '@prisma/client';

import { FREECODECAMP_NODE_ENV, MONGOHQ_URL } from '../utils/env';

declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

// Appends the dbId to the existing database name
const createTestConnectionURL = (url: string, dbId: string) =>
  url.replace(/(.*)(\?.*)/, `$1${dbId}$2`);

const isTest = (workerId: string | undefined): workerId is string =>
  !!workerId && FREECODECAMP_NODE_ENV === 'development';

const prismaPlugin: FastifyPluginAsync = fp(async (server, _options) => {
  if (isTest(process.env.JEST_WORKER_ID)) {
    // push the schema to the test db to setup indexes, unique constraints, etc
    execSync('pnpm prisma db push -- --skip-generate', {
      env: {
        ...process.env,
        MONGOHQ_URL: createTestConnectionURL(
          MONGOHQ_URL,
          process.env.JEST_WORKER_ID
        )
      }
    });
  }

  const prisma = isTest(process.env.JEST_WORKER_ID)
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
    if (isTest(process.env.JEST_WORKER_ID)) {
      await server.prisma.$runCommandRaw({ dropDatabase: 1 });
    }
    await server.prisma.$disconnect();
  });
});

export default prismaPlugin;
