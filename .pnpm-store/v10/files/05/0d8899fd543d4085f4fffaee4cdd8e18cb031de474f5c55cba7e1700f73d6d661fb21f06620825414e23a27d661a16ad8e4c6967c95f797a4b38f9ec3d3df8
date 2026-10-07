import { Source, BaseLoaderOptions, Loader } from '@graphql-tools/utils';
import { GraphQLTagPluckOptions } from '@graphql-tools/graphql-tag-pluck';
export type CodeFileLoaderConfig = {
    pluckConfig?: GraphQLTagPluckOptions;
    noPluck?: boolean;
    noRequire?: boolean;
    /**
     * Set to `true` to raise errors if any matched files are not valid GraphQL
     */
    noSilentErrors?: boolean;
};
/**
 * Additional options for loading from a code file
 */
export type CodeFileLoaderOptions = {
    require?: string | string[];
} & CodeFileLoaderConfig & BaseLoaderOptions;
/**
 * This loader loads GraphQL documents and type definitions from code files
 * using `graphql-tag-pluck`.
 *
 * ```js
 * const documents = await loadDocuments('queries/*.js', {
 *   loaders: [
 *     new CodeFileLoader()
 *   ]
 * });
 * ```
 *
 * Supported extensions include: `.ts`, `.mts`, `.cts`, `.tsx`, `.js`, `.mjs`,
 * `.cjs`, `.jsx`, `.vue`, `.svelte`
 */
export declare class CodeFileLoader implements Loader<CodeFileLoaderOptions> {
    private config;
    constructor(config?: CodeFileLoaderConfig);
    private getMergedOptions;
    canLoad(pointer: string, options: CodeFileLoaderOptions): Promise<boolean>;
    canLoadSync(pointer: string, options: CodeFileLoaderOptions): boolean;
    private _buildGlobs;
    resolveGlobs(glob: string, options: CodeFileLoaderOptions): Promise<string[]>;
    resolveGlobsSync(glob: string, options: CodeFileLoaderOptions): string[];
    load(pointer: string, options: CodeFileLoaderOptions): Promise<Source[]>;
    loadSync(pointer: string, options: CodeFileLoaderOptions): Source[] | null;
    handleSinglePath(location: string, options: CodeFileLoaderOptions): Promise<Source[]>;
    handleSinglePathSync(location: string, options: CodeFileLoaderOptions): Source[] | null;
}
