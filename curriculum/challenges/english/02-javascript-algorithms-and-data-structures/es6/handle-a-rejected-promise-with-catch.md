---
id: 5cdafbe72913098997531682
title: Handle a Rejected Promise with catch
challengeType: 1
forumTopicId: 301204
---

## Description

<section id='description'>

`catch` is the method used when your promise has been rejected. It is executed immediately after a promise's `reject` method is called. Here’s the syntax:

```js
myPromise.catch(error => {
  // do something with the error.
});
```

`error` is the argument passed in to the `reject` method.

</section>

## Instructions

<section id='instructions'>

Add the `catch` method to your promise. Use `error` as the parameter of its callback function and log `error` to the console.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: You should call the <code>catch</code> method on the promise.
    testString: assert(__helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.catch\(/g));
  - text: Your <code>catch</code> method should have a callback function with <code>error</code> as its parameter.
    testString: assert(errorIsParameter);
  - text: You should log <code>error</code> to the console.
    testString: assert(errorIsParameter && __helpers.removeWhiteSpace(code).match(/\.catch\(.*?error.*?console.log\(error\).*?\)/));
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

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
```

</div>

### After Test

<div id='js-teardown'>

```js
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(__helpers.removeWhiteSpace(code));
```

</div>

</section>

## Solution

<section id='solution'>

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
```

</section>
