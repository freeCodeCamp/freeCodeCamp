import { Request, Response } from 'express';
import { saveStep } from '../utils/saveStep';

export const saveRoute = async (req: Request, res: Response) => {
  const { superblock, block, step } = req.params;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const content = req.body.content as string;

  await saveStep(superblock, block, step, content);

  res.send('Your changes have been saved and are ready to commit!');
};
