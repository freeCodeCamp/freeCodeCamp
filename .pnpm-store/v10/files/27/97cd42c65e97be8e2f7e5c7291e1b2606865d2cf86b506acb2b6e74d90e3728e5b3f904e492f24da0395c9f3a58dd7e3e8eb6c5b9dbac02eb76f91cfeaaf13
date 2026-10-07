# webpack-sources

Contains multiple classes which represent a `Source`. A `Source` can be asked for source code, size, source map and hash.

## `Source`

Base class for all sources.

### Public methods

All methods should be considered as expensive as they may need to do computations.

#### `source`

<!-- eslint-skip -->
```typescript
Source.prototype.source() -> String | Buffer
```

Returns the represented source code as string or Buffer (for binary Sources).

#### `buffer`

<!-- eslint-skip -->
```typescript
Source.prototype.buffer() -> Buffer
```

Returns the represented source code as Buffer. Strings are converted to utf-8.

#### `size`

<!-- eslint-skip -->
```typescript
Source.prototype.size() -> Number
```

Returns the size in bytes of the represented source code.

#### `map`

<!-- eslint-skip -->
```typescript
Source.prototype.map(options?: Object) -> Object | null
```

Returns the SourceMap of the represented source code as JSON. May return `null` if no SourceMap is available.

The `options` object can contain the following keys:

- `columns: Boolean` (default `true`): If set to false the implementation may omit mappings for columns.

#### `sourceAndMap`

<!-- eslint-skip -->
```typescript
Source.prototype.sourceAndMap(options?: Object) -> {
	source: String | Buffer,
	map: Object | null
}
```

Returns both, source code (like `Source.prototype.source()` and SourceMap (like `Source.prototype.map()`). This method could have better performance than calling `source()` and `map()` separately.

See `map()` for `options`.

#### `updateHash`

<!-- eslint-skip -->
```typescript
Source.prototype.updateHash(hash: Hash) -> void
```

Updates the provided `Hash` object with the content of the represented source code. (`Hash` is an object with an `update` method, which is called with string values)

## `RawSource`

Represents source code without SourceMap.

<!-- eslint-skip -->
```typescript
new RawSource(sourceCode: String | Buffer)
```

## `OriginalSource`

Represents source code, which is a copy of the original file.

<!-- eslint-skip -->
```typescript
new OriginalSource(
	sourceCode: String | Buffer,
	name: String
)
```

- `sourceCode`: The source code.
- `name`: The filename of the original source code.

OriginalSource tries to create column mappings if requested, by splitting the source code at typical statement borders (`;`, `{`, `}`).

## `SourceMapSource`

Represents source code with SourceMap, optionally having an additional SourceMap for the original source.

<!-- eslint-skip -->
```typescript
new SourceMapSource(
	sourceCode: String | Buffer,
	name: String,
	sourceMap: Object | String | Buffer,
	originalSource?: String | Buffer,
	innerSourceMap?: Object | String | Buffer,
	removeOriginalSource?: boolean
)
```

- `sourceCode`: The source code.
- `name`: The filename of the original source code.
- `sourceMap`: The SourceMap for the source code.
- `originalSource`: The source code of the original file. Can be omitted if the `sourceMap` already contains the original source code.
- `innerSourceMap`: The SourceMap for the `originalSource`/`name`.
- `removeOriginalSource`: Removes the source code for `name` from the final map, keeping only the deeper mappings for that file.

The `SourceMapSource` supports "identity" mappings for the `innerSourceMap`.
When original source matches generated source for a mapping it's assumed to be mapped char by char allowing to keep finer mappings from `sourceMap`.

## `CachedSource`

Decorates a `Source` and caches returned results of `map`, `source`, `buffer`, `size` and `sourceAndMap` in memory. `updateHash` is not cached.
It tries to reused cached results from other methods to avoid calculations, i. e. when `source` is already cached, calling `size` will get the size from the cached source, calling `sourceAndMap` will only call `map` on the wrapped Source.

<!-- eslint-skip -->
```typescript
new CachedSource(source: Source)
new CachedSource(source: Source | () => Source, cachedData?: CachedData)
```

Instead of passing a `Source` object directly one can pass an function that returns a `Source` object. The function is only called when needed and once.

### Public methods

#### `getCachedData()`

Returns the cached data for passing to the constructor. All cached entries are converted to Buffers and strings are avoided.

#### `original()`

Returns the original `Source` object.

#### `originalLazy()`

Returns the original `Source` object or a function returning these.

## `PrefixSource`

Prefix every line of the decorated `Source` with a provided string.

<!-- eslint-skip -->
```typescript
new PrefixSource(
	prefix: String,
	source: Source | String | Buffer
)
```

## `ConcatSource`

Concatenate multiple `Source`s or strings to a single source.

<!-- eslint-skip -->
```typescript
new ConcatSource(
	...items?: Source | String
)
```

### Public methods

#### `add`

<!-- eslint-skip -->
```typescript
ConcatSource.prototype.add(item: Source | String)
```

Adds an item to the source.

## `ReplaceSource`

Decorates a `Source` with replacements and insertions of source code.

The `ReplaceSource` supports "identity" mappings for child source.
When original source matches generated source for a mapping it's assumed to be mapped char by char allowing to split mappings at replacements/insertions.

### Public methods

#### `replace`

<!-- eslint-skip -->
```typescript
ReplaceSource.prototype.replace(
	start: Number,
	end: Number,
	replacement: String
)
```

Replaces chars from `start` (0-indexed, inclusive) to `end` (0-indexed, inclusive) with `replacement`.

Locations represents locations in the original source and are not influenced by other replacements or insertions.

#### `insert`

<!-- eslint-skip -->
```typescript
ReplaceSource.prototype.insert(
	pos: Number,
	insertion: String
)
```

Inserts the `insertion` before char `pos` (0-indexed).

Location represents location in the original source and is not influenced by other replacements or insertions.

#### `original`

Get decorated `Source`.

## `CompatSource`

Converts a Source-like object into a real Source object.

### Public methods

#### static `from`

<!-- eslint-skip -->
```typescript
CompatSource.from(sourceLike: any | Source)
```

If `sourceLike` is a real Source it returns it unmodified. Otherwise it returns it wrapped in a CompatSource.
