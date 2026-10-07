# [![unified][logo]](https://unified.js.org/)

[![Travis][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Chat][chat-badge]][chat]

**unified** is an interface for processing text using syntax trees.  It’s what
powers [**remark**][remark], [**retext**][retext], and [**rehype**][rehype],
but it also allows for processing between multiple syntaxes.

**unified** enabled new exciting projects like [Gatsby][] to pull in markdown,
[MDX][] to embed [JSX][], and [Prettier][] to format it.
It’s used to check code for [Storybook][], [debugger.html][] ([Mozilla][]),
and [opensource.guide][] ([GitHub][]).

*   To read about what we’re up to, follow us on [Medium][] and [Twitter][]
*   For a less technical and more practical introduction to unified, visit
    [`unified.js.org`][site] and try its introductory [Guides][]
*   To help us out, see [`contributing.md`][contributing], or become a backer
    or sponsor on [Open Collective][collective]

* * *

<!--lint ignore no-html-->

**Announcing the unified collective!  🎉
[Read more about it on Medium »][medium]**

## Sponsors

<!--lint ignore no-html maximum-line-length-->

<table>
  <tr valign="top">
    <td width="20%" align="center">
      <a href="https://zeit.co"><img src="https://avatars1.githubusercontent.com/u/14985020?s=400&v=4"></a>
      <br><br>🥇
      <a href="https://zeit.co">ZEIT</a>
    </td>
    <td width="20%" align="center">
      <a href="https://www.gatsbyjs.org"><img src="https://avatars1.githubusercontent.com/u/12551863?s=400&v=4"></a>
      <br><br>🥇
      <a href="https://www.gatsbyjs.org">Gatsby</a></td>
    <td width="20%" align="center">
      <a href="https://compositor.io"><img src="https://avatars1.githubusercontent.com/u/19245838?s=400&v=4"></a>
      <br><br>🥉
      <a href="https://compositor.io">Compositor</a>
    </td>
    <td width="20%" align="center">
      <a href="https://www.holloway.com"><img src="https://avatars1.githubusercontent.com/u/35904294?s=400&v=4"></a>
      <br><br>
      <a href="https://www.holloway.com">Holloway</a>
    </td>
    <td width="20%" align="center">
      <br><br><br><br>
      <a href="https://opencollective.com/unified"><strong>You?</strong>
    </td>
  </tr>
</table>

## Installation

[npm][]:

```bash
npm install unified
```

## Usage

```js
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var doc = require('rehype-document')
var format = require('rehype-format')
var html = require('rehype-stringify')
var report = require('vfile-reporter')

unified()
  .use(markdown)
  .use(remark2rehype)
  .use(doc)
  .use(format)
  .use(html)
  .process('# Hello world!', function(err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })
```

Yields:

```html
no issues found
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

## Table of Contents

*   [Description](#description)
*   [API](#api)
    *   [processor()](#processor)
    *   [processor.use(plugin\[, options\])](#processoruseplugin-options)
    *   [processor.parse(file|value)](#processorparsefilevalue)
    *   [processor.stringify(node\[, file\])](#processorstringifynode-file)
    *   [processor.run(node\[, file\]\[, done\])](#processorrunnode-file-done)
    *   [processor.runSync(node\[, file\])](#processorrunsyncnode-file)
    *   [processor.process(file|value\[, done\])](#processorprocessfilevalue-done)
    *   [processor.processSync(file|value)](#processorprocesssyncfilevalue)
    *   [processor.data(\[key\[, value\]\])](#processordatakey-value)
    *   [processor.freeze()](#processorfreeze)
*   [Plugin](#plugin)
    *   [function attacher(\[options\])](#function-attacheroptions)
    *   [function transformer(node, file\[, next\])](#function-transformernode-file-next)
*   [Preset](#preset)
*   [Contribute](#contribute)
*   [Acknowledgments](#acknowledgments)
*   [License](#license)

## Description

**unified** is an interface for processing text using syntax trees.  Syntax
trees are a representation understandable to programs.  Those programs, called
[**plugin**][plugin]s, take these trees and modify them, amongst other things.
To get to the syntax tree from input text there’s a [**parser**][parser].  To
get from that back to text there’s a [**compiler**][compiler].  This is the
[**process**][process] of a **processor**.

```ascii
| ....................... process() ......................... |
| ......... parse() ..... | run() | ..... stringify() ....... |

          +--------+                     +----------+
