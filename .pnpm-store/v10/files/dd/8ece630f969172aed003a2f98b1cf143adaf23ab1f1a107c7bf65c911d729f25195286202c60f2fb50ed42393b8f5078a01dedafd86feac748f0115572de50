# y18n

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![NPM version][npm-image]][npm-url]
[![js-standard-style][standard-image]][standard-url]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

The bare-bones internationalization library used by yargs.

Inspired by [i18n](https://www.npmjs.com/package/i18n).

## Examples

_simple string translation:_

```js
var __ = require('y18n').__

console.log(__('my awesome string %s', 'foo'))
```

output:

`my awesome string foo`

_using tagged template literals_

```js
var __ = require('y18n').__
var str = 'foo'

console.log(__`my awesome string ${str}`)
```

output:

`my awesome string foo`

_pluralization support:_

```js
var __n = require('y18n').__n

console.log(__n('one fish %s', '%d fishes %s', 2, 'foo'))
```

output:

`2 fishes foo`

## JSON Language Files

The JSON language files should be stored in a `./locales` folder.
File names correspond to locales, e.g., `en.json`, `pirate.json`.

When strings are observed for the first time they will be
added to the JSON file corresponding to the current locale.

## Methods

### require('y18n')(config)

Create an instance of y18n with the config provided, options include:

* `directory`: the locale directory, default `./locales`.
* `updateFiles`: should newly observed strings be updated in file, default `true`.
* `locale`: what locale should be used.
* `fallbackToLanguage`: should fallback to a language-only file (e.g. `en.json`)
  be allowed if a file matching the locale does not exist (e.g. `en_US.json`),
  default `true`.

### y18n.\_\_(str, arg, arg, arg)

Print a localized string, `%s` will be replaced with `arg`s.

This function can also be used as a tag for a template literal. You can use it
like this: <code>__&#96;hello ${'world'}&#96;</code>. This will be equivalent to
`__('hello %s', 'world')`.

### y18n.\_\_n(singularString, pluralString, count, arg, arg, arg)

Print a localized string with appropriate pluralization. If `%d` is provided
in the string, the `count` will replace this placeholder.

### y18n.setLocale(str)

Set the current locale being used.

### y18n.getLocale()

What locale is currently being used?

### y18n.updateLocale(obj)

Update the current locale with the key value pairs in `obj`.

## License

ISC

[travis-url]: https://travis-ci.org/yargs/y18n
[travis-image]: https://img.shields.io/travis/yargs/y18n.svg
[coveralls-url]: https://coveralls.io/github/yargs/y18n
[coveralls-image]: https://img.shields.io/coveralls/yargs/y18n.svg
[npm-url]: https://npmjs.org/package/y18n
[npm-image]: https://img.shields.io/npm/v/y18n.svg
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: https://github.com/feross/standard
