import { FastifyPluginCallbackTypebox } from '@fastify/type-provider-typebox';
import { FastifyInstance, FastifyReply, FastifySchema } from 'fastify';

import databaseJsonSchema from '../../database-schemas/json-schema.json';

import { UpdateReqType } from '../utils';

// eslint-disable-next-line jsdoc/require-param
/**
 * Additional GET routes for documentation about this API.
 */
export const documentationRoutes: FastifyPluginCallbackTypebox = (
  fastify,
  _options,
  done
) => {
  fastify.get('/documentation/db-schema', getDatabaseSchema);
  done();
};

async function getDatabaseSchema(
  this: FastifyInstance,
  _req: UpdateReqType<FastifySchema>,
  reply: FastifyReply
) {
  return reply.send(databaseJsonSchema);
}
