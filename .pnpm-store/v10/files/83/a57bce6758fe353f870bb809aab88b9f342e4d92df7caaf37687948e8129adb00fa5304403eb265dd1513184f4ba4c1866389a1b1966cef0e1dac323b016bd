import EventEmitter, { EventMap } from 'bare-events'
import Buffer, { BufferEncoding } from 'bare-buffer'
import URL from 'bare-url'
import { Readable, Writable } from 'bare-stream'
import promises from './promises'
import constants from './lib/constants'

export { promises, constants }

type Path = string | Buffer | URL

type Flag =
  | 'a'
  | 'a+'
  | 'as'
  | 'as+'
  | 'ax'
  | 'ax+'
  | 'r'
  | 'r+'
  | 'rs'
  | 'rs+'
  | 'sa'
  | 'sa+'
  | 'sr'
  | 'sr+'
  | 'w'
  | 'w+'
  | 'wx'
  | 'wx+'
  | 'xa'
  | 'xa+'
  | 'xw'
  | 'xw+'

interface Callback<A extends unknown[] = []> {
  (err: Error | null, ...args: A): void
}

export interface Dir<T extends string | Buffer = string | Buffer>
  extends Iterable<Dirent>, AsyncIterable<Dirent> {
  readonly path: string

  read(): Promise<Dirent<T> | null>
  read(cb: Callback<[dirent: Dirent<T> | null]>): void
  readSync(): Dirent<T> | null

  close(): Promise<void>
  close(cb: Callback): void
  closeSync(): void
}

export class Dir {
  private constructor(path: string, handle: ArrayBuffer, opts?: OpendirOptions)
}

export interface Dirent<T extends string | Buffer = string | Buffer> {
  readonly path: string
  readonly name: T
  readonly type: number

  isFile(): boolean
  isDirectory(): boolean
  isSymbolicLink(): boolean
  isFIFO(): boolean
  isSocket(): boolean
  isCharacterDevice(): boolean
  isBlockDevice(): boolean
}

export class Dirent<T extends string | Buffer = string | Buffer> {
  private constructor(path: string, name: T, type: number)
}

export interface Stats {
  readonly dev: number
  readonly mode: number
  readonly nlink: number
  readonly uid: number
  readonly gid: number
  readonly rdev: number
  readonly blksize: number
  readonly ino: number
  readonly size: number
  readonly blocks: number
  readonly atimeMs: Date
  readonly mtimeMs: Date
  readonly ctimeMs: Date
  readonly birthtimeMs: Date

  isDirectory(): boolean
  isFile(): boolean
  isBlockDevice(): boolean
  isCharacterDevice(): boolean
  isFIFO(): boolean
  isSymbolicLink(): boolean
  isSocket(): boolean
}

export class Stats {
  private constructor(
    dev: number,
    mode: number,
    nlink: number,
    uid: number,
    gid: number,
    rdev: number,
    blksize: number,
    ino: number,
    size: number,
    blocks: number,
    atimeMs: number,
    mtimeMs: number,
    ctimeMs: number,
    birthtimeMs: number
  )
}

export interface StatFs {
  readonly type: number
  readonly bsize: number
  readonly blocks: number
  readonly bfree: number
  readonly bavail: number
  readonly files: number
  readonly ffree: number
}

export class StatsFs {
  private constructor(
    type: number,
    bsize: number,
    blocks: number,
    bfree: number,
    bavail: number,
    files: number,
    ffree: number
  )
}

export interface ReadStreamOptions {
  fd?: number
  flags?: Flag
  mode?: number
  start?: number
  end?: number
}

export interface ReadStream extends Readable {
  readonly path: string | null
  readonly fd: number
  readonly flags: Flag
  readonly mode: number
}

export class ReadStream {
  private constructor(path: Path | null, opts?: WriteStreamOptions)
}

export function createReadStream(path: Path | null, opts?: ReadStreamOptions): ReadStream

export interface WriteStreamOptions {
  fd?: number
  flags?: Flag
  mode?: number
}

export interface WriteStream extends Writable {
  readonly path: string | null
  readonly fd: number
  readonly flags: Flag
  readonly mode: number
}

export class WriteStream {
  private constructor(path: Path | null, opts?: WriteStreamOptions)
}

export function createWriteStream(path: Path | null, opts?: WriteStreamOptions): WriteStream

