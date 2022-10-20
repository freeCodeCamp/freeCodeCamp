---
id: 587d824f367417b2b2512c5c
title: Simulate Actions Using a Headless Browser
challengeType: 2
dashedName: simulate-actions-using-a-headless-browser
---

# --description--

As a reminder, this project is being built upon the following starter project on <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">Replit</a>, or cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

In the next challenges, you'll simulate human interaction with a page by using a headless browser.

Headless browsers are web browsers without a GUI. They are able to render and interpret HTML, CSS, and JavaScript the same way a regular browser would, making them particularly useful for testing web pages.

For the following challenges you'll use Zombie.js, which is a lightweight headless browser that doesn't rely on additional binaries to be installed. This feature makes it usable in limited environments like Replit. But there are many other, more powerful headless browser options.

Mocha allows you to run some code before any of the actual tests run. This can be useful to do things like add entries to a database which will be used in the rest of the tests.

With a headless browser, before running tests, you need to **visit** the page you'll test.

The `suiteSetup` hook is executed only once at the beginning of a test suite.

There are several other hook types that can execute code before each test, after each test, or at the end of a test suite. See the Mocha docs for more information.

# --instructions--

Within `tests/2_functional-tests.js`, immediately after the `Browser` declaration, add your project URL to the `site` property of the variable:

```js
Browser.site = 'https://boilerplate-mochachai.your-username.repl.co'; // Your URL here
```

Then at the root level of the `'Functional Tests with Zombie.js'` suite, instantiate a new instance of the `Browser` object with the following code:

```js
const browser = new Browser();
```

And use the `suiteSetup` hook to direct the `browser` to the `/` route with the following code:

```js
suiteSetup(function(done) {
  return browser.visit('/', done);
});
```

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=4').then(
    (data) => {
      assert.equal(data.state, 'passed');
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
