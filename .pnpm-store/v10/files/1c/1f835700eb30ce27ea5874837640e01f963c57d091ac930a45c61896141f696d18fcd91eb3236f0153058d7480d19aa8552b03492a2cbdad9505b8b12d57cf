# bare-fs

Native file system operations for Bare. The API closely follows that of the Node.js `fs` module.

```
npm i bare-fs
```

## Usage

```js
const fs = require('bare-fs')

const fd = await fs.open('hello.txt')

const buffer = Buffer.alloc(1024)

try {
  const length = await fs.read(fd, buffer)

  console.log('Read', length, 'bytes')
} finally {
  await fs.close(fd)
}
```

## API

#### `const fd = await fs.open(filepath[, flags[, mode]])`

Open a file, returning a file descriptor. `flags` defaults to `'r'` and `mode` defaults to `0o666`. `flags` may be a string such as `'r'`, `'w'`, `'a'`, `'r+'`, etc., or a numeric combination of `fs.constants` flags.

#### `fs.open(filepath[, flags[, mode]], callback)`

Callback version of `fs.open()`.

#### `const fd = fs.openSync(filepath[, flags[, mode]])`

Synchronous version of `fs.open()`.

#### `await fs.close(fd)`

Close a file descriptor.

#### `fs.close(fd, callback)`

Callback version of `fs.close()`.

#### `fs.closeSync(fd)`

Synchronous version of `fs.close()`.

#### `await fs.access(filepath[, mode])`

Check whether the file at `filepath` is accessible. `mode` defaults to `fs.constants.F_OK`.

#### `fs.access(filepath[, mode], callback)`

Callback version of `fs.access()`.

#### `fs.accessSync(filepath[, mode])`

Synchronous version of `fs.access()`.

#### `const exists = await fs.exists(filepath)`

Check whether a file exists at `filepath`. Returns `true` if the file is accessible, `false` otherwise.

#### `fs.exists(filepath, callback)`

Callback version of `fs.exists()`.

#### `const exists = fs.existsSync(filepath)`

Synchronous version of `fs.exists()`.

#### `const bytesRead = await fs.read(fd, buffer[, offset[, len[, pos]]])`

Read from a file descriptor into `buffer`. `offset` defaults to `0`, `len` defaults to `buffer.byteLength - offset`, and `pos` defaults to `-1` (current position). Returns the number of bytes read.

#### `fs.read(fd, buffer[, offset[, len[, pos]]], callback)`

Callback version of `fs.read()`.

#### `const bytesRead = fs.readSync(fd, buffer[, offset[, len[, pos]]])`

Synchronous version of `fs.read()`.

#### `const bytesRead = await fs.readv(fd, buffers[, pos])`

Read from a file descriptor into an array of `buffers`. `pos` defaults to `-1`.

#### `fs.readv(fd, buffers[, pos], callback)`

Callback version of `fs.readv()`.

#### `const bytesRead = fs.readvSync(fd, buffers[, pos])`

Synchronous version of `fs.readv()`.

#### `const bytesWritten = await fs.write(fd, data[, offset[, len[, pos]]])`

Write `data` to a file descriptor. When `data` is a string, the signature is `fs.write(fd, data[, pos[, encoding]])` where `encoding` defaults to `'utf8'`. Returns the number of bytes written.

#### `fs.write(fd, data[, offset[, len[, pos]]], callback)`

Callback version of `fs.write()`.

#### `const bytesWritten = fs.writeSync(fd, data[, offset[, len[, pos]]])`

Synchronous version of `fs.write()`.

#### `const bytesWritten = await fs.writev(fd, buffers[, pos])`

Write an array of `buffers` to a file descriptor. `pos` defaults to `-1`.

#### `fs.writev(fd, buffers[, pos], callback)`

Callback version of `fs.writev()`.

#### `const bytesWritten = fs.writevSync(fd, buffers[, pos])`

Synchronous version of `fs.writev()`.

#### `const stats = await fs.stat(filepath)`

Get the status of a file. Returns a `Stats` object.