export interface WatcherOptions {
  persistent?: boolean
  recursive?: boolean
  encoding?: BufferEncoding | 'buffer'
}

export type WatcherEventType = 'rename' | 'change'

export interface WatcherEvents<T extends string | Buffer = string | Buffer> extends EventMap {
  error: [err: Error]
  change: [eventType: WatcherEventType, filename: T]
  close: []
}

export interface Watcher<T extends string | Buffer = string | Buffer>
  extends
    EventEmitter<WatcherEvents<T>>,
    AsyncIterable<{ eventType: WatcherEventType; filename: T }> {
  close(): void
  ref(): void
  unref(): void
}

export class Watcher {
  private constructor(path: Path, opts: WatcherOptions)
}

export function access(filepath: Path, mode?: number): Promise<void>

export function access(filepath: Path, mode: number, cb: Callback): void

export function access(filepath: Path, cb: Callback): void

export function accessSync(filepath: Path, mode?: number): void

export interface AppendFileOptions {
  encoding?: BufferEncoding
  flag?: string
  mode?: number
}

export function appendFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  opts?: AppendFileOptions
): Promise<void>

export function appendFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  encoding: BufferEncoding
): Promise<void>

export function appendFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  opts: AppendFileOptions,
  cb: Callback
): void

export function appendFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  encoding: BufferEncoding,
  cb: Callback
): void

export function appendFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  cb: Callback
): void

export function appendFileSync(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  opts?: AppendFileOptions
): void

export function appendFileSync(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  encoding: BufferEncoding
): void

export function chmod(filepath: Path, mode: string | number): Promise<void>

export function chmod(filepath: Path, mode: string | number, cb: Callback): void

export function chmodSync(filepath: Path, mode: string | number): void

export function chown(filepath: Path, uid: number, gid: number): Promise<void>

export function chown(filepath: Path, uid: number, gid: number, cb: Callback): void

export function chownSync(filepath: Path, uid: number, gid: number): void

export function close(fd: number): Promise<void>

export function close(fd: number, cb: Callback): void

export function closeSync(fd: number): void

export function copyFile(src: Path, dst: Path, mode?: number): Promise<void>

export function copyFile(src: Path, dst: Path, mode: number, cb: Callback): void

export function copyFile(src: Path, dst: Path, cb: Callback): void

export function copyFileSync(src: Path, dst: Path, mode?: number): void

export interface CpOptions {
  recursive?: boolean
}

export function cp(src: Path, dst: Path, opts?: CpOptions): Promise<void>

export function cp(src: Path, dst: Path, opts: CpOptions, cb: Callback): void

export function cp(src: Path, dst: Path, cb: Callback): void

export function cpSync(src: Path, dst: Path, opts?: CpOptions): void

export function exists(filepath: Path): Promise<boolean>

export function exists(filepath: Path, cb: (exists: boolean) => void): void

export function existsSync(filepath: Path): boolean

export function fchmod(fd: number, mode: string | number): Promise<void>

export function fchmod(fd: number, mode: string | number, cb: Callback): void

export function fchmodSync(fd: number, mode: string | number): void

export function fchown(fd: number, uid: number, gid: number): Promise<void>

export function fchown(fd: number, uid: number, gid: number, cb: Callback): void

export function fchownSync(fd: number, uid: number, gid: number): void

export function fdatasync(fd: number): Promise<void>

export function fdatasync(fd: number, cb: Callback): void

export function fdatasyncSync(fd: number): void

export function fstat(fd: number): Promise<Stats>

export function fstat(fd: number, cb: Callback<[stats: Stats | null]>): void

export function fstatSync(fd: number): Stats

export function fsync(fd: number): Promise<void>

export function fsync(fd: number, cb: Callback): void

export function fsyncSync(fd: number): void

export function ftruncate(fd: number, len?: number): Promise<void>

export function ftruncate(fd: number, len: number, cb: Callback): void

export function ftruncate(fd: number, cb: Callback): void

export function ftruncateSync(fd: number, len?: number): void

export function lchown(filepath: Path, uid: number, gid: number): Promise<void>

export function lchown(filepath: Path, uid: number, gid: number, cb: Callback): void

export function lchownSync(filepath: Path, uid: number, gid: number): void

export function lstat(filepath: Path): Promise<Stats>

export function lstat(filepath: Path, cb: Callback<[stats: Stats | null]>): void

export function lstatSync(filepath: Path): Stats

export function utimes(filepath: Path, atime: number | Date, mtime: number | Date): Promise<void>

