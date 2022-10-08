import { NextFunction, Request, Response } from 'express';

export function handleNonUser(req: Request, res: Response, next: NextFunction) {
  if (!req.user) {
    res.status(401).send('Unauthorized');
  } else {
    next();
  }
}

export function attachUser(req: Request, res: Response, next: NextFunction) {
  // TODO: attach a `user` object to the `req` object
}