#### `fs.stat(filepath, callback)`

Callback version of `fs.stat()`.

#### `const stats = fs.statSync(filepath)`

Synchronous version of `fs.stat()`.

#### `const stats = await fs.lstat(filepath)`

Like `fs.stat()`, but if `filepath` is a symbolic link, the link itself is statted, not the file it refers to.

#### `fs.lstat(filepath, callback)`

Callback version of `fs.lstat()`.

#### `const stats = fs.lstatSync(filepath)`

Synchronous version of `fs.lstat()`.

#### `const stats = await fs.fstat(fd)`

Get the status of a file by its file descriptor. Returns a `Stats` object.

#### `fs.fstat(fd, callback)`

Callback version of `fs.fstat()`.

#### `const stats = fs.fstatSync(fd)`

Synchronous version of `fs.fstat()`.

#### `const stats = await fs.statfs(filepath)`

Get filesystem statistics. Returns a `StatFs` object.

#### `fs.statfs(filepath, callback)`

Callback version of `fs.statfs()`.

#### `const stats = fs.statfsSync(filepath)`

Synchronous version of `fs.statfs()`.

#### `await fs.ftruncate(fd[, len])`

Truncate a file to `len` bytes. `len` defaults to `0`.

#### `fs.ftruncate(fd[, len], callback)`

Callback version of `fs.ftruncate()`.

#### `fs.ftruncateSync(fd[, len])`

Synchronous version of `fs.ftruncate()`.

#### `await fs.chmod(filepath, mode)`

Change the permissions of a file. `mode` may be a numeric mode or a string that will be parsed as octal.

#### `fs.chmod(filepath, mode, callback)`

Callback version of `fs.chmod()`.

#### `fs.chmodSync(filepath, mode)`

Synchronous version of `fs.chmod()`.

#### `await fs.fchmod(fd, mode)`

Change the permissions of a file by its file descriptor.

#### `fs.fchmod(fd, mode, callback)`

Callback version of `fs.fchmod()`.

#### `fs.fchmodSync(fd, mode)`

Synchronous version of `fs.fchmod()`.

#### `await fs.chown(filepath, uid, gid)`

Change the owner and group of a file.

**NOTE**: The `chown` functions are not implemented on Windows.

#### `fs.chown(filepath,  uid, gid, callback)`

Callback version of `fs.chown()`.

#### `await fs.chownSync(filepath, uid, gid)`

Synchronous version of `fs.chown()`.

#### `await fs.lchown(filepath, uid, gid)`

Change the owner and group of a file, but if `filepath` is a symbolic link, the changes are applied only to the link, not the file it refers to.

#### `fs.lchown(filepath,  uid, gid, callback)`

Callback version of `fs.lchown()`.

#### `fs.lchownSync(filepath, uid, gid)`

Synchronous version of `fs.lchown()`.

#### `await fs.fchown(filepath, uid, gid)`

Change the owner and group of a file by its file descriptor.

#### `fs.fchown(filepath,  uid, gid, callback)`

Callback version of `fs.fchown()`.

#### `fs.fchownSync(filepath, uid, gid)`

Synchronous version of `fs.fchown()`.

#### `await fs.utimes(filepath, atime, mtime)`

Change the access and modification times of a file. Times may be numbers (seconds since epoch) or `Date` objects.

#### `fs.utimes(filepath, atime, mtime, callback)`

Callback version of `fs.utimes()`.

#### `fs.utimesSync(filepath, atime, mtime)`

Synchronous version of `fs.utimes()`.

#### `await fs.lutimes(filepath, atime, mtime)`

Like `fs.utimes()`, but if `filepath` is a symbolic link, the timestamps of the link is changed, not the file it refers to.

#### `fs.lutimes(filepath, atime, mtime, callback)`

Callback version of `fs.lutimes()`.

#### `fs.lutimesSync(filepath, atime, mtime)`

Synchronous version of `fs.lutimes()`.

#### `await fs.futimes(fd, atime, mtime)`

