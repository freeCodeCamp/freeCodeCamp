# nice-try

[![Travis Build Status](https://travis-ci.org/electerious/nice-try.svg?branch=master)](https://travis-ci.org/electerious/nice-try) [![AppVeyor Status](https://ci.appveyor.com/api/projects/status/8tqb09wrwci3xf8l?svg=true)](https://ci.appveyor.com/project/electerious/nice-try) [![Coverage Status](https://coveralls.io/repos/github/electerious/nice-try/badge.svg?branch=master)](https://coveralls.io/github/electerious/nice-try?branch=master) [![Dependencies](https://david-dm.org/electerious/nice-try.svg)](https://david-dm.org/electerious/nice-try#info=dependencies) [![Greenkeeper badge](https://badges.greenkeeper.io/electerious/nice-try.svg)](https://greenkeeper.io/)

A function that tries to execute a function and discards any error that occurs.

## Install

```
npm install nice-try
```

## Usage

```js
const niceTry = require('nice-try')

niceTry(() => JSON.parse('true')) // true
niceTry(() => JSON.parse('truee')) // undefined
niceTry() // undefined
niceTry(true) // undefined
```

## API

### Parameters

- `fn` `{Function}` Function that might or might not throw an error.

### Returns

- `{?*}` Return-value of the function when no error occurred.