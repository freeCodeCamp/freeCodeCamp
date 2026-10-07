// @flow

import type {FileSystem, FileOptions, ReaddirOptions, Encoding} from './types';
import type {FilePath} from '@parcel/types';
import type {
  Event,
  Options as WatcherOptions,
  AsyncSubscription,
} from '@parcel/watcher';

import path from 'path';
import {Readable, Writable} from 'stream';
import {registerSerializableClass} from '@parcel/core';
import {SharedBuffer} from '@parcel/utils';
import packageJSON from '../package.json';
import WorkerFarm, {Handle} from '@parcel/workers';
import nullthrows from 'nullthrows';
import EventEmitter from 'events';
import {findAncestorFile, findNodeModule, findFirstFile} from './find';

const instances: Map<number, MemoryFS> = new Map();
let id = 0;

type HandleFunction = (...args: Array<any>) => any;
type SerializedMemoryFS = {
  id: number,
  handle: any,
  dirs: Map<FilePath, Directory>,
  files: Map<FilePath, File>,
  symlinks: Map<FilePath, FilePath>,
  ...
};

type WorkerEvent = {|
  type: 'writeFile' | 'unlink' | 'mkdir' | 'symlink',
  path: FilePath,
  entry?: Entry,
  target?: FilePath,
|};

type ResolveFunction = () => mixed;

export class MemoryFS implements FileSystem {
  dirs: Map<FilePath, Directory>;
  files: Map<FilePath, File>;
  symlinks: Map<FilePath, FilePath>;
  watchers: Map<FilePath, Set<Watcher>>;
  events: Array<Event>;
  id: number;
  handle: Handle;
  farm: WorkerFarm;
  _cwd: FilePath;
  _eventQueue: Array<Event>;
  _watcherTimer: TimeoutID;
  _numWorkerInstances: number = 0;
  _workerHandles: Array<Handle>;
  _workerRegisterResolves: Array<ResolveFunction> = [];
  _emitter: EventEmitter = new EventEmitter();

  constructor(workerFarm: WorkerFarm) {
    this.farm = workerFarm;
    this.dirs = new Map([['/', new Directory()]]);
    this.files = new Map();
    this.symlinks = new Map();
    this.watchers = new Map();
    this.events = [];
    this.id = id++;
    this._cwd = '/';
    this._workerHandles = [];
    this._eventQueue = [];
    instances.set(this.id, this);
    this._emitter.on('allWorkersRegistered', () => {
      for (let resolve of this._workerRegisterResolves) {
        resolve();
      }
      this._workerRegisterResolves = [];
    });
  }

  static deserialize(opts: SerializedMemoryFS): MemoryFS | WorkerFS {
    let existing = instances.get(opts.id);
    if (existing != null) {
      // Correct the count of worker instances since serialization assumes a new instance is created
      WorkerFarm.getWorkerApi().runHandle(opts.handle, [
        'decrementWorkerInstance',
        [],
      ]);
      return existing;
    }

    let fs = new WorkerFS(opts.id, nullthrows(opts.handle));
    fs.dirs = opts.dirs;
    fs.files = opts.files;
    fs.symlinks = opts.symlinks;
    return fs;
  }

  serialize(): SerializedMemoryFS {
    if (!this.handle) {
      this.handle = this.farm.createReverseHandle(
        (fn: string, args: Array<mixed>) => {
          // $FlowFixMe
          return this[fn](...args);
        },
      );
    }

    // If a worker instance already exists, it will decrement this number
    this._numWorkerInstances++;

    return {
      $$raw: false,
      id: this.id,
      handle: this.handle,
      dirs: this.dirs,
      files: this.files,
      symlinks: this.symlinks,
    };
  }

  decrementWorkerInstance() {
    this._numWorkerInstances--;
    if (this._numWorkerInstances === this._workerHandles.length) {
      this._emitter.emit('allWorkersRegistered');
    }
  }

  cwd(): FilePath {
    return this._cwd;
  }

  chdir(dir: FilePath) {
    this._cwd = dir;
  }

