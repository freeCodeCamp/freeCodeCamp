import { readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';

export const getStepContent = async (
  sup: string,
  block: string,
  step: string
) => {
  const filePath = join(
    process.cwd(),
    '..',
    '..',
    '..',
    'curriculum',
    'challenges',
    'english',
    sup,
    block,
    step
  );

  const fileData = await readFile(filePath, 'utf8');
  const name = matter(fileData).data.title as string;

  return { name, fileData };
};
