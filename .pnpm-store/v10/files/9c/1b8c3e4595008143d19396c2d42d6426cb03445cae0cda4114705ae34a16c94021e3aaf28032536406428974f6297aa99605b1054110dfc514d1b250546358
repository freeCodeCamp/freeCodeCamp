import type { Rule } from 'eslint';

import type ModuleCache from './ModuleCache';
import type { ESLintSettings } from './types';

export type ResultNotFound = { found: false, path?: undefined };
export type ResultFound = { found: true, path: string | null };
export type ResolvedResult = ResultNotFound | ResultFound;

export type ResolverResolve = (modulePath: string, sourceFile:string, config: unknown) => ResolvedResult;
export type ResolverResolveImport = (modulePath: string, sourceFile:string, config: unknown) => string | undefined;
export type Resolver = { interfaceVersion?: 1 | 2, resolve: ResolverResolve, resolveImport: ResolverResolveImport };

declare function resolve(
    p: string,
    context: Rule.RuleContext,
): ResolvedResult['path'];

export default resolve;

declare function fileExistsWithCaseSync(
    filepath: string | null,
    cacheSettings: ESLintSettings,
    strict: boolean
): boolean | ReturnType<typeof ModuleCache.prototype.get>;

declare function relative(modulePath: string, sourceFile: string, settings: ESLintSettings): ResolvedResult['path'];


export { fileExistsWithCaseSync, relative };
