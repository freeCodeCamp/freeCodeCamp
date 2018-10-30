# RSVP.js  [![Build Status](https://secure.travis-ci.org/tildeio/rsvp.js.svg?branch=master)](http://travis-ci.org/tildeio/rsvp.js) [![Inline docs](http://inch-ci.org/github/tildeio/rsvp.js.svg?branch=master)](http://inch-ci.org/github/tildeio/rsvp.js)

RSVP.js provides simple tools for organizing asynchronous code.

Specifically, it is a tiny implementation of Promises/A+.

It works in node and the browser (IE6+, all the popular evergreen ones).

## downloads

- [rsvp-latest](http://rsvpjs-builds.s3.amazonaws.com/rsvp-latest.js)
- [rsvp-latest (minified)](http://rsvpjs-builds.s3.amazonaws.com/rsvp-latest.min.js)

## Promises

Although RSVP is ES6 compliant, it does bring along some extra toys. If you would prefer a strict ES6 subset, I would suggest checking out our sibling project https://github.com/stefanpenner/es6-promise, It is RSVP but stripped down to the ES6 spec features.

## Bower

`bower install -S rsvp`

## NPM

`npm install --save rsvp`

`RSVP.Promise` is an implementation of
[Promises/A+](http://promises-aplus.github.com/promises-spec/) that passes the
[test suite](https://github.com/promises-aplus/promises-tests).

It delivers all promises asynchronously, even if the value is already
available, to help you write consistent code that doesn't change if the
underlying data provider changes from synchronous to asynchronous.

It is compatible with [TaskJS](http://taskjs.org/), a library by Dave
Herman of Mozilla that uses ES6 generators to allow you to write
synchronous code with promises. It currently works in Firefox, and will
work in any browser that adds support for ES6 generators. See the
section below on TaskJS for more information.

### Basic Usage

```javascript
var RSVP = require('rsvp');

var promise = new RSVP.Promise(function(resolve, reject) {
  // succeed
  resolve(value);
  // or reject
  reject(error);
});

promise.then(function(value) {
  // success
}).catch(function(error) {
  // failure
});
```

Once a promise has been resolved or rejected, it cannot be resolved or
rejected again.

Here is an example of a simple XHR2 wrapper written using RSVP.js:

```javascript
var getJSON = function(url) {
  var promise = new RSVP.Promise(function(resolve, reject){
    var client = new XMLHttpRequest();
    client.open("GET", url);
    client.onreadystatechange = handler;
    client.responseType = "json";
    client.setRequestHeader("Accept", "application/json");
    client.send();

    function handler() {
      if (this.readyState === this.DONE) {
        if (this.status === 200) { resolve(this.response); }
        else { reject(this); }
      }
    };
  });

  return promise;
};

getJSON("/posts.json").then(function(json) {
  // continue
}).catch(function(error) {
  // handle errors
});
```

### Chaining

One of the really awesome features of Promises/A+ promises are that they
can be chained together. In other words, the return value of the first
resolve handler will be passed to the second resolve handler.

If you return a regular value, it will be passed, as is, to the next
handler.

```javascript
getJSON("/posts.json").then(function(json) {
  return json.post;
}).then(function(post) {
  // proceed
});
```

The really awesome part comes when you return a promise from the first
handler:

```javascript
getJSON("/post/1.json").then(function(post) {
  // save off post
  return getJSON(post.commentURL);
}).then(function(comments) {
  // proceed with access to post and comments
});
```

This allows you to flatten out nested callbacks, and is the main feature
of promises that prevents "rightward drift" in programs with a lot of
asynchronous code.

Errors also propagate:

```javascript
getJSON("/posts.json").then(function(posts) {

}).catch(function(error) {
  // since no rejection handler was passed to the
  // first `.then`, the error propagates.
});
```

You can use this to emulate `try/catch` logic in synchronous code.
Simply chain as many resolve callbacks as a you want, and add a failure
handler at the end to catch errors.

```javascript
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // proceed with access to posts and comments
}).catch(function(error) {
  // handle errors in either of the two requests
});
```

## Error Handling

There are times when dealing with promises that it seems like any errors
are being 'swallowed', and not properly raised. This makes it extremely
difficult to track down where a given issue is coming from. Thankfully,
`RSVP` has a solution for this problem built in.

You can register functions to be called when an uncaught error occurs
within your promises. These callback functions can be anything, but a common
practice is to call `console.assert` to dump the error to the console.

```javascript
RSVP.on('error', function(reason) {
  console.assert(false, reason);
});
```

`RSVP` allows Promises to be labeled: `Promise.resolve(value, 'I AM A LABEL')`
If provided, this label is passed as the second argument to `RSVP.on('error')`

```javascript
RSVP.on('error', function(reason, label) {
  if (label) {
    console.error(label);
  }

  console.assert(false, reason);
});
```


**NOTE:** promises do allow for errors to be handled asynchronously, so
this callback may result in false positives.

## Finally

`finally` will be invoked regardless of the promise's fate, just as native
try/catch/finally behaves.

```js
findAuthor().catch(function(reason){
  return findOtherAuthor();
}).finally(function(){
  // author was either found, or not
});
```


## Arrays of promises

Sometimes you might want to work with many promises at once. If you
pass an array of promises to the `all()` method it will return a new
promise that will be fulfilled when all of the promises in the array
have been fulfilled; or rejected immediately if any promise in the array
is rejected.

```javascript
var promises = [2, 3, 5, 7, 11, 13].map(function(id){
  return getJSON("/post/" + id + ".json");
});

RSVP.all(promises).then(function(posts) {
  // posts contains an array of results for the given promises
}).catch(function(reason){
  // if any of the promises fails.
});
```

## Hash of promises

If you need to reference many promises at once (like `all()`), but would like
to avoid encoding the actual promise order you can use `hash()`. If you pass
an object literal (where the values are promises) to the `hash()` method it will
return a new promise that will be fulfilled when all of the promises have been
fulfilled; or rejected immediately if any promise is rejected.

The key difference to the `all()` function is that both the fulfillment value
and the argument to the `hash()` function are object literals. This allows
you to simply reference the results directly off the returned object without
having to remember the initial order like you would with `all()`.

```javascript
var promises = {
  posts: getJSON("/posts.json"),
  users: getJSON("/users.json")
};

RSVP.hash(promises).then(function(results) {
  console.log(results.users) // print the users.json results
  console.log(results.posts) // print the posts.json results
});
```

## All settled and hash settled

Sometimes you want to work with several promises at once, but instead of
rejecting immediately if any promise is rejected, as with `all()` or `hash()`,
you want to be able to inspect the results of all your promises, whether
they fulfill or reject. For this purpose, you can use `allSettled()` and
`hashSettled()`. These work exactly like `all()` and `hash()`, except that
they fulfill with an array or hash (respectively) of the constituent promises'
result states. Each state object will either indicate fulfillment or
rejection, and provide the corresponding value or reason. The states will take
one of the following formats:

```javascript
{ state: 'fulfilled', value: value }
  or
{ state: 'rejected', reason: reason }
```

## Deferred

> The `RSVP.Promise` constructor is generally a better, less error-prone choice
> than `RSVP.defer()`. Promises are recommended unless the specific
> properties of deferred are needed.

Sometimes one needs to create a deferred object, without immediately specifying
how it will be resolved. These deferred objects are essentially a wrapper around
a promise, whilst providing late access to the `resolve()` and `reject()` methods.

A deferred object has this form: `{ promise, resolve(x), reject(r) }`.

```javascript
var deferred = RSVP.defer();
// ...
deferred.promise // access the promise
// ...
deferred.resolve();

```

## TaskJS

The [TaskJS](http://taskjs.org/) library makes it possible to take
promises-oriented code and make it synchronous using ES6 generators.

Let's review an earlier example:

```javascript
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // proceed with access to posts and comments
}).catch(function(reason) {
  // handle errors in either of the two requests
});
```

Without any changes to the implementation of `getJSON`, you could write
the following code with TaskJS:

```javascript
spawn(function *() {
  try {
    var post = yield getJSON("/post/1.json");
    var comments = yield getJSON(post.commentURL);
  } catch(error) {
    // handle errors
  }
});
```

In the above example, `function *` is new syntax in ES6 for
[generators](http://wiki.ecmascript.org/doku.php?id=harmony:generators).
Inside a generator, `yield` pauses the generator, returning control to
the function that invoked the generator. In this case, the invoker is a
special function that understands the semantics of Promises/A, and will
automatically resume the generator as soon as the promise is resolved.

The cool thing here is the same promises that work with current
JavaScript using `.then` will work seamlessly with TaskJS once a browser
has implemented it!

## Instrumentation

```js
function listener (event) {
  event.guid      // guid of promise. Must be globally unique, not just within the implementation
  event.childGuid // child of child promise (for chained via `then`)
  event.eventName // one of ['created', 'chained', 'fulfilled', 'rejected']
  event.detail    // fulfillment value or rejection reason, if applicable
  event.label     // label passed to promise's constructor
  event.timeStamp // milliseconds elapsed since 1 January 1970 00:00:00 UTC up until now
  event.stack     // stack at the time of the event. (if  'instrument-with-stack' is true)
}

RSVP.configure('instrument', true | false);
// capturing the stacks is slow, so you also have to opt in
RSVP.configure('instrument-with-stack', true | false);

// events
RSVP.on('created', listener);
RSVP.on('chained', listener);
RSVP.on('fulfilled', listener);
RSVP.on('rejected', listener);
```

Events are only triggered when `RSVP.configure('instrument')` is true, although
listeners can be registered at any time.

## Building & Testing

Custom tasks:

* `npm test` - build & test
* `npm test:node` - build & test just node
* `npm test:server` - build/watch & test
* `npm run build` - Build
* `npm run build:production` - Build production (with minified output)
* `npm start` - build, watch and run interactive server at http://localhost:4200'

## Releasing

Check what release-it will do by running `npm run-script dry-run-release`.
To actually release, run `node_modules/.bin/release-it`.
