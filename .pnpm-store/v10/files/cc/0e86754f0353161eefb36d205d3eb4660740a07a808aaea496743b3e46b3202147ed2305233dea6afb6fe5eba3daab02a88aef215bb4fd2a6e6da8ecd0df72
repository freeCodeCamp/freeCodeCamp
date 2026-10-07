# cli-width

Get stdout window width, with four fallbacks, `tty`, `output.columns`, a custom environment variable and then a default.

[![npm version](https://badge.fury.io/js/cli-width.svg)](http://badge.fury.io/js/cli-width)
[![Build Status](https://travis-ci.org/knownasilya/cli-width.svg)](https://travis-ci.org/knownasilya/cli-width)
[![Coverage Status](https://coveralls.io/repos/knownasilya/cli-width/badge.svg?branch=master&service=github)](https://coveralls.io/github/knownasilya/cli-width?branch=master)

Tested against NodeJS v10+

## Usage

```
npm install --save cli-width
```

```js
"use strict";

const cliWidth = require("cli-width");

cliWidth(); // maybe 204 :)
```

You can also set the `CLI_WIDTH` environment variable.

If none of the methods are supported, and the environment variable isn't set,
the default width value is going to be `0`, that can be changed using the configurable `options`.

## API

### cliWidth([options])

`cliWidth` can be configured using an `options` parameter, the possible properties are:

- **defaultWidth**\<number\> Defines a default value to be used if none of the methods are available, defaults to `0`
- **output**\<object\> A stream to be used to read width values from, defaults to `process.stdout`
- **tty**\<object\> TTY module to try to read width from as a fallback, defaults to `require('tty')`

### Examples

Defining both a default width value and a stream output to try to read from:

```js
const cliWidth = require("cli-width");
const ttys = require("ttys");

cliWidth({
  defaultWidth: 80,
  output: ttys.output,
});
```

Defines a different tty module to read width from:

```js
const cliWidth = require("cli-width");
const ttys = require("ttys");

cliWidth({
  tty: ttys,
});
```

## Tests

```bash
npm install
npm test
```

Coverage can be generated with `npm run coverage`.
