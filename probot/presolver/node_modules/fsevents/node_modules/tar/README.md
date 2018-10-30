# node-tar

[![Build Status](https://travis-ci.org/npm/node-tar.svg?branch=master)](https://travis-ci.org/npm/node-tar)

[Fast](./benchmarks) and full-featured Tar for Node.js

The API is designed to mimic the behavior of `tar(1)` on unix systems.
If you are familiar with how tar works, most of this will hopefully be
straightforward for you.  If not, then hopefully this module can teach
you useful unix skills that may come in handy someday :)

## Background

A "tar file" or "tarball" is an archive of file system entries
(directories, files, links, etc.)  The name comes from "tape archive".
If you run `man tar` on almost any Unix command line, you'll learn
quite a bit about what it can do, and its history.

Tar has 5 main top-level commands:

* `c` Create an archive
* `r` Replace entries within an archive
* `u` Update entries within an archive (ie, replace if they're newer)
* `t` List out the contents of an archive
* `x` Extract an archive to disk

The other flags and options modify how this top level function works.

## High-Level API

These 5 functions are the high-level API.  All of them have a
single-character name (for unix nerds familiar with `tar(1)`) as well
as a long name (for everyone else).

All the high-level functions take the following arguments, all three
of which are optional and may be omitted.

1. `options` - An optional object specifying various options
2. `paths` - An array of paths to add or extract
3. `callback` - Called when the command is completed, if async.  (If
   sync or no file specified, providing a callback throws a
   `TypeError`.)

If the command is sync (ie, if `options.sync=true`), then the
callback is not allowed, since the action will be completed immediately.

If a `file` argument is specified, and the command is async, then a
`Promise` is returned.  In this case, if async, a callback may be
provided which is called when the command is completed.

If a `file` option is not specified, then a stream is returned.  For
`create`, this is a readable stream of the generated archive.  For
`list` and `extract` this is a writable stream that an archive should
be written into.  If a file is not specified, then a callback is not
allowed, because you're already getting a stream to work with.

`replace` and `update` only work on existing archives, and so require
a `file` argument.

Sync commands without a file argument return a stream that acts on its
input immediately in the same tick.  For readable streams, this means
that all of the data is immediately available by calling
`stream.read()`.  For writable streams, it will be acted upon as soon
as it is provided, but this can be at any time.

### Warnings

Some things cause tar to emit a warning, but should usually not cause
the entire operation to fail.  There are three ways to handle
warnings:

1. **Ignore them** (default) Invalid entries won't be put in the
   archive, and invalid entries won't be unpacked.  This is usually
   fine, but can hide failures that you might care about.
2. **Notice them**  Add an `onwarn` function to the options, or listen
   to the `'warn'` event on any tar stream.  The function will get
   called as `onwarn(message, data)`.  Handle as appropriate.
3. **Explode them.**  Set `strict: true` in the options object, and
   `warn` messages will be emitted as `'error'` events instead.  If
   there's no `error` handler, this causes the program to crash.  If
   used with a promise-returning/callback-taking method, then it'll
   send the error to the promise/callback.

### Examples

The API mimics the `tar(1)` command line functionality, with aliases
for more human-readable option and function names.  The goal is that
if you know how to use `tar(1)` in Unix, then you know how to use
`require('tar')` in JavaScript.

To replicate `tar czf my-tarball.tgz files and folders`, you'd do:

```js
tar.c(
  {
    gzip: <true|gzip options>,
    file: 'my-tarball.tgz'
  },
  ['some', 'files', 'and', 'folders']
).then(_ => { .. tarball has been created .. })
```

To replicate `tar cz files and folders > my-tarball.tgz`, you'd do:

```js
tar.c( // or tar.create
  {
    gzip: <true|gzip options>
  },
  ['some', 'files', 'and', 'folders']
).pipe(fs.createWriteStream('my-tarball.tgz')
```

To replicate `tar xf my-tarball.tgz` you'd do:

```js
tar.x(  // or tar.extract(
  {
    file: 'my-tarball.tgz'
  }
).then(_=> { .. tarball has been dumped in cwd .. })
```

To replicate `cat my-tarball.tgz | tar x -C some-dir --strip=1`:

```js
fs.createReadStream('my-tarball.tgz').pipe(
  tar.x({
    strip: 1,
    C: 'some-dir' // alias for cwd:'some-dir', also ok
  })
)
```

To replicate `tar tf my-tarball.tgz`, do this:

```js
tar.t({
  file: 'my-tarball.tgz',
  onentry: entry => { .. do whatever with it .. }
})
```

To replicate `cat my-tarball.tgz | tar t` do:

```js
fs.createReadStream('my-tarball.tgz')
  .pipe(tar.t())
  .on('entry', entry => { .. do whatever with it .. })
```

To do anything synchronous, add `sync: true` to the options.  Note
that sync functions don't take a callback and don't return a promise.
When the function returns, it's already done.  Sync methods without a
file argument return a sync stream, which flushes immediately.  But,
of course, it still won't be done until you `.end()` it.

To filter entries, add `filter: <function>` to the options.
Tar-creating methods call the filter with `filter(path, stat)`.
Tar-reading methods (including extraction) call the filter with
`filter(path, entry)`.  The filter is called in the `this`-context of
the `Pack` or `Unpack` stream object.

The arguments list to `tar t` and `tar x` specify a list of filenames
to extract or list, so they're equivalent to a filter that tests if
the file is in the list.

For those who _aren't_ fans of tar's single-character command names:

```
tar.c === tar.create
tar.r === tar.replace (appends to archive, file is required)
tar.u === tar.update (appends if newer, file is required)
tar.x === tar.extract
tar.t === tar.list
```

Keep reading for all the command descriptions and options, as well as
the low-level API that they are built on.

### tar.c(options, fileList, callback) [alias: tar.create]

Create a tarball archive.

The `fileList` is an array of paths to add to the tarball.  Adding a
directory also adds its children recursively.

An entry in `fileList` that starts with an `@` symbol is a tar archive
whose entries will be added.  To add a file that starts with `@`,
prepend it with `./`.

The following options are supported:

- `file` Write the tarball archive to the specified filename.  If this
  is specified, then the callback will be fired when the file has been
  written, and a promise will be returned that resolves when the file
  is written.  If a filename is not specified, then a Readable Stream
  will be returned which will emit the file data. [Alias: `f`]
- `sync` Act synchronously.  If this is set, then any provided file
  will be fully written after the call to `tar.c`.  If this is set,
  and a file is not provided, then the resulting stream will already
  have the data ready to `read` or `emit('data')` as soon as you
  request it.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `cwd` The current working directory for creating the archive.
  Defaults to `process.cwd()`.  [Alias: `C`]
- `prefix` A path portion to prefix onto the entries in the archive.
- `gzip` Set to any truthy value to create a gzipped archive, or an
  object with settings for `zlib.Gzip()` [Alias: `z`]
- `filter` A function that gets called with `(path, stat)` for each
  entry being added.  Return `true` to add the entry to the archive,
  or `false` to omit it.
- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths. [Alias: `P`]
- `mode` The mode to set on the created file archive
- `noDirRecurse` Do not recursively archive the contents of
  directories. [Alias: `n`]
- `follow` Set to true to pack the targets of symbolic links.  Without
  this option, symbolic links are archived as such. [Alias: `L`, `h`]
- `noPax` Suppress pax extended headers.  Note that this means that
  long paths and linkpaths will be truncated, and large or negative
  numeric values may be interpreted incorrectly.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.
  [Alias: `m`, `no-mtime`]

The following options are mostly internal, but can be modified in some
advanced use cases, such as re-using caches between runs.

- `linkCache` A Map object containing the device and inode value for
  any file whose nlink is > 1, to identify hard links.
- `statCache` A Map object that caches calls `lstat`.
- `readdirCache` A Map object that caches calls to `readdir`.
- `jobs` A number specifying how many concurrent jobs to run.
  Defaults to 4.
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 16 MB.

### tar.x(options, fileList, callback) [alias: tar.extract]

Extract a tarball archive.

The `fileList` is an array of paths to extract from the tarball.  If
no paths are provided, then all the entries are extracted.

If the archive is gzipped, then tar will detect this and unzip it.

Note that all directories that are created will be forced to be
writable, readable, and listable by their owner, to avoid cases where
a directory prevents extraction of child entries by virtue of its
mode.

Most extraction errors will cause a `warn` event to be emitted.  If
the `cwd` is missing, or not a directory, then the extraction will
fail completely.

The following options are supported:

- `cwd` Extract files relative to the specified directory.  Defaults
  to `process.cwd()`.  If provided, this must exist and must be a
  directory. [Alias: `C`]
- `file` The archive file to extract.  If not specified, then a
  Writable stream is returned where the archive data should be
  written. [Alias: `f`]
- `sync` Create files and directories synchronously.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `filter` A function that gets called with `(path, entry)` for each
  entry being unpacked.  Return `true` to unpack the entry from the
  archive, or `false` to skip it.
- `newer` Set to true to keep the existing file on disk if it's newer
  than the file in the archive. [Alias: `keep-newer`,
  `keep-newer-files`]
- `keep` Do not overwrite existing files.  In particular, if a file
  appears more than once in an archive, later copies will not
  overwrite earlier copies. [Alias: `k`, `keep-existing`]
- `preservePaths` Allow absolute paths, paths containing `..`, and
  extracting through symbolic links.  By default, `/` is stripped from
  absolute paths, `..` paths are not extracted, and any file whose
  location would be modified by a symbolic link is not extracted.
  [Alias: `P`]
- `unlink` Unlink files before creating them.  Without this option,
  tar overwrites existing files, which preserves existing hardlinks.
  With this option, existing hardlinks will be broken, as will any
  symlink that would affect the location of an extracted file. [Alias:
  `U`]
- `strip` Remove the specified number of leading path elements.
  Pathnames with fewer elements will be silently skipped.  Note that
  the pathname is edited after applying the filter, but before
  security checks. [Alias: `strip-components`, `stripComponents`]
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `preserveOwner` If true, tar will set the `uid` and `gid` of
  extracted entries to the `uid` and `gid` fields in the archive.
  This defaults to true when run as root, and false otherwise.  If
  false, then files and directories will be set with the owner and
  group of the user running the process.  This is similar to `-p` in
  `tar(1)`, but ACLs and other system-specific data is never unpacked
  in this implementation, and modes are set by default already.
  [Alias: `p`]
- `uid` Set to a number to force ownership of all extracted files and
  folders, and all implicitly created directories, to be owned by the
  specified user id, regardless of the `uid` field in the archive.
  Cannot be used along with `preserveOwner`.  Requires also setting a
  `gid` option.
- `gid` Set to a number to force ownership of all extracted files and
  folders, and all implicitly created directories, to be owned by the
  specified group id, regardless of the `gid` field in the archive.
  Cannot be used along with `preserveOwner`.  Requires also setting a
  `uid` option.
- `noMtime` Set to true to omit writing `mtime` value for extracted
  entries. [Alias: `m`, `no-mtime`]
- `transform` Provide a function that takes an `entry` object, and
  returns a stream, or any falsey value.  If a stream is provided,
  then that stream's data will be written instead of the contents of
  the archive entry.  If a falsey value is provided, then the entry is
  written to disk as normal.  (To exclude items from extraction, use
  the `filter` option described above.)
- `onentry` A function that gets called with `(entry)` for each entry
  that passes the filter.

The following options are mostly internal, but can be modified in some
advanced use cases, such as re-using caches between runs.

- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 16 MB.
- `umask` Filter the modes of entries like `process.umask()`.
- `dmode` Default mode for directories
- `fmode` Default mode for files
- `dirCache` A Map object of which directories exist.
- `maxMetaEntrySize` The maximum size of meta entries that is
  supported.  Defaults to 1 MB.

Note that using an asynchronous stream type with the `transform`
option will cause undefined behavior in sync extractions.
[MiniPass](http://npm.im/minipass)-based streams are designed for this
use case.

### tar.t(options, fileList, callback) [alias: tar.list]

List the contents of a tarball archive.

The `fileList` is an array of paths to list from the tarball.  If
no paths are provided, then all the entries are listed.

If the archive is gzipped, then tar will detect this and unzip it.

Returns an event emitter that emits `entry` events with
`tar.ReadEntry` objects.  However, they don't emit `'data'` or `'end'`
events.  (If you want to get actual readable entries, use the
`tar.Parse` class instead.)

The following options are supported:

- `cwd` Extract files relative to the specified directory.  Defaults
  to `process.cwd()`. [Alias: `C`]
- `file` The archive file to list.  If not specified, then a
  Writable stream is returned where the archive data should be
  written. [Alias: `f`]
- `sync` Read the specified file synchronously.  (This has no effect
  when a file option isn't specified, because entries are emitted as
  fast as they are parsed from the stream anyway.)
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `filter` A function that gets called with `(path, entry)` for each
  entry being listed.  Return `true` to emit the entry from the
  archive, or `false` to skip it.
- `onentry` A function that gets called with `(entry)` for each entry
  that passes the filter.  This is important for when both `file` and
  `sync` are set, because it will be called synchronously.
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 16 MB.
- `noResume` By default, `entry` streams are resumed immediately after
  the call to `onentry`.  Set `noResume: true` to suppress this
  behavior.  Note that by opting into this, the stream will never
  complete until the entry data is consumed.

### tar.u(options, fileList, callback) [alias: tar.update]

Add files to an archive if they are newer than the entry already in
the tarball archive.

The `fileList` is an array of paths to add to the tarball.  Adding a
directory also adds its children recursively.

An entry in `fileList` that starts with an `@` symbol is a tar archive
whose entries will be added.  To add a file that starts with `@`,
prepend it with `./`.

The following options are supported:

- `file` Required. Write the tarball archive to the specified
  filename. [Alias: `f`]
- `sync` Act synchronously.  If this is set, then any provided file
  will be fully written after the call to `tar.c`.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `cwd` The current working directory for adding entries to the
  archive.  Defaults to `process.cwd()`.  [Alias: `C`]
- `prefix` A path portion to prefix onto the entries in the archive.
- `gzip` Set to any truthy value to create a gzipped archive, or an
  object with settings for `zlib.Gzip()` [Alias: `z`]
- `filter` A function that gets called with `(path, stat)` for each
  entry being added.  Return `true` to add the entry to the archive,
  or `false` to omit it.
- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths. [Alias: `P`]
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 16 MB.
- `noDirRecurse` Do not recursively archive the contents of
  directories. [Alias: `n`]
- `follow` Set to true to pack the targets of symbolic links.  Without
  this option, symbolic links are archived as such. [Alias: `L`, `h`]
- `noPax` Suppress pax extended headers.  Note that this means that
  long paths and linkpaths will be truncated, and large or negative
  numeric values may be interpreted incorrectly.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.
  [Alias: `m`, `no-mtime`]
- `mtime` Set to a `Date` object to force a specific `mtime` for
  everything added to the archive.  Overridden by `noMtime`.

### tar.r(options, fileList, callback) [alias: tar.replace]

Add files to an existing archive.  Because later entries override
earlier entries, this effectively replaces any existing entries.

The `fileList` is an array of paths to add to the tarball.  Adding a
directory also adds its children recursively.

An entry in `fileList` that starts with an `@` symbol is a tar archive
whose entries will be added.  To add a file that starts with `@`,
prepend it with `./`.

The following options are supported:

- `file` Required. Write the tarball archive to the specified
  filename. [Alias: `f`]
- `sync` Act synchronously.  If this is set, then any provided file
  will be fully written after the call to `tar.c`.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `cwd` The current working directory for adding entries to the
  archive.  Defaults to `process.cwd()`.  [Alias: `C`]
- `prefix` A path portion to prefix onto the entries in the archive.
- `gzip` Set to any truthy value to create a gzipped archive, or an
  object with settings for `zlib.Gzip()` [Alias: `z`]
- `filter` A function that gets called with `(path, stat)` for each
  entry being added.  Return `true` to add the entry to the archive,
  or `false` to omit it.
- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths. [Alias: `P`]
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 16 MB.
- `noDirRecurse` Do not recursively archive the contents of
  directories. [Alias: `n`]
- `follow` Set to true to pack the targets of symbolic links.  Without
  this option, symbolic links are archived as such. [Alias: `L`, `h`]
- `noPax` Suppress pax extended headers.  Note that this means that
  long paths and linkpaths will be truncated, and large or negative
  numeric values may be interpreted incorrectly.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.
  [Alias: `m`, `no-mtime`]
- `mtime` Set to a `Date` object to force a specific `mtime` for
  everything added to the archive.  Overridden by `noMtime`.


## Low-Level API

### class tar.Pack

A readable tar stream.

Has all the standard readable stream interface stuff.  `'data'` and
`'end'` events, `read()` method, `pause()` and `resume()`, etc.

#### constructor(options)

The following options are supported:

- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `cwd` The current working directory for creating the archive.
  Defaults to `process.cwd()`.
- `prefix` A path portion to prefix onto the entries in the archive.
- `gzip` Set to any truthy value to create a gzipped archive, or an
  object with settings for `zlib.Gzip()`
- `filter` A function that gets called with `(path, stat)` for each
  entry being added.  Return `true` to add the entry to the archive,
  or `false` to omit it.
- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths.
- `linkCache` A Map object containing the device and inode value for
  any file whose nlink is > 1, to identify hard links.
- `statCache` A Map object that caches calls `lstat`.
- `readdirCache` A Map object that caches calls to `readdir`.
- `jobs` A number specifying how many concurrent jobs to run.
  Defaults to 4.
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 16 MB.
- `noDirRecurse` Do not recursively archive the contents of
  directories.
- `follow` Set to true to pack the targets of symbolic links.  Without
  this option, symbolic links are archived as such.
- `noPax` Suppress pax extended headers.  Note that this means that
  long paths and linkpaths will be truncated, and large or negative
  numeric values may be interpreted incorrectly.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.
- `mtime` Set to a `Date` object to force a specific `mtime` for
  everything added to the archive.  Overridden by `noMtime`.


#### add(path)

Adds an entry to the archive.  Returns the Pack stream.

#### write(path)

Adds an entry to the archive.  Returns true if flushed.

#### end()

Finishes the archive.

### class tar.Pack.Sync

Synchronous version of `tar.Pack`.

### class tar.Unpack

A writable stream that unpacks a tar archive onto the file system.

All the normal writable stream stuff is supported.  `write()` and
`end()` methods, `'drain'` events, etc.

Note that all directories that are created will be forced to be
writable, readable, and listable by their owner, to avoid cases where
a directory prevents extraction of child entries by virtue of its
mode.

`'close'` is emitted when it's done writing stuff to the file system.

Most unpack errors will cause a `warn` event to be emitted.  If the
`cwd` is missing, or not a directory, then an error will be emitted.

#### constructor(options)

- `cwd` Extract files relative to the specified directory.  Defaults
  to `process.cwd()`.  If provided, this must exist and must be a
  directory.
- `filter` A function that gets called with `(path, entry)` for each
  entry being unpacked.  Return `true` to unpack the entry from the
  archive, or `false` to skip it.
- `newer` Set to true to keep the existing file on disk if it's newer
  than the file in the archive.
- `keep` Do not overwrite existing files.  In particular, if a file
  appears more than once in an archive, later copies will not
  overwrite earlier copies.
- `preservePaths` Allow absolute paths, paths containing `..`, and
  extracting through symbolic links.  By default, `/` is stripped from
  absolute paths, `..` paths are not extracted, and any file whose
  location would be modified by a symbolic link is not extracted.
- `unlink` Unlink files before creating them.  Without this option,
  tar overwrites existing files, which preserves existing hardlinks.
  With this option, existing hardlinks will be broken, as will any
  symlink that would affect the location of an extracted file.
- `strip` Remove the specified number of leading path elements.
  Pathnames with fewer elements will be silently skipped.  Note that
  the pathname is edited after applying the filter, but before
  security checks.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `umask` Filter the modes of entries like `process.umask()`.
- `dmode` Default mode for directories
- `fmode` Default mode for files
- `dirCache` A Map object of which directories exist.
- `maxMetaEntrySize` The maximum size of meta entries that is
  supported.  Defaults to 1 MB.
- `preserveOwner` If true, tar will set the `uid` and `gid` of
  extracted entries to the `uid` and `gid` fields in the archive.
  This defaults to true when run as root, and false otherwise.  If
  false, then files and directories will be set with the owner and
  group of the user running the process.  This is similar to `-p` in
  `tar(1)`, but ACLs and other system-specific data is never unpacked
  in this implementation, and modes are set by default already.
- `win32` True if on a windows platform.  Causes behavior where
  filenames containing `<|>?` chars are converted to
  windows-compatible values while being unpacked.
- `uid` Set to a number to force ownership of all extracted files and
  folders, and all implicitly created directories, to be owned by the
  specified user id, regardless of the `uid` field in the archive.
  Cannot be used along with `preserveOwner`.  Requires also setting a
  `gid` option.
- `gid` Set to a number to force ownership of all extracted files and
  folders, and all implicitly created directories, to be owned by the
  specified group id, regardless of the `gid` field in the archive.
  Cannot be used along with `preserveOwner`.  Requires also setting a
  `uid` option.
- `noMtime` Set to true to omit writing `mtime` value for extracted
  entries.
- `transform` Provide a function that takes an `entry` object, and
  returns a stream, or any falsey value.  If a stream is provided,
  then that stream's data will be written instead of the contents of
  the archive entry.  If a falsey value is provided, then the entry is
  written to disk as normal.  (To exclude items from extraction, use
  the `filter` option described above.)
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `onentry` A function that gets called with `(entry)` for each entry
  that passes the filter.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.

### class tar.Unpack.Sync

Synchronous version of `tar.Unpack`.

Note that using an asynchronous stream type with the `transform`
option will cause undefined behavior in sync unpack streams.
[MiniPass](http://npm.im/minipass)-based streams are designed for this
use case.

### class tar.Parse

A writable stream that parses a tar archive stream.  All the standard
writable stream stuff is supported.

If the archive is gzipped, then tar will detect this and unzip it.

Emits `'entry'` events with `tar.ReadEntry` objects, which are
themselves readable streams that you can pipe wherever.

Each `entry` will not emit until the one before it is flushed through,
so make sure to either consume the data (with `on('data', ...)` or
`.pipe(...)`) or throw it away with `.resume()` to keep the stream
flowing.

#### constructor(options)

Returns an event emitter that emits `entry` events with
`tar.ReadEntry` objects.

The following options are supported:

- `strict` Treat warnings as crash-worthy errors.  Default false.
- `filter` A function that gets called with `(path, entry)` for each
  entry being listed.  Return `true` to emit the entry from the
  archive, or `false` to skip it.
- `onentry` A function that gets called with `(entry)` for each entry
  that passes the filter.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.

#### abort(message, error)

Stop all parsing activities.  This is called when there are zlib
errors.  It also emits a warning with the message and error provided.

### class tar.ReadEntry extends [MiniPass](http://npm.im/minipass)

A representation of an entry that is being read out of a tar archive.

It has the following fields:

- `extended` The extended metadata object provided to the constructor.
- `globalExtended` The global extended metadata object provided to the
  constructor.
- `remain` The number of bytes remaining to be written into the
  stream.
- `blockRemain` The number of 512-byte blocks remaining to be written
  into the stream.
- `ignore` Whether this entry should be ignored.
- `meta` True if this represents metadata about the next entry, false
  if it represents a filesystem object.
- All the fields from the header, extended header, and global extended
  header are added to the ReadEntry object.  So it has `path`, `type`,
  `size, `mode`, and so on.

#### constructor(header, extended, globalExtended)

Create a new ReadEntry object with the specified header, extended
header, and global extended header values.

### class tar.WriteEntry extends [MiniPass](http://npm.im/minipass)

A representation of an entry that is being written from the file
system into a tar archive.

Emits data for the Header, and for the Pax Extended Header if one is
required, as well as any body data.

Creating a WriteEntry for a directory does not also create
WriteEntry objects for all of the directory contents.

It has the following fields:

- `path` The path field that will be written to the archive.  By
  default, this is also the path from the cwd to the file system
  object.
- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `myuid` If supported, the uid of the user running the current
  process.
- `myuser` The `env.USER` string if set, or `''`.  Set as the entry
  `uname` field if the file's `uid` matches `this.myuid`.
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 1 MB.
- `linkCache` A Map object containing the device and inode value for
  any file whose nlink is > 1, to identify hard links.
- `statCache` A Map object that caches calls `lstat`.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths.
- `cwd` The current working directory for creating the archive.
  Defaults to `process.cwd()`.
- `absolute` The absolute path to the entry on the filesystem.  By
  default, this is `path.resolve(this.cwd, this.path)`, but it can be
  overridden explicitly.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `win32` True if on a windows platform.  Causes behavior where paths
  replace `\` with `/` and filenames containing the windows-compatible
  forms of `<|>?:` characters are converted to actual `<|>?:` characters
  in the archive.
- `noPax` Suppress pax extended headers.  Note that this means that
  long paths and linkpaths will be truncated, and large or negative
  numeric values may be interpreted incorrectly.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.


#### constructor(path, options)

`path` is the path of the entry as it is written in the archive.

The following options are supported:

- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `maxReadSize` The maximum buffer size for `fs.read()` operations.
  Defaults to 1 MB.
- `linkCache` A Map object containing the device and inode value for
  any file whose nlink is > 1, to identify hard links.
- `statCache` A Map object that caches calls `lstat`.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths.
- `cwd` The current working directory for creating the archive.
  Defaults to `process.cwd()`.
- `absolute` The absolute path to the entry on the filesystem.  By
  default, this is `path.resolve(this.cwd, this.path)`, but it can be
  overridden explicitly.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `win32` True if on a windows platform.  Causes behavior where paths
  replace `\` with `/`.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.

#### warn(message, data)

If strict, emit an error with the provided message.

Othewise, emit a `'warn'` event with the provided message and data.

### class tar.WriteEntry.Sync

Synchronous version of tar.WriteEntry

### class tar.WriteEntry.Tar

A version of tar.WriteEntry that gets its data from a tar.ReadEntry
instead of from the filesystem.

#### constructor(readEntry, options)

`readEntry` is the entry being read out of another archive.

The following options are supported:

- `portable` Omit metadata that is system-specific: `ctime`, `atime`,
  `uid`, `gid`, `uname`, `gname`, `dev`, `ino`, and `nlink`.  Note
  that `mtime` is still included, because this is necessary other
  time-based operations.
- `preservePaths` Allow absolute paths.  By default, `/` is stripped
  from absolute paths.
- `strict` Treat warnings as crash-worthy errors.  Default false.
- `onwarn` A function that will get called with `(message, data)` for
  any warnings encountered.
- `noMtime` Set to true to omit writing `mtime` values for entries.
  Note that this prevents using other mtime-based features like
  `tar.update` or the `keepNewer` option with the resulting tar archive.

### class tar.Header

A class for reading and writing header blocks.

It has the following fields:

- `nullBlock` True if decoding a block which is entirely composed of
  `0x00` null bytes.  (Useful because tar files are terminated by
  at least 2 null blocks.)
- `cksumValid` True if the checksum in the header is valid, false
  otherwise.
- `needPax` True if the values, as encoded, will require a Pax
  extended header.
- `path` The path of the entry.
- `mode` The 4 lowest-order octal digits of the file mode.  That is,
  read/write/execute permissions for world, group, and owner, and the
  setuid, setgid, and sticky bits.
- `uid` Numeric user id of the file owner
- `gid` Numeric group id of the file owner
- `size` Size of the file in bytes
- `mtime` Modified time of the file
- `cksum` The checksum of the header.  This is generated by adding all
  the bytes of the header block, treating the checksum field itself as
  all ascii space characters (that is, `0x20`).
- `type` The human-readable name of the type of entry this represents,
  or the alphanumeric key if unknown.
- `typeKey` The alphanumeric key for the type of entry this header
  represents.
- `linkpath` The target of Link and SymbolicLink entries.
- `uname` Human-readable user name of the file owner
- `gname` Human-readable group name of the file owner
- `devmaj` The major portion of the device number.  Always `0` for
  files, directories, and links.
- `devmin` The minor portion of the device number.  Always `0` for
  files, directories, and links.
- `atime` File access time.
- `ctime` File change time.

#### constructor(data, [offset=0])

`data` is optional.  It is either a Buffer that should be interpreted
as a tar Header starting at the specified offset and continuing for
512 bytes, or a data object of keys and values to set on the header
object, and eventually encode as a tar Header.

#### decode(block, offset)

Decode the provided buffer starting at the specified offset.

Buffer length must be greater than 512 bytes.

#### set(data)

Set the fields in the data object.

#### encode(buffer, offset)

Encode the header fields into the buffer at the specified offset.

Returns `this.needPax` to indicate whether a Pax Extended Header is
required to properly encode the specified data.

### class tar.Pax

An object representing a set of key-value pairs in an Pax extended
header entry.

It has the following fields.  Where the same name is used, they have
the same semantics as the tar.Header field of the same name.

- `global` True if this represents a global extended header, or false
  if it is for a single entry.
- `atime`
- `charset`
- `comment`
- `ctime`
- `gid`
- `gname`
- `linkpath`
- `mtime`
- `path`
- `size`
- `uid`
- `uname`
- `dev`
- `ino`
- `nlink`

#### constructor(object, global)

Set the fields set in the object.  `global` is a boolean that defaults
to false.

#### encode()

Return a Buffer containing the header and body for the Pax extended
header entry, or `null` if there is nothing to encode.

#### encodeBody()

Return a string representing the body of the pax extended header
entry.

#### encodeField(fieldName)

Return a string representing the key/value encoding for the specified
fieldName, or `''` if the field is unset.

### tar.Pax.parse(string, extended, global)

Return a new Pax object created by parsing the contents of the string
provided.

If the `extended` object is set, then also add the fields from that
object.  (This is necessary because multiple metadata entries can
occur in sequence.)

### tar.types

A translation table for the `type` field in tar headers.

#### tar.types.name.get(code)

Get the human-readable name for a given alphanumeric code.

#### tar.types.code.get(name)

Get the alphanumeric code for a given human-readable name.
