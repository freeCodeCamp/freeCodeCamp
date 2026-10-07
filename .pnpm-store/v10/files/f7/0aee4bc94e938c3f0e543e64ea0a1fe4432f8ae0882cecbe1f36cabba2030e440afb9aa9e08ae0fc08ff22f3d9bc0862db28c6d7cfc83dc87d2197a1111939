import type * as ts from 'typescript';
interface DirectoryStructureHost {
    readDirectory?(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
}
interface CachedDirectoryStructureHost extends DirectoryStructureHost {
    readDirectory(path: string, extensions?: readonly string[], exclude?: readonly string[], include?: readonly string[], depth?: number): string[];
}
export interface WatchCompilerHostOfConfigFile<T extends ts.BuilderProgram> extends ts.WatchCompilerHostOfConfigFile<T> {
    extraFileExtensions?: readonly ts.FileExtensionInfo[];
    onCachedDirectoryStructureHostCreate(host: CachedDirectoryStructureHost): void;
}
export {};
