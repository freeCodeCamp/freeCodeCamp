# postcss-selector-parser [![test](https://github.com/postcss/postcss-selector-parser/actions/workflows/test.yml/badge.svg)](https://github.com/postcss/postcss-selector-parser/actions/workflows/test.yml)

> Selector parser with built in methods for working with selector strings.

## Install

With [npm](https://npmjs.com/package/postcss-selector-parser) do:

```
npm install postcss-selector-parser
```

## Quick Start

```js
const parser = require('postcss-selector-parser');
const transform = selectors => {
    selectors.walk(selector => {
        // do something with the selector
        console.log(String(selector))
    });
};

const transformed = parser(transform).processSync('h1, h2, h3');
```

To normalize selector whitespace:

```js
const parser = require('postcss-selector-parser');
const normalized = parser().processSync('h1, h2, h3', {lossless: false});
// -> h1,h2,h3
```

Async support is provided through `parser.process` and will resolve a Promise
with the resulting selector string.

## API

Please see [API.md](API.md).

## Credits

* Huge thanks to Andrey Sitnik (@ai) for work on PostCSS which helped
  accelerate this module's development.

## License

MIT
