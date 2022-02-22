import { writeFile } from 'fs/promises';
import { join } from 'path';

export const saveStep = async (
  sup: string,
  block: string,
  step: string,
  content: string
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

  await writeFile(filePath, content);
};
