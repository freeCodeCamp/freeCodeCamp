# resolve

implements the [node `require.resolve()`
algorithm](http://nodejs.org/docs/v0.4.8/api/all.html#all_Together...)
such that you can `require.resolve()` on behalf of a file asynchronously and
synchronously

[![build status](https://secure.travis-ci.org/substack/node-resolve.png)](http://travis-ci.org/substack/node-resolve)

# example

asynchronously resolve:

``` js
var resolve = require('resolve');
resolve('tap', { basedir: __dirname }, function (err, res) {
    if (err) console.error(err)
    else console.log(res)
});
```

```
$ node example/async.js
/home/substack/projects/node-resolve/node_modules/tap/lib/main.js
```

synchronously resolve:

``` js
var resolve = require('resolve');
var res = resolve.sync('tap', { basedir: __dirname });
console.log(res);
```

```
$ node example/sync.js
/home/substack/projects/node-resolve/node_modules/tap/lib/main.js
```

# methods

``` js
var resolve = require('resolve')
```

## resolve(id, opts={}, cb)

Asynchronously resolve the module path string `id` into `cb(err, res [, pkg])`, where `pkg` (if defined) is the data from `package.json`.

options are:

* opts.basedir - directory to begin resolving from

* opts.package - `package.json` data applicable to the module being loaded

* opts.extensions - array of file extensions to search in order

* opts.readFile - how to read files asynchronously

* opts.isFile - function to asynchronously test whether a file exists

* opts.packageFilter - transform the parsed package.json contents before looking
at the "main" field

* opts.pathFilter(pkg, path, relativePath) - transform a path within a package
  * pkg - package data
  * path - the path being resolved
  * relativePath - the path relative from the package.json location
  * returns - a relative path that will be joined from the package.json location

* opts.paths - require.paths array to use if nothing is found on the normal
node_modules recursive walk (probably don't use this)

* opts.moduleDirectory - directory (or directories) in which to recursively look for modules. default: `"node_modules"`

default `opts` values:

``` javascript
{
    paths: [],
    basedir: __dirname,
    extensions: [ '.js' ],
    readFile: fs.readFile,
    isFile: function (file, cb) {
        fs.stat(file, function (err, stat) {
            if (err && err.code === 'ENOENT') cb(null, false)
            else if (err) cb(err)
            else cb(null, stat.isFile())
        });
    },
    moduleDirectory: 'node_modules'
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

* `opts.packageFilter(pkg, pkgfile)` - transform the parsed package.json
* contents before looking at the "main" field

* opts.paths - require.paths array to use if nothing is found on the normal
node_modules recursive walk (probably don't use this)

* opts.moduleDirectory - directory (or directories) in which to recursively look for modules. default: `"node_modules"`

default `opts` values:

``` javascript
{
    paths: [],
    basedir: __dirname,
    extensions: [ '.js' ],
    readFileSync: fs.readFileSync,
    isFile: function (file) {
        try { return fs.statSync(file).isFile() }
        catch (e) { return false }
    },
    moduleDirectory: 'node_modules'
}
````

## resolve.isCore(pkg)

Return whether a package is in core.

# install

With [npm](https://npmjs.org) do:

```
npm install resolve
```

# license

MIT
