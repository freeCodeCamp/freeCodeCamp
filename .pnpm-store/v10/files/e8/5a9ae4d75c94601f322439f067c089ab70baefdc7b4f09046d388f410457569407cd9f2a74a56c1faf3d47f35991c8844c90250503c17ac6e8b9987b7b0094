# registry-url [![Build Status](https://travis-ci.org/sindresorhus/registry-url.svg?branch=master)](https://travis-ci.org/sindresorhus/registry-url)

> Get the set npm registry URL

It's usually `https://registry.npmjs.org/`, but [configurable](https://www.npmjs.org/doc/misc/npm-config.html#registry).

Use this if you do anything with the npm registry as users will expect it to use their configured registry.


## Install

```
$ npm install --save registry-url
```


## Usage

```ini
# .npmrc
registry = 'https://custom-registry.com/'
```

```js
const registryUrl = require('registry-url');

console.log(registryUrl());
//=> 'https://custom-registry.com/'
```

It can also retrieve the registry URL associated with an [npm scope](https://docs.npmjs.com/misc/scope).

```ini
# .npmrc
@myco:registry = 'https://custom-registry.com/'
```

```js
const registryUrl = require('registry-url');

console.log(registryUrl('@myco'));
//=> 'https://custom-registry.com/'
```

If the provided scope is not in the user's `.npmrc` file, then `registry-url` will check for the existence of `registry`, or if that's not set, fallback to the default npm registry.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
