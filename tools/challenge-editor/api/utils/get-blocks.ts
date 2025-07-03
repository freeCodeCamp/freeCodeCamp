import { readdir, readFile } from 'fs/promises';
import { join } from 'path';
import { CHALLENGE_DIR, META_DIR } from '../configs/paths';

import { PartialMeta } from '../interfaces/partial-meta';

type Block = {
  name: string;
  path: string;
};

export const getBlocks = async (sup: string): Promise<Block[]> => {
  const filePath = join(CHALLENGE_DIR, sup);

  const files = await readdir(filePath);
  const blocks = await Promise.all(
    files.map(async file => {
      const metaPath = join(META_DIR, file, 'meta.json');

      const metaData = JSON.parse(
        await readFile(metaPath, 'utf8')
      ) as PartialMeta;

      return {
        name: metaData.name,
        path: file
      };
    })
  );

  return blocks;
};
