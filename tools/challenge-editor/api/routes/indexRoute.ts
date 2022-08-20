import { Request, Response } from 'express';
import { superBlockList } from '../configs/superBlockList';

export const indexRoute = (req: Request, res: Response) => {
  res.json(superBlockList);
};
