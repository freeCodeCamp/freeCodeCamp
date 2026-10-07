// @flow
import type {FilePath} from '@parcel/types';
import type {Readable, Writable} from 'stream';
import type {
  Event,
  Options as WatcherOptions,
  AsyncSubscription,
} from '@parcel/watcher';

export type FileOptions = {mode?: number, ...};
export type ReaddirOptions =
  | {withFileTypes?: false, ...}
  | {withFileTypes: true, ...};

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
  atimeMs: number;
  mtimeMs: number;
  ctimeMs: number;
  birthtimeMs: number;
  atime: Date;
  mtime: Date;
  ctime: Date;
  birthtime: Date;

  isFile(): boolean;
  isDirectory(): boolean;
  isBlockDevice(): boolean;
  isCharacterDevice(): boolean;
  isSymbolicLink(): boolean;
  isFIFO(): boolean;
  isSocket(): boolean;
}

export type Encoding =
  | 'hex'
  | 'utf8'
  | 'utf-8'
  | 'ascii'
  | 'binary'
  | 'base64'
  | 'ucs2'
  | 'ucs-2'
  | 'utf16le'
  | 'latin1';

export interface FileSystem {
  readFile(filePath: FilePath): Promise<Buffer>;
  readFile(filePath: FilePath, encoding: Encoding): Promise<string>;
  readFileSync(filePath: FilePath): Buffer;
  readFileSync(filePath: FilePath, encoding: Encoding): string;
  writeFile(
    filePath: FilePath,
    contents: Buffer | string,
    options: ?FileOptions,
  ): Promise<void>;
  copyFile(
    source: FilePath,
    destination: FilePath,
    flags?: number,
  ): Promise<void>;
  stat(filePath: FilePath): Promise<Stats>;
  statSync(filePath: FilePath): Stats;
  readdir(
    path: FilePath,
    opts?: {withFileTypes?: false, ...},
  ): Promise<FilePath[]>;
  readdir(path: FilePath, opts: {withFileTypes: true, ...}): Promise<Dirent[]>;
  readdirSync(path: FilePath, opts?: {withFileTypes?: false, ...}): FilePath[];
  readdirSync(path: FilePath, opts: {withFileTypes: true, ...}): Dirent[];
  unlink(path: FilePath): Promise<void>;
  realpath(path: FilePath): Promise<FilePath>;
  realpathSync(path: FilePath): FilePath;
  exists(path: FilePath): Promise<boolean>;
  existsSync(path: FilePath): boolean;
  mkdirp(path: FilePath): Promise<void>;
  rimraf(path: FilePath): Promise<void>;
  ncp(source: FilePath, destination: FilePath): Promise<void>;
  createReadStream(path: FilePath, options?: ?FileOptions): Readable;
  createWriteStream(path: FilePath, options?: ?FileOptions): Writable;
  cwd(): FilePath;
  chdir(dir: FilePath): void;
  watch(
    dir: FilePath,
    fn: (err: ?Error, events: Array<Event>) => mixed,
    opts: WatcherOptions,
  ): Promise<AsyncSubscription>;
  getEventsSince(
    dir: FilePath,
    snapshot: FilePath,
    opts: WatcherOptions,
  ): Promise<Array<Event>>;
  writeSnapshot(
    dir: FilePath,
    snapshot: FilePath,
    opts: WatcherOptions,
  ): Promise<void>;
  findAncestorFile(
    fileNames: Array<string>,
    fromDir: FilePath,
    root: FilePath,
  ): ?FilePath;
  findNodeModule(moduleName: string, fromDir: FilePath): ?FilePath;
  findFirstFile(filePaths: Array<FilePath>): ?FilePath;
}

// https://nodejs.org/api/fs.html#fs_class_fs_dirent
export interface Dirent {
  +name: string;
  isBlockDevice(): boolean;
  isCharacterDevice(): boolean;
  isDirectory(): boolean;
  isFIFO(): boolean;
  isFile(): boolean;
  isSocket(): boolean;
  isSymbolicLink(): boolean;
}