  _normalizePath(filePath: FilePath, realpath: boolean = true): FilePath {
    filePath = path.resolve(this.cwd(), filePath);

    // get realpath by following symlinks
    if (realpath) {
      let {root, dir, base} = path.parse(filePath);
      let parts = dir.slice(root.length).split(path.sep).concat(base);
      let res = root;
      for (let part of parts) {
        res = path.join(res, part);
        let symlink = this.symlinks.get(res);
        if (symlink) {
          res = symlink;
        }
      }

      return res;
    }

    return filePath;
  }

  async writeFile(
    filePath: FilePath,
    contents: Buffer | string,
    options?: ?FileOptions,
  ) {
    filePath = this._normalizePath(filePath);
    if (this.dirs.has(filePath)) {
      throw new FSError('EISDIR', filePath, 'is a directory');
    }

    let dir = path.dirname(filePath);
    if (!this.dirs.has(dir)) {
      throw new FSError('ENOENT', dir, 'does not exist');
    }

    let buffer = makeShared(contents);
    let file = this.files.get(filePath);
    let mode = (options && options.mode) || 0o666;
    if (file) {
      file.write(buffer, mode);
      this.files.set(filePath, file);
    } else {
      this.files.set(filePath, new File(buffer, mode));
    }

    await this._sendWorkerEvent({
      type: 'writeFile',
      path: filePath,
      entry: this.files.get(filePath),
    });

    this._triggerEvent({
      type: file ? 'update' : 'create',
      path: filePath,
    });
  }

  // eslint-disable-next-line require-await
  async readFile(filePath: FilePath, encoding?: Encoding): Promise<any> {
    return this.readFileSync(filePath, encoding);
  }

  readFileSync(filePath: FilePath, encoding?: Encoding): any {
    filePath = this._normalizePath(filePath);
    let file = this.files.get(filePath);
    if (file == null) {
      throw new FSError('ENOENT', filePath, 'does not exist');
    }

    let buffer = file.read();
    if (encoding) {
      return buffer.toString(encoding);
    }

    return buffer;
  }

  async copyFile(source: FilePath, destination: FilePath) {
    let contents = await this.readFile(source);
    await this.writeFile(destination, contents);
  }

  statSync(filePath: FilePath): Stat {
    filePath = this._normalizePath(filePath);

    let dir = this.dirs.get(filePath);
    if (dir) {
      return dir.stat();
    }

    let file = this.files.get(filePath);
    if (file == null) {
      throw new FSError('ENOENT', filePath, 'does not exist');
    }

    return file.stat();
  }

  // eslint-disable-next-line require-await
  async stat(filePath: FilePath): Promise<Stat> {
    return this.statSync(filePath);
  }

  readdirSync(dir: FilePath, opts?: ReaddirOptions): any {
    dir = this._normalizePath(dir);
    if (!this.dirs.has(dir)) {
      throw new FSError('ENOENT', dir, 'does not exist');
    }

    dir += path.sep;

    let res = [];
    for (let [filePath, entry] of this.dirs) {
      if (
        filePath.startsWith(dir) &&
        filePath.indexOf(path.sep, dir.length) === -1
      ) {
        let name = filePath.slice(dir.length);
        if (opts?.withFileTypes) {
          res.push(new Dirent(name, entry));
        } else {
          res.push(name);
        }
      }
    }

    for (let [filePath, entry] of this.files) {
      if (
        filePath.startsWith(dir) &&
        filePath.indexOf(path.sep, dir.length) === -1
      ) {
        let name = filePath.slice(dir.length);
        if (opts?.withFileTypes) {
          res.push(new Dirent(name, entry));
        } else {
          res.push(name);
        }
      }
    }

    for (let [from] of this.symlinks) {
      if (from.startsWith(dir) && from.indexOf(path.sep, dir.length) === -1) {
        let name = from.slice(dir.length);
        if (opts?.withFileTypes) {
          res.push(new Dirent(name, {mode: S_IFLNK}));
        } else {
          res.push(name);
        }
      }
    }

    return res;
  }

  // eslint-disable-next-line require-await
  async readdir(dir: FilePath, opts?: ReaddirOptions): Promise<any> {
    return this.readdirSync(dir, opts);
  }

