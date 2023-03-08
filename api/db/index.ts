import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';
import { FastifyInstance } from 'fastify';

import { MONGOHQ_URL } from '../utils/env';

async function connect(fastify: FastifyInstance) {
  fastify.log.info(`Connecting to Mongodb`);
  await fastify.register(fastifyMongo, {
    url: MONGOHQ_URL
  });
}

export const dbConnector = fastifyPlugin(connect);
