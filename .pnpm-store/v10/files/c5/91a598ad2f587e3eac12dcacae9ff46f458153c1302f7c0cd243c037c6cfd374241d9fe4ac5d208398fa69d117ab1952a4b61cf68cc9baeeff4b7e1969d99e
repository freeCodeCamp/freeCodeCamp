# dotenv-expand

<img src="https://raw.githubusercontent.com/motdotla/dotenv-expand/master/dotenv-expand.png" alt="dotenv-expand" align="right" />

Dotenv-expand adds variable expansion on top of 
[dotenv](http://github.com/motdotla/dotenv). If you find yourself needing to
expand environment variables already existing on your machine, then
dotenv-expand is your tool.

[![BuildStatus](https://img.shields.io/travis/motdotla/dotenv-expand/master.svg?style=flat-square)](https://travis-ci.org/motdotla/dotenv-expand)
[![NPM version](https://img.shields.io/npm/v/dotenv-expand.svg?style=flat-square)](https://www.npmjs.com/package/dotenv-expand)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

## Install

```bash
npm install dotenv --save
npm install dotenv-expand --save
```

## Usage

As early as possible in your application, require dotenv and dotenv-expand, and
wrap dotenv-expand around dotenv.

```js
var dotenv = require('dotenv')
var dotenvExpand = require('dotenv-expand')

var myEnv = dotenv.config()
dotenvExpand(myEnv)
```

See [test/.env](./test/.env) for examples of variable expansion in your `.env`
file. 

