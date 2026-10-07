import { N as Nullable, A as Arrayable } from './index.d-DGmxD2U7.js';
import './trace-mapping.d-DLVdEqOp.js';

declare const isWindows: boolean;
declare function slash(str: string): string;
declare function isBareImport(id: string): boolean;
declare const VALID_ID_PREFIX = "/@id/";
declare function normalizeRequestId(id: string, base?: string): string;
declare function cleanUrl(url: string): string;
declare function isInternalRequest(id: string): boolean;
declare function normalizeModuleId(id: string): string;
declare function isPrimitive(v: any): boolean;
declare function toFilePath(id: string, root: string): {
	path: string
	exists: boolean
};
declare function isNodeBuiltin(id: string): boolean;
/**
* Convert `Arrayable<T>` to `Array<T>`
*
* @category Array
*/
declare function toArray<T>(array?: Nullable<Arrayable<T>>): Array<T>;
declare function getCachedData<T>(cache: Map<string, T>, basedir: string, originalBasedir: string): NonNullable<T> | undefined;
declare function setCacheData<T>(cache: Map<string, T>, data: T, basedir: string, originalBasedir: string): void;
declare function withTrailingSlash(path: string): string;
declare function createImportMetaEnvProxy(): NodeJS.ProcessEnv;
declare function findNearestPackageData(basedir: string): Promise<{
	type?: "module" | "commonjs"
}>;

export { VALID_ID_PREFIX, cleanUrl, createImportMetaEnvProxy, findNearestPackageData, getCachedData, isBareImport, isInternalRequest, isNodeBuiltin, isPrimitive, isWindows, normalizeModuleId, normalizeRequestId, setCacheData, slash, toArray, toFilePath, withTrailingSlash };
