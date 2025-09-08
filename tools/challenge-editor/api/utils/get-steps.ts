import { readFile } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { PartialMeta } from '../interfaces/partial-meta';
import { BLOCK_META_DIR, CHALLENGE_DIR } from '../configs/paths';

const getFileOrder = (id: string, meta: PartialMeta) => {
  return meta.challengeOrder.findIndex(({ id: f }) => f === id);
};

type Step = {
  name: string;
  id: string;
  path: string;
};

export const getSteps = async (sup: string, block: string): Promise<Step[]> => {
  //const superMetaPath = join(SUPERBLOCK_META_DIR, sup + ".json");

  //const superMetaData = JSON.parse(
  //  await readFile(superMetaPath, 'utf8')
  //) as Partial;

  const stepDirectory = join(CHALLENGE_DIR, block);

  const blockFolderPath = join(BLOCK_META_DIR, block + '.json');

  const blockMetaData = JSON.parse(
    await readFile(blockFolderPath, { encoding: 'utf8' })
  ) as PartialMeta;

  const stepFileNames = blockMetaData.challengeOrder.map(x => x.id + '.md');

  const stepData = await Promise.all(
    stepFileNames.map(async filename => {
      const stepPath = join(stepDirectory, filename);
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
    (a, b) =>
      getFileOrder(a.id, blockMetaData) - getFileOrder(b.id, blockMetaData)
  );
};
