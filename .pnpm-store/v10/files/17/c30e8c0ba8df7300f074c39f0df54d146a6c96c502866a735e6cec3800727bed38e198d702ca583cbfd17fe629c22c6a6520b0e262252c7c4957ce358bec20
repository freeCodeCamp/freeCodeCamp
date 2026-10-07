import { Node } from './node';
export type TStatNumber = number | bigint;
/**
 * Statistics about a file/directory, like `fs.Stats`.
 */
export declare class Stats<T = TStatNumber> {
    static build(node: Node, bigint: false): Stats<number>;
    static build(node: Node, bigint: true): Stats<bigint>;
    static build(node: Node, bigint?: boolean): Stats<TStatNumber>;
    uid: T;
    gid: T;
    rdev: T;
    blksize: T;
    ino: T;
    size: T;
    blocks: T;
    atime: Date;
    mtime: Date;
    ctime: Date;
    birthtime: Date;
    atimeMs: T;
    mtimeMs: T;
    ctimeMs: T;
    birthtimeMs: T;
    dev: T;
    mode: T;
    nlink: T;
    private _checkModeProperty;
    isDirectory(): boolean;
    isFile(): boolean;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isSymbolicLink(): boolean;
    isFIFO(): boolean;
    isSocket(): boolean;
}
export default Stats;
