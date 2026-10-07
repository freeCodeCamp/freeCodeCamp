# strip-json-comments [![Build Status](https://travis-ci.org/sindresorhus/strip-json-comments.svg?branch=master)](https://travis-ci.org/sindresorhus/strip-json-comments)

> Strip comments from JSON. Lets you use comments in your JSON files!

This is now possible:

```js
{
	// rainbows
	"unicorn": /* ❤ */ "cake"
}
```

It will replace single-line comments `//` and multi-line comments `/**/` with whitespace. This allows JSON error positions to remain as close as possible to the original source.

Also available as a [gulp](https://github.com/sindresorhus/gulp-strip-json-comments)/[grunt](https://github.com/sindresorhus/grunt-strip-json-comments)/[broccoli](https://github.com/sindresorhus/broccoli-strip-json-comments) plugin.


## Install

```
$ npm install --save strip-json-comments
```


## Usage

```js
const json = '{/*rainbows*/"unicorn":"cake"}';

JSON.parse(stripJsonComments(json));
//=> {unicorn: 'cake'}
```


## API

### stripJsonComments(input, [options])

#### input

Type: `string`

Accepts a string with JSON and returns a string without comments.

#### options

##### whitespace

Type: `boolean`  
Default: `true`

Replace comments with whitespace instead of stripping them entirely.


## Related

- [strip-json-comments-cli](https://github.com/sindresorhus/strip-json-comments-cli) - CLI for this module
- [strip-css-comments](https://github.com/sindresorhus/strip-css-comments) - Strip comments from CSS


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