Change the access and modification times of a file by its file descriptor. Times may be numbers (seconds since epoch) or `Date` objects.

#### `fs.futimes(fd, atime, mtime, callback)`

Callback version of `fs.futimes()`.

#### `fs.futimesSync(fd, atime, mtime)`

Synchronous version of `fs.futimes()`.

#### `await fs.link(src, dst)`

Creates a new link (also known as a hard link) to an existing file.

#### `fs.link(src, dst, callback)`

Callback version of `fs.link()`.

#### `fs.linkSync(src, dst)`

Synchronous version of `fs.link()`.

#### `await fs.mkdir(filepath[, opts])`

Create a directory at `filepath`.

Options include:

```js
options = {
  mode: 0o777,
  recursive: false
}
```

If `opts` is a number, it is treated as the `mode`. When `recursive` is `true`, parent directories are created as needed.

#### `fs.mkdir(filepath[, opts], callback)`

Callback version of `fs.mkdir()`.

#### `fs.mkdirSync(filepath[, opts])`

Synchronous version of `fs.mkdir()`.

#### `const path = await fs.mkdtemp(prefix)`

Create a unique temporary directory.

#### `fs.mkdtemp(prefix, callback)`

Callback version of `fs.mkdtemp()`.

#### `const path = fs.mkdtempSync(prefix)`

Synchronous version of `fs.mkdtemp()`.

#### `await fs.rmdir(filepath)`

Remove an empty directory.

#### `fs.rmdir(filepath, callback)`

Callback version of `fs.rmdir()`.

#### `fs.rmdirSync(filepath)`

Synchronous version of `fs.rmdir()`.

#### `await fs.rm(filepath[, opts])`

Remove a file or directory at `filepath`.

Options include:

```js
options = {
  force: false,
  recursive: false
}
```

When `recursive` is `true`, directories are removed along with their contents. When `force` is `true`, no error is thrown if `filepath` does not exist.

#### `fs.rm(filepath[, opts], callback)`

Callback version of `fs.rm()`.

#### `fs.rmSync(filepath[, opts])`

Synchronous version of `fs.rm()`.

#### `await fs.unlink(filepath)`

Remove a file.

#### `fs.unlink(filepath, callback)`

Callback version of `fs.unlink()`.

#### `fs.unlinkSync(filepath)`

Synchronous version of `fs.unlink()`.

#### `await fs.rename(src, dst)`

Rename a file from `src` to `dst`.

#### `fs.rename(src, dst, callback)`

Callback version of `fs.rename()`.

#### `fs.renameSync(src, dst)`

Synchronous version of `fs.rename()`.

#### `await fs.copyFile(src, dst[, mode])`

Copy a file from `src` to `dst`. `mode` is an optional bitmask created from `fs.constants.COPYFILE_EXCL`, `fs.constants.COPYFILE_FICLONE`, or `fs.constants.COPYFILE_FICLONE_FORCE`.

#### `fs.copyFile(src, dst[, mode], callback)`

Callback version of `fs.copyFile()`.

#### `fs.copyFileSync(src, dst[, mode])`

Synchronous version of `fs.copyFile()`.

#### `await fs.cp(src, dst[, opts])`

Copy a file or directory from `src` to `dst`.

Options include:

```js
options = {
  recursive: false
}
```

Set `recursive` to `true` to copy directories and their contents. Files are copied preserving their permissions.

#### `fs.cp(src, dst[, opts], callback)`

Callback version of `fs.cp()`.

#### `fs.cpSync(src, dst[, opts])`

Synchronous version of `fs.cp()`.

#### `const resolved = await fs.realpath(filepath[, opts])`

Resolve the real path of `filepath`, expanding all symbolic links.

Options include:

```js
options = {
  encoding: 'utf8'
}
```

Set `encoding` to `'buffer'` to receive the result as a `Buffer`.

#### `fs.realpath(filepath[, opts], callback)`

Callback version of `fs.realpath()`.

#### `const resolved = fs.realpathSync(filepath[, opts])`

Synchronous version of `fs.realpath()`.

