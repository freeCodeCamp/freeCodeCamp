import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import type { NextFunction, NextHandleFunction } from '@fastify/middie';

export async function auth0Verify(
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply
): Promise<void> {
  await this.authenticate(request, reply);
}

type MiddieRequest = Parameters<NextHandleFunction>[0];
type MiddieResponse = Parameters<NextHandleFunction>[1];

export function testMiddleware(
  req: MiddieRequest,
  res: MiddieResponse,
  next: NextFunction
): void {
  console.log('Test middleware running');
  console.log(req.headers);
  console.log(req.query);
  res.setHeader('X-Test-Header', 'test');
  next();
}