export function utimes(
  filepath: Path,
  atime: number | Date,
  mtime: number | Date,
  cb: Callback
): void

export function utimesSync(filepath: Path, atime: number | Date, mtime: number | Date): void

export function lutimes(filepath: Path, atime: number | Date, mtime: number | Date): Promise<void>

export function lutimes(
  filepath: Path,
  atime: number | Date,
  mtime: number | Date,
  cb: Callback
): void

export function lutimesSync(filepath: Path, atime: number | Date, mtime: number | Date): void

export function futimes(fd: number, atime: number | Date, mtime: number | Date): Promise<void>

export function futimes(fd: number, atime: number | Date, mtime: number | Date, cb: Callback): void

export function futimesSync(fd: number, atime: number | Date, mtime: number | Date): void

export function link(src: Path, dst: Path): Promise<void>

export function link(src: Path, dst: Path, cb: Callback): void

export function linkSync(src: Path, dst: Path): void

export interface MkdirOptions {
  mode?: number
  recursive?: boolean
}

export function mkdir(filepath: Path, opts?: MkdirOptions): Promise<void>

export function mkdir(filepath: Path, mode: number): Promise<void>

export function mkdir(filepath: Path, opts: MkdirOptions, cb: Callback): void

export function mkdir(filepath: Path, mode: number, cb: Callback): void

export function mkdir(filepath: Path, cb: Callback): void

export function mkdirSync(filepath: Path, opts?: MkdirOptions): void

export function mkdirSync(filepath: Path, mode: number): void

export function mkdtemp(prefix: Path): Promise<string>

export function mkdtemp(prefix: Path, cb: Callback<[path: string | null]>): void

export function mkdtempSync(prefix: Path): string

export function open(filepath: Path, flags?: Flag | number, mode?: string | number): Promise<number>

export function open(
  filepath: Path,
  flags: Flag | number,
  mode: string | number,
  cb: Callback<[fd: number]>
): void

export function open(filepath: Path, flags: Flag | number, cb: Callback<[fd: number]>): void

export function open(filepath: Path, cb: Callback<[fd: number]>): void

export function openSync(filepath: Path, flags?: Flag | number, mode?: string | number): number

export interface OpendirOptions {
  encoding?: BufferEncoding | 'buffer'
  bufferSize?: number
}

export function opendir(
  filepath: Path,
  opts: OpendirOptions & { encoding?: BufferEncoding }
): Promise<Dir<string>>

export function opendir(
  filepath: Path,
  opts: OpendirOptions & { encoding: 'buffer' }
): Promise<Dir<Buffer>>

export function opendir(filepath: Path, opts: OpendirOptions): Promise<Dir>

export function opendir(filepath: Path, encoding: BufferEncoding): Promise<Dir<string>>

export function opendir(filepath: Path, encoding: 'buffer'): Promise<Dir<Buffer>>

export function opendir(filepath: Path, encoding: BufferEncoding | 'buffer'): Promise<Dir>

export function opendir(filepath: Path): Promise<Dir<string>>

export function opendir(
  filepath: Path,
  opts: OpendirOptions & { encoding?: BufferEncoding },
  cb: Callback<[dir: Dir<string> | null]>
): void

export function opendir(
  filepath: Path,
  opts: OpendirOptions & { encoding: 'buffer' },
  cb: Callback<[dir: Dir<Buffer> | null]>
): void

export function opendir(filepath: Path, opts: OpendirOptions, cb: Callback<[dir: Dir | null]>): void

export function opendir(
  filepath: Path,
  encoding: BufferEncoding,
  cb: Callback<[dir: Dir<string> | null]>
): void

export function opendir(
  filepath: Path,
  encoding: 'buffer',
  cb: Callback<[dir: Dir<Buffer> | null]>
): void

export function opendir(
  filepath: Path,
  encoding: BufferEncoding | 'buffer',
  cb: Callback<[dir: Dir | null]>
): void

export function opendir(filepath: Path, cb: Callback<[dir: Dir<string> | null]>): void

export function opendirSync(
  filepath: Path,
  opts: OpendirOptions & { encoding?: BufferEncoding }
): Dir<string>

export function opendirSync(
  filepath: Path,
  opts: OpendirOptions & { encoding: 'buffer' }
): Dir<Buffer>

export function opendirSync(filepath: Path, opts: OpendirOptions): Dir

