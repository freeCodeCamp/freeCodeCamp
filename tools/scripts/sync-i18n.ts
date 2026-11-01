import {
  copyFile,
  mkdir,
  readFile,
  readdir,
  rm,
  stat,
  writeFile
} from 'fs/promises';
import { dirname, join } from 'path';

const loadDirectory = async (path: string): Promise<string[]> => {
  const files: string[] = [];
  const status = await stat(path);
  if (status.isDirectory()) {
    const filesInDir = await readdir(path);
    for (const file of filesInDir) {
      files.push(...(await loadDirectory(join(path, file))));
    }
  } else {
    files.push(path);
  }
  return files.filter(f => !f.includes('DS_Store'));
};

const syncChallenges = async () => {
  const block = process.env.FCC_BLOCK;
  const ignore = ['.markdownlint.yaml', '_meta', 'english'];
  const basePath = join(process.cwd(), 'curriculum', 'challenges');
  const allLangs = await readdir(basePath);
  const filtered = allLangs.filter(lang => !ignore.includes(lang));
  // these will be paths
  const englishDir = join(basePath, 'english');
  const english = await loadDirectory(englishDir);
  for (const path of english) {
    await Promise.all(
      filtered.map(async lang => {
        if (block && !path.includes(block)) {
          return;
        }
        // Swap the language directory by path segment, not by substring, so a
        // matching string elsewhere in the checkout path is never touched.
        const targetPath = join(basePath, lang, path.slice(englishDir.length));
        // we swallow the error here to detect if the file doesn't exist
        const status = await stat(targetPath).catch(() => null);
        if (!status) {
          console.log(`Syncing ${path.split('/english/')[1]}`);
          await mkdir(dirname(targetPath), { recursive: true });
          await copyFile(path, targetPath);
        }
        const englishContent = await readFile(path, 'utf-8');
        if (path.endsWith('LICENSE.txt')) {
          await writeFile(targetPath, englishContent, 'utf-8');
          return;
        }
        const langContent = await readFile(targetPath, 'utf-8');
        const engLines = englishContent.split('\n');
        const engId = engLines.find(l => l.startsWith('id'));
        const engSlug = engLines.find(l => l.startsWith('dashedName'));
        const langLines = langContent.split('\n');
        const langId = langLines.find(l => l.startsWith('id'));
        const langSlug = langLines.find(
          l => l.startsWith('dashedName') || l.startsWith('certification:')
        );
        if (!langSlug) {
          throw new Error(
            `Missing dashedName for ${targetPath}. Please add it so that it matches the English version.`
          );
        }
        if (!langId) {
          throw new Error(
            `Missing id for ${targetPath}. Please add it so that it matches the English version.`
          );
        }
        if (engId && engId !== langId) {
          langLines.splice(langLines.indexOf(langId), 1, engId);
          console.log(`Updating ID for ${targetPath}`);
          await writeFile(targetPath, langLines.join('\n'), 'utf-8');
        }
        if (engSlug && engSlug !== langSlug) {
          langLines.splice(langLines.indexOf(langSlug), 1, engSlug);
          console.log(`Updating dashed name for ${targetPath}`);
          await writeFile(targetPath, langLines.join('\n'), 'utf-8');
        }
      })
    );
  }
  for (const lang of filtered) {
    const langPath = join(process.cwd(), 'curriculum', 'challenges', lang);
    const langFiles = await loadDirectory(langPath);
    for (const path of langFiles) {
      if (block && !path.includes(block)) {
        continue;
      }
      const engPath = join(basePath, 'english', path.slice(langPath.length));
      // we don't want an error, only need to know that the file exists
      const existsEnglish = await stat(engPath).catch(() => null);
      if (!existsEnglish) {
        console.log(`Unlinking ${path.split(`/${lang}/`)[1]}`);
        await rm(path);
      }
    }
  }
};

void (async () => {
  await syncChallenges();
})();
