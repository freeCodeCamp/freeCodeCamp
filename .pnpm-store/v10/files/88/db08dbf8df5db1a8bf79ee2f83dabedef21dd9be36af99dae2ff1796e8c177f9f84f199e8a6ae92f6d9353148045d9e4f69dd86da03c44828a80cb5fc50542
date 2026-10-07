import type { TSESTreeOptions } from '../parser-options';
import type { ParseSettings } from './index';
/**
 * Checks for a matching TSConfig to a file including its parent directories,
 * permanently caching results under each directory it checks.
 *
 * @remarks
 * We don't (yet!) have a way to attach file watchers on disk, but still need to
 * cache file checks for rapid subsequent calls to fs.existsSync. See discussion
 * in https://github.com/typescript-eslint/typescript-eslint/issues/101.
 */
export declare function getProjectConfigFiles(parseSettings: Pick<ParseSettings, 'filePath' | 'tsconfigMatchCache' | 'tsconfigRootDir'>, project: TSESTreeOptions['project']): string[] | null;
