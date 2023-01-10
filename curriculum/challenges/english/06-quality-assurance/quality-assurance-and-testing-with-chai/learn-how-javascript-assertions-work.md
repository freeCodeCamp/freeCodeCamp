---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

Working on these challenges will involve you writing your code using one of the following methods:

- Clone <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">this GitHub repo</a> and complete these challenges locally.
- Use <a href="https://replit.com/github/freeCodeCamp/boilerplate-mochachai" target="_blank" rel="noopener noreferrer nofollow">our Replit starter project</a> to complete these challenges.
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

If you use Replit, follow these steps to set up the project:

-   Start by importing the project on Replit. 
-   Next, you will see a `.replit` window. 
-   Select `Use run command` and click the `Done` button. 

When you are done, make sure a working demo of your project is hosted somewhere public. Then submit the URL to it in the Solution Link field.

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
