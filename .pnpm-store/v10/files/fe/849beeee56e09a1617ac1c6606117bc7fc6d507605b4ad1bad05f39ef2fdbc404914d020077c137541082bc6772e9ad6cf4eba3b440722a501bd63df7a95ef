# cliui

[![Build Status](https://travis-ci.org/yargs/cliui.svg)](https://travis-ci.org/yargs/cliui)
[![Coverage Status](https://coveralls.io/repos/yargs/cliui/badge.svg?branch=)](https://coveralls.io/r/yargs/cliui?branch=)
[![NPM version](https://img.shields.io/npm/v/cliui.svg)](https://www.npmjs.com/package/cliui)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)

easily create complex multi-column command-line-interfaces.

## Example

```js
var ui = require('cliui')()

ui.div('Usage: $0 [command] [options]')

ui.div({
  text: 'Options:',
  padding: [2, 0, 2, 0]
})

ui.div(
  {
    text: "-f, --file",
    width: 20,
    padding: [0, 4, 0, 4]
  },
  {
    text: "the file to load." +
      chalk.green("(if this description is long it wraps).")
    ,
    width: 20
  },
  {
    text: chalk.red("[required]"),
    align: 'right'
  }
)

console.log(ui.toString())
```

<img width="500" src="screenshot.png">

## Layout DSL

cliui exposes a simple layout DSL:

If you create a single `ui.div`, passing a string rather than an
object:

* `\n`: characters will be interpreted as new rows.
* `\t`: characters will be interpreted as new columns.
* `\s`: characters will be interpreted as padding.

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
If no width is provided, cliui will try to get the current window's width and use it, and if that doesn't work, width will be set to `80`.

### cliui({wrap: boolean})

Enable or disable the wrapping of text in a column.

### cliui.div(column, column, column)

Create a row with any number of columns, a column
can either be a string, or an object with the following
options:

* **text:** some text to place in the column.
* **width:** the width of a column.
* **align:** alignment, `right` or `center`.
* **padding:** `[top, right, bottom, left]`.
* **border:** should a border be placed around the div?

### cliui.span(column, column, column)

Similar to `div`, except the next row will be appended without
a new line being created.

### cliui.resetOutput()

Resets the UI elements of the current cliui instance, maintaining the values
set for `width` and `wrap`.
