# @jridgewell/remapping

> Remap sequential sourcemaps through transformations to point at the original source code

Remapping allows you to take the sourcemaps generated through transforming your code and "remap"
them to the original source locations. Think "my minified code, transformed with babel and bundled
with webpack", all pointing to the correct location in your original source code.

With remapping, none of your source code transformations need to be aware of the input's sourcemap,
they only need to generate an output sourcemap. This greatly simplifies building custom
transformations (think a find-and-replace).

## Installation

```sh
npm install @jridgewell/remapping
```

## Usage

```typescript
function remapping(
  map: SourceMap | SourceMap[],
  loader: (file: string, ctx: LoaderContext) => (SourceMap | null | undefined),
  options?: { excludeContent: boolean, decodedMappings: boolean }
): SourceMap;

// LoaderContext gives the loader the importing sourcemap, tree depth, the ability to override the
// "source" location (where child sources are resolved relative to, or the location of original
// source), and the ability to override the "content" of an original source for inclusion in the
// output sourcemap.
type LoaderContext = {
 readonly importer: string;
 readonly depth: number;
 source: string;
 content: string | null | undefined;
}
```

`remapping` takes the final output sourcemap, and a `loader` function. For every source file pointer
in the sourcemap, the `loader` will be called with the resolved path. If the path itself represents
a transformed file (it has a sourcmap associated with it), then the `loader` should return that
sourcemap. If not, the path will be treated as an original, untransformed source code.

```js
// Babel transformed "helloworld.js" into "transformed.js"
const transformedMap = JSON.stringify({
  file: 'transformed.js',
  // 1st column of 2nd line of output file translates into the 1st source
  // file, line 3, column 2
  mappings: ';CAEE',
  sources: ['helloworld.js'],
  version: 3,
});

// Uglify minified "transformed.js" into "transformed.min.js"
const minifiedTransformedMap = JSON.stringify({
  file: 'transformed.min.js',
  // 0th column of 1st line of output file translates into the 1st source
  // file, line 2, column 1.
  mappings: 'AACC',
  names: [],
  sources: ['transformed.js'],
  version: 3,
});

const remapped = remapping(
  minifiedTransformedMap,
  (file, ctx) => {

    // The "transformed.js" file is an transformed file.
    if (file === 'transformed.js') {
      // The root importer is empty.
      console.assert(ctx.importer === '');
      // The depth in the sourcemap tree we're currently loading.
      // The root `minifiedTransformedMap` is depth 0, and its source children are depth 1, etc.
      console.assert(ctx.depth === 1);

      return transformedMap;
    }

    // Loader will be called to load transformedMap's source file pointers as well.
    console.assert(file === 'helloworld.js');
    // `transformed.js`'s sourcemap points into `helloworld.js`.
    console.assert(ctx.importer === 'transformed.js');
    // This is a source child of `transformed`, which is a source child of `minifiedTransformedMap`.
    console.assert(ctx.depth === 2);
    return null;
  }
);

console.log(remapped);
// {
//   file: 'transpiled.min.js',
//   mappings: 'AAEE',
//   sources: ['helloworld.js'],
//   version: 3,
// };
```

In this example, `loader` will be called twice:

1. `"transformed.js"`, the first source file pointer in the `minifiedTransformedMap`. We return the
   associated sourcemap for it (its a transformed file, after all) so that sourcemap locations can
   be traced through it into the source files it represents.
2. `"helloworld.js"`, our original, unmodified source code. This file does not have a sourcemap, so
   we return `null`.

The `remapped` sourcemap now points from `transformed.min.js` into locations in `helloworld.js`. If
you were to read the `mappings`, it says "0th column of the first line output line points to the 1st
column of the 2nd line of the file `helloworld.js`".

### Multiple transformations of a file

As a convenience, if you have multiple single-source transformations of a file, you may pass an
array of sourcemap files in the order of most-recent transformation sourcemap first. Note that this
changes the `importer` and `depth` of each call to our loader. So our above example could have been
written as:

```js
const remapped = remapping(
  [minifiedTransformedMap, transformedMap],
  () => null
);

console.log(remapped);
// {
//   file: 'transpiled.min.js',
//   mappings: 'AAEE',
//   sources: ['helloworld.js'],
//   version: 3,
// };
```

### Advanced control of the loading graph

#### `source`

The `source` property can overridden to any value to change the location of the current load. Eg,
for an original source file, it allows us to change the location to the original source regardless
of what the sourcemap source entry says. And for transformed files, it allows us to change the
relative resolving location for child sources of the loaded sourcemap.

```js
const remapped = remapping(
  minifiedTransformedMap,
  (file, ctx) => {

    if (file === 'transformed.js') {
      // We pretend the transformed.js file actually exists in the 'src/' directory. When the nested
      // source files are loaded, they will now be relative to `src/`.
      ctx.source = 'src/transformed.js';
      return transformedMap;
    }

    console.assert(file === 'src/helloworld.js');
    // We could futher change the source of this original file, eg, to be inside a nested directory
    // itself. This will be reflected in the remapped sourcemap.
    ctx.source = 'src/nested/transformed.js';
    return null;
  }
);

console.log(remapped);
// {
//   …,
//   sources: ['src/nested/helloworld.js'],
// };
```


#### `content`

The `content` property can be overridden when we encounter an original source file. Eg, this allows
you to manually provide the source content of the original file regardless of whether the
`sourcesContent` field is present in the parent sourcemap. It can also be set to `null` to remove
the source content.

```js
const remapped = remapping(
  minifiedTransformedMap,
  (file, ctx) => {

    if (file === 'transformed.js') {
      // transformedMap does not include a `sourcesContent` field, so usually the remapped sourcemap
      // would not include any `sourcesContent` values.
      return transformedMap;
    }

    console.assert(file === 'helloworld.js');
    // We can read the file to provide the source content.
    ctx.content = fs.readFileSync(file, 'utf8');
    return null;
  }
);

console.log(remapped);
// {
//   …,
//   sourcesContent: [
//     'console.log("Hello world!")',
//   ],
// };
```

### Options

#### excludeContent

By default, `excludeContent` is `false`. Passing `{ excludeContent: true }` will exclude the
`sourcesContent` field from the returned sourcemap. This is mainly useful when you want to reduce
the size out the sourcemap.

#### decodedMappings

By default, `decodedMappings` is `false`. Passing `{ decodedMappings: true }` will leave the
`mappings` field in a [decoded state](https://github.com/rich-harris/sourcemap-codec) instead of
encoding into a VLQ string.
