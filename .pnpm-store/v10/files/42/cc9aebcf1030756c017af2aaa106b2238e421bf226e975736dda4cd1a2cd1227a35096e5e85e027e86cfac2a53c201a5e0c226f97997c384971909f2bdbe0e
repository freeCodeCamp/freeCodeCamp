# source-list-map

## API

### Example

``` js
var SourceListMap = require("source-list-map").SourceListMap;

// Create a new map
var map = new SourceListMap();

// Add generated code that is map line to line to some soure
map.add("Generated\ncode1\n", "source-code.js", "Orginal\nsource");

// Add generated code that isn't mapped
map.add("Generated\ncode2\n");

// Get SourceMap and generated source
map.toStringWithSourceMap({ file: "generated-code.js" });
// {
//   source: 'Generated\ncode1\nGenerated\ncode2\n',
//   map: {
//      version: 3,
//      file: 'generated-code.js',
//      sources: [ 'source-code.js' ],
//      sourcesContent: [ 'Orginal\nsource' ],
//      mappings: 'AAAA;AACA;;;'
//    }
// }

// Convert existing SourceMap into SourceListMap
// (Only the first mapping per line is preserved)
var fromStringWithSourceMap = require("source-list-map").fromStringWithSourceMap;
var map = fromStringWithSourceMap("Generated\ncode", { version: 3, ... });

```

### `new SourceListMap()`

### `SourceListMap.prototype.add`

``` js
SourceListMap.prototype.add(generatedCode: string)
SourceListMap.prototype.add(generatedCode: string, source: string, originalSource: string)
SourceListMap.prototype.add(sourceListMap: SourceListMap)
```

Append some stuff.

### `SourceListMap.prototype.prepend`

``` js
SourceListMap.prototype.prepend(generatedCode: string)
SourceListMap.prototype.prepend(generatedCode: string, source: string, originalSource: string)
SourceListMap.prototype.prepend(sourceListMap: SourceListMap)
```

Prepend some stuff.

### `SourceListMap.prototype.toString()`

Get generated code.

### `SourceListMap.prototype.toStringWithSourceMap`

``` js
SourceListMap.prototype.toStringWithSourceMap(options: object)
```

Get generated code and SourceMap. `options` can contains `file` property which defines the `file` property of the SourceMap.

### `SourceListMap.prototype.mapGeneratedCode`

``` js
SourceListMap.prototype.mapGeneratedCode(fn: function) : SourceListMap
```

Applies `fn` to each generated code block (per line). The returned value is set as new generated code. Returns a new SourceListMap.

Removing and adding lines is supported. The SourceMap complexity will increase when doing this.

## Test

[![Build Status](https://travis-ci.org/webpack/source-list-map.svg)](https://travis-ci.org/webpack/source-list-map)

## License

Copyright (c) 2017 JS Foundation

MIT (http://www.opensource.org/licenses/mit-license.php)