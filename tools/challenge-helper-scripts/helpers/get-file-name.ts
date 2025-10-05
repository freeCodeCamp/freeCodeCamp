import { readdir } from 'fs/promises';
import matter from 'gray-matter';
import { getProjectPath } from './get-project-info';

export const getFileName = async (id: string): Promise<string | null> => {
  const path = getProjectPath();
  const files = await readdir(path);
  for (const file of files) {
    if (!file.endsWith('.md')) {
      continue;
    }
    let frontMatter = null;
    try {
      frontMatter = matter.read(`${path}${file}`);
    } catch (_err) {
      frontMatter = null;
    }
    if (String(frontMatter?.data.id) === id) {
      return file;
    }
  }
  return null;
};
