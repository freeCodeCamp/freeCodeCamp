import * as TsConfigLoader2 from "./tsconfig-loader";
export interface ExplicitParams {
    baseUrl: string;
    paths: {
        [key: string]: Array<string>;
    };
    mainFields?: Array<string>;
    addMatchAll?: boolean;
}
export declare type TsConfigLoader = (params: TsConfigLoader2.TsConfigLoaderParams) => TsConfigLoader2.TsConfigLoaderResult;
export interface ConfigLoaderParams {
    cwd: string;
    explicitParams?: ExplicitParams;
    tsConfigLoader?: TsConfigLoader;
}
export interface ConfigLoaderSuccessResult {
    resultType: "success";
    configFileAbsolutePath: string;
    baseUrl: string;
    absoluteBaseUrl: string;
    paths: {
        [key: string]: Array<string>;
    };
    mainFields?: Array<string>;
    addMatchAll?: boolean;
}
export interface ConfigLoaderFailResult {
    resultType: "failed";
    message: string;
}
export declare type ConfigLoaderResult = ConfigLoaderSuccessResult | ConfigLoaderFailResult;
export declare function loadConfig(cwd?: string): ConfigLoaderResult;
export declare function configLoader({ cwd, explicitParams, tsConfigLoader, }: ConfigLoaderParams): ConfigLoaderResult;
