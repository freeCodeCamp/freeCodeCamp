# throat

Throttle the parallelism of an asynchronous, promise returning, function / functions.  This has special utility when you set the concurrency to `1`.  That way you get a mutually exclusive lock.

[![Build Status](https://img.shields.io/travis/ForbesLindesay/throat/master.svg)](https://travis-ci.org/ForbesLindesay/throat)
[![Coverage Status](https://img.shields.io/coveralls/ForbesLindesay/throat/master.svg?style=flat)](https://coveralls.io/r/ForbesLindesay/throat?branch=master)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/throat.svg)](https://david-dm.org/ForbesLindesay/throat)
[![NPM version](https://img.shields.io/npm/v/throat.svg)](https://www.npmjs.com/package/throat)
[![Greenkeeper badge](https://badges.greenkeeper.io/ForbesLindesay/throat.svg)](https://greenkeeper.io/)

[![Sauce Test Status](https://saucelabs.com/browser-matrix/throat.svg)](https://saucelabs.com/u/throat)

## Installation

    npm install throat

## API

### throat(concurrency)

This returns a function that acts a bit like a lock (exactly as a lock if concurrency is 1).

Example, only 2 of the following functions will execute at any one time:

```js
const throat = require('throat')(2);
// alternatively provide your own promise implementation
const throat = require('throat')(require('promise'))(2);
const promise = Promise.resolve();

const resA = throat(() => /* async stuff... */ promise);
const resB = throat(() => /* async stuff... */ promise);
const resC = throat(() => /* async stuff... */ promise);
const resD = throat(() => /* async stuff... */ promise);
const resE = throat(() => /* async stuff... */ promise);
```

### throat(concurrency, worker)

This returns a function that is an exact copy of `worker` except that it will only execute up to `concurrency` times in parallel before further requests are queued:

```js
const throat = require('throat');
// alternatively provide your own promise implementation
const throat = require('throat')(require('promise'));

const input = ['fileA.txt', 'fileB.txt', 'fileC.txt', 'fileD.txt'];
const data = Promise.all(input.map(throat(2, fileName => readFile(fileName))));
```

Only 2 files will be read at a time, sometimes limiting parallelism in this way can improve scalability.

## License

  MIT
