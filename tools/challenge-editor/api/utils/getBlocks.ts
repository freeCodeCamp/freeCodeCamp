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
  const blocks: { name: string; path: string }[] = [];

  for (const file of files) {
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

    blocks.push({
      name: metaData.name,
      path: file
    });
  }

  return blocks;
};
