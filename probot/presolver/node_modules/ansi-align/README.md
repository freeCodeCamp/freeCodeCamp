# ansi-align

> align-text with ANSI support for CLIs

[![Build Status](https://travis-ci.org/nexdrew/ansi-align.svg?branch=master)](https://travis-ci.org/nexdrew/ansi-align)
[![Coverage Status](https://coveralls.io/repos/github/nexdrew/ansi-align/badge.svg?branch=master)](https://coveralls.io/github/nexdrew/ansi-align?branch=master)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

Easily center- or right- align a block of text, carefully ignoring ANSI escape codes.

E.g. turn this:

<img width="281" alt="ansi text block no alignment :(" src="https://cloud.githubusercontent.com/assets/1929625/14937509/7c3076dc-0ed7-11e6-8c16-4f6a4ccc8346.png">

Into this:

<img width="278" alt="ansi text block center aligned!" src="https://cloud.githubusercontent.com/assets/1929625/14937510/7c3ca0b0-0ed7-11e6-8f0a-541ca39b6e0a.png">

## Install

```sh
npm install --save ansi-align
```

```js
var ansiAlign = require('ansi-align')
```

## API

### `ansiAlign(text, [opts])`

Align the given text per the line with the greatest [`string-width`](https://github.com/sindresorhus/string-width), returning a new string (or array).

#### Arguments

- `text`: required, string or array

    The text to align. If a string is given, it will be split using either the `opts.split` value or `'\n'` by default. If an array is given, a different array of modified strings will be returned.

- `opts`: optional, object

    Options to change behavior, see below.

#### Options

- `opts.align`: string, default `'center'`

   The alignment mode. Use `'center'` for center-alignment, `'right'` for right-alignment, or `'left'` for left-alignment. Note that the given `text` is assumed to be left-aligned already, so specifying `align: 'left'` just returns the `text` as is (no-op).

- `opts.split`: string or RegExp, default `'\n'`

    The separator to use when splitting the text. Only used if text is given as a string.

- `opts.pad`: string, default `' '`

    The value used to left-pad (prepend to) lines of lesser width. Will be repeated as necessary to adjust alignment to the line with the greatest width.

### `ansiAlign.center(text)`

Alias for `ansiAlign(text, { align: 'center' })`.

### `ansiAlign.right(text)`

Alias for `ansiAlign(text, { align: 'right' })`.

### `ansiAlign.left(text)`

Alias for `ansiAlign(text, { align: 'left' })`, which is a no-op.

## Similar Packages

- [`center-align`](https://github.com/jonschlinkert/center-align): Very close to this package, except it doesn't support ANSI codes.
- [`left-pad`](https://github.com/camwest/left-pad): Great for left-padding but does not support center alignment or ANSI codes.
- Pretty much anything by the [chalk](https://github.com/chalk) team

## License

ISC © Contributors
