---
id: 587d824f367417b2b2512c5c
title: Simulate Actions Using a Headless Browser
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

As a reminder, this project is being built upon the following starter project on [Repl.it](https://repl.it/github/freeCodeCamp/boilerplate-mochachai), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/).

In the next challenges we are going to simulate the human interaction with a page using a device called 'Headless Browser'.

A headless browser is a web browser without a graphical user interface. This kind of tool is particularly useful for testing web pages, as it is able to render and understand HTML, CSS, and JavaScript the same way a browser would.

For these challenges we are using Zombie.JS. It's a lightweight browser which is totally based on JS, without relying on additional binaries to be installed. This feature makes it usable in an environment such as Repl.it. There are many other (more powerful) options.

Mocha allows you to prepare the ground running some code before the actual tests. This can be useful for example to create items in the database, which will be used in the successive tests.

With a headless browser, before the actual testing, we need to **visit** the page we are going to inspect. The `suiteSetup` 'hook' is executed only once at the suite startup. Other different hook types can be executed before each test, after each test, or at the end of a suite. See the Mocha docs for more information.

# --instructions--

Within `tests/2_functional-tests.js`, immediately after the `Browser` declaration, add your project URL to the `site` property of the variable:

```js
Browser.site = 'https://sincere-cone.gomix.me'; // Your URL here
```

If you are testing on a local environment replace the line above with

```js
Browser.localhost('example.com', process.env.PORT || 3000);
```

Within `tests/2_functional-tests.js`, at the root level of the `'Functional Tests with Zombie.js'` suite, instantiate a new instance of the `Browser` object with the following code:

```js
const browser = new Browser();
```

Then, use the `suiteSetup` hook to direct the `browser` to the `/` route with the following code:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional').then(
    (data) => {
      data.slice(0, 4).forEach((test) => {
        assert.equal(test.state, 'passed');
      })
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
