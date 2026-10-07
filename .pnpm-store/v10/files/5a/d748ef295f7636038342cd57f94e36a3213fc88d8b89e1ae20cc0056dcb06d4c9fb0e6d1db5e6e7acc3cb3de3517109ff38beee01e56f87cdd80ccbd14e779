# Promise Polyfill

Lightweight ES6 Promise polyfill for the browser and node. Adheres closely to
the spec. It is a perfect polyfill IE or any other browser that does
not support native promises.

For API information about Promises, please check out this article
[HTML5Rocks article](http://www.html5rocks.com/en/tutorials/es6/promises/).

It is extremely lightweight. **_< 1kb Gzipped_**

## Browser Support

IE8+, Chrome, Firefox, IOS 4+, Safari 5+, Opera

### NPM Use

```
npm install promise-polyfill --save-exact
```

### Bower Use

```
bower install promise-polyfill
```

### CDN Polyfill Use

This will set a global Promise object if the browser doesn't already have `window.Promise`.

```html
<script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js"></script>
```

## Downloads

* [Promise](https://raw.github.com/taylorhakes/promise-polyfill/master/dist/polyfill.js)
* [Promise-min](https://raw.github.com/taylorhakes/promise-polyfill/master/dist/polyfill.min.js)

## Simple use

If you would like to add a global Promise object (Node or Browser) if native Promise doesn't exist (polyfill Promise). Use the method below. This is useful if you are building a website and want to support older browsers.
Javascript library authors should _NOT_ use this method.

```js
import 'promise-polyfill/src/polyfill';
```

If you would like to not affect the global environment (sometimes known as a [ponyfill](https://github.com/sindresorhus/ponyfill), you can import the base module. This is nice for library authors or people working in environment where you don't want
to affect the global environment.

```js
import Promise from 'promise-polyfill';
```

If using `require` with Webpack 2+ (rare), you need to specify the default import

```js
var Promise = require('promise-polyfill').default;
```

then you can use like normal Promises

```js
var prom = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }  else {
    reject(new Error("It broke"));
  }
});

prom.then(function(result) {
  // Do something when async done
});
```

## Performance

By default promise-polyfill uses `setImmediate`, but falls back to `setTimeout`
for executing asynchronously. If a browser does not support `setImmediate`
(IE/Edge are the only browsers with setImmediate), you may see performance
issues. Use a `setImmediate` polyfill to fix this issue.
[setAsap](https://github.com/taylorhakes/setAsap) or
[setImmediate](https://github.com/YuzuJS/setImmediate) work well.

If you polyfill `window.setImmediate` or use `Promise._immediateFn = yourImmediateFn` it will be used instead of `window.setTimeout`

```
npm install setasap --save
```

```js
import Promise from 'promise-polyfill/src/polyfill';
import setAsap from 'setasap';
Promise._immediateFn = setAsap;
```

## Unhandled Rejections

promise-polyfill will warn you about possibly unhandled rejections. It will show
a console warning if a Promise is rejected, but no `.catch` is used. You can
change this behavior by doing.

-**NOTE: This only works on promise-polyfill Promises. Native Promises do not support this function**

```js
Promise._unhandledRejectionFn = <your reject error handler>;
```

If you would like to disable unhandled rejection messages. Use a noop like
below.

```js
Promise._unhandledRejectionFn = function(rejectError) {};
```

## Testing

```
npm install
npm test
```

## License

MIT
