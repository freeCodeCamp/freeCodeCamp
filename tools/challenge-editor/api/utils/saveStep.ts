import { writeFile } from 'fs/promises';
import { join } from 'path';
import { CHALLENGE_DIR } from '../configs/paths';

export const saveStep = async (
  sup: string,
  block: string,
  step: string,
  content: string
) => {
  const filePath = join(CHALLENGE_DIR, sup, block, step);

  await writeFile(filePath, content);
};
