---
id: 587d824f367417b2b2512c5c
title: Run Functional Tests using a Headless Browser
challengeType: 2
forumTopicId: 301595
---

## Description

<section id='description'>

As a reminder, this project is being built upon the following starter project on <a href="https://repl.it/github/freeCodeCamp/boilerplate-mochachai">Repl.it</a>, or cloned from <a href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>GitHub</a>.

In the next challenges we are going to simulate the human interaction with a page using a device called 'Headless Browser'.

A headless browser is a web browser without a graphical user interface. This kind of tool is particularly useful for testing web pages, as it is able to render and understand HTML, CSS, and JavaScript the same way a browser would.

For these challenges we are using Zombie.JS. It's a lightweight browser which is totally based on JS, without relying on additional binaries to be installed. This feature makes it usable in an environment such as Repl.it. There are many other (more powerful) options.

Mocha allows You to prepare the ground running some code before the actual tests. This can be useful for example to create items in the database, which will be used in the successive tests.

With a headless browser, before the actual testing, we need to **visit** the page we are going to inspect. The `suiteSetup` 'hook' is executed only once at the suite startup. Other different hook types can be executed before each test, after each test, or at the end of a suite. See the Mocha docs for more information.

</section>

## Instructions

<section id='instructions'>

Within `tests/2_functional-tests.js`, immediately after the `Browser` declaration, add your project URL to the `site` property of the variable:

```js
Browser.site = 'https://sincere-cone.gomix.me'; // Your URL here
```

If you are testing on a local environment replace the line above with

```js
Browser.localhost('example.com', process.env.PORT || 3000);
```

Within `tests/2_functional-tests.js`, at the root level of the `'e2e Testing with Zombie.js'` suite, instantiate a new instance of the `Browser` object with the following code:

```js
const browser = new Browser();
```

Then, use the `suiteSetup` hook to direct the `browser` to the `/` route with the following code:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: All tests should pass.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.state,'passed'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the headless browser request succeeded.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[0].method, 'browser.success'); }, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the text inside the element 'span#name' is 'Cristoforo'.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[1].method, 'browser.text'); assert.match(data.assertions[1].args[0], /('|")span#name\1/); assert.match(data.assertions[1].args[1], /('|")Marco\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the text inside the element 'span#surname' is 'Colombo'.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[2].method, 'browser.text'); assert.match(data.assertions[2].args[0], /('|")span#surname\1/); assert.match(data.assertions[2].args[1], /('|")Polo\1/);}, xhr => { throw new Error(xhr.responseText); })
  - text: You should assert that the element 'span#dates' exist and its count is 1.
    testString: getUserInput => $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(data => { assert.equal(data.assertions[3].method, 'browser.element'); assert.match(data.assertions[3].args[0], /('|")span#dates\1/); assert.equal(data.assertions[3].args[1], 1);}, xhr => { throw new Error(xhr.responseText); })
```

</section>

## Challenge Seed

<section id='challengeSeed'>

</section>

## Solution

<section id='solution'>

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```

</section>
