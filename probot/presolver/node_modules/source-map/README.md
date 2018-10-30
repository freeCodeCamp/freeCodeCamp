# Source Map

This is a library to generate and consume the source map format
[described here][format].

This library is written in the Asynchronous Module Definition format, and works
in the following environments:

* Modern Browsers supporting ECMAScript 5 (either after the build, or with an
  AMD loader such as RequireJS)

* Inside Firefox (as a JSM file, after the build)

* With NodeJS versions 0.8.X and higher

## Node

    $ npm install source-map

## Building from Source (for everywhere else)

Install Node and then run

    $ git clone https://fitzgen@github.com/mozilla/source-map.git
    $ cd source-map
    $ npm link .

Next, run

    $ node Makefile.dryice.js

This should spew a bunch of stuff to stdout, and create the following files:

* `dist/source-map.js` - The unminified browser version.

* `dist/source-map.min.js` - The minified browser version.

* `dist/SourceMap.jsm` - The JavaScript Module for inclusion in Firefox source.

## Examples

### Consuming a source map

```js
var rawSourceMap = {
  version: 3,
  file: 'min.js',
  names: ['bar', 'baz', 'n'],
  sources: ['one.js', 'two.js'],
  sourceRoot: 'http://example.com/www/js/',
  mappings: 'CAAC,IAAI,IAAM,SAAUA,GAClB,OAAOC,IAAID;CCDb,IAAI,IAAM,SAAUE,GAClB,OAAOA'
};

var smc = new SourceMapConsumer(rawSourceMap);

console.log(smc.sources);
// [ 'http://example.com/www/js/one.js',
//   'http://example.com/www/js/two.js' ]

console.log(smc.originalPositionFor({
  line: 2,
  column: 28
}));
// { source: 'http://example.com/www/js/two.js',
//   line: 2,
//   column: 10,
//   name: 'n' }

console.log(smc.generatedPositionFor({
  source: 'http://example.com/www/js/two.js',
  line: 2,
  column: 10
}));
// { line: 2, column: 28 }

smc.eachMapping(function (m) {
  // ...
});
```

### Generating a source map