  async unlink(filePath: FilePath): Promise<void> {
    filePath = this._normalizePath(filePath);
    if (!this.files.has(filePath) && !this.dirs.has(filePath)) {
      throw new FSError('ENOENT', filePath, 'does not exist');
    }

    this.files.delete(filePath);
    this.dirs.delete(filePath);
    this.watchers.delete(filePath);

    await this._sendWorkerEvent({
      type: 'unlink',
      path: filePath,
    });

    this._triggerEvent({
      type: 'delete',
      path: filePath,
    });

    return Promise.resolve();
  }

  async mkdirp(dir: FilePath): Promise<void> {
    dir = this._normalizePath(dir);
    if (this.dirs.has(dir)) {
      return Promise.resolve();
    }

    if (this.files.has(dir)) {
      throw new FSError('ENOENT', dir, 'is not a directory');
    }

    let root = path.parse(dir).root;
    while (dir !== root) {
      if (this.dirs.has(dir)) {
        break;
      }

      this.dirs.set(dir, new Directory());
      await this._sendWorkerEvent({
        type: 'mkdir',
        path: dir,
      });

      this._triggerEvent({
        type: 'create',
        path: dir,
      });

      dir = path.dirname(dir);
    }

    return Promise.resolve();
  }

  async rimraf(filePath: FilePath): Promise<void> {
    filePath = this._normalizePath(filePath);

    if (this.dirs.has(filePath)) {
      let dir = filePath + path.sep;
      for (let filePath of this.files.keys()) {
        if (filePath.startsWith(dir)) {
          this.files.delete(filePath);
          await this._sendWorkerEvent({
            type: 'unlink',
            path: filePath,
          });

          this._triggerEvent({
            type: 'delete',
            path: filePath,
          });
        }
      }

      for (let dirPath of this.dirs.keys()) {
        if (dirPath.startsWith(dir)) {
          this.dirs.delete(dirPath);
          this.watchers.delete(dirPath);
          await this._sendWorkerEvent({
            type: 'unlink',
            path: filePath,
          });

          this._triggerEvent({
            type: 'delete',
            path: dirPath,
          });
        }
      }

      for (let filePath of this.symlinks.keys()) {
        if (filePath.startsWith(dir)) {
          this.symlinks.delete(filePath);
          await this._sendWorkerEvent({
            type: 'unlink',
            path: filePath,
          });
        }
      }

      this.dirs.delete(filePath);
      await this._sendWorkerEvent({
        type: 'unlink',
        path: filePath,
      });

      this._triggerEvent({
        type: 'delete',
        path: filePath,
      });
    } else if (this.files.has(filePath)) {
      this.files.delete(filePath);
      await this._sendWorkerEvent({
        type: 'unlink',
        path: filePath,
      });

      this._triggerEvent({
        type: 'delete',
        path: filePath,
      });
    }

    return Promise.resolve();
  }

  async ncp(source: FilePath, destination: FilePath) {
    source = this._normalizePath(source);

    if (this.dirs.has(source)) {
      if (!this.dirs.has(destination)) {
        this.dirs.set(destination, new Directory());
        await this._sendWorkerEvent({
          type: 'mkdir',
          path: destination,
        });

        this._triggerEvent({
          type: 'create',
          path: destination,
        });
      }

      let dir = source + path.sep;
      for (let dirPath of this.dirs.keys()) {
        if (dirPath.startsWith(dir)) {
          let destName = path.join(destination, dirPath.slice(dir.length));
          if (!this.dirs.has(destName)) {
            this.dirs.set(destName, new Directory());
            await this._sendWorkerEvent({
              type: 'mkdir',
              path: destination,
            });
            this._triggerEvent({
              type: 'create',
              path: destName,
            });
          }
        }
      }

      for (let [filePath, file] of this.files) {
        if (filePath.startsWith(dir)) {
          let destName = path.join(destination, filePath.slice(dir.length));
          let exists = this.files.has(destName);
          this.files.set(destName, file);
          await this._sendWorkerEvent({
            type: 'writeFile',
            path: destName,
            entry: file,
          });

          this._triggerEvent({
            type: exists ? 'update' : 'create',
            path: destName,
          });
        }
      }
    } else {
      await this.copyFile(source, destination);
    }
  }

  createReadStream(filePath: FilePath): ReadStream {
    return new ReadStream(this, filePath);
  }

  createWriteStream(filePath: FilePath, options: ?FileOptions): WriteStream {
    return new WriteStream(this, filePath, options);
  }

