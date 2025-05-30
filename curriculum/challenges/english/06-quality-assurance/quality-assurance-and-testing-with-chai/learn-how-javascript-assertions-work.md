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
- Use a site builder of your choice to complete the project. Be sure to incorporate all the files from our GitHub repo.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#1` in the `Basic Assertions` suite, change each `assert` to either `assert.isNull` or `assert.isNotNull` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 0);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the first assertion - `isNull` vs. `isNotNull`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 0);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the second assertion - `isNull` vs. `isNotNull`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 0);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
