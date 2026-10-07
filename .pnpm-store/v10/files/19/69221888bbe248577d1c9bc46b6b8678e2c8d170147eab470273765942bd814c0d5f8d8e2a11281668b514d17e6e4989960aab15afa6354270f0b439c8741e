# @jridgewell/source-map

> Packages `@jridgewell/trace-mapping` and `@jridgewell/gen-mapping` into the familiar source-map API

This isn't the full API, but it's the core functionality. This wraps
[@jridgewell/trace-mapping][trace-mapping] and [@jridgewell/gen-mapping][gen-mapping]
implementations.

## Installation

```sh
npm install @jridgewell/source-map
```

## Usage

TODO

### SourceMapConsumer

```typescript
import { SourceMapConsumer } from '@jridgewell/source-map';
const smc = new SourceMapConsumer({
  version: 3,
  names: ['foo'],
  sources: ['input.js'],
  mappings: 'AAAAA',
});
```

#### SourceMapConsumer.fromSourceMap(mapGenerator[, mapUrl])

Transforms a `SourceMapGenerator` into a `SourceMapConsumer`.

```typescript
const smg = new SourceMapGenerator();

const smc = SourceMapConsumer.fromSourceMap(map);
smc.originalPositionFor({ line: 1, column: 0 });
```

#### SourceMapConsumer.prototype.originalPositionFor(generatedPosition)

```typescript
const smc = new SourceMapConsumer(map);
smc.originalPositionFor({ line: 1, column: 0 });
```

#### SourceMapConsumer.prototype.mappings

```typescript
const smc = new SourceMapConsumer(map);
smc.mappings; // AAAA
```

#### SourceMapConsumer.prototype.allGeneratedPositionsFor(originalPosition)

```typescript
const smc = new SourceMapConsumer(map);
smc.allGeneratedpositionsfor({ line: 1, column: 5, source: "baz.ts" });
// [
//   { line: 2, column: 8 }
// ]
```

#### SourceMapConsumer.prototype.eachMapping(callback[, context[, order]])

> This implementation currently does not support the "order" parameter.
> This function can only iterate in Generated order.

```typescript
const smc = new SourceMapConsumer(map);
smc.eachMapping((mapping) => {
// { source: 'baz.ts',
//   generatedLine: 4,
//   generatedColumn: 5,
//   originalLine: 4,
//   originalColumn: 5,
//   name: null }
});
```

#### SourceMapConsumer.prototype.generatedPositionFor(originalPosition)

```typescript
const smc = new SourceMapConsumer(map);
smc.generatedPositionFor({ line: 1, column: 5, source: "baz.ts" });
// { line: 2, column: 8 }
```

#### SourceMapConsumer.prototype.hasContentsOfAllSources()

```typescript
const smc = new SourceMapConsumer(map);
smc.hasContentsOfAllSources();
// true
```

#### SourceMapConsumer.prototype.sourceContentFor(source[, returnNullOnMissing])

```typescript
const smc = new SourceMapConsumer(map);
smc.generatedPositionFor("baz.ts");
// "export default ..."
```

#### SourceMapConsumer.prototype.version

Returns the source map's version

### SourceMapGenerator

```typescript
import { SourceMapGenerator } from '@jridgewell/source-map';
const smg = new SourceMapGenerator({
  file: 'output.js',
  sourceRoot: 'https://example.com/',
});
```

#### SourceMapGenerator.fromSourceMap(map)

Transform a `SourceMapConsumer` into a `SourceMapGenerator`.

```typescript
const smc = new SourceMapConsumer();
const smg = SourceMapGenerator.fromSourceMap(smc);
```

#### SourceMapGenerator.prototype.applySourceMap(sourceMapConsumer[, sourceFile[, sourceMapPath]])

> This method is not implemented yet

#### SourceMapGenerator.prototype.addMapping(mapping)

```typescript
const smg = new SourceMapGenerator();
smg.addMapping({
  generated: { line: 1, column: 0 },
  source: 'input.js',
  original: { line: 1, column: 0 },
  name: 'foo',
});
```

#### SourceMapGenerator.prototype.setSourceContent(sourceFile, sourceContent)

```typescript
const smg = new SourceMapGenerator();
smg.setSourceContent('input.js', 'foobar');
```

#### SourceMapGenerator.prototype.toJSON()

```typescript
const smg = new SourceMapGenerator();
smg.toJSON(); // { version: 3, names: [], sources: [], mappings: '' }
```

#### SourceMapGenerator.prototype.toString()

```typescript
const smg = new SourceMapGenerator();
smg.toJSON(); // "{version:3,names:[],sources:[],mappings:''}"
```

#### SourceMapGenerator.prototype.toDecodedMap()

```typescript
const smg = new SourceMapGenerator();
smg.toDecodedMap(); // { version: 3, names: [], sources: [], mappings: [] }
```

## Known differences with other implementations

This implementation has some differences with `source-map` and `source-map-js`.

- `SourceMapConsumer.prototype.eachMapping()`
  - Does not support the `order` argument
- `SourceMapGenerator.prototype.applySourceMap()`
  - Not implemented

[trace-mapping]: https://github.com/jridgewell/sourcemaps/tree/main/packages/trace-mapping/
[gen-mapping]: https://github.com/jridgewell/sourcemaps/tree/main/packages/gen-mapping/
