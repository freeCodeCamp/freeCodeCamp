import type { SandpackBundlerFiles, Dependencies, SandpackErrorMessage, SandpackError } from "./types";
export declare const createError: (message: string) => string;
export declare function nullthrows<T>(value?: T | null, err?: string): T;
export declare function createPackageJSON(dependencies?: Dependencies, devDependencies?: Dependencies, entry?: string): string;
export declare function addPackageJSONIfNeeded(files: SandpackBundlerFiles, dependencies?: Dependencies, devDependencies?: Dependencies, entry?: string): SandpackBundlerFiles;
export declare function extractErrorDetails(msg: SandpackErrorMessage): SandpackError;
export declare const normalizePath: <R>(path: R) => R;
