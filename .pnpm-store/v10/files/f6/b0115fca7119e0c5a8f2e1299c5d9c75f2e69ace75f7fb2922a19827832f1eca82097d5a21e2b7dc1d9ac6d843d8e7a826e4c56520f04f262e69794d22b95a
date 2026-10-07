import { BigIntStats, BufferEncodingOption, Dirent, MakeDirectoryOptions, Mode, ObjectEncodingOptions, PathLike, RmOptions, StatOptions, Stats, TimeLike, WriteFileOptions, symlink as symlink$1 } from "node:fs";
import { QuansyncFn } from "quansync";
import { Buffer } from "node:buffer";

//#region src/index.d.ts

/**
* @link https://nodejs.org/api/fs.html#fspromisesreadfilepath-options
*/
declare const readFile: QuansyncFn<Buffer, [path: PathLike, options?: {
  encoding?: null | undefined;
  flag?: string | undefined;
} | null]> & QuansyncFn<string, [path: PathLike, options: {
  encoding: BufferEncoding;
  flag?: string | undefined;
} | BufferEncoding]>;
/**
* @link https://nodejs.org/api/fs.html#fspromiseswritefilefile-data-options
*/
declare const writeFile: QuansyncFn<void, [file: PathLike, data: string | NodeJS.ArrayBufferView<ArrayBufferLike>, options?: WriteFileOptions | undefined]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesunlinkpath
*/
declare const unlink: QuansyncFn<void, [path: PathLike]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesaccesspath-mode
*/
declare const access: QuansyncFn<void, [path: PathLike, mode?: number | undefined]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesstatpath-options
*/
declare const stat: QuansyncFn<Stats, [path: PathLike, opts?: StatOptions & {
  bigint?: false | undefined;
}]> & QuansyncFn<BigIntStats, [path: PathLike, opts: StatOptions & {
  bigint: true;
}]> & QuansyncFn<Stats | BigIntStats, [path: PathLike, opts?: StatOptions]>;
declare const lstat: typeof stat;
/**
* @link https://nodejs.org/api/fs.html#fspromisescpsrc-dest-options
*/
declare const cp: QuansyncFn<void, [src: PathLike, dest: PathLike, mode?: number | undefined]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesrmpath-options
*/
declare const rm: QuansyncFn<void, [path: PathLike, options?: RmOptions | undefined]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesmkdirpath-options
*/
declare const mkdir: QuansyncFn<string | undefined, [path: PathLike, options: MakeDirectoryOptions & {
  recursive: true;
}]> & QuansyncFn<void, [path: PathLike, options?: Mode | (MakeDirectoryOptions & {
  recursive?: false | undefined;
}) | null]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesrenameoldpath-newpath
*/
declare const rename: QuansyncFn<void, [oldPath: PathLike, newPath: PathLike]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesreaddirpath-options
*/
declare const readdir: QuansyncFn<string[], [path: PathLike, options?: (ObjectEncodingOptions & {
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
}) | BufferEncoding | null]> & QuansyncFn<Buffer[], [path: PathLike, options: {
  encoding: "buffer";
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
} | "buffer"]> & QuansyncFn<string[] | Buffer[], [path: PathLike, options?: (ObjectEncodingOptions & {
  withFileTypes?: false | undefined;
  recursive?: boolean | undefined;
}) | BufferEncoding | null]> & QuansyncFn<Dirent[], [path: PathLike, options: ObjectEncodingOptions & {
  withFileTypes: true;
  recursive?: boolean | undefined;
}]> & QuansyncFn<Dirent<Buffer>[], [path: PathLike, options: {
  encoding: "buffer";
  withFileTypes: true;
  recursive?: boolean | undefined;
}]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesrealpathpath-options
*/
declare const realpath: QuansyncFn<string, [path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null]> & QuansyncFn<Buffer, [path: PathLike, options: BufferEncodingOption]> & QuansyncFn<string | Buffer, [path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesreadlinkpath-options
*/
declare const readlink: QuansyncFn<string, [path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null]> & QuansyncFn<Buffer, [path: PathLike, options: BufferEncodingOption]> & QuansyncFn<string | Buffer, [path: PathLike, options?: ObjectEncodingOptions | BufferEncoding | null]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisessymlinktarget-path-type
*/
declare const symlink: QuansyncFn<void, [target: PathLike, path: PathLike, type?: symlink$1.Type | null]>;
/**
* @link https://nodejs.org/api/fs.html#fspromiseschownpath-uid-gid
*/
declare const chown: QuansyncFn<void, [path: PathLike, uid: number, gid: number]>;
/**
* @link https://nodejs.org/api/fs.html#fspromiseslchownpath-uid-gid
*/
declare const lchown: QuansyncFn<void, [path: PathLike, uid: number, gid: number]>;
/**
* @link https://nodejs.org/api/fs.html#fspromiseschmodpath-mode
*/
declare const chmod: QuansyncFn<void, [path: PathLike, mode: Mode]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesutimespath-atime-mtime
*/
declare const utimes: QuansyncFn<void, [path: PathLike, atime: TimeLike, mtime: TimeLike]>;
/**
* @link https://nodejs.org/api/fs.html#fspromiseslutimespath-atime-mtime
*/
declare const lutimes: QuansyncFn<void, [path: PathLike, atime: TimeLike, mtime: TimeLike]>;
/**
* @link https://nodejs.org/api/fs.html#fspromisesmkdtempprefix-options
*/
declare const mkdtemp: QuansyncFn<string, [prefix: string, options?: ObjectEncodingOptions | BufferEncoding | null]> & QuansyncFn<Buffer, [prefix: string, options: BufferEncodingOption]> & QuansyncFn<string | Buffer, [prefix: string, options?: ObjectEncodingOptions | BufferEncoding | null]>;
//#endregion
export { access, chmod, chown, cp, lchown, lstat, lutimes, mkdir, mkdtemp, readFile, readdir, readlink, realpath, rename, rm, stat, symlink, unlink, utimes, writeFile };