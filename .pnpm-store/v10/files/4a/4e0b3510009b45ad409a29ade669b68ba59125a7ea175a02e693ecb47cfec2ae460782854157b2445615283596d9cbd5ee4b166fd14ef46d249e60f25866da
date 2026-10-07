import * as ts from 'typescript';
interface DirectoryStructureHost {
    readDirectory?(path: string, extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>, include?: ReadonlyArray<string>, depth?: number): string[];
}
interface CachedDirectoryStructureHost extends DirectoryStructureHost {
    readDirectory(path: string, extensions?: ReadonlyArray<string>, exclude?: ReadonlyArray<string>, include?: ReadonlyArray<string>, depth?: number): string[];
}
interface WatchCompilerHostOfConfigFile<T extends ts.BuilderProgram> extends ts.WatchCompilerHostOfConfigFile<T> {
    onCachedDirectoryStructureHostCreate(host: CachedDirectoryStructureHost): void;
    extraFileExtensions?: readonly ts.FileExtensionInfo[];
}
export { WatchCompilerHostOfConfigFile };
//# sourceMappingURL=WatchCompilerHostOfConfigFile.d.ts.map
