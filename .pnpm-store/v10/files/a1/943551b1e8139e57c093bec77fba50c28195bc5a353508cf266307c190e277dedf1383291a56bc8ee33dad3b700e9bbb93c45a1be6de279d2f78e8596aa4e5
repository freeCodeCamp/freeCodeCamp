/**
 * Module convert fs functions to promise based functions
 */
/// <reference types="node" />
import * as fs from 'fs';
export interface IReadResult {
    bytesRead: number;
    buffer: Uint8Array;
}
export declare const pathExists: typeof fs.existsSync;
export declare const createReadStream: typeof fs.createReadStream;
export declare function stat(path: fs.PathLike): Promise<fs.Stats>;
export declare function close(fd: number): Promise<void>;
export declare function open(path: fs.PathLike, mode: fs.Mode): Promise<number>;
export declare function read(fd: number, buffer: Uint8Array, offset: number, length: number, position: number): Promise<IReadResult>;
export declare function writeFile(path: fs.PathLike, data: Buffer | string): Promise<void>;
export declare function writeFileSync(path: fs.PathLike, data: Buffer | string): void;
export declare function readFile(path: fs.PathLike): Promise<Buffer>;