Input ->- | Parser | ->- Syntax Tree ->- | Compiler | ->- Output
          +--------+          |          +----------+
                              X
                              |
                       +--------------+
                       | Transformers |
                       +--------------+
```

###### Processors

Every processor implements another processor.  To create a new processor invoke
another processor.  This creates a processor that is configured to function the
same as its ancestor.  But when the descendant processor is configured in the
future it does not affect the ancestral processor.

When processors are exposed from a module (for example, unified itself) they
should not be configured directly, as that would change their behaviour for all
module users.  Those processors are [**frozen**][freeze] and they should be
invoked to create a new processor before they are used.

###### Node

The syntax trees used in **unified** are [**Unist**][unist] nodes: plain
JavaScript objects with a `type` property.  The semantics of those `type`s are
defined by other projects.

There are several [utilities][unist-utilities] for working with these nodes.

###### List of Processors

The following projects process different syntax trees.  They parse text to
their respective syntax tree and they compile their syntax trees back to text.
These processors can be used as-is, or their parsers and compilers can be mixed
and matched with **unified** and other plugins to process between different
syntaxes.

*   [**rehype**][rehype] ([**hast**][hast]) — HTML
*   [**remark**][remark] ([**mdast**][mdast]) — Markdown
*   [**retext**][retext] ([**nlcst**][nlcst]) — Natural language

###### List of Plugins

The below plugins work with **unified**, unrelated to what flavour the syntax
tree is in:

*   [`unified-diff`](https://github.com/unifiedjs/unified-diff)
    — Ignore messages for unchanged lines in Travis

See [**remark**][remark-plugins], [**rehype**][rehype-plugins], and
[**retext**][retext-plugins] for lists of their plugins.

###### File

When processing documents metadata is often gathered about that document.
[**VFile**][vfile] is a virtual file format which stores data and handles
metadata and messages for **unified** and its plugins.

There are several [utilities][vfile-utilities] for working with these files.

###### Configuration

To configure a processor invoke its [`use`][use] method, supply it a
[**plugin**][plugin], and optionally settings.

###### Integrations

**unified** can integrate with the file-system through
[`unified-engine`][engine].  On top of that, CLI apps can be created with
[`unified-args`][args], Gulp plugins with [`unified-engine-gulp`][gulp], and
Atom Linters with [`unified-engine-atom`][atom].

A streaming interface is provided through [`unified-stream`][stream].

###### Programming interface

The API gives access to processing metadata (such as lint messages) and
supports multiple passed through files:

```js
var unified = require('unified')
var markdown = require('remark-parse')
var styleGuide = require('remark-preset-lint-markdown-style-guide')
var remark2retext = require('remark-retext')
var english = require('retext-english')
var equality = require('retext-equality')
var remark2rehype = require('remark-rehype')
var html = require('rehype-stringify')
var report = require('vfile-reporter')

unified()
  .use(markdown)
  .use(styleGuide)
  .use(
    remark2retext,
    unified()
      .use(english)
      .use(equality)
  )
  .use(remark2rehype)
  .use(html)
  .process('*Emphasis* and _importance_, you guys!', function(err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })
```

Yields:

```txt
  1:16-1:28  warning  Emphasis should use `*` as a marker                                  emphasis-marker  remark-lint
  1:34-1:38  warning  `guys` may be insensitive, use `people`, `persons`, `folks` instead  gals-men         retext-equality

⚠ 2 warnings
<p><em>Emphasis</em> and <em>importance</em>, you guys!</p>
```

###### Processing between syntaxes

The processors can be combined in two modes.

**Bridge** mode transforms the syntax tree from one flavour (the origin) to
another (the destination).  Then, transformations are applied on that tree.
Finally, the origin processor continues transforming the original syntax tree.

**Mutate** mode also transforms the syntax tree from one flavour to another.
But then the origin processor continues transforming the destination syntax
tree.

In the previous example (“Programming interface”), `remark-retext` is used in
bridge mode: the origin syntax tree is kept after retext is done; whereas
`remark-rehype` is used in mutate mode: it sets a new syntax tree and discards
the original.

*   [`remark-retext`][remark-retext]
*   [`remark-rehype`][remark-rehype]
*   [`rehype-retext`][rehype-retext]
*   [`rehype-remark`][rehype-remark]

## API

### `processor()`

Object describing how to process text.

###### Returns

`Function` — New [**unfrozen**][freeze] processor which is configured to
function the same as its ancestor.  But when the descendant processor is
configured in the future it does not affect the ancestral processor.

###### Example

The following example shows how a new processor can be created (from the remark
processor) and linked to **stdin**(4) and **stdout**(4).

```js
var remark = require('remark')
var concat = require('concat-stream')

