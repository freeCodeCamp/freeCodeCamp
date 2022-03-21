import { Request, Response } from 'express';
import { getStepContent } from '../utils/getStepContent';

export const stepRoute = async (req: Request, res: Response) => {
  const { superblock, block, step } = req.params;

  const stepContents = await getStepContent(superblock, block, step);
  res.json(stepContents);
};
