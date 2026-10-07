/**
 * Defines an Emscripten file system object for use in the Emscripten virtual
 * filesystem. Allows you to use synchronous BrowserFS file systems from within
 * Emscripten.
 *
 * You can construct a BFSEmscriptenFS, mount it using its mount command,
 * and then mount it into Emscripten.
 *
 * Adapted from Emscripten's NodeFS:
 * https://raw.github.com/kripken/emscripten/master/src/library_nodefs.js
 */
import FS from '../core/FS';
export interface Stats {
    dev: number;
    ino: number;
    mode: number;
    nlink: number;
    uid: number;
    gid: number;
    rdev: number;
    size: number;
    blksize: number;
    blocks: number;
    atime: Date;
    mtime: Date;
    ctime: Date;
    timestamp?: number;
}
export interface EmscriptenFSNode {
    name: string;
    mode: number;
    parent: EmscriptenFSNode;
    mount: {
        opts: {
            root: string;
        };
    };
    stream_ops: EmscriptenStreamOps;
    node_ops: EmscriptenNodeOps;
}
export interface EmscriptenStream {
    node: EmscriptenFSNode;
    nfd: any;
    flags: string;
    position: number;
}
export interface EmscriptenNodeOps {
    getattr(node: EmscriptenFSNode): Stats;
    setattr(node: EmscriptenFSNode, attr: Stats): void;
    lookup(parent: EmscriptenFSNode, name: string): EmscriptenFSNode;
    mknod(parent: EmscriptenFSNode, name: string, mode: number, dev: any): EmscriptenFSNode;
    rename(oldNode: EmscriptenFSNode, newDir: EmscriptenFSNode, newName: string): void;
    unlink(parent: EmscriptenFSNode, name: string): void;
    rmdir(parent: EmscriptenFSNode, name: string): void;
    readdir(node: EmscriptenFSNode): string[];
    symlink(parent: EmscriptenFSNode, newName: string, oldPath: string): void;
    readlink(node: EmscriptenFSNode): string;
}
export interface EmscriptenStreamOps {
    open(stream: EmscriptenStream): void;
    close(stream: EmscriptenStream): void;
    read(stream: EmscriptenStream, buffer: Uint8Array, offset: number, length: number, position: number): number;
    write(stream: EmscriptenStream, buffer: Uint8Array, offset: number, length: number, position: number): number;
    llseek(stream: EmscriptenStream, offset: number, whence: number): number;
}
export interface EmscriptenFS {
    node_ops: EmscriptenNodeOps;
    stream_ops: EmscriptenStreamOps;
    mount(mount: {
        opts: {
            root: string;
        };
    }): EmscriptenFSNode;
    createNode(parent: EmscriptenFSNode, name: string, mode: number, dev?: any): EmscriptenFSNode;
    getMode(path: string): number;
    realPath(node: EmscriptenFSNode): string;
}
export default class BFSEmscriptenFS implements EmscriptenFS {
    flagsToPermissionStringMap: {
        0: string;
        1: string;
        2: string;
        64: string;
        65: string;
        66: string;
        129: string;
        193: string;
        514: string;
        577: string;
        578: string;
        705: string;
        706: string;
        1024: string;
        1025: string;
        1026: string;
        1089: string;
        1090: string;
        1153: string;
        1154: string;
        1217: string;
        1218: string;
        4096: string;
        4098: string;
    };
    node_ops: EmscriptenNodeOps;
    stream_ops: EmscriptenStreamOps;
    private FS;
    private PATH;
    private ERRNO_CODES;
    private nodefs;
    constructor(_FS?: any, _PATH?: any, _ERRNO_CODES?: any, nodefs?: FS);
    mount(m: {
        opts: {
            root: string;
        };
    }): EmscriptenFSNode;
    createNode(parent: EmscriptenFSNode | null, name: string, mode: number, dev?: any): EmscriptenFSNode;
    getMode(path: string): number;
    realPath(node: EmscriptenFSNode): string;
    flagsToPermissionString(flags: string | number): string;
    getNodeFS(): FS;
    getFS(): any;
    getPATH(): any;
    getERRNO_CODES(): any;
}