  realpathSync(filePath: FilePath): FilePath {
    return this._normalizePath(filePath);
  }

  // eslint-disable-next-line require-await
  async realpath(filePath: FilePath): Promise<FilePath> {
    return this.realpathSync(filePath);
  }

  async symlink(target: FilePath, path: FilePath) {
    target = this._normalizePath(target);
    path = this._normalizePath(path);
    this.symlinks.set(path, target);
    await this._sendWorkerEvent({
      type: 'symlink',
      path,
      target,
    });
  }

  existsSync(filePath: FilePath): boolean {
    filePath = this._normalizePath(filePath);
    return this.files.has(filePath) || this.dirs.has(filePath);
  }

  // eslint-disable-next-line require-await
  async exists(filePath: FilePath): Promise<boolean> {
    return this.existsSync(filePath);
  }

  _triggerEvent(event: Event) {
    this.events.push(event);
    if (this.watchers.size === 0) {
      return;
    }

    // Batch events
    this._eventQueue.push(event);
    clearTimeout(this._watcherTimer);

    this._watcherTimer = setTimeout(() => {
      let events = this._eventQueue;
      this._eventQueue = [];

      for (let [dir, watchers] of this.watchers) {
        if (!dir.endsWith(path.sep)) {
          dir += path.sep;
        }

        if (event.path.startsWith(dir)) {
          for (let watcher of watchers) {
            watcher.trigger(events);
          }
        }
      }
    }, 50);
  }

  _registerWorker(handle: Handle) {
    this._workerHandles.push(handle);
    if (this._numWorkerInstances === this._workerHandles.length) {
      this._emitter.emit('allWorkersRegistered');
    }
  }

  async _sendWorkerEvent(event: WorkerEvent) {
    // Wait for worker instances to register their handles
    while (this._workerHandles.length < this._numWorkerInstances) {
      await new Promise(resolve => this._workerRegisterResolves.push(resolve));
    }

    await Promise.all(
      this._workerHandles.map(workerHandle =>
        this.farm.workerApi.runHandle(workerHandle, [event]),
      ),
    );
  }

  watch(
    dir: FilePath,
    fn: (err: ?Error, events: Array<Event>) => mixed,
    opts: WatcherOptions,
  ): Promise<AsyncSubscription> {
    dir = this._normalizePath(dir);
    let watcher = new Watcher(fn, opts);
    let watchers = this.watchers.get(dir);
    if (!watchers) {
      watchers = new Set();
      this.watchers.set(dir, watchers);
    }

    watchers.add(watcher);

    return Promise.resolve({
      unsubscribe: () => {
        watchers = nullthrows(watchers);
        watchers.delete(watcher);

        if (watchers.size === 0) {
          this.watchers.delete(dir);
        }

        return Promise.resolve();
      },
    });
  }

  async getEventsSince(
    dir: FilePath,
    snapshot: FilePath,
    opts: WatcherOptions,
  ): Promise<Array<Event>> {
    let contents = await this.readFile(snapshot, 'utf8');
    let len = Number(contents);
    let events = this.events.slice(len);
    let ignore = opts.ignore;
    if (ignore) {
      events = events.filter(
        event => !ignore.some(i => event.path.startsWith(i + path.sep)),
      );
    }

    return events;
  }

  async writeSnapshot(dir: FilePath, snapshot: FilePath): Promise<void> {
    await this.writeFile(snapshot, '' + this.events.length);
  }

  findAncestorFile(
    fileNames: Array<string>,
    fromDir: FilePath,
    root: FilePath,
  ): ?FilePath {
    return findAncestorFile(this, fileNames, fromDir, root);
  }

  findNodeModule(moduleName: string, fromDir: FilePath): ?FilePath {
    return findNodeModule(this, moduleName, fromDir);
  }

  findFirstFile(filePaths: Array<FilePath>): ?FilePath {
    return findFirstFile(this, filePaths);
  }
}

class Watcher {
  fn: (err: ?Error, events: Array<Event>) => mixed;
  options: WatcherOptions;

  constructor(
    fn: (err: ?Error, events: Array<Event>) => mixed,
    options: WatcherOptions,
  ) {
    this.fn = fn;
    this.options = options;
  }

