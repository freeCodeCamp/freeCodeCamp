import { Request, Response } from 'express';
import { getBlocks } from '../utils/getBlocks';

export const superblockRoute = async (req: Request, res: Response) => {
  const sup = req.params.superblock;

  const blocks = await getBlocks(sup);

  res.json(blocks);
};
