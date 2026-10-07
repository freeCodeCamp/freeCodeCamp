import { Config, CosmiconfigResult, Loaders, LoadersSync } from './types';
declare type LoaderResult = Config | null;
export declare type Loader = ((filepath: string, content: string) => Promise<LoaderResult>) | LoaderSync;
export declare type LoaderSync = (filepath: string, content: string) => LoaderResult;
export declare type Transform = ((CosmiconfigResult: CosmiconfigResult) => Promise<CosmiconfigResult>) | TransformSync;
export declare type TransformSync = (CosmiconfigResult: CosmiconfigResult) => CosmiconfigResult;
interface OptionsBase {
    packageProp?: string | Array<string>;
    searchPlaces?: Array<string>;
    ignoreEmptySearchPlaces?: boolean;
    stopDir?: string;
    cache?: boolean;
}
export interface Options extends OptionsBase {
    loaders?: Loaders;
    transform?: Transform;
}
export interface OptionsSync extends OptionsBase {
    loaders?: LoadersSync;
    transform?: TransformSync;
}
declare function cosmiconfig(moduleName: string, options?: Options): {
    readonly search: (searchFrom?: string) => Promise<CosmiconfigResult>;
    readonly load: (filepath: string) => Promise<CosmiconfigResult>;
    readonly clearLoadCache: () => void;
    readonly clearSearchCache: () => void;
    readonly clearCaches: () => void;
};
declare function cosmiconfigSync(moduleName: string, options?: OptionsSync): {
    readonly search: (searchFrom?: string) => CosmiconfigResult;
    readonly load: (filepath: string) => CosmiconfigResult;
    readonly clearLoadCache: () => void;
    readonly clearSearchCache: () => void;
    readonly clearCaches: () => void;
};
declare const defaultLoaders: Readonly<{
    readonly '.cjs': LoaderSync;
    readonly '.js': LoaderSync;
    readonly '.json': LoaderSync;
    readonly '.yaml': LoaderSync;
    readonly '.yml': LoaderSync;
    readonly noExt: LoaderSync;
}>;
export { cosmiconfig, cosmiconfigSync, defaultLoaders };
//# sourceMappingURL=index.d.ts.map