  trigger(events: Array<Event>) {
    let ignore = this.options.ignore;
    if (ignore) {
      events = events.filter(
        event => !ignore.some(i => event.path.startsWith(i + path.sep)),
      );
    }

    if (events.length > 0) {
      this.fn(null, events);
    }
  }
}

class FSError extends Error {
  code: string;
  path: FilePath;
  constructor(code: string, path: FilePath, message: string) {
    super(`${code}: ${path} ${message}`);
    this.name = 'FSError';
    this.code = code;
    this.path = path;
    Error.captureStackTrace?.(this, this.constructor);
  }
}

class ReadStream extends Readable {
  fs: FileSystem;
  filePath: FilePath;
  reading: boolean;
  bytesRead: number;
  constructor(fs: FileSystem, filePath: FilePath) {
    super();
    this.fs = fs;
    this.filePath = filePath;
    this.reading = false;
    this.bytesRead = 0;
  }

  _read() {
    if (this.reading) {
      return;
    }

    this.reading = true;
    this.fs.readFile(this.filePath).then(
      res => {
        this.bytesRead += res.byteLength;
        this.push(res);
        this.push(null);
      },
      err => {
        this.emit('error', err);
      },
    );
  }
}

class WriteStream extends Writable {
  fs: FileSystem;
  filePath: FilePath;
  options: ?FileOptions;
  buffer: Buffer;

  constructor(fs: FileSystem, filePath: FilePath, options: ?FileOptions) {
    super({emitClose: true, autoDestroy: true});
    this.fs = fs;
    this.filePath = filePath;
    this.options = options;
    this.buffer = Buffer.alloc(0);
  }

  _write(
    chunk: Buffer | string,
    encoding: any,
    callback: (error?: Error) => void,
  ) {
    let c = typeof chunk === 'string' ? Buffer.from(chunk, encoding) : chunk;
    this.buffer = Buffer.concat([this.buffer, c]);
    callback();
  }

  _final(callback: (error?: Error) => void) {
    this.fs
      .writeFile(this.filePath, this.buffer, this.options)
      .then(callback)
      .catch(callback);
  }
}

const S_IFREG = 0o100000;
const S_IFDIR = 0o040000;
const S_IFLNK = 0o120000;

class Entry {
  mode: number;
  atime: number;
  mtime: number;
  ctime: number;
  birthtime: number;
  constructor(mode: number) {
    this.mode = mode;
    let now = Date.now();
    this.atime = now;
    this.mtime = now;
    this.ctime = now;
    this.birthtime = now;
  }

  access() {
    let now = Date.now();
    this.atime = now;
    this.ctime = now;
  }

  modify(mode: number) {
    let now = Date.now();
    this.mtime = now;
    this.ctime = now;
    this.mode = mode;
  }

  getSize(): number {
    return 0;
  }

  stat(): Stat {
    return new Stat(this);
  }
}

class Stat {
  dev: number = 0;
  ino: number = 0;
  mode: number;
  nlink: number = 0;
  uid: number = 0;
  gid: number = 0;
  rdev: number = 0;
  size: number;
  blksize: number = 0;
  blocks: number = 0;
  atimeMs: number;
  mtimeMs: number;
  ctimeMs: number;
  birthtimeMs: number;
  atime: Date;
  mtime: Date;
  ctime: Date;
  birthtime: Date;

  constructor(entry: Entry) {
    this.mode = entry.mode;
    this.size = entry.getSize();
    this.atimeMs = entry.atime;
    this.mtimeMs = entry.mtime;
    this.ctimeMs = entry.ctime;
    this.birthtimeMs = entry.birthtime;
    this.atime = new Date(entry.atime);
    this.mtime = new Date(entry.mtime);
    this.ctime = new Date(entry.ctime);
    this.birthtime = new Date(entry.birthtime);
  }

  isFile(): boolean {
    return Boolean(this.mode & S_IFREG);
  }

  isDirectory(): boolean {
    return Boolean(this.mode & S_IFDIR);
  }

  isBlockDevice(): boolean {
    return false;
  }

  isCharacterDevice(): boolean {
    return false;
  }

  isSymbolicLink(): boolean {
    return false;
  }

  isFIFO(): boolean {
    return false;
  }

  isSocket(): boolean {
    return false;
  }
}

class Dirent {
  name: string;
  #mode: number;

