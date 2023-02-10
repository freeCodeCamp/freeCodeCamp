import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { NextFunction } from '../utils';

export async function auth0Verify(
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply
) {
  await this.authenticate(request, reply);
}

export function testMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  //
  console.log('Test middleware running');
  console.log(req.headers);
  next();
}