#### `const target = await fs.readlink(filepath[, opts])`

Read the target of a symbolic link.

Options include:

```js
options = {
  encoding: 'utf8'
}
```

#### `fs.readlink(filepath[, opts], callback)`

Callback version of `fs.readlink()`.

#### `const target = fs.readlinkSync(filepath[, opts])`

Synchronous version of `fs.readlink()`.

#### `await fs.truncate(filename[, len])`

Truncate the file at `filename` to `len` bytes. `len` defaults to `0`.

#### `fs.truncate(filename[, len], callback)`

Callback version of `fs.truncate()`.

#### `fs.truncateSync(filename[, len])`

Synchronous version of `fs.truncate()`.

#### `await fs.symlink(target, filepath[, type])`

Create a symbolic link at `filepath` pointing to `target`. `type` may be `'file'`, `'dir'`, or `'junction'` (Windows only) or a numeric flag. On Windows, if `type` is not provided, it is inferred from the target.

#### `fs.symlink(target, filepath[, type], callback)`

Callback version of `fs.symlink()`.

#### `fs.symlinkSync(target, filepath[, type])`

Synchronous version of `fs.symlink()`.

#### `await fs.fsync(fd)`

Flush all modified in-core data of the file referred by its file descriptor to the disk device.

#### `fs.fsync(fs, callback)`

Callback version of `fs.fsync()`.

#### `fs.fsyncSync(fd)`

Synchronous version of `fs.fsync()`.

#### `await fs.fdatasync(fd)`

Similar to `fsync`, but does not flush modified metadata unless necessary.

#### `fs.fdatasync(fs, callback)`

Callback version of `fs.fdatasync()`.

#### `fs.fdatasyncSync(fd)`

Synchronous version of `fs.fdatasync()`.

#### `const dir = await fs.opendir(filepath[, opts])`

Open a directory for iteration. Returns a `Dir` object.

Options include:

```js
options = {
  encoding: 'utf8',
  bufferSize: 32
}
```

#### `fs.opendir(filepath[, opts], callback)`

Callback version of `fs.opendir()`.

#### `const dir = fs.opendirSync(filepath[, opts])`

Synchronous version of `fs.opendir()`.

#### `const entries = await fs.readdir(filepath[, opts])`

Read the contents of a directory. Returns an array of filenames or, if `withFileTypes` is `true`, an array of `Dirent` objects.

Options include:

```js
options = {
  encoding: 'utf8',
  withFileTypes: false
}
```

#### `fs.readdir(filepath[, opts], callback)`

Callback version of `fs.readdir()`.

#### `const entries = fs.readdirSync(filepath[, opts])`

Synchronous version of `fs.readdir()`.

#### `const data = await fs.readFile(filepath[, opts])`

Read the entire contents of a file. Returns a `Buffer` by default, or a string if an `encoding` is specified.

Options include:

```js
options = {
  encoding: 'buffer',
  flag: 'r'
}
```

#### `fs.readFile(filepath[, opts], callback)`

Callback version of `fs.readFile()`.

#### `const data = fs.readFileSync(filepath[, opts])`

Synchronous version of `fs.readFile()`.

#### `await fs.writeFile(filepath, data[, opts])`

Write `data` to a file, replacing it if it already exists.

Options include:

```js
options = {
  encoding: 'utf8',
  flag: 'w',
  mode: 0o666
}
```

#### `fs.writeFile(filepath, data[, opts], callback)`

Callback version of `fs.writeFile()`.

#### `fs.writeFileSync(filepath, data[, opts])`

Synchronous version of `fs.writeFile()`.

#### `await fs.appendFile(filepath, data[, opts])`

Append `data` to a file, creating it if it does not exist. Accepts the same options as `fs.writeFile()` but defaults to the `'a'` flag.

#### `fs.appendFile(filepath, data[, opts], callback)`

Callback version of `fs.appendFile()`.

#### `fs.appendFileSync(filepath, data[, opts])`

Synchronous version of `fs.appendFile()`.

#### `const watcher = fs.watch(filepath[, opts], callback)`

