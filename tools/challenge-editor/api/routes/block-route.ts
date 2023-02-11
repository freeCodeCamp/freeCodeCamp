import { Request, Response } from 'express';
import { getSteps } from '../utils/get-steps';

export const blockRoute = async (req: Request, res: Response) => {
  const { superblock, block } = req.params;

  const steps = await getSteps(superblock, block);

  res.json(steps);
};
