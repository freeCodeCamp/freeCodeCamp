import { Request, Response } from 'express';
import { getBlocks } from '../utils/get-blocks';

export const superblockRoute = async (
  req: Request,
  res: Response
): Promise<void> => {
  const sup = req.params.superblock;

  const blocks = await getBlocks(sup);

  res.json(blocks);
};
