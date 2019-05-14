---
id: 5cdafbb0291309899753167f
<<<<<<< HEAD
<<<<<<< HEAD
title: Create a JavaScript Promise
=======
title: Create a Javascript Promise
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
title: Create a JavaScript Promise
>>>>>>> bed9cbc73... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/create-a-javascript-promise.english.md
challengeType: 1
---

## Description
<section id='description'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
A promise in JavaScript is exactly what it sounds like. You use it to make a promise to do something, usually asynchronously. When the task completes you either fulfill your promise or fail to do so. <code>Promise</code> is a constructor function so you need to use the <code>new</code> keyword to create one. It takes a function as its argument with two parameters, <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:
=======
A promise in javascript is exactly what it sounds like. You use it to make a promise to do something, and at some point you either fulfill your promise or fail to do so. It’s a constructor function, so they are create with the <code>new</code> keyword. It needs a function as its argument with two parameters, <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
A promise in javascript is exactly what it sounds like. You use it to make a promise to do something, usually asynchronous. When the task completes you either fulfill your promise or fail to do so. It’s a constructor function, so they are created with the <code>new</code> keyword. It needs a function as its argument with two parameters, <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:
>>>>>>> 396e6142b... fix/update-verbiage
=======
A promise in JavaScript is exactly what it sounds like. You use it to make a promise to do something, usually asynchronously. When the task completes you either fulfill your promise or fail to do so. <code>Promise</code> is a constructor function so you need to use the <code>new</code> keyword to create one. It needs a function as its argument with two parameters, <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:
>>>>>>> d86e97264... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/create-a-javascript-promise.english.md
=======
A promise in JavaScript is exactly what it sounds like. You use it to make a promise to do something, usually asynchronously. When the task completes you either fulfill your promise or fail to do so. <code>Promise</code> is a constructor function so you need to use the <code>new</code> keyword to create one. It takes a function as its argument with two parameters, <code>resolve</code> and <code>reject</code>. These are methods used to determine the outcome of the promise. The syntax looks like this:
>>>>>>> 915a966f1... fix/change-needs-to-takes-in-instructions

```js
const myPromise = new Promise((resolve, reject) => {

});
```

</section>

## Instructions
<section id='instructions'>
<<<<<<< HEAD
<<<<<<< HEAD
Create a new promise called <code>makeServerRequest</code>. Pass in a function with <code>resolve</code> and <code>reject</code> parameters to the constructor.
=======
Create a new promise called <code>makeServerRequest</code>. Pass in a function with <code>resolve</code> and <code>reject</code> parameters to the promise.
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
Create a new promise called <code>makeServerRequest</code>. Pass in a function with <code>resolve</code> and <code>reject</code> parameters to the constructor.
>>>>>>> 79a812601... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/create-a-javascript-promise.english.md
</section>

## Tests
<section id='tests'>

```yml
tests:
<<<<<<< HEAD
<<<<<<< HEAD
  - text: You should assign a promise to a declared variable named <code>makeServerRequest</code>.
    testString: assert(makeServerRequest instanceof Promise);
  - text: Your promise should receive a function with <code>resolve</code> and <code>reject</code> as parameters.
    testString: assert(code.match(/Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g));
=======
  - text: Your promise should be in a variable called <code>makeServerRequest</code>.
=======
  - text: You should assign a promise to a declared variable named <code>makeServerRequest</code>.
>>>>>>> 8f4cfb0e5... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/create-a-javascript-promise.english.md
    testString: assert(makeServerRequest instanceof Promise);
  - text: Your promise should receive a function with <code>resolve</code> and <code>reject</code> as parameters.
<<<<<<< HEAD
<<<<<<< HEAD
    testString: assert(typeof(makeServerRequest) === "object" && (code.match(/new\s*Promise\(\s*\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{/g) || code.match(/new\s*Promise\s*\(\s*function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{/g)));
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
    testString: assert(makeServerRequest instanceof Promise && (code.match(/new\s*Promise\(\s*\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{/g) || code.match(/new\s*Promise\s*\(\s*function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{/g)));
>>>>>>> 066e1792e... fix/add-tests
=======
    testString: assert(code.match(/Promise\(\s*(function\s*\(\s*resolve\s*,\s*reject\s*\)\s*{|\(\s*resolve\s*,\s*reject\s*\)\s*=>\s*{)[^}]*}/g));
>>>>>>> 2a76bf50c... fix/make-tests-more-robust
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======

>>>>>>> 2a76bf50c... fix/make-tests-more-robust
```

</div>
</section>

## Solution
<section id='solution'>

```js
<<<<<<< HEAD
<<<<<<< HEAD
const makeServerRequest = new Promise((resolve, reject) => {
=======
makeServerRequest = new Promise((resolve, reject) => {
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
const makeServerRequest = new Promise((resolve, reject) => {
>>>>>>> e40baddf2... fix/solution-to-pass-tests

});
```
</section>