Watch a file or directory for changes. Returns a `Watcher` object. The `callback`, if provided, is called with `(eventType, filename)` on each change.

Options include:

```js
options = {
  persistent: true,
  recursive: false,
  encoding: 'utf8'
}
```

#### `const stream = fs.createReadStream(path[, opts])`

Create a readable stream for a file. Returns a `ReadStream`.

Options include:

```js
options = {
  fd: -1,
  flags: 'r',
  mode: 0o666,
  start: 0,
  end: Infinity
}
```

If `fd` is provided, `path` may be `null` and the stream reads from the given file descriptor.

#### `const stream = fs.createWriteStream(path[, opts])`

Create a writable stream for a file. Returns a `WriteStream`.

Options include:

```js
options = {
  fd: -1,
  flags: 'w',
  mode: 0o666
}
```

If `fd` is provided, `path` may be `null` and the stream writes to the given file descriptor.

#### `fs.constants`

An object containing file system constants. See `fs/constants` for the full list. Commonly used constants include:

- `fs.constants.O_RDONLY`, `fs.constants.O_WRONLY`, `fs.constants.O_RDWR` — file access flags
- `fs.constants.O_CREAT`, `fs.constants.O_TRUNC`, `fs.constants.O_APPEND` — file creation flags
- `fs.constants.F_OK`, `fs.constants.R_OK`, `fs.constants.W_OK`, `fs.constants.X_OK` — file accessibility flags
- `fs.constants.S_IFMT`, `fs.constants.S_IFREG`, `fs.constants.S_IFDIR`, `fs.constants.S_IFLNK` — file type flags
- `fs.constants.COPYFILE_EXCL`, `fs.constants.COPYFILE_FICLONE`, `fs.constants.COPYFILE_FICLONE_FORCE` — copy flags

### `Stats`

Returned by `fs.stat()`, `fs.lstat()`, and `fs.fstat()`.

#### `stats.dev`

The device identifier.

#### `stats.mode`

The file mode (type and permissions).

#### `stats.nlink`

The number of hard links.

#### `stats.uid`

The user identifier of the file owner.

#### `stats.gid`

The group identifier of the file owner.

#### `stats.rdev`

The device identifier for special files.

#### `stats.blksize`

The file system block size for I/O operations.

#### `stats.ino`

The inode number.

#### `stats.size`

The size of the file in bytes.

#### `stats.blocks`

The number of 512-byte blocks allocated.

#### `stats.atimeMs`

The access time in milliseconds since the epoch.

#### `stats.mtimeMs`

The modification time in milliseconds since the epoch.

#### `stats.ctimeMs`

The change time in milliseconds since the epoch.

#### `stats.birthtimeMs`

The creation time in milliseconds since the epoch.

#### `stats.atime`

The access time as a `Date` object.

#### `stats.mtime`

The modification time as a `Date` object.

#### `stats.ctime`

The change time as a `Date` object.

#### `stats.birthtime`

The creation time as a `Date` object.

#### `stats.isDirectory()`

Returns `true` if the file is a directory.

#### `stats.isFile()`

Returns `true` if the file is a regular file.

#### `stats.isBlockDevice()`

Returns `true` if the file is a block device.

#### `stats.isCharacterDevice()`

Returns `true` if the file is a character device.

#### `stats.isFIFO()`

Returns `true` if the file is a FIFO (named pipe).

#### `stats.isSymbolicLink()`

Returns `true` if the file is a symbolic link. Only meaningful when using `fs.lstat()`.

#### `stats.isSocket()`

Returns `true` if the file is a socket.

### `Dir`

Returned by `fs.opendir()`. Supports both synchronous and asynchronous iteration.

#### `dir.path`

The path of the directory.

#### `const dirent = await dir.read()`

Read the next directory entry. Returns a `Dirent` or `null` when all entries have been read.

#### `dir.read(callback)`

Callback version of `dir.read()`.

#### `const dirent = dir.readSync()`

Synchronous version of `dir.read()`.

#### `await dir.close()`

Close the directory handle.