process.stdin.pipe(concat(onconcat))

function onconcat(buf) {
  var doc = remark()
    .processSync(buf)
    .toString()

  process.stdout.write(doc)
}
```

### `processor.use(plugin[, options])`

Configure the processor to use a [**plugin**][plugin] and optionally configure
that plugin with options.

###### Signatures

*   `processor.use(plugin[, options])`
*   `processor.use(preset)`
*   `processor.use(list)`

###### Parameters

*   `plugin` ([`Plugin`][plugin])
*   `options` (`*`, optional) — Configuration for `plugin`
*   `preset` (`Object`) — Object with an optional `plugins` (set to `list`),
    and/or an optional `settings` object
*   `list` (`Array`) — List of plugins, presets, and pairs (`plugin` and
    `options` in an array)

###### Returns

`processor` — The processor on which `use` is invoked.

###### Note

`use` cannot be called on [frozen][freeze] processors.  Invoke the processor
first to create a new unfrozen processor.

###### Example

There are many ways to pass plugins to `.use()`.  The below example gives an
overview.

```js
var unified = require('unified')

unified()
  // Plugin with options:
  .use(plugin, {})
  // Plugins:
  .use([plugin, pluginB])
  // Two plugins, the second with options:
  .use([plugin, [pluginB, {}]])
  // Preset with plugins and settings:
  .use({plugins: [plugin, [pluginB, {}]], settings: {position: false}})
  // Settings only:
  .use({settings: {position: false}})

function plugin() {}
function pluginB() {}
```

### `processor.parse(file|value)`

Parse text to a syntax tree.

###### Parameters

*   `file` ([`VFile`][file])
    — Or anything which can be given to `vfile()`

###### Returns

[`Node`][node] — Syntax tree representation of input.

###### Note

`parse` [freezes][freeze] the processor if not already frozen.

`parse` does not apply [transformers from the run phase][description] to the
[syntax tree][node].

###### Example

The below example shows how the `parse` function can be used to create a
[syntax tree][node] from a [file][].

```js
var unified = require('unified')
var markdown = require('remark-parse')

var tree = unified()
  .use(markdown)
  .parse('# Hello world!')

console.log(tree)
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'heading',
       depth: 1,
       children: [Array],
       position: [Position] } ],
  position:
   { start: { line: 1, column: 1, offset: 0 },
     end: { line: 1, column: 15, offset: 14 } } }
```

#### `processor.Parser`

Function handling the parsing of text to a syntax tree.  Used in the
[**parse**][parse] phase in the process and invoked with a `string` and
[`VFile`][file] representation of the document to parse.

`Parser` can be a normal function in which case it must return a
[`Node`][node]: the syntax tree representation of the given file.

`Parser` can also be a constructor function (a function with keys in its
`prototype`) in which case it’s invoked with `new`.  Instances must have a
`parse` method which is invoked without arguments and must return a
[`Node`][node].

### `processor.stringify(node[, file])`

Compile a syntax tree to text.

###### Parameters

*   `node` ([`Node`][node])
*   `file` ([`VFile`][file], optional);
    — Or anything which can be given to `vfile()`

###### Returns

`string` — String representation of the syntax tree file.

###### Note

`stringify` [freezes][freeze] the processor if not already frozen.

`stringify` does not apply [transformers from the run phase][description]
to the [syntax tree][node].

###### Example

The below example shows how the `stringify` function can be used to generate a
[file][] from a [syntax tree][node].

```js
var unified = require('unified')
var html = require('rehype-stringify')
var h = require('hastscript')

var tree = h('h1', 'Hello world!')

var doc = unified()
  .use(html)
  .stringify(tree)

