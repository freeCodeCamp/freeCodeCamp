type System = import("typescript").System;
type CompilerOptions = import("typescript").CompilerOptions;
type CustomTransformers = import("typescript").CustomTransformers;
type LanguageServiceHost = import("typescript").LanguageServiceHost;
type CompilerHost = import("typescript").CompilerHost;
type SourceFile = import("typescript").SourceFile;
type TS = typeof import("typescript");
type FetchLike = (url: string) => Promise<{
    json(): Promise<any>;
    text(): Promise<string>;
}>;
interface LocalStorageLike {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export interface VirtualTypeScriptEnvironment {
    sys: System;
    languageService: import("typescript").LanguageService;
    getSourceFile: (fileName: string) => import("typescript").SourceFile | undefined;
    createFile: (fileName: string, content: string) => void;
    updateFile: (fileName: string, content: string, replaceTextSpan?: import("typescript").TextSpan) => void;
    deleteFile: (fileName: string) => void;
}
/**
 * Makes a virtual copy of the TypeScript environment. This is the main API you want to be using with
 * @typescript/vfs. A lot of the other exposed functions are used by this function to get set up.
 *
 * @param sys an object which conforms to the TS Sys (a shim over read/write access to the fs)
 * @param rootFiles a list of files which are considered inside the project
 * @param ts a copy pf the TypeScript module
 * @param compilerOptions the options for this compiler run
 * @param customTransformers custom transformers for this compiler run
 */
export declare function createVirtualTypeScriptEnvironment(sys: System, rootFiles: string[], ts: TS, compilerOptions?: CompilerOptions, customTransformers?: CustomTransformers): VirtualTypeScriptEnvironment;
/**
 * Grab the list of lib files for a particular target, will return a bit more than necessary (by including
 * the dom) but that's OK, we're really working with the constraint that you can't get a list of files
 * when running in a browser.
 *
 * @param target The compiler settings target baseline
 * @param ts A copy of the TypeScript module
 */
export declare const knownLibFilesForCompilerOptions: (compilerOptions: CompilerOptions, ts: TS) => string[];
/**
 * Sets up a Map with lib contents by grabbing the necessary files from
 * the local copy of typescript via the file system.
 *
 * The first two args are un-used, but kept around so as to not cause a
 * semver major bump for no gain to module users.
 */
export declare const createDefaultMapFromNodeModules: (_compilerOptions: CompilerOptions, _ts?: typeof import("typescript"), tsLibDirectory?: string) => Map<string, string>;
/**
 * Adds recursively files from the FS into the map based on the folder
 */
export declare const addAllFilesFromFolder: (map: Map<string, string>, workingDir: string) => void;
/** Adds all files from node_modules/@types into the FS Map */
export declare const addFilesForTypesIntoFolder: (map: Map<string, string>) => void;
export interface LZString {
    compressToUTF16(input: string): string;
    decompressFromUTF16(compressed: string): string;
}
/**
 * Create a virtual FS Map with the lib files from a particular TypeScript
 * version based on the target, Always includes dom ATM.
 *
 * @param options The compiler target, which dictates the libs to set up
 * @param version the versions of TypeScript which are supported
 * @param cache should the values be stored in local storage
 * @param ts a copy of the typescript import
 * @param lzstring an optional copy of the lz-string import
 * @param fetcher an optional replacement for the global fetch function (tests mainly)
 * @param storer an optional replacement for the localStorage global (tests mainly)
 */
export declare const createDefaultMapFromCDN: (options: CompilerOptions, version: string, cache: boolean, ts: TS, lzstring?: LZString, fetcher?: FetchLike, storer?: LocalStorageLike) => Promise<Map<string, string>>;
/**
 * Creates an in-memory System object which can be used in a TypeScript program, this
 * is what provides read/write aspects of the virtual fs
 */
export declare function createSystem(files: Map<string, string>): System;
/**
 * Creates a file-system backed System object which can be used in a TypeScript program, you provide
 * a set of virtual files which are prioritised over the FS versions, then a path to the root of your
 * project (basically the folder your node_modules lives)
 */
export declare function createFSBackedSystem(files: Map<string, string>, _projectRoot: string, ts: TS, tsLibDirectory?: string): System;
/**
 * Creates an in-memory CompilerHost -which is essentially an extra wrapper to System
 * which works with TypeScript objects - returns both a compiler host, and a way to add new SourceFile
 * instances to the in-memory file system.
 */
export declare function createVirtualCompilerHost(sys: System, compilerOptions: CompilerOptions, ts: TS): {
    compilerHost: CompilerHost;
    updateFile: (sourceFile: SourceFile) => boolean;
    deleteFile: (sourceFile: SourceFile) => boolean;
};
/**
 * Creates an object which can host a language service against the virtual file-system
 */
export declare function createVirtualLanguageServiceHost(sys: System, rootFiles: string[], compilerOptions: CompilerOptions, ts: TS, customTransformers?: CustomTransformers): {
    languageServiceHost: LanguageServiceHost;
    updateFile: (sourceFile: import("typescript").SourceFile) => void;
    deleteFile: (sourceFile: import("typescript").SourceFile) => void;
};
export {};
