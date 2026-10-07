import { NapiInfo, PackageJson } from './types.js';
export declare function getGlobalNpmRegistry(): string;
export declare function removeRecursive(dir: string): void;
export declare function downloadedNodePath(name: string, subpath: string): string;
export declare function getNapiInfoFromPackageJson(packageJson: PackageJson, checkVersion: true): NapiInfo & {
    version: string;
};
export declare function getNapiInfoFromPackageJson(packageJson: PackageJson, checkVersion?: boolean): NapiInfo;
export declare function getNapiNativeTarget(): string[] | string;
export declare function getNapiNativeTargets(): string[];
export declare function getErrorMessage(err: unknown): string;
export declare function errorLog(message: string, ...args: unknown[]): void;
export declare function errorMessage(message: string, extra?: string): string;
