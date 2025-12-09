import {
  readFile,
  readdir,
  stat,
  writeFile,
  mkdir,
  copyFile,
  unlink
} from 'fs/promises';
import { join, dirname } from 'path';

/**
 * Recursively loads all files from a directory, excluding .DS_Store files
 * @param path - The directory path to load files from
 * @returns Promise resolving to an array of file paths
 * @throws {Error} If the path doesn't exist or cannot be accessed
 */
const loadDirectory = async (path: string): Promise<string[]> => {
  const files: string[] = [];
  try {
    const status = await stat(path);
    if (status.isDirectory()) {
      const filesInDir = await readdir(path);
      for (const file of filesInDir) {
        files.push(...(await loadDirectory(join(path, file))));
      }
    } else {
      files.push(path);
    }
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    throw new Error(
      `Failed to load directory ${path}: ${err.message}`
    );
  }
  return files.filter(f => !f.includes('DS_Store'));
};

/**
 * Syncs challenge files from English to other languages
 * @throws {Error} If base directory doesn't exist or file operations fail
 */
const syncChallenges = async () => {
  const block = process.env.FCC_BLOCK;
  const ignore = ['.markdownlint.yaml', '_meta', 'english'];
  const basePath = join(process.cwd(), 'curriculum', 'challenges');

  try {
    // Validate base path exists
    const basePathStat = await stat(basePath);
    if (!basePathStat.isDirectory()) {
      throw new Error(`Base path is not a directory: ${basePath}`);
    }
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      throw new Error(
        `Base directory does not exist: ${basePath}. Please run this script from the repository root.`
      );
    }
    throw error;
  }

  let allLangs: string[];
  try {
    allLangs = await readdir(basePath);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    throw new Error(`Failed to read base directory ${basePath}: ${err.message}`);
  }

  const filtered = allLangs.filter(lang => !ignore.includes(lang));
  
  // Load English files
  let english: string[];
  try {
    english = await loadDirectory(join(basePath, 'english'));
  } catch (error) {
    const err = error as Error;
    throw new Error(`Failed to load English directory: ${err.message}`);
  }

  // Sync English files to other languages
  for (const path of english) {
    await Promise.all(
      filtered.map(async lang => {
        if (block && !path.includes(block)) {
          return;
        }
        const targetPath = path.replace('english', lang);
        
        // Check if target file exists
        let targetExists = false;
        try {
          await stat(targetPath);
          targetExists = true;
        } catch (error) {
          const err = error as NodeJS.ErrnoException;
          if (err.code !== 'ENOENT') {
            console.error(
              `Error checking file ${targetPath}: ${err.message}`
            );
            return;
          }
        }

        // Create directory and copy file if it doesn't exist
        if (!targetExists) {
          try {
            const targetDir = dirname(targetPath);
            await mkdir(targetDir, { recursive: true });
            await copyFile(path, targetPath);
            console.log(`Syncing ${path.split('/english/')[1]}`);
          } catch (error) {
            const err = error as NodeJS.ErrnoException;
            console.error(
              `Failed to sync file ${path} to ${targetPath}: ${err.message}`
            );
            return;
          }
        }

        // Read and process file contents
        let englishContent: string;
        try {
          englishContent = await readFile(path, 'utf-8');
        } catch (error) {
          const err = error as NodeJS.ErrnoException;
          console.error(`Failed to read English file ${path}: ${err.message}`);
          return;
        }

        if (path.endsWith('LICENSE.txt')) {
          try {
            await writeFile(targetPath, englishContent, 'utf-8');
          } catch (error) {
            const err = error as NodeJS.ErrnoException;
            console.error(
              `Failed to write LICENSE file ${targetPath}: ${err.message}`
            );
          }
          return;
        }

        let langContent: string;
        try {
          langContent = await readFile(targetPath, 'utf-8');
        } catch (error) {
          const err = error as NodeJS.ErrnoException;
          console.error(`Failed to read language file ${targetPath}: ${err.message}`);
          return;
        }

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

        let needsUpdate = false;
        if (engId && engId !== langId) {
          langLines.splice(langLines.indexOf(langId), 1, engId);
          console.log(`Updating ID for ${targetPath}`);
          needsUpdate = true;
        }
        if (engSlug && engSlug !== langSlug) {
          langLines.splice(langLines.indexOf(langSlug), 1, engSlug);
          console.log(`Updating dashed name for ${targetPath}`);
          needsUpdate = true;
        }

        if (needsUpdate) {
          try {
            await writeFile(targetPath, langLines.join('\n'), 'utf-8');
          } catch (error) {
            const err = error as NodeJS.ErrnoException;
            console.error(
              `Failed to write updated file ${targetPath}: ${err.message}`
            );
          }
        }
      })
    );
  }

  // Remove files that don't exist in English
  for (const lang of filtered) {
    const langPath = join(process.cwd(), 'curriculum', 'challenges', lang);
    let langFiles: string[];
    try {
      langFiles = await loadDirectory(langPath);
    } catch (error) {
      const err = error as Error;
      console.error(`Failed to load language directory ${langPath}: ${err.message}`);
      continue;
    }

    for (const path of langFiles) {
      if (block && !path.includes(block)) {
        continue;
      }
      const engPath = path.replace(lang, 'english');
      
      let existsEnglish = false;
      try {
        await stat(engPath);
        existsEnglish = true;
      } catch (error) {
        const err = error as NodeJS.ErrnoException;
        if (err.code !== 'ENOENT') {
          console.error(
            `Error checking English file ${engPath}: ${err.message}`
          );
          continue;
        }
      }

      if (!existsEnglish) {
        try {
          await unlink(path);
          console.log(`Unlinking ${path.split(`/${lang}/`)[1]}`);
        } catch (error) {
          const err = error as NodeJS.ErrnoException;
          console.error(`Failed to unlink file ${path}: ${err.message}`);
        }
      }
    }
  }
};

/**
 * Main entry point for the sync-i18n script
 * Handles errors and exits with appropriate status codes
 */
void (async () => {
  try {
    await syncChallenges();
    console.log('i18n sync completed successfully');
    process.exit(0);
  } catch (error) {
    const err = error as Error;
    console.error('Error syncing i18n challenges:');
    console.error(err.message);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
})();
