/// <reference types="node" />
import { FileFlag } from "../core/file_flag";
import { BFSCallback, FileSystem, FileSystemOptions, SynchronousFileSystem } from "../core/file_system";
import Stats from '../core/node_fs_stats';
export interface Socket {
    emit: (data: any, cb: (answer: any) => void) => void;
    dispose: () => void;
}
export interface WebsocketFSOptions {
    socket: Socket;
}
export default class WebsocketFS extends SynchronousFileSystem implements FileSystem {
    static readonly Name = "WebsocketFS";
    static readonly Options: FileSystemOptions;
    static Create(options: WebsocketFSOptions, cb: BFSCallback<WebsocketFS>): void;
    static isAvailable(): boolean;
    private socket;
    constructor(options: WebsocketFSOptions);
    getName(): string;
    isReadOnly(): boolean;
    supportsProps(): boolean;
    supportsSynch(): boolean;
    readFile(fname: string, encoding: string | null, flag: FileFlag, cb: BFSCallback<string | Buffer>): void;
    stat(p: string, isLstat: boolean | null, cb: BFSCallback<Stats>): void;
}
