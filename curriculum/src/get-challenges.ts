import { access as _access, constants } from 'fs';
import { resolve, join } from 'path';
import { promisify } from 'util';

const access = promisify(_access);

export async function hasEnglishSource(
  basePath: string,
  translationPath: string
) {
  const englishRoot = resolve(__dirname, basePath, 'english');
  return await access(join(englishRoot, translationPath), constants.F_OK)
    .then(() => true)
    .catch(() => false);
}
