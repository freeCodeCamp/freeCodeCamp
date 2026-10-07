# to-vfile

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

Create a [`vfile`][vfile] from a file-path.
Optionally populates them from the file-system as well.
Can write virtual files to file-system too.

## Install

[npm][]:

```sh
npm install to-vfile
```

> **Note**: the file-system stuff is not available in the browser.

## Usage

```js
var vfile = require('to-vfile')

console.log(vfile('readme.md'))
console.log(vfile.readSync('.git/HEAD'))
console.log(vfile.readSync('.git/HEAD', 'utf8'))
```

Yields:

```js
VFile {
  data: {},
  messages: [],
  history: [ 'readme.md' ],
  cwd: '/Users/tilde/projects/oss/to-vfile' }
VFile {
  data: {},
  messages: [],
  history: [ '.git/HEAD' ],
  cwd: '/Users/tilde/projects/oss/to-vfile',
  contents: <Buffer 72 65 66 3a 20 72 65 66 73 2f 68 65 61 64 73 2f 6d 61 73 74 65 72 0a> }
VFile {
  data: {},
  messages: [],
  history: [ '.git/HEAD' ],
  cwd: '/Users/tilde/projects/oss/to-vfile',
  contents: 'ref: refs/heads/master\n' }
```

## API

### `toVFile(options)`

Create a virtual file.
Works like the [vfile][] constructor, except when `options` is `string` or
`Buffer`, in which case it’s treated as `{path: options}` instead of
`{contents: options}`.

### `toVFile.read(options[, encoding][, callback])`

Creates a virtual file from options (`toVFile(options)`), reads the file from
the file-system and populates `file.contents` with the result.
If `encoding` is specified, it’s passed to `fs.readFile`.
If `callback` is given, invokes it with either an error or the populated virtual
file.
If `callback` is not given, returns a [`Promise`][promise] that is rejected with
an error or resolved with the populated virtual file.

### `toVFile.readSync(options[, encoding])`

Like `toVFile.read` but synchronous.  Either throws an error or returns a
populated virtual file.

### `toVFile.write(options[, fsOptions][, callback])`

Creates a virtual file from `options` (`toVFile(options)`), writes the file to
the file-system.
`fsOptions` are passed to `fs.writeFile`.
If `callback` is given, invokes it with an error, if any.
If `callback` is not given, returns a [`Promise`][promise] that is rejected with
an error or resolved without any value.

### `toVFile.writeSync(options[, fsOptions])`

Like `toVFile.write` but synchronous.
Throws an error, if any.

## Contribute

See [`contributing.md`][contributing] in [`vfile/.github`][health] for ways to
get started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/vfile/to-vfile.svg

[build]: https://travis-ci.org/vfile/to-vfile

[coverage-badge]: https://img.shields.io/codecov/c/github/vfile/to-vfile.svg

[coverage]: https://codecov.io/github/vfile/to-vfile

[downloads-badge]: https://img.shields.io/npm/dm/to-vfile.svg

[downloads]: https://www.npmjs.com/package/to-vfile

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/vfile

[npm]: https://docs.npmjs.com/cli/install

[contributing]: https://github.com/vfile/.github/blob/master/contributing.md

[support]: https://github.com/vfile/.github/blob/master/support.md

[health]: https://github.com/vfile/.github

[coc]: https://github.com/vfile/.github/blob/master/code-of-conduct.md

[license]: license

[author]: https://wooorm.com

[vfile]: https://github.com/vfile/vfile

[promise]: https://developer.mozilla.org/Web/JavaScript/Reference/Global_Objects/Promise