export function opendirSync(filepath: Path, encoding: BufferEncoding): Dir<string>

export function opendirSync(filepath: Path, encoding: 'buffer'): Dir<Buffer>

export function opendirSync(filepath: Path, encoding: BufferEncoding | 'buffer'): Dir

export function opendirSync(filepath: Path): Dir<string>

export function read(
  fd: number,
  buffer: Buffer | ArrayBufferView,
  offset?: number,
  len?: number,
  pos?: number
): Promise<number>

export function read(
  fd: number,
  buffer: Buffer | ArrayBufferView,
  offset: number,
  len: number,
  pos: number,
  cb: Callback<[len: number]>
): void

export function read(
  fd: number,
  buffer: Buffer | ArrayBufferView,
  offset: number,
  len: number,
  cb: Callback<[len: number]>
): void

export function read(
  fd: number,
  buffer: Buffer | ArrayBufferView,
  offset: number,
  cb: Callback<[len: number]>
): void

export function read(
  fd: number,
  buffer: Buffer | ArrayBufferView,
  cb: Callback<[len: number]>
): void

export function readSync(
  fd: number,
  buffer: Buffer | ArrayBufferView,
  offset?: number,
  len?: number,
  pos?: number
): number

export interface ReadFileOptions {
  encoding?: BufferEncoding | 'buffer'
  flag?: Flag
}

export function readFile(
  filepath: Path,
  opts: ReadFileOptions & { encoding: BufferEncoding }
): Promise<string>

export function readFile(
  filepath: Path,
  opts: ReadFileOptions & { encoding?: 'buffer' }
): Promise<Buffer>

export function readFile(filepath: Path, opts: ReadFileOptions): Promise<string | Buffer>

export function readFile(filepath: Path, encoding: BufferEncoding): Promise<string>

export function readFile(filepath: Path, encoding: 'buffer'): Promise<Buffer>

export function readFile(
  filepath: Path,
  encoding?: BufferEncoding | 'buffer'
): Promise<string | Buffer>

export function readFile(filepath: Path): Promise<Buffer>

export function readFile(
  filepath: Path,
  opts: ReadFileOptions & { encoding: BufferEncoding },
  cb: Callback<[buffer?: string]>
): void

export function readFile(
  filepath: Path,
  opts: ReadFileOptions & { encoding?: 'buffer' },
  cb: Callback<[buffer?: Buffer]>
): void

export function readFile(
  filepath: Path,
  opts: ReadFileOptions,
  cb: Callback<[buffer?: string | Buffer]>
): void

export function readFile(
  filepath: Path,
  encoding: BufferEncoding,
  cb: Callback<[buffer?: string]>
): void

export function readFile(filepath: Path, encoding: 'buffer', cb: Callback<[buffer?: Buffer]>): void

export function readFile(
  filepath: Path,
  encoding: BufferEncoding | 'buffer',
  cb: Callback<[buffer?: string | Buffer]>
): void

export function readFile(filepath: Path, cb: Callback<[buffer?: Buffer]>): void

export function readFileSync(
  filepath: Path,
  opts: ReadFileOptions & { encoding: BufferEncoding }
): string

export function readFileSync(
  filepath: Path,
  opts: ReadFileOptions & { encoding?: 'buffer' }
): Buffer

export function readFileSync(filepath: Path, opts: ReadFileOptions): string | Buffer

export function readFileSync(filepath: Path, encoding: BufferEncoding): string

export function readFileSync(filepath: Path, encoding: 'buffer'): Buffer

export function readFileSync(filepath: Path, encoding?: BufferEncoding | 'buffer'): string | Buffer

export function readFileSync(filepath: Path): Buffer

export interface ReaddirOptions extends OpendirOptions {
  withFileTypes?: boolean
}
export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding }
): Promise<Dir<string>[] | string[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding; withFileTypes: true }
): Promise<Dir<string>[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding; withFileTypes?: false }
): Promise<string[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer' }
): Promise<Dir<Buffer>[] | Buffer[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer'; withFileTypes: true }
): Promise<Dir<Buffer>[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer'; withFileTypes?: false }
): Promise<Buffer[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { withFileTypes: true }
): Promise<Dir<string | Buffer>[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { withFileTypes?: false }
): Promise<string[] | Buffer[]>

export function readdir(filepath: Path, opts: ReaddirOptions): Promise<Dir[] | string[] | Buffer[]>

