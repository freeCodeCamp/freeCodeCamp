# Tmp

A simple temporary file and directory creator for [node.js.][1]

[![Build Status](https://travis-ci.org/raszi/node-tmp.svg?branch=master)](https://travis-ci.org/raszi/node-tmp)
[![Dependencies](https://david-dm.org/raszi/node-tmp.svg)](https://david-dm.org/raszi/node-tmp)
[![npm version](https://badge.fury.io/js/tmp.svg)](https://badge.fury.io/js/tmp)
[![API documented](https://img.shields.io/badge/API-documented-brightgreen.svg)](https://raszi.github.io/node-tmp/)
[![Known Vulnerabilities](https://snyk.io/test/npm/tmp/badge.svg)](https://snyk.io/test/npm/tmp)

## About

This is a [widely used library][2] to create temporary files and directories
in a [node.js][1] environment.

Tmp offers both an asynchronous and a synchronous API. For all API calls, all
the parameters are optional. There also exists a promisified version of the
API, see (5) under references below.

Tmp uses crypto for determining random file names, or, when using templates,
a six letter random identifier. And just in case that you do not have that much
entropy left on your system, Tmp will fall back to pseudo random numbers.

You can set whether you want to remove the temporary file on process exit or
not, and the destination directory can also be set.

## How to install

```bash
npm install tmp
```

## Usage

Please also check [API docs][4].

### Asynchronous file creation

Simple temporary file creation, the file will be closed and unlinked on process exit.

```javascript
var tmp = require('tmp');

tmp.file(function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;

  console.log('File: ', path);
  console.log('Filedescriptor: ', fd);
  
  // If we don't need the file anymore we could manually call the cleanupCallback
  // But that is not necessary if we didn't pass the keep option because the library
  // will clean after itself.
  cleanupCallback();
});
```

### Synchronous file creation

A synchronous version of the above.

```javascript
var tmp = require('tmp');

var tmpobj = tmp.fileSync();
console.log('File: ', tmpobj.name);
console.log('Filedescriptor: ', tmpobj.fd);
  
// If we don't need the file anymore we could manually call the removeCallback
// But that is not necessary if we didn't pass the keep option because the library
// will clean after itself.
tmpobj.removeCallback();
```

Note that this might throw an exception if either the maximum limit of retries
for creating a temporary name fails, or, in case that you do not have the permission
to write to the directory where the temporary file should be created in.

### Asynchronous directory creation

Simple temporary directory creation, it will be removed on process exit.

If the directory still contains items on process exit, then it won't be removed.

```javascript
var tmp = require('tmp');

tmp.dir(function _tempDirCreated(err, path, cleanupCallback) {
  if (err) throw err;

  console.log('Dir: ', path);
  
  // Manual cleanup
  cleanupCallback();
});
```

If you want to cleanup the directory even when there are entries in it, then
you can pass the `unsafeCleanup` option when creating it.

### Synchronous directory creation

A synchronous version of the above.

```javascript
var tmp = require('tmp');

var tmpobj = tmp.dirSync();
console.log('Dir: ', tmpobj.name);
// Manual cleanup
tmpobj.removeCallback();
```

Note that this might throw an exception if either the maximum limit of retries
for creating a temporary name fails, or, in case that you do not have the permission
to write to the directory where the temporary directory should be created in.

### Asynchronous filename generation

It is possible with this library to generate a unique filename in the specified
directory.

```javascript
var tmp = require('tmp');

tmp.tmpName(function _tempNameGenerated(err, path) {
    if (err) throw err;

    console.log('Created temporary filename: ', path);
});
```

### Synchronous filename generation

A synchronous version of the above.

```javascript
var tmp = require('tmp');

var name = tmp.tmpNameSync();
console.log('Created temporary filename: ', name);
```

## Advanced usage

### Asynchronous file creation

Creates a file with mode `0644`, prefix will be `prefix-` and postfix will be `.txt`.

```javascript
var tmp = require('tmp');

tmp.file({ mode: 0644, prefix: 'prefix-', postfix: '.txt' }, function _tempFileCreated(err, path, fd) {
  if (err) throw err;

  console.log('File: ', path);
  console.log('Filedescriptor: ', fd);
});
```

### Synchronous file creation

A synchronous version of the above.

```javascript
var tmp = require('tmp');

var tmpobj = tmp.fileSync({ mode: 0644, prefix: 'prefix-', postfix: '.txt' });
console.log('File: ', tmpobj.name);
console.log('Filedescriptor: ', tmpobj.fd);
```

### Controlling the Descriptor

As a side effect of creating a unique file `tmp` gets a file descriptor that is
returned to the user as the `fd` parameter.  The descriptor may be used by the
application and is closed when the `removeCallback` is invoked.

In some use cases the application does not need the descriptor, needs to close it
without removing the file, or needs to remove the file without closing the
descriptor.  Two options control how the descriptor is managed:

* `discardDescriptor` - if `true` causes `tmp` to close the descriptor after the file
  is created.  In this case the `fd` parameter is undefined.
* `detachDescriptor` - if `true` causes `tmp` to return the descriptor in the `fd`
  parameter, but it is the application's responsibility to close it when it is no
  longer needed.

```javascript
var tmp = require('tmp');

tmp.file({ discardDescriptor: true }, function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;
  // fd will be undefined, allowing application to use fs.createReadStream(path)
  // without holding an unused descriptor open.
});
```

```javascript
var tmp = require('tmp');

tmp.file({ detachDescriptor: true }, function _tempFileCreated(err, path, fd, cleanupCallback) {
  if (err) throw err;

  cleanupCallback();
  // Application can store data through fd here; the space used will automatically
  // be reclaimed by the operating system when the descriptor is closed or program
  // terminates.
});
```

### Asynchronous directory creation

Creates a directory with mode `0755`, prefix will be `myTmpDir_`.

```javascript
var tmp = require('tmp');

tmp.dir({ mode: 0750, prefix: 'myTmpDir_' }, function _tempDirCreated(err, path) {
  if (err) throw err;

  console.log('Dir: ', path);
});
```

### Synchronous directory creation

Again, a synchronous version of the above.

```javascript
var tmp = require('tmp');

var tmpobj = tmp.dirSync({ mode: 0750, prefix: 'myTmpDir_' });
console.log('Dir: ', tmpobj.name);
```

### mkstemp like, asynchronously

Creates a new temporary directory with mode `0700` and filename like `/tmp/tmp-nk2J1u`.

```javascript
var tmp = require('tmp');

tmp.dir({ template: '/tmp/tmp-XXXXXX' }, function _tempDirCreated(err, path) {
  if (err) throw err;

  console.log('Dir: ', path);
});
```

### mkstemp like, synchronously

This will behave similarly to the asynchronous version.

```javascript
var tmp = require('tmp');

var tmpobj = tmp.dirSync({ template: '/tmp/tmp-XXXXXX' });
console.log('Dir: ', tmpobj.name);
```

### Asynchronous filename generation

The `tmpName()` function accepts the `prefix`, `postfix`, `dir`, etc. parameters also:

```javascript
var tmp = require('tmp');

tmp.tmpName({ template: '/tmp/tmp-XXXXXX' }, function _tempNameGenerated(err, path) {
    if (err) throw err;

    console.log('Created temporary filename: ', path);
});
```

### Synchronous filename generation

The `tmpNameSync()` function works similarly to `tmpName()`.

```javascript
var tmp = require('tmp');
var tmpname = tmp.tmpNameSync({ template: '/tmp/tmp-XXXXXX' });
console.log('Created temporary filename: ', tmpname);
```

## Graceful cleanup

One may want to cleanup the temporary files even when an uncaught exception
occurs. To enforce this, you can call the `setGracefulCleanup()` method:

```javascript
var tmp = require('tmp');

tmp.setGracefulCleanup();
```

## Options

All options are optional :)

  * `mode`: the file mode to create with, it fallbacks to `0600` on file creation and `0700` on directory creation
  * `prefix`: the optional prefix, fallbacks to `tmp-` if not provided
  * `postfix`: the optional postfix, fallbacks to `.tmp` on file creation
  * `template`: [`mkstemp`][3] like filename template, no default
  * `dir`: the optional temporary directory, fallbacks to system default (guesses from environment)
  * `tries`: how many times should the function try to get a unique filename before giving up, default `3`
  * `keep`: signals that the temporary file or directory should not be deleted on exit, default is `false`, means delete
    * Please keep in mind that it is recommended in this case to call the provided `cleanupCallback` function manually.
  * `unsafeCleanup`: recursively removes the created temporary directory, even when it's not empty. default is `false`

[1]: http://nodejs.org/
[2]: https://www.npmjs.com/browse/depended/tmp
[3]: http://www.kernel.org/doc/man-pages/online/pages/man3/mkstemp.3.html
[4]: https://raszi.github.io/node-tmp/
[5]: https://github.com/benjamingr/tmp-promise
