import { exec } from 'child_process';
import { readFile, readdir, stat, writeFile } from 'fs/promises';
import { join, sep } from 'path';
import { promisify } from 'util';

const asyncExec = promisify(exec);

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
  const english = await loadDirectory(join(basePath, 'english'));
  for (const path of english) {
    await Promise.all(
      filtered.map(async lang => {
        if (block && !path.includes(block)) {
          return;
        }
        const targetPath = path.replace('english', lang);
        // we swallow the error here to detect if the file doesn't exist
        const status = await stat(targetPath).catch(() => null);
        if (!status) {
          const targetDir = targetPath.split(sep);
          targetDir.pop();
          console.log(`Syncing ${path.split('/english/')[1]}`);
          await asyncExec(
            `mkdir -p ${targetDir.join(sep)} && cp ${path} ${targetPath}`
          );
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
      const engPath = path.replace(lang, 'english');
      // we don't want an error, only need to know that the file exists
      const existsEnglish = await stat(engPath).catch(() => null);
      if (!existsEnglish) {
        console.log(`Unlinking ${path.split(`/${lang}/`)[1]}`);
        await asyncExec(`rm ${path}`);
      }
    }
  }
};

void (async () => {
  await syncChallenges();
})();
