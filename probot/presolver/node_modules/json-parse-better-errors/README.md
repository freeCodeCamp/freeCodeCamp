# json-parse-better-errors [![npm version](https://img.shields.io/npm/v/json-parse-better-errors.svg)](https://npm.im/json-parse-better-errors) [![license](https://img.shields.io/npm/l/json-parse-better-errors.svg)](https://npm.im/json-parse-better-errors) [![Travis](https://img.shields.io/travis/zkat/json-parse-better-errors.svg)](https://travis-ci.org/zkat/json-parse-better-errors) [![AppVeyor](https://ci.appveyor.com/api/projects/status/github/zkat/json-parse-better-errors?svg=true)](https://ci.appveyor.com/project/zkat/json-parse-better-errors) [![Coverage Status](https://coveralls.io/repos/github/zkat/json-parse-better-errors/badge.svg?branch=latest)](https://coveralls.io/github/zkat/json-parse-better-errors?branch=latest)

[`json-parse-better-errors`](https://github.com/zkat/json-parse-better-errors) is a Node.js library for
getting nicer errors out of `JSON.parse()`, including context and position of the parse errors.

## Install

`$ npm install --save json-parse-better-errors`

## Table of Contents

* [Example](#example)
* [Features](#features)
* [Contributing](#contributing)
* [API](#api)
  * [`parse`](#parse)

### Example

```javascript
const parseJson = require('json-parse-better-errors')

parseJson('"foo"')
parseJson('garbage') // more useful error message
```

### Features

* Like JSON.parse, but the errors are better.

### Contributing

The npm team enthusiastically welcomes contributions and project participation! There's a bunch of things you can do if you want to contribute! The [Contributor Guide](CONTRIBUTING.md) has all the information you need for everything from reporting bugs to contributing entire new features. Please don't hesitate to jump in if you'd like to, or even ask us questions if something isn't clear.

All participants and maintainers in this project are expected to follow [Code of Conduct](CODE_OF_CONDUCT.md), and just generally be excellent to each other.

Please refer to the [Changelog](CHANGELOG.md) for project history details, too.

Happy hacking!

### API

#### <a name="parse"></a> `> parse(txt, ?reviver, ?context=20)`

Works just like `JSON.parse`, but will include a bit more information when an
error happens.
