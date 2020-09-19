---
id: 5cdafbd72913098997531681
title: Handle a Fulfilled Promise with then
challengeType: 1
forumTopicId: 301203
---

## Description
<section id='description'>
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the <code>then</code> method. The <code>then</code> method is executed immediately after your promise is fulfilled with <code>resolve</code>. Here’s an example:

```js
myPromise.then(result => {
  // do something with the result.
});
```

<code>result</code> comes from the argument given to the <code>resolve</code> method.
</section>

## Instructions
<section id='instructions'>
Add the <code>then</code> method to your promise. Use <code>result</code> as the parameter of its callback function and log <code>result</code> to the console.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should call the <code>then</code> method on the promise.
    testString: assert(__helpers.removeWhiteSpace(code).match(/(makeServerRequest|\))\.then\(/g));
  - text: Your <code>then</code> method should have a callback function with <code>result</code> as its parameter.
    testString: assert(resultIsParameter);
  - text: You should log <code>result</code> to the console.
    testString: assert(resultIsParameter && __helpers.removeWhiteSpace(code).match(/\.then\(.*?result.*?console.log\(result\).*?\)/));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});
```

</div>

### After Test
<div id='js-teardown'>

```js
const resultIsParameter = /\.then\((function\(result\){|result|\(result\)=>)/.test(__helpers.removeWhiteSpace(code));
```

</div>
</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
	
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

</section>
