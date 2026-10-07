# inline-style-parser

[![NPM](https://nodei.co/npm/inline-style-parser.png)](https://nodei.co/npm/inline-style-parser/)

[![NPM version](https://img.shields.io/npm/v/inline-style-parser.svg)](https://www.npmjs.com/package/inline-style-parser)
[![Build Status](https://travis-ci.org/remarkablemark/inline-style-parser.svg?branch=master)](https://travis-ci.org/remarkablemark/inline-style-parser)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/inline-style-parser/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/inline-style-parser?branch=master)

An inline style parser copied from [`css/lib/parse/index.js`](https://github.com/reworkcss/css/blob/v2.2.4/lib/parse/index.js):

```
InlineStyleParser(string)
```

Example:

```js
var parse = require('inline-style-parser');
parse('color: #BADA55;');
```

Output:

```js
[ { type: 'declaration',
    property: 'color',
    value: '#BADA55',
    position: Position { start: [Object], end: [Object], source: undefined } } ]
```

[JSFiddle](https://jsfiddle.net/remarkablemark/hcxbpwq8/) | [Repl.it](https://repl.it/@remarkablemark/inline-style-parser)

See [usage](#usage) and [examples](https://github.com/remarkablemark/inline-style-parser/tree/master/examples).

## Installation

[NPM](https://www.npmjs.com/package/inline-style-parser):

```sh
$ npm install inline-style-parser --save
```

[Yarn](https://yarnpkg.com/package/inline-style-parser):

```sh
$ yarn add inline-style-parser
```

[CDN](https://unpkg.com/inline-style-parser/):

```html
<script src="https://unpkg.com/inline-style-parser@latest/dist/inline-style-parser.min.js"></script>
<script>
  window.InlineStyleParser(/* string */);
</script>
```

## Usage

Import the module:

```js
// CommonJS
const parse = require('inline-style-parser');

// ES Modules
import parse from 'inline-style-parser';
```

Parse single declaration:

```js
parse('left: 0');
```

Output:

```js
[
  {
    type: 'declaration',
    property: 'left',
    value: '0',
    position: {
      start: { line: 1, column: 1 },
      end: { line: 1, column: 8 },
      source: undefined
    }
  }
]
```

Parse multiple declarations:

```js
parse('left: 0; right: 100px;');
```

Output:

```js
[
  {
    type: 'declaration',
    property: 'left',
    value: '0',
    position: {
      start: { line: 1, column: 1 },
      end: { line: 1, column: 8 },
      source: undefined
    }
  },
  {
    type: 'declaration',
    property: 'right',
    value: '100px',
    position: {
      start: { line: 1, column: 10 },
      end: { line: 1, column: 22 },
      source: undefined
    }
  }
]
```

Parse declaration with missing value:

```js
parse('top:');
```

Output:

```js
[
  {
    type: 'declaration',
    property: 'top',
    value: '',
    position: {
      start: { line: 1, column: 1 },
      end: { line: 1, column: 5 },
      source: undefined
    }
  }
]
```

Parse unknown declaration:

```js
parse('answer: 42;');
```

Output:

```js
[
  {
    type: 'declaration',
    property: 'answer',
    value: '42',
    position: {
      start: { line: 1, column: 1 },
      end: { line: 1, column: 11 },
      source: undefined
    }
  }
]
```

Invalid declarations:

```js
parse('');      // []
parse();        // throws TypeError
parse(1);       // throws TypeError
parse('width'); // throws Error
parse('/*');    // throws Error
```

## Testing

Run tests:

```sh
$ npm test
```

Run tests in watch mode:

```sh
$ npm run test:watch
```

Run tests with coverage:

```sh
$ npm run test:coverage
```

Run tests in CI mode:

```sh
$ npm run test:ci
```

Lint files:

```sh
$ npm run lint
```

Fix lint errors:

```sh
$ npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
$ npm run release
$ git push --follow-tags && npm publish
```

## License

MIT. See [license](https://github.com/reworkcss/css/blob/v2.2.4/LICENSE) from original project.
