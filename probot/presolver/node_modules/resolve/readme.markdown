# resolve

implements the [node `require.resolve()`
algorithm](https://nodejs.org/api/modules.html#modules_all_together)
such that you can `require.resolve()` on behalf of a file asynchronously and
synchronously

[![build status](https://secure.travis-ci.org/browserify/node-resolve.png)](http://travis-ci.org/browserify/node-resolve)

# example

asynchronously resolve:

```js
var resolve = require('resolve');
resolve('tap', { basedir: __dirname }, function (err, res) {
    if (err) console.error(err);
    else console.log(res);
});
```

```
$ node example/async.js
/home/substack/projects/node-resolve/node_modules/tap/lib/main.js
```

synchronously resolve:

```js
var resolve = require('resolve');
var res = resolve.sync('tap', { basedir: __dirname });
console.log(res);
```

```
$ node example/sync.js
/home/substack/projects/node-resolve/node_modules/tap/lib/main.js
```

# methods

```js
var resolve = require('resolve');
```

## resolve(id, opts={}, cb)

Asynchronously resolve the module path string `id` into `cb(err, res [, pkg])`, where `pkg` (if defined) is the data from `package.json`.

options are:

* opts.basedir - directory to begin resolving from

* opts.package - `package.json` data applicable to the module being loaded

* opts.extensions - array of file extensions to search in order

* opts.readFile - how to read files asynchronously

* opts.isFile - function to asynchronously test whether a file exists

* `opts.packageFilter(pkg, pkgfile)` - transform the parsed package.json contents before looking at the "main" field
  * pkg - package data
  * pkgfile - path to package.json

* `opts.pathFilter(pkg, path, relativePath)` - transform a path within a package
  * pkg - package data
  * path - the path being resolved
  * relativePath - the path relative from the package.json location
  * returns - a relative path that will be joined from the package.json location

* opts.paths - require.paths array to use if nothing is found on the normal `node_modules` recursive walk (probably don't use this)

* opts.moduleDirectory - directory (or directories) in which to recursively look for modules. default: `"node_modules"`

* opts.preserveSymlinks - if true, doesn't resolve `basedir` to real path before resolving.
This is the way Node resolves dependencies when executed with the [--preserve-symlinks](https://nodejs.org/api/all.html#cli_preserve_symlinks) flag.
**Note:** this property is currently `true` by default but it will be changed to
`false` in the next major version because *Node's resolution algorithm does not preserve symlinks by default*.

default `opts` values:

```js
{
    paths: [],
    basedir: __dirname,
    extensions: ['.js'],
    readFile: fs.readFile,
    isFile: function isFile(file, cb) {
        fs.stat(file, function (err, stat) {
            if (!err) {
                return cb(null, stat.isFile() || stat.isFIFO());
            }
            if (err.code === 'ENOENT' || err.code === 'ENOTDIR') return cb(null, false);
            return cb(err);
        });
    },
    moduleDirectory: 'node_modules',
    preserveSymlinks: true
}
```

## resolve.sync(id, opts)

Synchronously resolve the module path string `id`, returning the result and
throwing an error when `id` can't be resolved.

options are:

* opts.basedir - directory to begin resolving from

* opts.extensions - array of file extensions to search in order

* opts.readFile - how to read files synchronously

* opts.isFile - function to synchronously test whether a file exists

* `opts.packageFilter(pkg, dir)` - transform the parsed package.json contents before looking at the "main" field
  * pkg - package data
  * dir - directory for package.json (Note: the second argument will change to "pkgfile" in v2)

* `opts.pathFilter(pkg, path, relativePath)` - transform a path within a package
  * pkg - package data
  * path - the path being resolved
  * relativePath - the path relative from the package.json location
  * returns - a relative path that will be joined from the package.json location

* opts.paths - require.paths array to use if nothing is found on the normal `node_modules` recursive walk (probably don't use this)

* opts.moduleDirectory - directory (or directories) in which to recursively look for modules. default: `"node_modules"`

* opts.preserveSymlinks - if true, doesn't resolve `basedir` to real path before resolving.
This is the way Node resolves dependencies when executed with the [--preserve-symlinks](https://nodejs.org/api/all.html#cli_preserve_symlinks) flag.
**Note:** this property is currently `true` by default but it will be changed to
`false` in the next major version because *Node's resolution algorithm does not preserve symlinks by default*.

default `opts` values:

```js
{
    paths: [],
    basedir: __dirname,
    extensions: ['.js'],
    readFileSync: fs.readFileSync,
    isFile: function isFile(file) {
        try {
            var stat = fs.statSync(file);
        } catch (e) {
            if (e && (e.code === 'ENOENT' || e.code === 'ENOTDIR')) return false;
            throw e;
        }
        return stat.isFile() || stat.isFIFO();
    },
    moduleDirectory: 'node_modules',
    preserveSymlinks: true
}
```

## resolve.isCore(pkg)

Return whether a package is in core.

# install

With [npm](https://npmjs.org) do:

```sh
npm install resolve
```

# license

MIT
