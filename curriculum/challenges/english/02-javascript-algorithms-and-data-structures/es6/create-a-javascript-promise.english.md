---
id: 5cdafbb0291309899753167f
title: Create a JavaScript Promise
challengeType: 1
isHidden: false
forumTopicId: 301197
---

## Description
<section id='description'>
A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. <code>Promise</code> is a constructor function, so you need to use the <code>new</code> keyword to create one. It takes a function, as its argument, with two parameters - <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:

```js
const myPromise = new Promise((resolve, reject) => {

});
```

</section>

## Instructions
<section id='instructions'>
Create a new promise called <code>makeServerRequest</code>. Pass in a function with <code>resolve</code> and <code>reject</code> parameters to the constructor.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should assign a promise to a declared variable named <code>makeServerRequest</code>.
    testString: assert(makeServerRequest instanceof Promise);
  - text: Your promise should receive a function with <code>resolve</code> and <code>reject</code> as parameters.
    testString: assert(code.match(/Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g));
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js

```

</div>
</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {

});
```

</section>
