
# slugify

[![npm-version]][npm] [![coveralls-status]][coveralls]

```js
var slugify = require('slugify')

slugify('some string') // some-string

// if you prefer something other than '-' as separator
slugify('some string', '_')  // some_string
```

- Vanilla ES2015 JavaScript
    - If you need to use Slugify with older browsers, consider using [version 1.4.7](https://github.com/simov/slugify/releases/tag/v1.4.7)
- No dependencies
- Coerces foreign symbols to their English equivalent (check out the [charMap][charmap] for more details)
- Works in the browser (window.slugify) and AMD/CommonJS-flavored module loaders

## Options

```js
slugify('some string', {
  replacement: '-',  // replace spaces with replacement character, defaults to `-`
  remove: undefined, // remove characters that match regex, defaults to `undefined`
  lower: false,      // convert to lower case, defaults to `false`
  strict: false,     // strip special characters except replacement, defaults to `false`
  locale: 'vi',      // language code of the locale to use
  trim: true         // trim leading and trailing replacement chars, defaults to `true`
})
```

## Remove

For example, to remove `*+~.()'"!:@` from the result slug, you can use `slugify('..', {remove: /[*+~.()'"!:@]/g})`.

* If the value of `remove` is a regular expression, it should be a
  [character class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
  and only a character class. It should also use the
  [global flag](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global).
  (For example: `/[*+~.()'"!:@]/g`.) Otherwise, the `remove` option might not
  work as expected.
* If the value of `remove` is a string, it should be a single character.
  Otherwise, the `remove` option might not work as expected.

## Locales

The main `charmap.json` file contains all known characters and their transliteration. All new characters should be added there first. In case you stumble upon a character already set in `charmap.json`, but not transliterated correctly according to your language, then you have to add those characters in `locales.json` to override the already existing transliteration in `charmap.json`, but for your locale only.

You can get the correct language code of your language from [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

## Extend

Out of the box `slugify` comes with support for a handful of Unicode symbols. For example the `☢` (radioactive) symbol is not defined in the [`charMap`][charmap] and therefore it will be stripped by default:

```js
slugify('unicode ♥ is ☢') // unicode-love-is
```

However you can extend the supported symbols, or override the existing ones with your own:

```js
slugify.extend({'☢': 'radioactive'})
slugify('unicode ♥ is ☢') // unicode-love-is-radioactive
```

Keep in mind that the `extend` method extends/overrides the default `charMap` for the entire process. In case you need a fresh instance of the slugify's `charMap` object you have to clean up the module cache first:

```js
delete require.cache[require.resolve('slugify')]
var slugify = require('slugify')
```

## Contribute

1. Add chars to `charmap.json`
2. Run tests `npm test`
3. The tests will build the charmap in `index.js` and will sort the `charmap.json`
4. Commit **all** modified files

---

> Originally this was a vanilla javascript port of [node-slug][node-slug].<br>
> Note that the original [slug][slug] module has been ported to vanilla javascript too.


  [npm-version]: https://img.shields.io/npm/v/slugify.svg?style=flat-square (NPM Package Version)
  [coveralls-status]: https://img.shields.io/coveralls/simov/slugify.svg?style=flat-square (Test Coverage - Coveralls)

  [npm]: https://www.npmjs.com/package/slugify
  [coveralls]: https://coveralls.io/r/simov/slugify?branch=master

  [node-slug]: https://github.com/dodo/node-slug
  [slug]: https://www.npmjs.com/package/slug
  [unicode]: https://www.npmjs.com/package/unicode
  [index]: https://github.com/simov/slugify/blob/master/index.js
  [charmap]: https://github.com/simov/slugify/blob/master/config/charmap.json
