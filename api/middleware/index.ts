import { NextFunction } from '../utils';

export async function auth0Verify() {
  // Verify user authorization code with Auth0
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
