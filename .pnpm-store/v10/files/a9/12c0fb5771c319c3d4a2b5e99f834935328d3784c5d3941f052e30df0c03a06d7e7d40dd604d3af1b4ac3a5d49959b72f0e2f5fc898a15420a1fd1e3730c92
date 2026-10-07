# camelcase

> Convert a dash/dot/underscore/space separated string to camelCase or PascalCase: `foo-bar` → `fooBar`

Correctly handles Unicode strings.

If you use this on untrusted user input, don't forget to limit the length to something reasonable.

## Install

```
$ npm install camelcase
```

*If you need to support Firefox < 78, stay on version 5 as version 6 uses regex features not available in Firefox < 78.*

## Usage

```js
const camelCase = require('camelcase');

camelCase('foo-bar');
//=> 'fooBar'

camelCase('foo_bar');
//=> 'fooBar'

camelCase('Foo-Bar');
//=> 'fooBar'

camelCase('розовый_пушистый_единорог');
//=> 'розовыйПушистыйЕдинорог'

camelCase('Foo-Bar', {pascalCase: true});
//=> 'FooBar'

camelCase('--foo.bar', {pascalCase: false});
//=> 'fooBar'

camelCase('Foo-BAR', {preserveConsecutiveUppercase: true});
//=> 'fooBAR'

camelCase('fooBAR', {pascalCase: true, preserveConsecutiveUppercase: true}));
//=> 'FooBAR'

camelCase('foo bar');
//=> 'fooBar'

console.log(process.argv[3]);
//=> '--foo-bar'
camelCase(process.argv[3]);
//=> 'fooBar'

camelCase(['foo', 'bar']);
//=> 'fooBar'

camelCase(['__foo__', '--bar'], {pascalCase: true});
//=> 'FooBar'

camelCase(['foo', 'BAR'], {pascalCase: true, preserveConsecutiveUppercase: true})
//=> 'FooBAR'

camelCase('lorem-ipsum', {locale: 'en-US'});
//=> 'loremIpsum'
```

## API

### camelCase(input, options?)

#### input

Type: `string | string[]`

String to convert to camel case.

#### options

Type: `object`

##### pascalCase

Type: `boolean`\
Default: `false`

Uppercase the first character: `foo-bar` → `FooBar`

##### preserveConsecutiveUppercase

Type: `boolean`\
Default: `false`

Preserve the consecutive uppercase characters: `foo-BAR` → `FooBAR`.

##### locale

Type: `false | string | string[]`\
Default: The host environment’s current locale.

The locale parameter indicates the locale to be used to convert to upper/lower case according to any locale-specific case mappings. If multiple locales are given in an array, the best available locale is used.

```js
const camelCase = require('camelcase');

camelCase('lorem-ipsum', {locale: 'en-US'});
//=> 'loremIpsum'

camelCase('lorem-ipsum', {locale: 'tr-TR'});
//=> 'loremİpsum'

camelCase('lorem-ipsum', {locale: ['en-US', 'en-GB']});
//=> 'loremIpsum'

camelCase('lorem-ipsum', {locale: ['tr', 'TR', 'tr-TR']});
//=> 'loremİpsum'
```

Setting `locale: false` ignores the platform locale and uses the [Unicode Default Case Conversion](https://unicode-org.github.io/icu/userguide/transforms/casemappings.html#simple-single-character-case-mapping) algorithm:

```js
const camelCase = require('camelcase');

// On a platform with 'tr-TR'

camelCase('lorem-ipsum');
//=> 'loremİpsum'

camelCase('lorem-ipsum', {locale: false});
//=> 'loremIpsum'
```

## camelcase for enterprise

Available as part of the Tidelift Subscription.

The maintainers of camelcase and thousands of other packages are working with Tidelift to deliver commercial support and maintenance for the open source dependencies you use to build your applications. Save time, reduce risk, and improve code health, while paying the maintainers of the exact dependencies you use. [Learn more.](https://tidelift.com/subscription/pkg/npm-camelcase?utm_source=npm-camelcase&utm_medium=referral&utm_campaign=enterprise&utm_term=repo)

## Related

- [decamelize](https://github.com/sindresorhus/decamelize) - The inverse of this module
- [uppercamelcase](https://github.com/SamVerschueren/uppercamelcase) - Like this module, but to PascalCase instead of camelCase
- [titleize](https://github.com/sindresorhus/titleize) - Capitalize every word in string
- [humanize-string](https://github.com/sindresorhus/humanize-string) - Convert a camelized/dasherized/underscored string into a humanized one
- [camelcase-keys](https://github.com/sindresorhus/camelcase-keys) - Convert object keys to camel case
