import { Request, Response } from 'express';
import { getModules } from '../utils/get-full-stack-blocks';

export const moduleRoute = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { superblock, chapter } = req.params;

  const steps = await getModules(superblock, chapter);

  res.json(steps);
};
