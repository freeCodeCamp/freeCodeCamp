# strip-json-comments [![Build Status](https://travis-ci.com/sindresorhus/strip-json-comments.svg?branch=master)](https://travis-ci.com/github/sindresorhus/strip-json-comments)

> Strip comments from JSON. Lets you use comments in your JSON files!

This is now possible:

```js
{
	// Rainbows
	"unicorn": /* ❤ */ "cake"
}
```

It will replace single-line comments `//` and multi-line comments `/**/` with whitespace. This allows JSON error positions to remain as close as possible to the original source.

Also available as a [Gulp](https://github.com/sindresorhus/gulp-strip-json-comments)/[Grunt](https://github.com/sindresorhus/grunt-strip-json-comments)/[Broccoli](https://github.com/sindresorhus/broccoli-strip-json-comments) plugin.

## Install

```
$ npm install strip-json-comments
```

## Usage

```js
const json = `{
	// Rainbows
	"unicorn": /* ❤ */ "cake"
}`;

JSON.parse(stripJsonComments(json));
//=> {unicorn: 'cake'}
```

## API

### stripJsonComments(jsonString, options?)

#### jsonString

Type: `string`

Accepts a string with JSON and returns a string without comments.

#### options

Type: `object`

##### whitespace

Type: `boolean`\
Default: `true`

Replace comments with whitespace instead of stripping them entirely.

## Benchmark

```
$ npm run bench
```

## Related

- [strip-json-comments-cli](https://github.com/sindresorhus/strip-json-comments-cli) - CLI for this module
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Strip comments from CSS

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-strip-json-comments?utm_source=npm-strip-json-comments&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
