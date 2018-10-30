# readdirp [![Build Status](https://secure.travis-ci.org/thlorenz/readdirp.svg)](http://travis-ci.org/thlorenz/readdirp)

[![NPM](https://nodei.co/npm/readdirp.png?downloads=true&stars=true)](https://nodei.co/npm/readdirp/)

Recursive version of [fs.readdir](http://nodejs.org/docs/latest/api/fs.html#fs_fs_readdir_path_callback). Exposes a **stream api**.

```javascript
var readdirp = require('readdirp')
  , path = require('path')
  , es = require('event-stream');

// print out all JavaScript files along with their size

var stream = readdirp({ root: path.join(__dirname), fileFilter: '*.js' });
stream
  .on('warn', function (err) {
    console.error('non-fatal error', err);
    // optionally call stream.destroy() here in order to abort and cause 'close' to be emitted
  })
  .on('error', function (err) { console.error('fatal error', err); })
  .pipe(es.mapSync(function (entry) {
    return { path: entry.path, size: entry.stat.size };
  }))
  .pipe(es.stringify())
  .pipe(process.stdout);
```

Meant to be one of the recursive versions of [fs](http://nodejs.org/docs/latest/api/fs.html) functions, e.g., like [mkdirp](https://github.com/substack/node-mkdirp).

**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Installation](#installation)
- [API](#api)
	- [entry stream](#entry-stream)
	- [options](#options)
	- [entry info](#entry-info)
	- [Filters](#filters)
	- [Callback API](#callback-api)
		- [allProcessed ](#allprocessed)
		- [fileProcessed](#fileprocessed)
- [More Examples](#more-examples)
	- [stream api](#stream-api)
	- [stream api pipe](#stream-api-pipe)
	- [grep](#grep)
	- [using callback api](#using-callback-api)
	- [tests](#tests)


# Installation

    npm install readdirp

# API

***var entryStream = readdirp (options)***

Reads given root recursively and returns a `stream` of [entry info](#entry-info)s.

## entry stream

Behaves as follows:

- `emit('data')` passes an [entry info](#entry-info) whenever one is found
- `emit('warn')` passes a non-fatal `Error` that prevents a file/directory from being processed (i.e., if it is
  inaccessible to the user)
- `emit('error')` passes a fatal `Error` which also ends the stream (i.e., when illegal options where passed)
- `emit('end')` called when all entries were found and no more will be emitted (i.e., we are done)
- `emit('close')` called when the stream is destroyed via `stream.destroy()` (which could be useful if you want to
  manually abort even on a non fatal error) - at that point the stream is no longer `readable` and no more entries,
  warning or errors are emitted
- to learn more about streams, consult the very detailed
  [nodejs streams documentation](http://nodejs.org/api/stream.html) or the
  [stream-handbook](https://github.com/substack/stream-handbook)


## options

- **root**: path in which to start reading and recursing into subdirectories

- **fileFilter**: filter to include/exclude files found (see [Filters](#filters) for more)

- **directoryFilter**: filter to include/exclude directories found and to recurse into (see [Filters](#filters) for more)

- **depth**: depth at which to stop recursing even if more subdirectories are found

- **entryType**: determines if data events on the stream should be emitted for `'files'`, `'directories'`, `'both'`, or `'all'`. Setting to `'all'` will also include entries for other types of file descriptors like character devices, unix sockets and named pipes. Defaults to `'files'`.

- **lstat**: if `true`, readdirp uses `fs.lstat` instead of `fs.stat` in order to stat files and includes symlink entries in the stream along with files.

## entry info

Has the following properties:

- **parentDir**     :  directory in which entry was found (relative to given root)
- **fullParentDir** :  full path to parent directory
- **name**          :  name of the file/directory
- **path**          :  path to the file/directory (relative to given root)
- **fullPath**      :  full path to the file/directory found
- **stat**          :  built in [stat object](http://nodejs.org/docs/v0.4.9/api/fs.html#fs.Stats)
- **Example**: (assuming root was `/User/dev/readdirp`)

        parentDir     :  'test/bed/root_dir1',
        fullParentDir :  '/User/dev/readdirp/test/bed/root_dir1',
        name          :  'root_dir1_subdir1',
        path          :  'test/bed/root_dir1/root_dir1_subdir1',
        fullPath      :  '/User/dev/readdirp/test/bed/root_dir1/root_dir1_subdir1',
        stat          :  [ ... ]

## Filters

There are three different ways to specify filters for files and directories respectively.

- **function**: a function that takes an entry info as a parameter and returns true to include or false to exclude the entry

- **glob string**: a string (e.g., `*.js`) which is matched using [minimatch](https://github.com/isaacs/minimatch), so go there for more
    information.

    Globstars (`**`) are not supported since specifying a recursive pattern for an already recursive function doesn't make sense.

    Negated globs (as explained in the minimatch documentation) are allowed, e.g., `!*.txt` matches everything but text files.

- **array of glob strings**: either need to be all inclusive or all exclusive (negated) patterns otherwise an error is thrown.

    `[ '*.json', '*.js' ]` includes all JavaScript and Json files.


    `[ '!.git', '!node_modules' ]` includes all directories except the '.git' and 'node_modules'.

Directories that do not pass a filter will not be recursed into.

## Callback API

Although the stream api is recommended, readdirp also exposes a callback based api.

***readdirp (options, callback1 [, callback2])***

If callback2 is given, callback1 functions as the **fileProcessed** callback, and callback2 as the **allProcessed** callback.

If only callback1 is given, it functions as the **allProcessed** callback.

### allProcessed

- function with err and res parameters, e.g., `function (err, res) { ... }`
- **err**: array of errors that occurred during the operation, **res may still be present, even if errors occurred**
- **res**: collection of file/directory [entry infos](#entry-info)

### fileProcessed

- function with [entry info](#entry-info) parameter e.g., `function (entryInfo) { ... }`


# More Examples

`on('error', ..)`, `on('warn', ..)` and `on('end', ..)` handling omitted for brevity

```javascript
var readdirp = require('readdirp');

// Glob file filter
readdirp({ root: './test/bed', fileFilter: '*.js' })
  .on('data', function (entry) {
    // do something with each JavaScript file entry
  });

// Combined glob file filters
readdirp({ root: './test/bed', fileFilter: [ '*.js', '*.json' ] })
  .on('data', function (entry) {
    // do something with each JavaScript and Json file entry
  });

// Combined negated directory filters
readdirp({ root: './test/bed', directoryFilter: [ '!.git', '!*modules' ] })
  .on('data', function (entry) {
    // do something with each file entry found outside '.git' or any modules directory
  });

// Function directory filter
readdirp({ root: './test/bed', directoryFilter: function (di) { return di.name.length === 9; } })
  .on('data', function (entry) {
    // do something with each file entry found inside directories whose name has length 9
  });

// Limiting depth
readdirp({ root: './test/bed', depth: 1 })
  .on('data', function (entry) {
    // do something with each file entry found up to 1 subdirectory deep
  });

// callback api
readdirp({ root: '.' }, function(fileInfo) {
   // do something with file entry here
  }, function (err, res) {
    // all done, move on or do final step for all file entries here
});
```

Try more examples by following [instructions](https://github.com/paulmillr/readdirp/blob/master/examples/Readme.md)
on how to get going.

## tests

The [readdirp tests](https://github.com/paulmillr/readdirp/blob/master/test/readdirp.js) also will give you a good idea on
how things work.

