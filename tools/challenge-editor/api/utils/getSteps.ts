import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

import matter from 'gray-matter';

import { PartialMeta } from '../interfaces/PartialMeta';
import { ChallengeData } from '../interfaces/ChallengeData';

const getFileOrder = (id: string, meta: PartialMeta) => {
  return meta.challengeOrder.findIndex(([f]) => f === id);
};

export const getSteps = async (sup: string, block: string) => {
  const filePath = join(
    process.cwd(),
    '..',
    '..',
    '..',
    'curriculum',
    'challenges',
    'english',
    sup,
    block
  );

  const metaPath = join(
    process.cwd(),
    '..',
    '..',
    '..',
    'curriculum',
    'challenges',
    '_meta',
    block,
    'meta.json'
  );

  const metaData = JSON.parse(await readFile(metaPath, 'utf8')) as PartialMeta;

  const files = await readdir(filePath);
  const fileData: ChallengeData[] = [];

  for (const file of files) {
    const nestedFilePath = join(filePath, file);
    const nestedFileData = await readFile(nestedFilePath, 'utf8');
    const frontMatter = matter(nestedFileData);

    fileData.push({
      name: frontMatter.data.title as string,
      id: frontMatter.data.id as string,
      path: file
    });
  }

  return fileData.sort(
    (a, b) => getFileOrder(a.id, metaData) - getFileOrder(b.id, metaData)
  );
};
