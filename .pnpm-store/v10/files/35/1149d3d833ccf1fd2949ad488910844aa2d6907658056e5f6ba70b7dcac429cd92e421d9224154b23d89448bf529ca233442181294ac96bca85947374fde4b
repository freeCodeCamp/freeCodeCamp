/**
 * @public
 */
export type Config = any;
/**
 * @public
 */
export type CosmiconfigResult = {
    config: Config;
    filepath: string;
    isEmpty?: boolean;
} | null;
/**
 * @public
 */
export type LoaderResult = Config | null;
/**
 * @public
 */
export type Loader = ((filepath: string, content: string) => Promise<LoaderResult>) | LoaderSync;
/**
 * @public
 */
export type LoaderSync = (filepath: string, content: string) => LoaderResult;
/**
 * @public
 */
export type Transform = ((CosmiconfigResult: CosmiconfigResult) => Promise<CosmiconfigResult>) | TransformSync;
/**
 * @public
 */
export type TransformSync = (CosmiconfigResult: CosmiconfigResult) => CosmiconfigResult;
/**
 * @public
 */
export interface CommonOptions {
    packageProp?: string | Array<string>;
    searchPlaces?: Array<string>;
    ignoreEmptySearchPlaces?: boolean;
    stopDir?: string;
    cache?: boolean;
}
/**
 * @public
 */
export interface Options extends CommonOptions {
    loaders?: Loaders;
    transform?: Transform;
}
/**
 * @public
 */
export interface OptionsSync extends CommonOptions {
    loaders?: LoadersSync;
    transform?: TransformSync;
}
/**
 * @public
 */
export interface Loaders {
    [key: string]: Loader;
}
/**
 * @public
 */
export interface LoadersSync {
    [key: string]: LoaderSync;
}
/**
 * @public
 */
export interface PublicExplorerBase {
    clearLoadCache: () => void;
    clearSearchCache: () => void;
    clearCaches: () => void;
}
/**
 * @public
 */
export interface PublicExplorer extends PublicExplorerBase {
    search: (searchFrom?: string) => Promise<CosmiconfigResult>;
    load: (filepath: string) => Promise<CosmiconfigResult>;
}
/**
 * @public
 */
export interface PublicExplorerSync extends PublicExplorerBase {
    search: (searchFrom?: string) => CosmiconfigResult;
    load: (filepath: string) => CosmiconfigResult;
}
//# sourceMappingURL=types.d.ts.map