export function readdir(filepath: Path, encoding: BufferEncoding): Promise<string[]>

export function readdir(filepath: Path, encoding: 'buffer'): Promise<Buffer[]>

export function readdir(
  filepath: Path,
  encoding: BufferEncoding | 'buffer'
): Promise<string[] | Buffer[]>

export function readdir(filepath: Path): Promise<string[]>

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding },
  cb: Callback<[entries: Dir<string>[] | string[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding; withFileTypes: true },
  cb: Callback<[entries: Dir<string>[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding; withFileTypes?: false },
  cb: Callback<[entries: string[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer' },
  cb: Callback<[entries: Dir<Buffer>[] | Buffer[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer'; withFileTypes: true },
  cb: Callback<[entries: Dir<Buffer>[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer'; withFileTypes?: false },
  cb: Callback<[entries: Buffer[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { withFileTypes: true },
  cb: Callback<[entries: Dir<string | Buffer>[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions & { withFileTypes?: false },
  cb: Callback<[entries: string[] | Buffer[] | null]>
): void

export function readdir(
  filepath: Path,
  opts: ReaddirOptions,
  cb: Callback<[entries: Dir[] | string[] | Buffer[] | null]>
): void

export function readdir(
  filepath: Path,
  encoding: BufferEncoding,
  cb: Callback<[entries: string[] | null]>
): void

export function readdir(
  filepath: Path,
  encoding: 'buffer',
  cb: Callback<[entries: Buffer[] | null]>
): void

export function readdir(
  filepath: Path,
  encoding: BufferEncoding | 'buffer',
  cb: Callback<[entries: string[] | Buffer[] | null]>
): void

export function readdir(filepath: Path, cb: Callback<[entries: string[] | null]>): void

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding }
): Dir<string>[] | string[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding; withFileTypes: true }
): Dir<string>[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { encoding?: BufferEncoding; withFileTypes?: false }
): string[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer' }
): Dir<Buffer>[] | Buffer[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer'; withFileTypes: true }
): Dir<Buffer>[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { encoding: 'buffer'; withFileTypes?: false }
): Buffer[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { withFileTypes: true }
): Dir<string | Buffer>[]

export function readdirSync(
  filepath: Path,
  opts: ReaddirOptions & { withFileTypes?: false }
): string[] | Buffer[]

export function readdirSync(filepath: Path, opts: ReaddirOptions): Dir[] | string[] | Buffer[]

export function readdirSync(filepath: Path, encoding: BufferEncoding): string[]

export function readdirSync(filepath: Path, encoding: 'buffer'): Buffer[]

export function readdirSync(
  filepath: Path,
  encoding: BufferEncoding | 'buffer'
): string[] | Buffer[]

export function readdirSync(filepath: Path): string[]

export interface ReadlinkOptions {
  encoding?: BufferEncoding | 'buffer'
}

export function readlink(
  filepath: Path,
  opts: ReadlinkOptions & { encoding?: BufferEncoding }
): Promise<string>

export function readlink(
  filepath: Path,
  opts: ReadlinkOptions & { encoding: 'buffer' }
): Promise<Buffer>

export function readlink(filepath: Path, opts: ReadlinkOptions): Promise<string | Buffer>

export function readlink(filepath: Path, encoding: BufferEncoding): Promise<string>

export function readlink(filepath: Path, encoding: 'buffer'): Promise<Buffer>

export function readlink(
  filepath: Path,
  encoding: BufferEncoding | 'buffer'
): Promise<string | Buffer>

export function readlink(filepath: Path): Promise<string>

export function readlink(
  filepath: Path,
  opts: ReadlinkOptions & { encoding?: BufferEncoding },
  cb: Callback<[link: string | null]>
): void

export function readlink(
  filepath: Path,
  opts: ReadlinkOptions & { encoding: 'buffer' },
  cb: Callback<[link: Buffer | null]>
): void

export function readlink(
  filepath: Path,
  opts: ReadlinkOptions,
  cb: Callback<[link: string | Buffer | null]>
): void

export function readlink(
  filepath: Path,
  encoding: BufferEncoding,
  cb: Callback<[link: string | null]>
): void

export function readlink(
  filepath: Path,
  encoding: 'buffer',
  cb: Callback<[link: Buffer | null]>
): void

export function readlink(
  filepath: Path,
  encoding: BufferEncoding | 'buffer',
  cb: Callback<[link: string | Buffer | null]>
): void

export function readlink(filepath: Path, cb: Callback<[link: string | null]>): void

export function readlinkSync(
  filepath: Path,
  opts: ReadlinkOptions & { encoding?: BufferEncoding }
): string

export function readlinkSync(filepath: Path, opts: ReadlinkOptions & { encoding: 'buffer' }): Buffer

export function readlinkSync(filepath: Path, opts: ReadlinkOptions): string | Buffer

export function readlinkSync(filepath: Path, encoding: BufferEncoding): string

export function readlinkSync(filepath: Path, encoding: 'buffer'): Buffer

export function readlinkSync(filepath: Path, encoding: BufferEncoding | 'buffer'): string | Buffer

export function readlinkSync(filepath: Path): string

export function readv(fd: number, buffers: ArrayBufferView[], position?: number): Promise<number>

export function readv(
  fd: number,
  buffers: ArrayBufferView[],
  position: number,
  cb: Callback<[len: number]>
): void

export function readv(fd: number, buffers: ArrayBufferView[], cb: Callback<[len: number]>): void

export function readvSync(fd: number, buffers: ArrayBufferView[], position?: number): number

export interface RealpathOptions {
  encoding?: BufferEncoding | 'buffer'
}

export function realpath(
  filepath: Path,
  opts: RealpathOptions & { encoding?: BufferEncoding }
): Promise<string>

export function realpath(
  filepath: Path,
  opts: RealpathOptions & { encoding: 'buffer' }
): Promise<Buffer>

export function realpath(filepath: Path, opts: RealpathOptions): Promise<string | Buffer>

export function realpath(filepath: Path, encoding: BufferEncoding): Promise<string>

export function realpath(filepath: Path, encoding: 'buffer'): Promise<Buffer>

export function realpath(
  filepath: Path,
  encoding: BufferEncoding | 'buffer'
): Promise<string | Buffer>

export function realpath(filepath: Path): Promise<string>

export function realpath(
  filepath: Path,
  opts: RealpathOptions & { encoding?: BufferEncoding },
  cb: Callback<[path: string | null]>
): void

export function realpath(
  filepath: Path,
  opts: RealpathOptions & { encoding: 'buffer' },
  cb: Callback<[path: Buffer | null]>
): void

export function realpath(
  filepath: Path,
  opts: RealpathOptions,
  cb: Callback<[path: string | Buffer | null]>
): void

export function realpath(
  filepath: Path,
  encoding: BufferEncoding,
  cb: Callback<[path: string | null]>
): void

export function realpath(
  filepath: Path,
  encoding: 'buffer',
  cb: Callback<[path: Buffer | null]>
): void

export function realpath(
  filepath: Path,
  encoding: BufferEncoding | 'buffer',
  cb: Callback<[path: string | Buffer | null]>
): void

export function realpath(filepath: Path, cb: Callback<[path: string | null]>): void

export function realpathSync(
  filepath: Path,
  opts: RealpathOptions & { encoding?: BufferEncoding }
): string

export function realpathSync(filepath: Path, opts: RealpathOptions & { encoding: 'buffer' }): Buffer

export function realpathSync(filepath: Path, opts: RealpathOptions): string | Buffer

export function realpathSync(filepath: Path, encoding: BufferEncoding): string

export function realpathSync(filepath: Path, encoding: 'buffer'): Buffer

export function realpathSync(filepath: Path, encoding: BufferEncoding | 'buffer'): string | Buffer

export function realpathSync(filepath: Path): string

export function rename(src: string, dst: string): Promise<void>

export function rename(src: string, dst: string, cb: Callback): void

export function renameSync(src: string, dst: string): void

export interface RmOptions {
  force?: boolean
  recursive?: boolean
}

export function rm(filepath: Path, opts?: RmOptions): Promise<void>

export function rm(filepath: Path, opts: RmOptions, cb: Callback): void

export function rm(filepath: Path, cb: Callback): void

export function rmSync(filepath: Path, opts?: RmOptions): void

export function rmdir(filepath: Path, cb: Callback): void

export function rmdirSync(filepath: Path): void

export function stat(filepath: Path): Promise<Stats>

export function stat(filepath: Path, cb: Callback<[stats: Stats | null]>): void

export function statSync(filepath: Path): Stats

export function statfs(filepath: Path): Promise<StatFs>

export function statfs(filepath: Path, cb: Callback<[stats: StatFs | null]>): void

export function statfsSync(filepath: Path): StatFs

export function symlink(target: Path, filepath: Path, type?: string | number): Promise<void>

export function symlink(target: Path, filepath: Path, type: string | number, cb: Callback): void

export function symlink(target: string, filepath: Path, cb: Callback): void

export function symlinkSync(target: string, filepath: Path, type?: string | number): void

export function truncate(filepath: Path, len?: number): Promise<void>

export function truncate(filepath: Path, len: number, cb: Callback): void

export function truncate(filepath: Path, cb: Callback): void

export function truncateSync(filepath: Path, len?: number): void

export function unlink(filepath: Path): Promise<void>

export function unlink(filepath: Path, cb: Callback): void

export function unlinkSync(filepath: Path): void

export function watch(
  filepath: Path,
  opts: WatcherOptions & { encoding?: BufferEncoding },
  cb: (eventType: WatcherEventType, filename: string) => void
): Watcher<string>

export function watch(
  filepath: Path,
  opts: WatcherOptions & { encoding: 'buffer' },
  cb: (eventType: WatcherEventType, filename: Buffer) => void
): Watcher<Buffer>

export function watch(
  filepath: Path,
  opts: WatcherOptions,
  cb: (eventType: WatcherEventType, filename: string | Buffer) => void
): Watcher

export function watch(
  filepath: Path,
  encoding: BufferEncoding,
  cb: (evenType: WatcherEventType, filename: string) => void
): Watcher<string>

export function watch(
  filepath: Path,
  encoding: 'buffer',
  cb: (evenType: WatcherEventType, filename: Buffer) => void
): Watcher<Buffer>

export function watch(
  filepath: Path,
  encoding: BufferEncoding | 'buffer',
  cb: (evenType: WatcherEventType, filename: string | Buffer) => void
): Watcher

export function watch(
  filepath: Path,
  cb: (eventType: WatcherEventType, filename: string) => void
): Watcher<string>

export function write(
  fd: number,
  data: Buffer | ArrayBufferView,
  offset?: number,
  len?: number,
  pos?: number
): Promise<number>

export function write(
  fd: number,
  data: string,
  pos?: number,
  encoding?: BufferEncoding
): Promise<number>

export function write(
  fd: number,
  data: Buffer | ArrayBufferView,
  offset: number,
  len: number,
  pos: number,
  cb: Callback<[len: number]>
): void

export function write(
  fd: number,
  data: Buffer | ArrayBufferView,
  offset: number,
  len: number,
  cb: Callback<[len: number]>
): void

export function write(
  fd: number,
  data: string,
  pos: number,
  encoding: BufferEncoding,
  cb: Callback<[len: number]>
): void

export function write(
  fd: number,
  data: Buffer | ArrayBufferView,
  offset: number,
  cb: Callback<[len: number]>
): void

export function write(fd: number, data: string, pos: number, cb: Callback<[len: number]>): void

export function write(fd: number, data: Buffer | ArrayBufferView, cb: Callback<[len: number]>): void

export function write(fd: number, data: string, cb: Callback<[len: number]>): void

export function writeSync(
  fd: number,
  data: Buffer | ArrayBufferView,
  offset?: number,
  len?: number,
  pos?: number
): number

export function writeSync(fd: number, data: string, pos?: number, encoding?: BufferEncoding): number

export interface WriteFileOptions {
  encoding?: BufferEncoding
  flag?: Flag
  mode?: number
}

export function writeFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  opts?: WriteFileOptions
): Promise<void>

export function writeFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  encoding: BufferEncoding
): Promise<void>

export function writeFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  opts: WriteFileOptions,
  cb: Callback
): void

export function writeFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  encoding: BufferEncoding,
  cb: Callback
): void

export function writeFile(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  cb: Callback
): void

export function writeFileSync(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  opts?: WriteFileOptions
): void

export function writeFileSync(
  filepath: Path,
  data: string | Buffer | ArrayBufferView,
  encoding: BufferEncoding
): void

export function writev(fd: number, buffers: ArrayBufferView[], pos?: number): Promise<number>

export function writev(
  fd: number,
  buffers: ArrayBufferView[],
  pos: number,
  cb: Callback<[len: number]>
): void

export function writev(fd: number, buffers: ArrayBufferView[], cb: Callback<[len: number]>): void

export function writevSync(fd: number, buffers: ArrayBufferView[], pos?: number): number
