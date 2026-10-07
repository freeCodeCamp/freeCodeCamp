# convert-source-map [![Build Status][ci-image]][ci-url]

Converts a source-map from/to  different formats and allows adding/changing properties.

```js
var convert = require('convert-source-map');

var json = convert
  .fromComment('//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvZm9vLm1pbi5qcyIsInNvdXJjZXMiOlsic3JjL2Zvby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIvIn0=')
  .toJSON();

var modified = convert
  .fromComment('//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGQvZm9vLm1pbi5qcyIsInNvdXJjZXMiOlsic3JjL2Zvby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIvIn0=')
  .setProperty('sources', [ 'SRC/FOO.JS' ])
  .toJSON();

console.log(json);
console.log(modified);
```

```json
{"version":3,"file":"build/foo.min.js","sources":["src/foo.js"],"names":[],"mappings":"AAAA","sourceRoot":"/"}
{"version":3,"file":"build/foo.min.js","sources":["SRC/FOO.JS"],"names":[],"mappings":"AAAA","sourceRoot":"/"}
```

## Upgrading

Prior to v2.0.0, the `fromMapFileComment` and `fromMapFileSource` functions took a String directory path and used that to resolve & read the source map file from the filesystem. However, this made the library limited to nodejs environments and broke on sources with querystrings.

In v2.0.0, you now need to pass a function that does the file reading. It will receive the source filename as a String that you can resolve to a filesystem path, URL, or anything else.

If you are using `convert-source-map` in nodejs and want the previous behavior, you'll use a function like such:

```diff
+ var fs = require('fs'); // Import the fs module to read a file
+ var path = require('path'); // Import the path module to resolve a path against your directory
- var conv = convert.fromMapFileSource(css, '../my-dir');
+ var conv = convert.fromMapFileSource(css, function (filename) {
+   return fs.readFileSync(path.resolve('../my-dir', filename), 'utf-8');
+ });
```

## API

### fromObject(obj)

Returns source map converter from given object.

### fromJSON(json)

Returns source map converter from given json string.

### fromURI(uri)

Returns source map converter from given uri encoded json string.

### fromBase64(base64)

Returns source map converter from given base64 encoded json string.

### fromComment(comment)

Returns source map converter from given base64 or uri encoded json string prefixed with `//# sourceMappingURL=...`.

### fromMapFileComment(comment, readMap)

Returns source map converter from given `filename` by parsing `//# sourceMappingURL=filename`.

`readMap` must be a function which receives the source map filename and returns either a String or Buffer of the source map (if read synchronously), or a `Promise` containing a String or Buffer of the source map (if read asynchronously).

If `readMap` doesn't return a `Promise`, `fromMapFileComment` will return a source map converter synchronously.

If `readMap` returns a `Promise`, `fromMapFileComment` will also return `Promise`. The `Promise` will be either resolved with the source map converter or rejected with an error.

#### Examples

**Synchronous read in Node.js:**

```js
var convert = require('convert-source-map');
var fs = require('fs');

function readMap(filename) {
  return fs.readFileSync(filename, 'utf8');
}

var json = convert
  .fromMapFileComment('//# sourceMappingURL=map-file-comment.css.map', readMap)
  .toJSON();
console.log(json);
```


**Asynchronous read in Node.js:**

```js
var convert = require('convert-source-map');
var { promises: fs } = require('fs'); // Notice the `promises` import

function readMap(filename) {
  return fs.readFile(filename, 'utf8');
}

var converter = await convert.fromMapFileComment('//# sourceMappingURL=map-file-comment.css.map', readMap)
var json = converter.toJSON();
console.log(json);
```

**Asynchronous read in the browser:**

```js
var convert = require('convert-source-map');

async function readMap(url) {
  const res = await fetch(url);
  return res.text();
}

const converter = await convert.fromMapFileComment('//# sourceMappingURL=map-file-comment.css.map', readMap)
var json = converter.toJSON();
console.log(json);
```

### fromSource(source)

Finds last sourcemap comment in file and returns source map converter or returns `null` if no source map comment was found.

### fromMapFileSource(source, readMap)

Finds last sourcemap comment in file and returns source map converter or returns `null` if no source map comment was found.

`readMap` must be a function which receives the source map filename and returns either a String or Buffer of the source map (if read synchronously), or a `Promise` containing a String or Buffer of the source map (if read asynchronously).

If `readMap` doesn't return a `Promise`, `fromMapFileSource` will return a source map converter synchronously.

If `readMap` returns a `Promise`, `fromMapFileSource` will also return `Promise`. The `Promise` will be either resolved with the source map converter or rejected with an error.

### toObject()

Returns a copy of the underlying source map.

### toJSON([space])

Converts source map to json string. If `space` is given (optional), this will be passed to
[JSON.stringify](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify) when the
JSON string is generated.

### toURI()

Converts source map to uri encoded json string.

### toBase64()

Converts source map to base64 encoded json string.

### toComment([options])

Converts source map to an inline comment that can be appended to the source-file.

By default, the comment is formatted like: `//# sourceMappingURL=...`, which you would
normally see in a JS source file.

When `options.encoding == 'uri'`, the data will be uri encoded, otherwise they will be base64 encoded.

When `options.multiline == true`, the comment is formatted like: `/*# sourceMappingURL=... */`, which you would find in a CSS source file.

### addProperty(key, value)

Adds given property to the source map. Throws an error if property already exists.

### setProperty(key, value)

Sets given property to the source map. If property doesn't exist it is added, otherwise its value is updated.

### getProperty(key)

Gets given property of the source map.

### removeComments(src)

Returns `src` with all source map comments removed

### removeMapFileComments(src)

Returns `src` with all source map comments pointing to map files removed.

### commentRegex

Provides __a fresh__ RegExp each time it is accessed. Can be used to find source map comments.

Breaks down a source map comment into groups: Groups: 1: media type, 2: MIME type, 3: charset, 4: encoding, 5: data.

### mapFileCommentRegex

Provides __a fresh__ RegExp each time it is accessed. Can be used to find source map comments pointing to map files.

### generateMapFileComment(file, [options])

Returns a comment that links to an external source map via `file`.

By default, the comment is formatted like: `//# sourceMappingURL=...`, which you would normally see in a JS source file.

When `options.multiline == true`, the comment is formatted like: `/*# sourceMappingURL=... */`, which you would find in a CSS source file.

[ci-url]: https://github.com/thlorenz/convert-source-map/actions?query=workflow:ci
[ci-image]: https://img.shields.io/github/workflow/status/thlorenz/convert-source-map/CI?style=flat-square
