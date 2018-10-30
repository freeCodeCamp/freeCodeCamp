# ES6-Promise (subset of [rsvp.js](https://github.com/tildeio/rsvp.js)) [![Build Status](https://travis-ci.org/stefanpenner/es6-promise.svg?branch=master)](https://travis-ci.org/stefanpenner/es6-promise)

This is a polyfill of the [ES6 Promise](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor). The implementation is a subset of [rsvp.js](https://github.com/tildeio/rsvp.js) extracted by @jakearchibald, if you're wanting extra features and more debugging options, check out the [full library](https://github.com/tildeio/rsvp.js).

For API details and how to use promises, see the <a href="http://www.html5rocks.com/en/tutorials/es6/promises/">JavaScript Promises HTML5Rocks article</a>.

## Downloads

* [es6-promise 27.86 KB (7.33 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.js)
* [es6-promise-auto 27.78 KB (7.3 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js) - Automatically provides/replaces `Promise` if missing or broken.
* [es6-promise-min 6.17 KB (2.4 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.min.js)
* [es6-promise-auto-min 6.19 KB (2.4 KB gzipped)](https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.min.js) - Minified version of `es6-promise-auto` above.

## CDN 

To use via a CDN include this in your html:

```html
<!-- Automatically provides/replaces `Promise` if missing or broken. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script> 

<!-- Minified version of `es6-promise-auto` below. -->
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.min.js"></script> 

```

## Node.js

To install:

```sh
yarn add es6-promise
```

or

```sh
npm install es6-promise
```

To use:

```js
var Promise = require('es6-promise').Promise;
```


## Usage in IE<9

`catch` and `finally` are reserved keywords in IE<9, meaning
`promise.catch(func)` or `promise.finally(func)` throw a syntax error. To work
around this, you can use a string to access the property as shown in the
following example.

However most minifiers will automatically fix this for you, making the
resulting code safe for old browsers and production:

```js
promise['catch'](function(err) {
  // ...
});
```

```js
promise['finally'](function() {
  // ...
});
```

## Auto-polyfill

To polyfill the global environment (either in Node or in the browser via CommonJS) use the following code snippet:

```js
require('es6-promise').polyfill();
```

Alternatively

```js
require('es6-promise/auto');
```

Notice that we don't assign the result of `polyfill()` to any variable. The `polyfill()` method will patch the global environment (in this case to the `Promise` name) when called.

## Building & Testing

You will need to have PhantomJS installed globally in order to run the tests.

`npm install -g phantomjs`

* `npm run build` to build
* `npm test` to run tests
* `npm start` to run a build watcher, and webserver to test
* `npm run test:server` for a testem test runner and watching builder