  constructor(name: string, entry: interface {mode: number}) {
    this.name = name;
    this.#mode = entry.mode;
  }

  isFile(): boolean {
    return Boolean(this.#mode & S_IFREG);
  }

  isDirectory(): boolean {
    return Boolean(this.#mode & S_IFDIR);
  }

  isBlockDevice(): boolean {
    return false;
  }

  isCharacterDevice(): boolean {
    return false;
  }

  isSymbolicLink(): boolean {
    return Boolean(this.#mode & S_IFLNK);
  }

  isFIFO(): boolean {
    return false;
  }

  isSocket(): boolean {
    return false;
  }
}

class File extends Entry {
  buffer: Buffer;
  constructor(buffer: Buffer, mode: number) {
    super(S_IFREG | mode);
    this.buffer = buffer;
  }

  read(): Buffer {
    super.access();
    return Buffer.from(this.buffer);
  }

  write(buffer: Buffer, mode: number) {
    super.modify(S_IFREG | mode);
    this.buffer = buffer;
  }

  getSize(): number {
    return this.buffer.byteLength;
  }
}

class Directory extends Entry {
  constructor() {
    super(S_IFDIR);
  }
}

function makeShared(contents: Buffer | string): Buffer {
  if (typeof contents !== 'string' && contents.buffer instanceof SharedBuffer) {
    return contents;
  }

  let length = Buffer.byteLength(contents);
  let shared = new SharedBuffer(length);
  let buffer = Buffer.from(shared);
  if (typeof contents === 'string') {
    buffer.write(contents);
  } else {
    buffer.set(contents);
  }

  return buffer;
}

class WorkerFS extends MemoryFS {
  id: number;
  handleFn: HandleFunction;

  constructor(id: number, handle: Handle) {
    // TODO Make this not a subclass
    // $FlowFixMe
    super();
    this.id = id;
    this.handleFn = (methodName, args) =>
      WorkerFarm.getWorkerApi().runHandle(handle, [methodName, args]);

    this.handleFn('_registerWorker', [
      WorkerFarm.getWorkerApi().createReverseHandle(event => {
        switch (event.type) {
          case 'writeFile':
            this.files.set(event.path, event.entry);
            break;
          case 'unlink':
            this.files.delete(event.path);
            this.dirs.delete(event.path);
            this.symlinks.delete(event.path);
            break;
          case 'mkdir':
            this.dirs.set(event.path, new Directory());
            break;
          case 'symlink':
            this.symlinks.set(event.path, event.target);
            break;
        }
      }),
    ]);
  }

  static deserialize(opts: SerializedMemoryFS): MemoryFS {
    return nullthrows(instances.get(opts.id));
  }

  serialize(): SerializedMemoryFS {
    // $FlowFixMe
    return {
      id: this.id,
    };
  }

  writeFile(
    filePath: FilePath,
    contents: Buffer | string,
    options: ?FileOptions,
  ): Promise<void> {
    super.writeFile(filePath, contents, options);
    let buffer = makeShared(contents);
    return this.handleFn('writeFile', [filePath, buffer, options]);
  }

  unlink(filePath: FilePath): Promise<void> {
    super.unlink(filePath);
    return this.handleFn('unlink', [filePath]);
  }

  mkdirp(dir: FilePath): Promise<void> {
    super.mkdirp(dir);
    return this.handleFn('mkdirp', [dir]);
  }

  rimraf(filePath: FilePath): Promise<void> {
    super.rimraf(filePath);
    return this.handleFn('rimraf', [filePath]);
  }

  ncp(source: FilePath, destination: FilePath): Promise<void> {
    super.ncp(source, destination);
    return this.handleFn('ncp', [source, destination]);
  }

  symlink(target: FilePath, path: FilePath): Promise<void> {
    super.symlink(target, path);
    return this.handleFn('symlink', [target, path]);
  }
}

registerSerializableClass(`${packageJSON.version}:MemoryFS`, MemoryFS);
registerSerializableClass(`${packageJSON.version}:WorkerFS`, WorkerFS);
registerSerializableClass(`${packageJSON.version}:Stat`, Stat);
registerSerializableClass(`${packageJSON.version}:File`, File);
registerSerializableClass(`${packageJSON.version}:Directory`, Directory);
