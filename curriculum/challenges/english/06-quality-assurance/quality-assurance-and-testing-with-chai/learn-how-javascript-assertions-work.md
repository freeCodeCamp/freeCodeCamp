---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

Start this project on Repl.it using <a rel='noopener noreferrer' target='_blank' href='https://repl.it/github/freeCodeCamp/boilerplate-mochachai'>this link</a> or clone <a rel='noopener noreferrer' target='_blank' href='https://github.com/freeCodeCamp/boilerplate-mochachai/'>this repository</a> on GitHub. If you use Repl.it, remember to save the link to your project somewhere safe.

# --instructions--

Within `tests/1_unit-tests.js` under the test labelled `#1` in the `Basic Assertions` suite, change each `assert` to either `assert.isNull` or `assert.isNotNull` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the first assertion - `isNull` vs. `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

You should choose the correct method for the second assertion - `isNull` vs. `isNotNull`.

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
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
