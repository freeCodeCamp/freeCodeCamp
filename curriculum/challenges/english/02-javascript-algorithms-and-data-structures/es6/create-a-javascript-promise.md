---
id: 5cdafbb0291309899753167f
title: Create a JavaScript Promise
challengeType: 1
forumTopicId: 301197
dashedName: create-a-javascript-promise
---

# --description--

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. `Promise` is a constructor function, so you need to use the `new` keyword to create one. It takes a function, as its argument, with two parameters - `resolve` and `reject`. These are methods used to determine the outcome of the promise. The syntax looks like this:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

# --instructions--

Create a new promise called `makeServerRequest`. Pass in a function with `resolve` and `reject` parameters to the constructor.

# --hints--

You should assign a promise to a declared variable named `makeServerRequest`.

```js
assert(makeServerRequest instanceof Promise);
```

Your promise should receive a function with `resolve` and `reject` as parameters.

```js
assert(
  code.match(
    /Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g
  )
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```
