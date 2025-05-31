---
id: 587d824c367417b2b2512c4c
title: Assert Deep Equality with .deepEqual and .notDeepEqual
challengeType: 2
forumTopicId: 301587
dashedName: assert-deep-equality-with--deepequal-and--notdeepequal
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

`deepEqual()` asserts that two objects are deep equal.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#7` in the `Equality` suite, change each `assert` to either `assert.deepEqual` or `assert.notDeepEqual` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the first assertion - `deepEqual` vs. `notDeepEqual`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(
      data.assertions[0].method,
      'deepEqual',
      'The order of the keys does not matter'
    );
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the second assertion - `deepEqual` vs. `notDeepEqual`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 6);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(
      data.assertions[1].method,
      'notDeepEqual',
      'The position of elements within an array does matter'
    );
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
