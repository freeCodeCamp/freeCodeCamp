# unist-util-find [![Travis](https://img.shields.io/travis/blahah/unist-util-find.svg)](https://travis-ci.org/blahah/unist-util-find)

[Unist](https://github.com/wooorm/unist) node finder utility. Useful for working with [remark](https://github.com/wooorm/remark), [rehype](https://github.com/wooorm/rehype) and [retext](https://github.com/wooorm/retext).

## Installation

```
npm install --save unist-util-find
```

## Usage

### Example

```js
var remark = require('remark')
var find = require('unist-util-find')

remark()
  .use(function () {
    return function (tree) {
      // string condition
      console.log(find(tree, 'value'))

      // object condition
      console.log(find(tree, { value: 'emphasis' }))

      // function condition
      console.log(find(tree, function (node) {
        return node.type === 'inlineCode'
      }))
    }
  })
  .processSync('Some _emphasis_, **strongness**, and `code`.')

```

Result:

```
// string condition: 'value'
{ type: 'text',
  value: 'Some ',
  position:
   Position {
     start: { line: 1, column: 1, offset: 0 },
     end: { line: 1, column: 6, offset: 5 },
     indent: [] } }

// object condition: { value: 'emphasis' }
{ type: 'text',
  value: 'emphasis',
  position:
   Position {
     start: { line: 1, column: 7, offset: 6 },
     end: { line: 1, column: 15, offset: 14 },
     indent: [] } }

// function condition: function (node) { return node.type === 'inlineCode' }
{ type: 'inlineCode',
  value: 'code',
  position:
   Position {
     start: { line: 1, column: 38, offset: 37 },
     end: { line: 1, column: 44, offset: 43 },
     indent: [] } }
```

### API

#### `find(node, condition)`

Return the first node that matches `condition`, or `undefined` if no node matches.

- `node` ([`Node`](https://github.com/wooorm/unist#node)) - Node to search
- `condition` (`string`, `object` or `function`) - Condition used to test each node. Behaviour depends on the type of the condition:
  - `string` finds first node with a truthy property matching `string`
  - `object` finds first node that has matching values for all properties of `object`
  - `function` finds first node for which `function` returns true when passed `node` as argument

## License

MIT
