---
id: ❓
title: Complete a Promise with finally
challengeType: 1
forumTopicId: ❓
dashedName: complete-a-promise-with-finally
---

# --description--

The `finally` method of a Promise object schedules a function to be called when the promise is `settled` (either `fulfilled` or `rejected`). It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.

This lets you avoid duplicating code in both the promise's `then` and `catch` handlers.

Here’s the syntax:

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

myPromise.finally(() => {
  
});
```

no arguments passed in to the `finally` method.

# --instructions--

Add the `finally` method to your promise. Not use any parameter of its callback function and log `finally` to the console.

# --hints--

You should call the `finally` method on the promise.

```js
assert(
  __helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.finally\(/g)
);
```

Your `finally` method should have a callback function without parameter.

```js
assert(emptyIsParameter);
```

You should log `finally` to the console.

```js
assert(
  emptyIsParameter &&
    __helpers
      .removeWhiteSpace(code)
      .match(/\.finally\(.*?empty.*?console.log\(finally\).*?\)/)
);
```

# --seed--

## --after-user-code--

```js
const emptyIsParameter = /\.finally\((function\(empty\){|empty|\(empty\)=>)/.test(__helpers.removeWhiteSpace(code));
```


## --seed-contents--

```js

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

// Only change code below this line

```

# --solutions--

```js

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

makeServerRequest.catch(error => {
  console.log(error);
});

makeServerRequest.finally(() => {
  console.log("finally");
});

```
