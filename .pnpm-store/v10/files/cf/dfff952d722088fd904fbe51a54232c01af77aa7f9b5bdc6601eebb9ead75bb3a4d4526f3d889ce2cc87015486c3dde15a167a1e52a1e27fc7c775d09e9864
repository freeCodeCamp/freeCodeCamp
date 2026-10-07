# get-caller-file

[![Build Status](https://travis-ci.org/stefanpenner/get-caller-file.svg?branch=master)](https://travis-ci.org/stefanpenner/get-caller-file)
[![Build status](https://ci.appveyor.com/api/projects/status/ol2q94g1932cy14a/branch/master?svg=true)](https://ci.appveyor.com/project/embercli/get-caller-file/branch/master)

This is a utility, which allows a function to figure out from which file it was invoked. It does so by inspecting v8's stack trace at the time it is invoked.

Inspired by http://stackoverflow.com/questions/13227489

*note: this relies on Node/V8 specific APIs, as such other runtimes may not work*

## Installation

```bash
yarn add get-caller-file
```

## Usage

Given:

```js
// ./foo.js
const getCallerFile = require('get-caller-file');

module.exports = function() {
  return getCallerFile(); // figures out who called it
};
```

```js
// index.js
const foo = require('./foo');

foo() // => /full/path/to/this/file/index.js
```


## Options:

* `getCallerFile(position = 2)`: where position is stack frame whos fileName we want.
