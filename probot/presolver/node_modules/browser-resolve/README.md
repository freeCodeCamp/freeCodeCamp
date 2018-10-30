# browser-resolve [![Build Status](https://travis-ci.org/defunctzombie/node-browser-resolve.png?branch=master)](https://travis-ci.org/defunctzombie/node-browser-resolve)

node.js resolve algorithm with [browser field](https://github.com/defunctzombie/package-browser-field-spec) support.

## api

### resolve(id, opts={}, cb)

Resolve a module path and call `cb(err, path [, pkg])`

Options:

* `basedir` - directory to begin resolving from
* `browser` - the 'browser' property to use from package.json (defaults to 'browser')
* `filename` - the calling filename where the `require()` call originated (in the source)
* `modules` - object with module id/name -> path mappings to consult before doing manual resolution (use to provide core modules)
* `packageFilter` - transform the parsed `package.json` contents before looking at the `main` field
* `paths` - `require.paths` array to use if nothing is found on the normal `node_modules` recursive walk

Options supported by [node-resolve](https://github.com/substack/node-resolve#resolveid-opts-cb) can be used.

### resolve.sync(id, opts={})

Same as the async resolve, just uses sync methods.

Options supported by [node-resolve](https://github.com/substack/node-resolve#resolvesyncid-opts) `sync` can be used.

## basic usage

you can resolve files like `require.resolve()`:
``` js
var resolve = require('browser-resolve');
resolve('../', { filename: __filename }, function(err, path) {
    console.log(path);
});
```

```
$ node example/resolve.js
/home/substack/projects/node-browser-resolve/index.js
```

## core modules

By default, core modules (http, dgram, etc) will return their same name as the path. If you want to have specific paths returned, specify a `modules` property in the options object.

``` js
var shims = {
    http: '/your/path/to/http.js'
};

var resolve = require('browser-resolve');
resolve('fs', { modules: shims }, function(err, path) {
    console.log(path);
});
```

```
$ node example/builtin.js
/home/substack/projects/node-browser-resolve/builtin/fs.js
```

## browser field
browser-specific versions of modules

``` js
{
  "name": "custom",
  "version": "0.0.0",
  "browser": {
    "./main.js": "custom.js"
  },
  "chromeapp": {
    "./main.js": "custom-chromeapp.js"
  }
}
```

``` js
var resolve = require('browser-resolve');
var parent = { filename: __dirname + '/custom/file.js' /*, browser: 'chromeapp' */ };
resolve('./main.js', parent, function(err, path) {
    console.log(path);
});
```

```
$ node example/custom.js
/home/substack/projects/node-browser-resolve/example/custom/custom.js
```

## skip

You can skip over dependencies by setting a
[browser field](https://gist.github.com/defunctzombie/4339901)
value to `false`:

``` json
{
  "name": "skip",
  "version": "0.0.0",
  "browser": {
    "tar": false
  }
}
```

This is handy if you have code like:

``` js
var tar = require('tar');

exports.add = function (a, b) {
    return a + b;
};

exports.parse = function () {
    return tar.Parse();
};
```

so that `require('tar')` will just return `{}` in the browser because you don't
intend to support the `.parse()` export in a browser environment.

``` js
var resolve = require('browser-resolve');
var parent = { filename: __dirname + '/skip/main.js' };
resolve('tar', parent, function(err, path) {
    console.log(path);
});
```

```
$ node example/skip.js
/home/substack/projects/node-browser-resolve/empty.js
```

# license

MIT

# upgrade notes

Prior to v1.x this library provided shims for node core modules. These have since been removed. If you want to have alternative core modules provided, use the `modules` option when calling resolve.

This was done to allow package managers to choose which shims they want to use without browser-resolve being the central point of update.
