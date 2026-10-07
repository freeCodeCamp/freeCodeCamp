# style-to-object

[![NPM](https://nodei.co/npm/style-to-object.png)](https://nodei.co/npm/style-to-object/)

[![NPM version](https://badgen.net/npm/v/style-to-object)](https://www.npmjs.com/package/style-to-object)
[![Bundlephobia minified + gzip](https://badgen.net/bundlephobia/minzip/style-to-object)](https://bundlephobia.com/package/style-to-object)
[![build](https://github.com/remarkablemark/style-to-object/actions/workflows/build.yml/badge.svg)](https://github.com/remarkablemark/style-to-object/actions/workflows/build.yml)
[![codecov](https://codecov.io/gh/remarkablemark/style-to-object/branch/master/graph/badge.svg?token=XWxph9dpa4)](https://codecov.io/gh/remarkablemark/style-to-object)
[![NPM downloads](https://badgen.net/npm/dm/style-to-object)](https://www.npmjs.com/package/style-to-object)

Parses inline style to object:

```js
var parse = require('style-to-object');
parse('color: #C0FFEE; background: #BADA55;');
```

Output:

```js
{ color: '#C0FFEE', background: '#BADA55' }
```

[JSFiddle](https://jsfiddle.net/remarkablemark/ykz2meot/) | [Replit](https://replit.com/@remarkablemark/style-to-object) | [Examples](https://github.com/remarkablemark/style-to-object/tree/master/examples)

## Installation

[NPM](https://www.npmjs.com/package/style-to-object):

```sh
npm install style-to-object --save
```

[Yarn](https://yarn.fyi/style-to-object):

```sh
yarn add style-to-object
```

[CDN](https://unpkg.com/style-to-object/):

```html
<script src="https://unpkg.com/style-to-object@latest/dist/style-to-object.min.js"></script>
<script>
  window.StyleToObject(/* string */);
</script>
```

## Usage

Import the module:

```js
// CommonJS
const parse = require('style-to-object');

// ES Modules
import parse from 'style-to-object';
```

Parse single declaration:

```js
parse('line-height: 42');
```

Output:

```js
{ 'line-height': '42' }
```

Parse multiple declarations:

```js
parse(`
  border-color: #ACE;
  z-index: 1337;
`);
```

Output:

```js
{ 'border-color': '#ACE', 'z-index': '1337' }
```

Parse unknown declarations:

```js
parse('answer: 42;');
```

Output:

```js
{ 'answer': '42' }
```

Invalid declarations/arguments:

<!-- prettier-ignore-start -->

```js
parse(`
  top: ;
  right: 1em;
`); // { right: '1em' }

parse();        // null
parse(null);    // null
parse(1);       // null
parse(true);    // null
parse('top:');  // null
parse(':12px'); // null
parse(':');     // null
parse(';');     // null

parse('top'); // throws Error
parse('/*');  // throws Error
```

<!-- prettier-ignore-end -->

### Iterator

If the 2nd argument is a function, then the parser will return `null`:

```js
parse('color: #f00', function() {}); // null
```

But the function will iterate through each declaration:

<!-- prettier-ignore-start -->

```js
parse('color: #f00', function(name, value, declaration) {
  console.log(name);        // 'color'
  console.log(value);       // '#f00'
  console.log(declaration); // { type: 'declaration', property: 'color', value: '#f00' }
});
```

<!-- prettier-ignore-end -->

This makes it easy to customize the output:

```js
const style = `
  color: red;
  background: blue;
`;
const output = [];

function iterator(name, value) {
  output.push([name, value]);
}

parse(style, iterator);
console.log(output); // [['color', 'red'], ['background', 'blue']]
```

## Testing

Run tests:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Run tests with coverage:

```sh
npm run test:coverage
```

Lint files:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint:fix
```

Test TypeScript declaration file for style and correctness:

```sh
npm run lint:dts
```

## Release

Release and publish are automated by [Release Please](https://github.com/googleapis/release-please).

## Special Thanks

- [inline-style-parser](https://github.com/remarkablemark/inline-style-parser)
- [Contributors](https://github.com/remarkablemark/style-to-object/graphs/contributors)

## License

[MIT](https://github.com/remarkablemark/style-to-object/blob/master/LICENSE)
