import { Request, Response } from 'express';
import { getStepContent } from '../utils/get-step-contents';

export const stepRoute = async (req: Request, res: Response): Promise<void> => {
  const { superblock, block, step } = req.params;

  const stepContents = await getStepContent(superblock, block, step);
  res.json(stepContents);
};
