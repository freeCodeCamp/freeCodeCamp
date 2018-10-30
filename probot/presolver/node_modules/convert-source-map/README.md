# convert-source-map [![build status](https://secure.travis-ci.org/thlorenz/convert-source-map.svg?branch=master)](http://travis-ci.org/thlorenz/convert-source-map)

<a href="https://www.patreon.com/bePatron?u=8663953"><img alt="become a patron" src="https://c5.patreon.com/external/logo/become_a_patron_button.png" height="35px"></a>

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

## API

### fromObject(obj)

Returns source map converter from given object.

### fromJSON(json)

Returns source map converter from given json string.

### fromBase64(base64)

Returns source map converter from given base64 encoded json string.

### fromComment(comment)

Returns source map converter from given base64 encoded json string prefixed with `//# sourceMappingURL=...`.

### fromMapFileComment(comment, mapFileDir)

Returns source map converter from given `filename` by parsing `//# sourceMappingURL=filename`.

`filename` must point to a file that is found inside the `mapFileDir`. Most tools store this file right next to the
generated file, i.e. the one containing the source map.

### fromSource(source)

Finds last sourcemap comment in file and returns source map converter or returns null if no source map comment was found.

### fromMapFileSource(source, mapFileDir)

Finds last sourcemap comment in file and returns source map converter or returns null if no source map comment was
found.

The sourcemap will be read from the map file found by parsing `# sourceMappingURL=file` comment. For more info see
fromMapFileComment.

### toObject()

Returns a copy of the underlying source map.

### toJSON([space])

Converts source map to json string. If `space` is given (optional), this will be passed to
[JSON.stringify](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/stringify) when the
JSON string is generated.

### toBase64()

Converts source map to base64 encoded json string.

### toComment([options])

Converts source map to an inline comment that can be appended to the source-file.

By default, the comment is formatted like: `//# sourceMappingURL=...`, which you would
normally see in a JS source file.

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

### mapFileCommentRegex

Provides __a fresh__ RegExp each time it is accessed. Can be used to find source map comments pointing to map files.

### generateMapFileComment(file, [options])

Returns a comment that links to an external source map via `file`.

By default, the comment is formatted like: `//# sourceMappingURL=...`, which you would normally see in a JS source file.

When `options.multiline == true`, the comment is formatted like: `/*# sourceMappingURL=... */`, which you would find in a CSS source file.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/thlorenz/convert-source-map/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
