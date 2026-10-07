# postcss-value-parser

[![Travis CI](https://travis-ci.org/TrySound/postcss-value-parser.svg)](https://travis-ci.org/TrySound/postcss-value-parser)

Transforms CSS declaration values and at-rule parameters into a tree of nodes, and provides a simple traversal API.

## Usage

```js
var valueParser = require('postcss-value-parser');
var cssBackgroundValue = 'url(foo.png) no-repeat 40px 73%';
var parsedValue = valueParser(cssBackgroundValue);
// parsedValue exposes an API described below,
// e.g. parsedValue.walk(..), parsedValue.toString(), etc.
```

For example, parsing the value `rgba(233, 45, 66, .5)` will return the following:

```js
{
  nodes: [
    {
      type: 'function',
      value: 'rgba',
      before: '',
      after: '',
      nodes: [
        { type: 'word', value: '233' },
        { type: 'div', value: ',', before: '', after: ' ' },
        { type: 'word', value: '45' },
        { type: 'div', value: ',', before: '', after: ' ' },
        { type: 'word', value: '66' },
        { type: 'div', value: ',', before: ' ', after: '' },
        { type: 'word', value: '.5' }
      ]
    }
  ]
}
```

If you wanted to convert each `rgba()` value in `sourceCSS` to a hex value, you could do so like this:

```js
var valueParser = require('postcss-value-parser');

var parsed = valueParser(sourceCSS);

// walk() will visit all the of the nodes in the tree,
// invoking the callback for each.
parsed.walk(function (node) {

  // Since we only want to transform rgba() values,
  // we can ignore anything else.
  if (node.type !== 'function' && node.value !== 'rgba') return;

  // We can make an array of the rgba() arguments to feed to a
  // convertToHex() function
  var color = node.nodes.filter(function (node) {
    return node.type === 'word';
  }).map(function (node) {
    return Number(node.value);
  }); // [233, 45, 66, .5]

  // Now we will transform the existing rgba() function node
  // into a word node with the hex value
  node.type = 'word';
  node.value = convertToHex(color);
})

parsed.toString(); // #E92D42
```

## Nodes

Each node is an object with these common properties:

- **type**: The type of node (`word`, `string`, `div`, `space`, `comment`, or `function`).
  Each type is documented below.
- **value**: Each node has a `value` property; but what exactly `value` means
  is specific to the node type. Details are documented for each type below.
- **sourceIndex**: The starting index of the node within the original source
  string. For example, given the source string `10px 20px`, the `word` node
  whose value is `20px` will have a `sourceIndex` of `5`.

### word

The catch-all node type that includes keywords (e.g. `no-repeat`),
quantities (e.g. `20px`, `75%`, `1.5`), and hex colors (e.g. `#e6e6e6`).

Node-specific properties:

- **value**: The "word" itself.

### string

A quoted string value, e.g. `"something"` in `content: "something";`.

Node-specific properties:

- **value**: The text content of the string.
- **quote**: The quotation mark surrounding the string, either `"` or `'`.
- **unclosed**: `true` if the string was not closed properly. e.g. `"unclosed string  `.

### div

A divider, for example

- `,` in `animation-duration: 1s, 2s, 3s`
- `/` in `border-radius: 10px / 23px`
- `:` in `(min-width: 700px)`

Node-specific properties:

- **value**: The divider character. Either `,`, `/`, or `:` (see examples above).
- **before**: Whitespace before the divider.
- **after**: Whitespace after the divider.

### space

Whitespace used as a separator, e.g. ` ` occurring twice in `border: 1px solid black;`.

Node-specific properties:

- **value**: The whitespace itself.

### comment

A CSS comment starts with `/*` and ends with `*/`

Node-specific properties:

- **value**: The comment value without `/*` and `*/`
- **unclosed**: `true` if the comment was not closed properly. e.g. `/* comment without an end  `.

### function

A CSS function, e.g. `rgb(0,0,0)` or `url(foo.bar)`.

Function nodes have nodes nested within them: the function arguments.

Additional properties:

- **value**: The name of the function, e.g. `rgb` in `rgb(0,0,0)`.
- **before**: Whitespace after the opening parenthesis and before the first argument,
  e.g. `  ` in `rgb(  0,0,0)`.
- **after**: Whitespace before the closing parenthesis and after the last argument,
  e.g. `  ` in `rgb(0,0,0  )`.
- **nodes**: More nodes representing the arguments to the function.
- **unclosed**: `true` if the parentheses was not closed properly. e.g. `( unclosed-function  `.

Media features surrounded by parentheses are considered functions with an
empty value. For example, `(min-width: 700px)` parses to these nodes:

```js
[
  {
    type: 'function', value: '', before: '', after: '',
    nodes: [
      { type: 'word', value: 'min-width' },
      { type: 'div', value: ':', before: '', after: ' ' },
      { type: 'word', value: '700px' }
    ]
  }
]
```

`url()` functions can be parsed a little bit differently depending on
whether the first character in the argument is a quotation mark.

`url( /gfx/img/bg.jpg )` parses to:

```js
{ type: 'function', sourceIndex: 0, value: 'url', before: ' ', after: ' ', nodes: [
    { type: 'word', sourceIndex: 5, value: '/gfx/img/bg.jpg' }
] }
```

`url( "/gfx/img/bg.jpg" )`, on the other hand, parses to:

```js
{ type: 'function', sourceIndex: 0, value: 'url', before: ' ', after: ' ', nodes: [
     type: 'string', sourceIndex: 5, quote: '"', value: '/gfx/img/bg.jpg' },
] }
```

### unicode-range

The unicode-range CSS descriptor sets the specific range of characters to be 
used from a font defined by @font-face and made available 
for use on the current page (`unicode-range: U+0025-00FF`).

Node-specific properties:

- **value**: The "unicode-range" itself.

## API

```
var valueParser = require('postcss-value-parser');
```

### valueParser.unit(quantity)

Parses `quantity`, distinguishing the number from the unit. Returns an object like the following:

```js
// Given 2rem
{
  number: '2',
  unit: 'rem'
}
```

If the `quantity` argument cannot be parsed as a number, returns `false`.

*This function does not parse complete values*: you cannot pass it `1px solid black` and expect `px` as
the unit. Instead, you should pass it single quantities only. Parse `1px solid black`, then pass it
the stringified `1px` node (a `word` node) to parse the number and unit.

### valueParser.stringify(nodes[, custom])

Stringifies a node or array of nodes.

The `custom` function is called for each `node`; return a string to override the default behaviour.

### valueParser.walk(nodes, callback[, bubble])

Walks each provided node, recursively walking all descendent nodes within functions.

Returning `false` in the `callback` will prevent traversal of descendent nodes (within functions).
You can use this feature to for shallow iteration, walking over only the *immediate* children.
*Note: This only applies if `bubble` is `false` (which is the default).*

By default, the tree is walked from the outermost node inwards.
To reverse the direction, pass `true` for the `bubble` argument.

The `callback` is invoked with three arguments: `callback(node, index, nodes)`.

- `node`: The current node.
- `index`: The index of the current node.
- `nodes`: The complete nodes array passed to `walk()`.

Returns the `valueParser` instance.

### var parsed = valueParser(value)

Returns the parsed node tree.

### parsed.nodes

The array of nodes.

### parsed.toString()

Stringifies the node tree.

### parsed.walk(callback[, bubble])

Walks each node inside `parsed.nodes`. See the documentation for `valueParser.walk()` above.

# License

MIT © [Bogdan Chadkin](mailto:trysound@yandex.ru)