console.log(doc)
```

Yields:

```html
<h1>Hello world!</h1>
```

#### `processor.Compiler`

Function handling the compilation of syntax tree to a text.  Used in the
[**stringify**][stringify] phase in the process and invoked with a
[`Node`][node] and [`VFile`][file] representation of the document to stringify.

`Compiler` can be a normal function in which case it must return a `string`:
the text representation of the given syntax tree.

`Compiler` can also be a constructor function (a function with keys in its
`prototype`) in which case it’s invoked with `new`.  Instances must have a
`compile` method which is invoked without arguments and must return a `string`.

### `processor.run(node[, file][, done])`

Transform a syntax tree by applying [**plugin**][plugin]s to it.

###### Parameters

*   `node` ([`Node`][node])
*   `file` ([`VFile`][file], optional)
    — Or anything which can be given to `vfile()`
*   `done` ([`Function`][run-done], optional)

###### Returns

[`Promise`][promise] if `done` is not given.  Rejected with an error, or
resolved with the resulting syntax tree.

###### Note

`run` [freezes][freeze] the processor if not already frozen.

#### `function done(err[, node, file])`

Invoked when transformation is complete.  Either invoked with an error or a
syntax tree and a file.

###### Parameters

*   `err` (`Error`) — Fatal error
*   `node` ([`Node`][node])
*   `file` ([`VFile`][file])

###### Example

The below example shows how the `run` function can be used to transform a
[syntax tree][node].

```js
var unified = require('unified')
var references = require('remark-reference-links')
var u = require('unist-builder')

var tree = u('root', [
  u('paragraph', [
    u('link', {href: 'https://example.com'}, [u('text', 'Example Domain')])
  ])
])

unified()
  .use(references)
  .run(tree, function(err, tree) {
    if (err) throw err
    console.log(tree)
  })
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'paragraph', children: [Array] },
     { type: 'definition',
       identifier: '1',
       title: undefined,
       url: undefined } ] }
```

### `processor.runSync(node[, file])`

Transform a syntax tree by applying [**plugin**][plugin]s to it.

If asynchronous [**plugin**][plugin]s are configured an error is thrown.

###### Parameters

*   `node` ([`Node`][node])
*   `file` ([`VFile`][file], optional)
    — Or anything which can be given to `vfile()`

###### Returns

[`Node`][node] — The given syntax tree.

###### Note

`runSync` [freezes][freeze] the processor if not already frozen.

### `processor.process(file|value[, done])`

Process the given representation of a file as configured on the processor.  The
process invokes `parse`, `run`, and `stringify` internally.

###### Parameters

*   `file` ([`VFile`][file])
*   `value` (`string`) — String representation of a file
*   `done` ([`Function`][process-done], optional)

###### Returns

[`Promise`][promise] if `done` is not given.  Rejected with an error or
resolved with the resulting file.

###### Note

`process` [freezes][freeze] the processor if not already frozen.

###### Example

The below example shows how the `process` function can be used to process a
[file][] whether plugins are asynchronous or not with Promises.

```js
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var doc = require('rehype-document')
var format = require('rehype-format')
var html = require('rehype-stringify')

unified()
  .use(markdown)
  .use(remark2rehype)
  .use(doc)
  .use(format)
  .use(html)
  .process('# Hello world!')
  .then(
    function(file) {
      console.log(String(file))
    },
    function(err) {
      console.error(String(err))
    }
  )
```

Yields:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

#### `function done(err, file)`

Invoked when the process is complete.  Invoked with a fatal error, if any, and
the [`VFile`][file].

###### Parameters

*   `err` (`Error`, optional) — Fatal error
*   `file` ([`VFile`][file])

###### Example

The below example shows how the `process` function can be used to process a
[file][] whether plugins are asynchronous or not with a callback.

```js
var unified = require('unified')
var parse = require('remark-parse')
var stringify = require('remark-stringify')
var github = require('remark-github')
var report = require('vfile-reporter')

unified()
  .use(parse)
  .use(github)
  .use(stringify)
  .process('@mention', function(err, file) {
    console.error(report(err || file))
    console.log(String(file))
  })
