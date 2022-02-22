import { Request, Response } from 'express';

export const indexRoute = (req: Request, res: Response) => {
  const supers = [
    {
      name: 'Responsive Web Design',
      path: '14-responsive-web-design-22'
    }
  ];

  res.json(supers);
};
