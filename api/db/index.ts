import fastifyPlugin from 'fastify-plugin';
import fastifyMongo from '@fastify/mongodb';
import { FastifyInstance } from 'fastify';

const URI = process.env.MONGOHQ_URL || 'mongodb://localhost:27017/freecodecamp';

async function connect(fastify: FastifyInstance) {
  fastify.log.info(`Connecting to : ${URI}`);
  await fastify.register(fastifyMongo, {
    url: URI
  });
}

export const dbConnector = fastifyPlugin(connect);
