/**
 * Typing for the parts of tsconfig that we care about
 */
export interface Tsconfig {
    extends?: string | string[];
    compilerOptions?: {
        baseUrl?: string;
        paths?: {
            [key: string]: Array<string>;
        };
        strict?: boolean;
    };
}
export interface TsConfigLoaderResult {
    tsConfigPath: string | undefined;
    baseUrl: string | undefined;
    paths: {
        [key: string]: Array<string>;
    } | undefined;
}
export interface TsConfigLoaderParams {
    getEnv: (key: string) => string | undefined;
    cwd: string;
    loadSync?(cwd: string, filename?: string, baseUrl?: string): TsConfigLoaderResult;
}
export declare function tsConfigLoader({ getEnv, cwd, loadSync, }: TsConfigLoaderParams): TsConfigLoaderResult;
export declare function walkForTsConfig(directory: string, existsSync?: (path: string) => boolean): string | undefined;
export declare function loadTsconfig(configFilePath: string, existsSync?: (path: string) => boolean, readFileSync?: (filename: string) => string): Tsconfig | undefined;
