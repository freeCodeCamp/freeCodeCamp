import { NextApiRequest, NextApiResponse } from 'next';
import { getStaticPaths } from '../learn/[superblock]/[blockOrId]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.query.secret !== process.env.REVALIDATION_SECRET) {
  //   return res.status(401).json({ message: 'Inavlid token' });
  // }

  try {
    const staticPaths = await getStaticPaths({});
    console.log(staticPaths.paths);
    await res.unstable_revalidate(staticPaths.paths[0] as string);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('ERROR REVALIDATING');
  }
};