#### `dir.close(callback)`

Callback version of `dir.close()`.

#### `dir.closeSync()`

Synchronous version of `dir.close()`.

### `Dirent`

Represents a directory entry, returned when iterating a `Dir` or using `fs.readdir()` with `withFileTypes: true`.

#### `dirent.parentPath`

The path of the parent directory.

#### `dirent.name`

The name of the directory entry, as a string or `Buffer` depending on the encoding.

#### `dirent.type`

The numeric type of the directory entry.

#### `dirent.isFile()`

Returns `true` if the entry is a regular file.

#### `dirent.isDirectory()`

Returns `true` if the entry is a directory.

#### `dirent.isSymbolicLink()`

Returns `true` if the entry is a symbolic link.

#### `dirent.isFIFO()`

Returns `true` if the entry is a FIFO.

#### `dirent.isSocket()`

Returns `true` if the entry is a socket.

#### `dirent.isCharacterDevice()`

Returns `true` if the entry is a character device.

#### `dirent.isBlockDevice()`

Returns `true` if the entry is a block device.

### `ReadStream`

A readable stream for file data, created by `fs.createReadStream()`. Extends `Readable` from <https://github.com/holepunchto/bare-stream>.

#### `stream.path`

The file path, or `null` if opened by file descriptor.

#### `stream.fd`

The underlying file descriptor.

#### `stream.flags`

The flags the file was opened with.

#### `stream.mode`

The mode the file was opened with.

### `WriteStream`

A writable stream for file data, created by `fs.createWriteStream()`. Extends `Writable` from <https://github.com/holepunchto/bare-stream>.

#### `stream.path`

The file path, or `null` if opened by file descriptor.

#### `stream.fd`

The underlying file descriptor.

#### `stream.flags`

The flags the file was opened with.

#### `stream.mode`

The mode the file was opened with.

### `Watcher`

Watches for file system changes, created by `fs.watch()`. Extends `EventEmitter` from <https://github.com/holepunchto/bare-events>.

#### `watcher.close()`

Stop watching for changes.

#### `watcher.ref()`

Prevent the event loop from exiting while the watcher is active.

#### `watcher.unref()`

Allow the event loop to exit even if the watcher is still active.

#### `event: 'change'`

Emitted with `(eventType, filename)` when a change is detected. `eventType` is either `'rename'` or `'change'`.

#### `event: 'error'`

Emitted with `(err)` when an error occurs.

#### `event: 'close'`

Emitted when the watcher is closed.

### `FileHandle`

Returned by `require('bare-fs/promises').open()`. Provides an object-oriented API for working with file descriptors.

#### `await handle.close()`

Close the file handle.

#### `const { bytesRead, buffer } = await handle.read(buffer[, offset[, len[, pos]]])`

Read from the file into `buffer`.

#### `const { bytesRead, buffers } = await handle.readv(buffers[, pos])`

Read from the file into an array of `buffers`.

#### `const { bytesWritten, buffer } = await handle.write(data[, offset[, len[, pos]]])`

Write `data` to the file.

#### `const { bytesWritten, buffers } = await handle.writev(buffers[, pos])`

Write an array of `buffers` to the file.

#### `const stats = await handle.stat()`

Get the status of the file.

#### `await handle.chmod(mode)`

Change the permissions of the file.

#### `await handle.chown(uid, gid)`

Change the owner and group of the file.

**NOTE**: This function is not implemented on Windows.

#### `await handle.datasync()`

Similar to `fsync`, but does not flush modified metadata unless necessary.

#### `await handle.sync()`

Flush all modified in-core data of the file.

#### `await handle.truncate(len)`

Truncate the file.

#### `await handle.utimes(mode)`

Change the access and modification times of the file.

#### `const stream = handle.createReadStream([opts])`

Create a readable stream for the file.

#### `const stream = handle.createWriteStream([opts])`

Create a writable stream for the file.

#### `handle.fd`

The file descriptor number.

#### `event: 'close'`

Emitted when the file handle is closed.

## License

Apache-2.0
