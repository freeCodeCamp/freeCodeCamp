import { Request, Response } from 'express';
import { getStepContent } from '../utils/getStepContent';

export const stepRoute = async (req: Request, res: Response) => {
  const sup = req.params.superblock;
  const block = req.params.block;
  const step = req.params.step;

  const stepContents = await getStepContent(sup, block, step);
  res.json(stepContents);
};
