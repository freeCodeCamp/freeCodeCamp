# transliterate

> Convert Unicode characters to Latin characters using [transliteration](https://en.wikipedia.org/wiki/Transliteration)

Can be useful for [slugification](https://github.com/sindresorhus/slugify) purposes and other times you cannot use Unicode.

## Install

```
$ npm install @sindresorhus/transliterate
```

## Usage

```js
const transliterate = require('@sindresorhus/transliterate');

transliterate('Fußgängerübergänge');
//=> 'Fussgaengeruebergaenge'

transliterate('Я люблю единорогов');
//=> 'Ya lyublyu edinorogov'

transliterate('أنا أحب حيدات');
//=> 'ana ahb hydat'

transliterate('tôi yêu những chú kỳ lân');
//=> 'toi yeu nhung chu ky lan'
```

## API

### transliterate(string, options?)

#### string

Type: `string`

String to transliterate.

#### options

Type: `object`

##### customReplacements

Type: `Array<string[]>`\
Default: `[]`

Add your own custom replacements.

The replacements are run on the original string before any other transformations.

This only overrides a default replacement if you set an item with the same key.

```js
const transliterate = require('@sindresorhus/transliterate');

transliterate('Я люблю единорогов', {
	customReplacements: [
		['единорогов', '🦄']
	]
})
//=> 'Ya lyublyu 🦄'
```

## Supported languages

Most major languages are supported.

This includes special handling for:

- Arabic
- Armenian
- Czech
- Danish
- Dhivehi
- Georgian
- German (umlauts)
- Greek
- Hungarian
- Latin
- Latvian
- Lithuanian
- Macedonian
- Pashto
- Persian
- Polish
- Romanian
- Russian
- Serbian
- Slovak
- Swedish
- Turkish
- Ukrainian
- Urdu
- Vietnamese

However, Chinese is [currently not supported](https://github.com/sindresorhus/transliterate/issues/1).

## Related

- [slugify](https://github.com/sindresorhus/slugify) - Slugify a string
