import { readdirSync } from 'node:fs';
import { defineWorkspace } from 'vitest/config';
import type { UserProjectConfigExport } from 'vitest/config';

export default defineWorkspace(
  /**
   * If you need to test multiple typescript configurations (like misc) simply create a file named tsconfig.{customName}.json
   * and this script will automatically create a new workspace named with the dirName followed by `customName`
   */
  readdirSync('./test/typescript', { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .reduce<UserProjectConfigExport[]>((workspaces, dir) => {
      const dirPath = `test/typescript/${dir.name}` as const;

      const tsConfigFiles = readdirSync(dirPath).filter(
        // Do not include temporary vitest tsconfig files
        (it) => it.startsWith('tsconfig.') && it.endsWith('.json') && !it.includes('vitest-temp'),
      );

      tsConfigFiles.forEach((tsConfigFileName) => {
        const workspaceName =
          tsConfigFileName === 'tsconfig.json'
            ? `typescript-${dir.name}`
            : `${dir.name}-${tsConfigFileName.split('.')[1]}`;

        workspaces.push({
          test: {
            dir: `./${dirPath}`,
            name: workspaceName,
            alias: {
              /**
               * From `vitest` >= 2 imports are resolved even if we are running only typecheck tests.
               * This will result in:
               * ```text
               * Error: Failed to resolve entry for package "react-i18next". The package may have incorrect main/module/exports specified in its package.json.
               * ```
               * To avoid a useless build process before running these tests an empty alias to `react-i18next` is added.
               */
              'react-i18next': '',
            },
            typecheck: {
              enabled: true,
              include: [`**/${dirPath}/*.test.{ts,tsx}`],
              tsconfig: `./${dirPath}/${tsConfigFileName}`,
            },
          },
        });
      });

      return workspaces;
    }, []),
);
