---
id: 5cdafbe72913098997531682
title: Handle a Rejected Promise with catch
challengeType: 1
isHidden: false
forumTopicId: 301204
---

## Description
<section id='description'>
<code>catch</code> is the method used when your promise has been rejected. It is executed immediately after a promise's <code>reject</code> method is called. Here’s the syntax:

```js
myPromise.catch(error => {
  // do something with the error.
});
```

<code>error</code> is the argument passed in to the <code>reject</code> method.

<strong>Note:</strong> the <code>then</code> and <code>catch</code> methods can be chained to the promise declaration if you choose.
</section>

## Instructions
<section id='instructions'>
Add the <code>catch</code> method to your promise. Use <code>error</code> as the parameter of its callback function and log <code>error</code> to the console.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should call the <code>catch</code> method on the promise.
    testString: assert(codeWithoutSpaces.match(/(makeServerRequest|\))\.catch\(/g));
  - text: Your <code>catch</code> method should have a callback function with <code>error</code> as its parameter.
    testString: assert(errorIsParameter);
  - text: You should log <code>error</code> to the console.
    testString: assert(errorIsParameter && codeWithoutSpaces.match(/\.catch\(.*?error.*?console.log\(error\).*?\)/));
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
const codeWithoutSpaces = code.replace(/\s/g, '');
const errorIsParameter = /\.catch\((function\(error\){|error|\(error\)=>)/.test(codeWithoutSpaces);
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
