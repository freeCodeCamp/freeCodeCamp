import { readdir, writeFile, stat } from 'fs/promises';
import path from 'path';

/**
 * Creates an NGINX redirect map file for Project Euler challenges.
 * After running this script with `npx tsx redirect-gen`, the map will appear
 * in the current directory as `redirectMap.map`.
 *
 * @throws {Error} If the base directory doesn't exist or file operations fail
 */
async function createRedirectMap(): Promise<void> {
  const basePath = '../../../curriculum/challenges/english/18-project-euler';
  const resolvedBasePath = path.resolve(__dirname, basePath);

  // Validate base path exists
  try {
    const basePathStat = await stat(resolvedBasePath);
    if (!basePathStat.isDirectory()) {
      throw new Error(`Base path is not a directory: ${resolvedBasePath}`);
    }
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      throw new Error(
        `Base directory does not exist: ${resolvedBasePath}. Please run this script from the tools/scripts directory.`
      );
    }
    throw new Error(`Failed to access base directory: ${err.message}`);
  }

  // Read directories
  let directories: string[];
  try {
    directories = await readdir(resolvedBasePath);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    throw new Error(`Failed to read base directory: ${err.message}`);
  }

  let mapObject = '';

  // Process each directory
  for (let i = 0; i < directories.length; i++) {
    const dirPath = path.resolve(__dirname, `${basePath}/${directories[i]}`);

    // Validate directory exists
    try {
      const dirStat = await stat(dirPath);
      if (!dirStat.isDirectory()) {
        console.warn(`Skipping non-directory: ${dirPath}`);
        continue;
      }
    } catch (error) {
      const err = error as NodeJS.ErrnoException;
      console.warn(`Skipping directory ${dirPath}: ${err.message}`);
      continue;
    }

    // Read files in directory
    let files: string[];
    try {
      files = await readdir(dirPath);
    } catch (error) {
      const err = error as NodeJS.ErrnoException;
      console.warn(`Failed to read directory ${dirPath}: ${err.message}`);
      continue;
    }

    // Process each file
    for (let j = 0; j < files.length; j++) {
      const fileName = path.parse(files[j]).name;
      if (!fileName) {
        console.warn(`Skipping file with no name: ${files[j]}`);
        continue;
      }
      mapObject += `~^/learn/coding-interview-prep/project-euler/${fileName}/?$ /learn/project-euler/${directories[i]}/${fileName}; \n`;
    }
  }

  // Write the map file
  const outputPath = path.resolve(process.cwd(), 'redirectMap.map');
  try {
    await writeFile(outputPath, mapObject, 'utf8');
    console.log(`Map file has been saved to: ${outputPath}`);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    throw new Error(`Failed to write map file: ${err.message}`);
  }
}

/**
 * Main entry point for the redirect-gen script
 * Handles errors and exits with appropriate status codes
 */
void (async () => {
  try {
    await createRedirectMap();
    process.exit(0);
  } catch (error) {
    const err = error as Error;
    console.error('Error creating redirect map:');
    console.error(err.message);
    if (err.stack) {
      console.error(err.stack);
    }
    process.exit(1);
  }
})();
