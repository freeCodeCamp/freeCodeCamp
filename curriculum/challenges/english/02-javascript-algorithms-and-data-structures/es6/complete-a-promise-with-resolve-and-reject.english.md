---
id: 5cdafbc32913098997531680
title: Complete a Promise with resolve and reject
challengeType: 1
forumTopicId: 301196
---

## Description
<section id='description'>
A promise has three states: <code>pending</code>, <code>fulfilled</code>, and <code>rejected</code>. The promise you created in the last challenge is forever stuck in the <code>pending</code> state because you did not add a way to complete the promise. The <code>resolve</code> and <code>reject</code> parameters given to the promise argument are used to do this. <code>resolve</code> is used when you want your promise to succeed, and <code>reject</code> is used when you want it to fail. These are methods that take an argument, as seen below.

```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object, that you would use data from, to put on your website or elsewhere.
</section>

## Instructions
<section id='instructions'>
Make the promise handle success and failure.  If <code>responseFromServer</code> is <code>true</code>, call the <code>resolve</code> method to successfully complete the promise. Pass <code>resolve</code> a string with the value <code>We got the data</code>.  If <code>responseFromServer</code> is <code>false</code>, use the <code>reject</code> method instead and pass it the string: <code>Data not received</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>resolve</code> should be called with the expected string when the <code>if</code> condition is <code>true</code>.
    testString: assert(__helpers.removeJSComments(code).match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g));
  - text: <code>reject</code> should be called with the expected string when the <code>if</code> condition is <code>false</code>.
    testString: assert(__helpers.removeJSComments(code).match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
	
  if(responseFromServer) {
    // Change this line
  } else {	
    // Change this line
  }
});
```

</div>

</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
  }
});
```

</section>
