import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

import { PartialMeta } from '../interfaces/PartialMeta';

export const getBlocks = async (sup: string) => {
  const filePath = join(
    process.cwd(),
    '..',
    '..',
    '..',
    'curriculum',
    'challenges',
    'english',
    sup
  );

  const files = await readdir(filePath);
  const blocks = await Promise.all(
    files.map(async file => {
      const metaPath = join(
        process.cwd(),
        '..',
        '..',
        '..',
        'curriculum',
        'challenges',
        '_meta',
        file,
        'meta.json'
      );

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
