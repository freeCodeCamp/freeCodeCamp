---
id: 587d824c367417b2b2512c4d
title: Compare the Properties of Two Elements
challengeType: 2
forumTopicId: 301588
dashedName: compare-the-properties-of-two-elements
---

# --description--

As a reminder, this project is being built upon the following starter project cloned from <a href="https://github.com/freeCodeCamp/boilerplate-mochachai/" target="_blank" rel="noopener noreferrer nofollow">GitHub</a>.

# --instructions--

Within `tests/1_unit-tests.js` under the test labeled `#8` in the `Comparisons` suite, change each `assert` to either `assert.isAbove` or `assert.isAtMost` to make the test pass (should evaluate to `true`). Do not alter the arguments passed to the asserts.

# --hints--

All tests should pass.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 7);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.state, 'passed');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the first assertion - `isAbove` vs. `isAtMost`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 7);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[0].method, 'isAtMost', '5 is at most (<=) 5');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the second assertion - `isAbove` vs. `isAtMost`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 7);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0');
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the third assertion - `isAbove` vs. `isAtMost`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 7);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(
      data.assertions[2].method,
      'isAbove',
      'Math.PI = 3.14159265 is greater than 3'
    );
  })
  .catch(error => {
    throw new Error(error.message);
  });
```

You should choose the correct method for the fourth assertion - `isAbove` vs. `isAtMost`.

```js
const params = new URLSearchParams();
params.append('type', 'unit');
params.append('n', 7);
fetch(code + `/_api/get-tests?${params}`)
  .then(response => response.json())
  .then(data => {
    assert.equal(
      data.assertions[3].method,
      'isAtMost',
      '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'
    );
  })
  .catch(error => {
    throw new Error(error.message);
  });
```
