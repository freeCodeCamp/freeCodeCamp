/// <reference types="node" />
/// <reference types="node" />
import { Volume } from './volume';
import { EventEmitter } from 'events';
import Stats from './Stats';
export declare const SEP = "/";
/**
 * Node in a file system (like i-node, v-node).
 */
export declare class Node extends EventEmitter {
    ino: number;
    private _uid;
    private _gid;
    private _atime;
    private _mtime;
    private _ctime;
    buf: Buffer;
    private _perm;
    mode: number;
    private _nlink;
    symlink: string[];
    constructor(ino: number, perm?: number);
    set ctime(ctime: Date);
    get ctime(): Date;
    set uid(uid: number);
    get uid(): number;
    set gid(gid: number);
    get gid(): number;
    set atime(atime: Date);
    get atime(): Date;
    set mtime(mtime: Date);
    get mtime(): Date;
    set perm(perm: number);
    get perm(): number;
    set nlink(nlink: number);
    get nlink(): number;
    getString(encoding?: string): string;
    setString(str: string): void;
    getBuffer(): Buffer;
    setBuffer(buf: Buffer): void;
    getSize(): number;
    setModeProperty(property: number): void;
    setIsFile(): void;
    setIsDirectory(): void;
    setIsSymlink(): void;
    isFile(): boolean;
    isDirectory(): boolean;
    isSymlink(): boolean;
    makeSymlink(steps: string[]): void;
    write(buf: Buffer, off?: number, len?: number, pos?: number): number;
    read(buf: Buffer | Uint8Array, off?: number, len?: number, pos?: number): number;
    truncate(len?: number): void;
    chmod(perm: number): void;
    chown(uid: number, gid: number): void;
    touch(): void;
    canRead(uid?: number, gid?: number): boolean;
    canWrite(uid?: number, gid?: number): boolean;
    del(): void;
    toJSON(): {
        ino: number;
        uid: number;
        gid: number;
        atime: number;
        mtime: number;
        ctime: number;
        perm: number;
        mode: number;
        nlink: number;
        symlink: string[];
        data: string;
    };
}
/**
 * Represents a hard link that points to an i-node `node`.
 */
export declare class Link extends EventEmitter {
    vol: Volume;
    parent: Link;
    children: {
        [child: string]: Link | undefined;
    };
    private _steps;
    node: Node;
    ino: number;
    length: number;
    name: string;
    get steps(): string[];
    set steps(val: string[]);
    constructor(vol: Volume, parent: Link, name: string);
    setNode(node: Node): void;
    getNode(): Node;
    createChild(name: string, node?: Node): Link;
    setChild(name: string, link?: Link): Link;
    deleteChild(link: Link): void;
    getChild(name: string): Link | undefined;
    getPath(): string;
    getName(): string;
    /**
     * Walk the tree path and return the `Link` at that location, if any.
     * @param steps {string[]} Desired location.
     * @param stop {number} Max steps to go into.
     * @param i {number} Current step in the `steps` array.
     *
     * @return {Link|null}
     */
    walk(steps: string[], stop?: number, i?: number): Link | null;
    toJSON(): {
        steps: string[];
        ino: number;
        children: string[];
    };
    syncSteps(): void;
}
/**
 * Represents an open file (file descriptor) that points to a `Link` (Hard-link) and a `Node`.
 */
export declare class File {
    fd: number;
    /**
     * Hard link that this file opened.
     * @type {any}
     */
    link: Link;
    /**
     * Reference to a `Node`.
     * @type {Node}
     */
    node: Node;
    /**
     * A cursor/offset position in a file, where data will be written on write.
     * User can "seek" this position.
     */
    position: number;
    flags: number;
    /**
     * Open a Link-Node pair. `node` is provided separately as that might be a different node
     * rather the one `link` points to, because it might be a symlink.
     * @param link
     * @param node
     * @param flags
     * @param fd
     */
    constructor(link: Link, node: Node, flags: number, fd: number);
    getString(encoding?: string): string;
    setString(str: string): void;
    getBuffer(): Buffer;
    setBuffer(buf: Buffer): void;
    getSize(): number;
    truncate(len?: number): void;
    seekTo(position: number): void;
    stats(): Stats<number>;
    write(buf: Buffer, offset?: number, length?: number, position?: number): number;
    read(buf: Buffer | Uint8Array, offset?: number, length?: number, position?: number): number;
    chmod(perm: number): void;
    chown(uid: number, gid: number): void;
}
