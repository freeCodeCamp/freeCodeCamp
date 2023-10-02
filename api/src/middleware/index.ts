import type { NextFunction, NextHandleFunction } from '@fastify/middie';

type MiddieRequest = Parameters<NextHandleFunction>[0];
type MiddieResponse = Parameters<NextHandleFunction>[1];

/**
 * Test middleware used to log request and response data?
 *
 * @param req The request payload.
 * @param res The response to be sent back to the request.
 * @param next Callback function to indicate that the middleware logic is complete.
 */
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