In depth guide:
[**Compiling to JavaScript, and Debugging with Source Maps**](https://hacks.mozilla.org/2013/05/compiling-to-javascript-and-debugging-with-source-maps/)

#### With SourceNode (high level API)

```js
function compile(ast) {
  switch (ast.type) {
  case 'BinaryExpression':
    return new SourceNode(
      ast.location.line,
      ast.location.column,
      ast.location.source,
      [compile(ast.left), " + ", compile(ast.right)]
    );
  case 'Literal':
    return new SourceNode(
      ast.location.line,
      ast.location.column,
      ast.location.source,
      String(ast.value)
    );
  // ...
  default:
    throw new Error("Bad AST");
  }
}

var ast = parse("40 + 2", "add.js");
console.log(compile(ast).toStringWithSourceMap({
  file: 'add.js'
}));
// { code: '40 + 2',
//   map: [object SourceMapGenerator] }
```

#### With SourceMapGenerator (low level API)

```js
var map = new SourceMapGenerator({
  file: "source-mapped.js"
});

map.addMapping({
  generated: {
    line: 10,
    column: 35
  },
  source: "foo.js",
  original: {
    line: 33,
    column: 2
  },
  name: "christopher"
});

console.log(map.toString());
// '{"version":3,"file":"source-mapped.js","sources":["foo.js"],"names":["christopher"],"mappings":";;;;;;;;;mCAgCEA"}'
```

## API

Get a reference to the module:

```js
// NodeJS
var sourceMap = require('source-map');

// Browser builds
var sourceMap = window.sourceMap;

// Inside Firefox
let sourceMap = {};
Components.utils.import('resource:///modules/devtools/SourceMap.jsm', sourceMap);
```

### SourceMapConsumer

A SourceMapConsumer instance represents a parsed source map which we can query
for information about the original file positions by giving it a file position
in the generated source.

#### new SourceMapConsumer(rawSourceMap)

The only parameter is the raw source map (either as a string which can be
`JSON.parse`'d, or an object). According to the spec, source maps have the
following attributes:

* `version`: Which version of the source map spec this map is following.

* `sources`: An array of URLs to the original source files.

* `names`: An array of identifiers which can be referrenced by individual
  mappings.

* `sourceRoot`: Optional. The URL root from which all sources are relative.

* `sourcesContent`: Optional. An array of contents of the original source files.

* `mappings`: A string of base64 VLQs which contain the actual mappings.

* `file`: Optional. The generated filename this source map is associated with.

#### SourceMapConsumer.prototype.computeColumnSpans()

Compute the last column for each generated mapping. The last column is
inclusive.

#### SourceMapConsumer.prototype.originalPositionFor(generatedPosition)

Returns the original source, line, and column information for the generated
source's line and column positions provided. The only argument is an object with
the following properties:

* `line`: The line number in the generated source.

* `column`: The column number in the generated source.

* `bias`: Either `SourceMapConsumer.GREATEST_LOWER_BOUND` or
  `SourceMapConsumer.LEAST_UPPER_BOUND`. Specifies whether to return the closest
  element that is smaller than or greater than the one we are searching for,
  respectively, if the exact element cannot be found.  Defaults to
  `SourceMapConsumer.GREATEST_LOWER_BOUND`.

and an object is returned with the following properties:

* `source`: The original source file, or null if this information is not
  available.

* `line`: The line number in the original source, or null if this information is
  not available.

* `column`: The column number in the original source, or null or null if this
  information is not available.

* `name`: The original identifier, or null if this information is not available.

#### SourceMapConsumer.prototype.generatedPositionFor(originalPosition)

Returns the generated line and column information for the original source,
line, and column positions provided. The only argument is an object with
the following properties:

* `source`: The filename of the original source.

* `line`: The line number in the original source.

* `column`: The column number in the original source.

and an object is returned with the following properties:

* `line`: The line number in the generated source, or null.

* `column`: The column number in the generated source, or null.

#### SourceMapConsumer.prototype.allGeneratedPositionsFor(originalPosition)

Returns all generated line and column information for the original source, line,
and column provided. If no column is provided, returns all mappings
corresponding to a either the line we are searching for or the next closest line
that has any mappings. Otherwise, returns all mappings corresponding to the
given line and either the column we are searching for or the next closest column
that has any offsets.

The only argument is an object with the following properties:

* `source`: The filename of the original source.

* `line`: The line number in the original source.

* `column`: Optional. The column number in the original source.

and an array of objects is returned, each with the following properties:

* `line`: The line number in the generated source, or null.

* `column`: The column number in the generated source, or null.

#### SourceMapConsumer.prototype.hasContentsOfAllSources()

Return true if we have the embedded source content for every source listed in
the source map, false otherwise.

In other words, if this method returns `true`, then `smc.sourceContentFor(s)`
will succeed for every source `s` in `smc.sources`.

#### SourceMapConsumer.prototype.sourceContentFor(source[, returnNullOnMissing])

Returns the original source content for the source provided. The only
argument is the URL of the original source file.

If the source content for the given source is not found, then an error is
thrown. Optionally, pass `true` as the second param to have `null` returned
instead.

#### SourceMapConsumer.prototype.eachMapping(callback, context, order)

Iterate over each mapping between an original source/line/column and a
generated line/column in this source map.

* `callback`: The function that is called with each mapping. Mappings have the
  form `{ source, generatedLine, generatedColumn, originalLine, originalColumn,
  name }`

* `context`: Optional. If specified, this object will be the value of `this`
  every time that `callback` is called.

* `order`: Either `SourceMapConsumer.GENERATED_ORDER` or
  `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to iterate over
  the mappings sorted by the generated file's line/column order or the
  original's source/line/column order, respectively. Defaults to
  `SourceMapConsumer.GENERATED_ORDER`.

### SourceMapGenerator

An instance of the SourceMapGenerator represents a source map which is being
built incrementally.

#### new SourceMapGenerator([startOfSourceMap])

You may pass an object with the following properties:

* `file`: The filename of the generated source that this source map is
  associated with.

* `sourceRoot`: A root for all relative URLs in this source map.

* `skipValidation`: Optional. When `true`, disables validation of mappings as
  they are added. This can improve performance but should be used with
  discretion, as a last resort. Even then, one should avoid using this flag when
  running tests, if possible.

#### SourceMapGenerator.fromSourceMap(sourceMapConsumer)

Creates a new SourceMapGenerator based on a SourceMapConsumer

* `sourceMapConsumer` The SourceMap.

#### SourceMapGenerator.prototype.addMapping(mapping)

Add a single mapping from original source line and column to the generated
source's line and column for this source map being created. The mapping object
should have the following properties:

* `generated`: An object with the generated line and column positions.

* `original`: An object with the original line and column positions.

* `source`: The original source file (relative to the sourceRoot).

* `name`: An optional original token name for this mapping.

#### SourceMapGenerator.prototype.setSourceContent(sourceFile, sourceContent)

Set the source content for an original source file.

* `sourceFile` the URL of the original source file.

* `sourceContent` the content of the source file.

#### SourceMapGenerator.prototype.applySourceMap(sourceMapConsumer[, sourceFile[, sourceMapPath]])

Applies a SourceMap for a source file to the SourceMap.
Each mapping to the supplied source file is rewritten using the
supplied SourceMap. Note: The resolution for the resulting mappings
is the minimium of this map and the supplied map.

* `sourceMapConsumer`: The SourceMap to be applied.

* `sourceFile`: Optional. The filename of the source file.
  If omitted, sourceMapConsumer.file will be used, if it exists.
  Otherwise an error will be thrown.

* `sourceMapPath`: Optional. The dirname of the path to the SourceMap
  to be applied. If relative, it is relative to the SourceMap.

  This parameter is needed when the two SourceMaps aren't in the same
  directory, and the SourceMap to be applied contains relative source
  paths. If so, those relative source paths need to be rewritten
  relative to the SourceMap.

  If omitted, it is assumed that both SourceMaps are in the same directory,
  thus not needing any rewriting. (Supplying `'.'` has the same effect.)

#### SourceMapGenerator.prototype.toString()

Renders the source map being generated to a string.

### SourceNode

SourceNodes provide a way to abstract over interpolating and/or concatenating
snippets of generated JavaScript source code, while maintaining the line and
column information associated between those snippets and the original source
code. This is useful as the final intermediate representation a compiler might
use before outputting the generated JS and source map.

#### new SourceNode([line, column, source[, chunk[, name]]])

* `line`: The original line number associated with this source node, or null if
  it isn't associated with an original line.

* `column`: The original column number associated with this source node, or null
  if it isn't associated with an original column.

* `source`: The original source's filename; null if no filename is provided.

* `chunk`: Optional. Is immediately passed to `SourceNode.prototype.add`, see
  below.

* `name`: Optional. The original identifier.

#### SourceNode.fromStringWithSourceMap(code, sourceMapConsumer[, relativePath])

Creates a SourceNode from generated code and a SourceMapConsumer.

* `code`: The generated code

* `sourceMapConsumer` The SourceMap for the generated code

* `relativePath` The optional path that relative sources in `sourceMapConsumer`
  should be relative to.

#### SourceNode.prototype.add(chunk)

Add a chunk of generated JS to this source node.

* `chunk`: A string snippet of generated JS code, another instance of
   `SourceNode`, or an array where each member is one of those things.

#### SourceNode.prototype.prepend(chunk)

Prepend a chunk of generated JS to this source node.

* `chunk`: A string snippet of generated JS code, another instance of
   `SourceNode`, or an array where each member is one of those things.

#### SourceNode.prototype.setSourceContent(sourceFile, sourceContent)

Set the source content for a source file. This will be added to the
`SourceMap` in the `sourcesContent` field.

* `sourceFile`: The filename of the source file

* `sourceContent`: The content of the source file

#### SourceNode.prototype.walk(fn)

Walk over the tree of JS snippets in this node and its children. The walking
function is called once for each snippet of JS and is passed that snippet and
the its original associated source's line/column location.

* `fn`: The traversal function.

#### SourceNode.prototype.walkSourceContents(fn)

Walk over the tree of SourceNodes. The walking function is called for each
source file content and is passed the filename and source content.

* `fn`: The traversal function.

#### SourceNode.prototype.join(sep)

Like `Array.prototype.join` except for SourceNodes. Inserts the separator
between each of this source node's children.

* `sep`: The separator.

#### SourceNode.prototype.replaceRight(pattern, replacement)

Call `String.prototype.replace` on the very right-most source snippet. Useful
for trimming whitespace from the end of a source node, etc.

* `pattern`: The pattern to replace.

* `replacement`: The thing to replace the pattern with.

#### SourceNode.prototype.toString()

Return the string representation of this source node. Walks over the tree and
concatenates all the various snippets together to one string.

#### SourceNode.prototype.toStringWithSourceMap([startOfSourceMap])

Returns the string representation of this tree of source nodes, plus a
SourceMapGenerator which contains all the mappings between the generated and
original sources.

The arguments are the same as those to `new SourceMapGenerator`.

## Tests

[![Build Status](https://travis-ci.org/mozilla/source-map.png?branch=master)](https://travis-ci.org/mozilla/source-map)

Install NodeJS version 0.8.0 or greater, then run `node test/run-tests.js`.

To add new tests, create a new file named `test/test-<your new test name>.js`
and export your test functions with names that start with "test", for example

```js
exports["test doing the foo bar"] = function (assert, util) {
  ...
};
```

The new test will be located automatically when you run the suite.

The `util` argument is the test utility module located at `test/source-map/util`.

The `assert` argument is a cut down version of node's assert module. You have
access to the following assertion functions:

* `doesNotThrow`

* `equal`

* `ok`

* `strictEqual`

* `throws`

(The reason for the restricted set of test functions is because we need the
tests to run inside Firefox's test suite as well and so the assert module is
shimmed in that environment. See `build/assert-shim.js`.)

[format]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit
[feature]: https://wiki.mozilla.org/DevTools/Features/SourceMap
[Dryice]: https://github.com/mozilla/dryice
