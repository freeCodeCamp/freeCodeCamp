import EventEmitter, { EventMap } from 'bare-events'
import Buffer, { BufferEncoding } from 'bare-buffer'
import {
  constants,
  AppendFileOptions,
  CpOptions,
  Dir,
  MkdirOptions,
  OpendirOptions,
  Path,
  ReadFileOptions,
  ReadStream,
  ReadStreamOptions,
  ReaddirOptions,
  ReadlinkOptions,
  RealpathOptions,
  RmOptions,
  Stats,
  Watcher,
  WatcherOptions,
  WriteFileOptions,
  WriteStream,
  WriteStreamOptions
} from '.'

export { constants }

interface FileHandleEvents extends EventMap {
  close: []
}

interface FileHandle extends EventEmitter<FileHandleEvents>, AsyncDisposable {
  readonly fd: number

  close(): Promise<void>

  read(
    buffer: Buffer | ArrayBufferView,
    offset?: number,
    len?: number,
    pos?: number
  ): Promise<number>

  readv(buffers: ArrayBufferView[], position?: number): Promise<number>

  write(
    data: Buffer | ArrayBufferView,
    offset?: number,
    len?: number,
    pos?: number
  ): Promise<number>

  write(data: string, pos?: number, encoding?: BufferEncoding): Promise<number>

  stat(): Promise<Stats>

  chmod(mode: string | number): Promise<void>

  chown(uid: number, gid: number): Promise<void>

  datasync(): Promise<void>

  sync(): Promise<void>

  truncate(len?: number): Promise<void>

  utimes(atime: number | Date, mtime: number | Date): Promise<void>

  createReadStream(opts?: ReadStreamOptions): ReadStream

  createWriteStream(opts?: WriteStreamOptions): WriteStream
}

declare class FileHandle {
  private constructor(fd: number)
}

export function open(
  filepath: Path,
  flags?: Flag | number,
  mode?: string | number
): Promise<FileHandle>

export function access(filepath: Path, mode?: number): Promise<void>

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

export function chmod(filepath: Path, mode: string | number): Promise<void>

export function chown(filepath: Path, uid: number, gid: number): Promise<void>

export function copyFile(src: Path, dst: Path, mode?: number): Promise<void>

export function cp(src: Path, dst: Path, opts?: CpOptions): Promise<void>

export function lchown(filepath: Path, uid: number, gid: number): Promise<void>

export function lutimes(filepath: Path, atime: number | Date, mtime: number | Date): Promise<void>

export function link(src: Path, dst: Path): Promise<void>

export function lstat(filepath: Path): Promise<Stats>

export function mkdir(filepath: Path, opts?: MkdirOptions): Promise<void>

export function mkdir(filepath: Path, mode: number): Promise<void>

export function mkdtemp(prefix: Path): Promise<string>

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

export function rename(src: Path, dst: Path): Promise<void>

export function rm(filepath: Path, opts?: RmOptions): Promise<void>

export function rmdir(filepath: Path): Promise<void>

export function stat(filepath: Path): Promise<Stats>

export function statfs(filepath: Path): Promise<StatFs>

export function truncate(filepath: Path, len?: number): Promise<void>

export function symlink(target: Path, filepath: Path, type?: string | number): Promise<void>

export function unlink(filepath: Path): Promise<void>

export function utimes(filepath: Path, atime: number | Date, mtime: number | Date): Promise<void>

export function watch(
  filepath: Path,
  opts: WatcherOptions & { encoding?: BufferEncoding }
): Watcher<string>

export function watch(
  filepath: Path,
  opts: WatcherOptions & { encoding: 'buffer' }
): Watcher<Buffer>

export function watch(filepath: Path, opts: WatcherOptions): Watcher

export function watch(filepath: Path, encoding: BufferEncoding): Watcher<string>

export function watch(filepath: Path, encoding: 'buffer'): Watcher<Buffer>

export function watch(filepath: Path, encoding: BufferEncoding | 'buffer'): Watcher

export function watch(filepath: Path): Watcher<string>

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
