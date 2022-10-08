import { Router } from 'express';
import {
  handleChallengesCompleted,
  validateChallengeBody
} from '../middleware/challenge';
import { handleNonUser } from '../middleware/user';

export const challengeRouter = Router();

challengeRouter.post(
  '/challenges-completed',
  handleNonUser,
  validateChallengeBody,
  handleChallengesCompleted
);
