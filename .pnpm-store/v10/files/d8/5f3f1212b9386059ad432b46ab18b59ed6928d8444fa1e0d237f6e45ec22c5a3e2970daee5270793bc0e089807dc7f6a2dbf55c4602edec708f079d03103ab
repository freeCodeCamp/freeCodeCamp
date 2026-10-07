/// <reference types="node" />
import { File } from '../core/file';
import { FileFlag } from '../core/file_flag';
import { BFSCallback, BFSOneArgCallback, FileSystem, FileSystemOptions, SynchronousFileSystem } from '../core/file_system';
import { default as Stats } from '../core/node_fs_stats';
export interface IModule {
    path: string;
    updatedAt: string;
    insertedAt: string;
}
export type IFile = IModule & {
    code: string | undefined;
    savedCode: string | null;
    isBinary: boolean;
    type: 'file';
};
export type IDirectory = IModule & {
    type: 'directory';
};
export interface IManager {
    getSandboxFs: () => {
        [path: string]: IFile | IDirectory;
    };
    getJwt: () => string;
}
export interface ICodeSandboxFileSystemOptions {
    api: IManager;
}
export default class CodeSandboxEditorFS extends SynchronousFileSystem implements FileSystem {
    static readonly Name = "CodeSandboxEditorFS";
    static readonly Options: FileSystemOptions;
    /**
     * Creates an InMemoryFileSystem instance.
     */
    static Create(options: ICodeSandboxFileSystemOptions, cb: BFSCallback<CodeSandboxEditorFS>): void;
    static isAvailable(): boolean;
    private api;
    constructor(api: IManager);
    getName(): string;
    isReadOnly(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    empty(mainCb: BFSOneArgCallback): void;
    renameSync(oldPath: string, newPath: string): void;
    statSync(p: string, isLstate: boolean): Stats;
    createFileSync(p: string, flag: FileFlag, mode: number): File;
    open(p: string, flag: FileFlag, mode: number, cb: BFSCallback<File>): void;
    openFileSync(p: string, flag: FileFlag, mode: number): File;
    writeFileSync(): void;
    rmdirSync(p: string): void;
    mkdirSync(p: string): void;
    unlinkSync(p: string): void;
    readdirSync(path: string): string[];
    _sync(p: string, data: Buffer, cb: BFSCallback<Stats>): void;
    _syncSync(p: string, data: Buffer): void;
}
