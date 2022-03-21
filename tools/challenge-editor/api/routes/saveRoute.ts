import { Request, Response } from 'express';
import { saveStep } from '../utils/saveStep';

export const saveRoute = async (req: Request, res: Response) => {
  const { superblock, block, step } = req.params;
  const content = (req.body as { content: string }).content;

  await saveStep(superblock, block, step, content);

  res.send('Your changes have been saved and are ready to commit!');
};
