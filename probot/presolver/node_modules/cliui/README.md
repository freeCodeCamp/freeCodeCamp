# cliui

[![Build Status](https://travis-ci.org/bcoe/cliui.png)](https://travis-ci.org/bcoe/cliui)
[![Coverage Status](https://coveralls.io/repos/bcoe/cliui/badge.svg?branch=)](https://coveralls.io/r/bcoe/cliui?branch=)
[![NPM version](https://img.shields.io/npm/v/cliui.svg)](https://www.npmjs.com/package/cliui)

easily create complex multi-column command-line-interfaces.

## Example

```js
var ui = require('cliui')({
  width: 80
})

ui.div('Usage: $0 [command] [options]')

ui.div({
  text: 'Options:',
  padding: [2, 0, 2, 0]
})

ui.div(
  {
    text: "-f, --file",
    width: 40,
    padding: [0, 4, 0, 4]
  },
  {
    text: "the file to load",
    width: 25
  },
  {
    text: "[required]",
    align: 'right'
  }
)

console.log(ui.toString())
```

## Layout DSL

cliui exposes a simple layout DSL:

If you create a single `ui.row`, passing a string rather than an
object:

* `\n`: characters will be interpreted as new rows.
* `\t`: characters will be interpreted as new columns.
* ` `: characters will be interpreted as padding.

**as an example...**

```js
var ui = require('./')({
  width: 60
})

ui.div(
  'Usage: node ./bin/foo.js\n' +
  '  <regex>\t  provide a regex\n' +
  '  <glob>\t  provide a glob\t [required]'
)

console.log(ui.toString())
```

**will output:**

```shell
Usage: node ./bin/foo.js
  <regex>  provide a regex
  <glob>   provide a glob          [required]
```

## Methods

```js
cliui = require('cliui')
```

### cliui({width: integer})

Specify the maximum width of the UI being generated.

### cliui({wrap: boolean})

Enable or disable the wrapping of text in a column.

### cliui.div(column, column, column)

Create a row with any number of columns, a column
can either be a string, or an object with the following
options:

* **width:** the width of a column.
* **align:** alignment, `right` or `center`.
* **padding:** `[top, right, bottom, left]`.

### cliui.span(column, column, column)

Similar to `div`, except the next row will be appended without
a new line being created.
