<h1>
  <img src="https://raw.githubusercontent.com/vfile/vfile/7e1e6a6/logo.svg?sanitize=true" alt="vfile" width="400" />
</h1>

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

**vfile** is a small and browser friendly virtual file format that tracks
metadata (such as a file’s `path` and `contents`) and [messages][].

It was made specifically for **[unified][]** and generally for the common task
of parsing, transforming, and serializing data, where `vfile` handles everything
about the document being compiled.
This is useful for example when building linters, compilers, static site
generators, or other build tools.
**vfile** is part of the [unified collective][site].

*   for updates, see [Twitter][]
*   for more about us, see [`unifiedjs.com`][site]
*   for questions, see [Discussions][chat]
*   to help, see [contribute][] or [sponsor][] below

> **vfile** is different from the excellent [`vinyl`][vinyl] in that it has
> a smaller API, a smaller size, and focuses on [messages][].

## Contents

*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`VFile(options?)`](#vfileoptions)
    *   [`vfile.contents`](#vfilecontents)
    *   [`vfile.cwd`](#vfilecwd)
    *   [`vfile.path`](#vfilepath)
    *   [`vfile.basename`](#vfilebasename)
    *   [`vfile.stem`](#vfilestem)
    *   [`vfile.extname`](#vfileextname)
    *   [`vfile.dirname`](#vfiledirname)
    *   [`vfile.history`](#vfilehistory)
    *   [`vfile.messages`](#vfilemessages)
    *   [`vfile.data`](#vfiledata)
    *   [`VFile#toString(encoding?)`](#vfiletostringencoding)
    *   [`VFile#message(reason[, position][, origin])`](#vfilemessagereason-position-origin)
    *   [`VFile#info(reason[, position][, origin])`](#vfileinforeason-position-origin)
    *   [`VFile#fail(reason[, position][, origin])`](#vfilefailreason-position-origin)
*   [List of utilities](#list-of-utilities)
*   [Reporters](#reporters)
*   [Contribute](#contribute)
*   [Sponsor](#sponsor)
*   [Acknowledgments](#acknowledgments)
*   [License](#license)

## Install

[npm][]:

```sh
npm install vfile
```

## Use

```js
var vfile = require('vfile')

var file = vfile({path: '~/example.txt', contents: 'Alpha *braavo* charlie.'})

file.path // => '~/example.txt'
file.dirname // => '~'

file.extname = '.md'

file.basename // => 'example.md'

file.basename = 'index.text'

file.history // => ['~/example.txt', '~/example.md', '~/index.text']

file.message('`braavo` is misspelt; did you mean `bravo`?', {
  line: 1,
  column: 8
})

console.log(file.messages)
```

Yields:

```js
[ { [~/index.text:1:8: `braavo` is misspelt; did you mean `bravo`?]
    message: '`braavo` is misspelt; did you mean `bravo`?',
    name: '~/index.text:1:8',
    file: '~/index.text',
    reason: '`braavo` is misspelt; did you mean `bravo`?',
    line: 1,
    column: 8,
    location: { start: [Object], end: [Object] },
    ruleId: null,
    source: null,
    fatal: false } ]
```

## API

### `VFile(options?)`

Create a new virtual file.
If `options` is `string` or `Buffer`, treats it as `{contents: options}`.
If `options` is a `VFile`, returns it.
All other options are set on the newly created `vfile`.

Path related properties are set in the following order (least specific to most
specific): `history`, `path`, `basename`, `stem`, `extname`, `dirname`.

It’s not possible to set either `dirname` or `extname` without setting either
`history`, `path`, `basename`, or `stem` as well.

###### Example

```js
vfile()
vfile('console.log("alpha");')
vfile(Buffer.from('exit 1'))
vfile({path: path.join(__dirname, 'readme.md')})
vfile({stem: 'readme', extname: '.md', dirname: __dirname})
vfile({other: 'properties', are: 'copied', ov: {e: 'r'}})
```

### `vfile.contents`

`Buffer`, `string`, `null` — Raw value.

### `vfile.cwd`

`string` — Base of `path`.
Defaults to `process.cwd()`.

### `vfile.path`

`string?` — Path of `vfile`.
Cannot be nullified.

### `vfile.basename`

`string?` — Current name (including extension) of `vfile`.
Cannot contain path separators.
Cannot be nullified either (use `file.path = file.dirname` instead).

### `vfile.stem`

`string?` — Name (without extension) of `vfile`.
Cannot be nullified, and cannot contain path separators.

### `vfile.extname`

`string?` — Extension (with dot) of `vfile`.
Cannot be set if there’s no `path` yet and cannot contain path separators.

### `vfile.dirname`

`string?` — Path to parent directory of `vfile`.
Cannot be set if there’s no `path` yet.

### `vfile.history`

`Array.<string>` — List of file-paths the file moved between.

### `vfile.messages`

[`Array.<VMessage>`][message] — List of messages associated with the file.

### `vfile.data`

`Object` — Place to store custom information.
It’s OK to store custom data directly on the `vfile`, moving it to `data` gives
a *little* more privacy.

### `VFile#toString(encoding?)`

Convert contents of `vfile` to string.
When `contents` is a [`Buffer`][buffer], `encoding` is a
[character encoding][encoding] to understand `doc` as (`string`, default:
`'utf8'`).

### `VFile#message(reason[, position][, origin])`

Associates a message with the file, where `fatal` is set to `false`.
Constructs a new [`VMessage`][vmessage] and adds it to
[`vfile.messages`][messages].

##### Returns

[`VMessage`][vmessage].

### `VFile#info(reason[, position][, origin])`

Associates an informational message with the file, where `fatal` is set to
`null`.
Calls [`#message()`][message] internally.

##### Returns

[`VMessage`][vmessage].

### `VFile#fail(reason[, position][, origin])`

Associates a fatal message with the file, then immediately throws it.
Note: fatal errors mean a file is no longer processable.
Calls [`#message()`][message] internally.

##### Throws

[`VMessage`][vmessage].

<a name="utilities"></a>

## List of utilities

The following list of projects includes tools for working with virtual files.
See **[unist][]** for projects that work with nodes.

*   [`convert-vinyl-to-vfile`](https://github.com/dustinspecker/convert-vinyl-to-vfile)
    — transform from [Vinyl][] to vfile
*   [`to-vfile`](https://github.com/vfile/to-vfile)
    — create a vfile from a filepath
*   [`vfile-find-down`](https://github.com/vfile/vfile-find-down)
    — find files by searching the file system downwards
*   [`vfile-find-up`](https://github.com/vfile/vfile-find-up)
    — find files by searching the file system upwards
*   [`vfile-glob`](https://github.com/shinnn/vfile-glob)
    — find files by glob patterns
*   [`vfile-is`](https://github.com/vfile/vfile-is)
    — check if a vfile passes a test
*   [`vfile-location`](https://github.com/vfile/vfile-location)
    — convert between positional and offset locations
*   [`vfile-matter`](https://github.com/vfile/vfile-matter)
    — parse the YAML front matter
*   [`vfile-message`](https://github.com/vfile/vfile-message)
    — create a vfile message
*   [`vfile-messages-to-vscode-diagnostics`](https://github.com/shinnn/vfile-messages-to-vscode-diagnostics)
    — transform vfile messages to VS Code diagnostics
*   [`vfile-mkdirp`](https://github.com/vfile/vfile-mkdirp)
    — make sure the directory of a vfile exists on the file system
*   [`vfile-rename`](https://github.com/vfile/vfile-rename)
    — rename the path parts of a vfile
*   [`vfile-sort`](https://github.com/vfile/vfile-sort)
    — sort messages by line/column
*   [`vfile-statistics`](https://github.com/vfile/vfile-statistics)
    — count messages per category: failures, warnings, etc
*   [`vfile-to-eslint`](https://github.com/vfile/vfile-to-eslint)
    — convert to ESLint formatter compatible output

## Reporters

The following list of projects show linting results for given virtual files.
Reporters *must* accept `Array.<VFile>` as their first argument, and return
`string`.
Reporters *may* accept other values too, in which case it’s suggested to stick
to `vfile-reporter`s interface.

*   [`vfile-reporter`][reporter]
    — create a report
*   [`vfile-reporter-json`](https://github.com/vfile/vfile-reporter-json)
    — create a JSON report
*   [`vfile-reporter-folder-json`](https://github.com/vfile/vfile-reporter-folder-json)
    — create a JSON representation of vfiles
*   [`vfile-reporter-pretty`](https://github.com/vfile/vfile-reporter-pretty)
    — create a pretty report
*   [`vfile-reporter-junit`](https://github.com/kellyselden/vfile-reporter-junit)
    — create a jUnit report
*   [`vfile-reporter-position`](https://github.com/Hocdoc/vfile-reporter-position)
    — create a report with content excerpts

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.
Ideas for new utilities and tools can be posted in [`vfile/ideas`][ideas].

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
abide by its terms.

## Sponsor

Support this effort and give back by sponsoring on [OpenCollective][collective]!

<table>
<tr valign="middle">
<td width="20%" align="center" colspan="2">
  <a href="https://www.gatsbyjs.org">Gatsby</a> 🥇<br><br>
  <a href="https://www.gatsbyjs.org"><img src="https://avatars1.githubusercontent.com/u/12551863?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" colspan="2">
  <a href="https://vercel.com">Vercel</a> 🥇<br><br>
  <a href="https://vercel.com"><img src="https://avatars1.githubusercontent.com/u/14985020?s=256&v=4" width="128"></a>
</td>
<td width="20%" align="center" colspan="2">
  <a href="https://www.netlify.com">Netlify</a><br><br>
  <!--OC has a sharper image-->
  <a href="https://www.netlify.com"><img src="https://images.opencollective.com/netlify/4087de2/logo/256.png" width="128"></a>
</td>
<td width="10%" align="center">
  <a href="https://www.holloway.com">Holloway</a><br><br>
  <a href="https://www.holloway.com"><img src="https://avatars1.githubusercontent.com/u/35904294?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://themeisle.com">ThemeIsle</a><br><br>
  <a href="https://themeisle.com"><img src="https://avatars1.githubusercontent.com/u/58979018?s=128&v=4" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://boosthub.io">Boost Hub</a><br><br>
  <a href="https://boosthub.io"><img src="https://images.opencollective.com/boosthub/6318083/logo/128.png" width="64"></a>
</td>
<td width="10%" align="center">
  <a href="https://expo.io">Expo</a><br><br>
  <a href="https://expo.io"><img src="https://avatars1.githubusercontent.com/u/12504344?s=128&v=4" width="64"></a>
</td>
</tr>
<tr valign="middle">
<td width="100%" align="center" colspan="10">
  <br>
  <a href="https://opencollective.com/unified"><strong>You?</strong></a>
  <br><br>
</td>
</tr>
</table>

## Acknowledgments

The initial release of this project was authored by
[**@wooorm**](https://github.com/wooorm).

Thanks to [**@contra**](https://github.com/contra),
[**@phated**](https://github.com/phated), and others for their work on
[Vinyl][], which was a huge inspiration.

Thanks to
[**@brendo**](https://github.com/brendo),
[**@shinnn**](https://github.com/shinnn),
[**@KyleAMathews**](https://github.com/KyleAMathews),
[**@sindresorhus**](https://github.com/sindresorhus), and
[**@denysdovhan**](https://github.com/denysdovhan)
for contributing commits since!

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/vfile/vfile/workflows/main/badge.svg

[build]: https://github.com/vfile/vfile/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/vfile.svg

[coverage]: https://codecov.io/github/vfile/vfile

[downloads-badge]: https://img.shields.io/npm/dm/vfile.svg

[downloads]: https://www.npmjs.com/package/vfile

[size-badge]: https://img.shields.io/bundlephobia/minzip/vfile.svg

[size]: https://bundlephobia.com/result?p=vfile

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/vfile/vfile/discussions

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/vfile/.github/blob/HEAD/contributing.md

[support]: https://github.com/vfile/.github/blob/HEAD/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/HEAD/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[unified]: https://github.com/unifiedjs/unified

[vinyl]: https://github.com/gulpjs/vinyl

[site]: https://unifiedjs.com

[twitter]: https://twitter.com/unifiedjs

[contribute]: #contribute

[sponsor]: #sponsor

[unist]: https://github.com/syntax-tree/unist#list-of-utilities

[reporter]: https://github.com/vfile/vfile-reporter

[vmessage]: https://github.com/vfile/vfile-message

[messages]: #vfilemessages

[message]: #vfilemessagereason-position-origin

[ideas]: https://github.com/vfile/ideas

[encoding]: https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings

[buffer]: https://nodejs.org/api/buffer.html
