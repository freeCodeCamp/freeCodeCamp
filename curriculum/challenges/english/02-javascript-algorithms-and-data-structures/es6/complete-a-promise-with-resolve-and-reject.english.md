---
id: 5cdafbc32913098997531680
title: Complete a Promise with Resolve and Reject
challengeType: 1
---

## Description
<section id='description'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
A promise has three states: <code>pending</code>, <code>fulfilled</code>, and <code>rejected</code>. The promise you created in the last challenge is forever stuck in the <code>pending</code> state because you did not add a way to complete the promise. The <code>resolve</code> and <code>reject</code> parameters given to the promise argument are used to do this. <code>resolve</code> is used when you want your promise to succeed, and <code>reject</code> is used when you want it to fail. These are methods that take an argument, as seen below.

```js
const myPromise = new Promise((resolve, reject) => {
  if(true) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
=======
A promise has three states: <code>pending</code>, <code>fulfilled</code>, and <code>rejected</code>. The promise you created in the last challenge is forever stuck in the <code>pending</code> state because you did add a way to complete the promise. The two parameters given to the promise function are used to do this. <code>resolve</code> is used when you want your promise to succeed, and <code>reject</code> is used when you want it to fail. These are functions that take an argument as seen below.
=======
A promise has three states: <code>pending</code>, <code>fulfilled</code>, and <code>rejected</code>. The promise you created in the last challenge is forever stuck in the <code>pending</code> state because you did add a way to complete the promise. The <code>resolve</code> and <code>reject</code> parameters given to the promise argument are used to do this. <code>resolve</code> is used when you want your promise to succeed, and <code>reject</code> is used when you want it to fail. These are methods that take an argument, as seen below.
>>>>>>> 396e6142b... fix/update-verbiage
=======
A promise has three states: <code>pending</code>, <code>fulfilled</code>, and <code>rejected</code>. The promise you created in the last challenge is forever stuck in the <code>pending</code> state because you did not add a way to complete the promise. The <code>resolve</code> and <code>reject</code> parameters given to the promise argument are used to do this. <code>resolve</code> is used when you want your promise to succeed, and <code>reject</code> is used when you want it to fail. These are methods that take an argument, as seen below.
>>>>>>> aac94c586... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/complete-a-promise-with-resolve-and-reject.english.md

```js
const myPromise = new Promise((resolve, reject) => {
<<<<<<< HEAD
	if(true) {
		resolve("Promise was fulfilled");
	} else {
		reject("Promise was rejected");
	}
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
  if(true) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
>>>>>>> d3ba2b0ff... fix/replace-tab-with-spaces
});
```

The example above uses strings for the argument of these functions, but it can really be anything. Often, it might be an object that you would use data from to put on your website or elsewhere.
</section>

## Instructions
<section id='instructions'>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
Make the promise handle success and failure.  If <code>responseFromServer</code> is <code>true</code>, call the <code>resolve</code> method to successfully complete the promise. Pass <code>resolve</code> a string with the value <code>We got the data</code>.  If <code>responseFromServer</code> is <code>false</code>, use the <code>reject</code> method instead and pass it the string: <code>Data not received</code>.
=======
Use the <code>resolve</code> function if the condition is true to fulfill the promise. Pass it the string: <code>We got the data.</code> as its argument. Use the <code>reject</code> function if condition is not true and pass it the string: <code>Data not received.</code>.
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
Use the <code>resolve</code> method if the condition given is true to fulfill the promise. Pass it the string: <code>We got the data.</code> as its argument. Use the <code>reject</code> method if condition is not true and pass it the string: <code>Data not received.</code>.
>>>>>>> 396e6142b... fix/update-verbiage
=======
Use the <code>resolve</code> method if the condition given is true to fulfill the promise. Pass it a string with the value <code>We got the data</code>. Use the <code>reject</code> method if condition is false and pass it the string: <code>Data not received</code>.
>>>>>>> 8dec9d7c7... fix/add-tests-rename-files
=======
Make the promise handle success and failure.  If <code>responseFromServer</code> is <code>true</code>, call the <code>resolve</code> method to successfully complete the promise. Pass <code>resolve</code> a string with the value <code>We got the data</code>.  If the condition is <code>false</code>, use the <code>reject</code> method instead and pass it the string: <code>Data not received</code>.
>>>>>>> 3fa1528b7... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/complete-a-promise-with-resolve-and-reject.english.md
=======
Make the promise handle success and failure.  If <code>responseFromServer</code> is <code>true</code>, call the <code>resolve</code> method to successfully complete the promise. Pass <code>resolve</code> a string with the value <code>We got the data</code>.  If <code>responseFromServer</code> is <code>false</code>, use the <code>reject</code> method instead and pass it the string: <code>Data not received</code>.
>>>>>>> 017c4ec24... fix/add-suggested-change-to-instructions
</section>

## Tests
<section id='tests'>

```yml
tests:
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  - text: <code>resolve</code> should be executed when the <code>if</code> condition is <code>true</code>.
    testString: assert(removeJSComments(code).match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g));
  - text: <code>reject</code> should be executed when the <code>if</code> condition is <code>false</code>.
    testString: assert(removeJSComments(code).match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g));
