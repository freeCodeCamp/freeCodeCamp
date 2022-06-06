import { ParsedUrlQuery } from 'querystring';
import { NextApiRequest, NextApiResponse } from 'next';
import {
  getCurriculum,
  getIdToPathSegmentsMap
} from '../../data-fetching/get-curriculum';
import { getDestination } from '../learn/[...id]';
import { getStaticPaths } from '../learn/[superblock]/[blockOrId]';
import { getStaticPaths as getIdStaticPaths } from '../learn/[superblock]/[blockOrId]/[dashedName]/[id]';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.query.secret !== process.env.REVALIDATION_SECRET) {
  //   return res.status(401).json({ message: 'Inavlid token' });
  // }
  const curriculum = await getCurriculum();
  const idToPathSegmentsMap = getIdToPathSegmentsMap(curriculum);

  try {
    const staticPaths = await getStaticPaths({});
    const idStaticPaths = await getIdStaticPaths({});
    console.log(staticPaths.paths);
    await res.unstable_revalidate(staticPaths.paths[0] as string);
    for (const path of idStaticPaths.paths) {
      const params = (path as { params: ParsedUrlQuery })?.params;
      const pathSegments = idToPathSegmentsMap[params?.id as string];
      await res.unstable_revalidate(getDestination(pathSegments));
    }
    console.log(idStaticPaths.paths.length);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('ERROR REVALIDATING');
  }
};
