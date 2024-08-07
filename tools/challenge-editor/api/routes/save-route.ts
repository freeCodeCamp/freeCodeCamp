import { Request, Response } from 'express';
import { saveStep } from '../utils/save-step';

export const saveRoute = async (req: Request, res: Response): Promise<void> => {
  const { superblock, block, step } = req.params;
  const content = (req.body as { content: string }).content;

  const success = await saveStep(superblock, block, step, content);

  const message = success
    ? 'Your changes have been saved and are ready to commit!'
    : 'There was an error when saving your changes. Please try again.';

  res.json({ message });
};
