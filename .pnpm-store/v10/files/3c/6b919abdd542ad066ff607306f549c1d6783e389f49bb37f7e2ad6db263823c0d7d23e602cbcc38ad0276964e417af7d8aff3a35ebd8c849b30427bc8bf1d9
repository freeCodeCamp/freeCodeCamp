/// <reference types="node" />
import { SynchronousFileSystem, FileSystem, BFSOneArgCallback, BFSCallback, FileSystemOptions } from "../core/file_system";
import { File } from "../core/file";
import { FileFlag } from "../core/file_flag";
import { default as Stats } from "../core/node_fs_stats";
export interface IModule {
    path?: string;
    code: string | undefined;
}
export interface IManager {
    getTranspiledModules: () => {
        [path: string]: {
            module: IModule;
        };
    };
    addModule(module: IModule): void;
    removeModule(module: IModule): void;
    moveModule(module: IModule, newPath: string): void;
    updateModule(module: IModule): void;
}
export interface ICodeSandboxFileSystemOptions {
    manager: IManager;
}
export default class CodeSandboxFS extends SynchronousFileSystem implements FileSystem {
    static readonly Name = "CodeSandboxFS";
    static readonly Options: FileSystemOptions;
    /**
     * Creates an InMemoryFileSystem instance.
     */
    static Create(options: ICodeSandboxFileSystemOptions, cb: BFSCallback<CodeSandboxFS>): void;
    static isAvailable(): boolean;
    private manager;
    constructor(manager: IManager);
    getName(): string;
    isReadOnly(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    empty(mainCb: BFSOneArgCallback): void;
    renameSync(oldPath: string, newPath: string): void;
    statSync(p: string, isLstate: boolean): Stats;
    createFileSync(p: string, flag: FileFlag, mode: number): File;
    openFileSync(p: string, flag: FileFlag, mode: number): File;
    rmdirSync(p: string): void;
    mkdirSync(p: string): void;
    readdirSync(path: string): string[];
    _sync(p: string, data: Buffer, cb: BFSCallback<Stats>): void;
    _syncSync(p: string, data: Buffer): void;
}
