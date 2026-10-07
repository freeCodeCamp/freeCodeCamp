# lru-queue
## Size limited queue based on [LRU](http://en.wikipedia.org/wiki/Least_Recently_Used#LRU) algorithm

_Originally derived from [memoizee](https://github.com/medikoo/memoize) package._

It's low-level utility meant to be used internally within cache algorithms. It backs up [`max`](https://github.com/medikoo/memoize#limiting-cache-size) functionality in [memoizee](https://github.com/medikoo/memoize) project.

### Installation

	$ npm install lru-queue

To port it to Browser or any other (non CJS) environment, use your favorite CJS bundler. No favorite yet? Try: [Browserify](http://browserify.org/), [Webmake](https://github.com/medikoo/modules-webmake) or [Webpack](http://webpack.github.io/)

### Usage

Create queue, and provide a limit

```javascript
var lruQueue = require('lru-queue');
var queue = lruQueue(3); // limit size to 3
```

Each queue exposes three methods:

#### queue.hit(id)

Registers hit for given _id_ (must be plain string).

```javascript
queue.hit('raz'); // size: 1
```

If hit doesn't remove any old item from list it returns `undefined`, otherwise it returns removed _id_.


```javascript
queue.hit('dwa');    // undefined, size: 2
queue.hit('trzy');   // undefined, size: 3 (at max)
queue.hit('raz');    // undefined, size: 3 (at max)
queue.hit('dwa');    // undefined, size: 3 (at max)
queue.hit('cztery'); //  'trzy', size: 3 (at max)

```

#### queue.delete(id);

_id's_ can be cleared from queue externally

```javascript
queue.delete('raz'); // size: 2
queue.delete('cztery'); // size: 1
```

#### queue.clear();

Resets queue

```javascript
queue.clear(); // size: 0
```

### Tests [![Build Status](https://travis-ci.org/medikoo/lru-queue.png)](https://travis-ci.org/medikoo/lru-queue)

	$ npm test

