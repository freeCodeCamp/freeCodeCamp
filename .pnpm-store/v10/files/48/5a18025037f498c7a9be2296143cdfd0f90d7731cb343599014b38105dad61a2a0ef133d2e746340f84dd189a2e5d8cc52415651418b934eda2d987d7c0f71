export declare type LilconfigResult = null | {
    filepath: string;
    config: any;
    isEmpty?: boolean;
};
interface OptionsBase {
    stopDir?: string;
    searchPlaces?: string[];
    ignoreEmptySearchPlaces?: boolean;
    packageProp?: string | string[];
}
export declare type Transform = TransformSync | ((result: LilconfigResult) => Promise<LilconfigResult>);
export declare type TransformSync = (result: LilconfigResult) => LilconfigResult;
declare type LoaderResult = any;
export declare type LoaderSync = (filepath: string, content: string) => LoaderResult;
export declare type Loader = LoaderSync | ((filepath: string, content: string) => Promise<LoaderResult>);
export declare type Loaders = Record<string, Loader>;
export declare type LoadersSync = Record<string, LoaderSync>;
export interface Options extends OptionsBase {
    loaders?: Loaders;
    transform?: Transform;
}
export interface OptionsSync extends OptionsBase {
    loaders?: LoadersSync;
    transform?: TransformSync;
}
export declare const defaultLoaders: LoadersSync;
declare type AsyncSearcher = {
    search(searchFrom?: string): Promise<LilconfigResult>;
    load(filepath: string): Promise<LilconfigResult>;
};
export declare function lilconfig(name: string, options?: Partial<Options>): AsyncSearcher;
declare type SyncSearcher = {
    search(searchFrom?: string): LilconfigResult;
    load(filepath: string): LilconfigResult;
};
export declare function lilconfigSync(name: string, options?: OptionsSync): SyncSearcher;
export {};