=======
  - text: <code>var</code> should not exist in code.
=======
  - text: You should properly add a <code>resolve</code> method.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'<code>var</code> should not exist in code.');
  - text: You should properly add a <code>reject</code> method.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'<code>var</code> should not exist in code.');
  - text: <code>resolve</code> is executed when the <code>if</code> condition is true.
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'<code>var</code> should not exist in code.');
  - text: <code>reject</code> is executed when the <code>if</code> condition is not true.
>>>>>>> 396e6142b... fix/update-verbiage
    testString: getUserInput => assert(!getUserInput('index').match(/var/g),'<code>var</code> should not exist in code.');
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
  - text: <code>resolve</code> should be executed when the <code>if</code> condition is <code>true</code>.
    testString: assert(removeJSComments(code).match(/if\s*\(\s*responseFromServer\s*\)\s*{\s*resolve\s*\(\s*('|"|`)We got the data\1\s*\)(\s*|\s*;\s*)}/g));
  - text: <code>reject</code> should be executed when the <code>if</code> condition is <code>false</code>.
    testString: assert(removeJSComments(code).match(/}\s*else\s*{\s*reject\s*\(\s*('|"|`)Data not received\1\s*\)(\s*|\s*;\s*)}/g));
>>>>>>> 8dec9d7c7... fix/add-tests-rename-files
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// responseFromServer represents a response from a server
let responseFromServer;
	
  if(responseFromServer) {
    // change this line
  } else {	
    // change this line
  }
=======
	const success = true;
=======
	const responseFromServer = true;
>>>>>>> 396e6142b... fix/update-verbiage
	
	if(responseFromServer) {
		// change this line
	} else {	
		// change this line
	}
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
  const responseFromServer = true;
=======
// responseFromServer represents a response from a server
let responseFromServer;
>>>>>>> 466610bc8... Update curriculum/challenges/english/02-javascript-algorithms-and-data-structures/es6/complete-a-promise-with-resolve-and-reject.english.md
	
  if(responseFromServer) {
    // change this line
  } else {	
    // change this line
  }
>>>>>>> d3ba2b0ff... fix/replace-tab-with-spaces
});
```

</div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8dec9d7c7... fix/add-tests-rename-files

### After Test
<div id='js-teardown'>

```js
const removeJSComments = str => str.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, '');
```

</div>
<<<<<<< HEAD
=======
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
>>>>>>> 8dec9d7c7... fix/add-tests-rename-files
</section>

## Solution
<section id='solution'>

```js
const makeServerRequest = new Promise((resolve, reject) => {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// responseFromServer represents a response from a server
let responseFromServer;
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
    reject("Data not received");
=======
	const success = true;
=======
	const responseFromServer = true;
>>>>>>> 396e6142b... fix/update-verbiage
=======
  const responseFromServer = true;
>>>>>>> d3ba2b0ff... fix/replace-tab-with-spaces
=======
// responseFromServer represents a response from a server
let responseFromServer;
>>>>>>> 5a10880b6... fix/add-suggested-changes-to-seeds-and-solutions
	
  if(responseFromServer) {
    resolve("We got the data");
  } else {	
<<<<<<< HEAD
    reject("Data not received.");
>>>>>>> 5aba19817... feat/new-lessons-on-js-promises
=======
    reject("Data not received");
>>>>>>> 8dec9d7c7... fix/add-tests-rename-files
  }
});
```

</section>
