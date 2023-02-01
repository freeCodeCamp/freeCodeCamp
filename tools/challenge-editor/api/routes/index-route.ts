import { Request, Response } from 'express';
import { superBlockList } from '../configs/super-block-list';

export const indexRoute = (req: Request, res: Response) => {
  res.json(superBlockList);
};
