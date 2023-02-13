import type { NextFunction, NextHandleFunction } from '@fastify/middie';

export async function auth0Verify() {
  // Verify user authorization code with Auth0
}

type MiddieRequest = Parameters<NextHandleFunction>[0];
type MiddieResponse = Parameters<NextHandleFunction>[1];

export function testMiddleware(
  req: MiddieRequest,
  res: MiddieResponse,
  next: NextFunction
) {
  console.log('Test middleware running');
  console.log(req.headers);
  console.log(req.query);
  res.setHeader('X-Test-Header', 'test');
  next();
}
