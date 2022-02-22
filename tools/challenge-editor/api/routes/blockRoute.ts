import { Request, Response } from 'express';
import { getSteps } from '../utils/getSteps';

export const blockRoute = async (req: Request, res: Response) => {
  const sup = req.params.superblock;
  const block = req.params.block;

  const steps = await getSteps(sup, block);

  res.json(steps);
};
