/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Request, Response, NextFunction } from 'express';

export function validateChallengeBody(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { body } = req;
  if (!body || !body.challenges || !Array.isArray(body.challenges)) {
    res.status(400).send('Bad Request');
  } else {
    next();
  }
}

export function handleChallengesCompleted(req: Request, res: Response) {
  const { completedChallenges } = req.body;

  res.status(200).send('OK');
}
