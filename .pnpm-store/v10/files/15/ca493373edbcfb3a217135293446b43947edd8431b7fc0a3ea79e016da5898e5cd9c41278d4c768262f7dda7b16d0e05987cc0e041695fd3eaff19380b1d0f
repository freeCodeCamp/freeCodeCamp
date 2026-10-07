# json-parse-even-better-errors

[`json-parse-even-better-errors`](https://github.com/npm/json-parse-even-better-errors)
is a Node.js library for getting nicer errors out of `JSON.parse()`,
including context and position of the parse errors.

It also preserves the newline and indentation styles of the JSON data, by
putting them in the object or array in the `Symbol.for('indent')` and
`Symbol.for('newline')` properties.

## Install

`$ npm install --save json-parse-even-better-errors`

## Table of Contents

* [Example](#example)
* [Features](#features)
* [Contributing](#contributing)
* [API](#api)
  * [`parse`](#parse)

### Example

```javascript
const parseJson = require('json-parse-even-better-errors')

parseJson('"foo"') // returns the string 'foo'
parseJson('garbage') // more useful error message
parseJson.noExceptions('garbage') // returns undefined
```

### Features

* Like JSON.parse, but the errors are better.
* Strips a leading byte-order-mark that you sometimes get reading files.
* Has a `noExceptions` method that returns undefined rather than throwing.
* Attaches the newline character(s) used to the `Symbol.for('newline')`
  property on objects and arrays.
* Attaches the indentation character(s) used to the `Symbol.for('indent')`
  property on objects and arrays.

## Indentation

To preserve indentation when the file is saved back to disk, use
`data[Symbol.for('indent')]` as the third argument to `JSON.stringify`, and
if you want to preserve windows `\r\n` newlines, replace the `\n` chars in
the string with `data[Symbol.for('newline')]`.

For example:

```js
const txt = await readFile('./package.json', 'utf8')
const data = parseJsonEvenBetterErrors(txt)
const indent = Symbol.for('indent')
const newline = Symbol.for('newline')
// .. do some stuff to the data ..
const string = JSON.stringify(data, null, data[indent]) + '\n'
const eolFixed = data[newline] === '\n' ? string
  : string.replace(/\n/g, data[newline])
await writeFile('./package.json', eolFixed)
```

Indentation is determined by looking at the whitespace between the initial
`{` and `[` and the character that follows it.  If you have lots of weird
inconsistent indentation, then it won't track that or give you any way to
preserve it.  Whether this is a bug or a feature is debatable ;)

### API

#### <a name="parse"></a> `parse(txt, reviver = null, context = 20)`

Works just like `JSON.parse`, but will include a bit more information when
an error happens, and attaches a `Symbol.for('indent')` and
`Symbol.for('newline')` on objects and arrays.  This throws a
`JSONParseError`.

#### <a name="parse"></a> `parse.noExceptions(txt, reviver = null)`

Works just like `JSON.parse`, but will return `undefined` rather than
throwing an error.

#### <a name="jsonparseerror"></a> `class JSONParseError(er, text, context = 20, caller = null)`

Extends the JavaScript `SyntaxError` class to parse the message and provide
better metadata.

Pass in the error thrown by the built-in `JSON.parse`, and the text being
parsed, and it'll parse out the bits needed to be helpful.

`context` defaults to 20.

Set a `caller` function to trim internal implementation details out of the
stack trace.  When calling `parseJson`, this is set to the `parseJson`
function.  If not set, then the constructor defaults to itself, so the
stack trace will point to the spot where you call `new JSONParseError`.