```

Yields:

```markdown
no issues found
[**@mention**](https://github.com/blog/821)
```

### `processor.processSync(file|value)`

Process the given representation of a file as configured on the processor.  The
process invokes `parse`, `run`, and `stringify` internally.

If asynchronous [**plugin**][plugin]s are configured an error is thrown.

###### Parameters

*   `file` ([`VFile`][file])
*   `value` (`string`) — String representation of a file

###### Returns

[`VFile`][file] — Virtual file with modified [`contents`][vfile-contents].

###### Note

`processSync` [freezes][freeze] the processor if not already frozen.

###### Example

The below example shows how the `processSync` function can be used to process a
[file][] if all plugins are known to be synchronous.

```js
var unified = require('unified')
var markdown = require('remark-parse')
var remark2rehype = require('remark-rehype')
var doc = require('rehype-document')
var format = require('rehype-format')
var html = require('rehype-stringify')

var processor = unified()
  .use(markdown)
  .use(remark2rehype)
  .use(doc)
  .use(format)
  .use(html)

console.log(processor.processSync('# Hello world!').toString())
```

Yields:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

### `processor.data([key[, value]])`

Get or set information in an in-memory key-value store accessible to all phases
of the process.  An example is a list of HTML elements which are self-closing,
which is needed when parsing, transforming, and compiling HTML.

###### Parameters

*   `key` (`string`, optional) — Identifier
*   `value` (`*`, optional) — Value to set.  Omit if getting `key`

###### Returns

*   `processor` — If setting, the processor on which `data` is invoked
*   `*` — If getting, the value at `key`
*   `object` - Without arguments, the key-value store

###### Note

Setting information with `data` cannot occur on [frozen][freeze] processors.
Invoke the processor first to create a new unfrozen processor.

###### Example

The following example show how to get and set information:

```js
var unified = require('unified')

var processor = unified()
  .data('alpha', 'bravo')
  .data('alpha') // => 'bravo'

processor.data() // {alpha: 'bravo'}
```

### `processor.freeze()`

Freeze a processor.  Frozen processors are meant to be extended and not to be
configured or processed directly.

Once a processor is frozen it cannot be unfrozen.  New processors functioning
just like it can be created by invoking the processor.

It’s possible to freeze processors explicitly, by calling `.freeze()`, but
[`.parse()`][parse], [`.run()`][run], [`.stringify()`][stringify], and
[`.process()`][process] call `.freeze()` to freeze a processor too.

###### Returns

`Processor` — The processor on which `freeze` is invoked.

###### Example

The following example, `index.js`, shows how [**rehype**][rehype] prevents
extensions to itself:

```js
var unified = require('unified')
var parse = require('rehype-parse')
var stringify = require('rehype-stringify')

module.exports = unified()
  .use(parse)
  .use(stringify)
  .freeze()
```

The below example, `a.js`, shows how that processor can be used and configured.

```js
var rehype = require('rehype')
var format = require('rehype-format')
// ...

rehype()
  .use(format)
  // ...
```

The below example, `b.js`, shows a similar looking example which operates on
the frozen [**rehype**][rehype] interface.  If this behaviour was allowed it
would result in unexpected behaviour so an error is thrown.  **This is
invalid**:

```js
var rehype = require('rehype')
var format = require('rehype-format')
// ...

rehype
  .use(format)
  // ...
```

Yields:

```txt
~/node_modules/unified/index.js:440
    throw new Error(
    ^

Error: Cannot invoke `use` on a frozen processor.
Create a new processor first, by invoking it: use `processor()` instead of `processor`.
    at assertUnfrozen (~/node_modules/unified/index.js:440:11)
    at Function.use (~/node_modules/unified/index.js:172:5)
    at Object.<anonymous> (~/b.js:6:4)
```

## `Plugin`

**unified** plugins change the way the applied-on processor works in the
following ways:

*   They modify the [**processor**][processor]: such as changing the parser,
    the compiler, or linking it to other processors
*   They transform [**syntax tree**][node] representation of files
*   They modify metadata of files

Plugins are a concept.  They materialise as [`attacher`][attacher]s.

###### Example

`move.js`:

```js
module.exports = move

function move(options) {
  var expected = (options || {}).extname

  if (!expected) {
    throw new Error('Missing `extname` in options')
  }

  return transformer

  function transformer(tree, file) {
    if (file.extname && file.extname !== expected) {
      file.extname = expected
    }
  }
}
```

`index.js`:

```js
var unified = require('unified')
var parse = require('remark-parse')
var remark2rehype = require('remark-rehype')
var stringify = require('rehype-stringify')
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var move = require('./move')

unified()
  .use(parse)
  .use(remark2rehype)
  .use(move, {extname: '.html'})
  .use(stringify)
  .process(vfile.readSync('index.md'), function(err, file) {
    console.error(report(err || file))
    if (file) {
      vfile.writeSync(file) // Written to `index.html`.
    }
  })
```

### `function attacher([options])`

An attacher is the thing passed to [`use`][use].  It configures the processor
and in turn can receive options.

Attachers can configure processors, such as by interacting with parsers and
compilers, linking them to other processors, or by specifying how the syntax
tree is handled.

###### Context

The context object is set to the invoked on [`processor`][processor].

###### Parameters

*   `options` (`*`, optional) — Configuration

###### Returns

[`transformer`][transformer] — Optional.

###### Note

Attachers are invoked when the processor is [frozen][freeze]: either when
`.freeze()` is called explicitly, or when [`.parse()`][parse], [`.run()`][run],
[`.stringify()`][stringify], or [`.process()`][process] is called for the first
time.

### `function transformer(node, file[, next])`

Transformers modify the syntax tree or metadata of a file.  A transformer is a
function which is invoked each time a file is passed through the transform
phase.  If an error occurs (either because it’s thrown, returned, rejected, or
passed to [`next`][next]), the process stops.

The transformation process in **unified** is handled by [`trough`][trough], see
it’s documentation for the exact semantics of transformers.

###### Parameters

*   `node` ([`Node`][node])
*   `file` ([`VFile`][file])
*   `next` ([`Function`][next], optional)

###### Returns

*   `Error` — Can be returned to stop the process
*   [`Node`][node] — Can be returned and results in further transformations
    and `stringify`s to be performed on the new tree
*   `Promise` — If a promise is returned, the function is asynchronous, and
    **must** be resolved (optionally with a [`Node`][node]) or rejected
    (optionally with an `Error`)

#### `function next(err[, tree[, file]])`

If the signature of a transformer includes `next` (third argument), the
function **may** finish asynchronous, and **must** invoke `next()`.

###### Parameters

*   `err` (`Error`, optional) — Stop the process
*   `node` ([`Node`][node], optional) — New syntax tree
*   `file` ([`VFile`][file], optional) — New virtual file

## `Preset`

Presets provide a potentially sharable way to configure processors.  They can
contain multiple plugins and optionally settings as well.

###### Example

`preset.js`:

```js
exports.settings = {bullet: '*', fences: true}

exports.plugins = [
  require('remark-preset-lint-recommended'),
  require('remark-comment-config'),
  require('remark-preset-lint-markdown-style-guide'),
  [require('remark-toc'), {maxDepth: 3, tight: true}],
  require('remark-github')
]
```

`index.js`:

```js
var remark = require('remark')
var vfile = require('to-vfile')
var report = require('vfile-reporter')
var preset = require('./preset')

remark()
  .use(preset)
  .process(vfile.readSync('index.md'), function(err, file) {
    console.error(report(err || file))

    if (file) {
      vfile.writeSync(file)
    }
  })
```

## Contribute

**unified** is built by people just like you!
Check out [`contributing.md`][contributing] for ways to get started.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

Want to chat with the community and contributors?
Join us in [spectrum][chat]!

Have an idea for a cool new utility or tool?
That’s great!
If you want feedback, help, or just to share it with the world you can do so by
creating an issue in the [`unifiedjs/ideas`][ideas] repository!

## Acknowledgments

Preliminary work for unified was done [in 2014][preliminary] for
[**retext**][retext] and inspired by [`ware`][ware].  Further incubation
happened in [**remark**][remark].  The project was finally [externalised][]
in 2015 and [published][] as `unified`.  The project was authored by
[**@wooorm**](https://github.com/wooorm).

Although `unified` since moved it’s plugin architecture to [`trough`][trough],
thanks to [**@calvinfo**](https://github.com/calvinfo),
[**@ianstormtaylor**](https://github.com/ianstormtaylor), and others for their
work on [`ware`][ware], which was a huge initial inspiration.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[logo]: https://raw.githubusercontent.com/unifiedjs/unified/39917ea/logo.svg?sanitize=true

[build-badge]: https://img.shields.io/travis/unifiedjs/unified/master.svg

[build]: https://travis-ci.org/unifiedjs/unified

[coverage-badge]: https://img.shields.io/codecov/c/github/unifiedjs/unified.svg

[coverage]: https://codecov.io/github/unifiedjs/unified

[downloads-badge]: https://img.shields.io/npm/dm/unified.svg

[downloads]: https://www.npmjs.com/package/unified

[size-badge]: https://img.shields.io/bundlephobia/minzip/unified.svg

[size]: https://bundlephobia.com/result?p=unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[site]: https://unified.js.org

[medium]: https://medium.com/unifiedjs

[twitter]: https://twitter.com/unifiedjs

[collective]: https://opencollective.com/unified

[guides]: https://unified.js.org/#guides

[rehype]: https://github.com/rehypejs/rehype

[remark]: https://github.com/remarkjs/remark

[retext]: https://github.com/retextjs/retext

[hast]: https://github.com/syntax-tree/hast

[mdast]: https://github.com/syntax-tree/mdast

[nlcst]: https://github.com/syntax-tree/nlcst

[unist]: https://github.com/syntax-tree/unist

[engine]: https://github.com/unifiedjs/unified-engine

[args]: https://github.com/unifiedjs/unified-args

[gulp]: https://github.com/unifiedjs/unified-engine-gulp

[atom]: https://github.com/unifiedjs/unified-engine-atom

[remark-rehype]: https://github.com/remarkjs/remark-rehype

[remark-retext]: https://github.com/remarkjs/remark-retext

[rehype-retext]: https://github.com/rehypejs/rehype-retext

[rehype-remark]: https://github.com/rehypejs/rehype-remark

[unist-utilities]: https://github.com/syntax-tree/unist#list-of-utilities

[vfile]: https://github.com/vfile/vfile

[vfile-contents]: https://github.com/vfile/vfile#vfilecontents

[vfile-utilities]: https://github.com/vfile/vfile#related-tools

[description]: #description

[file]: #file

[node]: #node

[processor]: #processor

[process]: #processorprocessfilevalue-done

[parse]: #processorparsefilevalue

[parser]: #processorparser

[stringify]: #processorstringifynode-file

[run]: #processorrunnode-file-done

[compiler]: #processorcompiler

[use]: #processoruseplugin-options

[attacher]: #function-attacheroptions

[transformer]: #function-transformernode-file-next

[next]: #function-nexterr-tree-file

[freeze]: #processorfreeze

[plugin]: #plugin

[run-done]: #function-doneerr-node-file

[process-done]: #function-doneerr-file

[trough]: https://github.com/wooorm/trough#function-fninput-next

[promise]: https://developer.mozilla.org/Web/JavaScript/Reference/Global_Objects/Promise

[remark-plugins]: https://github.com/remarkjs/remark/blob/master/doc/plugins.md#list-of-plugins

[rehype-plugins]: https://github.com/rehypejs/rehype/blob/master/doc/plugins.md#list-of-plugins

[retext-plugins]: https://github.com/retextjs/retext/blob/master/doc/plugins.md#list-of-plugins

[stream]: https://github.com/unifiedjs/unified-stream

[contributing]: contributing.md

[coc]: code-of-conduct.md

[ideas]: https://github.com/unifiedjs/ideas

[preliminary]: https://github.com/retextjs/retext/commit/8fcb1f#diff-168726dbe96b3ce427e7fedce31bb0bc

[externalised]: https://github.com/remarkjs/remark/commit/9892ec#diff-168726dbe96b3ce427e7fedce31bb0bc

[published]: https://github.com/unifiedjs/unified/commit/2ba1cf

[ware]: https://github.com/segmentio/ware

[gatsby]: https://www.gatsbyjs.org

[mdx]: https://mdxjs.com

[jsx]: https://reactjs.org/docs/jsx-in-depth.html

[prettier]: https://prettier.io

[storybook]: https://storybook.js.org

[debugger.html]: https://github.com/devtools-html/debugger.html

[mozilla]: https://www.mozilla.org

[opensource.guide]: https://opensource.guide

[github]: https://github.com
