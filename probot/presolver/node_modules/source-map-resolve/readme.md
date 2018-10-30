Overview [![Build Status](https://travis-ci.org/lydell/source-map-resolve.svg?branch=master)](https://travis-ci.org/lydell/source-map-resolve)
========

Resolve the source map and/or sources for a generated file.

```js
var sourceMapResolve = require("source-map-resolve")
var sourceMap        = require("source-map")

var code = [
  "!function(){...}();",
  "/*# sourceMappingURL=foo.js.map */"
].join("\n")

sourceMapResolve.resolveSourceMap(code, "/js/foo.js", fs.readFile, function(error, result) {
  if (error) {
    return notifyFailure(error)
  }
  result
  // {
  //   map: {file: "foo.js", mappings: "...", sources: ["/coffee/foo.coffee"], names: []},
  //   url: "/js/foo.js.map",
  //   sourcesRelativeTo: "/js/foo.js.map",
  //   sourceMappingURL: "foo.js.map"
  // }

  sourceMapResolve.resolveSources(result.map, result.sourcesRelativeTo, fs.readFile, function(error, result) {
    if (error) {
      return notifyFailure(error)
    }
    result
    // {
    //   sourcesResolved: ["/coffee/foo.coffee"],
    //   sourcesContent: ["<contents of /coffee/foo.coffee>"]
    // }
  })
})

sourceMapResolve.resolve(code, "/js/foo.js", fs.readFile, function(error, result) {
  if (error) {
    return notifyFailure(error)
  }
  result
  // {
  //   map: {file: "foo.js", mappings: "...", sources: ["/coffee/foo.coffee"], names: []},
  //   url: "/js/foo.js.map",
  //   sourcesRelativeTo: "/js/foo.js.map",
  //   sourceMappingURL: "foo.js.map",
  //   sourcesResolved: ["/coffee/foo.coffee"],
  //   sourcesContent: ["<contents of /coffee/foo.coffee>"]
  // }
  result.map.sourcesContent = result.sourcesContent
  var map = new sourceMap.sourceMapConsumer(result.map)
  map.sourceContentFor("/coffee/foo.coffee")
  // "<contents of /coffee/foo.coffee>"
})
```


Installation
============

- `npm install source-map-resolve`
- `bower install source-map-resolve`
- `component install lydell/source-map-resolve`

Works with CommonJS, AMD and browser globals, through UMD.

Note: This module requires `setImmediate` and `atob`.
Use polyfills if needed, such as:

- <https://github.com/NobleJS/setImmediate>
- <https://github.com/davidchambers/Base64.js>


Usage
=====

### `sourceMapResolve.resolveSourceMap(code, codeUrl, read, callback)` ###

- `code` is a string of code that may or may not contain a sourceMappingURL
  comment. Such a comment is used to resolve the source map.
- `codeUrl` is the url to the file containing `code`. If the sourceMappingURL
  is relative, it is resolved against `codeUrl`.
- `read(url, callback)` is a function that reads `url` and responds using
  `callback(error, content)`. In Node.js you might want to use `fs.readFile`,
  while in the browser you might want to use an asynchronus `XMLHttpRequest`.
- `callback(error, result)` is a function that is invoked with either an error
  or `null` and the result.

The result is an object with the following properties:

- `map`: The source map for `code`, as an object (not a string).
- `url`: The url to the source map. If the source map came from a data uri,
  this property is `null`, since then there is no url to it.
- `sourcesRelativeTo`: The url that the sources of the source map are relative
  to. Since the sources are relative to the source map, and the url to the
  source map is provided as the `url` property, this property might seem
  superfluos. However, remember that the `url` property can be `null` if the
  source map came from a data uri. If so, the sources are relative to the file
  containing the data uri—`codeUrl`. This property will be identical to the
  `url` property or `codeUrl`, whichever is appropriate. This way you can
  conveniently resolve the sources without having to think about where the
  source map came from.
- `sourceMappingURL`: The url of the sourceMappingURL comment in `code`.

If `code` contains no sourceMappingURL, the result is `null`.

### `sourceMapResolve.resolveSources(map, mapUrl, read, [options], callback)` ###

- `map` is a source map, as an object (not a string).
- `mapUrl` is the url to the file containing `map`. Relative sources in the
  source map, if any, are resolved against `mapUrl`.
- `read(url, callback)` is a function that reads `url` and responds using
  `callback(error, content)`. In Node.js you might want to use `fs.readFile`,
  while in the browser you might want to use an asynchronus `XMLHttpRequest`.
- `options` is an optional object with any of the following properties:
  - `sourceRoot`: Override the `sourceRoot` property of the source map, which
    might only be relevant when resolving sources in the browser. This lets you
    bypass it when using the module outside of a browser, if needed. Pass a
    string to replace the `sourceRoot` property with, or `false` to ignore it.
    Defaults to `undefined`.
- `callback(error, result)` is a function that is invoked with either an error
  or `null` and the result.

The result is an object with the following properties:

- `sourcesResolved`: The same as `map.sources`, except all the sources are
  fully resolved.
- `sourcesContent`: An array with the contents of all sources in `map.sources`,
  in the same order as `map.sources`. If getting the contents of a source fails,
  an error object is put into the array instead.

### `sourceMapResolve.resolve(code, codeUrl, read, [options], callback)` ###

The arguments are identical to `sourceMapResolve.resolveSourceMap`, except that
you may also provide the same `options` as in `sourceMapResolve.resolveSources`.

This is a convenience method that first resolves the source map and then its
sources. You could also do this by first calling
`sourceMapResolve.resolveSourceMap` and then `sourceMapResolve.resolveSources`.

The result is identical to `sourceMapResolve.resolveSourceMap`, with the
properties from `sourceMapResolve.resolveSources` merged into it.

There is one extra feature available, though. If `code` is `null`, `codeUrl` is
treated as a url to the source map instead of to `code`, and will be read. This
is handy if you _sometimes_ get the source map url from the `SourceMap: <url>`
header (see the [Notes] section). In this case, the `sourceMappingURL` property
of the result is `null`.


[Notes]: #notes

### `sourceMapResolve.*Sync()` ###

There are also sync versions of the three previous functions. They are identical
to the async versions, except:

- They expect a sync reading function. In Node.js you might want to use
  `fs.readFileSync`, while in the browser you might want to use a synchronus
  `XMLHttpRequest`.
- They throw errors and return the result instead of using a callback.

`sourceMapResolve.resolveSourcesSync` also accepts `null` as the `read`
parameter. The result is the same as when passing a function as the `read
parameter`, except that the `sourcesContent` property of the result will be an
empty array. In other words, the sources aren’t read. You only get the
`sourcesResolved` property. (This only supported in the synchronus version, since
there is no point doing it asynchronusly.)

### `sourceMapResolve.parseMapToJSON(string, [data])` ###

The spec says that if a source map (as a string) starts with `)]}'`, it should
be stripped off. This is to prevent XSSI attacks. This function does that and
returns the result of `JSON.parse`ing what’s left.

If this function throws `error`, `error.sourceMapData === data`.

### Errors

All errors passed to callbacks or thrown by this module have a `sourceMapData`
property that contain as much as possible of the intended result of the function
up until the error occurred.

Note that while the `map` property of result objects always is an object,
`error.sourceMapData.map` will be a string if parsing that string fails.


Note
====

This module resolves the source map for a given generated file by looking for a
sourceMappingURL comment. The spec defines yet a way to provide the URL to the
source map: By sending the `SourceMap: <url>` header along with the generated
file. Since this module doesn’t retrive the generated code for you (instead
_you_ give the generated code to the module), it’s up to you to look for such a
header when you retrieve the file (should the need arise).


Development
===========

Tests
-----

First off, run `npm install` to install testing modules and browser polyfills.

`npm test` lints the code and runs the test suite in Node.js.

x-package.json5
---------------

package.json, component.json and bower.json are all generated from
x-package.json5 by using [`xpkg`]. Only edit x-package.json5, and remember to
run `xpkg` before commiting!

[`xpkg`]: https://github.com/kof/node-xpkg

Generating the browser version
------------------------------

source-map-resolve.js is generated from source-map-resolve-node.js and
source-map-resolve-template.js. Only edit the two latter files, _not_
source-map-resolve.js! To generate it, run `npm run build`.


License
=======

[The X11 (“MIT”) License](LICENSE).
