import { Request, Response } from 'express';
import { getBlocks } from '../utils/get-full-stack-blocks';

export const moduleBlockRoute = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { superblock, chapter, module } = req.params;

  const steps = await getBlocks(superblock, chapter, module);

  res.json(steps);
};
