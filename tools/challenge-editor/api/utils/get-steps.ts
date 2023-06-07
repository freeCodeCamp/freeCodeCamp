import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { PartialMeta } from '../interfaces/partial-meta';
import { CHALLENGE_DIR, META_DIR } from '../configs/paths';

const getFileOrder = (id: string, meta: PartialMeta) => {
  return meta.challengeOrder.findIndex(([f]) => f === id);
};

type Step = {
  name: string;
  id: string;
  path: string;
};

export const getSteps = async (sup: string, block: string): Promise<Step[]> => {
  const filePath = join(CHALLENGE_DIR, sup, block);

  const metaPath = join(META_DIR, block, 'meta.json');

  const metaData = JSON.parse(await readFile(metaPath, 'utf8')) as PartialMeta;

  const stepFilenames = await readdir(filePath);
  const stepData = await Promise.all(
    stepFilenames.map(async filename => {
      const stepPath = join(filePath, filename);
      const step = await readFile(stepPath, 'utf8');
      const frontMatter = matter(step);

      return {
        name: frontMatter.data.title as string,
        id: frontMatter.data.id as string,
        path: filename
      };
    })
  );

  return stepData.sort(
    (a, b) => getFileOrder(a.id, metaData) - getFileOrder(b.id, metaData)
  );
};
