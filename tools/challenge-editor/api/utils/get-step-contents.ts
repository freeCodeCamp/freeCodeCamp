import { readFile } from 'fs/promises';
import { join } from 'path';
import matter from 'gray-matter';
import { CHALLENGE_DIR } from '../configs/paths';

export const getStepContent = async (
  sup: string,
  block: string,
  step: string
): Promise<{ name: string; fileData: string }> => {
  const filePath = join(CHALLENGE_DIR, sup, block, step);

  const fileData = await readFile(filePath, 'utf8');
  const name = matter(fileData).data.title as string;

  return { name, fileData };
};
